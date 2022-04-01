// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).gsum=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__;var f=t,c=function(e,r,t){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||l.call(e,r)?(f=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=f):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),p&&i&&i.call(e,r,t.set),e},_=r()?f:c;var p=function(e,r,t){_(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})};var d=function(e){return Math.abs(e)},y=d;var b=d;var s=function(e,r,t){var n,o,a,i,u,l;if(e<=0)return 0;if(1===e||0===t)return r[0];for(o=t<0?(1-e)*t:0,n=0,u=0,l=0;l<e;l++)i=n+(a=r[o]),y(n)>=y(a)?u+=n-i+a:u+=a-i+n,n=i,o+=t;return n+u};p(s,"ndarray",(function(e,r,t,n){var o,a,i,u,l,f;if(e<=0)return 0;if(1===e||0===t)return r[n];for(a=n,o=0,l=0,f=0;f<e;f++)u=o+(i=r[a]),b(o)>=b(i)?l+=o-u+i:l+=i-u+o,o=u,a+=t;return o+l}));var v=s;var m=s.ndarray;var g=function(e,r,t){return v(e,r,t)};return p(g,"ndarray",(function(e,r,t,n){return m(e,r,t,n)})),g}));
//# sourceMappingURL=bundle.js.map
