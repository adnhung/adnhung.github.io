

	importScripts('/app/js/cache.js');
//	var googleisthere = fetch('https://google.com', {mode: 'no-cors'}).then(r=>{return true;}).catch(e=>{return false;});
	var urlsToCache = [
  '/',
  '/static/js/jquery.js',
  '/static/js/hAES.js',
  '/static/js/sha256.min.js',
  '/static/js/int.js',
  '/static/js/sdk.js',
  '/static/modules/revolution-slider/css/settings.css',
  '/static/modules/revolution-slider/css/layers.css',
  '/static/modules/revolution-slider/css/navigation.css',
  '/index.html',
  '/'
];
var curentVersion='adnhung_v1';
caches.keys().then(async function (cachesNames) {

for (i = 0; i < cachesNames.length; i++) {
        if(cachesNames[i] !==curentVersion){
            caches.delete(cachesNames[i])
	const dbs = await window.indexedDB.databases()
	dbs.forEach(db => { window.indexedDB.deleteDatabase(db.name) });
	navigator.serviceWorker.getRegistrations().then(function(registrations) { for(let registration of registrations) { registration.unregister() } })
        }
}

});


self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(curentVersion)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});



self.addEventListener('fetch', (event) => {
	
	if(event.request.url.match(/google\.com|analytics|yandex|api\.github\.com|github\.io\/database\/|github\.io\/worker|adnhung\.gq/)){
			 return;
	}else{
	
  event.respondWith(async function() {
    const cache = await caches.open(curentVersion);
    const cachedResponse = await cache.match(event.request, {ignoreSearch: true});
    const networkResponsePromise = fetch(event.request);

    event.waitUntil(async function() {
      const networkResponse = await networkResponsePromise;
      await cache.put(event.request, networkResponse.clone());
    }());

    // Returned the cached response if we have one, otherwise return the network response.
    return cachedResponse || networkResponsePromise;
  }());
}
});

