!function(e){function n(n){for(var o,i,l=n[0],a=n[1],s=n[2],p=0,f=[];p<l.length;p++)i=l[p],c[i]&&f.push(c[i][0]),c[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(u&&u(n);f.length;)f.shift()();return t.push.apply(t,s||[]),r()}function r(){for(var e,n=0;n<t.length;n++){for(var r=t[n],o=!0,l=1;l<r.length;l++){var a=r[l];0!==c[a]&&(o=!1)}o&&(t.splice(n--,1),e=i(i.s=r[0]))}return e}var o={},c={0:0},t=[];function i(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=o,i.d=function(e,n,r){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(r,o,function(n){return e[n]}.bind(null,o));return r},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var l=window.webpackJsonp=window.webpackJsonp||[],a=l.push.bind(l);l.push=n,l=l.slice();for(var s=0;s<l.length;s++)n(l[s]);var u=a;t.push([0,1]),r()}([function(e,n,r){"use strict";r.r(n);r(1),r(2)},function(e,n,r){},function(e,n,r){(function(e){!function(){var n=e(".c-experiences__article--1"),r=e(".c-experiences__article--2"),o=e(".c-experiences__article--3"),c=e(".c-experiences__article--4"),t=0,i=375,l=880,a=1500,s=e(window).width();function u(){s>=980?(t=0,i=375,l=950,a=1200):s>=740?(t=310,i=930,l=1400,a=1800):(t=900,i=1800,l=2600,a=3600),console.log("width",s),console.log("window.scrollY",window.scrollY),console.log("check1",t),console.log("check2",i),console.log("check3",l),console.log("check4",a),window.scrollY>=t?n.addClass("c-experiences__article--1-animate"):(console.log("caiu aqui"),n.removeClass("c-experiences__article--1-animate")),window.scrollY>=i?r.addClass("c-experiences__article--2-animate"):(console.log("caiu aqu2"),r.removeClass("c-experiences__article--2-animate")),window.scrollY>=l?o.addClass("c-experiences__article--3-animate"):(console.log("caiu aqui 3"),o.removeClass("c-experiences__article--3-animate")),window.scrollY>=a?c.addClass("c-experiences__article--4-animate"):(console.log("caiu aqui 4"),c.removeClass("c-experiences__article--4-animate"))}u(),window.addEventListener("scroll",u)}()}).call(this,r(3))}]);
//# sourceMappingURL=app.f4118641.js.map