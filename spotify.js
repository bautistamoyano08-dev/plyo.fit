// ── Spotify Web API + OAuth PKCE ─────────────────────────────────────────────
// Requiere servir la app por HTTPS (GitHub Pages) o http://localhost. NO
// funciona desde file://. Pega tu Client ID abajo tras registrar la app en
// https://developer.spotify.com/dashboard y añade como Redirect URI exacto:
//   <origin>/<ruta>/spotify-callback.html
// (el mismo valor que imprime SPOTIFY_REDIRECT_URI en la consola al cargar).

const SPOTIFY_CLIENT_ID = 'PEGA_AQUI_TU_CLIENT_ID';
window.SPOTIFY_CLIENT_ID = SPOTIFY_CLIENT_ID;

const SPOTIFY_REDIRECT_URI = (() => {
  const { origin, pathname } = window.location;
  const dir = pathname.replace(/[^/]*$/, '');
  return `${origin}${dir}spotify-callback.html`;
})();

const SPOTIFY_SCOPES = [
  'user-read-playback-state',
  'user-modify-playback-state',
  'user-read-currently-playing',
  'playlist-read-private'
].join(' ');

const SP_LS = {
  access:   'sp_access_token',
  refresh:  'sp_refresh_token',
  expires:  'sp_expires_at',
  verifier: 'sp_code_verifier'
};

const spState = {
  pollId: null,
  current: null,      // último payload de /currently-playing
  progressTimer: null,
  progressMs: 0,
  durationMs: 0,
  playing: false,
  devices: [],
  activeDeviceId: null,
  playlists: null
};

// ── PKCE helpers ──────────────────────────────────────────────────────────────

function spRandomString(length) {
  const arr = new Uint8Array(length);
  crypto.getRandomValues(arr);
  return Array.from(arr, b => ('0' + (b & 0xff).toString(16)).slice(-2)).join('');
}

async function spSha256Base64Url(str) {
  const data   = new TextEncoder().encode(str);
  const digest = await crypto.subtle.digest('SHA-256', data);
  const bytes  = new Uint8Array(digest);
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

// ── Auth ──────────────────────────────────────────────────────────────────────

async function spAuthorize() {
  if (!SPOTIFY_CLIENT_ID || SPOTIFY_CLIENT_ID === 'PEGA_AQUI_TU_CLIENT_ID') {
    showToast('Configura SPOTIFY_CLIENT_ID en spotify.js');
    return;
  }
  const verifier  = spRandomString(64);
  const challenge = await spSha256Base64Url(verifier);
  localStorage.setItem(SP_LS.verifier, verifier);

  const params = new URLSearchParams({
    client_id:             SPOTIFY_CLIENT_ID,
    response_type:         'code',
    redirect_uri:          SPOTIFY_REDIRECT_URI,
    code_challenge_method: 'S256',
    code_challenge:        challenge,
    scope:                 SPOTIFY_SCOPES
  });
  window.location.href = `https://accounts.spotify.com/authorize?${params}`;
}

async function spRefreshToken() {
  const refresh = localStorage.getItem(SP_LS.refresh);
  if (!refresh) throw new Error('no refresh token');

  const body = new URLSearchParams({
    grant_type:    'refresh_token',
    refresh_token: refresh,
    client_id:     SPOTIFY_CLIENT_ID
  });
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method:  'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body
  });
  if (!res.ok) throw new Error('refresh failed ' + res.status);
  const data = await res.json();
  localStorage.setItem(SP_LS.access, data.access_token);
  localStorage.setItem(SP_LS.expires, String(Date.now() + data.expires_in * 1000));
  if (data.refresh_token) localStorage.setItem(SP_LS.refresh, data.refresh_token);
  return data.access_token;
}

async function spGetValidToken() {
  const token   = localStorage.getItem(SP_LS.access);
  const expires = Number(localStorage.getItem(SP_LS.expires) || 0);
  if (token && Date.now() < expires - 60_000) return token;
  return spRefreshToken();
}

