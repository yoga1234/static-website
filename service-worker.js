const CACHE_NAME = 'AA_MANAGEMENT_CACHE'

let urlsToCache = [
  "/",
  "/index.html",
  "/main.css",
  "/main.js",
  "/aos.css",
  "/aos.js",
  "/lazyload.min.js",
  "/responsive.css",
  "/fonts/HomepageBaukasten-Book.woff",
  "/images/top-icon.png",
  "/images/large/caroline-hernandez-nC9XgivSIzw-unsplash.png",
  "/images/large/emma-valerio-pmqkOXadmyI-unsplash.png",
  "/images/large/haley-lawrence-6ugQ978v-zg-unsplash.png",
  "/images/large/hanna-postova-F7ayfiqDeMk-unsplash.png",
  "/images/large/kinga-cichewicz-T5qJdkPwCgE-unsplash.png",
  "/images/large/logo-insta-l.svg",
  "/images/large/logo-search-l.svg",
  "/images/large/park-street-v9G8KNVtBhc-unsplash.png",
  "/images/large/sebastian-coman-travel-dtOTQYmTEs0-unsplash.png",
  "/images/small/caroline-hernandez-nC9XgivSIzw-unsplash.png",
  "/images/small/emma-valerio-pmqkOXadmyI-unsplash.png",
  "/images/small/haley-lawrence-6ugQ978v-zg-unsplash.png",
  "/images/small/hanna-postova-F7ayfiqDeMk-unsplash.png",
  "/images/small/kinga-cichewicz-T5qJdkPwCgE-unsplash.png",
  "/images/small/logo-insta-s.svg",
  "/images/small/logo-search-s.svg",
  "/images/small/park-street-v9G8KNVtBhc-unsplash.png",
  "/images/small/sebastian-coman-travel-dtOTQYmTEs0-unsplash.png"
]

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  )
})


self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches
      .match(event.request, {cacheName: CACHE_NAME})
      .then(function(response) {
        if(response) {
          console.log('service worker: using assets from cache', response.url);
          return response;
        }

        console.log(
          'service worker: getting data from the server: ',
          event.request.url
        );

        return fetch(event.request);
      })
  );
});