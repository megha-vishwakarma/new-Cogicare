const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = ["index.html", "offline.html"];

this.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        // console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

this.addEventListener('fetch', function(event) {    
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
       return fetch(event.request).catch(function() {
          return caches.match('offline.html');
        });
      }
    )
  );
});

this.addEventListener('activate', function(event) {
 const cacheWhitelist = [];
 cacheWhitelist.push(CACHE_NAME);
 event.waitUntil(
    caches.keys().then(function(cacheNames) {
        Promise.all(
            cacheNames.map((cacheName)=>{
                if(!cacheWhitelist.includes(cacheName)){
                    return caches.delete(cacheName);
                }
            })
        )
        
    })
 )
});