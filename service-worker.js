const CACHE_NAME = 'plyotracker-v12';
const STATIC_ASSETS = [
  './',
  './index.html',
  './plyo.css',
  './plyo.js',
  './spotify.js',
  './spotify-callback.html',
  './manifest.json',
  './plyo-icon.svg'
];

// Hosts que SÍ cacheamos aunque sean cross-origin (fonts)
const CACHEABLE_CROSS_ORIGIN = [
  'https://fonts.googleapis.com',
  'https://fonts.gstatic.com',
  'https://cdn.tailwindcss.com'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = event.request.url;

  // Nunca cachear Spotify (API dinámica + OAuth)
  if (url.startsWith('https://api.spotify.com/') ||
      url.startsWith('https://accounts.spotify.com/')) {
    return;
  }

  const isCacheableCrossOrigin = CACHEABLE_CROSS_ORIGIN.some(h => url.startsWith(h));

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cachear respuestas válidas: same-origin (basic) o fonts/CDN cross-origin
        const shouldCache = response && response.status === 200 &&
          (response.type === 'basic' || isCacheableCrossOrigin);
        if (shouldCache) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      });
    })
  );
});

// Listen for skipWaiting from the page (si querés forzar update desde la app)
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});
