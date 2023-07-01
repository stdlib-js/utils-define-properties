// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).defineProperties=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperties?Object.defineProperties:null;var r=Object.defineProperties;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return e&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function u(t,r){return null!=t&&i.call(t,r)}var f="function"==typeof Symbol?Symbol.toStringTag:"";var c=n()?function(t){var r,e,n;if(null==t)return o.call(t);e=t[f],r=u(t,f);try{t[f]=void 0}catch(r){return o.call(t)}return n=o.call(t),r?t[f]=e:delete t[f],n}:function(t){return o.call(t)};var l=Array.isArray?Array.isArray:function(t){return"[object Array]"===c(t)};function a(t){return"object"==typeof t&&null!==t&&!l(t)}function p(t){return Object.keys(Object(t))}var s,y=void 0!==Object.keys;function b(t){return"[object Arguments]"===c(t)}s=function(){return b(arguments)}();var v=s,g="function"==typeof Object.defineProperty?Object.defineProperty:null;var d,h=Object.defineProperty,m=Object.prototype,j=m.toString,w=m.__defineGetter__,_=m.__defineSetter__,O=m.__lookupGetter__,S=m.__lookupSetter__;d=function(){try{return g({},"x",{}),!0}catch(t){return!1}}()?h:function(t,r,e){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===j.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===j.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(O.call(t,r)||S.call(t,r)?(n=t.__proto__,t.__proto__=m,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),i="get"in e,u="set"in e,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&w&&w.call(t,r,e.get),u&&_&&_.call(t,r,e.set),t};var E=d;function P(t,r,e){E(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function T(t){return"string"==typeof t}var I=String.prototype.valueOf;var A=n();function x(t){return"object"==typeof t&&(t instanceof String||(A?function(t){try{return I.call(t),!0}catch(t){return!1}}(t):"[object String]"===c(t)))}function N(t){return T(t)||x(t)}function V(t){return"number"==typeof t}P(N,"isPrimitive",T),P(N,"isObject",x);var k=Number,B=k.prototype.toString;var F=n();function L(t){return"object"==typeof t&&(t instanceof k||(F?function(t){try{return B.call(t),!0}catch(t){return!1}}(t):"[object Number]"===c(t)))}function C(t){return V(t)||L(t)}function G(t){return t!=t}function X(t){return V(t)&&G(t)}function Y(t){return L(t)&&G(t.valueOf())}function M(t){return X(t)||Y(t)}P(C,"isPrimitive",V),P(C,"isObject",L),P(M,"isPrimitive",X),P(M,"isObject",Y);var H=Number.POSITIVE_INFINITY,R=k.NEGATIVE_INFINITY,U=Math.floor;function W(t){return U(t)===t}function D(t){return t<H&&t>R&&W(t)}function J(t){return V(t)&&D(t)}function q(t){return L(t)&&D(t.valueOf())}function z(t){return J(t)||q(t)}P(z,"isPrimitive",J),P(z,"isObject",q);var K=Object.prototype.propertyIsEnumerable;var Q=!K.call("beep","0");function Z(t,r){var e;return null!=t&&(!(e=K.call(t,r))&&Q&&N(t)?!X(r=+r)&&J(r)&&r>=0&&r<t.length:e)}var $=v?b:function(t){return null!==t&&"object"==typeof t&&!l(t)&&"number"==typeof t.length&&W(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!Z(t,"callee")},tt=Array.prototype.slice;function rt(t){return null!==t&&"object"==typeof t}P(rt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!l(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(rt));var et=Z((function(){}),"prototype"),nt=!Z({toString:null},"toString");function ot(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&W(t.length)&&t.length>=0&&t.length<=9007199254740991}function it(t,r,e){var n,o;if(!ot(t)&&!T(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!J(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(M(r)){for(;o<n;o++)if(M(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var ut=/./;function ft(t){return"boolean"==typeof t}var ct=Boolean.prototype.toString;var lt=n();function at(t){return"object"==typeof t&&(t instanceof Boolean||(lt?function(t){try{return ct.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===c(t)))}function pt(t){return ft(t)||at(t)}function st(){return new Function("return this;")()}P(pt,"isPrimitive",ft),P(pt,"isObject",at);var yt="object"==typeof self?self:null,bt="object"==typeof window?window:null,vt="object"==typeof global?global:null;var gt=function(t){if(arguments.length){if(!ft(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return st()}if(yt)return yt;if(bt)return bt;if(vt)return vt;throw new Error("unexpected error. Unable to resolve global object.")}(),dt=gt.document&&gt.document.childNodes,ht=Int8Array;function mt(){return/^\s*function\s*([^(]*)/i}var jt=/^\s*function\s*([^(]*)/i;function wt(t){var r,e,n,o;if(("Object"===(e=c(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=jt.exec(n.toString()))return r[1]}return rt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}P(mt,"REGEXP",jt);var _t="function"==typeof ut||"object"==typeof ht||"function"==typeof dt?function(t){return wt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?wt(t).toLowerCase():r};function Ot(t){return t.constructor&&t.constructor.prototype===t}var St=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Et="undefined"==typeof window?void 0:window;var Pt=function(){var t;if("undefined"===_t(Et))return!1;for(t in Et)try{-1===it(St,t)&&u(Et,t)&&null!==Et[t]&&"object"===_t(Et[t])&&Ot(Et[t])}catch(t){return!0}return!1}(),Tt="undefined"!=typeof window;var It,At=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];It=y?function(){return 2!==(p(arguments)||"").length}(1,2)?function(t){return $(t)?p(tt.call(t)):p(t)}:p:function(t){var r,e,n,o,i,f,c;if(o=[],$(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!rt(t))return o;e=et&&n}for(i in t)e&&"prototype"===i||!u(t,i)||o.push(String(i));if(nt)for(r=function(t){if(!1===Tt&&!Pt)return Ot(t);try{return Ot(t)}catch(t){return!1}}(t),c=0;c<At.length;c++)f=At[c],r&&"constructor"===f||!u(t,f)||o.push(String(f));return o};var xt,Nt=It;function Vt(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}return xt=function(){try{return t({},{x:{}}),!0}catch(t){return!1}}()?r:function(t,r){var e,n,o;if(!a(t))throw new TypeError(Vt("0jJ3X",t));if(!a(r))throw new TypeError(Vt("invalid argument. Second argument must be an object containing property descriptors. Value: `%s`.",r));for(e=Nt(r),o=0;o<e.length;o++)n=e[o],E(t,n,r[n]);return t},xt}));
//# sourceMappingURL=index.js.map
