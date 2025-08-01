self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('macro-tracker-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png',
        'https://cdn.jsdelivr.net/npm/chart.js',
        'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css',
        'https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
