"use strict";var precacheConfig=[["/index.html","b8b270154ae67c499ba48847c09b2734"],["/static/css/main.232bdf01.css","42ac0c7d5f933bb5bf1e8dbb8ee52a7f"],["/static/js/main.fd7a8702.js","6d9f58ad90f40913e0a2681d4b830d1c"],["/static/media/DSC00517.40f2897a.jpg","40f2897a57a29829941407add10b4d5e"],["/static/media/DSC00527.c122634d.jpg","c122634d1b56896014f758123c0a4e99"],["/static/media/DSC00539.2db250b6.jpg","2db250b6a44a405454fdca975ecf2d4d"],["/static/media/DSC00546.38950832.jpg","389508323061aac419993c8c1bbb7c4c"],["/static/media/DSC00547.65486435.jpg","65486435aaf623a1d358195ffe3eb26d"],["/static/media/MVP_temp.08f77d9a.jpg","08f77d9ae61ac0e55030cf285abdb23d"],["/static/media/box_dashboard.319f808f.jpg","319f808f081a80a9508850ef146e635f"],["/static/media/time-tracker-resuming.909726d7.gif","909726d7eaa04ec239989b33e126e13f"],["/static/media/time-tracker-sign-in.187dc418.gif","187dc4188e6ab7c7c02b73fbfebef70c"],["/static/media/time-tracker1.0.f6e57ddb.gif","f6e57ddbe3d1d4f049850b990eb63d1f"],["/static/media/time-tracker2.0.a134f099.gif","a134f099a1cd63e0077cc0c8a59aea28"],["/static/media/watch-face-w-watch.008e8014.png","008e8014aa6f6c857c93d3b516a80415"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});