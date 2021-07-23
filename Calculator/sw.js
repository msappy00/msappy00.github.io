//console.log('service worker inside sw.js');

const cacheName = "app-shell-rsrs-v1";
const assets = [
    '/',
    'calculator.html',
    'css/w3.css',
    'js/calculator.js',
    'icons/icon-144.png'
];

// install service worker
self.addEventListener('install', evt => {
    //console.log('service worker has been installed.');
    evt.waitUntil(
        caches.open(cacheName).then(cache => {
            cache.addAll(assets);
        })
    );
    
});

// activate event
self.addEventListener('activate', evt => {
    //console.log('service worker has been activated.');
    evt.waitUntil(
        caches.keys().then(keys => {
            //console.log(keys)
            return Promise.all(keys
                .filter(key => key !== cacheName)
                .map(key => caches.delete(key))
            )
        })
    )
});

// fetch event
self.addEventListener('fetch', evt => {
    console.log(evt);

    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || evt.request;
        })
    );

    
});