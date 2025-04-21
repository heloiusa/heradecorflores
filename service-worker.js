const CACHE_NAME = 'hera-decor-cache-v1';

const urlsToCache = [
  '/heradecor.html',
  '/estilo/style.css',
  '/manifest.json',
  '/service-worker.js',

  // Imagens
  '/imagens/favicon.ico',
  '/imagens/arco.png',
  '/imagens/buque1.png',
  '/imagens/buque2.png',
  '/imagens/mesa.png',
  '/imagens/flor1.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[Service Worker] Cache adicionada');
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('[Service Worker] Deletando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
