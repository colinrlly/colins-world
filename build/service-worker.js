"use strict";var precacheConfig=[["/index.html","9c43c1522f294c5f049b3cbdb6887e25"],["/static/css/main.f00b13d0.css","11916c5050ccf10132681286b86858f1"],["/static/js/main.2ae13ac8.js","23297ca4b99eb2e4359cbeb0b49038cf"],["/static/media/DSC00512.68548279.jpg","685482793ff9c171f44606ba27216841"],["/static/media/DSC00517.0a7136ef.jpg","0a7136effc56ad210984b6dbe8130a60"],["/static/media/DSC00527.8254b882.jpg","8254b8826d017ee038b0249e1a4354f7"],["/static/media/DSC00539.fddfa160.jpg","fddfa16065d3adf92980422242ecffe0"],["/static/media/DSC00546.489fbc3d.jpg","489fbc3dd5787abc07d831c0288fc749"],["/static/media/DSC00547.0a5b68ad.jpg","0a5b68ad349ee8b58a6f1201a909204f"],["/static/media/MVP_temp.f10938e2.jpg","f10938e284250fe03e9e2d562ff18b5a"],["/static/media/box_dashboard.2ee44e95.jpg","2ee44e957faf125087630be08d8cdbad"],["/static/media/time-tracker-resuming.909726d7.gif","909726d7eaa04ec239989b33e126e13f"],["/static/media/time-tracker-sign-in.187dc418.gif","187dc4188e6ab7c7c02b73fbfebef70c"],["/static/media/time-tracker1.0.f6e57ddb.gif","f6e57ddbe3d1d4f049850b990eb63d1f"],["/static/media/time-tracker2.0.a134f099.gif","a134f099a1cd63e0077cc0c8a59aea28"],["/static/media/watch-face-w-watch.008e8014.png","008e8014aa6f6c857c93d3b516a80415"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});