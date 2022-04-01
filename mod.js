// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperties?Object.defineProperties:null;var t=function(){try{return e({},{x:{}}),!0}catch(r){return!1}},n=Object.defineProperties;var i=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var o=function(){return i&&"symbol"==typeof Symbol.toStringTag},a=Object.prototype.toString,u=a;var c=function(r){return u.call(r)},f=Object.prototype.hasOwnProperty;var s=function(r,e){return null!=r&&f.call(r,e)},l="function"==typeof Symbol?Symbol.toStringTag:"",p=s,v=l,g=a;var h=c,d=function(r){var e,t,n;if(null==r)return g.call(r);t=r[v],e=p(r,v);try{r[v]=void 0}catch(e){return g.call(r)}return n=g.call(r),e?r[v]=t:delete r[v],n},m=o()?d:h,b=m;var y=Array.isArray?Array.isArray:function(r){return"[object Array]"===b(r)},w=y;var j=function(r){return"object"==typeof r&&null!==r&&!w(r)};var E=function(r){return Object.keys(Object(r))},P=E;var O=function(){return function(){return 2!==(P(arguments)||"").length}(1,2)},_=void 0!==Object.keys,S=m;var T=function(r){return"[object Arguments]"===S(r)},x=T;var V=function(){return x(arguments)}(),k="function"==typeof Object.defineProperty?Object.defineProperty:null;var I=function(){try{return k({},"x",{}),!0}catch(r){return!1}},A=Object.defineProperty,F=Object.prototype,R=F.toString,$=F.__defineGetter__,M=F.__defineSetter__,C=F.__lookupGetter__,N=F.__lookupSetter__;var B=function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(C.call(r,e)||N.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&$&&$.call(r,e,t.get),a&&M&&M.call(r,e,t.set),r},G=A,L=B,W=I()?G:L,X=W;var Z=function(r,e,t){X(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},Y=Z;var z=function(r){return"string"==typeof r},D=String.prototype.valueOf;var H=m,U=function(r){try{return D.call(r),!0}catch(r){return!1}},q=o();var J=function(r){return"object"==typeof r&&(r instanceof String||(q?U(r):"[object String]"===H(r)))},K=z,Q=J;var rr=Y,er=function(r){return K(r)||Q(r)},tr=J;rr(er,"isPrimitive",z),rr(er,"isObject",tr);var nr=er;var ir=function(r){return"number"==typeof r},or=Number,ar=or.prototype.toString;var ur=m,cr=or,fr=function(r){try{return ar.call(r),!0}catch(r){return!1}},sr=o();var lr=function(r){return"object"==typeof r&&(r instanceof cr||(sr?fr(r):"[object Number]"===ur(r)))},pr=ir,vr=lr;var gr=Y,hr=function(r){return pr(r)||vr(r)},dr=lr;gr(hr,"isPrimitive",ir),gr(hr,"isObject",dr);var mr=hr;var br=function(r){return r!=r},yr=mr.isPrimitive,wr=br;var jr=function(r){return yr(r)&&wr(r)},Er=mr.isObject,Pr=br;var Or=function(r){return Er(r)&&Pr(r.valueOf())},_r=jr,Sr=Or;var Tr=Y,xr=function(r){return _r(r)||Sr(r)},Vr=Or;Tr(xr,"isPrimitive",jr),Tr(xr,"isObject",Vr);var kr=xr,Ir=Number.POSITIVE_INFINITY,Ar=or.NEGATIVE_INFINITY,Fr=Math.floor;var Rr=function(r){return Fr(r)===r},$r=Ir,Mr=Ar,Cr=Rr;var Nr=function(r){return r<$r&&r>Mr&&Cr(r)},Br=mr.isPrimitive,Gr=Nr;var Lr=function(r){return Br(r)&&Gr(r)},Wr=mr.isObject,Xr=Nr;var Zr=function(r){return Wr(r)&&Xr(r.valueOf())},Yr=Lr,zr=Zr;var Dr=Y,Hr=function(r){return Yr(r)||zr(r)},Ur=Zr;Dr(Hr,"isPrimitive",Lr),Dr(Hr,"isObject",Ur);var qr,Jr=Hr,Kr=Object.prototype.propertyIsEnumerable;qr=!Kr.call("beep","0");var Qr=nr,re=kr.isPrimitive,ee=Jr.isPrimitive,te=Kr,ne=qr;var ie=function(r,e){var t;return null!=r&&(!(t=te.call(r,e))&&ne&&Qr(r)?!re(e=+e)&&ee(e)&&e>=0&&e<r.length:t)},oe=ie,ae=s,ue=oe,ce=y,fe=Rr;var se=V?T:function(r){return null!==r&&"object"==typeof r&&!ce(r)&&"number"==typeof r.length&&fe(r.length)&&r.length>=0&&r.length<=4294967295&&ae(r,"callee")&&!ue(r,"callee")},le=se,pe=E,ve=Array.prototype.slice;var ge=function(r){return le(r)?pe(ve.call(r)):pe(r)},he=y;var de=function(r){return null!==r&&"object"==typeof r};Y(de,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!he(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(de));var me=de;var be=oe((function(){}),"prototype"),ye=!oe({toString:null},"toString"),we=Rr;var je=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&we(r.length)&&r.length>=0&&r.length<=9007199254740991},Ee=kr,Pe=je,Oe=nr.isPrimitive,_e=Jr.isPrimitive;var Se=function(r,e,t){var n,i;if(!Pe(r)&&!Oe(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(n=r.length))return-1;if(3===arguments.length){if(!_e(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Ee(e)){for(;i<n;i++)if(Ee(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1},Te=/./;var xe=function(r){return"boolean"==typeof r},Ve=Boolean.prototype.toString;var ke=m,Ie=function(r){try{return Ve.call(r),!0}catch(r){return!1}},Ae=o();var Fe=function(r){return"object"==typeof r&&(r instanceof Boolean||(Ae?Ie(r):"[object Boolean]"===ke(r)))},Re=xe,$e=Fe;var Me=Y,Ce=function(r){return Re(r)||$e(r)},Ne=Fe;Me(Ce,"isPrimitive",xe),Me(Ce,"isObject",Ne);var Be="object"==typeof self?self:null,Ge="object"==typeof window?window:null,Le=Ce.isPrimitive,We=function(){return new Function("return this;")()},Xe=Be,Ze=Ge,Ye=r(Object.freeze({__proto__:null}));var ze=function(r){if(arguments.length){if(!Le(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return We()}if(Xe)return Xe;if(Ze)return Ze;if(Ye)return Ye;throw new Error("unexpected error. Unable to resolve global object.")},De=ze(),He=De.document&&De.document.childNodes,Ue=Int8Array,qe=Te,Je=He,Ke=Ue;var Qe=function(){return"function"==typeof qe||"object"==typeof Ke||"function"==typeof Je};var rt=function(){return/^\s*function\s*([^(]*)/i},et=rt;Y(et,"REGEXP",rt());var tt=me;var nt=m,it=et.REGEXP,ot=function(r){return tt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var at=function(r){var e,t,n;if(("Object"===(t=nt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=it.exec(n.toString()))return e[1]}return ot(r)?"Buffer":t},ut=at;var ct=at;var ft=function(r){var e;return null===r?"null":"object"===(e=typeof r)?ut(r).toLowerCase():e},st=function(r){return ct(r).toLowerCase()},lt=Qe()?st:ft;var pt,vt=function(r){return r.constructor&&r.constructor.prototype===r},gt="undefined"==typeof window?void 0:window,ht=s,dt=Se,mt=lt,bt=vt,yt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],wt=gt;pt=function(){var r;if("undefined"===mt(wt))return!1;for(r in wt)try{-1===dt(yt,r)&&ht(wt,r)&&null!==wt[r]&&"object"===mt(wt[r])&&bt(wt[r])}catch(r){return!0}return!1}();var jt="undefined"!=typeof window,Et=pt,Pt=vt,Ot=jt;var _t=me,St=s,Tt=se,xt=be,Vt=ye,kt=function(r){if(!1===Ot&&!Et)return Pt(r);try{return Pt(r)}catch(r){return!1}},It=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var At=E,Ft=ge,Rt=function(r){var e,t,n,i,o,a,u;if(i=[],Tt(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!St(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1===(n="function"==typeof r)&&!_t(r))return i;t=xt&&n}for(o in r)t&&"prototype"===o||!St(r,o)||i.push(String(o));if(Vt)for(e=kt(r),u=0;u<It.length;u++)a=It[u],e&&"constructor"===a||!St(r,a)||i.push(String(a));return i},$t=_?O()?Ft:At:Rt,Mt=je,Ct=Jr.isPrimitive,Nt=nr.isPrimitive,Bt=kr.isPrimitive;var Gt=function(r,e,t){var n,i,o;if(!Mt(r)&&!Nt(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Ct(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Nt(r)){if(!Nt(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Bt(e)){for(o=i;o<n;o++)if(Bt(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},Lt=nr.isPrimitive;var Wt=function(r){if(!Lt(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Xt=nr.isPrimitive;var Zt=function(r){if(!Xt(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Yt=Wt,zt=Zt,Dt=nr.isPrimitive;var Ht=function(r){return Dt(r)&&r===zt(r)&&r!==Yt(r)},Ut=Ir,qt=Ar;var Jt=function(r){return r==r&&r>qt&&r<Ut},Kt=Jr.isPrimitive;var Qt=function(r){return Kt(r)&&r>=0},rn=Jr.isObject;var en=function(r){return rn(r)&&r.valueOf()>=0},tn=Qt,nn=en;var on=Y,an=function(r){return tn(r)||nn(r)},un=en;on(an,"isPrimitive",Qt),on(an,"isObject",un);var cn=an.isPrimitive,fn=nr.isPrimitive;var sn=function(r,e){var t,n;if(!fn(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!cn(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},ln=Jr.isPrimitive,pn=nr.isPrimitive;var vn=sn,gn=function(r,e,t){var n,i;if(!pn(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!pn(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!ln(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var hn=function(r,e,t){var n=!1,i=e-r.length;return i<0||(gn(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+vn("0",i):vn("0",i)+r,n&&(r="-"+r)),r},dn=Ht,mn=Zt,bn=Wt,yn=Jt,wn=mr.isPrimitive,jn=hn;var En=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!yn(n)){if(!wn(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=jn(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=jn(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=dn(r.specifier)?mn(t):bn(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Pn=nr.isPrimitive,On=/[-\/\\^$*+?.()|[\]{}]/g;var _n=function(r){var e,t;if(!Pn(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(On,"\\$&"):(e=(e=r.substring(1,t)).replace(On,"\\$&"),r=r[0]+e+r.substring(t))},Sn=lt;var Tn=function(r){return"function"===Sn(r)},xn=RegExp.prototype.exec;var Vn=m,kn=function(r){try{return xn.call(r),!0}catch(r){return!1}},In=o();var An=_n,Fn=Tn,Rn=nr.isPrimitive,$n=function(r){return"object"==typeof r&&(r instanceof RegExp||(In?kn(r):"[object RegExp]"===Vn(r)))};var Mn=Ht,Cn=Zt,Nn=Wt,Bn=function(r,e,t){if(!Rn(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Rn(e))e=An(e),e=new RegExp(e,"g");else if(!$n(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Rn(t)&&!Fn(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Gn=Jt,Ln=mr.isPrimitive,Wn=function(r){return Math.abs(r)},Xn=/e\+(\d)$/,Zn=/e-(\d)$/,Yn=/^(\d+)$/,zn=/^(\d+)e/,Dn=/\.0$/,Hn=/\.0*e/,Un=/(\..*[^0])0*e/;var qn=function(r){var e,t,n=parseFloat(r.arg);if(!Gn(n)){if(!Ln(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Wn(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Bn(t,Un,"$1e"),t=Bn(t,Hn,"e"),t=Bn(t,Dn,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Bn(t,Xn,"e+0$1"),t=Bn(t,Zn,"e-0$1"),r.alternate&&(t=Bn(t,Yn,"$1."),t=Bn(t,zn,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Mn(r.specifier)?Cn(t):Nn(t)},Jn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Kn=sn;var Qn=nr.isPrimitive,ri=Gt,ei=br,ti=En,ni=qn,ii=function(r){var e,t,n,i,o;for(e=0,n=[],o=Jn.exec(r);o;)(t=r.slice(e,Jn.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=Jn.lastIndex,o=Jn.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},oi=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Kn(" ",n):Kn(" ",n)+r},ai=hn,ui=String.fromCharCode;var ci=j,fi=$t,si=W,li=function(r){var e,t,n,i,o,a,u,c,f;if(!Qn(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=ii(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],Qn(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!ri(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,ei(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,ei(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=ti(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!ei(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ei(o)?String(n.arg):ui(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=ni(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=ai(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=oi(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a};var pi=function(r,e){var t,n,i;if(!ci(r))throw new TypeError(li("invalid argument. First argument must be an object. Value: `%s`.",r));if(!ci(e))throw new TypeError(li("invalid argument. Second argument must be an object of property descriptors. Value: `%s`.",e));for(t=fi(e),i=0;i<t.length;i++)n=t[i],si(r,n,e[n]);return r},vi=n,gi=pi,hi=t()?vi:gi;export{hi as default};
//# sourceMappingURL=mod.js.map
