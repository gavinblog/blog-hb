(()=>{var we=Object.defineProperty;var Be=(r,e,t)=>e in r?we(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(Be(r,typeof e!="symbol"?e+"":e,t),t);var d={baseURL:"/",caches:{font:{max_age:2592e3,origins:[],strategy:"cache-first"},image:{max_age:2592e3,origins:[],strategy:"cache-first"},script:{max_age:2592e3,origins:[],strategy:"cache-first"},style:{max_age:2592e3,origins:[],strategy:"cache-first"}},debug:!1,langs:["en","zh-hans"],offline_image:"/images/pwa/offline.png",precaches:["/en/offline/","/zh-hans/offline/","/css/hb.b83e9e5b7a68e0feed6d070be694a833e4b0b35a6d8ec867dc13073ecfaf5713.css","/zh-hans/blog/2022/featured-post-without-image/","/js/hb.74d2ad3ebbeee01b9e8143ae4e443982d41750a90b00363459f64632170c7508.js","/images/pwa/offline.png"]};try{self["workbox:core:6.5.4"]&&_()}catch(r){}var Ee=(r,...e)=>{let t=r;return e.length>0&&(t+=` :: ${JSON.stringify(e)}`),t};var se=Ee;var l=class extends Error{constructor(t,o){let s=se(t,o);super(s);c(this,"details");this.name=t,this.details=o}};var Q=r=>new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),"");try{self["workbox:cacheable-response:6.5.4"]&&_()}catch(r){}var w=class{constructor(e={}){c(this,"_statuses");c(this,"_headers");this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some(o=>e.headers.get(o)===this._headers[o])),t}};var x=class{constructor(e){c(this,"_cacheableResponse");c(this,"cacheWillUpdate",async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null);this._cacheableResponse=new w(e)}};function K(r){r.then(()=>{})}var ne=(r,e)=>e.some(t=>r instanceof t);var ae,ie;function Re(){return ae||(ae=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ie(){return ie||(ie=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var ce=new WeakMap,Y=new WeakMap,ue=new WeakMap,J=new WeakMap,X=new WeakMap;function ke(r){let e=new Promise((t,o)=>{let s=()=>{r.removeEventListener("success",a),r.removeEventListener("error",n)},a=()=>{t(h(r.result)),s()},n=()=>{o(r.error),s()};r.addEventListener("success",a),r.addEventListener("error",n)});return e.then(t=>{t instanceof IDBCursor&&ce.set(t,r)}).catch(()=>{}),X.set(e,r),e}function ve(r){if(Y.has(r))return;let e=new Promise((t,o)=>{let s=()=>{r.removeEventListener("complete",a),r.removeEventListener("error",n),r.removeEventListener("abort",n)},a=()=>{t(),s()},n=()=>{o(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",a),r.addEventListener("error",n),r.addEventListener("abort",n)});Y.set(r,e)}var z={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Y.get(r);if(e==="objectStoreNames")return r.objectStoreNames||ue.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return h(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function le(r){z=r(z)}function Pe(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){let o=r.call(L(this),e,...t);return ue.set(o,e.sort?e.sort():[e]),h(o)}:Ie().includes(r)?function(...e){return r.apply(L(this),e),h(ce.get(this))}:function(...e){return h(r.apply(L(this),e))}}function _e(r){return typeof r=="function"?Pe(r):(r instanceof IDBTransaction&&ve(r),ne(r,Re())?new Proxy(r,z):r)}function h(r){if(r instanceof IDBRequest)return ke(r);if(J.has(r))return J.get(r);let e=_e(r);return e!==r&&(J.set(r,e),X.set(e,r)),e}var L=r=>X.get(r);function me(r,e,{blocked:t,upgrade:o,blocking:s,terminated:a}={}){let n=indexedDB.open(r,e),i=h(n);return o&&n.addEventListener("upgradeneeded",u=>{o(h(n.result),u.oldVersion,u.newVersion,h(n.transaction),u)}),t&&n.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),i.then(u=>{a&&u.addEventListener("close",()=>a()),s&&u.addEventListener("versionchange",m=>s(m.oldVersion,m.newVersion,m))}).catch(()=>{}),i}function pe(r,{blocked:e}={}){let t=indexedDB.deleteDatabase(r);return e&&t.addEventListener("blocked",o=>e(o.oldVersion,o)),h(t).then(()=>{})}var Ce=["get","getKey","getAll","getAllKeys","count"],Oe=["put","add","delete","clear"],Z=new Map;function de(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Z.get(e))return Z.get(e);let t=e.replace(/FromIndex$/,""),o=e!==t,s=Oe.includes(t);if(!(t in(o?IDBIndex:IDBObjectStore).prototype)||!(s||Ce.includes(t)))return;let a=async function(n,...i){let u=this.transaction(n,s?"readwrite":"readonly"),m=u.store;return o&&(m=m.index(i.shift())),(await Promise.all([m[t](...i),s&&u.done]))[0]};return Z.set(e,a),a}le(r=>({...r,get:(e,t,o)=>de(e,t)||r.get(e,t,o),has:(e,t)=>!!de(e,t)||r.has(e,t)}));try{self["workbox:expiration:6.5.4"]&&_()}catch(r){}var Me="workbox-expiration",B="cache-entries",he=r=>{let e=new URL(r,location.href);return e.hash="",e.href},$=class{constructor(e){c(this,"_cacheName");c(this,"_db",null);this._cacheName=e}_upgradeDb(e){let t=e.createObjectStore(B,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1})}_upgradeDbAndDeleteOldDbs(e){this._upgradeDb(e),this._cacheName&&pe(this._cacheName)}async setTimestamp(e,t){e=he(e);let o={url:e,timestamp:t,cacheName:this._cacheName,id:this._getId(e)},a=(await this.getDb()).transaction(B,"readwrite",{durability:"relaxed"});await a.store.put(o),await a.done}async getTimestamp(e){let o=await(await this.getDb()).get(B,this._getId(e));return o==null?void 0:o.timestamp}async expireEntries(e,t){let o=await this.getDb(),s=await o.transaction(B).store.index("timestamp").openCursor(null,"prev"),a=[],n=0;for(;s;){let u=s.value;u.cacheName===this._cacheName&&(e&&u.timestamp<e||t&&n>=t?a.push(s.value):n++),s=await s.continue()}let i=[];for(let u of a)await o.delete(B,u.id),i.push(u.url);return i}_getId(e){return this._cacheName+"|"+he(e)}async getDb(){return this._db||(this._db=await me(Me,1,{upgrade:this._upgradeDbAndDeleteOldDbs.bind(this)})),this._db}};var S=class{constructor(e,t={}){c(this,"_isRunning",!1);c(this,"_rerunRequested",!1);c(this,"_maxEntries");c(this,"_maxAgeSeconds");c(this,"_matchOptions");c(this,"_cacheName");c(this,"_timestampModel");this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new $(e)}async expireEntries(){if(this._isRunning){this._rerunRequested=!0;return}this._isRunning=!0;let e=this._maxAgeSeconds?Date.now()-this._maxAgeSeconds*1e3:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),o=await self.caches.open(this._cacheName);for(let s of t)await o.delete(s,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,K(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){let t=await this._timestampModel.getTimestamp(e),o=Date.now()-this._maxAgeSeconds*1e3;return t!==void 0?t<o:!0}else return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}};var N={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration!="undefined"?registration.scope:""},ee=r=>[N.prefix,r,N.suffix].filter(e=>e&&e.length>0).join("-"),qe=r=>{for(let e of Object.keys(N))r(e)},A={updateDetails:r=>{qe(e=>{typeof r[e]=="string"&&(N[e]=r[e])})},getGoogleAnalyticsName:r=>r||ee(N.googleAnalytics),getPrecacheName:r=>r||ee(N.precache),getPrefix:()=>N.prefix,getRuntimeName:r=>r||ee(N.runtime),getSuffix:()=>N.suffix};var U=new Set;function ge(r){U.add(r)}var E=class{constructor(e={}){c(this,"_config");c(this,"_maxAgeSeconds");c(this,"_cacheExpirations");c(this,"cachedResponseWillBeUsed",async({event:e,request:t,cacheName:o,cachedResponse:s})=>{if(!s)return null;let a=this._isResponseDateFresh(s),n=this._getCacheExpiration(o);K(n.expireEntries());let i=n.updateTimestamp(t.url);if(e)try{e.waitUntil(i)}catch(u){}return a?s:null});c(this,"cacheDidUpdate",async({cacheName:e,request:t})=>{let o=this._getCacheExpiration(e);await o.updateTimestamp(t.url),await o.expireEntries()});this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&ge(()=>this.deleteCacheAndMetadata())}_getCacheExpiration(e){if(e===A.getRuntimeName())throw new l("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new S(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;let t=this._getDateHeaderTimestamp(e);if(t===null)return!0;let o=Date.now();return t>=o-this._maxAgeSeconds*1e3}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;let t=e.headers.get("date"),s=new Date(t).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(let[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}};try{self["workbox:routing:6.5.4"]&&_()}catch(r){}var H="GET";var D=r=>r&&typeof r=="object"?r:{handle:r};var y=class{constructor(e,t,o=H){c(this,"handler");c(this,"match");c(this,"method");c(this,"catchHandler");this.handler=D(t),this.match=e,this.method=o}setCatchHandler(e){this.catchHandler=D(e)}};var R=class extends y{constructor(e,t,o){let s=({url:a})=>{let n=e.exec(a.href);if(n&&!(a.origin!==location.origin&&n.index!==0))return n.slice(1)};super(s,t,o)}};var I=class{constructor(){c(this,"_routes");c(this,"_defaultHandlerMap");c(this,"_catchHandler");this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{let{request:t}=e,o=this.handleRequest({request:t,event:e});o&&e.respondWith(o)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){let{payload:t}=e.data,o=Promise.all(t.urlsToCache.map(s=>{typeof s=="string"&&(s=[s]);let a=new Request(...s);return this.handleRequest({request:a,event:e})}));e.waitUntil(o),e.ports&&e.ports[0]&&o.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:t}){let o=new URL(e.url,location.href);if(!o.protocol.startsWith("http"))return;let s=o.origin===location.origin,{params:a,route:n}=this.findMatchingRoute({event:t,request:e,sameOrigin:s,url:o}),i=n&&n.handler,u=[],m=e.method;if(!i&&this._defaultHandlerMap.has(m)&&(i=this._defaultHandlerMap.get(m)),!i)return;let g;try{g=i.handle({url:o,request:e,event:t,params:a})}catch(T){g=Promise.reject(T)}let f=n&&n.catchHandler;return g instanceof Promise&&(this._catchHandler||f)&&(g=g.catch(async T=>{if(f)try{return await f.handle({url:o,request:e,event:t,params:a})}catch(oe){oe instanceof Error&&(T=oe)}if(this._catchHandler)return this._catchHandler.handle({url:o,request:e,event:t});throw T})),g}findMatchingRoute({url:e,sameOrigin:t,request:o,event:s}){let a=this._routes.get(o.method)||[];for(let n of a){let i,u=n.match({url:e,sameOrigin:t,request:o,event:s});if(u)return i=u,(Array.isArray(i)&&i.length===0||u.constructor===Object&&Object.keys(u).length===0||typeof u=="boolean")&&(i=void 0),{route:n,params:i}}return{}}setDefaultHandler(e,t=H){this._defaultHandlerMap.set(t,D(e))}setCatchHandler(e){this._catchHandler=D(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new l("unregister-route-but-not-found-with-method",{method:e.method});let t=this._routes.get(e.method).indexOf(e);if(t>-1)this._routes.get(e.method).splice(t,1);else throw new l("unregister-route-route-not-registered")}};var k,v=()=>(k||(k=new I,k.addFetchListener(),k.addCacheListener()),k);function P(r,e,t){let o;if(typeof r=="string"){let a=new URL(r,location.href),n=({url:i})=>i.href===a.href;o=new y(n,e,t)}else if(r instanceof RegExp)o=new R(r,e,t);else if(typeof r=="function")o=new y(r,e,t);else if(r instanceof y)o=r;else throw new l("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return v().registerRoute(o),o}function te(r){v().setCatchHandler(r)}function fe(r,e){let t=new URL(r);for(let o of e)t.searchParams.delete(o);return t.href}async function ye(r,e,t,o){let s=fe(e.url,t);if(e.url===s)return r.match(e,o);let a={...o,ignoreSearch:!0},n=await r.keys(e,a);for(let i of n){let u=fe(i.url,t);if(s===u)return r.match(i,o)}}var W=class{constructor(){c(this,"promise");c(this,"resolve");c(this,"reject");this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};async function Ne(){for(let r of U)await r()}function F(r){return new Promise(e=>setTimeout(e,r))}try{self["workbox:strategies:6.5.4"]&&_()}catch(r){}function j(r){return typeof r=="string"?new Request(r):r}var C=class{constructor(e,t){c(this,"request");c(this,"url");c(this,"event");c(this,"params");c(this,"_cacheKeys",{});c(this,"_strategy");c(this,"_extendLifetimePromises");c(this,"_handlerDeferred");c(this,"_plugins");c(this,"_pluginStateMap");Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new W,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(let o of this._plugins)this._pluginStateMap.set(o,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){let{event:t}=this,o=j(e);if(o.mode==="navigate"&&t instanceof FetchEvent&&t.preloadResponse){let n=await t.preloadResponse;if(n)return n}let s=this.hasCallback("fetchDidFail")?o.clone():null;try{for(let n of this.iterateCallbacks("requestWillFetch"))o=await n({request:o.clone(),event:t})}catch(n){if(n instanceof Error)throw new l("plugin-error-request-will-fetch",{thrownErrorMessage:n.message})}let a=o.clone();try{let n;n=await fetch(o,o.mode==="navigate"?void 0:this._strategy.fetchOptions);for(let i of this.iterateCallbacks("fetchDidSucceed"))n=await i({event:t,request:a,response:n});return n}catch(n){throw s&&await this.runCallbacks("fetchDidFail",{error:n,event:t,originalRequest:s.clone(),request:a.clone()}),n}}async fetchAndCachePut(e){let t=await this.fetch(e),o=t.clone();return this.waitUntil(this.cachePut(e,o)),t}async cacheMatch(e){let t=j(e),o,{cacheName:s,matchOptions:a}=this._strategy,n=await this.getCacheKey(t,"read"),i={...a,cacheName:s};o=await caches.match(n,i);for(let u of this.iterateCallbacks("cachedResponseWillBeUsed"))o=await u({cacheName:s,matchOptions:a,cachedResponse:o,request:n,event:this.event})||void 0;return o}async cachePut(e,t){let o=j(e);await F(0);let s=await this.getCacheKey(o,"write");if(!t)throw new l("cache-put-with-no-response",{url:Q(s.url)});let a=await this._ensureResponseSafeToCache(t);if(!a)return!1;let{cacheName:n,matchOptions:i}=this._strategy,u=await self.caches.open(n),m=this.hasCallback("cacheDidUpdate"),g=m?await ye(u,s.clone(),["__WB_REVISION__"],i):null;try{await u.put(s,m?a.clone():a)}catch(f){if(f instanceof Error)throw f.name==="QuotaExceededError"&&await Ne(),f}for(let f of this.iterateCallbacks("cacheDidUpdate"))await f({cacheName:n,oldResponse:g,newResponse:a.clone(),request:s,event:this.event});return!0}async getCacheKey(e,t){let o=`${e.url} | ${t}`;if(!this._cacheKeys[o]){let s=e;for(let a of this.iterateCallbacks("cacheKeyWillBeUsed"))s=j(await a({mode:t,request:s,event:this.event,params:this.params}));this._cacheKeys[o]=s}return this._cacheKeys[o]}hasCallback(e){for(let t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(let o of this.iterateCallbacks(e))await o(t)}*iterateCallbacks(e){for(let t of this._strategy.plugins)if(typeof t[e]=="function"){let o=this._pluginStateMap.get(t);yield a=>{let n={...a,state:o};return t[e](n)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,o=!1;for(let s of this.iterateCallbacks("cacheWillUpdate"))if(t=await s({request:this.request,response:t,event:this.event})||void 0,o=!0,!t)break;return o||t&&t.status!==200&&(t=void 0),t}};var p=class{constructor(e={}){c(this,"cacheName");c(this,"plugins");c(this,"fetchOptions");c(this,"matchOptions");this.cacheName=A.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){let[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});let t=e.event,o=typeof e.request=="string"?new Request(e.request):e.request,s="params"in e?e.params:void 0,a=new C(this,{event:t,request:o,params:s}),n=this._getResponse(a,o,t),i=this._awaitComplete(n,a,o,t);return[n,i]}async _getResponse(e,t,o){await e.runCallbacks("handlerWillStart",{event:o,request:t});let s;try{if(s=await this._handle(t,e),!s||s.type==="error")throw new l("no-response",{url:t.url})}catch(a){if(a instanceof Error){for(let n of e.iterateCallbacks("handlerDidError"))if(s=await n({error:a,event:o,request:t}),s)break}if(!s)throw a}for(let a of e.iterateCallbacks("handlerWillRespond"))s=await a({event:o,request:t,response:s});return s}async _awaitComplete(e,t,o,s){let a,n;try{a=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:s,request:o,response:a}),await t.doneWaiting()}catch(i){i instanceof Error&&(n=i)}if(await t.runCallbacks("handlerDidComplete",{event:s,request:o,response:a,error:n}),t.destroy(),n)throw n}};var O=class extends p{async _handle(e,t){let o=[],s=await t.cacheMatch(e),a;if(!s)try{s=await t.fetchAndCachePut(e)}catch(n){n instanceof Error&&(a=n)}if(!s)throw new l("no-response",{url:e.url,error:a});return s}};var G={cacheWillUpdate:async({response:r})=>r.status===200||r.status===0?r:null};var b=class extends p{constructor(t={}){super(t);c(this,"_networkTimeoutSeconds");this.plugins.some(o=>"cacheWillUpdate"in o)||this.plugins.unshift(G),this._networkTimeoutSeconds=t.networkTimeoutSeconds||0}async _handle(t,o){let s=[],a=[],n;if(this._networkTimeoutSeconds){let{id:m,promise:g}=this._getTimeoutPromise({request:t,logs:s,handler:o});n=m,a.push(g)}let i=this._getNetworkPromise({timeoutId:n,request:t,logs:s,handler:o});a.push(i);let u=await o.waitUntil((async()=>await o.waitUntil(Promise.race(a))||await i)());if(!u)throw new l("no-response",{url:t.url});return u}_getTimeoutPromise({request:t,logs:o,handler:s}){let a;return{promise:new Promise(i=>{a=setTimeout(async()=>{i(await s.cacheMatch(t))},this._networkTimeoutSeconds*1e3)}),id:a}}async _getNetworkPromise({timeoutId:t,request:o,logs:s,handler:a}){let n,i;try{i=await a.fetchAndCachePut(o)}catch(u){u instanceof Error&&(n=u)}return t&&clearTimeout(t),(n||!i)&&(i=await a.cacheMatch(o)),i}};var M=class extends p{constructor(t={}){super(t);c(this,"_networkTimeoutSeconds");this._networkTimeoutSeconds=t.networkTimeoutSeconds||0}async _handle(t,o){let s,a;try{let n=[o.fetch(t)];if(this._networkTimeoutSeconds){let i=F(this._networkTimeoutSeconds*1e3);n.push(i)}if(a=await Promise.race(n),!a)throw new Error(`Timed out the network response after ${this._networkTimeoutSeconds} seconds.`)}catch(n){n instanceof Error&&(s=n)}if(!a)throw new l("no-response",{url:t.url,error:s});return a}};var q=class extends p{constructor(e={}){super(e),this.plugins.some(t=>"cacheWillUpdate"in t)||this.plugins.unshift(G)}async _handle(e,t){let o=[],s=t.fetchAndCachePut(e).catch(()=>{});t.waitUntil(s);let a=await t.cacheMatch(e),n;if(!a)try{a=await s}catch(i){i instanceof Error&&(n=i)}if(!a)throw new l("no-response",{url:e.url,error:n});return a}};self.__WB_DISABLE_DEV_LOGS=!d.debug;var V=(...r)=>{self.__WB_DISABLE_DEV_LOGS||console.debug("[pwa]",...r)},re="hugo-pwa-",be=re+"fallbacks",Te=d.precaches.filter(r=>r.indexOf("__h_pp_l1")!==0);V("precaches",Te);P(({request:r})=>r.mode==="navigate",new b({cacheName:re+"pages",plugins:[new x({statuses:[200]})]}));var xe=["font","image","script","style"],De;for(let r in xe){let e=xe[r],t=d.caches[e],o=t.origins?t.origins.map(i=>i.replace(/\/$/,"")):[],s=re+e+"s",a=null,n=[new x({statuses:[0,200]}),new E({maxAgeSeconds:(De=t.max_age)!=null?De:60*60*24*30})];switch(t.strategy){case"network-first":a=new b({cacheName:s,plugins:n});break;case"cache-first":a=new O({cacheName:s,plugins:n});break;case"stale-while-revalidate":a=new q({cacheName:s,plugins:n});break;default:throw new Error(`invalid strategy for kind "${e}": `+t.strategy)}P(({request:i,sameOrigin:u,url:m})=>i.destination!==e?!1:u||o&&o.includes(m.origin.replace(/\/$/,""))?!0:(V(`${m} will not be cached.`),!1),a)}P(()=>!0,new M);self.addEventListener("install",r=>{r.waitUntil(self.caches.open(be).then(e=>e.addAll(Te)))});var Ve=async r=>{V("catch handler",r.request);let e=r.request.destination,t=r.request.url,o=await self.caches.open(be),s=await o.match(t);if(s)return s;if(e==="document"){let a,n="",i;if(t.indexOf(d.baseURL)===0?i=t.replace(d.baseURL,"").split("/",1):i=new URL(t).pathname.replace(/^\//,"").split("/",1),i.length>0&&d.langs.includes(i[0])){n=i[0];let m=`${d.baseURL}${n}/offline/`;if(V("loading multilingual offline page",m),a=await o.match(m),a)return a}let u=`${d.baseURL}offline/`;return V("loading the fallback offline page",u),await o.match(u)||Response.error()}else if(e==="image"&&d.offline_image)return await o.match(d.offline_image)||Response.error();return Response.error()};te(Ve);})();
