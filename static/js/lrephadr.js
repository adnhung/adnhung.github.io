/*
欢迎访问我的个人网站查看更多 (http://www.uielf.com/headLoader/)
作者:宇哥
联系方式:baiyukey@qq.com
git: baiyukey/headLoader
*/
function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function o(a,i){try{var s=t[a](i),r=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(r).then(function(e){o("next",e)},function(e){o("throw",e)});e(r)}("next")})}}let lrephadr,localDB;!function(e){let t=/^((192\.168|172\.([1][6-9]|[2]\d|3[01]))(\.([2][0-4]\d|[2][5][0-5]|[01]?\d?\d)){2}|10(\.([2][0-4]\d|[2][5][0-5]|[01]?\d?\d)){3})|(localhost)$/.test(e.location.hostname)?"":".min";localDB=function(e){let t=null,n=0;const o=function(){return new Promise((o,a)=>{1===n&&void 0!==o&&o("success");let i=indexedDB.open(e.database);return i.onerror=function(e){a(e)},i.onsuccess=function(e){t=i.result,n=1,o(e)},i.onupgradeneeded=function(n){t=n.target.result;let a=Object.keys(e.tables);for(const n of a)if(!t.objectStoreNames.contains(n)){let o=t.createObjectStore(n,{keyPath:"key"});e.tables[n].forEach(e=>o.createIndex(e,"key",{unique:!0}))}n.target.transaction.oncomplete=(()=>o(t))}})},a=(i=_asyncToGenerator(function*(){return 0===n?n:(t&&t.close(),console.log(`数据库${e.database}已关闭`),n=0)}),function(){return i.apply(this,arguments)});var i;const s=(r=_asyncToGenerator(function*(){if(!t)return console.warn(`目前还没有数库${e.database}`);yield a(),indexedDB.deleteDatabase(e.database),t=null,console.log(`数据库${e.database}已删除`)}),function(){return r.apply(this,arguments)});var r;const c=(l=_asyncToGenerator(function*(n,o,a){return new Promise(function(i,s){let r=t.transaction(n,"readwrite").objectStore(n),c={key:o,value:a,version:e.getVersion()};new Promise(function(e,t){let n=r.index("key").get(o);n.onsuccess=(t=>{e(t.target.result?"put":"add")}),n.onerror=(()=>e("add"))}).then(function(e){let t=r[e](c);t.onsuccess=function(){i("success")},t.onerror=function(e){s(e)}})})}),function(e,t,n){return l.apply(this,arguments)});var l;const u=function(e,n){return new Promise((o,a)=>{let i=t.transaction(e,"readonly").objectStore(e).index("key").get(n);i.onsuccess=function(e){o(i.result)},i.onerror=function(e){a(e)}})};(function(){return!!(window.indexedDB||window.webkitIndexedDB||window.mozIndexedDB||window.msIndexedDB)||(console.log("您的浏览器不支持indexedDB，请使用现代浏览器，例如chrome,firefox等."),!1)})&&(this.open=o,this.close=a,this.delete=s,this.setItem=c,this.getItem=u)},lrephadr=function(n){let o=n||{};this.dataDir=o.dataDir||"",this.dataCss=o.dataCss||[],this.dataJs=o.dataJs||[],this.dataFont=o.dataFont||[],this.dataLifecycle=o.dataLifecycle||l,this.dataActive=o.dataActive||c,this.callback=o.callback||null,this.multiLoad=o.multiLoad||".min"===t,this.showLog=o.showLog||!1,this.preload=void 0!==o.preload?o.preload:0;let a=this,i=e=>0===e.indexOf("http://")||0===e.indexOf("https://"),s=function(e){let n=new Date,o=e||2;return o=Math.min(24,o),""===t?""+n.getTime():""+(n.getMonth()+1)+n.getDate()+Math.ceil((n.getHours()+1)/o)},r=function(e){let t=[],n="";for(let o=0;o<e.length;o++)0!==(n=e[o].replace(/^(\s*)|(\s*)$/g,"")).length&&t.indexOf(n)<0&&t.push(n);return t},p=function(e,t){t.length>0&&t.forEach(function(t){e.setAttribute(t.split("=")[0],t.split("=")[1])})};void 0===e.lrephadrCache&&(e.lrephadrCache={});let g=function(e,t){C.setItem("data",F.encode(e),t).then(null)},J=function(e,n,o){return a.dataActive&&["js","css"].includes(n)?`${a.dataDir}${n}${t}/${e.split("|")[0]}`.replace("."+(o||n),"")+t+"."+(o||n):`${a.dataDir}${n}/${e.split("|")[0]}.${o||n}`},y=function(e,n){return((a.dataDir+n+t+"/"+e.split("|")[0]).replace("."+n,"")+t).replace(/\./g,"_")},U=function(e){return new Promise(t=>{if(i(e))return L(e),t("success");let n=J(e,"js")+"?v="+u,o=y(e,"js");C.getItem("data",F.encode(o)).then(e=>{!function(e){let a,i=e;null===i?(window.XMLHttpRequest?a=new XMLHttpRequest:window.ActiveXObject&&(a=new ActiveXObject("Microsoft.XMLHTTP")),void 0!==a&&(a.open("GET",n),a.send(null),a.onreadystatechange=function(){4===Number(a.readyState)&&200===Number(a.status)&&(i=a.responseText,g(o,i=null===i?"":i),h++,t("success"))})):t("success")}(e&&e.version===x.getVersion()?e.value:null)})})},T=function(e){return new Promise(t=>{if(i(e))return A(e),t("success");let n=J(e,"css")+"?v="+u,o=y(e,"css");C.getItem("data",F.encode(o)).then(e=>{!function(e){let i,s=e;null===s?(window.XMLHttpRequest?i=new XMLHttpRequest:window.ActiveXObject&&(i=new ActiveXObject("Microsoft.XMLHTTP")),void 0!==i&&(i.open("GET",n),i.send(null),i.onreadystatechange=function(){4===Number(i.readyState)&&200===Number(i.status)&&(s=(s=(s=null===(s=i.responseText)?"":s).replace(/\[dataDir]/g,a.dataDir)).replace(/\[v]/g,d),g(o,s),h++,t("success"))})):t("success")}(e&&e.version===x.getVersion()?e.value:null)})})},w=function(e){return new Promise((t=_asyncToGenerator(function*(t){let n=J(e,"fonts","woff")+"?v="+u;if("function"!=typeof FontFace)return new Promise(function(e){return e("success")});const o=new FontFace("elfRound","url("+n+")");yield o.load(),document.fonts.add(o),t("success")}),function(e){return t.apply(this,arguments)}));var t},b=function(e,n){if(""!==t)return Function(n)(),!1;let o=document.getElementsByTagName("HEAD").item(0),a=document.createElement("script");p(a,e.split("|").splice(1)),a.setAttribute("type","text/javascript"),a.setAttribute("data-name",e.split("|")[0].replace(".js","")+t),a.innerHTML=n,o.appendChild(a)},v=function(e,n){if(0===document.getElementsByTagName("HEAD").length)return!1;let o,i=document.getElementsByTagName("HEAD").item(0);if(a.multiLoad&&(o=document.getElementsByTagName("style").item(0)))return o.innerHTML+=n,!1;o=document.createElement("style"),p(o,e.split("|").splice(1)),o.setAttribute("type","text/css"),o.setAttribute("data-name",e.split("|")[0].replace(".css","")+t),o.innerHTML=n,i.appendChild(o)},L=function(e){if(0===document.getElementsByTagName("HEAD").length)return!1;let n=document.getElementsByTagName("HEAD").item(0),o=document.createElement("script");p(o,e.split("|").splice(1)),o.src=0===e.indexOf("http")?e.split("|")[0]:e.split("|")[0].replace(".js","")+t+".js?"+u,n.appendChild(o)},A=function(e){if(0===document.getElementsByTagName("HEAD").length)return!1;let n=document.getElementsByTagName("HEAD").item(0),o=document.createElement("link");p(o,e.split("|").splice(1)),o.type="text/css",o.rel="stylesheet",o.media="screen",o.href=0===e.indexOf("http")?e.split("|")[0]:e.split("|")[0].replace(".css","")+t+".css?"+u,n.appendChild(o)},E=(D=_asyncToGenerator(function*(e,n){return new Promise(function(o){let i,s={JS:b,CSS:v}[n.toUpperCase()];if(!s)return o("refuse this method.");let r={},c=[];e.forEach(function(e){r[e]=null;c.push(new Promise(function(o){i=(a.dataDir+n+t+"/"+e.replace(/(\.js)|(\.css)/g,"")+t).replace(/\./g,"_"),C.getItem("data",F.encode(i)).then(t=>{r[e]=t.value,o(!0)})}))}),Promise.all(c).then(function(){s(1===e.length?e[0]:n+"_"+u,Object.values(r).join("js"===n?";":" ")),o("success")})})}),function(e,t){return D.apply(this,arguments)});var D;let B=function(e,t){if(0===document.getElementsByTagName("HEAD").length)return!1;if(!e||0===e.length)return new Promise(e=>e("success"));let n={JS:U,CSS:T,FONT:w}[t.toUpperCase()],o=(i=_asyncToGenerator(function*(o){let i=0,s=(r=_asyncToGenerator(function*(){if(i>=e.length)return!0;yield n(e[i]),0===a.preload&&(yield E([e[i]],t)),i++,yield s()}),function(){return r.apply(this,arguments)});var r;yield s(),o("success")}),function(e){return i.apply(this,arguments)});var i;return new Promise(a.multiLoad?function(o){e&&0!==e.length||o("success");let i=new Array(e.length).fill(0).map((t,o)=>new Promise((s=_asyncToGenerator(function*(t){yield n(e[o]),t("success")}),function(e){return s.apply(this,arguments)})));var s;Promise.all(i).then(_asyncToGenerator(function*(){0!==e.length&&0===a.preload&&(yield E(e,t)),o("success")}))}:o)},F=new function(){let e="";for(let t=48;t<=122;t++)t>=58&&t<=64||t>=91&&t<=96||(e+=String.fromCharCode(t));let t=(e=(e=e.replace(/[aeiouAEIOU01]/g,"")).slice(0,18)+"$-_+!*"+e.slice(18)).length,n=location.host.length,o=-1,a="",i="";this.encode=function(s){a=encodeURIComponent(s).replace(/\./g,"&dot"),i="",o=-1;for(let s=0;s<a.length;s++)o=e.indexOf(a.charAt(s)),i+=o<0?a.charAt(s):e.charAt((o+n)%t);return i}},x={database:"lrephadrDB",tables:{data:["key","value","version"]},getVersion:s},C=new localDB(x);this.run=function(){_asyncToGenerator(function*(){yield C.open(),a.dataCss=r(a.dataCss.join(",").replace(/_css/g,m).split(",")),a.dataJs=r(a.dataJs.join(",").replace(/_js/g,m).split(",")),a.dataFont=r(a.dataFont.join(",").replace(/_js/g,m).split(",")),u=s(l),d=s(24);B(a.dataCss,"css"),B(a.dataFont,"font"),yield B(a.dataJs,"js"),a.showLog&&function(){let t=(new Date).getTime()-f;e.lrephadrHistory=void 0!==e.lrephadrHistory?e.lrephadrHistory:[],void 0!==e.showLogTimeout&&clearTimeout(e.showLogTimeout),e.showLogTimeout=setTimeout(()=>{h>0&&(e.lrephadrHistory=e.lrephadrHistory.concat(new Array(h-1).fill(0),t));let n=0,o=0;e.lrephadrHistory.length>0&&(n=e.lrephadrHistory.reduce((e,t)=>e+t),o=Math.ceil(n/e.lrephadrHistory.length)),console.log("当前页面使用lrephadr"+(a.multiLoad?"并行":"串行")+"网络请求%c"+h+"个%cJS/CSS文件，程序用时%c"+t+"毫秒%c，累计网络请求%c"+e.lrephadrHistory.length+"个%cJS/CSS文件，单文件平均用时%c"+o+"毫秒","color:#1b8884","","color:#1b8884","","color:#1b8884","","color:#1b8884","")},3e3)}(),"function"==typeof a.callback&&a.callback.call(!1)})()}};let n,o,a=document.getElementsByTagName("script"),i=[],s=[],r=[],c=!1,l=2,u="",d="",h=0,f=(new Date).getTime();for(let e=0;e<a.length;e++)if(a[e].hasAttribute("src")&&a[e].getAttribute("src").indexOf(atob("bHJlcGhhZHIu"))>=0){n=a.item(e);break}if(!n)return console.log&&console.log("%c"+decodeURIComponent(atob("JUU5JTk0JTk5JUU4JUFGJUFGJUU2JThGJTkwJUU3JUE0JUJBJTNBJUU3JUE4JThCJUU1JUJBJThGJUU2JTlDJUFBJUU2JTg4JTkwJUU1JThBJTlGJUU2JTg5JUE3JUU4JUExJThDJTJDJUU2JThGJTkyJUU0JUJCJUI2JUU1JTkwJThEJUU3JUE3JUIwJUU0JUI4JUJBbHJlcGhhZHIuanMlRTYlODglOTYlRTglODAlODVscmVwaGFkci5taW4uanMlRTYlQjMlQTglRTYlODQlOEYlRTUlQTQlQTclRTUlQjAlOEYlRTUlODYlOTkuJUU1JUE2JTgyJUU2JTlDJTg5JUU3JTk2JTkxJUU5JTk3JUFFJUU4JUFGJUI3JUU4JUFFJUJGJUU5JTk3JUFFJTNB")),"color:#F00"),!1;let p=console.log&&".min"!==t,m=location.pathname.replace(".html","");""===location.pathname.replace(/.*\//,"").replace(".html","")&&(m+="index"),m=0===m.indexOf("/")?m.substr(1):m,n.hasAttribute("data-active")?c=["true",""].includes(n.getAttribute("data-active")):p&&console.log('%c友情提示:script标签未设置"data-active"属性,默认为false.',"color:#69F;"),n.hasAttribute("data-lifecycle")?l=Number(n.getAttribute("data-lifecycle")):p&&console.log(`%c友情提示:script标签未设置"data-lifecycle"属性,默认为${l}小时.`,"color:#69F;"),n.hasAttribute("data-dir")?o=n.getAttribute("data-dir"):p&&console.log('%c友情提示:script标签未设置"data-dir"属性.',"color:#69F;"),n.hasAttribute("data-css")?s=n.getAttribute("data-css").split(","):p&&console.log('%c友情提示:script标签未设置"data-css"属性',"color:#69F;"),n.hasAttribute("data-js")?i=n.getAttribute("data-js").split(","):p&&console.log('%c友情提示:script标签未设置"data-js"属性',"color:#69F;"),n.hasAttribute("data-font")?r=n.getAttribute("data-font").split(","):p&&console.log('%c友情提示:script标签未设置"data-js"属性',"color:#69F;"),a.length>0&&""!==t&&a.item(0).remove();let g=new lrephadr;o&&(g.dataDir=o),g.dataCss=s,g.dataJs=i,g.dataFont=r,g.dataLifecycle=l,g.run()}(window.location.origin===window.top.location.origin?window.top:window);
