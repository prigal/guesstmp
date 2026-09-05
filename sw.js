const CACHE_NAME = 'devine-tete-v8';
const PRECACHE = [
  './',
  './index.html',
  './style.css',
  './manifest.webmanifest',
  './favicon.png',
  './js/app.js',
  './js/audio.js',
  './js/fullscreen.js',
  './js/game.js',
  './js/orientation.js',
  './js/ui.js',
  './data/categories.js',
  './data/circuits.js',
  './data/descriptions.js',
  './data/descriptions/animaux.js',
  './data/descriptions/films.js',
  './data/descriptions/metiers.js',
  './data/descriptions/celebrites.js',
  './data/descriptions/nourriture.js',
  './data/descriptions/objets.js',
  './data/descriptions/sports.js',
  './data/descriptions/pays.js',
  './data/descriptions/dessins.js',
  './data/descriptions/marques.js',
  './data/descriptions/musique.js',
  './data/descriptions/actions.js',
  './data/descriptions/formule1.js',
  './assets/logo.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/icon-180.png',
];

self.addEventListener('install', (event) => {
  // Add files one by one so a single missing asset can't abort the whole
  // install (cache.addAll is atomic and would leave users on a stale SW).
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => Promise.allSettled(
        PRECACHE.map((url) => cache.add(url).catch(() => {}))
      ))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type === 'opaque') {
          return response;
        }
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
