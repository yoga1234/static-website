// Initialize AOS
AOS.init();

// Lazyload Initialization
let LazyLoadInstance = new LazyLoad({});

// checking and registering service worker
if("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then(function() {
        console.log('Sucessfully registering service worker')
      })
      .catch(function(err) {
        console.log('failed to register service worker', err)
      });
  });
} else {
  console.log('service worker is not supported on this browser')
}