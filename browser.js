// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,t=Object.prototype,n=t.toString,o=t.__defineGetter__,i=t.__defineSetter__,u=t.__lookupGetter__,a=t.__lookupSetter__,l=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,l){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof l||null===l||"[object Array]"===n.call(l))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+l+"`.");if((c="value"in l)&&(u.call(e,r)||a.call(e,r)?(f=e.__proto__,e.__proto__=t,delete e[r],e[r]=l.value,e.__proto__=f):e[r]=l.value),_="get"in l,p="set"in l,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&o&&o.call(e,r,l.get),p&&i&&i.call(e,r,l.set),e};function f(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function c(e){return Math.abs(e)}function _(e,r,t){var n,o,i,u,a,l;if(e<=0)return 0;if(1===e||0===t)return r[0];for(o=t<0?(1-e)*t:0,n=0,a=0,l=0;l<e;l++)u=n+(i=r[o]),c(n)>=c(i)?a+=n-u+i:a+=i-u+n,n=u,o+=t;return n+a}function p(e,r,t,n){var o,i,u,a,l,f;if(e<=0)return 0;if(1===e||0===t)return r[n];for(i=n,o=0,l=0,f=0;f<e;f++)a=o+(u=r[i]),c(o)>=c(u)?l+=o-a+u:l+=u-a+o,o=a,i+=t;return o+l}function d(e,r,t){return _(e,r,t)}return f(_,"ndarray",p),f(d,"ndarray",(function(e,r,t,n){return p(e,r,t,n)})),d},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).gsum=r();
//# sourceMappingURL=browser.js.map
