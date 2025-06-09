const CACHE_NAME = 'barcode-app-v1';
const ASSETS = ['index.html','manifest.json','https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js','https://unpkg.com/quagga@0.12.1/dist/quagga.min.js','assets/icon-192.png','assets/icon-512.png'];
self.addEventListener('install', evt => evt.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener('activate', evt => evt.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME && caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', evt => evt.respondWith(caches.match(evt.request).then(r => r || fetch(evt.request))));