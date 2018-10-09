importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.routing.registerRoute(
    new RegExp('%PUBLIC_URL%.*\.js'),
    workbox.strategies.cacheFirst()
  );
  workbox.routing.registerRoute(
    new RegExp('%PUBLIC_URL%.*\.html'),
    workbox.strategies.cacheFirst()
  );
  workbox.routing.registerRoute(
    new RegExp('%PUBLIC_URL%.*\.css'),
    workbox.strategies.cacheFirst()
  );