function spIsConnected() {
  return !!localStorage.getItem(SP_LS.refresh);
}

function spDisconnect() {
  Object.values(SP_LS).forEach(k => localStorage.removeItem(k));
  spStopPolling();
  spState.current = null;
  renderSpotifyPanel();
}

// ── API wrapper ───────────────────────────────────────────────────────────────

async function spFetch(path, init = {}) {
  const token = await spGetValidToken();
  const res = await fetch(`https://api.spotify.com/v1${path}`, {
    ...init,
    headers: {
      ...(init.headers || {}),
      Authorization: `Bearer ${token}`,
      ...(init.body && !init.headers?.['Content-Type']
            ? { 'Content-Type': 'application/json' } : {})
    }
  });
  if (res.status === 401) {
    await spRefreshToken();
    return spFetch(path, init);
  }
  if (res.status === 204) return null;
  if (!res.ok) {
    if (res.status === 403) showToast('Spotify: se requiere Premium');
    if (res.status === 404) showToast('No hay un dispositivo activo en Spotify');
    throw new Error(`spotify ${res.status}`);
  }
  return res.json();
}

const spGetCurrent   = () => spFetch('/me/player/currently-playing');
const spGetPlayback  = () => spFetch('/me/player');
const spGetDevices   = () => spFetch('/me/player/devices');
const spGetPlaylists = () => spFetch('/me/playlists?limit=50');

async function spPlay(contextUri) {
  const body = contextUri ? JSON.stringify({ context_uri: contextUri }) : undefined;
  await spFetch('/me/player/play', { method: 'PUT', body });
}
const spPause = () => spFetch('/me/player/pause', { method: 'PUT' });
const spNext  = () => spFetch('/me/player/next',  { method: 'POST' });
const spPrev  = () => spFetch('/me/player/previous', { method: 'POST' });
const spSeek  = (ms) => spFetch(`/me/player/seek?position_ms=${Math.floor(ms)}`, { method: 'PUT' });

async function spTransfer(deviceId) {
  await spFetch('/me/player', {
    method: 'PUT',
    body:   JSON.stringify({ device_ids: [deviceId], play: spState.playing })
  });
}

// ── Polling ───────────────────────────────────────────────────────────────────

function spStartPolling() {
  if (!spIsConnected() || spState.pollId) return;
  spPollOnce();
  spState.pollId = setInterval(() => {
    if (document.visibilityState === 'visible') spPollOnce();
  }, 3000);
  if (!spState.progressTimer) {
    spState.progressTimer = setInterval(spAdvanceProgress, 1000);
  }
}

function spStopPolling() {
  if (spState.pollId) { clearInterval(spState.pollId); spState.pollId = null; }
  if (spState.progressTimer) { clearInterval(spState.progressTimer); spState.progressTimer = null; }
}

async function spPollOnce() {
  try {
    const pb = await spGetPlayback();
    if (!pb || !pb.item) {
      spState.current = null;
      spState.playing = false;
      renderSpotifyPanel();
      return;
    }
    spState.current        = pb.item;
    spState.playing        = !!pb.is_playing;
    spState.progressMs     = pb.progress_ms || 0;
    spState.durationMs     = pb.item.duration_ms || 0;
    spState.activeDeviceId = pb.device && pb.device.id;
    renderSpotifyPanel();
  } catch (e) {
    // silencioso — un 401 ya lo maneja spFetch, otros errores no tumban la app
  }
}

function spAdvanceProgress() {
  if (!spState.playing || !spState.durationMs) return;
  spState.progressMs = Math.min(spState.progressMs + 1000, spState.durationMs);
  const fill = document.getElementById('sp-progress-fill');
  if (fill) fill.style.width = `${(spState.progressMs / spState.durationMs) * 100}%`;
  const cur = document.getElementById('sp-time-cur');
  if (cur) cur.textContent = spFormatTime(spState.progressMs);
}

