// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).defineProperties=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperties?Object.defineProperties:null;var r=Object.defineProperties;var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return t&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function a(e,r){return null!=e&&o.call(e,r)}var c="function"==typeof Symbol?Symbol:void 0,u="function"==typeof c?c.toStringTag:"";var f=n()?function(e){var r,t,n;if(null==e)return i.call(e);t=e[u],r=a(e,u);try{e[u]=void 0}catch(r){return i.call(e)}return n=i.call(e),r?e[u]=t:delete e[u],n}:function(e){return i.call(e)};var l=Array.isArray?Array.isArray:function(e){return"[object Array]"===f(e)};function s(e){return"object"==typeof e&&null!==e&&!l(e)}function p(e){return Object.keys(Object(e))}var g,d=void 0!==Object.keys;function h(e){return"[object Arguments]"===f(e)}g=function(){return h(arguments)}();var y=g,b="function"==typeof Object.defineProperty?Object.defineProperty:null;var v=Object.defineProperty;function w(e){return"number"==typeof e}function m(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function j(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+m(i):m(i)+e,n&&(e="-"+e)),e}var S=String.prototype.toLowerCase,E=String.prototype.toUpperCase;function O(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!w(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=j(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=j(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===E.call(e.specifier)?E.call(t):S.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var _=Math.abs,T=String.prototype.toLowerCase,k=String.prototype.toUpperCase,x=String.prototype.replace,I=/e\+(\d)$/,P=/e-(\d)$/,A=/^(\d+)$/,V=/^(\d+)e/,F=/\.0$/,C=/\.0*e/,$=/(\..*[^0])0*e/;function L(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!w(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":_(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=x.call(t,$,"$1e"),t=x.call(t,C,"e"),t=x.call(t,F,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=x.call(t,I,"e+0$1"),t=x.call(t,P,"e-0$1"),e.alternate&&(t=x.call(t,A,"$1."),t=x.call(t,V,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===k.call(e.specifier)?k.call(t):T.call(t)}function N(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var B=String.fromCharCode,R=Array.isArray;function G(e){return e!=e}function W(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function X(e){var r,t,n,i,o,a,c,u,f,l,s,p,g;if(!R(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,u=0;u<e.length;u++)if(n=e[u],"string"==typeof n)a+=n;else{if(r=void 0!==n.precision,!(n=W(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,G(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,G(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=O(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!G(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=G(o)?String(n.arg):B(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=L(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=j(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,s=n.width,p=n.padRight,g=void 0,(g=s-l.length)<0?l:l=p?l+N(g):N(g)+l)),a+=n.arg||"",c+=1}return a}var Z=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function M(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function U(e){var r,t,n,i;for(t=[],i=0,n=Z.exec(e);n;)(r=e.slice(i,Z.lastIndex-n[0].length)).length&&t.push(r),t.push(M(n)),i=Z.lastIndex,n=Z.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function Y(e){var r,t;if("string"!=typeof e)throw new TypeError(Y("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[U(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return X.apply(null,r)}var H,z=Object.prototype,D=z.toString,Q=z.__defineGetter__,q=z.__defineSetter__,J=z.__lookupGetter__,K=z.__lookupSetter__;H=function(){try{return b({},"x",{}),!0}catch(e){return!1}}()?v:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===D.call(e))throw new TypeError(Y("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===D.call(t))throw new TypeError(Y("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(J.call(e,r)||K.call(e,r)?(n=e.__proto__,e.__proto__=z,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&Q&&Q.call(e,r,t.get),a&&q&&q.call(e,r,t.set),e};var ee=H;function re(e,r,t){ee(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function te(e){return"string"==typeof e}var ne=String.prototype.valueOf;var ie=n();function oe(e){return"object"==typeof e&&(e instanceof String||(ie?function(e){try{return ne.call(e),!0}catch(e){return!1}}(e):"[object String]"===f(e)))}function ae(e){return te(e)||oe(e)}function ce(e){return"number"==typeof e}re(ae,"isPrimitive",te),re(ae,"isObject",oe);var ue=Number,fe=ue.prototype.toString;var le=n();function se(e){return"object"==typeof e&&(e instanceof ue||(le?function(e){try{return fe.call(e),!0}catch(e){return!1}}(e):"[object Number]"===f(e)))}function pe(e){return ce(e)||se(e)}function ge(e){return e!=e}function de(e){return ce(e)&&ge(e)}function he(e){return se(e)&&ge(e.valueOf())}function ye(e){return de(e)||he(e)}re(pe,"isPrimitive",ce),re(pe,"isObject",se),re(ye,"isPrimitive",de),re(ye,"isObject",he);var be=Number.POSITIVE_INFINITY,ve=ue.NEGATIVE_INFINITY,we=Math.floor;function me(e){return we(e)===e}function je(e){return e<be&&e>ve&&me(e)}function Se(e){return ce(e)&&je(e)}function Ee(e){return se(e)&&je(e.valueOf())}function Oe(e){return Se(e)||Ee(e)}re(Oe,"isPrimitive",Se),re(Oe,"isObject",Ee);var _e=Object.prototype.propertyIsEnumerable;var Te=!_e.call("beep","0");function ke(e,r){var t;return null!=e&&(!(t=_e.call(e,r))&&Te&&ae(e)?!de(r=+r)&&Se(r)&&r>=0&&r<e.length:t)}var xe=y?h:function(e){return null!==e&&"object"==typeof e&&!l(e)&&"number"==typeof e.length&&me(e.length)&&e.length>=0&&e.length<=4294967295&&a(e,"callee")&&!ke(e,"callee")},Ie=Array.prototype.slice;function Pe(e){return null!==e&&"object"==typeof e}re(Pe,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Y("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!l(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Pe));var Ae=ke((function(){}),"prototype"),Ve=!ke({toString:null},"toString"),Fe=9007199254740991;function Ce(e,r,t){var n,i,o;if(!(o=e,"object"==typeof o&&null!==o&&"number"==typeof o.length&&me(o.length)&&o.length>=0&&o.length<=Fe||te(e)))throw new TypeError(Y("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(0===(n=e.length))return-1;if(3===arguments.length){if(!Se(t))throw new TypeError(Y("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(ye(r)){for(;i<n;i++)if(ye(e[i]))return i}else for(;i<n;i++)if(e[i]===r)return i;return-1}var $e=/./;function Le(e){return"boolean"==typeof e}var Ne=Boolean,Be=Boolean.prototype.toString;var Re=n();function Ge(e){return"object"==typeof e&&(e instanceof Ne||(Re?function(e){try{return Be.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===f(e)))}function We(e){return Le(e)||Ge(e)}re(We,"isPrimitive",Le),re(We,"isObject",Ge);var Xe="object"==typeof self?self:null,Ze="object"==typeof window?window:null,Me="object"==typeof global?global:null,Ue="object"==typeof globalThis?globalThis:null;var Ye=function(e){if(arguments.length){if(!Le(e))throw new TypeError(Y("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(Ue)return Ue;if(Xe)return Xe;if(Ze)return Ze;if(Me)return Me;throw new Error("unexpected error. Unable to resolve global object.")}(),He=Ye.document&&Ye.document.childNodes,ze=Int8Array;function De(){return/^\s*function\s*([^(]*)/i}var Qe=/^\s*function\s*([^(]*)/i;function qe(e){var r,t,n,i;if(("Object"===(t=f(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Qe.exec(n.toString()))return r[1]}return Pe(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}re(De,"REGEXP",Qe);var Je="function"==typeof $e||"object"==typeof ze||"function"==typeof He?function(e){return qe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?qe(e).toLowerCase():r};function Ke(e){return e.constructor&&e.constructor.prototype===e}var er=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],rr="undefined"==typeof window?void 0:window;var tr=function(){var e;if("undefined"===Je(rr))return!1;for(e in rr)try{-1===Ce(er,e)&&a(rr,e)&&null!==rr[e]&&"object"===Je(rr[e])&&Ke(rr[e])}catch(e){return!0}return!1}(),nr="undefined"!=typeof window;var ir,or=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ir=d?function(){return 2!==(p(arguments)||"").length}(1,2)?function(e){return xe(e)?p(Ie.call(e)):p(e)}:p:function(e){var r,t,n,i,o,c,u;if(i=[],xe(e)){for(u=0;u<e.length;u++)i.push(u.toString());return i}if("string"==typeof e){if(e.length>0&&!a(e,"0"))for(u=0;u<e.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof e)&&!Pe(e))return i;t=Ae&&n}for(o in e)t&&"prototype"===o||!a(e,o)||i.push(String(o));if(Ve)for(r=function(e){if(!1===nr&&!tr)return Ke(e);try{return Ke(e)}catch(e){return!1}}(e),u=0;u<or.length;u++)c=or[u],r&&"constructor"===c||!a(e,c)||i.push(String(c));return i};var ar,cr=ir;function ur(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}return ar=function(){try{return e({},{x:{}}),!0}catch(e){return!1}}()?r:function(e,r){var t,n,i;if(!s(e))throw new TypeError(ur("1Sv3L",e));if(!s(r))throw new TypeError(ur("1SvEQ",r));for(t=cr(r),i=0;i<t.length;i++)n=t[i],ee(e,n,r[n]);return e},ar}));
//# sourceMappingURL=index.js.map
