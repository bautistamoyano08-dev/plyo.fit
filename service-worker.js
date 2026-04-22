const CACHE_NAME = 'plyotracker-v5';
const STATIC_ASSETS = [
  './index.html',
  './plyo.css',
  './plyo.js',
  './spotify.js',
  './spotify-callback.html',
  './manifest.json',
  './plyo-icon.svg'
];

// Install: pre-cache all static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate: remove old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch: cache-first for static assets, network-first for everything else
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  // Nunca cachear llamadas a Spotify (API dinámica y OAuth)
  const url = event.request.url;
  if (url.startsWith('https://api.spotify.com/') ||
      url.startsWith('https://accounts.spotify.com/')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache valid responses for static assets
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // Offline fallback: serve the app shell
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