function spFormatTime(ms) {
  const s = Math.floor(ms / 1000);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

// ── Transport wrappers (optimistic UI + poll) ────────────────────────────────

async function spUiPlayPause() {
  try {
    if (spState.playing) { await spPause(); spState.playing = false; }
    else                 { await spPlay();  spState.playing = true;  }
    renderSpotifyPanel();
    setTimeout(spPollOnce, 400);
  } catch (_) {}
}
async function spUiNext() { try { await spNext(); setTimeout(spPollOnce, 500); } catch (_) {} }
async function spUiPrev() { try { await spPrev(); setTimeout(spPollOnce, 500); } catch (_) {} }

async function spUiSeek(evt) {
  const bar = document.getElementById('sp-progress-bar');
  if (!bar || !spState.durationMs) return;
  const rect = bar.getBoundingClientRect();
  const x    = (evt.touches ? evt.touches[0].clientX : evt.clientX) - rect.left;
  const pct  = Math.max(0, Math.min(1, x / rect.width));
  const ms   = Math.floor(pct * spState.durationMs);
  spState.progressMs = ms;
  spAdvanceProgress();
  try { await spSeek(ms); } catch (_) {}
}

// ── Device picker ─────────────────────────────────────────────────────────────

async function spOpenDevicePicker() {
  try {
    const data = await spGetDevices();
    spState.devices = data.devices || [];
  } catch (_) { return; }

  const overlay = document.getElementById('sp-device-overlay');
  const list    = document.getElementById('sp-device-list');
  if (!overlay || !list) return;

  list.innerHTML = spState.devices.map(d => `
    <button class="sp-device-row" onclick="spPickDevice('${d.id}')">
      <span class="sp-device-icon">${d.type === 'Smartphone' ? '📱' : d.type === 'Computer' ? '💻' : d.type === 'Speaker' ? '🔊' : '🎧'}</span>
      <span class="flex-1 text-left">
        <span class="block font-medium">${d.name}</span>
        <span class="block text-xs text-gray-400">${d.type}${d.is_active ? ' · activo' : ''}</span>
      </span>
      ${d.is_active ? '<span class="text-green-400">●</span>' : ''}
    </button>
  `).join('') || '<p class="text-sm text-gray-400 text-center py-4">Abre Spotify en algún dispositivo primero</p>';

  overlay.classList.remove('hidden');
}

function spCloseDevicePicker() {
  document.getElementById('sp-device-overlay')?.classList.add('hidden');
}

async function spPickDevice(id) {
  spCloseDevicePicker();
  try { await spTransfer(id); showToast('Reproducción transferida'); }
  catch (_) { showToast('No se pudo transferir'); }
  setTimeout(spPollOnce, 800);
}

// ── Playlist picker ───────────────────────────────────────────────────────────

async function spOpenPlaylistPicker() {
  const overlay = document.getElementById('sp-playlist-overlay');
  const grid    = document.getElementById('sp-playlist-grid');
  if (!overlay || !grid) return;

  if (!spState.playlists) {
    grid.innerHTML = '<p class="text-sm text-gray-400 text-center py-4">Cargando…</p>';
    overlay.classList.remove('hidden');
    try {
      const data = await spGetPlaylists();
      spState.playlists = data.items || [];
    } catch (_) {
      grid.innerHTML = '<p class="text-sm text-red-400 text-center py-4">Error cargando playlists</p>';
      return;
    }
  } else {
    overlay.classList.remove('hidden');
  }

  grid.innerHTML = spState.playlists.map(p => {
    const img = (p.images && p.images[0]) ? p.images[0].url : '';
    return `
      <button class="sp-playlist-card" onclick="spPickPlaylist('${p.uri}')">
        ${img ? `<img src="${img}" alt="" loading="lazy">` : '<div class="sp-playlist-placeholder">🎵</div>'}
        <span class="sp-playlist-name">${p.name}</span>
      </button>
    `;
  }).join('');
}

function spClosePlaylistPicker() {
  document.getElementById('sp-playlist-overlay')?.classList.add('hidden');
}

async function spPickPlaylist(uri) {
  spClosePlaylistPicker();
  try {
    await spPlay(uri);
    setTimeout(spPollOnce, 600);
  } catch (_) {}
}

// ── Render ────────────────────────────────────────────────────────────────────

function renderSpotifyPanel() {
  const panel = document.getElementById('spotify-panel');
  if (!panel) return;

  if (!spIsConnected()) {
    panel.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="text-sm">🎧</span>
        <span class="text-xs text-gray-400 flex-1">Conecta tu Spotify Premium</span>
        <button class="metro-play-btn" onclick="spAuthorize()">Conectar</button>
      </div>`;
    return;
  }

  const t = spState.current;
  if (!t) {
    panel.innerHTML = `
      <div class="flex items-center gap-2">
        <span class="text-sm">🎧</span>
        <span class="text-xs text-gray-400 flex-1 truncate">Sin reproducción</span>
        <button class="metro-ctrl-btn" onclick="spOpenPlaylistPicker()" title="Playlists">📜</button>
        <button class="metro-ctrl-btn" onclick="spOpenDevicePicker()" title="Dispositivos">📡</button>
        <button class="metro-ctrl-btn" onclick="spDisconnect()" title="Desconectar">✕</button>
      </div>`;
    return;
  }

  const art    = (t.album && t.album.images && t.album.images[t.album.images.length - 1])
                   ? t.album.images[t.album.images.length - 1].url : '';
  const artist = (t.artists || []).map(a => a.name).join(', ');
  const pct    = spState.durationMs ? (spState.progressMs / spState.durationMs) * 100 : 0;

  panel.innerHTML = `
    <div class="sp-now-playing">
      ${art ? `<img class="sp-art" src="${art}" alt="">` : '<div class="sp-art sp-art-placeholder">🎵</div>'}
      <div class="sp-meta">
        <div class="sp-title">${t.name}</div>
        <div class="sp-artist">${artist}</div>
      </div>
      <button class="metro-ctrl-btn" onclick="spOpenDevicePicker()" title="Dispositivos">📡</button>
    </div>
    <div id="sp-progress-bar" class="sp-progress-bar" onclick="spUiSeek(event)">
      <div id="sp-progress-fill" class="sp-progress-fill" style="width:${pct}%"></div>
    </div>
    <div class="sp-progress-times">
      <span id="sp-time-cur">${spFormatTime(spState.progressMs)}</span>
      <span>${spFormatTime(spState.durationMs)}</span>
    </div>
    <div class="sp-transport">
      <button class="sp-transport-btn" onclick="spUiPrev()">⏮</button>
      <button class="sp-transport-btn sp-transport-main" onclick="spUiPlayPause()">${spState.playing ? '⏸' : '▶'}</button>
      <button class="sp-transport-btn" onclick="spUiNext()">⏭</button>
      <button class="sp-transport-btn sp-transport-side" onclick="spOpenPlaylistPicker()" title="Playlists">📜</button>
    </div>`;
}

// ── Bootstrap ─────────────────────────────────────────────────────────────────

window.addEventListener('DOMContentLoaded', () => {
  // Exponer funciones invocadas desde onclick inline
  Object.assign(window, {
    spAuthorize, spDisconnect,
    spUiPlayPause, spUiNext, spUiPrev, spUiSeek,
    spOpenDevicePicker, spCloseDevicePicker, spPickDevice,
    spOpenPlaylistPicker, spClosePlaylistPicker, spPickPlaylist,
    spStartPolling, spStopPolling,
    renderSpotifyPanel
  });
  renderSpotifyPanel();
});
