importScripts('static/js/cache.js');
//	var googleisthere = fetch('https://google.com', {mode: 'no-cors'}).then(r=>{return true;}).catch(e=>{return false;});
	var urlsToCache = [
  '/',
  '/static/js/jquery.js',
  '/static/js/hAES.js',
  '/static/js/sha256.min.js',
  '/static/js/int.js',
  '/static/js/sdk.js',
  '/static/js/wavesurfer/src/wavesurfer.min.js',
  '/static/js/jsmediatags.min.js',
  '/static/js/jquery.mCustomScrollbar.concat.min.js',
  '/static/js/new_cb.js',
  '/static/js/new.js',
  '/static/js/wow.min.js',
  '/static/js/jquery-ui.min.js',
  '/static/js/jquery.touchSwipe.min.js',
  '/static/js/bootstrap.min.js',
  '/static/js/owl.carousel.min.js',
  '/static/js/countdown.js',
  '/static/js/particle-rain.js',
  '/static/js/ribbons.js',
  '/static/js/fancybox.js',
  '/static/js/script.js',
  '/static/modules/revolution-slider/css/settings.css',
  '/static/modules/revolution-slider/css/layers.css',
  '/static/modules/revolution-slider/css/navigation.css',
  '/static/modules/revolution-slider/css/awp_default.css',
  '/static/css/jquery.mCustomScrollbar.css',
  '/static/css/bootstrap.min.css',
  '/static/css/font-awesome.min.css',
  '/static/css/fancyBox.css',
  '/static/css/isotop.css',
  '/static/css/jquery-ui.min.css',
  '/static/css/magnific-popup.css',
  '/static/css/settings.css',
  '/static/css/layers.css',
  '/static/css/navigation.css',
  '/static/css/owl.css',
  '/static/css/animate.css',
  '/static/css/style.css',
  '/index.html'
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
	
	if(event.request.url.match(/google\.com|analytics|yandex|api\.github\.com|github\.io\/database\/|github\.io\/worker/i)){
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

