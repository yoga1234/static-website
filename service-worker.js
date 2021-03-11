const CACHE_NAME = 'AA_MANAGEMENT_CACHE'

let urlsToCache = [
  "/",
  "/index.html",
  "/main.css",
  "/main.js",
  "/fonts/HomepageBaukasten-Book.woff",
]

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  )
})