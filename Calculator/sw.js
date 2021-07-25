// console.log('service worker inside sw.js');

const cacheName = "app-shell-rsrs-v2";
const dynamicCacheName = "dynamic-cache-v1"
const assets = [
    '/',
    'index.html',
    'css/w3.css',
    'js/calculator.js',
    'icons/icon-144.png',
    'favicon.ico'
];

// cache size limit function
const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if (keys.length > size) {
                cache.delete(keys[0]).then(limitCacheSize(name, size))
            }
        });
    });
};

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
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCacheName).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone())
                    limitCacheSize(dynamicCacheName, 10);
                    return fetchRes;
                });
            });
        })
    );
});