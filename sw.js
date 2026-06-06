// ═══════════════════════════════════════════════════════
//  Hemodynamic DSS — Service Worker
//  Enables offline use, caches all assets on first load
// ═══════════════════════════════════════════════════════

const CACHE_NAME  = 'hemodynamic-dss-v1.0';
const OFFLINE_URL = './index.html';

// All assets to cache on install
const ASSETS_TO_CACHE = [
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// ── INSTALL: cache all assets ────────────────────────
self.addEventListener('install', event => {
  console.log('[SW] Installing and caching assets...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => {
        console.log('[SW] All assets cached. Ready for offline use.');
        return self.skipWaiting();
      })
  );
});

// ── ACTIVATE: remove old caches ──────────────────────
self.addEventListener('activate', event => {
  console.log('[SW] Activating new service worker...');
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: serve from cache, fall back to network ────
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  // Skip cross-origin requests (Google Fonts etc.)
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) {
    // For Google Fonts and other CDN assets: network first, no cache
    event.respondWith(
      fetch(event.request).catch(() => caches.match(OFFLINE_URL))
    );
    return;
  }

  // Cache-first strategy for local assets
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Serve from cache
        return cachedResponse;
      }
      // Not in cache — fetch from network and cache it
      return fetch(event.request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache =>
            cache.put(event.request, responseToCache)
          );
        }
        return networkResponse;
      }).catch(() => {
        // Offline fallback
        return caches.match(OFFLINE_URL);
      });
    })
  );
});

// ── MESSAGE: force update ────────────────────────────
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
