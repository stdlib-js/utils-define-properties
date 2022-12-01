// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperties?Object.defineProperties:null;var r=Object.defineProperties;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return e&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function u(t,r){return null!=t&&i.call(t,r)}var f="function"==typeof Symbol?Symbol.toStringTag:"";var c=n()?function(t){var r,e,n;if(null==t)return o.call(t);e=t[f],r=u(t,f);try{t[f]=void 0}catch(r){return o.call(t)}return n=o.call(t),r?t[f]=e:delete t[f],n}:function(t){return o.call(t)};var l=Array.isArray?Array.isArray:function(t){return"[object Array]"===c(t)};function a(t){return"object"==typeof t&&null!==t&&!l(t)}function p(t){return Object.keys(Object(t))}var s=void 0!==Object.keys;function y(t){return"[object Arguments]"===c(t)}var b=function(){return y(arguments)}(),v="function"==typeof Object.defineProperty?Object.defineProperty:null;var g,d=Object.defineProperty,h=Object.prototype,m=h.toString,j=h.__defineGetter__,w=h.__defineSetter__,_=h.__lookupGetter__,O=h.__lookupSetter__;g=function(){try{return v({},"x",{}),!0}catch(t){return!1}}()?d:function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===m.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===m.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(_.call(t,r)||O.call(t,r)?(n=t.__proto__,t.__proto__=h,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&j&&j.call(t,r,e.get),u&&w&&w.call(t,r,e.set),t};var S=g;function E(t,r,e){S(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function P(t){return"string"==typeof t}var I=String.prototype.valueOf;var T=n();function A(t){return"object"==typeof t&&(t instanceof String||(T?function(t){try{return I.call(t),!0}catch(t){return!1}}(t):"[object String]"===c(t)))}function N(t){return P(t)||A(t)}function V(t){return"number"==typeof t}E(N,"isPrimitive",P),E(N,"isObject",A);var k=Number,x=k.prototype.toString;var B=n();function F(t){return"object"==typeof t&&(t instanceof k||(B?function(t){try{return x.call(t),!0}catch(t){return!1}}(t):"[object Number]"===c(t)))}function L(t){return V(t)||F(t)}function C(t){return t!=t}function G(t){return V(t)&&C(t)}function X(t){return F(t)&&C(t.valueOf())}function Y(t){return G(t)||X(t)}E(L,"isPrimitive",V),E(L,"isObject",F),E(Y,"isPrimitive",G),E(Y,"isObject",X);var M=Number.POSITIVE_INFINITY,H=k.NEGATIVE_INFINITY,R=Math.floor;function U(t){return R(t)===t}function W(t){return t<M&&t>H&&U(t)}function D(t){return V(t)&&W(t)}function J(t){return F(t)&&W(t.valueOf())}function q(t){return D(t)||J(t)}E(q,"isPrimitive",D),E(q,"isObject",J);var z=Object.prototype.propertyIsEnumerable;var K=!z.call("beep","0");function Q(t,r){var e;return null!=t&&(!(e=z.call(t,r))&&K&&N(t)?!G(r=+r)&&D(r)&&r>=0&&r<t.length:e)}var Z=b?y:function(t){return null!==t&&"object"==typeof t&&!l(t)&&"number"==typeof t.length&&U(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!Q(t,"callee")},$=Array.prototype.slice;function tt(t){return null!==t&&"object"==typeof t}E(tt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!l(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(tt));var rt=Q((function(){}),"prototype"),et=!Q({toString:null},"toString");function nt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&U(t.length)&&t.length>=0&&t.length<=9007199254740991}function ot(t,r,e){var n,o;if(!nt(t)&&!P(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!D(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(Y(r)){for(;o<n;o++)if(Y(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var it=/./;function ut(t){return"boolean"==typeof t}var ft=Boolean.prototype.toString;var ct=n();function lt(t){return"object"==typeof t&&(t instanceof Boolean||(ct?function(t){try{return ft.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===c(t)))}function at(t){return ut(t)||lt(t)}function pt(){return new Function("return this;")()}E(at,"isPrimitive",ut),E(at,"isObject",lt);var st="object"==typeof self?self:null,yt="object"==typeof window?window:null,bt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},vt="object"==typeof bt?bt:null;var gt=function(t){if(arguments.length){if(!ut(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return pt()}if(st)return st;if(yt)return yt;if(vt)return vt;throw new Error("unexpected error. Unable to resolve global object.")}(),dt=gt.document&&gt.document.childNodes,ht=Int8Array;function mt(){return/^\s*function\s*([^(]*)/i}var jt=/^\s*function\s*([^(]*)/i;function wt(t){var r,e,n,o;if(("Object"===(e=c(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=jt.exec(n.toString()))return r[1]}return tt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}E(mt,"REGEXP",jt);var _t="function"==typeof it||"object"==typeof ht||"function"==typeof dt?function(t){return wt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?wt(t).toLowerCase():r};function Ot(t){return t.constructor&&t.constructor.prototype===t}var St=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Et="undefined"==typeof window?void 0:window;var Pt=function(){var t;if("undefined"===_t(Et))return!1;for(t in Et)try{-1===ot(St,t)&&u(Et,t)&&null!==Et[t]&&"object"===_t(Et[t])&&Ot(Et[t])}catch(t){return!0}return!1}(),It="undefined"!=typeof window;var Tt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var At,Nt=s?function(){return 2!==(p(arguments)||"").length}(1,2)?function(t){return Z(t)?p($.call(t)):p(t)}:p:function(t){var r,e,n,o,i,f,c;if(o=[],Z(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!tt(t))return o;e=rt&&n}for(i in t)e&&"prototype"===i||!u(t,i)||o.push(String(i));if(et)for(r=function(t){if(!1===It&&!Pt)return Ot(t);try{return Ot(t)}catch(t){return!1}}(t),c=0;c<Tt.length;c++)f=Tt[c],r&&"constructor"===f||!u(t,f)||o.push(String(f));return o};function Vt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}At=function(){try{return t({},{x:{}}),!0}catch(t){return!1}}()?r:function(t,r){var e,n,o;if(!a(t))throw new TypeError(Vt("0jJ3X",t));if(!a(r))throw new TypeError(Vt("invalid argument. Second argument must be an object containing property descriptors. Value: `%s`.",r));for(e=Nt(r),o=0;o<e.length;o++)n=e[o],S(t,n,r[n]);return t};var kt=At;export{kt as default};
//# sourceMappingURL=mod.js.map