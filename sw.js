/* Offline support: pages are fetched fresh when online (so updates reach everyone), and saved for offline use. */
const CACHE="tuhfa-v25";
const CORE=["./","index.html","run.js","manifest.webmanifest","icon-180.png","icon-192.png","icon-512.png","audio/ghamdi.mp3","fonts/ScheherazadeNew-Regular.woff","fonts/ScheherazadeNew-Bold.woff","fonts/IBMPlexSansArabic-Regular.woff","fonts/IBMPlexSansArabic-SemiBold.woff","fonts/IBMPlexSansArabic-Bold.woff"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
async function rangeFrom(cached,req){const buf=await cached.arrayBuffer();const m=/bytes=(\d*)-(\d*)/.exec(req.headers.get("range")||"");let a=m&&m[1]?+m[1]:0,b=m&&m[2]?+m[2]:buf.byteLength-1;b=Math.min(b,buf.byteLength-1);
 return new Response(buf.slice(a,b+1),{status:206,headers:{"Content-Type":cached.headers.get("Content-Type")||"audio/mpeg","Content-Range":`bytes ${a}-${b}/${buf.byteLength}`,"Content-Length":String(b-a+1),"Accept-Ranges":"bytes"}})}
self.addEventListener("fetch",e=>{const req=e.request;if(req.method!=="GET")return;const url=new URL(req.url);
 /* Calendar reminder files open straight in the phone's Calendar; never cache them as the page. */
 if(url.pathname.endsWith(".ics"))return;
 if(url.hostname.endsWith("goatcounter.com")||url.hostname==="gc.zgo.at")return;
 if(req.mode==="navigate"||url.pathname.endsWith("/index.html")||url.pathname.endsWith("/")){
  e.respondWith(fetch(req).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put("index.html",cp));return r}).catch(()=>caches.match("index.html")));return}
 if(url.pathname.endsWith(".mp3")){e.respondWith((async()=>{const c=await caches.open(CACHE);const hit=await c.match(url.pathname.slice(url.pathname.lastIndexOf("audio/")))||await c.match(req.url,{ignoreSearch:true});
  if(navigator.onLine!==false){try{return await fetch(req)}catch(err){}}if(hit)return req.headers.get("range")?rangeFrom(hit,req):hit;return fetch(req)})());return}
 e.respondWith(caches.match(req).then(hit=>{const net=fetch(req).then(r=>{if(r&&(r.ok||r.type==="opaque")){const cp=r.clone();caches.open(CACHE).then(c=>c.put(req,cp))}return r}).catch(()=>hit);return hit||net}))});
