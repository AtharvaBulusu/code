self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('byte2bite-cache-v1').then(function(cache) {
      return cache.addAll([
        './',
        './home.html',
        './pantry.html',
        './recipe.html',
        './style.css',
        './script.js',
        './icon-192.png',
        './icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
