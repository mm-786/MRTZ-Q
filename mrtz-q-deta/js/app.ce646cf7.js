(function(e){function t(t){for(var n,o,i=t[0],c=t[1],l=t[2],s=0,f=[];s<i.length;s++)o=i[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(u.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={1:0},a={1:0},u=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{2:"2984c32b",3:"434a333b",4:"f6df5c65"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={2:1,3:1,4:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{2:"18f79fa3",3:"8e5e4c8f",4:"458addf8"}[e]+".css",a=c.p+n,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var l=u[i],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===n||s===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],s=l.getAttribute("data-href");if(s===n||s===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],p.parentNode.removeChild(p),r(u)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=s;u.push([0,0]),r()})({0:function(e,t,r){e.exports=r("2f39")},"2f39":function(e,t,r){"use strict";r.r(t);r("7d6e"),r("e54f"),r("985d"),r("31cd");var n=r("2b0e"),o=r("1f91"),a=r("42d2"),u=r("b05d");n["a"].use(u["a"],{config:{},lang:o["a"],iconSet:a["a"]});var i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},c=[],l={name:"App",mounted(){}},s=l,f=r("2877"),p=Object(f["a"])(s,i,c,!1,null,null,null),d=p.exports,h=r("2f62"),v=r("0e44");n["a"].use(h["a"]);var m=function(){const e=new h["a"].Store({plugins:[Object(v["a"])()],state:{quotes:[],kys:[],like:{}},mutations:{quotes(e,t){e.quotes=t},key(e,t){e.kys=t},like(e,t){e.like=t}},strict:!1});return e},y=r("8c4f");const b=[{path:"/",component:()=>Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"8b24"))},{path:"/add",component:()=>Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"5558"))}]}];var g=b;n["a"].use(y["a"]);var w=function(){const e=new y["a"]({scrollBehavior:()=>({x:0,y:0}),routes:g,mode:"hash",base:""});return e},P=async function(){const e="function"===typeof m?await m({Vue:n["a"]}):m,t="function"===typeof w?await w({Vue:n["a"],store:e}):w;e.$router=t;const r={router:t,store:e,render:e=>e(d),el:"#q-app"};return{app:r,store:e,router:t}},O=r("cee4");n["a"].prototype.$axios=O["a"];const j="";async function k(){const{app:e,store:t,router:r}=await P();let o=!1;const a=e=>{o=!0;const t=Object(e)===e?r.resolve(e).route.fullPath:e;window.location.href=t},u=window.location.href.replace(window.location.origin,""),i=[void 0];for(let l=0;!1===o&&l<i.length;l++)if("function"===typeof i[l])try{await i[l]({app:e,router:r,store:t,Vue:n["a"],ssrContext:null,redirect:a,urlPath:u,publicPath:j})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==o&&new n["a"](e)}k()},"31cd":function(e,t,r){}});