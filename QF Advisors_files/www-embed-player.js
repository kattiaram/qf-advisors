(function(){'use strict';var p;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ca=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=da(this);function u(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ca(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
var ia=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ka=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=ia(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),la;
if(typeof Object.setPrototypeOf=="function")la=Object.setPrototypeOf;else{var ma;a:{var na={a:!0},pa={};try{pa.__proto__=na;ma=pa.a;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=la;
function w(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.za=b.prototype}
function z(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ra(a){if(!(a instanceof Array)){a=z(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function sa(a){return ta(a,a)}
function ta(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function ua(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var va=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ua(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||va});
function wa(){this.B=!1;this.H=null;this.i=void 0;this.h=1;this.u=this.o=0;this.P=this.j=null}
function xa(a){if(a.B)throw new TypeError("Generator is already running");a.B=!0}
wa.prototype.G=function(a){this.i=a};
function ya(a,b){a.j={exception:b,md:!0};a.h=a.o||a.u}
wa.prototype.return=function(a){this.j={return:a};this.h=this.u};
wa.prototype.yield=function(a,b){this.h=b;return{value:a}};
wa.prototype.D=function(a){this.h=a};
function za(a,b,c){a.o=b;c!=void 0&&(a.u=c)}
function Aa(a){a.o=0;var b=a.j.exception;a.j=null;return b}
function Ba(a){var b=a.P.splice(0)[0];(b=a.j=a.j||b)?b.md?a.h=a.o||a.u:b.D!=void 0&&a.u<b.D?(a.h=b.D,a.j=null):a.h=a.u:a.h=0}
function Ca(a){this.h=new wa;this.i=a}
function Da(a,b){xa(a.h);var c=a.h.H;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.h.H,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.B=!1,e;var f=e.value}catch(g){return a.h.H=null,ya(a.h,g),Fa(a)}a.h.H=null;d.call(a.h,f);return Fa(a)}
function Fa(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.B=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.B=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.md)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){xa(a.h);a.h.H?b=Ea(a,a.h.H.next,b,a.h.G):(a.h.G(b),b=Fa(a));return b};
this.throw=function(b){xa(a.h);a.h.H?b=Ea(a,a.h.H["throw"],b,a.h.G):(ya(a.h,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ha(new Ga(new Ca(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return ka});
u("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.B=!1;var h=this.o();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.o=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Y),reject:g(this.u)}};
b.prototype.Y=function(g){if(g===this)this.u(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ia(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.X(g):this.H(g)}};
b.prototype.X=function(g){var h=void 0;try{h=g.then}catch(k){this.u(k);return}typeof h=="function"?this.oa(h,g):this.H(g)};
b.prototype.u=function(g){this.G(2,g)};
b.prototype.H=function(g){this.G(1,g)};
b.prototype.G=function(g,h){if(this.h!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;this.h===2&&this.ga();this.P()};
b.prototype.ga=function(){var g=this;e(function(){if(g.U()){var h=fa.console;typeof h!=="undefined"&&h.error(g.j)}},1)};
b.prototype.U=function(){if(this.B)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.P=function(){if(this.i!=null){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ia=function(g){var h=this.o();g.Yb(h.resolve,h.reject)};
b.prototype.oa=function(g,h){var k=this.o();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,t){return typeof r=="function"?function(v){try{l(r(v))}catch(x){m(x)}}:t}
var l,m,n=new b(function(r,t){l=r;m=t});
this.Yb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Yb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;this.i==null?f.i(k):this.i.push(k);this.B=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=z(g),m=l.next();!m.done;m=l.next())d(m.value).Yb(h,k)})};
b.all=function(g){var h=z(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(x){r[v]=x;t--;t==0&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).Yb(n(r.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||qa});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("globalThis",function(a){return a||fa});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=z(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!ua(k,g)){var l=new c;ca(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ua(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ua(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ua(k,g)&&ua(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ua(k,g)&&ua(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ha(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ua(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=z(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(z([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=z(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(z([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
function Ka(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ua(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Ka(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ua(b,d)&&c.push([d,b[d]]);return c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Object.getOwnPropertySymbols",function(a){return a?a:function(){return[]}});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});
u("Math.clz32",function(a){return a?a:function(b){b=Number(b)>>>0;if(b===0)return 32;var c=0;(b&4294901760)===0&&(b<<=16,c+=16);(b&4278190080)===0&&(b<<=8,c+=8);(b&4026531840)===0&&(b<<=4,c+=4);(b&3221225472)===0&&(b<<=2,c+=2);(b&2147483648)===0&&c++;return c}});
u("Math.log10",function(a){return a?a:function(b){return Math.log(b)/Math.LN10}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var La=La||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function F(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Oa(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Qa(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(Math.random()*1E9>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Wa=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ua:Va;return Wa.apply(null,arguments)}
function Xa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ya(){return Date.now()}
function Za(a){return a}
function $a(a,b){function c(){}
c.prototype=b.prototype;a.za=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function ab(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
$a(ab,Error);ab.prototype.name="CustomError";function cb(a,b){if(!b)return a;b.indexOf("&")===0&&(b=b.substring(1));var c=/[?&]adurl=([^&]*)/.exec(a);return c?""+a.slice(0,c.index+1)+b+"&"+a.slice(c.index+1):""+a+(a.indexOf("?")===-1?"?":"&")+b}
function db(a){var b=a.url;a=a.Mh;this.j=b;this.H=a;a=/[?&]dsh=1(&|$)/.test(b);this.o=!a&&/[?&]ae=1(&|$)/.test(b);this.u=!a&&/[?&]ae=2(&|$)/.test(b);if((this.h=/[?&]adurl=([^&]*)/.exec(b))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
function eb(a){a=a.H;if(!a)return"";var b="";a.platform&&(b+="&uap="+encodeURIComponent(a.platform));a.platformVersion&&(b+="&uapv="+encodeURIComponent(a.platformVersion));a.uaFullVersion&&(b+="&uafv="+encodeURIComponent(a.uaFullVersion));a.architecture&&(b+="&uaa="+encodeURIComponent(a.architecture));a.model&&(b+="&uam="+encodeURIComponent(a.model));a.bitness&&(b+="&uab="+encodeURIComponent(a.bitness));a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(function(c){return encodeURIComponent(c.brand)+
";"+encodeURIComponent(c.version)}).join("|")));
typeof a.wow64!=="undefined"&&(b+="&uaw="+Number(a.wow64));return b}
;var fb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var gb=globalThis.trustedTypes,hb;function ib(){var a=null;if(!gb)return a;try{var b=function(c){return c};
a=gb.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function jb(){hb===void 0&&(hb=ib());return hb}
;function kb(a){this.h=a}
kb.prototype.toString=function(){return this.h+""};
function lb(a){var b=jb();return new kb(b?b.createScriptURL(a):a)}
function mb(a){if(a instanceof kb)return a.h;throw Error("");}
;var nb=sa([""]),ob=ta(["\x00"],["\\0"]),pb=ta(["\n"],["\\n"]),qb=ta(["\x00"],["\\u0000"]);function rb(a){return a.toString().indexOf("`")===-1}
rb(function(a){return a(nb)})||rb(function(a){return a(ob)})||rb(function(a){return a(pb)})||rb(function(a){return a(qb)});function sb(a){this.h=a}
sb.prototype.toString=function(){return this.h};
var tb=new sb("about:invalid#zClosurez");function ub(a){this.te=a}
function vb(a){return new ub(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var wb=[vb("data"),vb("http"),vb("https"),vb("mailto"),vb("ftp"),new ub(function(a){return/^[^:]*([/?#]|$)/.test(a)})],xb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function yb(a){if(a instanceof sb)if(a instanceof sb)a=a.h;else throw Error("");else a=xb.test(a)?a:void 0;return a}
;function zb(a,b){b=yb(b);b!==void 0&&(a.href=b)}
;function Ab(){this.h=Bb[0].toLowerCase()}
Ab.prototype.toString=function(){return this.h};function Cb(a){this.h=a}
Cb.prototype.toString=function(){return this.h+""};function Db(a){var b="true".toString(),c=[new Ab];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Ab)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function Eb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;var Fb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Gb(a,b){if(b instanceof kb)a.href=mb(b).toString(),a.rel="stylesheet";else{if(Fb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=yb(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;function Hb(a){a=a===void 0?document:a;var b,c;a=(c=(b="document"in a?a.document:a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Ib(a){this.h=a}
Ib.prototype.toString=function(){return this.h+""};function Jb(a){var b=Hb(a.ownerDocument);b&&a.setAttribute("nonce",b)}
function Kb(a,b){if(b instanceof Ib)b=b.h;else throw Error("");a.textContent=b;Jb(a)}
function Lb(a,b){a.src=mb(b);Jb(a)}
;var Mb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Nb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Ob=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Pb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Qb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Nb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Rb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Sb(a,b){b=Mb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Tb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Ub(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Vb(a){var b=F("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Wb(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Xb[c])c=Xb[c];else{c=String(c);if(!Xb[c]){var f=/function\s+([^\(]+)/m.exec(c);Xb[c]=f?f[1]:"[Anonymous]"}c=Xb[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function Wb(a,b){b||(b={});b[Yb(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[Yb(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=Wb(d,b));a=a.errors;if(Array.isArray(a)){d=1;var e;for(e=0;e<a.length&&!(d>4);e++)b[Yb(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=Wb(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function Yb(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var Xb={};function Zb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var $b=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ac(a){return a?decodeURI(a):a}
function bc(a,b){return b.match($b)[a]||null}
function cc(a){return ac(bc(3,a))}
function dc(a){var b=a.match($b);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function ec(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function fc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)fc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function hc(a){var b=[],c;for(c in a)fc(c,a[c],b);return b.join("&")}
function ic(a,b){b=hc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function jc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var kc=/#|$/,lc=/[?&]($|#)/;function mc(a,b){for(var c=a.search(kc),d=0,e,f=[];(e=jc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(lc,"$1")}
;function nc(a){var b=b===void 0?41:b;var c=[];oc(a,pc,6).forEach(function(d){qc(d,2)<=b&&c.push(qc(d,1))});
return c}
function rc(a){var b=b===void 0?41:b;var c=[];oc(a,pc,6).forEach(function(d){qc(d,2)>b&&c.push(qc(d,1))});
return c}
function sc(a){var b=b===void 0?41:b;a=(a==null?void 0:qc(a,1))||0;return a>0&&b>=a}
;function tc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function uc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?uc.apply(null,d):tc(d)}}
;function G(){this.da=this.da;this.H=this.H}
G.prototype.da=!1;G.prototype.dispose=function(){this.da||(this.da=!0,this.aa())};
G.prototype[Symbol.dispose]=function(){this.dispose()};
function vc(a,b){a.addOnDisposeCallback(Xa(tc,b))}
G.prototype.addOnDisposeCallback=function(a,b){this.da?b!==void 0?a.call(b):a():(this.H||(this.H=[]),b&&(a=a.bind(b)),this.H.push(a))};
G.prototype.aa=function(){if(this.H)for(;this.H.length;)this.H.shift()()};var wc;function xc(){G.apply(this,arguments);this.j=1;this[wc]=this.dispose}
w(xc,G);xc.prototype.share=function(){if(this.da)throw Error("E:AD");this.j++;return this};
xc.prototype.dispose=function(){--this.j||G.prototype.dispose.call(this)};
wc=Symbol.dispose;function yc(a){return{fieldType:2,fieldName:a}}
function zc(a){return{fieldType:3,fieldName:a}}
;function Ac(a){this.h=a;a.zc("/client_streamz/bg/frs",zc("ke"))}
Ac.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function Bc(a){this.h=a;a.zc("/client_streamz/bg/wrl",zc("mn"),yc("ac"),yc("sc"),zc("rk"),zc("mk"))}
Bc.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Cc(a){this.i=a;a.Eb("/client_streamz/bg/ec",zc("en"),zc("mk"))}
Cc.prototype.h=function(a,b){this.i.Cb("/client_streamz/bg/ec",a,b)};
function Dc(a){this.h=a;a.zc("/client_streamz/bg/el",zc("en"),zc("rk"),zc("mk"))}
Dc.prototype.record=function(a,b,c,d){this.h.record("/client_streamz/bg/el",a,b,c,d)};
function Ec(a){this.i=a;a.Eb("/client_streamz/bg/cec",yc("ec"),zc("rk"),zc("mk"))}
Ec.prototype.h=function(a,b,c){this.i.Cb("/client_streamz/bg/cec",a,b,c)};
function Fc(a){this.i=a;a.Eb("/client_streamz/bg/po/csc",yc("cs"),zc("rk"),zc("mk"))}
Fc.prototype.h=function(a,b,c){this.i.Cb("/client_streamz/bg/po/csc",a,b,c)};
function Gc(a){this.i=a;a.Eb("/client_streamz/bg/po/ctav",zc("av"),zc("rk"),zc("mk"))}
Gc.prototype.h=function(a,b,c){this.i.Cb("/client_streamz/bg/po/ctav",a,b,c)};
function Hc(a){this.i=a;a.Eb("/client_streamz/bg/po/cwsc",zc("su"),zc("rk"),zc("mk"))}
Hc.prototype.h=function(a,b,c){this.i.Cb("/client_streamz/bg/po/cwsc",a,b,c)};function Ic(a){C.setTimeout(function(){throw a;},0)}
;var Jc,Kc=F("CLOSURE_FLAGS"),Lc=Kc&&Kc[610401301];Jc=Lc!=null?Lc:!1;function Mc(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Nc,Oc=C.navigator;Nc=Oc?Oc.userAgentData||null:null;function Pc(a){return Jc?Nc?Nc.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function H(a){return Mc().indexOf(a)!=-1}
;function Qc(){return Jc?!!Nc&&Nc.brands.length>0:!1}
function Rc(){return Qc()?!1:H("Opera")}
function Sc(){return H("Firefox")||H("FxiOS")}
function Tc(){return Qc()?Pc("Chromium"):(H("Chrome")||H("CriOS"))&&!(Qc()?0:H("Edge"))||H("Silk")}
;function Uc(){return Jc?!!Nc&&!!Nc.platform:!1}
function Vc(){return H("iPhone")&&!H("iPod")&&!H("iPad")}
;var Wc=Rc(),Xc=Qc()?!1:H("Trident")||H("MSIE"),Yc=H("Edge"),Zc=H("Gecko")&&!(Mc().toLowerCase().indexOf("webkit")!=-1&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),$c=Mc().toLowerCase().indexOf("webkit")!=-1&&!H("Edge");$c&&H("Mobile");Uc()||H("Macintosh");Uc()||H("Windows");(Uc()?Nc.platform==="Linux":H("Linux"))||Uc()||H("CrOS");var ad=Uc()?Nc.platform==="Android":H("Android");Vc();H("iPad");H("iPod");Vc()||H("iPad")||H("iPod");Mc().toLowerCase().indexOf("kaios");Sc();var bd=Vc()||H("iPod"),cd=H("iPad");!H("Android")||Tc()||Sc()||Rc()||H("Silk");Tc();var dd=H("Safari")&&!(Tc()||(Qc()?0:H("Coast"))||Rc()||(Qc()?0:H("Edge"))||(Qc()?Pc("Microsoft Edge"):H("Edg/"))||(Qc()?Pc("Opera"):H("OPR"))||Sc()||H("Silk")||H("Android"))&&!(Vc()||H("iPad")||H("iPod"));var ed={},fd=null;function gd(a,b){Pa(a);b===void 0&&(b=0);hd();b=ed[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function id(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;jd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function jd(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=fd[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
hd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function hd(){if(!fd){fd={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));ed[c]=d;for(var e=0;e<d.length;e++){var f=d[e];fd[f]===void 0&&(fd[f]=e)}}}}
;var kd=typeof Uint8Array!=="undefined",ld=!Xc&&typeof btoa==="function";function md(a){if(!ld)return gd(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var nd=/[-_.]/g,od={"-":"+",_:"/",".":"="};function pd(a){return od[a]||""}
function qd(a){return kd&&a!=null&&a instanceof Uint8Array}
var rd={};function sd(a,b){td(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
sd.prototype.sizeBytes=function(){td(rd);var a=this.h;if(a!=null&&!qd(a))if(typeof a==="string")if(ld){nd.test(a)&&(a=a.replace(nd,pd));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=id(a);else Oa(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};
var ud;function td(a){if(a!==rd)throw Error("illegal external caller");}
;var vd=void 0;function wd(){var a=Error();Ub(a,"incident");Ic(a)}
function xd(a){a=Error(a);Ub(a,"warning");return a}
function yd(a,b){if(a!=null){var c;var d=(c=vd)!=null?c:vd={};c=d[a]||0;c>=b||(d[a]=c+1,wd())}}
;var zd=typeof Symbol==="function"&&typeof Symbol()==="symbol",Ad=new Set;function Bd(a,b,c,d){c=c===void 0?!1:c;a=typeof Symbol==="function"&&typeof Symbol()==="symbol"?(d===void 0?0:d)&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b;c&&Ad.add(a);return a}
var Cd=Bd("jas",void 0,!0,!0),Dd=Bd(void 0,"2ex"),Ed=Bd(void 0,"1oa",!0),Fd=Bd(void 0,Symbol(),!0),Gd=Bd(void 0,"aswk");Math.max.apply(Math,ra(Object.values({Zg:1,Xg:2,Wg:4,dh:8,bh:16,ah:32,Cf:64,fh:128,Vg:256,Ug:512,Yg:1024,If:2048,eh:4096,Jf:8192,Df:16384})));var Hd=zd?function(a,b){a[Cd]|=b}:function(a,b){a.bb!==void 0?a.bb|=b:Object.defineProperties(a,{bb:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},J=zd?function(a){return a[Cd]|0}:function(a){return a.bb|0},Id=zd?function(a,b){a[Cd]=b}:function(a,b){a.bb!==void 0?a.bb=b:Object.defineProperties(a,{bb:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Jd(a,b){Id(b,(a|0)&-30975)}
function Kd(a,b){Id(b,(a|34)&-30941)}
;function Ld(){return typeof BigInt==="function"}
;function Md(a){return Array.prototype.slice.call(a)}
;var Nd={},Od={};function Pd(a){return!(!a||typeof a!=="object"||a.h!==Od)}
function Qd(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function Rd(a){return!Array.isArray(a)||a.length?!1:J(a)&1?!0:!1}
var Sd,Td=[];Id(Td,55);Sd=Object.freeze(Td);function Ud(a){if(a&2)throw Error();}
function Vd(a,b){var c=Za(Fd);(b=c?b[c]:void 0)&&(a[Fd]=Md(b))}
var Wd=Object.freeze({});function Xd(a){a.th=!0;return a}
;var Yd=Xd(function(a){return typeof a==="number"}),Zd=Xd(function(a){return typeof a==="string"}),$d=Xd(function(a){return typeof a==="boolean"});
function ae(){var a=be;return Xd(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var ce=Xd(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"});var de=typeof C.BigInt==="function"&&typeof C.BigInt(0)==="bigint";function ee(a){var b=a;if(Zd(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(Yd(b)&&!Number.isSafeInteger(b))throw Error(String(b));return de?BigInt(a):a=$d(a)?a?"1":"0":Zd(a)?a.trim()||"0":String(a)}
var ke=Xd(function(a){return de?a>=fe&&a<=ge:a[0]==="-"?he(a,ie):he(a,je)}),ie=Number.MIN_SAFE_INTEGER.toString(),fe=de?BigInt(Number.MIN_SAFE_INTEGER):void 0,je=Number.MAX_SAFE_INTEGER.toString(),ge=de?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function he(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var le=0,me=0;function ne(a){var b=a>>>0;le=b;me=(a-b)/4294967296>>>0}
function oe(a){if(a<0){ne(0-a);var b=z(pe(le,me));a=b.next().value;b=b.next().value;le=a>>>0;me=b>>>0}else ne(a)}
function qe(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else Ld()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+re(c)+re(a));return c}
function re(a){a=String(a);return"0000000".slice(a.length)+a}
function se(){var a=le,b=me;b&2147483648?Ld()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=z(pe(a,b)),a=b.next().value,b=b.next().value,a="-"+qe(a,b)):a=qe(a,b);return a}
function pe(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function te(a){return a.displayName||a.name||"unknown type name"}
function ue(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Oa(a)+": "+a);return a}
var ve=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function we(a){switch(typeof a){case "bigint":return!0;case "number":return Number.isFinite(a);case "string":return ve.test(a);default:return!1}}
function xe(a){if(typeof a!=="number")throw xd("int32");if(!Number.isFinite(a))throw xd("int32");return a|0}
function ye(a){return a==null?a:xe(a)}
function ze(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return Number.isFinite(a)?a|0:void 0}
function Ae(a){var b=0;b=b===void 0?0:b;if(!we(a))throw xd("int64");var c=typeof a;switch(b){case 4096:switch(c){case "string":return Be(a);case "bigint":return String(BigInt.asIntN(64,a));default:return Ce(a)}case 8192:switch(c){case "string":return b=Math.trunc(Number(a)),Number.isSafeInteger(b)?a=ee(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a=Ld()?ee(BigInt.asIntN(64,BigInt(a))):ee(De(a))),a;case "bigint":return ee(BigInt.asIntN(64,a));default:return Number.isSafeInteger(a)?ee(Ee(a)):ee(Ce(a))}case 0:switch(c){case "string":return Be(a);
case "bigint":return ee(BigInt.asIntN(64,a));default:return Ee(a)}default:return Eb(b,"Unknown format requested type for int64")}}
function Fe(a){return a==null?a:Ae(a)}
function Ge(a){return a[0]==="-"?a.length<20?!0:a.length===20&&Number(a.substring(0,7))>-922337:a.length<19?!0:a.length===19&&Number(a.substring(0,6))<922337}
function De(a){a.indexOf(".");if(Ge(a))return a;if(a.length<16)oe(Number(a));else if(Ld())a=BigInt(a),le=Number(a&BigInt(4294967295))>>>0,me=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");me=le=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),me*=1E6,le=le*1E6+d,le>=4294967296&&(me+=Math.trunc(le/4294967296),me>>>=0,le>>>=0);b&&(b=z(pe(le,me)),a=b.next().value,b=b.next().value,le=a,me=b)}return se()}
function Ee(a){we(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){oe(a);var b=le,c=me;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);var d=c*4294967296+(b>>>0);b=Number.isSafeInteger(d)?d:qe(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}
function Ce(a){we(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);Ge(b)?a=b:(oe(a),a=se())}return a}
function Be(a){we(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return De(a)}
function He(a){if(a==null)return a;if(typeof a==="bigint")return ke(a)?a=Number(a):(a=BigInt.asIntN(64,a),a=ke(a)?Number(a):String(a)),a;if(we(a))return typeof a==="number"?Ee(a):Be(a)}
function Ie(a){if(typeof a!=="string")throw Error();return a}
function Je(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Ke(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+te(b)+" but got "+(a&&te(a.constructor)));}
function Le(a,b,c){if(a!=null&&typeof a==="object"&&a.Kc===Nd)return a;if(Array.isArray(a)){var d=J(a),e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&Id(a,e);return new b(a)}}
;function Me(a){Ne===void 0&&(Ne=typeof Proxy==="function"?Oe(Proxy):null);var b;(b=!Ne)||(Pe===void 0&&(Pe=typeof WeakMap==="function"?Oe(WeakMap):null),b=!Pe);if(b)return a;if(b=Qe(a))return b;if(Math.random()>.01)return a;Re(a);b=new Ne(a,{set:function(c,d,e){Se();c[d]=e;return!0}});
Te(a,b);return b}
function Se(){wd()}
var Ue=void 0,Ve=void 0;function Qe(a){var b;return(b=Ue)==null?void 0:b.get(a)}
function We(a){var b;return((b=Ve)==null?void 0:b.get(a))||a}
function Te(a,b){(Ue||(Ue=new Pe)).set(a,b);(Ve||(Ve=new Pe)).set(b,a)}
var Ne=void 0,Pe=void 0;function Oe(a){try{return a.toString().indexOf("[native code]")!==-1?a:null}catch(b){return null}}
var Xe=void 0;function Re(a){if(Xe===void 0){var b=new Ne([],{});Xe=Array.prototype.concat.call([],b).length===1}Xe&&typeof Symbol==="function"&&Symbol.isConcatSpreadable&&(a[Symbol.isConcatSpreadable]=!0)}
;function K(a,b,c){if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-33521665|(b&1023)<<15)}else{if(!Array.isArray(a))throw Error("narr");d=J(a);var e=Object.getOwnPropertySymbols;if(e){e=e(a);for(var f=0;f<e.length;f++)if(!Ad.has(e[f])){yd(Gd,5);break}}if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;if(e=c.length)if(f=e-1,Qd(c[f])){d|=256;b=f-(d&512?0:-1);if(b>=1024)throw Error("pvtlmt");d=d&-33521665|(b&1023)<<15;break a}if(b){b=Math.max(b,
e-(d&512?0:-1));if(b>1024)throw Error("spvt");d=d&-33521665|(b&1023)<<15}}}Id(a,d);return a}
;function Ye(a,b){return Ze(b)}
function Ze(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "bigint":return ke(a)?Number(a):String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(Rd(a))return}else{if(qd(a))return md(a);if(a instanceof sd){var b=a.h;return b==null?"":typeof b==="string"?b:a.h=md(b)}}}return a}
;function $e(a,b,c){var d=Md(a),e=d.length,f=b&256?d[e-1]:void 0;e+=f?-1:0;for(b=b&512?1:0;b<e;b++)d[b]=c(d[b]);if(f){b=d[b]={};for(var g in f)b[g]=c(f[g])}Vd(d,a);return d}
function af(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=Rd(a)?void 0:e&&J(a)&2?a:bf(a,b,c,d!==void 0,e);else if(Qd(a)){var f={},g;for(g in a)f[g]=af(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function bf(a,b,c,d,e){var f=d||c?J(a):0;d=d?!!(f&32):void 0;for(var g=Md(a),h=0;h<g.length;h++)g[h]=af(g[h],b,c,d,e);c&&(Vd(g,a),c(f,g));return g}
function cf(a){return a.Kc===Nd?a.toJSON():Ze(a)}
;function df(a,b,c){c=c===void 0?Kd:c;if(a!=null){if(kd&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=J(a);if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(Id(a,(d|34)&-12293),a):bf(a,df,d&4?Kd:c,!0,!0)}a.Kc===Nd&&(c=a.F,d=J(c),a=d&2?a:new a.constructor(ef(c,d,!0)));return a}}
function ef(a,b,c){var d=c||b&2?Kd:Jd,e=!!(b&32);a=$e(a,b,function(f){return df(f,e,d)});
Hd(a,32|(c?2:0));return a}
function ff(a){var b=a.F,c=J(b);return c&2?new a.constructor(ef(b,c,!1)):a}
;function gf(a,b){a=a.F;return hf(a,J(a),b)}
function hf(a,b,c,d){if(c===-1)return null;var e=c+(b&512?0:-1),f=a.length-1;if(e>=f&&b&256)return a[f][c];if(d&&b&256&&(b=a[f][c],b!=null))return a[e]!=null&&yd(Dd,4),b;if(e<=f)return a[e]}
function jf(a,b,c){var d=a.F,e=J(d);Ud(e);kf(d,e,b,c);return a}
function kf(a,b,c,d){var e=b&512?0:-1,f=c+e,g=a.length-1;if(f>=g&&b&256)return a[g][c]=d,b;if(f<=g)return a[f]=d,b&256&&(a=a[g],c in a&&delete a[c]),b;d!==void 0&&(g=b>>15&1023||536870912,c>=g?d!=null&&(f={},a[g+e]=(f[c]=d,f),b|=256,Id(a,b)):a[f]=d);return b}
function lf(a){return mf(a,nf,11,!1)!==void 0}
function of(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function pf(a,b,c){var d=a.F,e=J(d);Ud(e);if(b==null)return kf(d,e,3),a;b=We(b);if(!Array.isArray(b))throw xd();var f=J(b),g=f,h=of(f),k=h||Object.isFrozen(b);h||(f=0);k||(b=Md(b),g=0,f=qf(f,e),f=rf(f,e,!0),k=!1);f|=21;h=4&f?4096&f?4096:8192&f?8192:0:void 0;h=h!=null?h:0;for(var l=0;l<b.length;l++){var m=b[l],n=c(m,h);Object.is(m,n)||(k&&(b=Md(b),g=0,f=qf(f,e),f=rf(f,e,!0),k=!1),b[l]=n)}f!==g&&(k&&(b=Md(b),f=qf(f,e),f=rf(f,e,!0)),Id(b,f));kf(d,e,3,b);return a}
function sf(a,b,c,d){a=a.F;var e=J(a);Ud(e);if(d==null){var f=tf(a);if(uf(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=tf(a);var g=uf(f,a,e,c);g!==b&&(g&&(e=kf(a,e,g)),f.set(c,b))}kf(a,e,b,d)}
function tf(a){if(zd){var b;return(b=a[Ed])!=null?b:a[Ed]=new Map}if(Ed in a)return a[Ed];b=new Map;Object.defineProperty(a,Ed,{value:b});return b}
function uf(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];hf(b,c,g)!=null&&(e!==0&&(c=kf(b,c,e)),e=g)}a.set(d,e);return e}
function mf(a,b,c,d){a=a.F;var e=J(a);d=hf(a,e,c,d);b=Le(d,b,e);b!==d&&b!=null&&kf(a,e,c,b);return b}
function vf(a,b,c,d){b=mf(a,b,c,d===void 0?!1:d);if(b==null)return b;a=a.F;d=J(a);if(!(d&2)){var e=ff(b);e!==b&&(b=e,kf(a,d,c,b))}return b}
function oc(a,b,c){var d=void 0===Wd?2:4;var e=J(a.F),f=e,g=!(2&e);a=a.F;d=(e=!!(2&f))?1:d;g&&(g=!e);e=hf(a,f,c);e=Array.isArray(e)?e:Sd;var h=J(e),k=!!(4&h);if(!k){var l=h;l===0&&(l=qf(l,f));h=e;l|=1;var m=f,n=!!(2&l);n&&(m|=2);for(var r=!n,t=!0,v=0,x=0;v<h.length;v++){var y=Le(h[v],b,m);if(y instanceof b){if(!n){var E=!!(J(y.F)&2);r&&(r=!E);t&&(t=E)}h[x++]=y}}x<v&&(h.length=x);l|=4;l=t?l|16:l&-17;l=r?l|8:l&-9;Id(h,l);n&&Object.freeze(h);h=l}if(g&&!(8&h||!e.length&&(d===1||d===4&&32&h))){of(h)&&
(e=Md(e),h=qf(h,f),f=kf(a,f,c,e));b=e;g=h;for(h=0;h<b.length;h++)l=b[h],m=ff(l),l!==m&&(b[h]=m);g|=8;g=b.length?g&-17:g|16;Id(b,g);h=g}var I;if(d===1||d===4&&32&h){if(!of(h)){f=h;var S=!!(32&h);h|=!e.length||16&h&&(!k||S)?2:2048;h!==f&&Id(e,h);Object.freeze(e)}}else k=d!==5?!1:!!(32&h)||of(h)||!!Qe(e),(d===2||k)&&of(h)&&(e=Md(e),h=qf(h,f),h=rf(h,f,!1),Id(e,h),f=kf(a,f,c,e)),of(h)||(c=h,h=rf(h,f,!1),h!==c&&Id(e,h)),k?I=Me(e):d===2&&((S=Ue)==null||S.delete(e));return I||e}
function wf(a,b,c,d){d!=null?Ke(d,b):d=void 0;return jf(a,c,d)}
function xf(a,b,c,d){var e=a.F,f=J(e);Ud(f);if(d==null)return kf(e,f,c),a;d=We(d);if(!Array.isArray(d))throw xd();for(var g=J(d),h=g,k=of(g),l=k||Object.isFrozen(d),m=!0,n=!0,r=0;r<d.length;r++){var t=d[r];Ke(t,b);k||(t=!!(J(t.F)&2),m&&(m=!t),n&&(n=t))}k||(g=m?13:5,g=n?g|16:g&-17);l&&g===h||(d=Md(d),h=0,g=qf(g,f),g=rf(g,f,!0));g!==h&&Id(d,g);kf(e,f,c,d);return a}
function qf(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function rf(a,b,c){32&b&&c||(a&=-33);return a}
function yf(a){a=gf(a,1);var b=b===void 0?!1:b;var c=typeof a;b=a==null?a:c==="bigint"?String(BigInt.asIntN(64,a)):we(a)?c==="string"?Be(a):b?Ce(a):Ee(a):void 0;return b}
function zf(a,b){return a!=null?a:b}
function qc(a,b,c){c=c===void 0?0:c;return zf(ze(gf(a,b)),c)}
function Af(a,b){var c=c===void 0?"":c;a=gf(a,b);return zf(a==null||typeof a==="string"?a:void 0,c)}
function Bf(a){var b=0;b=b===void 0?0:b;a=gf(a,1);a=a==null?a:Number.isFinite(a)?a|0:void 0;return zf(a,b)}
function Cf(a,b,c){return jf(a,b,Je(c))}
function Df(a,b,c){if(c!=null){if(!Number.isFinite(c))throw xd("enum");c|=0}return jf(a,b,c)}
;function Ef(a){return a}
function Ff(a){return a}
function Gf(a,b,c,d){return Hf(a,b,c,d,If,Jf)}
function Kf(a,b,c,d){return Hf(a,b,c,d,Lf,Mf)}
function Hf(a,b,c,d,e,f){if(!c.length&&!d)return 0;for(var g=0,h=0,k=0,l=0,m=0,n=c.length-1;n>=0;n--){var r=c[n];d&&n===c.length-1&&r===d||(l++,r!=null&&k++)}if(d)for(var t in d)n=+t,isNaN(n)||(m+=Nf(n),h++,n>g&&(g=n));l=e(l,k)+f(h,g,m);t=k;n=h;r=g;for(var v=m,x=c.length-1;x>=0;x--){var y=c[x];if(!(y==null||d&&x===c.length-1&&y===d)){y=x-b;var E=e(y,t)+f(n,r,v);E<l&&(a=1+y,l=E);n++;t--;v+=Nf(y);r=Math.max(r,y)}}b=e(0,0)+f(n,r,v);b<l&&(a=0,l=b);if(d){n=h;r=g;v=m;t=k;for(var I in d)d=+I,isNaN(d)||d>=
1024||(n--,t++,v-=I.length,g=e(d,t)+f(n,r,v),g<l&&(a=1+d,l=g))}return a}
function Mf(a,b,c){return c+a*3+(a>1?a-1:0)}
function Lf(a,b){return(a>1?a-1:0)+(a-b)*4}
function Jf(a,b){return a==0?0:9*Math.max(1<<32-Math.clz32(a+a/2-1),4)<=b?a==0?0:a<4?100+(a-1)*16:a<6?148+(a-4)*16:a<12?244+(a-6)*16:a<22?436+(a-12)*19:a<44?820+(a-22)*17:52+32*a:40+4*b}
function If(a){return 40+4*a}
function Nf(a){return a>=100?a>=1E4?Math.ceil(Math.log10(1+a)):a<1E3?3:4:a<10?1:2}
;var Of,Pf;function L(a,b,c){this.F=K(a,b,c)}
p=L.prototype;p.toJSON=function(){return Qf(this)};
p.serialize=function(a){try{return Pf=!0,a&&(Of=a===Ff||a!==Ef&&a!==Gf&&a!==Kf?Ff:a),JSON.stringify(Qf(this),Ye)}finally{a&&(Of=void 0),Pf=!1}};
function Rf(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");Hd(b,32);return new a(b)}
p.clone=function(){var a=this.F,b=J(a);return new this.constructor(ef(a,b,!1))};
p.Kc=Nd;p.toString=function(){try{return Pf=!0,Qf(this).toString()}finally{Pf=!1}};
function Qf(a){var b=a.F,c;Pf?c=b:c=bf(b,cf,void 0,void 0,!1);b=c;c=!Pf;var d=J(c?a.F:b);if(a=b.length){var e=b[a-1],f=Qd(e);f?a--:e=void 0;var g=d&512?0:-1,h=a-g;d=!!Of&&!(d&512);var k,l=(k=Of)!=null?k:Ff;k=d?l(h,g,b,e):h;d=(h=d&&h!==k)?Array.prototype.slice.call(b,0,a):b;if(f||h){b:{var m=d;var n=e;var r;f=!1;if(h)for(l=Math.max(0,k+g);l<m.length;l++){var t=m[l],v=l-g;t==null||Rd(t)||Pd(t)&&t.size===0||(f=m[l]=void 0,((f=r)!=null?f:r={})[v]=t,f=!0)}if(n)for(var x in n)if(l=+x,isNaN(l))l=void 0,
((l=r)!=null?l:r={})[x]=n[x];else if(t=n[x],Array.isArray(t)&&(Rd(t)||Pd(t)&&t.size===0)&&(t=null),t==null&&(f=!0),h&&l<k){f=!0;t=l+g;for(v=m.length;v<=t;v++)m.push(void 0);m[t]=n[l]}else t!=null&&(l=void 0,((l=r)!=null?l:r={})[x]=t);f||(r=n);if(r)for(var y in r){n=r;break b}n=null}m=n==null?e!=null:n!==e}h&&(a=d.length);for(;a>0;a--){r=d[a-1];if(!(r==null||Rd(r)||Pd(r)&&r.size===0))break;var E=!0}if(d!==b||m||E){if(!h&&!c)d=Array.prototype.slice.call(d,0,a);else if(E||m||n)d.length=a;n&&d.push(n)}E=
d}else E=b;return E}
;function Sf(a){return function(b){return Rf(a,b)}}
;function Tf(a){this.F=K(a)}
w(Tf,L);function Uf(a,b){return pf(a,b,xe)}
;function Vf(a){this.F=K(a)}
w(Vf,L);var Wf=[1,2,3];function Xf(a){this.F=K(a)}
w(Xf,L);var Yf=[1,2,3];function Zf(a){this.F=K(a)}
w(Zf,L);function $f(a){this.F=K(a)}
w($f,L);function ag(a){this.F=K(a)}
w(ag,L);function bg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function cg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,t=0;t<64;t+=4)r[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],x=e[2],y=e[3],E=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var I=y^v&(x^y);var S=1518500249}else I=v^x^y,S=1859775393;else t<60?(I=v&x|y&(v|x),S=2400959708):(I=v^x^y,S=3395469782);I=((n<<5|n>>>27)&4294967295)+I+E+S+r[t]&4294967295;E=y;y=x;x=(v<<30|v>>>2)&4294967295;v=n;n=I}e[0]=e[0]+n&4294967295;e[1]=e[1]+v&4294967295;e[2]=
e[2]+x&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+E&4294967295}
function c(n,r){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],v=0,x=n.length;v<x;++v)t.push(n.charCodeAt(v));n=t}r||(r=n.length);t=0;if(l==0)for(;t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<r;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<r;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],r=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;t<5;t++)for(var v=24;v>=0;v-=8)n[r++]=e[t]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Vd:function(){for(var n=d(),r="",t=0;t<n.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return r}}}
;function dg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,eg(bg(d),a,c||null)].join(" "):null}
function eg(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Nb(d,function(h){e.push(h)}),fg(e.join(" "));
var f=[],g=[];Nb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Nb(d,function(h){e.push(h)});
a=fg(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function fg(a){var b=cg();b.update(a);return b.Vd().toLowerCase()}
;function gg(a){this.h=a||{cookie:""}}
p=gg.prototype;p.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Mb:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
p.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.Ne;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Mb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
p.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=fb(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
p.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Mb:0,path:b,domain:c});return d};
p.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=fb(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var hg=new gg(typeof document=="undefined"?null:document);function ig(){var a=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__1PSAPISID||C.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new gg(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function jg(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new gg(document)).get(b));return a?dg(a,c,d):null}
function kg(a){var b=bg(String(C.location.href)),c=[];if(ig()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d=b?C.__SAPISID:C.__APISID;d||typeof document==="undefined"||(d=new gg(document),d=d.get(b?"SAPISID":"APISID")||d.get("__Secure-3PAPISID"));(d=d?dg(d,b?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=jg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=jg("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;function lg(){}
lg.prototype.compress=function(a){var b,c,d,e;return A(function(f){switch(f.h){case 1:return b=new CompressionStream("gzip"),c=(new Response(b.readable)).arrayBuffer(),d=b.writable.getWriter(),f.yield(d.write((new TextEncoder).encode(a)),2);case 2:return f.yield(d.close(),3);case 3:return e=Uint8Array,f.yield(c,4);case 4:return f.return(new e(f.i))}})};
lg.prototype.isSupported=function(a){return a<1024?!1:typeof CompressionStream!=="undefined"};function mg(a){this.F=K(a)}
w(mg,L);function ng(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return Ya()};
this.i=this.h()}
ng.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
ng.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
ng.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
ng.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function og(a){this.F=K(a)}
w(og,L);function pg(a){this.F=K(a)}
w(pg,L);function qg(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
p=qg.prototype;p.clone=function(){return new qg(this.x,this.y)};
p.equals=function(a){return a instanceof qg&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
p.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
p.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
p.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
p.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function rg(a,b){this.width=a;this.height=b}
p=rg.prototype;p.clone=function(){return new rg(this.width,this.height)};
p.aspectRatio=function(){return this.width/this.height};
p.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
p.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
p.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
p.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function sg(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function tg(a){var b=ug,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function vg(a){for(var b in a)return!1;return!0}
function wg(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function xg(a){return a!==null&&"privembed"in a?a.privembed:!1}
function yg(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function zg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Ag(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Ag(a[c]);return b}
var Bg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Cg(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Bg.length;f++)c=Bg[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Dg(a,b){this.h=a===Eg&&b||""}
Dg.prototype.toString=function(){return this.h};
var Eg={};new Dg(Eg,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Fg(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Gg(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Hg(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Ig(a){this.F=K(a)}
w(Ig,L);Ig.prototype.ec=function(){return Bf(this)};function Jg(a){this.F=K(a)}
w(Jg,L);function Kg(a){this.F=K(a)}
w(Kg,L);function Lg(a,b){xf(a,Jg,1,b)}
;function nf(a){this.F=K(a)}
w(nf,L);var Mg=["platform","platformVersion","architecture","model","uaFullVersion"],Ng=new Kg,Og=null;function Pg(a,b){b=b===void 0?Mg:b;if(!Og){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new Jg;f=Cf(f,1,e.brand);return Cf(f,2,e.version)});
Lg(jf(Ng,2,ue(a.mobile)),c);Og=a.getHighEntropyValues(b)}var d=new Set(b);return Og.then(function(e){var f=Ng.clone();d.has("platform")&&Cf(f,3,e.platform);d.has("platformVersion")&&Cf(f,4,e.platformVersion);d.has("architecture")&&Cf(f,5,e.architecture);d.has("model")&&Cf(f,6,e.model);d.has("uaFullVersion")&&Cf(f,7,e.uaFullVersion);return f}).catch(function(){return Ng.clone()})}
;function Qg(a){this.F=K(a)}
w(Qg,L);function Rg(a){this.F=K(a,4)}
w(Rg,L);function Sg(a){this.F=K(a,36)}
w(Sg,L);function Tg(a){this.F=K(a,19)}
w(Tg,L);Tg.prototype.Pb=function(a){return Df(this,2,a)};function Ug(a,b){this.Ta=b=b===void 0?!1:b;this.i=this.locale=null;this.h=new Tg;Number.isInteger(a)&&this.h.Pb(a);b||(this.locale=document.documentElement.getAttribute("lang"));Vg(this,new Qg)}
Ug.prototype.Pb=function(a){this.h.Pb(a);return this};
function Vg(a,b){wf(a.h,Qg,1,b);Bf(b)||Df(b,1,1);a.Ta||(b=Wg(a),Af(b,5)||Cf(b,5,a.locale));a.i&&(b=Wg(a),vf(b,Kg,9)||wf(b,Kg,9,a.i))}
function Zg(a,b){lf($g(a))&&(a=ah(a),Df(a,1,b))}
function bh(a,b){lf($g(a))&&(a=ah(a),jf(a,2,ue(b)))}
function $g(a){return vf(a.h,Qg,1)}
function ch(a){var b=b===void 0?Mg:b;var c=a.Ta?void 0:window;c?Pg(c,b).then(function(d){a.i=d;d=Wg(a);wf(d,Kg,9,a.i);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function Wg(a){a=$g(a);var b=vf(a,nf,11);b||(b=new nf,wf(a,nf,11,b));return b}
function ah(a){a=Wg(a);var b=vf(a,Ig,10);b||(b=new Ig,jf(b,2,ue(!1)),wf(a,Ig,10,b));return b}
function dh(a,b,c,d,e,f,g){c=c===void 0?0:c;e=e===void 0?null:e;f=f===void 0?0:f;g=g===void 0?0:g;d=d===void 0?0:d;if(lf($g(a))){var h=ah(a);jf(h,3,ye(d))}lf($g(a))&&(d=ah(a),jf(d,4,ye(f)));lf($g(a))&&(f=ah(a),jf(f,5,ye(g)));a=a.h.clone();g=Date.now().toString();a=jf(a,4,Fe(g));b=b.slice();b=xf(a,Sg,3,b);e&&(a=new og,e=jf(a,13,ye(e)),a=new pg,e=wf(a,og,2,e),a=new Rg,e=wf(a,pg,1,e),e=Df(e,2,9),wf(b,Rg,18,e));c&&jf(b,14,Fe(c));return b}
;var eh=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function fh(a){this.h=this.i=this.j=a}
fh.prototype.reset=function(){this.h=this.i=this.j};
fh.prototype.getValue=function(){return this.i};function gh(a){this.F=K(a,8)}
w(gh,L);var hh=Sf(gh);function ih(a){this.F=K(a)}
w(ih,L);var jh=new function(){this.ctor=ih;this.isRepeated=0;this.h=vf;this.defaultValue=void 0};function kh(a){G.call(this);var b=this;this.componentId="";this.h=[];this.Oa="";this.pageId=null;this.Pa=this.ga=-1;this.G=this.experimentIds=null;this.X=this.Y=this.B=this.o=0;this.mb=1;this.timeoutMillis=0;this.ia=!1;this.logSource=a.logSource;this.qb=a.qb||function(){};
this.j=new Ug(a.logSource,a.Ta);this.network=a.network;this.gb=a.gb||null;this.bufferSize=1E3;this.P=a.nf||null;this.sessionIndex=a.sessionIndex||null;this.Hb=a.Hb||!1;this.logger=null;this.withCredentials=!a.dd;this.Ta=a.Ta||!1;this.U=!this.Ta&&!!window&&!!window.navigator&&window.navigator.sendBeacon!==void 0;this.Da=typeof URLSearchParams!=="undefined"&&!!(new URL(lh())).searchParams&&!!(new URL(lh())).searchParams.set;var c=Df(new Qg,1,1);Vg(this.j,c);this.u=new fh(1E4);a=mh(this,a.Xc);this.i=
new ng(this.u.getValue(),a);this.oa=new ng(6E5,a);this.Hb||this.oa.start();this.Ta||(document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"&&b.Cc()}),document.addEventListener("pagehide",this.Cc.bind(this)))}
w(kh,G);function mh(a,b){return a.Da?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
p=kh.prototype;p.aa=function(){this.Cc();this.i.stop();this.oa.stop();G.prototype.aa.call(this)};
function nh(a){a.P||(a.P=lh());try{return(new URL(a.P)).toString()}catch(b){return(new URL(a.P,window.location.origin)).toString()}}
p.log=function(a){if(this.Da){a=a.clone();var b=this.mb++;a=jf(a,21,Fe(b));this.componentId&&Cf(a,26,this.componentId);if(yf(a)==null){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";jf(b,1,Fe(c))}He(gf(a,15))==null&&jf(a,15,Fe((new Date).getTimezoneOffset()*60));this.experimentIds&&(b=a,c=this.experimentIds.clone(),wf(b,mg,16,c));b=this.h.length-this.bufferSize+1;b>0&&(this.h.splice(0,b),this.o+=b);this.h.push(a);this.Hb||this.i.enabled||this.i.start()}};
p.flush=function(a,b){var c=this;if(this.h.length===0)a&&a();else if(this.ia&&this.U)Zg(this.j,3),oh(this);else{var d=Date.now();if(this.Pa>d&&this.ga<d)b&&b("throttled");else{this.network&&(typeof this.network.ec==="function"?Zg(this.j,this.network.ec()):Zg(this.j,0));var e=dh(this.j,this.h,this.o,this.B,this.gb,this.Y,this.X);d={};var f=this.qb();f&&(d.Authorization=f);var g=new URL(nh(this));this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,g.searchParams.set("authuser",this.sessionIndex));
this.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:this.pageId}),g.searchParams.set("pageId",this.pageId));if(f&&this.Oa===f)b&&b("stale-auth-token");else{this.h=[];this.i.enabled&&this.i.stop();this.o=0;var h=e.serialize(),k;this.G&&this.G.isSupported(h.length)&&(k=this.G.compress(h));var l={url:g.toString(),body:h,Qd:1,uc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},m=function(t){c.u.reset();c.i.setInterval(c.u.getValue());if(t){var v=null;
try{var x=JSON.stringify(JSON.parse(t.replace(")]}'\n","")));v=hh(x)}catch(y){}v&&(t=Number,x="-1",x=x===void 0?"0":x,x=zf(yf(v),x),t=t(x),t>0&&(c.ga=Date.now(),c.Pa=c.ga+t),v=jh.ctor?jh.h(v,jh.ctor,175237375,!0):jh.h(v,175237375,null,!0),v=v===null?void 0:v)&&(v=qc(v,1,-1),v!==-1&&(c.u=new fh(v<1?1:v),c.i.setInterval(c.u.getValue())))}a&&a();c.B=0},n=function(t,v){var x=oc(e,Sg,3);
var y=He(gf(e,14));y=y==null?void 0:y;var E=c.u;E.h=Math.min(3E5,E.h*2);E.i=Math.min(3E5,E.h+Math.round(.1*(Math.random()-.5)*2*E.h));c.i.setInterval(c.u.getValue());t===401&&f&&(c.Oa=f);y&&(c.o+=y);v===void 0&&(v=c.isRetryable(t));v&&(c.h=x.concat(c.h),c.Hb||c.i.enabled||c.i.start());b&&b("net-send-failed",t);++c.B},r=function(){c.network&&c.network.send(l,m,n)};
k?k.then(function(t){l.uc["Content-Encoding"]="gzip";l.uc["Content-Type"]="application/binary";l.body=t;l.Qd=2;r()},function(){r()}):r()}}}};
p.Cc=function(){bh(this.j,!0);this.flush();bh(this.j,!1)};
function oh(a){ph(a,function(b,c){b=new URL(b);b.searchParams.set("format","json");var d=!1;try{d=window.navigator.sendBeacon(b.toString(),c.serialize())}catch(e){}d||(a.U=!1);return d})}
function ph(a,b){if(a.h.length!==0){var c=new URL(nh(a));c.searchParams.delete("format");var d=a.qb();d&&c.searchParams.set("auth",d);c.searchParams.set("authuser",a.sessionIndex||"0");for(d=0;d<10&&a.h.length;++d){var e=a.h.slice(0,32),f=dh(a.j,e,a.o,a.B,a.gb,a.Y,a.X);if(!b(c.toString(),f)){++a.B;break}a.o=0;a.B=0;a.Y=0;a.X=0;a.h=a.h.slice(e.length)}a.i.enabled&&a.i.stop()}}
p.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function lh(){return"https://play.google.com/log?format=json&hasfast=true"}
;function qh(){this.Kd=typeof AbortController!=="undefined"}
qh.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,r,t;return A(function(v){switch(v.h){case 1:return f=(e=d.Kd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,za(v,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.uc)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),v.yield(fetch(a.url,g),5);case 5:h=v.i;if(h.status!==200){(k=c)==null||k(h.status);v.D(3);break}if((l=b)==null){v.D(7);break}return v.yield(h.text(),8);case 8:l(v.i);case 7:case 3:v.P=[v.j];v.o=0;v.u=0;clearTimeout(f);Ba(v);break;case 2:m=Aa(v);switch((n=m)==null?void 0:n.name){case "AbortError":(r=c)==null||r(408);break;default:(t=c)==null||t(400)}v.D(3)}})};
qh.prototype.ec=function(){return 4};function rh(a,b){G.call(this);this.logSource=a;this.sessionIndex=b;this.Ra="https://play.google.com/log?format=json&hasfast=true";this.i=null;this.o=!1;this.network=null;this.componentId="";this.h=this.gb=null;this.j=!1;this.pageId=null}
w(rh,G);function sh(a,b){a.i=b;return a}
function th(a,b){a.network=b;return a}
function uh(a,b){a.h=b}
rh.prototype.dd=function(){this.u=!0;return this};
function vh(a){a.network||(a.network=new qh);var b=new kh({logSource:a.logSource,qb:a.qb?a.qb:kg,sessionIndex:a.sessionIndex,nf:a.Ra,Ta:a.o,Hb:!1,dd:a.u,Xc:a.Xc,network:a.network});vc(a,b);if(a.i){var c=a.i,d=Wg(b.j);Cf(d,7,c)}Math.random()<.5&&(b.G=new lg);a.componentId&&(b.componentId=a.componentId);a.gb&&(b.gb=a.gb);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new mg),c=b.experimentIds,d=d.serialize(),Cf(c,4,d)):b.experimentIds&&jf(b.experimentIds,4));a.j&&(b.ia=
b.U);ch(b.j);a.network.Pb&&a.network.Pb(a.logSource);a.network.Ye&&a.network.Ye(b);return b}
;function wh(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;G.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new rh(a,"0"),a.componentId=b,vc(this,a),c!==""&&(a.Ra=c),d&&(a.o=!0),e&&sh(a,e),g&&th(a,g),b=vh(a));this.h=b}
w(wh,G);
wh.prototype.flush=function(a){var b=a||[];if(b.length){a=new ag;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=new $f;f=Cf(f,1,e.i);var g=xh(e);f=pf(f,g,Ie);g=[];var h=[];for(var k=z(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.o;for(var n=e.Dc(l)||[],r=[],t=0;t<n.length;t++){var v=n[t],x=v&&v.h;v=new Xf;switch(m){case 3:x=Number(x);Number.isFinite(x)&&sf(v,1,Yf,Fe(x));break;case 2:x=Number(x);if(x!=null&&typeof x!=="number")throw Error("Value of float/double field must be a number, found "+typeof x+
": "+x);sf(v,2,Yf,x)}r.push(v)}m=r;for(n=0;n<m.length;n++){r=m[n];t=new Zf;r=wf(t,Xf,2,r);t=l;v=[];x=yh(e);for(var y=0;y<x.length;y++){var E=x[y],I=t[y],S=new Vf;switch(E){case 3:sf(S,1,Wf,Je(String(I)));break;case 2:E=Number(I);Number.isFinite(E)&&sf(S,2,Wf,ye(E));break;case 1:sf(S,3,Wf,ue(I==="true"))}v.push(S)}xf(r,Vf,1,v);g.push(r)}}xf(f,Zf,4,g);c.push(f);e.clear()}xf(a,$f,1,c);b=this.h;if(a instanceof Sg)b.log(a);else try{var ea=new Sg,Ja=a.serialize();var bb=Cf(ea,8,Ja);b.log(bb)}catch(ba){}this.h.flush()}};function zh(a){this.h=a}
;function Ah(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function yh(a){return a.fields.map(function(b){return b.fieldType})}
function xh(a){return a.fields.map(function(b){return b.fieldName})}
p=Ah.prototype;p.Ld=function(a){var b=B.apply(1,arguments),c=this.Dc(b);c?c.push(new zh(a)):this.wd(a,b)};
p.wd=function(a){var b=this.Wc(B.apply(1,arguments));this.h.set(b,[new zh(a)])};
p.Dc=function(){var a=this.Wc(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
p.he=function(){var a=this.Dc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
p.clear=function(){this.h.clear()};
p.Wc=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function Bh(a,b){Ah.call(this,a,3,b)}
w(Bh,Ah);Bh.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.he(b);d&&(c=d.h);this.wd(c+a,b)};function Ch(a,b){Ah.call(this,a,2,b)}
w(Ch,Ah);Ch.prototype.record=function(a){this.Ld(a,B.apply(1,arguments))};function Dh(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Dh.prototype.stopPropagation=function(){this.j=!0};
Dh.prototype.preventDefault=function(){this.defaultPrevented=!0};function Eh(a,b){Dh.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
$a(Eh,Dh);
Eh.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&Eh.za.preventDefault.call(this)};
Eh.prototype.stopPropagation=function(){Eh.za.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Eh.prototype.preventDefault=function(){Eh.za.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Fh="closure_listenable_"+(Math.random()*1E6|0);var Gh=0;function Hh(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.fc=e;this.key=++Gh;this.Ob=this.Xb=!1}
function Ih(a){a.Ob=!0;a.listener=null;a.proxy=null;a.src=null;a.fc=null}
;function Jh(a){this.src=a;this.listeners={};this.h=0}
Jh.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Kh(a,b,d,e);g>-1?(b=a[g],c||(b.Xb=!1)):(b=new Hh(b,this.src,f,!!d,e),b.Xb=c,a.push(b));return b};
Jh.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Kh(e,b,c,d);return b>-1?(Ih(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function Lh(a,b){var c=b.type;c in a.listeners&&Sb(a.listeners[c],b)&&(Ih(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function Kh(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Ob&&f.listener==b&&f.capture==!!c&&f.fc==d)return e}return-1}
;var Mh="closure_lm_"+(Math.random()*1E6|0),Nh={},Oh=0;function Ph(a,b,c,d,e){if(d&&d.once)Qh(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Ph(a,b[f],c,d,e);else c=Rh(c),a&&a[Fh]?a.listen(b,c,Qa(d)?!!d.capture:!!d,e):Sh(a,b,c,!1,d,e)}
function Sh(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=Th(a);h||(a[Mh]=h=new Jh(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Uh();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)eh||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Vh(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Oh++}}
function Uh(){function a(c){return b.call(a.src,a.listener,c)}
var b=Wh;return a}
function Qh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Qh(a,b[f],c,d,e);else c=Rh(c),a&&a[Fh]?a.h.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):Sh(a,b,c,!0,d,e)}
function Xh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Xh(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Rh(c),a&&a[Fh])?a.h.remove(String(b),c,d,e):a&&(a=Th(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Kh(b,c,d,e)),(c=a>-1?b[a]:null)&&Yh(c))}
function Yh(a){if(typeof a!=="number"&&a&&!a.Ob){var b=a.src;if(b&&b[Fh])Lh(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Vh(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Oh--;(c=Th(b))?(Lh(c,a),c.h==0&&(c.src=null,b[Mh]=null)):Ih(a)}}}
function Vh(a){return a in Nh?Nh[a]:Nh[a]="on"+a}
function Wh(a,b){if(a.Ob)a=!0;else{b=new Eh(b,this);var c=a.listener,d=a.fc||a.src;a.Xb&&Yh(a);a=c.call(d,b)}return a}
function Th(a){a=a[Mh];return a instanceof Jh?a:null}
var Zh="__closure_events_fn_"+(Math.random()*1E9>>>0);function Rh(a){if(typeof a==="function")return a;a[Zh]||(a[Zh]=function(b){return a.handleEvent(b)});
return a[Zh]}
;function $h(){G.call(this);this.h=new Jh(this);this.oa=this;this.Y=null}
$a($h,G);$h.prototype[Fh]=!0;p=$h.prototype;p.addEventListener=function(a,b,c,d){Ph(this,a,b,c,d)};
p.removeEventListener=function(a,b,c,d){Xh(this,a,b,c,d)};
function ai(a,b){var c=a.Y;if(c){var d=[];for(var e=1;c;c=c.Y)d.push(c),++e}a=a.oa;c=b.type||b;typeof b==="string"?b=new Dh(b,a):b instanceof Dh?b.target=b.target||a:(e=b,b=new Dh(c,a),Cg(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=bi(g,c,!0,b)&&e}b.j||(g=b.h=a,e=bi(g,c,!0,b)&&e,b.j||(e=bi(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=bi(g,c,!1,b)&&e}
p.aa=function(){$h.za.aa.call(this);this.removeAllListeners();this.Y=null};
p.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
p.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Ih(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function bi(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Ob&&g.capture==c){var h=g.listener,k=g.fc||g.src;g.Xb&&Lh(a.h,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;var ci=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?function(a){return a&&AsyncContext.Snapshot.wrap(a)}:function(a){return a};function di(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
di.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function ei(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function fi(){this.i=this.h=null}
fi.prototype.add=function(a,b){var c=gi.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
fi.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var gi=new di(function(){return new hi},function(a){return a.reset()});
function hi(){this.next=this.scope=this.h=null}
hi.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
hi.prototype.reset=function(){this.next=this.scope=this.h=null};var ii,ji=!1,ki=new fi;function li(a,b){ii||mi();ji||(ii(),ji=!0);ki.add(a,b)}
function mi(){var a=Promise.resolve(void 0);ii=function(){a.then(ni)}}
function ni(){for(var a;a=ki.remove();){try{a.h.call(a.scope)}catch(b){Ic(b)}ei(gi,a)}ji=!1}
;function oi(){}
function pi(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function qi(a){this.h=0;this.B=void 0;this.o=this.i=this.j=null;this.u=this.H=!1;if(a!=oi)try{var b=this;a.call(void 0,function(c){ri(b,2,c)},function(c){ri(b,3,c)})}catch(c){ri(this,3,c)}}
function si(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
si.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var ti=new di(function(){return new si},function(a){a.reset()});
function ui(a,b,c){var d=ti.get();d.i=a;d.h=b;d.context=c;return d}
function vi(a){return new qi(function(b,c){c(a)})}
qi.prototype.then=function(a,b,c){return wi(this,ci(typeof a==="function"?a:null),ci(typeof b==="function"?b:null),c)};
qi.prototype.$goog_Thenable=!0;p=qi.prototype;p.wc=function(a,b){return wi(this,null,ci(a),b)};
p.catch=qi.prototype.wc;p.cancel=function(a){if(this.h==0){var b=new xi(a);li(function(){yi(this,b)},this)}};
function yi(a,b){if(a.h==0)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.h==0&&d==1?yi(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):zi(c),Ai(c,e,3,b)))}a.j=null}else ri(a,3,b)}
function Bi(a,b){a.i||a.h!=2&&a.h!=3||Ci(a);a.o?a.o.next=b:a.i=b;a.o=b}
function wi(a,b,c,d){var e=ui(null,null,null);e.child=new qi(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof xi?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;Bi(a,e);return e.child}
p.lf=function(a){this.h=0;ri(this,2,a)};
p.mf=function(a){this.h=0;ri(this,3,a)};
function ri(a,b,c){if(a.h==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.lf,f=a.mf;if(d instanceof qi){Bi(d,ui(e||oi,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Qa(d))try{var k=d.then;if(typeof k==="function"){Di(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.B=c,a.h=b,a.j=null,Ci(a),b!=3||c instanceof xi||Ei(a,c))}}
function Di(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ci(a){a.H||(a.H=!0,li(a.be,a))}
function zi(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.o=null);return b}
p.be=function(){for(var a;a=zi(this);)Ai(this,a,this.h,this.B);this.H=!1};
function Ai(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.u;a=a.j)a.u=!1;if(b.child)b.child.j=null,Fi(b,c,d);else try{b.j?b.i.call(b.context):Fi(b,c,d)}catch(e){Gi.call(null,e)}ei(ti,b)}
function Fi(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Ei(a,b){a.u=!0;li(function(){a.u&&Gi.call(null,b)})}
var Gi=Ic;function xi(a){ab.call(this,a)}
$a(xi,ab);xi.prototype.name="cancel";function Hi(a,b){$h.call(this);this.j=a||1;this.i=b||C;this.o=Wa(this.hf,this);this.u=Ya()}
$a(Hi,$h);p=Hi.prototype;p.enabled=!1;p.Ca=null;p.setInterval=function(a){this.j=a;this.Ca&&this.enabled?(this.stop(),this.start()):this.Ca&&this.stop()};
p.hf=function(){if(this.enabled){var a=Ya()-this.u;a>0&&a<this.j*.8?this.Ca=this.i.setTimeout(this.o,this.j-a):(this.Ca&&(this.i.clearTimeout(this.Ca),this.Ca=null),ai(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
p.start=function(){this.enabled=!0;this.Ca||(this.Ca=this.i.setTimeout(this.o,this.j),this.u=Ya())};
p.stop=function(){this.enabled=!1;this.Ca&&(this.i.clearTimeout(this.Ca),this.Ca=null)};
p.aa=function(){Hi.za.aa.call(this);this.stop();delete this.i};function Ii(a){G.call(this);this.G=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.B=new Set;this.flushInterval=3E4;this.h=new Hi(this.flushInterval);this.h.listen("tick",this.Rb,!1,this);vc(this,this.h)}
w(Ii,G);p=Ii.prototype;p.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function Ji(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.Rb()}
p.Rb=function(){var a=this.i.values();a=[].concat(ra(a)).filter(function(b){return b.h.size});
a.length&&this.G.flush(a,this.u);Ki(a);this.j=0;this.h.enabled&&this.h.stop()};
p.Eb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Bh(a,b))};
p.zc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Ch(a,b))};
function Li(a,b){return a.B.has(b)?void 0:a.i.get(b)}
p.Cb=function(a){this.Jd(a,1,B.apply(1,arguments))};
p.Jd=function(a,b){var c=B.apply(2,arguments),d=Li(this,a);d&&d instanceof Bh&&(d.j(b,c),Ji(this))};
p.record=function(a,b){var c=B.apply(2,arguments),d=Li(this,a);d&&d instanceof Ch&&(d.record(b,c),Ji(this))};
function Ki(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Mi(){}
Mi.prototype.serialize=function(a){var b=[];Ni(this,a,b);return b.join("")};
function Ni(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ni(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Oi(d,c),c.push(":"),Ni(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Oi(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Pi={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Qi=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Oi(a,b){b.push('"',a.replace(Qi,function(c){var d=Pi[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Pi[c]=d);return d}),'"')}
;function Ri(){$h.call(this);this.headers=new Map;this.i=!1;this.K=null;this.o=this.X="";this.j=this.U=this.B=this.P=!1;this.G=0;this.u=null;this.ia="";this.ga=!1}
$a(Ri,$h);var Si=/^https?$/i,Ti=["POST","PUT"],Ui=[];function Vi(a,b,c,d,e,f,g){var h=new Ri;Ui.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Sd,!0,void 0,void 0);f&&(h.G=Math.max(0,f));g&&(h.ga=g);h.send(a,c,d,e)}
p=Ri.prototype;p.Sd=function(){this.dispose();Sb(Ui,this)};
p.send=function(a,b,c,d){if(this.K)throw Error("[goog.net.XhrIo] Object is active with another request="+this.X+"; newUri="+a);b=b?b.toUpperCase():"GET";this.X=a;this.o="";this.P=!1;this.i=!0;this.K=new XMLHttpRequest;this.K.onreadystatechange=ci(Wa(this.pd,this));try{this.getStatus(),this.U=!0,this.K.open(b,String(a),!0),this.U=!1}catch(g){this.getStatus();Wi(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=z(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(Mb(Ti,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=z(c);for(d=b.next();!d.done;d=b.next())c=z(d.value),d=c.next().value,c=c.next().value,this.K.setRequestHeader(d,c);this.ia&&(this.K.responseType=this.ia);"withCredentials"in this.K&&this.K.withCredentials!==this.ga&&(this.K.withCredentials=this.ga);try{this.u&&(clearTimeout(this.u),this.u=null),this.G>0&&(this.getStatus(),this.u=setTimeout(this.kf.bind(this),this.G)),
this.getStatus(),this.B=!0,this.K.send(a),this.B=!1}catch(g){this.getStatus(),Wi(this,g)}};
p.kf=function(){typeof La!="undefined"&&this.K&&(this.o="Timed out after "+this.G+"ms, aborting",this.getStatus(),ai(this,"timeout"),this.abort(8))};
function Wi(a,b){a.i=!1;a.K&&(a.j=!0,a.K.abort(),a.j=!1);a.o=b;Xi(a);Yi(a)}
function Xi(a){a.P||(a.P=!0,ai(a,"complete"),ai(a,"error"))}
p.abort=function(){this.K&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.K.abort(),this.j=!1,ai(this,"complete"),ai(this,"abort"),Yi(this))};
p.aa=function(){this.K&&(this.i&&(this.i=!1,this.j=!0,this.K.abort(),this.j=!1),Yi(this,!0));Ri.za.aa.call(this)};
p.pd=function(){this.da||(this.U||this.B||this.j?Zi(this):this.Ce())};
p.Ce=function(){Zi(this)};
function Zi(a){if(a.i&&typeof La!="undefined")if(a.B&&(a.K?a.K.readyState:0)==4)setTimeout(a.pd.bind(a),0);else if(ai(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if($i(a))ai(a,"complete"),ai(a,"success");else{try{var b=(a.K?a.K.readyState:0)>2?a.K.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Xi(a)}}finally{Yi(a)}}}
function Yi(a,b){if(a.K){a.u&&(clearTimeout(a.u),a.u=null);var c=a.K;a.K=null;b||ai(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
p.isActive=function(){return!!this.K};
p.isComplete=function(){return(this.K?this.K.readyState:0)==4};
function $i(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=bc(1,String(a.X)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Si.test(a?a.toLowerCase():"");c=b}return c}
p.getStatus=function(){try{return(this.K?this.K.readyState:0)>2?this.K.status:-1}catch(a){return-1}};
p.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function aj(){}
aj.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
Vi(a.url,function(d){d=d.target;if($i(d)){try{var e=d.K?d.K.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.uc,a.timeoutMillis,a.withCredentials)};
aj.prototype.ec=function(){return 1};function bj(a,b){this.logger=a;this.event=b;this.startTime=cj()}
bj.prototype.done=function(){this.logger.Lb(this.event,cj()-this.startTime)};
function dj(){xc.apply(this,arguments)}
w(dj,xc);function ej(a,b){var c=cj();b=b();a.Lb("n",cj()-c);return b}
function fj(){dj.apply(this,arguments)}
w(fj,dj);p=fj.prototype;p.Hc=function(){};
p.vb=function(){};
p.Lb=function(){};
p.Ea=function(){};
p.sc=function(){};
p.Bd=function(){};
function gj(a){return{ef:new Ac(a),errorCount:new Ec(a),eventCount:new Cc(a),ae:new Dc(a),Oh:new Bc(a),Qh:new Fc(a),jh:new Gc(a),Ph:new Hc(a)}}
function hj(a,b,c,d,e){a=th(sh(new rh(1828,"0"),a),new aj);b.length&&uh(a,Uf(new Tf,b));e!==void 0&&(a.Ra=e);d&&(a.j=!0);var f=new wh(1828,"","",!1,"",vh(a));vc(f,a);var g=new Ii({flush:function(h){try{f.flush(h)}catch(k){c(k)}}});
g.addOnDisposeCallback(function(){setTimeout(function(){try{g.Rb()}finally{f.dispose()}})});
g.o=1E5;g.flushInterval=3E4;g.h.setInterval(3E4);return g}
function ij(a,b){G.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
w(ij,G);function jj(a){if(a.timer===void 0){var b=Math.max(0,a.h+a.i-cj());a.timer=setTimeout(function(){try{a.callback()}finally{a.h=cj(),a.timer=void 0}},b)}}
function kj(a,b,c){dj.call(this);this.metrics=a;this.Fa=b;this.jb=c}
w(kj,dj);kj.prototype.Hc=function(a){this.metrics.ef.record(a,this.Fa)};
kj.prototype.vb=function(a){this.metrics.eventCount.h(a,this.Fa)};
kj.prototype.Lb=function(a,b){this.metrics.ae.record(b,a,this.jb,this.Fa)};
kj.prototype.Ea=function(a){this.metrics.errorCount.h(a,this.jb,this.Fa)};
function lj(a,b){b=b===void 0?[]:b;var c={Fa:a.Fa||"_",jb:a.jb||"",dc:a.dc||[],jc:a.jc|0,Ra:a.Ra,kc:a.kc||function(){},
Bc:!!a.Bc,Bb:a.Bb||function(e,f){return hj(e,f,c.kc,c.Bc,c.Ra)}};
b=c.Bb("41",c.dc.concat(b));kj.call(this,gj(b),c.Fa,c.jb);var d=this;this.options=c;this.service=b;this.i=!a.Bb;this.h=new ij(function(){return void d.service.Rb()},c.jc);
this.addOnDisposeCallback(function(){d.h.dispose();d.i&&d.service.dispose()})}
w(lj,kj);lj.prototype.Bd=function(a){var b=this;this.h.dispose();this.i&&this.service.dispose();this.service=this.options.Bb("41",this.options.dc.concat(a));this.h=new ij(function(){return void b.service.Rb()},this.options.jc);
this.metrics=gj(this.service)};
lj.prototype.sc=function(){jj(this.h)};
function cj(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function mj(a){this.F=K(a,0,"bfkj")}
w(mj,L);var nj=function(a){return Xd(function(b){return b instanceof a&&!(J(b.F)&2)})}(mj);function oj(a){this.F=K(a)}
w(oj,L);function pc(a){this.F=K(a)}
w(pc,L);function pj(a){this.F=K(a)}
w(pj,L);var qj=Sf(pj);function rj(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function sj(a,b,c){if(a.disable)return new fj;var d=b&&sc(vf(b,oj,7))?nc(b):[];if(c)return c.Bd(d),c.share();a={Fa:a.Fa,jb:a.jb,dc:a.ph,jc:a.zh,Bc:sc(b==null?void 0:vf(b,oj,10)),Ra:a.Ra,kc:a.kc,Bb:a.Bb};d=d===void 0?[]:d;return new lj(a,d)}
function tj(a){function b(v,x,y,E){Promise.resolve().then(function(){k.done();h.sc();h.dispose();g.resolve({Nd:v,bf:x,Bh:y,lh:E})})}
function c(v,x,y,E){if(!d.logger.da){var I="k";x?I="h":y&&(I="u");I!=="k"?E!==0&&(d.logger.vb(I),d.logger.Lb(I,v)):d.i<=0?(d.logger.vb(I),d.logger.Lb(I,v),d.i=Math.floor(Math.random()*200)):d.i--}}
G.call(this);var d=this;this.i=Math.floor(Math.random()*200);this.h=new pj;if("challenge"in a&&nj(a.challenge)){var e=Af(a.challenge,4);var f=Af(a.challenge,5);Af(a.challenge,7)&&(this.h=qj(Af(a.challenge,7)))}else e=a.program,f=a.ke;this.addOnDisposeCallback(function(){var v,x,y;return A(function(E){if(E.h==1)return E.yield(d.j,2);v=E.i;x=v.bf;(y=x)==null||y();E.h=0})});
this.logger=sj(a.Ae||{},this.h,a.mh);vc(this,this.logger);var g=new rj;this.j=g.promise;this.logger.vb("t");var h=this.logger.share(),k=new bj(h,"t");if(!C[f])throw this.logger.Ea(25),Error("EGOU");if(!C[f].a)throw this.logger.Ea(26),Error("ELIU");try{var l=C[f].a;f=[];var m=[];if(sc(vf(this.h,oj,7))){for(var n=nc(this.h),r=0;r<n.length;r++)f.push(n[r]),m.push(1);var t=rc(this.h);for(n=0;n<t.length;n++)f.push(t[n]),m.push(2)}this.o=z(l(e,b,!0,a.Nh,c,[f,m],Af(this.h,5))).next().value;this.af=g.promise.then(function(){})}catch(v){throw this.logger.Ea(28),
v;
}}
w(tj,G);tj.prototype.snapshot=function(a){if(this.da)throw Error("Already disposed");this.logger.vb("n");var b=this.logger.share();return this.j.then(function(c){var d=c.Nd;return new Promise(function(e){var f=new bj(b,"n");d(function(g){f.done();b.Hc(g.length);b.sc();b.dispose();e(g)},[a.cd,
a.cf,a.qf,a.df])})})};
tj.prototype.yd=function(a){var b=this;if(this.da)throw Error("Already disposed");this.logger.vb("n");var c=ej(this.logger,function(){return b.o([a.cd,a.cf,a.qf,a.df])});
this.logger.Hc(c.length);this.logger.sc();return c};var uj=window;function vj(a){var b=wj;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function xj(){var a=[];vj(function(b){a.push(b)});
return a}
var wj={rf:"allow-forms",sf:"allow-modals",tf:"allow-orientation-lock",uf:"allow-pointer-lock",vf:"allow-popups",wf:"allow-popups-to-escape-sandbox",xf:"allow-presentation",yf:"allow-same-origin",zf:"allow-scripts",Af:"allow-top-navigation",Bf:"allow-top-navigation-by-user-activation"},yj=pi(function(){return xj()});
function zj(){var a=Aj(),b={};Nb(yj(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Aj(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Bj(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var Cj=(new Date).getTime();function Dj(a){$h.call(this);var b=this;this.B=this.j=0;this.Ba=a!=null?a:{pa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.i=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return A(function(e){return e.yield(Ej(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.B||Fj(this)}
w(Dj,$h);function Gj(){var a=Hj;Dj.h||(Dj.h=new Dj(a));return Dj.h}
Dj.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ba.qa(this.B);delete Dj.h};
Dj.prototype.va=function(){return this.i};
function Fj(a){a.B=a.Ba.pa(function(){var b;return A(function(c){if(c.h==1)return a.i?((b=window.navigator)==null?0:b.onLine)?c.D(3):c.yield(Ej(a),3):c.yield(Ej(a),3);Fj(a);c.h=0})},3E4)}
function Ej(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.Ba.pa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.P=[h.j];h.o=0;h.u=0;a.u=void 0;a.j&&(a.Ba.qa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?ai(a,"networkstatus-online"):ai(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:Aa(h),g=!1,h.D(3)}})})}
;function Ij(){this.data=[];this.h=-1}
Ij.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Ij.prototype.get=function(a){return!!this.data[a]};
function Jj(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Kj(){this.blockSize=-1}
;function Lj(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.H=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
$a(Lj,Kj);Lj.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function Mj(a,b,c){c||(c=0);var d=a.H;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
Lj.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(f==0)for(;d<=c;)Mj(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Mj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Mj(this,e);f=0;break}}this.i=f;this.o+=b}};
Lj.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.u[c]=b&255,b/=256;Mj(this,this.u);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Nj(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Oj(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Pj(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Nj(a).match(/\S+/g)||[],b=Mb(a,b)>=0);return b}
function Qj(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Pj(a,"inverted-hdpi")&&Oj(a,Array.prototype.filter.call(a.classList?a.classList:Nj(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function Rj(){}
Rj.prototype.next=function(){return Sj};
var Sj={done:!0,value:void 0};Rj.prototype.nb=function(){return this};function Tj(a){if(a instanceof Uj||a instanceof Vj||a instanceof Wj)return a;if(typeof a.next=="function")return new Uj(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Uj(function(){return a[Symbol.iterator]()});
if(typeof a.nb=="function")return new Uj(function(){return a.nb()});
throw Error("Not an iterator or iterable.");}
function Uj(a){this.h=a}
Uj.prototype.nb=function(){return new Vj(this.h())};
Uj.prototype[Symbol.iterator]=function(){return new Wj(this.h())};
Uj.prototype.i=function(){return new Wj(this.h())};
function Vj(a){this.h=a}
w(Vj,Rj);Vj.prototype.next=function(){return this.h.next()};
Vj.prototype[Symbol.iterator]=function(){return new Wj(this.h)};
Vj.prototype.i=function(){return new Wj(this.h)};
function Wj(a){Uj.call(this,function(){return a});
this.j=a}
w(Wj,Uj);Wj.prototype.next=function(){return this.j.next()};function M(a){G.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.B=!!a}
$a(M,G);p=M.prototype;p.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
p.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Tb(a)}return!1};
p.Tb=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Sb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
p.lb=function(a,b){var c=this.i[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.B)for(f=0;f<c.length;f++)e=c[f],Xj(this.h[e+1],this.h[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.da;f++){var g=c[f];this.h[g+1].apply(this.h[g+2],d)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.Tb(c)}}return f!=0}return!1};
function Xj(a,b,c){li(function(){a.apply(b,c)})}
p.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Tb,this),delete this.i[a])}else this.h.length=0,this.i={}};
p.aa=function(){M.za.aa.call(this);this.clear();this.j.length=0};function Yj(a){this.h=a}
Yj.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new Mi).serialize(b))};
Yj.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Yj.prototype.remove=function(a){this.h.remove(a)};function Zj(a){this.h=a}
$a(Zj,Yj);function ak(a){this.data=a}
function bk(a){return a===void 0||a instanceof ak?a:new ak(a)}
Zj.prototype.set=function(a,b){Zj.za.set.call(this,a,bk(b))};
Zj.prototype.i=function(a){a=Zj.za.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Zj.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ck(a){this.h=a}
$a(ck,Zj);ck.prototype.set=function(a,b,c){if(b=bk(b)){if(c){if(c<Ya()){ck.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ya()}ck.za.set.call(this,a,b)};
ck.prototype.i=function(a){var b=ck.za.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ya()||c&&c>Ya())ck.prototype.remove.call(this,a);else return b}};function dk(){}
;function ek(){}
$a(ek,dk);ek.prototype[Symbol.iterator]=function(){return Tj(this.nb(!0)).i()};
ek.prototype.clear=function(){var a=Array.from(this);a=z(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function fk(a){this.h=a;this.i=null}
$a(fk,ek);p=fk.prototype;p.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;return this.i=b};
p.set=function(a,b){gk(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
p.get=function(a){gk(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
p.remove=function(a){gk(this);this.h.removeItem(a)};
p.nb=function(a){gk(this);var b=0,c=this.h,d=new Rj;d.next=function(){if(b>=c.length)return Sj;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
p.clear=function(){gk(this);this.h.clear()};
p.key=function(a){gk(this);return this.h.key(a)};
function gk(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.i)!=null?b:a.isAvailable())||Ic(Error("Storage mechanism: Storage unavailable"))}
;function hk(){var a=null;try{a=C.localStorage||null}catch(b){}fk.call(this,a)}
$a(hk,fk);function ik(a,b){this.i=a;this.h=b+"::"}
$a(ik,ek);ik.prototype.set=function(a,b){this.i.set(this.h+a,b)};
ik.prototype.get=function(a){return this.i.get(this.h+a)};
ik.prototype.remove=function(a){this.i.remove(this.h+a)};
ik.prototype.nb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Rj;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},jk=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.Sc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var kk={ob:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
gd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},lk={ob:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
gd:function(a){return[].concat.apply([],a)}};
N.Ze=function(){jk?(N.kb=Uint8Array,N.Ha=Uint16Array,N.Id=Int32Array,N.assign(N,kk)):(N.kb=Array,N.Ha=Array,N.Id=Array,N.assign(N,lk))};
N.Ze();var mk=!0;try{new Uint8Array(1)}catch(a){mk=!1}
function nk(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new N.kb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var ok={};ok=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var pk={},qk,rk=[],sk=0;sk<256;sk++){qk=sk;for(var tk=0;tk<8;tk++)qk=qk&1?3988292384^qk>>>1:qk>>>1;rk[sk]=qk}pk=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^rk[(a^b[d])&255];return a^-1};var uk={};uk={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function vk(a){for(var b=a.length;--b>=0;)a[b]=0}
var wk=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],xk=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],yk=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],zk=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Ak=Array(576);vk(Ak);var Bk=Array(60);vk(Bk);var Ck=Array(512);vk(Ck);var Dk=Array(256);vk(Dk);var Ek=Array(29);vk(Ek);var Fk=Array(30);vk(Fk);function Gk(a,b,c,d,e){this.zd=a;this.ee=b;this.de=c;this.Xd=d;this.ze=e;this.kd=a&&a.length}
var Hk,Ik,Jk;function Kk(a,b){this.ed=a;this.xb=0;this.Wa=b}
function Lk(a,b){a.Z[a.pending++]=b&255;a.Z[a.pending++]=b>>>8&255}
function Mk(a,b,c){a.ha>16-c?(a.na|=b<<a.ha&65535,Lk(a,a.na),a.na=b>>16-a.ha,a.ha+=c-16):(a.na|=b<<a.ha&65535,a.ha+=c)}
function Nk(a,b,c){Mk(a,c[b*2],c[b*2+1])}
function Ok(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Pk(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Ok(d[e]++,e))}
function Qk(a){var b;for(b=0;b<286;b++)a.ra[b*2]=0;for(b=0;b<30;b++)a.Za[b*2]=0;for(b=0;b<19;b++)a.ja[b*2]=0;a.ra[512]=1;a.Na=a.Ab=0;a.xa=a.matches=0}
function Rk(a){a.ha>8?Lk(a,a.na):a.ha>0&&(a.Z[a.pending++]=a.na);a.na=0;a.ha=0}
function Sk(a,b,c){Rk(a);Lk(a,c);Lk(a,~c);N.ob(a.Z,a.window,b,c,a.pending);a.pending+=c}
function Tk(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Uk(a,b,c){for(var d=a.ba[c],e=c<<1;e<=a.La;){e<a.La&&Tk(b,a.ba[e+1],a.ba[e],a.depth)&&e++;if(Tk(b,d,a.ba[e],a.depth))break;a.ba[c]=a.ba[e];c=e;e<<=1}a.ba[c]=d}
function Vk(a,b,c){var d=0;if(a.xa!==0){do{var e=a.Z[a.Gb+d*2]<<8|a.Z[a.Gb+d*2+1];var f=a.Z[a.Gc+d];d++;if(e===0)Nk(a,f,b);else{var g=Dk[f];Nk(a,g+256+1,b);var h=wk[g];h!==0&&(f-=Ek[g],Mk(a,f,h));e--;g=e<256?Ck[e]:Ck[256+(e>>>7)];Nk(a,g,c);h=xk[g];h!==0&&(e-=Fk[g],Mk(a,e,h))}}while(d<a.xa)}Nk(a,256,b)}
function Wk(a,b){var c=b.ed,d=b.Wa.zd,e=b.Wa.kd,f=b.Wa.Xd,g,h=-1;a.La=0;a.sb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.ba[++a.La]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.La<2;){var k=a.ba[++a.La]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Na--;e&&(a.Ab-=d[k*2+1])}b.xb=h;for(g=a.La>>1;g>=1;g--)Uk(a,c,g);k=f;do g=a.ba[1],a.ba[1]=a.ba[a.La--],Uk(a,c,1),d=a.ba[1],a.ba[--a.sb]=g,a.ba[--a.sb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.ba[1]=k++,Uk(a,c,1);while(a.La>=
2);a.ba[--a.sb]=a.ba[1];g=b.ed;k=b.xb;d=b.Wa.zd;e=b.Wa.kd;f=b.Wa.ee;var l=b.Wa.de,m=b.Wa.ze,n,r=0;for(n=0;n<=15;n++)a.Ia[n]=0;g[a.ba[a.sb]*2+1]=0;for(b=a.sb+1;b<573;b++){var t=a.ba[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,r++);g[t*2+1]=n;if(!(t>k)){a.Ia[n]++;var v=0;t>=l&&(v=f[t-l]);var x=g[t*2];a.Na+=x*(n+v);e&&(a.Ab+=x*(d[t*2+1]+v))}}if(r!==0){do{for(n=m-1;a.Ia[n]===0;)n--;a.Ia[n]--;a.Ia[n+1]+=2;a.Ia[m]--;r-=2}while(r>0);for(n=m;n!==0;n--)for(t=a.Ia[n];t!==0;)d=a.ba[--b],d>k||(g[d*2+1]!==n&&(a.Na+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}Pk(c,h,a.Ia)}
function Xk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ja[l*2]+=g:l!==0?(l!==e&&a.ja[l*2]++,a.ja[32]++):g<=10?a.ja[34]++:a.ja[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Yk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Nk(a,l,a.ja);while(--g!==0)}else l!==0?(l!==e&&(Nk(a,l,a.ja),g--),Nk(a,16,a.ja),Mk(a,g-3,2)):g<=10?(Nk(a,17,a.ja),Mk(a,g-3,3)):(Nk(a,18,a.ja),Mk(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Zk(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ra[c*2]!==0)return 0;if(a.ra[18]!==0||a.ra[20]!==0||a.ra[26]!==0)return 1;for(c=32;c<256;c++)if(a.ra[c*2]!==0)return 1;return 0}
var $k=!1;function al(a,b,c){a.Z[a.Gb+a.xa*2]=b>>>8&255;a.Z[a.Gb+a.xa*2+1]=b&255;a.Z[a.Gc+a.xa]=c&255;a.xa++;b===0?a.ra[c*2]++:(a.matches++,b--,a.ra[(Dk[c]+256+1)*2]++,a.Za[(b<256?Ck[b]:Ck[256+(b>>>7)])*2]++);return a.xa===a.Kb-1}
;function bl(a,b){a.msg=uk[b];return b}
function cl(a){for(var b=a.length;--b>=0;)a[b]=0}
function dl(a){var b=a.state,c=b.pending;c>a.S&&(c=a.S);c!==0&&(N.ob(a.output,b.Z,b.Nb,c,a.yb),a.yb+=c,b.Nb+=c,a.Tc+=c,a.S-=c,b.pending-=c,b.pending===0&&(b.Nb=0))}
function el(a,b){var c=a.ta>=0?a.ta:-1,d=a.v-a.ta,e=0;if(a.level>0){a.M.Ac===2&&(a.M.Ac=Zk(a));Wk(a,a.ic);Wk(a,a.ac);Xk(a,a.ra,a.ic.xb);Xk(a,a.Za,a.ac.xb);Wk(a,a.Yc);for(e=18;e>=3&&a.ja[zk[e]*2+1]===0;e--);a.Na+=3*(e+1)+5+5+4;var f=a.Na+3+7>>>3;var g=a.Ab+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Mk(a,b?1:0,3),Sk(a,c,d);else if(a.strategy===4||g===f)Mk(a,2+(b?1:0),3),Vk(a,Ak,Bk);else{Mk(a,4+(b?1:0),3);c=a.ic.xb+1;d=a.ac.xb+1;e+=1;Mk(a,c-257,5);Mk(a,d-1,5);Mk(a,e-4,4);for(f=0;f<e;f++)Mk(a,
a.ja[zk[f]*2+1],3);Yk(a,a.ra,c-1);Yk(a,a.Za,d-1);Vk(a,a.ra,a.Za)}Qk(a);b&&Rk(a);a.ta=a.v;dl(a.M)}
function O(a,b){a.Z[a.pending++]=b}
function fl(a,b){a.Z[a.pending++]=b>>>8&255;a.Z[a.pending++]=b&255}
function gl(a,b){var c=a.nd,d=a.v,e=a.wa,f=a.od,g=a.v>a.la-262?a.v-(a.la-262):0,h=a.window,k=a.Xa,l=a.Ga,m=a.v+258,n=h[d+e-1],r=h[d+e];a.wa>=a.jd&&(c>>=2);f>a.A&&(f=a.A);do{var t=b;if(h[t+e]===r&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.wb=b;e=t;if(t>=f)break;n=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.A?e:a.A}
function hl(a){var b=a.la,c;do{var d=a.Gd-a.A-a.v;if(a.v>=b+(b-262)){N.ob(a.window,a.window,b,b,0);a.wb-=b;a.v-=b;a.ta-=b;var e=c=a.hc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ga[--e],a.Ga[e]=f>=b?f-b:0;while(--c);d+=b}if(a.M.ma===0)break;e=a.M;c=a.window;f=a.v+a.A;var g=e.ma;g>d&&(g=d);g===0?c=0:(e.ma-=g,N.ob(c,e.input,e.fb,g,f),e.state.wrap===1?e.J=ok(e.J,c,g,f):e.state.wrap===2&&(e.J=pk(e.J,c,g,f)),e.fb+=g,e.ib+=g,c=g);a.A+=c;if(a.A+a.sa>=3)for(d=a.v-a.sa,a.R=a.window[d],
a.R=(a.R<<a.Ka^a.window[d+1])&a.Ja;a.sa&&!(a.R=(a.R<<a.Ka^a.window[d+3-1])&a.Ja,a.Ga[d&a.Xa]=a.head[a.R],a.head[a.R]=d,d++,a.sa--,a.A+a.sa<3););}while(a.A<262&&a.M.ma!==0)}
function il(a,b){for(var c;;){if(a.A<262){hl(a);if(a.A<262&&b===0)return 1;if(a.A===0)break}c=0;a.A>=3&&(a.R=(a.R<<a.Ka^a.window[a.v+3-1])&a.Ja,c=a.Ga[a.v&a.Xa]=a.head[a.R],a.head[a.R]=a.v);c!==0&&a.v-c<=a.la-262&&(a.T=gl(a,c));if(a.T>=3)if(c=al(a,a.v-a.wb,a.T-3),a.A-=a.T,a.T<=a.Ic&&a.A>=3){a.T--;do a.v++,a.R=(a.R<<a.Ka^a.window[a.v+3-1])&a.Ja,a.Ga[a.v&a.Xa]=a.head[a.R],a.head[a.R]=a.v;while(--a.T!==0);a.v++}else a.v+=a.T,a.T=0,a.R=a.window[a.v],a.R=(a.R<<a.Ka^a.window[a.v+1])&a.Ja;else c=al(a,0,
a.window[a.v]),a.A--,a.v++;if(c&&(el(a,!1),a.M.S===0))return 1}a.sa=a.v<2?a.v:2;return b===4?(el(a,!0),a.M.S===0?3:4):a.xa&&(el(a,!1),a.M.S===0)?1:2}
function jl(a,b){for(var c,d;;){if(a.A<262){hl(a);if(a.A<262&&b===0)return 1;if(a.A===0)break}c=0;a.A>=3&&(a.R=(a.R<<a.Ka^a.window[a.v+3-1])&a.Ja,c=a.Ga[a.v&a.Xa]=a.head[a.R],a.head[a.R]=a.v);a.wa=a.T;a.rd=a.wb;a.T=2;c!==0&&a.wa<a.Ic&&a.v-c<=a.la-262&&(a.T=gl(a,c),a.T<=5&&(a.strategy===1||a.T===3&&a.v-a.wb>4096)&&(a.T=2));if(a.wa>=3&&a.T<=a.wa){d=a.v+a.A-3;c=al(a,a.v-1-a.rd,a.wa-3);a.A-=a.wa-1;a.wa-=2;do++a.v<=d&&(a.R=(a.R<<a.Ka^a.window[a.v+3-1])&a.Ja,a.Ga[a.v&a.Xa]=a.head[a.R],a.head[a.R]=a.v);
while(--a.wa!==0);a.cb=0;a.T=2;a.v++;if(c&&(el(a,!1),a.M.S===0))return 1}else if(a.cb){if((c=al(a,0,a.window[a.v-1]))&&el(a,!1),a.v++,a.A--,a.M.S===0)return 1}else a.cb=1,a.v++,a.A--}a.cb&&(al(a,0,a.window[a.v-1]),a.cb=0);a.sa=a.v<2?a.v:2;return b===4?(el(a,!0),a.M.S===0?3:4):a.xa&&(el(a,!1),a.M.S===0)?1:2}
function kl(a,b){for(var c,d,e,f=a.window;;){if(a.A<=258){hl(a);if(a.A<=258&&b===0)return 1;if(a.A===0)break}a.T=0;if(a.A>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.T=258-(e-d);a.T>a.A&&(a.T=a.A)}a.T>=3?(c=al(a,1,a.T-3),a.A-=a.T,a.v+=a.T,a.T=0):(c=al(a,0,a.window[a.v]),a.A--,a.v++);if(c&&(el(a,!1),a.M.S===0))return 1}a.sa=0;return b===4?(el(a,!0),a.M.S===0?3:4):
a.xa&&(el(a,!1),a.M.S===0)?1:2}
function ll(a,b){for(var c;;){if(a.A===0&&(hl(a),a.A===0)){if(b===0)return 1;break}a.T=0;c=al(a,0,a.window[a.v]);a.A--;a.v++;if(c&&(el(a,!1),a.M.S===0))return 1}a.sa=0;return b===4?(el(a,!0),a.M.S===0?3:4):a.xa&&(el(a,!1),a.M.S===0)?1:2}
function ml(a,b,c,d,e){this.le=a;this.ye=b;this.Be=c;this.xe=d;this.ge=e}
var nl;nl=[new ml(0,0,0,0,function(a,b){var c=65535;for(c>a.ya-5&&(c=a.ya-5);;){if(a.A<=1){hl(a);if(a.A===0&&b===0)return 1;if(a.A===0)break}a.v+=a.A;a.A=0;var d=a.ta+c;if(a.v===0||a.v>=d)if(a.A=a.v-d,a.v=d,el(a,!1),a.M.S===0)return 1;if(a.v-a.ta>=a.la-262&&(el(a,!1),a.M.S===0))return 1}a.sa=0;if(b===4)return el(a,!0),a.M.S===0?3:4;a.v>a.ta&&el(a,!1);return 1}),
new ml(4,4,8,4,il),new ml(4,5,16,8,il),new ml(4,6,32,32,il),new ml(4,4,16,16,jl),new ml(8,16,32,32,jl),new ml(8,16,128,128,jl),new ml(8,32,128,256,jl),new ml(32,128,258,1024,jl),new ml(32,258,258,4096,jl)];
function ol(){this.M=null;this.status=0;this.Z=null;this.wrap=this.pending=this.Nb=this.ya=0;this.I=null;this.Aa=0;this.method=8;this.ub=-1;this.Xa=this.Vc=this.la=0;this.window=null;this.Gd=0;this.head=this.Ga=null;this.od=this.jd=this.strategy=this.level=this.Ic=this.nd=this.wa=this.A=this.wb=this.v=this.cb=this.rd=this.T=this.ta=this.Ka=this.Ja=this.Ec=this.hc=this.R=0;this.ra=new N.Ha(1146);this.Za=new N.Ha(122);this.ja=new N.Ha(78);cl(this.ra);cl(this.Za);cl(this.ja);this.Yc=this.ac=this.ic=
null;this.Ia=new N.Ha(16);this.ba=new N.Ha(573);cl(this.ba);this.sb=this.La=0;this.depth=new N.Ha(573);cl(this.depth);this.ha=this.na=this.sa=this.matches=this.Ab=this.Na=this.Gb=this.xa=this.Kb=this.Gc=0}
function pl(a,b){if(!a||!a.state||b>5||b<0)return a?bl(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.ma!==0||c.status===666&&b!==4)return bl(a,a.S===0?-5:-2);c.M=a;var d=c.ub;c.ub=b;if(c.status===42)if(c.wrap===2)a.J=0,O(c,31),O(c,139),O(c,8),c.I?(O(c,(c.I.text?1:0)+(c.I.Sa?2:0)+(c.I.extra?4:0)+(c.I.name?8:0)+(c.I.comment?16:0)),O(c,c.I.time&255),O(c,c.I.time>>8&255),O(c,c.I.time>>16&255),O(c,c.I.time>>24&255),O(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),O(c,c.I.os&255),c.I.extra&&c.I.extra.length&&
(O(c,c.I.extra.length&255),O(c,c.I.extra.length>>8&255)),c.I.Sa&&(a.J=pk(a.J,c.Z,c.pending,0)),c.Aa=0,c.status=69):(O(c,0),O(c,0),O(c,0),O(c,0),O(c,0),O(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),O(c,3),c.status=113);else{var e=8+(c.Vc-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;fl(c,e+(31-e%31));c.v!==0&&(fl(c,a.J>>>16),fl(c,a.J&65535));a.J=1}if(c.status===69)if(c.I.extra){for(e=c.pending;c.Aa<(c.I.extra.length&65535)&&(c.pending!==c.ya||
(c.I.Sa&&c.pending>e&&(a.J=pk(a.J,c.Z,c.pending-e,e)),dl(a),e=c.pending,c.pending!==c.ya));)O(c,c.I.extra[c.Aa]&255),c.Aa++;c.I.Sa&&c.pending>e&&(a.J=pk(a.J,c.Z,c.pending-e,e));c.Aa===c.I.extra.length&&(c.Aa=0,c.status=73)}else c.status=73;if(c.status===73)if(c.I.name){e=c.pending;do{if(c.pending===c.ya&&(c.I.Sa&&c.pending>e&&(a.J=pk(a.J,c.Z,c.pending-e,e)),dl(a),e=c.pending,c.pending===c.ya)){var f=1;break}f=c.Aa<c.I.name.length?c.I.name.charCodeAt(c.Aa++)&255:0;O(c,f)}while(f!==0);c.I.Sa&&c.pending>
e&&(a.J=pk(a.J,c.Z,c.pending-e,e));f===0&&(c.Aa=0,c.status=91)}else c.status=91;if(c.status===91)if(c.I.comment){e=c.pending;do{if(c.pending===c.ya&&(c.I.Sa&&c.pending>e&&(a.J=pk(a.J,c.Z,c.pending-e,e)),dl(a),e=c.pending,c.pending===c.ya)){f=1;break}f=c.Aa<c.I.comment.length?c.I.comment.charCodeAt(c.Aa++)&255:0;O(c,f)}while(f!==0);c.I.Sa&&c.pending>e&&(a.J=pk(a.J,c.Z,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.I.Sa?(c.pending+2>c.ya&&dl(a),c.pending+2<=c.ya&&(O(c,a.J&
255),O(c,a.J>>8&255),a.J=0,c.status=113)):c.status=113);if(c.pending!==0){if(dl(a),a.S===0)return c.ub=-1,0}else if(a.ma===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return bl(a,-5);if(c.status===666&&a.ma!==0)return bl(a,-5);if(a.ma!==0||c.A!==0||b!==0&&c.status!==666){d=c.strategy===2?ll(c,b):c.strategy===3?kl(c,b):nl[c.level].ge(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.S===0&&(c.ub=-1),0;if(d===2&&(b===1?(Mk(c,2,3),Nk(c,256,Ak),c.ha===16?(Lk(c,c.na),c.na=0,c.ha=0):c.ha>=8&&
(c.Z[c.pending++]=c.na&255,c.na>>=8,c.ha-=8)):b!==5&&(Mk(c,0,3),Sk(c,0,0),b===3&&(cl(c.head),c.A===0&&(c.v=0,c.ta=0,c.sa=0))),dl(a),a.S===0))return c.ub=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(O(c,a.J&255),O(c,a.J>>8&255),O(c,a.J>>16&255),O(c,a.J>>24&255),O(c,a.ib&255),O(c,a.ib>>8&255),O(c,a.ib>>16&255),O(c,a.ib>>24&255)):(fl(c,a.J>>>16),fl(c,a.J&65535));dl(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var ql={};ql=function(){this.input=null;this.ib=this.ma=this.fb=0;this.output=null;this.Tc=this.S=this.yb=0;this.msg="";this.state=null;this.Ac=2;this.J=0};var rl=Object.prototype.toString;
function sl(a){if(!(this instanceof sl))return new sl(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.M=new ql;this.M.S=0;var b=this.M;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=bl(b,-2);else{e===8&&(e=9);var k=new ol;b.state=k;k.M=b;k.wrap=h;k.I=null;k.Vc=e;k.la=1<<k.Vc;k.Xa=k.la-1;k.Ec=f+7;k.hc=1<<k.Ec;k.Ja=k.hc-1;k.Ka=~~((k.Ec+3-1)/3);k.window=new N.kb(k.la*2);k.head=new N.Ha(k.hc);k.Ga=new N.Ha(k.la);k.Kb=1<<f+6;k.ya=k.Kb*4;k.Z=new N.kb(k.ya);k.Gb=1*k.Kb;k.Gc=3*k.Kb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.ib=b.Tc=0;b.Ac=2;c=b.state;c.pending=0;c.Nb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.J=c.wrap===2?
0:1;c.ub=0;if(!$k){d=Array(16);for(f=g=0;f<28;f++)for(Ek[f]=g,e=0;e<1<<wk[f];e++)Dk[g++]=f;Dk[g-1]=f;for(f=g=0;f<16;f++)for(Fk[f]=g,e=0;e<1<<xk[f];e++)Ck[g++]=f;for(g>>=7;f<30;f++)for(Fk[f]=g<<7,e=0;e<1<<xk[f]-7;e++)Ck[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Ak[e*2+1]=8,e++,d[8]++;for(;e<=255;)Ak[e*2+1]=9,e++,d[9]++;for(;e<=279;)Ak[e*2+1]=7,e++,d[7]++;for(;e<=287;)Ak[e*2+1]=8,e++,d[8]++;Pk(Ak,287,d);for(e=0;e<30;e++)Bk[e*2+1]=5,Bk[e*2]=Ok(e,5);Hk=new Gk(Ak,wk,257,286,15);Ik=new Gk(Bk,
xk,0,30,15);Jk=new Gk([],yk,0,19,7);$k=!0}c.ic=new Kk(c.ra,Hk);c.ac=new Kk(c.Za,Ik);c.Yc=new Kk(c.ja,Jk);c.na=0;c.ha=0;Qk(c);c=0}else c=bl(b,-2);c===0&&(b=b.state,b.Gd=2*b.la,cl(b.head),b.Ic=nl[b.level].ye,b.jd=nl[b.level].le,b.od=nl[b.level].Be,b.nd=nl[b.level].xe,b.v=0,b.ta=0,b.A=0,b.sa=0,b.T=b.wa=2,b.cb=0,b.R=0);b=c}}else b=-2;if(b!==0)throw Error(uk[b]);a.header&&(b=this.M)&&b.state&&b.state.wrap===2&&(b.state.I=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=nk(a.dictionary):
rl.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.M;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.A)b=-2;else{b===1&&(a.J=ok(a.J,f,g,0));l.wrap=0;g>=l.la&&(b===0&&(cl(l.head),l.v=0,l.ta=0,l.sa=0),c=new N.kb(l.la),N.ob(c,f,g-l.la,l.la,0),f=c,g=l.la);c=a.ma;d=a.fb;e=a.input;a.ma=g;a.fb=0;a.input=f;for(hl(l);l.A>=3;){f=l.v;g=l.A-2;do l.R=(l.R<<l.Ka^l.window[f+3-1])&l.Ja,l.Ga[f&l.Xa]=l.head[l.R],l.head[l.R]=f,f++;while(--g);
l.v=f;l.A=2;hl(l)}l.v+=l.A;l.ta=l.v;l.sa=l.A;l.A=0;l.T=l.wa=2;l.cb=0;a.fb=d;a.input=e;a.ma=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(uk[b]);this.gh=!0}}
sl.prototype.push=function(a,b){var c=this.M,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=nk(a):rl.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.fb=0;c.ma=c.input.length;do{c.S===0&&(c.output=new N.kb(d),c.yb=0,c.S=d);a=pl(c,e);if(a!==1&&a!==0)return tl(this,a),this.ended=!0,!1;if(c.S===0||c.ma===0&&(e===4||e===2))if(this.options.to==="string"){var f=N.Sc(c.output,c.yb);b=f;f=f.length;if(f<65537&&(b.subarray&&mk||!b.subarray))b=
String.fromCharCode.apply(null,N.Sc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.Sc(c.output,c.yb),this.chunks.push(b)}while((c.ma>0||c.S===0)&&a!==1);if(e===4)return(c=this.M)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=bl(c,-2):(c.state=null,a=d===113?bl(c,-3):0)):a=-2,tl(this,a),this.ended=!0,a===0;e===2&&(tl(this,0),c.S=0);return!0};
function tl(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):N.gd(a.chunks));a.chunks=[];a.err=b;a.msg=a.M.msg}
function ul(a,b){b=b||{};b.gzip=!0;b=new sl(b);b.push(a,!0);if(b.err)throw b.msg||uk[b.err];return b.result}
;function vl(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=lb(a):b=null;return b}
;function wl(a){return lb(a===null?"null":a===void 0?"undefined":a)}
;function xl(a){this.name=a}
;var yl=new xl("rawColdConfigGroup");var zl=new xl("rawHotConfigGroup");function Al(a){this.F=K(a)}
w(Al,L);function Bl(a){this.F=K(a)}
w(Bl,L);Bl.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new sd(a,rd):ud||(ud=new sd(null,rd));else if(a.constructor!==sd)if(qd(a))a=a.length?new sd(new Uint8Array(a),rd):ud||(ud=new sd(null,rd));else throw Error();return jf(this,1,a)};var Cl=new xl("continuationCommand");var Dl=new xl("webCommandMetadata");var El=new xl("signalServiceEndpoint");var Fl={Hf:"EMBEDDED_PLAYER_MODE_UNKNOWN",Ef:"EMBEDDED_PLAYER_MODE_DEFAULT",Gf:"EMBEDDED_PLAYER_MODE_PFP",Ff:"EMBEDDED_PLAYER_MODE_PFL"};var Gl=new xl("feedbackEndpoint");var be={Jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",Bg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",Sf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",Ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",Lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",Ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
Ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",Mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",Dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",Rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",Qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",Pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",Eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",Sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",Cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",Tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
Og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",Lf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",Kf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",Mf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Nf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",Vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",Gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
Hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",Rf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",Pf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",Qf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",Of:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",Fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",Uf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",Tf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
Kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED"};var Hl=new xl("shareEndpoint"),Il=new xl("shareEntityEndpoint"),Jl=new xl("shareEntityServiceEndpoint"),Kl=new xl("webPlayerShareEntityServiceEndpoint");var Ll=new xl("playlistEditEndpoint");var Ml=new xl("modifyChannelNotificationPreferenceEndpoint");var Nl=new xl("unsubscribeEndpoint");var Ol=new xl("subscribeEndpoint");function Pl(){var a=Ql;F("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Rl(a){D("yt.ads.biscotti.lastId_",a)}
;function Sl(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var Tl=C.window,Ul,Vl,Wl=(Tl==null?void 0:(Ul=Tl.yt)==null?void 0:Ul.config_)||(Tl==null?void 0:(Vl=Tl.ytcfg)==null?void 0:Vl.data_)||{};D("yt.config_",Wl);function Xl(){Sl(Wl,arguments)}
function P(a,b){return a in Wl?Wl[a]:b}
function Yl(a){var b=Wl.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Zl=[];function $l(a){Zl.forEach(function(b){return b(a)})}
function am(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){bm(b)}}:a}
function bm(a){var b=F("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Xl("ERRORS",b));$l(a)}
function cm(a,b,c,d,e){var f=F("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=P("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Xl("ERRORS",f))}
;var dm=/^[\w.]*$/,em={q:!0,search_query:!0};function fm(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=gm(f[0]||""),h=gm(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Tb(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,m=f[0],n=String(fm);l.args=[{key:m,value:f[1],query:a,method:hm===n?"unchanged":n}];em.hasOwnProperty(m)||cm(l)}}return c}
var hm=String(fm);function im(a){var b=[];sg(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Nb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function jm(a){a.charAt(0)==="?"&&(a=a.substring(1));return fm(a,"&")}
function km(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),jm(a.length>1?a[1]:a[0])):{}}
function lm(a,b){return mm(a,b||{},!0)}
function mm(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=jm(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return ic(a,e)+d}
function nm(a){if(!b)var b=window.location.href;var c=bc(1,a),d=cc(a);c&&d?(a=a.match($b),b=b.match($b),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?cc(b)===d&&(Number(bc(4,b))||null)===(Number(bc(4,a))||null):!0;return a}
function gm(a){return a&&a.match(dm)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function om(a){var b=pm;a=a===void 0?F("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Cj;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ma){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?uj:g;try{var h=g.history.length}catch(Ma){h=0}e.u_his=h;var k;e.u_h=(k=uj.screen)==null?void 0:k.height;var l;e.u_w=(l=uj.screen)==null?void 0:l.width;var m;e.u_ah=(m=uj.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=uj.screen)==null?void 0:n.availWidth;var r;e.u_cd=(r=uj.screen)==null?void 0:r.colorDepth}catch(Ma){}h=b.h;try{var t=h.screenX;var v=h.screenY}catch(Ma){}try{var x=h.outerWidth;var y=h.outerHeight}catch(Ma){}try{var E=h.innerWidth;var I=h.innerHeight}catch(Ma){}try{var S=h.screenLeft;var ea=h.screenTop}catch(Ma){}try{E=h.innerWidth,I=h.innerHeight}catch(Ma){}try{var Ja=h.screen.availWidth;var bb=h.screen.availTop}catch(Ma){}t=[S,ea,t,v,Ja,bb,x,y,E,I];try{var ba=(b.h.top||window).document,Y=ba.compatMode==
"CSS1Compat"?ba.documentElement:ba.body;var oa=(new rg(Y.clientWidth,Y.clientHeight)).round()}catch(Ma){oa=new rg(-12245933,-12245933)}ba=oa;oa={};var Na=Na===void 0?C:Na;Y=new Ij;"SVGElement"in Na&&"createElementNS"in Na.document&&Y.set(0);v=zj();v["allow-top-navigation-by-user-activation"]&&Y.set(1);v["allow-popups-to-escape-sandbox"]&&Y.set(2);Na.crypto&&Na.crypto.subtle&&Y.set(3);"TextDecoder"in Na&&"TextEncoder"in Na&&Y.set(4);Na=Jj(Y);oa.bc=Na;oa.bih=ba.height;oa.biw=ba.width;oa.brdim=t.join();
b=b.i;b=(oa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,oa.wgl=!!uj.WebGLRenderingContext,oa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var pm=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return im(om(a))});Ya();navigator.userAgent.indexOf(" (CrKey ");var qm="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function rm(){if(!qm)return null;var a=qm();return"open"in a?a:null}
function sm(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function tm(a,b){typeof a==="function"&&(a=am(a));return window.setTimeout(a,b)}
;var um="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ra(um),["client_dev_set_cookie"]);function R(a){a=wm(a);return typeof a==="string"&&a==="false"?!1:!!a}
function xm(a,b){a=wm(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function wm(a){return P("EXPERIMENT_FLAGS",{})[a]}
function ym(){for(var a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{}),c=z(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=P("EXPERIMENT_FLAGS",{});d=z(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var zm={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Am="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ra(um)),Bm=!1;function Cm(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&am(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=rm();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;R("debug_forward_web_query_parameters")&&(a=Dm(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Em(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){cm(n)}}l.send(d);return l}
function Em(a,b){b=b===void 0?{}:b;var c=nm(a),d=P("INNERTUBE_CLIENT_NAME"),e=R("web_ajax_ignore_global_headers_if_set"),f;for(f in zm){var g=P(zm[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=P("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(cc(a)?!1:!0))){k=a;var l;if(l=R("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=cc(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=ac(bc(5,k))||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!cc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!cc(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&cc(a)||(b["X-YouTube-Ad-Signals"]=im(om()));return b}
function Fm(a,b){b.method="POST";b.postParams||(b.postParams={});return Gm(a,b)}
function Gm(a,b){var c=b.format||"JSON";a=Hm(a,b);var d=Im(a,b),e=!1,f=Jm(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=sm(k),m=null,n=400<=k.status&&k.status<500,r=500<=k.status&&k.status<600;if(l||n||r)m=Km(a,c,k,b.convertToSafeHtml);l&&(l=Lm(c,k,m));m=m||{};n=b.context||C;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=tm(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Hm(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=lm(a,b);return a}
function Im(a,b){var c=P("XSRF_FIELD_NAME"),d=P("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=P("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||cc(a)&&!b.withCredentials&&cc(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=jm(e),Cg(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):hc(e));f=e||f&&!vg(f);!Bm&&f&&b.method!=="POST"&&(Bm=!0,bm(Error("AJAX request with postData should use POST")));return e}
function Km(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,cm(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Mm(a):null)e={},Nb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Nm(g)})}d&&Om(e);
return e}
function Om(a){if(Qa(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];var e=jb();d=new Cb(e?e.createHTML(d):d);a[c]=d}else Om(a[b])}}
function Lm(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Mm(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Nm(a){var b="";Nb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Dm(a){var b=window.location.search,c=cc(a);R("debug_handle_relative_url_for_query_forward_killswitch")||!c&&nm(a)&&(c=document.location.hostname);var d=ac(bc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=jm(b),f={};Nb(Am,function(g){e[g]&&(f[g]=e[g])});
return mm(a,f||{},!1)}
var Jm=Cm;var Pm=[{Jc:function(a){return"Cannot read property '"+a.key+"'"},
lc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Jc:function(a){return"Cannot call '"+a.key+"'"},
lc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Jc:function(a){return a.key+" is not defined"},
lc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Rm={Va:[],Qa:[{callback:Qm,weight:500}]};function Qm(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Sm(){this.Qa=[];this.Va=[]}
var Tm;function Um(){if(!Tm){var a=Tm=new Sm;a.Va.length=0;a.Qa.length=0;Rm.Va&&a.Va.push.apply(a.Va,Rm.Va);Rm.Qa&&a.Qa.push.apply(a.Qa,Rm.Qa)}return Tm}
;var Vm=new M;function Wm(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Xm(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=Xm(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=Xm(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function Xm(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function Ym(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Zm(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=Wm(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Zm(f+".ve",g,h,k):0;d+=f;d+=Zm(e,a[e],b,c);if(d>500)break}}else c[b]=$m(a),d+=c[b].length;else c[b]=$m(a),d+=c[b].length;return d}
function Zm(a,b,c,d){c+="."+a;a=$m(b);d[c]=a;return c.length+a.length}
function $m(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function an(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function bn(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function cn(){this.ff=!0}
function dn(){cn.h||(cn.h=new cn);return cn.h}
function en(a,b){a={};var c=[];"USER_SESSION_ID"in Wl&&c.push({key:"u",value:P("USER_SESSION_ID")});if(c=kg(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(P("SESSION_INDEX",0)),c=isNaN(c)?0:c),R("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Wl||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in Wl&&(a["X-Goog-PageId"]=P("DELEGATED_SESSION_ID"));return a}
;var fn={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function gn(a,b,c,d,e){hg.set(""+a,b,{Mb:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function hn(a){return hg.get(""+a,void 0)}
function jn(a,b,c){hg.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function kn(){if(R("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!hg.isEnabled())return!1;if(hg.h.cookie)return!0;R("embeds_web_enable_cookie_detection_fix")?hg.set("TESTCOOKIESENABLED","1",{Mb:60,Ne:"none",secure:!0}):hg.set("TESTCOOKIESENABLED","1",{Mb:60});if(hg.get("TESTCOOKIESENABLED")!=="1")return!1;hg.remove("TESTCOOKIESENABLED");return!0}
;var ln=F("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",ln);function mn(){this.h=P("ALT_PREF_COOKIE_NAME","PREF");this.i=P("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=hn(this.h);a&&this.parse(a)}
var nn;function on(){nn||(nn=new mn);return nn}
p=mn.prototype;p.get=function(a,b){pn(a);qn(a);a=ln[a]!==void 0?ln[a].toString():null;return a!=null?a:b?b:""};
p.set=function(a,b){pn(a);qn(a);if(b==null)throw Error("ExpectedNotNull");ln[a]=b.toString()};
function rn(a){return!!((sn("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
p.remove=function(a){pn(a);qn(a);delete ln[a]};
p.clear=function(){for(var a in ln)delete ln[a]};
function qn(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function pn(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function sn(a){a=ln[a]!==void 0?ln[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
p.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(ln[d]=c.toString())}};var tn={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},un={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function vn(){var a=C.navigator;return a?a.connection:void 0}
function wn(){var a=vn();if(a){var b=tn[a.type||"unknown"]||"CONN_UNKNOWN";a=tn[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function xn(){var a=vn();if(a!=null&&a.effectiveType)return un.hasOwnProperty(a.effectiveType)?un[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function T(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ra(b))}
w(T,Error);function yn(){try{return zn(),!0}catch(a){return!1}}
function zn(a){if(P("DATASYNC_ID")!==void 0)return P("DATASYNC_ID");throw new T("Datasync ID not set",a===void 0?"unknown":a);}
;function An(){}
function Bn(a,b){return Hj.Ya(a,0,b)}
An.prototype.pa=function(a,b){return this.Ya(a,1,b)};
An.prototype.Db=function(a){var b=F("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Cn=xm("web_emulated_idle_callback_delay",300),Dn=1E3/60-3,En=[8,5,4,3,2,1,0];
function Fn(a){a=a===void 0?{}:a;G.call(this);this.i=[];this.j={};this.Y=this.h=0;this.X=this.u=!1;this.P=[];this.U=this.ga=!1;for(var b=z(En),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.yc=a.timeout||1;this.G=Dn;this.B=0;this.oa=this.De.bind(this);this.xc=this.jf.bind(this);this.Oa=this.Md.bind(this);this.Pa=this.ne.bind(this);this.mb=this.He.bind(this);this.Da=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!R("disable_scheduler_requestIdleCallback");(this.ia=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.oa)}
w(Fn,G);p=Fn.prototype;p.Db=function(a){var b=Ya();Gn(this,a);a=Ya()-b;this.u||(this.G-=a)};
p.Ya=function(a,b,c){++this.Y;if(b===10)return this.Db(a),this.Y;var d=this.Y;this.j[d]=a;this.u&&!c?this.P.push({id:d,priority:b}):(this.i[b].push(d),this.X||this.u||(this.h!==0&&Hn(this)!==this.B&&this.stop(),this.start()));return d};
p.qa=function(a){delete this.j[a]};
function In(a){a.P.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
p.isHidden=function(){return!!document.hidden||!1};
function Jn(a){return!a.isHidden()&&a.ia}
function Hn(a){if(a.i[8].length){if(a.U)return 4;if(Jn(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?Jn(a)?3:2:1;return 0}
p.Ea=function(a){var b=F("yt.logging.errors.log");b&&b(a)};
function Gn(a,b){try{b()}catch(c){a.Ea(c)}}
function Kn(a){for(var b=z(En),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
p.ne=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ga=!0;Ln(this,b);this.ga=!1};
p.jf=function(){Ln(this)};
p.Md=function(){Mn(this)};
p.He=function(a){this.U=!0;var b=Hn(this);b===4&&b!==this.B&&(this.stop(),this.start());Ln(this,void 0,a);this.U=!1};
p.De=function(){this.isHidden()||Mn(this);this.h&&(this.stop(),this.start())};
function Mn(a){a.stop();a.u=!0;for(var b=Ya(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Gn(a,e)}Nn(a);a.u=!1;Kn(a)&&a.start();b=Ya()-b;a.G-=b}
function Nn(a){for(var b=0,c=a.P.length;b<c;b++){var d=a.P[b];a.i[d.priority].push(d.id)}a.P.length=0}
function Ln(a,b,c){a.U&&a.B===4&&a.h||a.stop();a.u=!0;b=Ya()+(b||a.G);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ea(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Gn(a,f);d=a.ga?0:1;d=a.o>d?a.o:d;if(!(Ya()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Gn(a,c)}while(c&&Ya()<b)}a.u=!1;Nn(a);a.G=Dn;Kn(a)&&a.start()}
p.start=function(){this.X=!1;if(this.h===0)switch(this.B=Hn(this),this.B){case 1:var a=this.Pa;this.h=this.Da?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Cn);break;case 2:this.h=window.setTimeout(this.xc,this.yc);break;case 3:this.h=window.requestAnimationFrame(this.mb);break;case 4:this.h=window.setTimeout(this.Oa,0)}};
p.pause=function(){this.stop();this.X=!0};
p.stop=function(){if(this.h){switch(this.B){case 1:var a=this.h;this.Da?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
p.aa=function(){In(this);this.stop();this.ia&&document.removeEventListener("visibilitychange",this.oa);G.prototype.aa.call(this)};var On=F("yt.scheduler.instance.timerIdMap_")||{},Pn=xm("kevlar_tuner_scheduler_soft_state_timer_ms",800),Qn=0,Rn=0;function Sn(){var a=F("ytglobal.schedulerInstanceInstance_");if(!a||a.da)a=new Fn(P("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Tn(){Un();var a=F("ytglobal.schedulerInstanceInstance_");a&&(tc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Un(){In(Sn());for(var a in On)On.hasOwnProperty(a)&&delete On[Number(a)]}
function Vn(a,b,c){if(!c)return c=c===void 0,-Sn().Ya(a,b,c);var d=window.setTimeout(function(){var e=Sn().Ya(a,b);On[d]=e},c);
return d}
function Wn(a){Sn().Db(a)}
function Xn(a){var b=Sn();if(a<0)b.qa(-a);else{var c=On[a];c?(b.qa(c),delete On[a]):window.clearTimeout(a)}}
function Yn(){Zn()}
function Zn(){window.clearTimeout(Qn);Sn().start()}
function $n(){Sn().pause();window.clearTimeout(Qn);Qn=window.setTimeout(Yn,Pn)}
function ao(){window.clearTimeout(Rn);Rn=window.setTimeout(function(){bo(0)},Pn)}
function bo(a){ao();var b=Sn();b.o=a;b.start()}
function co(a){ao();var b=Sn();b.o>a&&(b.o=a,b.start())}
function eo(){window.clearTimeout(Rn);var a=Sn();a.o=0;a.start()}
;function fo(){An.apply(this,arguments)}
w(fo,An);function go(){fo.h||(fo.h=new fo);return fo.h}
fo.prototype.Ya=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=F("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):tm(a,c||0)};
fo.prototype.qa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=F("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
fo.prototype.start=function(){var a=F("yt.scheduler.instance.start");a&&a()};
fo.prototype.pause=function(){var a=F("yt.scheduler.instance.pause");a&&a()};
var Hj=go();
R("web_scheduler_auto_init")&&!F("yt.scheduler.initialized")&&(D("yt.scheduler.instance.dispose",Tn),D("yt.scheduler.instance.addJob",Vn),D("yt.scheduler.instance.addImmediateJob",Wn),D("yt.scheduler.instance.cancelJob",Xn),D("yt.scheduler.instance.cancelAllJobs",Un),D("yt.scheduler.instance.start",Zn),D("yt.scheduler.instance.pause",$n),D("yt.scheduler.instance.setPriorityThreshold",bo),D("yt.scheduler.instance.enablePriorityThreshold",co),D("yt.scheduler.instance.clearPriorityThreshold",eo),D("yt.scheduler.initialized",
!0));function ho(a){var b=new hk;this.h=(a=b.isAvailable()?a?new ik(b,a):b:null)?new ck(a):null;this.i=document.domain||window.location.hostname}
ho.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new Mi).serialize(b))}catch(f){return}else e=escape(b);gn(a,e,c,this.i)};
ho.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=hn(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
ho.prototype.remove=function(a){this.h&&this.h.remove(a);jn(a,"/",this.i)};var io=function(){var a;return function(){a||(a=new ho("ytidb"));return a}}();
function jo(){var a;return(a=io())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var ko=[],lo,mo=!1;function no(){var a={};for(lo=new oo(a.handleError===void 0?po:a.handleError,a.logEvent===void 0?qo:a.logEvent);ko.length>0;)switch(a=ko.shift(),a.type){case "ERROR":lo.Ea(a.payload);break;case "EVENT":lo.logEvent(a.eventType,a.payload)}}
function ro(a){mo||(lo?lo.Ea(a):(ko.push({type:"ERROR",payload:a}),ko.length>10&&ko.shift()))}
function so(a,b){mo||(lo?lo.logEvent(a,b):(ko.push({type:"EVENT",eventType:a,payload:b}),ko.length>10&&ko.shift()))}
;function to(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function uo(a){return a.substr(0,a.indexOf(":"))||a}
;var vo=bd||cd;function wo(a){var b=Mc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var xo={},yo=(xo.AUTH_INVALID="No user identifier specified.",xo.EXPLICIT_ABORT="Transaction was explicitly aborted.",xo.IDB_NOT_SUPPORTED="IndexedDB is not supported.",xo.MISSING_INDEX="Index not created.",xo.MISSING_OBJECT_STORES="Object stores not created.",xo.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",xo.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",xo.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
xo.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",xo.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",xo.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",xo.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",xo),zo={},Ao=(zo.AUTH_INVALID="ERROR",zo.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",zo.EXPLICIT_ABORT="IGNORED",zo.IDB_NOT_SUPPORTED="ERROR",zo.MISSING_INDEX=
"WARNING",zo.MISSING_OBJECT_STORES="ERROR",zo.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",zo.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",zo.QUOTA_EXCEEDED="WARNING",zo.QUOTA_MAYBE_EXCEEDED="WARNING",zo.UNKNOWN_ABORT="WARNING",zo.INCOMPATIBLE_DB_VERSION="WARNING",zo),Bo={},Co=(Bo.AUTH_INVALID=!1,Bo.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Bo.EXPLICIT_ABORT=!1,Bo.IDB_NOT_SUPPORTED=!1,Bo.MISSING_INDEX=!1,Bo.MISSING_OBJECT_STORES=!1,Bo.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Bo.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Bo.QUOTA_EXCEEDED=!1,Bo.QUOTA_MAYBE_EXCEEDED=!0,Bo.UNKNOWN_ABORT=!0,Bo.INCOMPATIBLE_DB_VERSION=!1,Bo);function Do(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?yo[a]:c;d=d===void 0?Ao[a]:d;e=e===void 0?Co[a]:e;T.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Do.prototype)}
w(Do,T);function Eo(a,b){Do.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},yo.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Eo.prototype)}
w(Eo,Do);function Fo(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Fo.prototype)}
w(Fo,Error);var Go=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Ho(a,b,c,d){b=uo(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Do)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new Do("QUOTA_EXCEEDED",a);if(dd&&e.name==="UnknownError")return new Do("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Fo)return new Do("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Go.some(function(f){return e.message.includes(f)}))return new Do("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new Do("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",qd:e.name})];e.level="WARNING";return e}
function Io(a,b,c){var d=jo();return new Do("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function Jo(a){if(!a)throw Error();throw a;}
function Ko(a){return a}
function Lo(a){this.h=a}
function Mo(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=z(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=z(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Mo.all=function(a){return new Mo(new Lo(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={tb:0};f.tb<a.length;f={tb:f.tb},++f.tb)Mo.resolve(a[f.tb]).then(function(g){return function(h){d[g.tb]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
Mo.resolve=function(a){return new Mo(new Lo(function(b,c){a instanceof Mo?a.then(b,c):b(a)}))};
Mo.reject=function(a){return new Mo(new Lo(function(b,c){c(a)}))};
Mo.prototype.then=function(a,b){var c=this,d=a!=null?a:Ko,e=b!=null?b:Jo;return new Mo(new Lo(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){No(c,c,d,f,g)}),c.i.push(function(){Oo(c,c,e,f,g)})):c.state.status==="FULFILLED"?No(c,c,d,f,g):c.state.status==="REJECTED"&&Oo(c,c,e,f,g)}))};
Mo.prototype.catch=function(a){return this.then(void 0,a)};
function No(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Mo?Po(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Oo(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Mo?Po(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Po(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Mo?Po(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Qo(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Ro(a){return new Promise(function(b,c){Qo(a,b,c)})}
function So(a){return new Mo(new Lo(function(b,c){Qo(a,b,c)}))}
;function To(a,b){return new Mo(new Lo(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Uo=window,U=Uo.ytcsi&&Uo.ytcsi.now?Uo.ytcsi.now:Uo.performance&&Uo.performance.timing&&Uo.performance.now&&Uo.performance.timing.navigationStart?function(){return Uo.performance.timing.navigationStart+Uo.performance.now()}:function(){return(new Date).getTime()};function Vo(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(U());this.i=!1}
p=Vo.prototype;p.add=function(a,b,c){return Wo(this,[a],{mode:"readwrite",ka:!0},function(d){return d.objectStore(a).add(b,c)})};
p.clear=function(a){return Wo(this,[a],{mode:"readwrite",ka:!0},function(b){return b.objectStore(a).clear()})};
p.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
p.count=function(a,b){return Wo(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).count(b)})};
function Xo(a,b,c){a=a.h.createObjectStore(b,c);return new Yo(a)}
p.delete=function(a,b){return Wo(this,[a],{mode:"readwrite",ka:!0},function(c){return c.objectStore(a).delete(b)})};
p.get=function(a,b){return Wo(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).get(b)})};
function Zo(a,b,c){return Wo(a,[b],{mode:"readwrite",ka:!0},function(d){d=d.objectStore(b);return So(d.h.put(c,void 0))})}
p.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Wo(a,b,c,d){var e,f,g,h,k,l,m,n,r,t,v,x;return A(function(y){switch(y.h){case 1:var E={mode:"readonly",ka:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?E.mode=c:Object.assign(E,c);e=E;a.transactionCount++;f=e.ka?3:1;g=0;case 2:if(h){y.D(4);break}g++;k=Math.round(U());za(y,5);l=a.h.transaction(b,e.mode);E=y.yield;var I=new $o(l);I=ap(I,d);return E.call(y,I,7);case 7:return m=y.i,n=Math.round(U()),bp(a,k,n,g,void 0,b.join(),e),y.return(m);case 5:r=Aa(y);t=Math.round(U());v=Ho(r,
a.h.name,b.join(),a.h.version);if((x=v instanceof Do&&!v.h)||g>=f)bp(a,k,t,g,v,b.join(),e),h=v;y.D(2);break;case 4:return y.return(Promise.reject(h))}})}
function bp(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Do&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&so("QUOTA_EXCEEDED",{dbName:uo(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Do&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),so("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),cp(a,!1,d,f,b,g.tag),ro(e)):cp(a,!0,d,f,b,g.tag)}
function cp(a,b,c,d,e,f){so("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
p.getName=function(){return this.h.name};
function Yo(a){this.h=a}
p=Yo.prototype;p.add=function(a,b){return So(this.h.add(a,b))};
p.autoIncrement=function(){return this.h.autoIncrement};
p.clear=function(){return So(this.h.clear()).then(function(){})};
function dp(a,b,c){a.h.createIndex(b,c,{unique:!1})}
p.count=function(a){return So(this.h.count(a))};
function ep(a,b){return fp(a,{query:b},function(c){return c.delete().then(function(){return gp(c)})}).then(function(){})}
p.delete=function(a){return a instanceof IDBKeyRange?ep(this,a):So(this.h.delete(a))};
p.get=function(a){return So(this.h.get(a))};
p.index=function(a){try{return new hp(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Fo(a,this.h.name);throw b;}};
p.getName=function(){return this.h.name};
p.keyPath=function(){return this.h.keyPath};
function fp(a,b,c){a=a.h.openCursor(b.query,b.direction);return ip(a).then(function(d){return To(d,c)})}
function $o(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Do;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function ap(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return z(d).next().value})}
$o.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Do("EXPLICIT_ABORT");};
$o.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Yo(a),this.i.set(a,b));return b};
function hp(a){this.h=a}
p=hp.prototype;p.count=function(a){return So(this.h.count(a))};
p.delete=function(a){return jp(this,{query:a},function(b){return b.delete().then(function(){return gp(b)})})};
p.get=function(a){return So(this.h.get(a))};
p.keyPath=function(){return this.h.keyPath};
p.unique=function(){return this.h.unique};
function jp(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return ip(a).then(function(d){return To(d,c)})}
function kp(a,b){this.request=a;this.cursor=b}
function ip(a){return So(a).then(function(b){return b?new kp(a,b):null})}
function gp(a){a.cursor.continue(void 0);return ip(a.request)}
kp.prototype.delete=function(){return So(this.cursor.delete()).then(function(){})};
kp.prototype.getValue=function(){return this.cursor.value};
kp.prototype.update=function(a){return So(this.cursor.update(a))};function lp(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Vo(g.result,{closed:n}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Pd,k=c.blocking,l=c.gf,m=c.upgrade,n=c.closed,r;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&so("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:uo(a)});var v=f(),x=new $o(g.transaction);
m&&m(v,function(y){return t.oldVersion<y&&t.newVersion>=y},x);
x.done.catch(function(y){e(y)})}catch(y){e(y)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){so("IDB_UNEXPECTEDLY_CLOSED",{dbName:uo(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function mp(a,b,c){c=c===void 0?{}:c;return lp(a,b,c)}
function np(a,b){b=b===void 0?{}:b;var c,d,e,f;return A(function(g){if(g.h==1)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Pd)&&c.addEventListener("blocked",function(){e()}),g.yield(Ro(c),4);
if(g.h!=2)g.h=0,g.o=0;else throw f=Aa(g),Ho(f,a,"",-1);})}
;function op(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.o=0}
op.prototype.i=function(a,b,c){c=c===void 0?{}:c;return mp(a,b,c)};
op.prototype.delete=function(a){a=a===void 0?{}:a;return np(this.name,a)};
function pp(a,b){return new Do("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function qp(a,b){if(!b)throw Io("openWithToken",uo(a.name));return a.open()}
op.prototype.open=function(){function a(){var f,g,h,k,l,m,n,r,t,v;return A(function(x){switch(x.h){case 1:return g=(f=Error().stack)!=null?f:"",za(x,2),x.yield(c.i(c.name,c.options.version,e),4);case 4:for(var y=h=x.i,E=c.options,I=[],S=z(Object.keys(E.zb)),ea=S.next();!ea.done;ea=S.next()){ea=ea.value;var Ja=E.zb[ea],bb=Ja.Ie===void 0?Number.MAX_VALUE:Ja.Ie;!(y.h.version>=Ja.Fb)||y.h.version>=bb||y.h.objectStoreNames.contains(ea)||I.push(ea)}k=I;if(k.length===0){x.D(5);break}l=Object.keys(c.options.zb);
m=h.objectStoreNames();if(c.u<xm("ytidb_reopen_db_retries",0))return c.u++,h.close(),ro(new Do("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());if(!(c.o<xm("ytidb_remake_db_retries",1))){x.D(6);break}c.o++;return x.yield(c.delete(),7);case 7:return ro(new Do("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());case 6:throw new Eo(m,l);case 5:return x.return(h);case 2:n=Aa(x);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){x.D(8);break}return x.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:r=x.i;t=r.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw r.close(),c.j=!1,pp(c,t);return x.return(r);case 8:throw b(),n instanceof
Error&&!R("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Ho(n,c.name,"",(v=c.options.version)!=null?v:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw pp(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,gf:b,upgrade:this.options.upgrade};return this.h=d=a()};var rp=new op("YtIdbMeta",{zb:{databases:{Fb:1}},upgrade:function(a,b){b(1)&&Xo(a,"databases",{keyPath:"actualName"})}});
function sp(a,b){var c;return A(function(d){if(d.h==1)return d.yield(qp(rp,b),2);c=d.i;return d.return(Wo(c,["databases"],{ka:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return So(f.h.put(a,void 0)).then(function(){})})}))})}
function tp(a,b){var c;return A(function(d){if(d.h==1)return a?d.yield(qp(rp,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function up(a,b){var c,d;return A(function(e){return e.h==1?(c=[],e.yield(qp(rp,b),2)):e.h!=3?(d=e.i,e.yield(Wo(d,["databases"],{ka:!0,mode:"readonly"},function(f){c.length=0;return fp(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return gp(g)})}),3)):e.return(c)})}
function vp(a){return up(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function wp(a,b,c){return up(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function xp(a){var b,c;return A(function(d){if(d.h==1)return b=zn("YtIdbMeta hasAnyMeta other"),d.yield(up(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var yp,zp=new function(){}(new function(){});
function Ap(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=jo();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=vo)f=/WebKit\/([0-9]+)/.exec(Mc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Mc()),f=!(f&&parseInt(f[1],10)>=602));if(f||Yc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(sp(d,zp),4);case 4:return e.yield(tp("yt-idb-test-do-not-use",zp),5);case 5:return e.return(!0);case 2:return Aa(e),e.return(!1)}})}
function Bp(){if(yp!==void 0)return yp;mo=!0;return yp=Ap().then(function(a){mo=!1;var b;if((b=io())!=null&&b.h){var c;b={hasSucceededOnce:((c=jo())==null?void 0:c.hasSucceededOnce)||a};var d;(d=io())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Cp(){return F("ytglobal.idbToken_")||void 0}
function Dp(){var a=Cp();return a?Promise.resolve(a):Bp().then(function(b){(b=b?zp:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Ep=0;function Fp(a,b){Ep||(Ep=Hj.pa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Dp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return h.yield(wp(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.D(6);break}f=e[0];return h.yield(np(f.actualName),7);case 7:return h.yield(tp(f.actualName,c),6);case 6:h.h=4;h.o=0;break;case 3:g=Aa(h),ro(g),d=!1;case 4:Hj.qa(Ep),Ep=0,d&&Fp(a,b),h.h=0}})}))}
function Gp(){var a;return A(function(b){return b.h==1?b.yield(Dp(),2):(a=b.i)?b.return(xp(a)):b.return(!1)})}
new rj;function Hp(a){if(!yn())throw a=new Do("AUTH_INVALID",{dbName:a}),ro(a),a;var b=zn();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Ip(a,b,c,d){var e,f,g,h,k,l;return A(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(Dp(),2);case 2:g=m.i;if(!g)throw h=Io("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),ro(h),h;to(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Hp(a);za(m,3);return m.yield(sp(k,g),5);case 5:return m.yield(mp(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=Aa(m),za(m,7),m.yield(tp(k.actualName,
g),9);case 9:m.h=8;m.o=0;break;case 7:Aa(m);case 8:throw l;}})}
function Jp(a,b,c){c=c===void 0?{}:c;return Ip(a,b,!1,c)}
function Kp(a,b,c){c=c===void 0?{}:c;return Ip(a,b,!0,c)}
function Lp(a,b){b=b===void 0?{}:b;var c,d;return A(function(e){if(e.h==1)return e.yield(Dp(),2);if(e.h!=3){c=e.i;if(!c)return e.return();to(a);d=Hp(a);return e.yield(np(d.actualName,b),3)}return e.yield(tp(d.actualName,c),0)})}
function Mp(a,b,c){a=a.map(function(d){return A(function(e){return e.h==1?e.yield(np(d.actualName,b),2):e.yield(tp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Np(){var a=a===void 0?{}:a;var b,c;return A(function(d){if(d.h==1)return d.yield(Dp(),2);if(d.h!=3){b=d.i;if(!b)return d.return();to("LogsDatabaseV2");return d.yield(vp(b),3)}c=d.i;return d.yield(Mp(c,a,b),0)})}
function Op(a,b){b=b===void 0?{}:b;var c;return A(function(d){if(d.h==1)return d.yield(Dp(),2);if(d.h!=3){c=d.i;if(!c)return d.return();to(a);return d.yield(np(a,b),3)}return d.yield(tp(a,c),0)})}
;function Pp(a,b){op.call(this,a,b);this.options=b;to(a)}
w(Pp,op);function Qp(a,b){var c;return function(){c||(c=new Pp(a,b));return c}}
Pp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Kp:Jp)(a,b,Object.assign({},c))};
Pp.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Op:Lp)(this.name,a)};
function Rp(a,b){return Qp(a,b)}
;var Sp={},Tp=Rp("ytGcfConfig",{zb:(Sp.coldConfigStore={Fb:1},Sp.hotConfigStore={Fb:1},Sp),shared:!1,upgrade:function(a,b){b(1)&&(dp(Xo(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),dp(Xo(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Up(a){return qp(Tp(),a)}
function Vp(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:U()},g.yield(Up(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(Zo(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function Wp(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:U()},h.yield(Up(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(Zo(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function Xp(a){var b,c;return A(function(d){return d.h==1?d.yield(Up(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(Wo(b,["coldConfigStore"],{mode:"readwrite",ka:!0},function(e){return jp(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Yp(a){var b,c;return A(function(d){return d.h==1?d.yield(Up(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(Wo(b,["hotConfigStore"],{mode:"readwrite",ka:!0},function(e){return jp(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Zp(){G.call(this);this.i=[];this.h=[];var a=F("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ra(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(Zp,G);Zp.prototype.aa=function(){for(var a=z(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;G.prototype.aa.call(this)};function $p(){this.h=0;this.i=new Zp}
function aq(){var a;return(a=F("yt.gcf.config.hotConfigGroup"))!=null?a:P("RAW_HOT_CONFIG_GROUP")}
function bq(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!R("start_client_gcf")){g.D(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=Cp();if(!d){g.D(3);break}if(c){g.D(4);break}return g.yield(Yp(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(Vp(c,b,d),3);case 3:if(c)for(var h=c,k=z(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function cq(a,b,c){var d,e,f,g;return A(function(h){if(h.h==1){if(!R("start_client_gcf"))return h.D(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Cp())?c?h.D(4):h.yield(Xp(d),5):h.D(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.D(0);g=c.configData;return h.yield(Wp(c,b,g,d),0)})}
function dq(){if(!$p.h){var a=new $p;$p.h=a}a=$p.h;var b=U()-a.h;if(!(a.h!==0&&b<xm("send_config_hash_timer"))){b=F("yt.gcf.config.coldConfigData");var c=F("yt.gcf.config.hotHashData"),d=F("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=U());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
$p.prototype.o=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function eq(){return"INNERTUBE_API_KEY"in Wl&&"INNERTUBE_API_VERSION"in Wl}
function fq(){return{innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),oe:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ld:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),rh:P("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),qe:P("INNERTUBE_CONTEXT_HL"),pe:P("INNERTUBE_CONTEXT_GL"),re:P("INNERTUBE_HOST_OVERRIDE")||"",se:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),sh:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA")}}
function gq(a){var b={client:{hl:a.qe,gl:a.pe,clientName:a.ld,clientVersion:a.innertubeContextClientVersion,configInfo:a.oe}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=ym();c.length>0&&(b.request={internalExperimentFlags:c});c=a.ld;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=bn()}(d=F("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(R("web_log_memory_total_kbytes")&&((e=C.navigator)==null?0:e.deviceMemory)){var f;e=(f=C.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=wn())&&b&&(b.client.connectionType=a);R("web_log_effective_connection_type")&&
(a=xn())&&b&&(b.client.effectiveConnectionType=a);R("start_client_gcf")&&(e=dq())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});!R("fill_delegate_context_in_gel_killswitch")&&(a=P("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=P("INNERTUBE_CONTEXT");var g;if(R("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=z(Object.entries(jm(P("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=z(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function hq(a,b,c){c=c===void 0?{}:c;var d={};P("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":P("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||P("AUTHORIZATION");b||(a?b="Bearer "+F("gapi.auth.getToken")().hh:(a=en(dn()),R("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var iq=typeof TextEncoder!=="undefined"?new TextEncoder:null,jq=iq?function(a){return iq.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function kq(a,b){this.version=a;this.args=b}
kq.prototype.serialize=function(){return{version:this.version,args:this.args}};function lq(a,b){this.topic=a;this.h=b}
lq.prototype.toString=function(){return this.topic};var mq=F("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Tb;M.prototype.publish=M.prototype.lb;M.prototype.clear=M.prototype.clear;D("ytPubsub2Pubsub2Instance",mq);var nq=F("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",nq);var oq=F("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",oq);var pq=F("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",pq);
D("ytPubsub2Pubsub2SkipSubKey",null);function qq(a,b){var c=rq();c&&c.publish.call(c,a.toString(),a,b)}
function sq(a){var b=tq,c=rq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=F("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(nq[d])try{if(f&&b instanceof lq&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Ed){var l=new h;h.Ed=l.version}var m=h.Ed}catch(y){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{m=Reflect;var n=m.construct;
var r=k.args,t=r.length;if(t>0){var v=Array(t);for(k=0;k<t;k++)v[k]=r[k];var x=v}else x=[];f=n.call(m,h,x)}catch(y){throw y.message="yt.pubsub2.Data.deserialize(): "+y.message,y;}}catch(y){throw y.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+y.message,y;}a.call(window,f)}catch(y){bm(y)}},pq[b.toString()]?F("yt.scheduler.instance")?Hj.pa(g):tm(g,0):g())});
nq[d]=!0;oq[b.toString()]||(oq[b.toString()]=[]);oq[b.toString()].push(d);return d}
function uq(){var a=vq,b=sq(function(c){a.apply(void 0,arguments);wq(b)});
return b}
function wq(a){var b=rq();b&&(typeof a==="number"&&(a=[a]),Nb(a,function(c){b.unsubscribeByKey(c);delete nq[c]}))}
function rq(){return F("ytPubsub2Pubsub2Instance")}
;function xq(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&qq("meta_logging_csi_event",{timerName:a,Lh:b})}
;var yq=void 0,zq=void 0;function Aq(){zq||(zq=vl(P("WORKER_SERIALIZATION_URL")));return zq||void 0}
function Bq(){var a=Aq();yq||a===void 0||(yq=new Worker(mb(a),void 0));return yq}
;var Cq=xm("max_body_size_to_compress",5E5),Dq=xm("min_body_size_to_compress",500),Eq=!0,Fq=0,Gq=0,Hq=xm("compression_performance_threshold_lr",250),Iq=xm("slow_compressions_before_abandon_count",4),Jq=!1,Kq=new Map,Lq=1,Mq=!0;function Nq(){if(typeof Worker==="function"&&Aq()&&!Jq){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=Kq.get(c.key);d&&(Oq(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Kq.delete(c.key))}},b=Bq();
b&&(b.addEventListener("message",a),b.onerror=function(){Kq.clear()},Jq=!0)}}
function Pq(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:U(),ticks:{},infos:{}};if(Eq)try{var g=Qq(b);if(g!=null&&(g>Cq||g<Dq))d(a,c);else{if(R("gzip_gel_with_worker")&&(R("initial_gzip_use_main_thread")&&!Mq||!R("initial_gzip_use_main_thread"))){Jq||Nq();var h=Bq();if(h&&!e){Kq.set(Lq,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Lq});Lq++;return}}var k=ul(jq(b));Oq(k,f,a,c,d)}}catch(l){cm(l),d(a,c)}else d(a,c)}
function Oq(a,b,c,d,e){Mq=!1;var f=U();b.ticks.gelc=f;Gq++;R("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Hq&&(Fq++,R("abandon_compression_after_N_slow_zips")?Gq===xm("compression_disable_point")&&Fq>Iq&&(Eq=!1):Eq=!1);Rq(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Sq(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=U(),e={startTime:d,ticks:{},infos:{}},f=b?F("yt.logging.gzipForFetch",!1):!0;if(Eq&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=Qq(g);if(h!=null&&(h>Cq||h<Dq))return a;c=b?{level:1}:void 0;f=ul(jq(g),c);var k=U();e.ticks.gelc=k;if(b){Gq++;if((R("disable_compression_due_to_performance_degredation")||R("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Hq)if(Fq++,R("abandon_compression_after_N_slow_zips")||R("abandon_compression_after_N_slow_zips_lr")){b=Fq/Gq;var l=Iq/xm("compression_disable_point");Gq>0&&Gq%xm("compression_disable_point")===0&&b>=l&&(Eq=!1)}else Eq=!1;Rq(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return cm(m),a}}else return a}
function Qq(a){try{return(new Blob(a.split(""))).size}catch(b){return cm(b),null}}
function Rq(a){R("gel_compression_csi_killswitch")||!R("log_gel_compression_latency")&&!R("log_gel_compression_latency_lr")||xq("gel_compression",a,{sampleRate:.1})}
;function Tq(a){a=Object.assign({},a);delete a.Authorization;var b=kg();if(b){var c=new Lj;c.update(P("INNERTUBE_API_KEY"));c.update(b);a.hash=gd(c.digest(),3)}return a}
;var Uq;function Vq(){Uq||(Uq=new ho("yt.innertube"));return Uq}
function Wq(a,b,c,d){if(d)return null;d=Vq().get("nextId",!0)||1;var e=Vq().get("requests",!0)||{};e[d]={method:a,request:b,authState:Tq(c),requestTime:Math.round(U())};Vq().set("nextId",d+1,86400,!0);Vq().set("requests",e,86400,!0);return d}
function Xq(a){var b=Vq().get("requests",!0)||{};delete b[a];Vq().set("requests",b,86400,!0)}
function Yq(a){var b=Vq().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(U())-d.requestTime<6E4)){var e=d.authState,f=Tq(hq(!1));yg(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),Zq(a,d.method,e,{}));delete b[c]}}Vq().set("requests",b,86400,!0)}}
;function $q(a){this.Wb=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.rb=function(){};
this.now=Date.now;this.Ib=!1;var b;this.Ad=(b=a.Ad)!=null?b:100;var c;this.vd=(c=a.vd)!=null?c:1;var d;this.td=(d=a.td)!=null?d:2592E6;var e;this.sd=(e=a.sd)!=null?e:12E4;var f;this.ud=(f=a.ud)!=null?f:5E3;var g;this.V=(g=a.V)!=null?g:void 0;this.cc=!!a.cc;var h;this.Zb=(h=a.Zb)!=null?h:.1;var k;this.oc=(k=a.oc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.rb&&(this.rb=a.rb);a.Ib&&(this.Ib=a.Ib);a.Wb&&(this.Wb=a.Wb);this.W=a.W;this.Ba=a.Ba;this.fa=a.fa;this.ea=a.ea;this.sendFn=a.sendFn;
this.Pc=a.Pc;this.Mc=a.Mc;ar(this)&&(!this.W||this.W("networkless_logging"))&&br(this)}
function br(a){ar(a)&&!a.Ib&&(a.h=!0,a.cc&&Math.random()<=a.Zb&&a.fa.Rd(a.V),cr(a),a.ea.va()&&a.Sb(),a.ea.listen(a.Pc,a.Sb.bind(a)),a.ea.listen(a.Mc,a.Zc.bind(a)))}
p=$q.prototype;p.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(ar(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.fa.set(d,this.V).then(function(e){d.id=e;c.ea.va()&&dr(c,d)}).catch(function(e){dr(c,d);
er(c,e)})}else this.sendFn(a,b)};
p.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(ar(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W&&this.W("nwl_skip_retry")&&(e.skipRetry=c);if(this.ea.va()||this.W&&this.W("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(k.h==1)return k.yield(d.fa.set(e,d.V).catch(function(l){er(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.fa.set(e,this.V).catch(function(g){d.sendFn(a,b,e.skipRetry);
er(d,g)})}else this.sendFn(a,b,this.W&&this.W("nwl_skip_retry")&&c)};
p.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(ar(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.fa.pb(d.id,c.V):e=!0;c.ea.eb&&c.W&&c.W("vss_network_hint")&&c.ea.eb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.fa.set(d,this.V).then(function(g){d.id=g;e&&c.fa.pb(d.id,c.V)}).catch(function(g){er(c,g)})}else this.sendFn(a,b,void 0,!0)};
p.Sb=function(){var a=this;if(!ar(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ba.pa(function(){var b;return A(function(c){if(c.h==1)return c.yield(a.fa.hd("NEW",a.V),2);if(c.h!=3)return b=c.i,b?c.yield(dr(a,b),3):(a.Zc(),c.return());a.i&&(a.i=0,a.Sb());c.h=0})},this.Ad))};
p.Zc=function(){this.Ba.qa(this.i);this.i=0};
function dr(a,b){var c;return A(function(d){switch(d.h){case 1:if(!ar(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.D(2);break}return d.yield(a.fa.we(b.id,a.V),3);case 3:(c=d.i)||a.rb(Error("The request cannot be found in the database."));case 2:if(fr(a,b,a.td)){d.D(4);break}a.rb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.D(5);break}return d.yield(a.fa.pb(b.id,a.V),5);case 5:return d.return();case 4:b.skipRetry||(b=gr(a,
b));if(!b){d.D(0);break}if(!b.skipRetry||b.id===void 0){d.D(8);break}return d.yield(a.fa.pb(b.id,a.V),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function gr(a,b){if(!ar(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(m){switch(m.h){case 1:g=hr(f);(h=ir(f))&&a.W&&a.W("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.W&&a.W("nwl_consider_error_code")&&g||a.W&&!a.W("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.oc)){m.D(2);break}if(!a.ea.vc){m.D(3);break}return m.yield(a.ea.vc(),3);case 3:if(a.ea.va()){m.D(2);break}c(e,f);if(!a.W||!a.W("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.D(6);
break}return m.yield(a.fa.Qc(b.id,a.V,!1),6);case 6:return m.return();case 2:if(a.W&&a.W("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.oc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.D(8);break}return b.sendCount<a.vd?m.yield(a.fa.Qc(b.id,a.V,!0,h?!1:void 0),12):m.yield(a.fa.pb(b.id,a.V),8);case 12:a.Ba.pa(function(){a.ea.va()&&a.Sb()},a.ud);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.D(2):h.yield(a.fa.pb(b.id,a.V),2);a.ea.eb&&a.W&&a.W("vss_network_hint")&&a.ea.eb(!0);d(e,f);h.h=0})};
return b}
function fr(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function cr(a){if(!ar(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.fa.hd("QUEUED",a.V).then(function(b){b&&!fr(a,b,a.sd)?a.Ba.pa(function(){return A(function(c){if(c.h==1)return b.id===void 0?c.D(2):c.yield(a.fa.Qc(b.id,a.V),2);cr(a);c.h=0})}):a.ea.va()&&a.Sb()})}
function er(a,b){a.Hd&&!a.ea.va()?a.Hd(b):a.handleError(b)}
function ar(a){return!!a.V||a.Wb}
function hr(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function ir(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var jr;
function kr(){if(jr)return jr();var a={};jr=Rp("LogsDatabaseV2",{zb:(a.LogsRequestsStore={Fb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&Xo(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),dp(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return jr()}
;function lr(a){return qp(kr(),a)}
function mr(a,b){var c,d,e,f;return A(function(g){if(g.h==1)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(lr(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:P("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(Zo(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=U();nr(c);return g.return(f)})}
function or(a,b){var c,d,e,f,g,h,k,l;return A(function(m){if(m.h==1)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(lr(b),2);if(m.h!=3)return d=m.i,e=P("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,U()],h=IDBKeyRange.bound(f,g),k="prev",R("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield(Wo(d,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(n){return jp(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(r){r.getValue()&&(l=r.getValue(),a==="NEW"&&(l.status="QUEUED",r.update(l)))})}),3);
c.ticks.tc=U();nr(c);return m.return(l)})}
function pr(a,b){var c;return A(function(d){if(d.h==1)return d.yield(lr(b),2);c=d.i;return d.return(Wo(c,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",So(f.h.put(g,void 0)).then(function(){return g})})}))})}
function qr(a,b,c,d){c=c===void 0?!0:c;var e;return A(function(f){if(f.h==1)return f.yield(lr(b),2);e=f.i;return f.return(Wo(e,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),So(h.h.put(k,void 0)).then(function(){return k})):Mo.resolve(void 0)})}))})}
function rr(a,b){var c;return A(function(d){if(d.h==1)return d.yield(lr(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function sr(a){var b,c;return A(function(d){if(d.h==1)return d.yield(lr(a),2);b=d.i;c=U()-2592E6;return d.yield(Wo(b,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){return fp(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return gp(f)})})}),0)})}
function tr(){A(function(a){return a.yield(Np(),0)})}
function nr(a){R("nwl_csi_killswitch")||xq("networkless_performance",a,{sampleRate:1})}
;var ur={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,
fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,
castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,embedsAutoplayStatusChanged:512};var vr={},wr=Rp("ServiceWorkerLogsDatabase",{zb:(vr.SWHealthLog={Fb:1},vr),shared:!0,upgrade:function(a,b){b(1)&&dp(Xo(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function xr(a){return qp(wr(),a)}
function yr(a){var b,c;A(function(d){if(d.h==1)return d.yield(xr(a),2);b=d.i;c=U()-2592E6;return d.yield(Wo(b,["SWHealthLog"],{mode:"readwrite",ka:!0},function(e){return fp(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return gp(f)})})}),0)})}
function zr(a){var b;return A(function(c){if(c.h==1)return c.yield(xr(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Ar={},Br=0;function Cr(a){var b=b===void 0?{}:b;var c=new Image,d=""+Br++;Ar[d]=c;c.onload=c.onerror=function(){delete Ar[d]};
b.Hh&&(c.referrerPolicy="no-referrer");c.src=a}
;var Dr;function Er(){Dr||(Dr=new ho("yt.offline"));return Dr}
function Fr(a){if(R("offline_error_handling")){var b=Er().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Er().set("errors",b,2592E3,!0)}}
;function Gr(){this.h=new Map;this.i=!1}
function Hr(){if(!Gr.h){var a=F("yt.networkRequestMonitor.instance")||new Gr;D("yt.networkRequestMonitor.instance",a);Gr.h=a}return Gr.h}
Gr.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Gr.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
Gr.prototype.removeParams=function(a){return a.split("?")[0]};
Gr.prototype.removeParams=Gr.prototype.removeParams;Gr.prototype.isEndpointCFR=Gr.prototype.isEndpointCFR;Gr.prototype.requestComplete=Gr.prototype.requestComplete;Gr.getInstance=Hr;function Ir(){$h.call(this);var a=this;this.j=!1;this.i=Gj();this.i.listen("networkstatus-online",function(){if(a.j&&R("offline_error_handling")){var b=Er().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new T(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;bm(d)}Er().set("errors",{},2592E3,!0)}}})}
w(Ir,$h);function Jr(){if(!Ir.h){var a=F("yt.networkStatusManager.instance")||new Ir;D("yt.networkStatusManager.instance",a);Ir.h=a}return Ir.h}
p=Ir.prototype;p.va=function(){return this.i.va()};
p.eb=function(a){this.i.i=a};
p.je=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
p.Yd=function(){this.j=!0};
p.listen=function(a,b){return this.i.listen(a,b)};
p.vc=function(a){a=Ej(this.i,a);a.then(function(b){R("use_cfr_monitor")&&Hr().requestComplete("generate_204",b)});
return a};
Ir.prototype.sendNetworkCheckRequest=Ir.prototype.vc;Ir.prototype.listen=Ir.prototype.listen;Ir.prototype.enableErrorFlushing=Ir.prototype.Yd;Ir.prototype.getWindowStatus=Ir.prototype.je;Ir.prototype.networkStatusHint=Ir.prototype.eb;Ir.prototype.isNetworkAvailable=Ir.prototype.va;Ir.getInstance=Jr;function Kr(a){a=a===void 0?{}:a;$h.call(this);var b=this;this.i=this.u=0;this.j=Jr();var c=F("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Lr(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Lr(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){ai(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){ai(b,"publicytnetworkstatus-offline")})))}
w(Kr,$h);Kr.prototype.va=function(){var a=F("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Kr.prototype.eb=function(a){var b=F("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Kr.prototype.vc=function(a){var b=this,c;return A(function(d){c=F("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return R("skip_network_check_if_cfr")&&Hr().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.eb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.va())})):c?d.return(c(a)):d.return(!0)})};
function Lr(a,b){a.rateLimit?a.i?(Hj.qa(a.u),a.u=Hj.pa(function(){a.o!==b&&(ai(a,b),a.o=b,a.i=U())},a.rateLimit-(U()-a.i))):(ai(a,b),a.o=b,a.i=U()):ai(a,b)}
;var Mr;function Nr(){var a=$q.call;Mr||(Mr=new Kr({xh:!0,oh:!0}));a.call($q,this,{fa:{Rd:sr,pb:rr,hd:or,we:pr,Qc:qr,set:mr},ea:Mr,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;cm(new T(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else bm(b)},
rb:cm,sendFn:Or,now:U,Hd:Fr,Ba:go(),Pc:"publicytnetworkstatus-online",Mc:"publicytnetworkstatus-offline",cc:!0,Zb:.1,oc:xm("potential_esf_error_limit",10),W:R,Ib:!(yn()&&Pr())});this.j=new rj;R("networkless_immediately_drop_all_requests")&&tr();Op("LogsDatabaseV2")}
w(Nr,$q);function Ur(){var a=F("yt.networklessRequestController.instance");a||(a=new Nr,D("yt.networklessRequestController.instance",a),R("networkless_logging")&&Dp().then(function(b){a.V=b;br(a);a.j.resolve();a.cc&&Math.random()<=a.Zb&&a.V&&yr(a.V);R("networkless_immediately_drop_sw_health_store")&&Vr(a)}));
return a}
Nr.prototype.writeThenSend=function(a,b){b||(b={});b=Wr(a,b);yn()||(this.h=!1);$q.prototype.writeThenSend.call(this,a,b)};
Nr.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Wr(a,b);yn()||(this.h=!1);$q.prototype.sendThenWrite.call(this,a,b,c)};
Nr.prototype.sendAndWrite=function(a,b){b||(b={});b=Wr(a,b);yn()||(this.h=!1);$q.prototype.sendAndWrite.call(this,a,b)};
Nr.prototype.awaitInitialization=function(){return this.j.promise};
function Vr(a){var b;A(function(c){if(!a.V)throw b=Io("clearSWHealthLogsDb"),b;return c.return(zr(a.V).catch(function(d){a.handleError(d)}))})}
function Or(a,b,c,d){d=d===void 0?!1:d;b=R("web_fp_via_jspb")?Object.assign({},b):b;R("use_cfr_monitor")&&Xr(a,b);if(R("use_request_time_ms_header"))b.headers&&nm(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(U())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Cm(a,void 0,"POST",f,void 0);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Cm(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new db({url:a});if(k.o)var l=typeof k.i!=="string"||k.i.length===0?null:{version:3,Wd:k.i,Od:cb(k.j,"&act=1&ri=1"+eb(k))};else if(k.u){var m=k.j;var n=/[?&]suid=/.test(m)?m:cb(m,"&suid="+(Date.now()-(new Date("2024-01-01T00:00:00Z")).getTime()));l={version:4,Wd:cb(n,"&dct=1"),Od:cb(n,"&act=1&ri=1")}}else l=null;if(l){var r=ac(bc(5,a)),t;if(!(t=!r||!r.endsWith("/aclk"))){var v=a.search(kc),x=jc(a,0,"ri",v);if(x<0)var y=null;else{var E=
a.indexOf("&",x);if(E<0||E>v)E=v;y=decodeURIComponent(a.slice(x+3,E!==-1?E:0).replace(/\+/g," "))}t=y!=="1"}var I=!t;break b}}catch(ea){}I=!1}if(I){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var S=!0;break b}}catch(ea){}S=!1}c=S?!0:!1}else c=!1;c||Cr(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Pq(a,b.postBody,b,Gm,d)):Pq(a,JSON.stringify(b.postParams),b,Fm,d):Gm(a,b)}
function Wr(a,b){R("use_event_time_ms_header")&&nm(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(U())));return b}
function Xr(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Hr().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Hr().requestComplete(a,!0);d(e,f)}}
function Pr(){return cc(document.location.toString())!=="www.youtube-nocookie.com"}
;var Yr=!1,Zr=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Yr};D("ytNetworklessLoggingInitializationOptions",Zr);function $r(){var a;A(function(b){if(b.h==1)return b.yield(Dp(),2);a=b.i;if(!a||!yn()&&!R("nwl_init_require_datasync_id_killswitch")||!Pr())return b.D(0);Yr=!0;Zr.isNwlInitialized=Yr;return b.yield(Ur().awaitInitialization(),0)})}
;function as(a){var b=this;this.config_=null;a?this.config_=a:eq()&&(this.config_=fq());Bn(function(){Yq(b)},5E3)}
as.prototype.isReady=function(){!this.config_&&eq()&&(this.config_=fq());return!!this.config_};
function Zq(a,b,c,d){function e(n){n=n===void 0?!1:n;var r;if(d.retry&&h!="www.youtube-nocookie.com"&&(n||R("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(r=Wq(b,c,l,k)),r)){var t=g.onSuccess,v=g.onFetchSuccess;g.onSuccess=function(E,I){Xq(r);t(E,I)};
c.onFetchSuccess=function(E,I){Xq(r);v(E,I)}}try{if(n&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Ur().writeThenSend(m,g):Ur().sendAndWrite(m,g);
else if(d.compress){var x=!d.networklessOptions.writeThenSend;if(g.postBody){var y=g.postBody;typeof y!=="string"&&(y=JSON.stringify(g.postBody));Pq(m,y,g,Gm,x)}else Pq(m,JSON.stringify(g.postParams),g,Fm,x)}else R("web_all_payloads_via_jspb")?Gm(m,g):Fm(m,g)}catch(E){if(E.name==="InvalidAccessError")r&&(Xq(r),r=0),cm(Error("An extension is blocking network request."));else throw E;}r&&Bn(function(){Yq(a)},5E3)}
!P("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&cm(new T("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new T("innertube xhrclient not ready",b,c,d);bm(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,r){if(d.onSuccess)d.onSuccess(r)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,r){if(d.onError)d.onError(r)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.re)&&(h=f);var k=a.config_.se||!1,l=hq(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m=lm(""+h+("/youtubei/"+a.config_.innertubeApiVersion+"/"+b),{alt:"json"});(F("ytNetworklessLoggingInitializationOptions")?Zr.isNwlInitialized:Yr)?Bp().then(function(n){e(n)}):e(!1)}
;var bs=0,cs=$c?"webkit":Zc?"moz":Xc?"ms":Wc?"o":"";D("ytDomDomGetNextId",F("ytDomDomGetNextId")||function(){return++bs});var ds={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function es(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in ds||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function gs(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
es.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
es.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
es.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ug=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",ug);var hs=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",hs);
function is(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return tg(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&yg(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function js(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=is(a,b,c,d);if(e)return e;e=++hs.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new es(h);if(!Hg(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new es(h);
h.currentTarget=a;return c.call(a,h)};
g=am(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ks()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ug[e]=[a,b,c,g,d];return e}
function ls(a){a&&(typeof a=="string"&&(a=[a]),Nb(a,function(b){if(b in ug){var c=ug[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?ks()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ug[b]}}))}
var ks=pi(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function ms(a){this.G=a;this.h=null;this.o=0;this.B=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.U=js(window,"mousemove",Wa(this.X,this));a=Wa(this.P,this);typeof a==="function"&&(a=am(a));this.Y=window.setInterval(a,25)}
$a(ms,G);ms.prototype.X=function(a){a.h===void 0&&gs(a);var b=a.h;a.i===void 0&&gs(a);this.h=new qg(b,a.i)};
ms.prototype.P=function(){if(this.h){var a=U();if(this.o!=0){var b=this.B,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.G();this.u=d}this.o=a;this.B=this.h;this.j=(this.j+1)%4}};
ms.prototype.aa=function(){window.clearInterval(this.Y);ls(this.U)};var ns={};
function ps(a){var b=a===void 0?{}:a;a=b.Fe===void 0?!1:b.Fe;b=b.Zd===void 0?!0:b.Zd;if(F("_lact",window)==null){var c=parseInt(P("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);c==-1&&qs();js(document,"keydown",qs);js(document,"keyup",qs);js(document,"mousedown",qs);js(document,"mouseup",qs);a?js(window,"touchmove",function(){rs("touchmove",200)},{passive:!0}):(js(window,"resize",function(){rs("resize",200)}),b&&js(window,"scroll",function(){rs("scroll",200)}));
new ms(function(){rs("mouse",100)});
js(document,"touchstart",qs,{passive:!0});js(document,"touchend",qs,{passive:!0})}}
function rs(a,b){ns[a]||(ns[a]=!0,Hj.pa(function(){qs();ns[a]=!1},b))}
function qs(){F("_lact",window)==null&&ps();var a=Date.now();D("_lact",a,window);F("_fact",window)==-1&&D("_fact",a,window);(a=F("ytglobal.ytUtilActivityCallback_"))&&a()}
function ss(){var a=F("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var ts=C.ytPubsubPubsubInstance||new M,us=C.ytPubsubPubsubSubscribedKeys||{},vs=C.ytPubsubPubsubTopicToKeys||{},ws=C.ytPubsubPubsubIsSynchronous||{};function xs(a,b){var c=ys();if(c&&b){var d=c.subscribe(a,function(){function e(){us[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{ws[a]?e():tm(e,0)}catch(g){bm(g)}},void 0);
us[d]=!0;vs[a]||(vs[a]=[]);vs[a].push(d);return d}return 0}
function zs(a){var b=ys();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Nb(a,function(c){b.unsubscribeByKey(c);delete us[c]}))}
function As(a,b){var c=ys();c&&c.publish.apply(c,arguments)}
function Bs(a){var b=ys();if(b)if(b.clear(a),a)Cs(a);else for(var c in vs)Cs(c)}
function ys(){return C.ytPubsubPubsubInstance}
function Cs(a){vs[a]&&(a=vs[a],Nb(a,function(b){us[b]&&delete us[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.Tb;M.prototype.publish=M.prototype.lb;M.prototype.clear=M.prototype.clear;D("ytPubsubPubsubInstance",ts);D("ytPubsubPubsubTopicToKeys",vs);D("ytPubsubPubsubIsSynchronous",ws);D("ytPubsubPubsubSubscribedKeys",us);var Ds=Symbol("injectionDeps");function Es(a){this.name=a}
Es.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Fs(a){this.key=a}
function Gs(){this.i=new Map;this.j=new Map;this.h=new Map}
function Hs(a,b){a.i.set(b.qc,b);var c=a.j.get(b.qc);if(c)try{c.Gh(a.resolve(b.qc))}catch(d){c.Eh(d)}}
Gs.prototype.resolve=function(a){return a instanceof Fs?Is(this,a.key,[],!0):Is(this,a,[])};
function Is(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.Dd!==void 0)var e=d.Dd;else if(d.pf)e=d[Ds]?Js(a,d[Ds],c):[],e=d.pf.apply(d,ra(e));else if(d.Cd){e=d.Cd;var f=e[Ds]?Js(a,e[Ds],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ra(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Kh||a.h.set(b,e);return e}
function Js(a,b,c){return b?b.map(function(d){return d instanceof Fs?Is(a,d.key,c,!0):Is(a,d,c)}):[]}
;var Ks;function Ls(){Ks||(Ks=new Gs);return Ks}
;var Ms=window;function Ns(){var a,b;return"h5vcc"in Ms&&((a=Ms.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Ms.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Ms&&Ms.performance.mark&&Ms.performance.measure?2:0}
function Os(a){var b=Ns();switch(b){case 1:Ms.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Ms.performance.mark(a+"-start");break;case 0:break;default:Eb(b,"unknown trace type")}}
function Ps(a){var b=Ns();switch(b){case 1:Ms.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";Ms.performance.mark(c);Ms.performance.measure(a,b,c);break;case 0:break;default:Eb(b,"unknown trace type")}}
;var Qs=R("web_enable_lifecycle_monitoring")&&Ns()!==0,Rs=R("web_enable_lifecycle_monitoring");function Ss(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function Ts(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?go():d;this.j=c;this.scheduler=d;this.i=new rj;this.h=a;for(a={ab:0};a.ab<this.h.length;a={nc:void 0,ab:a.ab},a.ab++)a.nc=this.h[a.ab],c=function(e){return function(){e.nc.Fc();b.h[e.ab].pc=!0;b.h.every(function(f){return f.pc===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.nc),d=this.scheduler.Ya(c,d),this.h[a.ab]=Object.assign({},a.nc,{Fc:c,
jobId:d})}
function Us(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=z(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.pc||(a.scheduler.qa(c.jobId),a.scheduler.Ya(c.Fc,10))}
Ts.prototype.cancel=function(){for(var a=z(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.pc||this.scheduler.qa(b.jobId),b.pc=!0;this.i.resolve()};
Ts.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function Vs(a){this.state=a;this.plugins=[];this.o=void 0;this.B={};Qs&&Os(this.state)}
p=Vs.prototype;p.install=function(a){this.plugins.push(a);return this};
p.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
p.transition=function(a,b){var c=this;Qs&&Ps(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Us(this.j),this.j=void 0);Ws(this,a,b);this.state=a;Qs&&Os(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Xs(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Xs(a,b){var c=b.filter(function(e){return Ys(a,e)===10}),d=b.filter(function(e){return Ys(a,e)!==10});
return a.B.Jh?function(){var e=B.apply(0,arguments);return A(function(f){if(f.h==1)return f.yield(a.Le.apply(a,[c].concat(ra(e))),2);a.xd.apply(a,[d].concat(ra(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Me.apply(a,[c].concat(ra(e)));a.xd.apply(a,[d].concat(ra(e)))}}
p.Me=function(a){for(var b=B.apply(1,arguments),c=go(),d=z(a),e=d.next(),f={};!e.done;f={Jb:void 0},e=d.next())f.Jb=e.value,c.Db(function(g){return function(){Zs(g.Jb.name);$s(function(){return g.Jb.callback.apply(g.Jb,ra(b))});
at(g.Jb.name)}}(f))};
p.Le=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){h.h==1&&(c=go(),d=z(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.D(0);f.Ua=e.value;f.Ub=void 0;g=function(k){return function(){Zs(k.Ua.name);var l=$s(function(){return k.Ua.callback.apply(k.Ua,ra(b))});
ce(l)?k.Ub=R("web_lifecycle_error_handling_killswitch")?l.then(function(){at(k.Ua.name)}):l.then(function(){at(k.Ua.name)},function(m){Ss(m);
at(k.Ua.name)}):at(k.Ua.name)}}(f);
c.Db(g);return f.Ub?h.yield(f.Ub,3):h.D(3)}f={Ua:void 0,Ub:void 0};e=d.next();return h.D(2)})};
p.xd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Fc:function(){Zs(e.name);$s(function(){return e.callback.apply(e,ra(b))});
at(e.name)},
priority:Ys(c,e)}});
d.length&&(this.j=new Ts(d))};
function Ys(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function Zs(a){Qs&&a&&Os(a)}
function at(a){Qs&&a&&Ps(a)}
function Ws(a,b,c){Rs&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
fa.Object.defineProperties(Vs.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function $s(a){if(R("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){Ss(b)}}
;function bt(a){Vs.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var ct;w(bt,Vs);bt.prototype.i=function(a,b){var c=this;this.h=Bn(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
bt.prototype.u=function(a,b){this.h&&(Hj.qa(this.h),this.h=null);a(b==null?void 0:b.event)};
function dt(){ct||(ct=new bt);return ct}
;var et=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return et});function ft(){this.store={};this.h={}}
ft.prototype.storePayload=function(a,b){a=gt(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);R("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
ft.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=ht(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ra(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ra(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ra(this.smartExtractMatchingEntries(a))));return c};
ft.prototype.extractMatchingEntries=function(a){a=ht(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ra(this.store[a[c]])),delete this.store[a[c]]);return b};
ft.prototype.getSequenceCount=function(a){a=ht(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function ht(a,b){var c=gt(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&gt(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(jt(b.auth,g[0])){var h=b.isJspb;jt(h===void 0?"undefined":h?"true":"false",g[1])&&jt(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),jt(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function jt(a,b){return a===void 0||a==="undefined"?!0:a===b}
ft.prototype.getSequenceCount=ft.prototype.getSequenceCount;ft.prototype.extractMatchingEntries=ft.prototype.extractMatchingEntries;ft.prototype.smartExtractMatchingEntries=ft.prototype.smartExtractMatchingEntries;ft.prototype.storePayload=ft.prototype.storePayload;function gt(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function kt(a,b){if(a)return a[b.name]}
;var lt=xm("initial_gel_batch_timeout",2E3),mt=xm("gel_queue_timeout_max_ms",6E4),nt=xm("gel_min_batch_size",5),ot=void 0;function pt(){this.o=this.h=this.i=0;this.j=!1}
var qt=new pt,rt=new pt,st=new pt,tt=new pt,ut,vt=!0,wt=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",wt);var xt={};function zt(){var a=F("yt.logging.ims");a||(a=new ft,D("yt.logging.ims",a));return a}
function At(a,b){if(a.endpoint==="log_event"){Bt();var c=Ct(a),d=Dt(a.payload)||"";a:{if(R("enable_web_tiered_gel")){var e=ur[d||""];var f,g,h,k=Ls().resolve(new Fs($p))==null?void 0:(f=aq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!R("web_payload_policy_disabled_killswitch"))return;k=Et(e.tier);if(k===400){Ft(a,b);return}}xt[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};zt().storePayload(e,a.payload);Gt(b,c,e,d==="gelDebuggingEvent")}}
function Gt(a,b,c,d){function e(){Ht({writeThenSend:!0},R("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=f===void 0?!1:f;d=d===void 0?!1:d;a&&(ot=new a);a=xm("tvhtml5_logging_max_batch_ads_fork")||xm("tvhtml5_logging_max_batch")||xm("web_logging_max_batch")||100;var g=U(),h=It(f,c.tier),k=h.o;d&&(h.j=!0);d=0;c&&(d=zt().getSequenceCount(c));d>=1E3?e():d>=a?ut||(ut=Jt(function(){e();ut=void 0},0)):g-k>=10&&(Kt(f,c.tier),h.o=g)}
function Ft(a,b){if(a.endpoint==="log_event"){R("more_accurate_gel_parser")&&zt().storePayload({isJspb:!1},a.payload);Bt();var c=Ct(a),d=new Map;d.set(c,[a.payload]);var e=Dt(a.payload)||"";b&&(ot=new b);return new qi(function(f,g){ot&&ot.isReady()?Lt(d,ot,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Ct(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);wt[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Ht(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new qi(function(e,f){var g=It(c,d),h=g.j;g.j=!1;Mt(g.i);Mt(g.h);g.h=0;ot&&ot.isReady()?d===void 0&&R("enable_web_tiered_gel")?Nt(e,f,a,b,c,300,h):Nt(e,f,a,b,c,d,h):(Kt(c,d),e())})}
function Nt(a,b,c,d,e,f,g){var h=ot;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=R("enable_web_tiered_gel")?zt().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):zt().extractMatchingEntries(e),k.set(d,f);else for(d=z(Object.keys(xt)),l=d.next();!l.done;l=d.next())l=l.value,e=R("enable_web_tiered_gel")?zt().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):zt().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(R("web_fp_via_jspb_and_json")&&c.writeThenSend||!R("web_fp_via_jspb_and_json"))&&delete xt[l];Lt(k,h,a,b,c,!1,g)}
function Kt(a,b){function c(){Ht({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=It(a,b),e=d===tt||d===st?5E3:mt;R("web_gel_timeout_cap")&&!d.h&&(e=Jt(function(){c()},e),d.h=e);
Mt(d.i);e=P("LOGGING_BATCH_TIMEOUT",xm("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&vt&&(e=lt);e=Jt(function(){xm("gel_min_batch_size")>0?zt().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=nt&&c():c()},e);
d.i=e}
function Lt(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(U()),k=a.size,l=(g===void 0?0:g)&&R("vss_through_gel_video_stats")?"video_stats":"log_event";a=z(a);var m=a.next();for(g={};!m.done;g={Lc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Oc:void 0,Nc:void 0},m=a.next()){var n=z(m.value);m=n.next().value;n=n.next().value;g.batchRequest=Ag({context:gq(b.config_||fq())});if(!Pa(n)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=wt[m])&&
Ot(g.batchRequest,m,n);delete wt[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";Pt(g.batchRequest,h,g.dangerousLogToVisitorSession);R("always_send_and_write")&&(e.writeThenSend=!1);g.Oc=function(r){R("start_client_gcf")&&Hj.pa(function(){return A(function(t){return t.yield(Qt(r),0)})});
k--;k||c()};
g.Lc=0;g.Nc=function(r){return function(){r.Lc++;if(e.bypassNetworkless&&r.Lc===1)try{Zq(b,l,r.batchRequest,Rt({writeThenSend:!0},r.dangerousLogToVisitorSession,r.Oc,r.Nc,f)),vt=!1}catch(t){bm(t),d()}k--;k||c()}}(g);
try{Zq(b,l,g.batchRequest,Rt(e,g.dangerousLogToVisitorSession,g.Oc,g.Nc,f)),vt=!1}catch(r){bm(r),d()}}}
function Rt(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,ih:!!e,headers:{},postBodyFormat:"",postBody:"",compress:R("compress_gel")||R("compress_gel_lr")};St()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));return a}
function Pt(a,b,c){St()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=P("EVENT_ID"))&&((c=P("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),Xl("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Ot(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Bt(){var a;(a=F("yt.logging.transport.enableScrapingForTest"))||(a=wm("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(et=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",et),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function St(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
function Jt(a,b){return R("transport_use_scheduler")===!1?tm(a,b):R("logging_avoid_blocking_during_navigation")||R("lr_logging_avoid_blocking_during_navigation")?Bn(function(){if(dt().currentState==="none")a();else{var c={};dt().install((c.none={callback:a},c))}},b):Bn(a,b)}
function Mt(a){R("transport_use_scheduler")?Hj.qa(a):window.clearTimeout(a)}
function Qt(a){var b,c,d,e,f,g,h,k,l,m;return A(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=kt(d,zl),g=(f=d)==null?void 0:f.hotHashData,h=kt(d,yl),l=(k=d)==null?void 0:k.coldHashData,(m=Ls().resolve(new Fs($p)))?g?e?n.yield(bq(m,g,e),2):n.yield(bq(m,g),2):n.D(2):n.return()):l?h?n.yield(cq(m,l,h),0):n.yield(cq(m,l),0):n.D(0)})}
function It(a,b){b=b===void 0?200:b;return a?b===300?tt:rt:b===300?st:qt}
function Dt(a){a=Object.keys(a);a=z(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,ur[b])return b}
function Et(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Tt=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Tt);
function Ut(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||U());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=ss();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!R("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Tt[b]=b in Tt?Tt[b]+1:0,a.sequence={index:Tt[b],groupKey:b},d.endOfSequence&&delete Tt[d.sequenceGroup]);(d.sendIsolatedPayload?Ft:At)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function qo(a,b,c){c=c===void 0?{}:c;var d=as;P("ytLoggingEventsDefaultDisabled",!1)&&as===as&&(d=null);Ut(a,b,d,c)}
;function Vt(a){return a.slice(0,void 0).map(function(b){return b.name}).join(" > ")}
;var Wt=new Set,Xt=0,Yt=0,Zt=0,$t=[],au=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function po(a){bu(a)}
function cu(a){bu(a,"WARNING")}
function du(a){a instanceof Error?bu(a):(a=Qa(a)?JSON.stringify(a):String(a),a=new T(a),a.name="RejectedPromiseError",cu(a))}
function bu(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),R("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(Xt>=5))){d=$t;var k=Vb(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var r=0;r<a.args.length&&!(n=Ym(a.args[r],"params."+r,c,n),
n>=500);r++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(r in t){if(t[r]){var v="params."+r,x=$m(t[r]);c[v]=x;n+=v.length+x.length;if(n>500)break}}else c.params=$m(t)}if(d.length)for(r=0;r<d.length&&!(n=Ym(d[r],"params.context."+r,c,n),n>=500);r++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);r={message:e,name:f,lineNumber:m,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(r.lineNumber=
r.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=Um();c=z(a.Va);for(d=c.next();!d.done;d=c.next())if(d=d.value,r.message&&r.message.match(d.yh)){a=d.weight;break a}a=z(a.Qa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(r)){a=c.weight;break a}a=1}r.sampleWeight=a;a=z(Pm);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.lc[r.name])for(e=z(c.lc[r.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=r.message.match(f.regexp)){r.params["params.error.original"]=d[0];e=f.groups;f={};
for(m=0;m<e.length;m++)f[e[m]]=d[m+1],r.params["params.error."+e[m]]=d[m+1];r.message=c.Jc(f);break}r.params||(r.params={});a=Um();r.params["params.errorServiceSignature"]="msg="+a.Va.length+"&cb="+a.Qa.length;r.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(r.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new Dg(Eg,"sample")).constructor!==Dg&&(r.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&
window.yterr(r);if(r.sampleWeight!==0&&!Wt.has(r.message)){if(g&&R("web_enable_error_204"))eu(b===void 0?"ERROR":b,r);else{b=b===void 0?"ERROR":b;b==="ERROR"?(Vm.lb("handleError",r),R("record_app_crashed_web")&&Zt===0&&r.sampleWeight===1&&(Zt++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},R("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:r.message}}}}),qo("appCrashed",g)),Yt++):b==="WARNING"&&Vm.lb("handleWarning",r);if(R("kevlar_gel_error_routing")){g=
b;h=h===void 0?{}:h;b:{a=z(au);for(c=a.next();!c.done;c=a.next())if(wo(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:r.stack};r.fileName&&(c.filename=r.fileName);a=r.lineNumber&&r.lineNumber.split?r.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:r.message,errorClassName:r.name,
sampleWeight:r.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];P("FEXP_EXPERIMENTS")&&(h.experimentIds=P("FEXP_EXPERIMENTS"));d=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Yl("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=z(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=r.params)for(e=z(Object.keys(d)),
f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=P("SERVER_NAME");e=P("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(qo("clientError",h),(g==="ERROR"||R("errors_flush_gel_always_killswitch"))&&Ht(void 0,void 0,!1))}R("suppress_error_204_logging")||eu(b,r)}try{Wt.add(r.message)}catch(y){}Xt++}}}
function eu(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:P("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=z(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=z(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=P("SERVER_NAME");b=P("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Gm(P("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function fu(a){var b=B.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ra(b))}
;function gu(){this.register=new Map}
function hu(a){a=z(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Dh("ABORTED")}
gu.prototype.clear=function(){hu(this);this.register.clear()};
var iu=new gu;var ju=Date.now().toString();
function ku(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(ju)for(a=1,b=0;b<ju.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^ju.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var lu,mu=C.ytLoggingDocDocumentNonce_;mu||(mu=ku(),D("ytLoggingDocDocumentNonce_",mu));lu=mu;function nu(a){this.h=a}
p=nu.prototype;p.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
p.getAsJspb=function(){var a=new Bl;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&jf(a,2,ye(this.h.veType)),this.h.veCounter!==void 0&&jf(a,6,ye(this.h.veCounter)),this.h.elementIndex!==void 0&&jf(a,3,ye(this.h.elementIndex)),this.h.isCounterfactual&&jf(a,5,ue(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();wf(a,Bl,7,b)}this.h.youtubeData!==void 0&&wf(a,Al,8,this.h.jspbYoutubeData);return a};
p.toString=function(){return JSON.stringify(this.getAsJson())};
p.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
p.getLoggingDirectives=function(){return this.h.loggingDirectives};function ou(a){return P("client-screen-nonce-store",{})[a===void 0?0:a]}
function pu(a,b){b=b===void 0?0:b;var c=P("client-screen-nonce-store");c||(c={},Xl("client-screen-nonce-store",c));c[b]=a}
function qu(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function ru(a){return P(qu(a===void 0?0:a))}
D("yt_logging_screen.getRootVeType",ru);function su(){var a=P("csn-to-ctt-auth-info");a||(a={},Xl("csn-to-ctt-auth-info",a));return a}
function tu(){return Object.values(P("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function uu(a){a=ou(a===void 0?0:a);if(!a&&!P("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",uu);function vu(a,b,c){var d=su();(c=uu(c))&&delete d[c];b&&(d[a]=b)}
function wu(a){return su()[a]}
D("yt_logging_screen.getCttAuthInfo",wu);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==ou(c)||b!==P(qu(c)))if(vu(a,d,c),pu(a,c),Xl(qu(c),b),b=function(){setTimeout(function(){a&&qo("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:lu,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function xu(){var a=zg(yu),b;return(new qi(function(c,d){a.onSuccess=function(e){sm(e)?c(new zu(e)):d(new Au("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Au("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Au("Request timed out","net.timeout",e))};
b=Gm("//googleads.g.doubleclick.net/pagead/id",a)})).wc(function(c){if(c instanceof xi){var d;
(d=b)==null||d.abort()}return vi(c)})}
function Au(a,b,c){ab.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(Au,ab);function zu(a){this.xhr=a}
;function Bu(){this.h=0;this.i=null}
Bu.prototype.then=function(a,b,c){return this.h===1&&a?(a=a.call(c,this.i))&&typeof a.then==="function"?a:Cu(a):this.h===2&&b?(a=b.call(c,this.i))&&typeof a.then==="function"?a:Du(a):this};
Bu.prototype.getValue=function(){return this.i};
Bu.prototype.isRejected=function(){return this.h==2};
Bu.prototype.$goog_Thenable=!0;function Du(a){var b=new Bu;a=a===void 0?null:a;b.h=2;b.i=a===void 0?null:a;return b}
function Cu(a){var b=new Bu;a=a===void 0?null:a;b.h=1;b.i=a===void 0?null:a;return b}
;function Eu(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:nm(a)?"same-origin":"cors",credentials:nm(a)?"same-origin":"include"};b={};for(var d=z(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Fu(){return ig()||(bd||cd)&&wo("applewebkit")&&!wo("version")&&(!wo("safari")||wo("gsa/"))||ad&&wo("version/")?!0:P("EOM_VISITOR_DATA")?!1:!0}
;function Gu(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Fl)if(Fl[d]==c.embeddedPlayerMode){b=Fl[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function Hu(a){ab.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Iu;this.isTimeout=a instanceof Au&&a.errorCode=="net.timeout";this.isCanceled=a instanceof xi}
w(Hu,ab);Hu.prototype.name="BiscottiError";function Iu(){ab.call(this,"Biscotti ID is missing from server")}
w(Iu,ab);Iu.prototype.name="BiscottiMissingError";var yu={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Ju=null;function Ku(){if(R("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Fu())return Error("User has not consented - not fetching biscotti id.");var a=P("PLAYER_VARS",{});if(xg(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Gu(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Ql(){var a=Ku();if(a!==void 0)return vi(a);Ju||(Ju=xu().then(Lu).wc(function(b){return Mu(2,b)}));
return Ju}
function Lu(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new Iu;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new Iu;a=a.id;Rl(a);Ju=Cu(a);Nu(18E5,2);return a}
function Mu(a,b){b=new Hu(b);Rl("");Ju=Du(b);a>0&&Nu(12E4,a-1);throw b;}
function Nu(a,b){tm(function(){xu().then(Lu,function(c){return Mu(b,c)}).wc(oi)},a)}
function Ou(){try{var a=F("yt.ads.biscotti.getId_");return a?a():Ql()}catch(b){return vi(b)}}
;var Bb=sa(["data-"]);function Pu(a){a&&(a.dataset?a.dataset[Qu()]="true":Db(a))}
function Ru(a){return a?a.dataset?a.dataset[Qu()]:a.getAttribute("data-loaded"):null}
var Su={};function Qu(){return Su.loaded||(Su.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function Tu(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||zg(b);this.assets=a.assets||{};this.attrs=a.attrs||zg(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Tu.prototype.clone=function(){var a=new Tu,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Oa(c)=="object"?a[b]=zg(c):a[b]=c}return a};var Uu=["share/get_share_panel"],Vu=["share/get_web_player_share_panel"],Wu=["feedback"],Xu=["notification/modify_channel_preference"],Yu=["browse/edit_playlist"],Zu=["subscription/subscribe"],$u=["subscription/unsubscribe"];var av=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",av);function bv(a){Sl(av,arguments)}
;function cv(a,b,c){dv(a,b,c===void 0?null:c)}
function ev(a){a=fv(a);var b=document.getElementById(a);b&&(Bs(a),b.parentNode.removeChild(b))}
function gv(a,b){a&&b&&(a=""+Ra(b),(a=hv[a])&&zs(a))}
function dv(a,b,c){c=c===void 0?null:c;var d=fv(a),e=document.getElementById(d),f=e&&Ru(e),g=e&&!f;f?b&&b():(b&&(f=xs(d,b),b=""+Ra(b),hv[b]=f),g||(e=iv(a,d,function(){Ru(e)||(Pu(e),As(d),tm(function(){Bs(d)},0))},c)))}
function iv(a,b,c,d){d=d===void 0?null:d;var e=Gg("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Lb(e,wl(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function fv(a){var b=document.createElement("a");zb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Zb(a)}
var hv={};function jv(a){var b=kv(a),c=document.getElementById(b),d=c&&Ru(c);d||c&&!d||(c=lv(a,b,function(){if(!Ru(c)){Pu(c);As(b);var e=Xa(Bs,b);tm(e,0)}}))}
function lv(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=wl(a);Gb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function kv(a){var b=Gg("A");zb(b,new sb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Zb(a)}
;function mv(a){var b=B.apply(1,arguments);if(!nv(a)||b.some(function(d){return!nv(d)}))throw Error("Only objects may be merged.");
b=z(b);for(var c=b.next();!c.done;c=b.next())ov(a,c.value)}
function ov(a,b){for(var c in b)if(nv(b[c])){if(c in a&&!nv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});ov(a[c],b[c])}else if(pv(b[c])){if(c in a&&!pv(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);qv(a[c],b[c])}else a[c]=b[c];return a}
function qv(a,b){b=z(b);for(var c=b.next();!c.done;c=b.next())c=c.value,nv(c)?a.push(ov({},c)):pv(c)?a.push(qv([],c)):a.push(c);return a}
function nv(a){return typeof a==="object"&&!Array.isArray(a)}
function pv(a){return typeof a==="object"&&Array.isArray(a)}
;var rv="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function sv(a,b){var c=c===void 0?!0:c;var d=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=cc(window.location.href);e&&d.push(e);e=cc(a);if(Mb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),zb(d,a),a=d.href)if(a=dc(a),a=ec(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:uu()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&tv(a,b,f)}else tv(a,b)}
function tv(a,b,c){a=uv(a);b=b?hc(b):"";c=c||5;Fu()&&gn(a,b,c)}
function uv(a){for(var b=z(rv),c=b.next();!c.done;c=b.next())a=mc(a,c.value);return"ST-"+Zb(a).toString(36)}
;function vv(a){kq.call(this,1,arguments);this.csn=a}
w(vv,kq);var tq=new lq("screen-created",vv),wv=[],xv=0,yv=new Map,zv=new Map,Av=new Map;
function Bv(a,b,c,d,e){e=e===void 0?!1:e;for(var f=Cv({cttAuthInfo:wu(b)||void 0},b),g=z(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(vg(k)||!k.trackingParams&&!k.veType)&&cu(Error("Child VE logged with no data"));if(R("no_client_ve_attach_unless_shown")){var l=Dv(h,b);if(k.veType&&!zv.has(l)&&!Av.has(l)&&!e){if(!R("il_attach_cache_limit")||yv.size<1E3){yv.set(l,[a,b,c,h]);return}R("il_attach_cache_limit")&&yv.size>1E3&&cu(new T("IL Attach cache exceeded limit"))}h=Dv(c,b);yv.has(h)?
Ev(c,b):Av.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Pb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?Fv("visualElementAttached",f,c):a?Ut("visualElementAttached",c,a,f):qo("visualElementAttached",c,f)}
function Fv(a,b,c){wv.push({Ee:a,payload:c,uh:void 0,options:b});xv||(xv=uq())}
function vq(a){if(wv){for(var b=z(wv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,qo(c.Ee,c.payload,c.options));wv.length=0}xv=0}
function Dv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Ev(a,b){a=Dv(a,b);yv.has(a)&&(b=yv.get(a)||[],Bv(b[0],b[1],b[2],[b[3]],!0),yv.delete(a))}
function Cv(a,b){R("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Gv(){try{return!!self.localStorage}catch(a){return!1}}
;function Hv(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Iv(a){if(Gv()){var b=Object.keys(window.localStorage);b=z(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Hv(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function Jv(){if(!Gv())return!1;var a=zn(),b=Object.keys(window.localStorage);b=z(b);for(var c=b.next();!c.done;c=b.next())if(c=Hv(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Kv(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(P("INNERTUBE_CLIENT_NAME")==="WEB"||P("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function Lv(a){if(P("LOGGED_IN",!0)&&Kv()){var b=P("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=cc(window.location.href);c&&b.push(c);c=cc(a);Mb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=dc(a),(b=ec(b))?(b=uv(b),b=(b=hn(b)||null)?jm(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;Kv()?(d||(d=P("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&sv(a,b)}}
;function Mv(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));b&&sv(a,b);if(c)return!1;Lv(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;a=ic(a,e);Lv(a);f=a+f;var h=h===void 0?wb:h;a:if(h=h===void 0?wb:h,f instanceof sb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof ub&&b.te(f)){h=new sb(f);break a}h=void 0}g=g.location;h=yb(h||tb);h!==void 0&&(g.href=h);return!0}
;function Nv(a){if(xg(P("PLAYER_VARS",{}))!="1"){a&&Pl();try{Ou().then(function(){},function(){}),tm(Nv,18E5)}catch(b){bm(b)}}}
;var Ov=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Pv(){var a=a===void 0?window.location.href:a;if(R("kevlar_disable_theme_param"))return null;var b=ac(bc(5,a));if(R("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=km(a).theme;return Ov.get(c)||null}catch(d){}return null}
;function Qv(){this.h={};if(this.i=kn()){var a=hn("CONSISTENCY");a&&Rv(this,{encryptedTokenJarContents:a})}}
Qv.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Ma.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=z(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Rv(this,a)}};
function Rv(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&gn("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Sv=window.location.hostname.split(".").slice(-2).join(".");function Tv(){this.j=-1;var a=P("LOCATION_PLAYABILITY_TOKEN");P("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=Uv(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Vv;function Wv(){Vv=F("yt.clientLocationService.instance");Vv||(Vv=new Tv,D("yt.clientLocationService.instance",Vv));return Vv}
p=Tv.prototype;
p.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
p.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,P("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=Uv(this))&&this.h.set("yt-location-playability-token",a,15552E3):gn("YT_CL",JSON.stringify({loctok:a}),15552E3,Sv,!0))};
function Uv(a){return a.h===void 0?new ho("yt-client-location"):a.h}
p.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=Uv(this))&&this.h.remove("yt-location-playability-token"):jn("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
p.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;P("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
p.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
p.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function Xv(a){var b={"Content-Type":"application/json"};P("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=P("EOM_VISITOR_DATA"):P("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=P("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=P("LOGGED_IN",!1);P("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=P("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=P("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=P("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=P("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=P("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a),P("ENABLE_LAVA_HEADER_ON_IT_EXPANSION")&&(a=P("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a));return b}
;function Yv(){this.h={}}
Yv.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
Yv.prototype.get=function(a){if(this.contains(a))return this.h[a]};
Yv.prototype.set=function(a,b){this.h[a]=b};
Yv.prototype.remove=function(a){delete this.h[a]};function Zv(){this.mappings=new Yv}
Zv.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
Zv.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Eb(b)}}return a};
new Zv;function $v(a){return function(){return new a}}
;var aw={},bw=(aw.WEB_UNPLUGGED="^unplugged/",aw.WEB_UNPLUGGED_ONBOARDING="^unplugged/",aw.WEB_UNPLUGGED_OPS="^unplugged/",aw.WEB_UNPLUGGED_PUBLIC="^unplugged/",aw.WEB_CREATOR="^creator/",aw.WEB_KIDS="^kids/",aw.WEB_EXPERIMENTS="^experiments/",aw.WEB_MUSIC="^music/",aw.WEB_REMIX="^music/",aw.WEB_MUSIC_EMBEDDED_PLAYER="^music/",aw.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",aw);
function cw(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=bw[b];if(c){c=new RegExp(c);for(var d=z(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(bw).forEach(function(g){var h=z(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=z(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function dw(){}
dw.prototype.u=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?fn:c;var d=a.clickTrackingParams,e=this.o,f=!1;f=f===void 0?!1:f;e=e===void 0?!1:e;var g=P("INNERTUBE_CONTEXT");if(g){g=Ag(g);R("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;h.clientName==="MWEB"&&h.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(h.clientFormFactor=P("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=k===void 0?!1:k;on();var l="USER_INTERFACE_THEME_LIGHT";rn(165)?l="USER_INTERFACE_THEME_DARK":rn(174)?l="USER_INTERFACE_THEME_LIGHT":!R("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:Pv()||l;h.userInterfaceTheme=k;if(!f){if(k=wn())h.connectionType=k;R("web_log_effective_connection_type")&&(k=xn())&&(g.client.effectiveConnectionType=k)}var m;if(R("web_log_memory_total_kbytes")&&((m=C.navigator)==null?0:m.deviceMemory)){var n;m=(n=C.navigator)==null?void 0:n.deviceMemory;g.client.memoryTotalKbytes=""+m*1E6}R("web_gcf_hashes_innertube")&&(k=dq())&&(n=k.coldConfigData,m=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},n&&(g.client.configInfo.coldConfigData=
n),m&&(g.client.configInfo.coldHashData=m),k&&(g.client.configInfo.hotHashData=k));n=km(C.location.href);!R("web_populate_internal_geo_killswitch")&&n.internalcountrycode&&(h.internalGeo=n.internalcountrycode);h.clientName==="MWEB"||h.clientName==="WEB"?(h.mainAppWebInfo={graftUrl:C.location.href},R("kevlar_woffle")&&an.h&&(n=an.h,h.mainAppWebInfo.pwaInstallabilityStatus=!n.h&&n.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=bn(),
h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):h.clientName==="TVHTML5"&&(!R("web_lr_app_quality_killswitch")&&(n=P("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:n})),n=P("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:n}));if(!R("web_populate_time_zone_itc_killswitch")){b:{if(typeof Intl!=="undefined")try{var r=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(oa){}r=
void 0}r&&(h.timeZone=r)}(r=P("EXPERIMENTS_TOKEN",""))?h.experimentsToken=r:delete h.experimentsToken;r=ym();Qv.h||(Qv.h=new Qv);h=Qv.h.h;n=[];m=0;for(var t in h)n[m++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:r,consistencyTokenJars:n});!R("web_prequest_context_killswitch")&&(t=P("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=t);r=on();t=rn(58);r=r.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);r&&(g.user.lockedSafetyMode=
!0);R("warm_op_csn_cleanup")?e&&(f=uu())&&(g.clientScreenNonce=f):!f&&(f=uu())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=F("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Wv().setLocationOnInnerTubeContext(g);try{var v=om(),x=v.bid;delete v.bid;g.adSignalsInfo={params:[],bid:x};var y=z(Object.entries(v));for(var E=y.next();!E.done;E=y.next()){var I=z(E.value),S=I.next().value,ea=I.next().value;v=S;x=ea;d=void 0;(d=g.adSignalsInfo.params)==null||d.push({key:v,value:""+
x})}var Ja,bb;if(((Ja=g.client)==null?void 0:Ja.clientName)==="TVHTML5"||((bb=g.client)==null?void 0:bb.clientName)==="TVHTML5_UNPLUGGED"){var ba=P("INNERTUBE_CONTEXT");ba.adSignalsInfo&&(g.adSignalsInfo.advertisingId=ba.adSignalsInfo.advertisingId,g.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",g.adSignalsInfo.limitAdTracking=ba.adSignalsInfo.limitAdTracking)}}catch(oa){bu(oa)}y=g}else bu(Error("Error: No InnerTubeContext shell provided in ytconfig.")),y={};y={context:y};
if(E=this.i(a)){this.h(y,E,b);var Y;b="/youtubei/v1/"+cw(this.j());(E=(Y=kt(a.commandMetadata,Dl))==null?void 0:Y.apiUrl)&&(b=E);Y=b;(b=P("INNERTUBE_HOST_OVERRIDE"))&&(Y=String(b)+String(dc(Y)));b={};R("json_condensed_response")&&(b.prettyPrint="false");Y=mm(Y,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:Y,hb:Eu(Y),Ma:y,config:a};a.config.Vb?a.config.Vb.identity=c:a.config.Vb={identity:c};return a}bu(new T("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(dw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function ew(){}
w(ew,dw);function fw(){}
w(fw,ew);fw.prototype.u=function(){return{input:"/getDatasyncIdsEndpoint",hb:Eu("/getDatasyncIdsEndpoint","GET"),Ma:{}}};
fw.prototype.j=function(){return[]};
fw.prototype.i=function(){};
fw.prototype.h=function(){};var gw={},hw=(gw.GET_DATASYNC_IDS=$v(fw),gw);function iw(a){var b;(b=F("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function jw(){var a=iw();a.info||(a.info={});return a.info}
function kw(a){a=iw(a);a.metadata||(a.metadata={});return a.metadata}
function lw(a){a=iw(a);a.tick||(a.tick={});return a.tick}
function mw(a){a=iw(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function nw(a){a=mw(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function ow(a){var b=iw(a).nonce;b||(b=ku(),iw(a).nonce=b);return b}
;function pw(){var a=F("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function qw(a){a=a||"";var b=F("ytcsi.reference");b||(pw(),b=F("ytcsi.reference"));if(b[a])return b[a];var c=pw(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var V={},rw=(V["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",V["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",V["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",V["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",V["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",V["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",V["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",V["asset.composition_policy"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",V["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",V["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",V["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",V["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",V["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",V["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",V["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",V["asset.references"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",V["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",V["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",V["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",V["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",V["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",V["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",V["song.analytics"]=
"LATENCY_ACTION_CREATOR_SONG_ANALYTICS",V.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",V["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",V["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",V["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",V["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",V["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",V["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",V["channel.monetization"]=
"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",V["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",V["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",V["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",V["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",V["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",V["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",V["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",
V["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",V["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",V.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",V["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",V["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",V["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",V["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",V["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",V["owner.bulk"]=
"LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",V["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",V["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",V["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",V["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",V["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",V["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",V["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",
V["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",V["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",V["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",V["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",V["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",V["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",V["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",V["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",V["playlist.videos"]=
"LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",V["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",V["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",V["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",V["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",V["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",V["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",V["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",V["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",
V["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",V["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",V["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",V["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",V["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",V["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",V["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",V["video.translations"]=
"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",V),W={},sw=(W.auto_search="LATENCY_ACTION_AUTO_SEARCH",W.ad_to_ad="LATENCY_ACTION_AD_TO_AD",W.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",W.app_startup="LATENCY_ACTION_APP_STARTUP",W.browse="LATENCY_ACTION_BROWSE",W.cast_splash="LATENCY_ACTION_CAST_SPLASH",W.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",W.channels="LATENCY_ACTION_CHANNELS",W.chips="LATENCY_ACTION_CHIPS",W.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",W.direct_playback=
"LATENCY_ACTION_DIRECT_PLAYBACK",W.editor="LATENCY_ACTION_EDITOR",W.embed="LATENCY_ACTION_EMBED",W.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",W.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",W.explore="LATENCY_ACTION_EXPLORE",W.favorites="LATENCY_ACTION_FAVORITES",W.home="LATENCY_ACTION_HOME",W.inboarding="LATENCY_ACTION_INBOARDING",W.library="LATENCY_ACTION_LIBRARY",W.live="LATENCY_ACTION_LIVE",W.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",
W.management="LATENCY_ACTION_MANAGEMENT",W.mini_app="LATENCY_ACTION_MINI_APP_PLAY",W.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",W.onboarding="LATENCY_ACTION_ONBOARDING",W.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",W.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",W.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",W.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",W.prebuffer="LATENCY_ACTION_PREBUFFER",W.prefetch="LATENCY_ACTION_PREFETCH",
W.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",W.profile_switcher="LATENCY_ACTION_LOGIN",W.projects="LATENCY_ACTION_PROJECTS",W.reel_watch="LATENCY_ACTION_REEL_WATCH",W.results="LATENCY_ACTION_RESULTS",W.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",W.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",W.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",W.review="LATENCY_ACTION_REVIEW",W.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",W.search_ui="LATENCY_ACTION_SEARCH_UI",
W.search_suggest="LATENCY_ACTION_SUGGEST",W.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",W.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",W.seek="LATENCY_ACTION_PLAYER_SEEK",W.settings="LATENCY_ACTION_SETTINGS",W.store="LATENCY_ACTION_STORE",W.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",W.tenx="LATENCY_ACTION_TENX",W.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",W.watch="LATENCY_ACTION_WATCH",W.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",W["watch,watch7"]="LATENCY_ACTION_WATCH",
W["watch,watch7_html5"]="LATENCY_ACTION_WATCH",W["watch,watch7ad"]="LATENCY_ACTION_WATCH",W["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",W.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",W.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",W.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",W.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",W.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",W.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",W.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",
W.attestation_challenge_fetch="LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH",W);Object.assign(sw,rw);function tw(a,b){kq.call(this,1,arguments);this.timer=b}
w(tw,kq);var uw=new lq("aft-recorded",tw);D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var vw=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",vw);function ww(){this.h=0}
function xw(){ww.h||(ww.h=new ww);return ww.h}
ww.prototype.tick=function(a,b,c,d){yw(this,"tick_"+a+"_"+b)||qo("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
ww.prototype.info=function(a,b,c){var d=Object.keys(a).join("");yw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,qo("latencyActionInfo",a,{cttAuthInfo:c}))};
ww.prototype.jspbInfo=function(){};
ww.prototype.span=function(a,b,c){var d=Object.keys(a).join("");yw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,qo("latencyActionSpan",a,{cttAuthInfo:c}))};
function yw(a,b){vw[b]=vw[b]||{count:0};var c=vw[b];c.count++;c.time=U();a.h||(a.h=Bn(function(){var d=U(),e;for(e in vw)vw[e]&&d-vw[e].time>6E4&&delete vw[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new T("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||cu(c)),!0):!1}
;var zw=window;function Aw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Bw(){var a;if(R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=X==null?void 0:(a=X.getEntriesByType)==null?void 0:(b=a.call(X,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=Cw(e.requestStart),e.responseEnd=Cw(e.responseEnd),e.redirectStart=Cw(e.redirectStart),e.redirectEnd=Cw(e.redirectEnd),e.domainLookupEnd=Cw(e.domainLookupEnd),e.connectStart=Cw(e.connectStart),e.connectEnd=
Cw(e.connectEnd),e.responseStart=Cw(e.responseStart),e.secureConnectionStart=Cw(e.secureConnectionStart),e.domainLookupStart=Cw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=X.timing}else a=R("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(X.timing)):X.timing;return a}
function Cw(a){return Math.round(Dw()+a)}
function Dw(){return(R("csi_use_time_origin")||R("csi_use_time_origin_tvhtml5"))&&X.timeOrigin?Math.floor(X.timeOrigin):X.timing.navigationStart}
var X=zw.performance||zw.mozPerformance||zw.msPerformance||zw.webkitPerformance||new Aw;var Ew=!1,Fw=!1,Gw={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Wa(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||oi,X);function Hw(a,b){if(!R("web_csi_action_sampling_enabled")||!iw(b).actionDisabled){var c=qw(b||"");mv(c.info,a);a.loadType&&(c=a.loadType,kw(b).loadType=c);mv(nw(b),a);c=ow(b);b=iw(b).cttAuthInfo;xw().info(a,c,b)}}
function Iw(){var a,b,c,d;return((d=Ls().resolve(new Fs($p))==null?void 0:(a=aq())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!R("web_csi_action_sampling_enabled")||!iw(c).actionDisabled){var d=ow(c),e;if(e=R("web_csi_debug_sample_enabled")&&d){(Ls().resolve(new Fs($p))==null?0:aq())&&!Fw&&(Fw=!0,Z("gcfl",U(),c));var f,g,h;e=(Ls().resolve(new Fs($p))==null?void 0:(f=aq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=Iw();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+d.charCodeAt(g),
g<d.length-1&&(f%=0x800000000000);e=f%1E5%e!==0;iw(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Hw(f,c));iw(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,!R("enable_strip_performance_mark_in_prod")&&X.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||R("web_csi_disable_alt_time_performance_mark"))X.mark(e);else{f=R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")?f-X.timeOrigin:f-(X.timeOrigin||
X.timing.navigationStart);try{X.mark(e,{startTime:f})}catch(k){}}e=qw(c||"");e.tick[a]=b||U();if(e.callback&&e.callback[a])for(e=z(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=mw(c);e.gelTicks&&(e.gelTicks[a]=!0);f=lw(c);e=b||U();R("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=iw(c).cttAuthInfo;a==="_start"?(a=xw(),yw(a,"baseline_"+d)||qo("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):xw().tick(a,d,b,f);Jw(c);return e}}}
function Kw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=cs+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Lw(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=z(Object.entries(P("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=z(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function Mw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Hb(window)&&a.setAttribute("nonce",Hb(window));return c?(a=X.getEntriesByName(c))&&a[0]&&(a=a[0],c=Dw(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function Nw(){var a=window.location.protocol,b=X.getEntriesByType("resource");b=Ob(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Qb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Z("wffs",Cw(b.startTime)),Z("wffe",Cw(b.responseEnd)))}
function Ow(a){var b=Pw("aft",a);if(b)return b;b=P((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Pw(b[d],a);if(e)return e}return NaN}
function Pw(a,b){if(a=lw(b)[a])return typeof a==="number"?a:a[a.length-1]}
function Jw(a){var b=Pw("_start",a),c=Ow(a),d=R("enable_cow_info_csi")||!Ew;b&&c&&d&&(qq(uw,new tw(Math.round(c-b),a)),Ew=!0)}
function Qw(){if(X.getEntriesByType){var a=X.getEntriesByType("paint");if(a=Rb(a,function(c){return c.name==="first-paint"}))return Cw(a.startTime)}var b;
R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")?b=X.getEntriesByType("first-paint")[0].startTime:b=X.timing.Ah;return b?Math.max(0,b):0}
;function Rw(a,b){am(function(){qw("").info.actionType=a;b&&Xl("TIMING_AFT_KEYS",b);Xl("TIMING_ACTION",a);var c=Lw();Object.keys(c).length>0&&Hw(c);c={isNavigation:!0,actionType:sw[P("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=P("PREVIOUS_ACTION");d&&(c.previousAction=sw[d]||"LATENCY_ACTION_UNKNOWN");if(d=P("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=P("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=uu())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=Kw();if(d===1||d===-1)c.isVisible=!0;kw();jw();
c.loadType="cold";d=jw();var e=Bw(),f=Dw(),g=P("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!R("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),d.prerender!==1&&Z("_start",f,void 0));d=Qw();d>0&&Z("fpt",d);d=Bw();d.isPerformanceNavigationTiming&&Hw({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Dw()&&d.connectEnd-d.secureConnectionStart>0&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));X&&"getEntriesByType"in X&&Nw();d=[];if(document.querySelector&&X&&X.getEntriesByName)for(var h in Gw)Gw.hasOwnProperty(h)&&(e=Gw[h],
Mw(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=z(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Hw(c);c=mw();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=nw();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(kw().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=lw();e=mw();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Z(k,Pw(k));else if(R("log_repeated_ytcsi_ticks"))for(f=
z(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=z(h);for(e=h.next();!e.done;e=h.next())d=e.value,mv(c,d),mv(k,d),d=!0;d&&Hw(k)}D("ytglobal.timingready_",!0);k=P("TIMING_ACTION");F("ytglobal.timingready_")&&k&&Sw()&&Ow()&&Jw()})()}
function Sw(){return am(function(){return Tw()})()}
function Uw(a,b,c){am(Hw)(a,b,c===void 0?!1:c)}
function Vw(a,b,c){return am(Z)(a,b,c)}
function Tw(){return am(function(){return"_start"in lw()})()}
function Ww(){am(function(){var a=ow();requestAnimationFrame(function(){setTimeout(function(){a===ow()&&Vw("ol",void 0,void 0)},0)})})()}
var Xw=window;Xw.ytcsi&&(Xw.ytcsi.infoGel=Uw,Xw.ytcsi.tick=Vw);var Yw="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),Zw=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function $w(a,b,c,d){this.u=a;this.ea=b;this.o=c;this.j=d;this.i=void 0;this.h=new Map;a.Qb||(a.Qb={});a.Qb=Object.assign({},hw,a.Qb)}
function ax(a,b,c,d){if($w.h!==void 0){if(d=$w.h,a=[a!==d.u,b!==d.ea,c!==d.o,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new T("InnerTubeTransportService is already initialized",a);
}else $w.h=new $w(a,b,c,d)}
function bx(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?fn:c;var d=cx(a,b);return d?new qi(function(e,f){var g,h,k,l,m;return A(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.u(b,void 0,c);if(!h){f(new T("Error: Failed to build request for command.",b));n.D(0);break}Lv(h.input);l=((k=h.hb)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.o.ff){var r=h.config,t;r=r==null?void 0:(t=r.Vb)==null?void 0:t.sessionIndex;t=en(0,{sessionIndex:r});m=Object.assign({},
Xv(l),t);n.D(4);break}return n.yield(dx(h.config,l),5);case 5:m=n.i;case 4:e(ex(a,h,m)),n.h=0}})}):vi(new T("Error: No request builder found for command.",b))}
function fx(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.j){d=z(Yw);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function ex(a,b,c){var d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,r,t,v,x,y,E,I,S,ea,Ja,bb,ba,Y,oa,Na,Ma,Xg,Yg,Qr,Rr,Sr,Tr;return A(function(ja){switch(ja.h){case 1:ja.D(2);break;case 3:if((e=ja.i)&&!e.isExpired())return ja.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Ma)==null?0:g.context)){ja.D(4);break}h=b.Ma.context;ja.D(5);break;case 5:k=z([]),l=k.next();case 8:if(l.done){ja.D(4);break}m=l.value;return ja.yield(m.Ch(h),9);case 9:l=k.next();ja.D(8);break;case 4:if((n=a.i)==null||!n.Ih(b.input,b.Ma)){ja.D(12);break}return ja.yield(a.i.wh(b.input,
b.Ma),13);case 13:return r=ja.i,fx(a,r,b),ja.return(r);case 12:return(x=(v=b.config)==null?void 0:v.Fh)&&a.h.has(x)?t=a.h.get(x):(y=JSON.stringify(b.Ma),S=(I=(E=b.hb)==null?void 0:E.headers)!=null?I:{},b.hb=Object.assign({},b.hb,{headers:Object.assign({},S,c)}),ea=Object.assign({},b.hb),b.hb.method==="POST"&&(ea=Object.assign({},ea,{body:y})),((Ja=b.config)==null?0:Ja.Je)&&Vw(b.config.Je),bb=function(){return a.ea.fetch(b.input,ea,b.config)},t=bb(),x&&a.h.set(x,t)),ja.yield(t,14);
case 14:if((ba=ja.i)&&"error"in ba&&((Y=ba)==null?0:(oa=Y.error)==null?0:oa.details))for(Na=ba.error.details,Ma=z(Na),Xg=Ma.next();!Xg.done;Xg=Ma.next())Yg=Xg.value,(Qr=Yg["@type"])&&Zw.indexOf(Qr)>-1&&(delete Yg["@type"],ba=Yg);x&&a.h.has(x)&&a.h.delete(x);((Rr=b.config)==null?0:Rr.Ke)&&Vw(b.config.Ke);if(ba||(Sr=a.i)==null||!Sr.kh(b.input,b.Ma)){ja.D(15);break}return ja.yield(a.i.vh(b.input,b.Ma),16);case 16:ba=ja.i;case 15:return fx(a,ba,b),((Tr=b.config)==null?0:Tr.Ge)&&Vw(b.config.Ge),d(),ja.return(ba||
void 0)}})}
function cx(a,b){a:{a=a.u;var c,d=(c=kt(b,El))==null?void 0:c.signal;if(d&&a.Qb&&(c=a.Qb[d])){var e=c();break a}var f;if((c=(f=kt(b,Cl))==null?void 0:f.request)&&a.Ud&&(f=a.Ud[c])){e=f();break a}for(e in b)if(a.bd[e]&&(b=a.bd[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function dx(a,b){var c,d,e,f;return A(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Vb)==null?void 0:d.sessionIndex;var h=g.yield;var k=en(0,{sessionIndex:e});if(!(k instanceof qi)){var l=new qi(oi);ri(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},Xv(b),f)))})}
;var gx=new Es("INNERTUBE_TRANSPORT_TOKEN");function hx(){}
w(hx,ew);hx.prototype.j=function(){return Zu};
hx.prototype.i=function(a){return kt(a,Ol)||void 0};
hx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(hx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ix(){}
w(ix,ew);ix.prototype.j=function(){return $u};
ix.prototype.i=function(a){return kt(a,Nl)||void 0};
ix.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(ix.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var jx=new Es("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function kx(a){this.H=a}
w(kx,ew);kx.prototype.j=function(){return Uu};
kx.prototype.i=function(a){return kt(a,Il)||kt(a,Jl)||kt(a,Hl)};
kx.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.H)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.H.i(b.clientParamIdentifier)}};
kx[Ds]=[jx];function lx(){}
w(lx,ew);lx.prototype.j=function(){return Wu};
lx.prototype.i=function(a){return kt(a,Gl)||void 0};
lx.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(lx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function mx(){}
w(mx,ew);mx.prototype.j=function(){return Xu};
mx.prototype.i=function(a){return kt(a,Ml)||void 0};
mx.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function nx(){}
w(nx,ew);nx.prototype.j=function(){return Yu};
nx.prototype.i=function(a){return kt(a,Ll)||void 0};
nx.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function ox(){}
w(ox,ew);ox.prototype.j=function(){return Vu};
ox.prototype.i=function(a){return kt(a,Kl)};
ox.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var px=new Es("FETCH_FN_TOKEN"),qx=new Es("PARSE_FN_TOKEN");function rx(a,b){var c=B.apply(2,arguments);a=a===void 0?0:a;T.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
w(rx,T);var sx=new Es("NETWORK_SLI_TOKEN");function tx(a,b,c){this.h=a;this.i=b;this.j=c}
tx.prototype.fetch=function(a,b,c){var d=this,e,f,g;return A(function(h){e=ux(d,a,b);g=(f=d.i)!=null?f:fetch;return h.return(g(e).then(function(k){return d.handleResponse(k,c)}).catch(function(k){cu(k);
if((c==null?0:c.ce)&&k instanceof rx&&k.errorType===1)return Promise.reject(k)}))})};
function ux(a,b,c){if(a.h){var d=ac(bc(5,mc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;R("wug_networking_gzip_request")&&(a=Sq(c));return new window.Request(b,a)}
tx.prototype.handleResponse=function(a,b){var c,d=(c=this.j)!=null?c:JSON.parse;c=a.text().then(function(e){if((b==null?0:b.ue)&&a.ok)return Rf(b.ue,e);e=e.replace(")]}'","");if((b==null?0:b.ce)&&e)try{var f=d(e)}catch(h){throw new rx(1,"JSON parsing failed after fetch");}var g;return(g=f)!=null?g:d(e)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.qh(),c=c.then(function(e){cu(new T("Error: API fetch failed",a.status,a.url,e));return Object.assign({},e,{errorMetadata:{status:a.status}})}));
return c};
tx[Ds]=[new Fs(sx),new Fs(px),new Fs(qx)];var vx=new Es("NETWORK_MANAGER_TOKEN");var wx;function xx(){var a,b,c;return A(function(d){if(d.h==1)return a=Ls().resolve(gx),a?d.yield(bx(a),2):(cu(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return cu(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.nh;return d.return(c)}cu(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function yx(){var a;return(a=P("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var zx=C.caches,Ax;function Bx(a){var b=a.indexOf(":");return b===-1?{qd:a}:{qd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Cx(){return A(function(a){if(Ax!==void 0)return a.return(Ax);Ax=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return za(d,2),d.yield(zx.open("test-only"),4);case 4:return d.yield(zx.delete("test-only"),5);case 5:d.h=3;d.o=0;break;case 2:if(c=Aa(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Ax)})}
function Dx(a){var b,c,d,e,f,g,h;A(function(k){if(k.h==1)return k.yield(Cx(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(zx.keys(),3)}c=k.i;d=z(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Bx(f),h=g.datasyncId,!h||a.includes(h)||b.push(zx.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function Ex(){var a,b,c,d,e,f,g;return A(function(h){if(h.h==1)return h.yield(Cx(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=zn("cache contains other");return h.yield(zx.keys(),3)}b=h.i;c=z(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Bx(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Fx(){try{return!!self.sessionStorage}catch(a){return!1}}
;function Gx(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Hx(a){if(Fx()){var b=Object.keys(window.sessionStorage);b=z(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Gx(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function Ix(){if(!Fx())return!1;var a=zn(),b=Object.keys(window.sessionStorage);b=z(b);for(var c=b.next();!c.done;c=b.next())if(c=Gx(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Jx(){xx().then(function(a){a&&(Fp(a),Dx(a),Iv(a),Hx(a))})}
function Kx(){var a=new Kr;Hj.pa(function(){var b,c,d,e,f;return A(function(g){switch(g.h){case 1:if(R("ytidb_clear_optimizations_killswitch")){g.D(2);break}b=zn("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Fp(h);Dx(h);Iv(h);Hx(h);return g.return()}c=Jv();d=Ix();return g.yield(Ex(),3);case 3:return e=g.i,g.yield(Gp(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.va()?Jx():a.h.add("publicytnetworkstatus-online",Jx,!0,void 0,void 0),g.h=0}})})}
;function Lx(){this.state=1;this.h=null}
p=Lx.prototype;p.initialize=function(a,b,c){if(a.program){var d,e=(d=a.interpreterUrl)!=null?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(d=jb(),f=new Ib(d?d.createScript(f):f)):f=null,d=f):d=null}else d=(f=a.interpreterScript)!=null?f:null;a.interpreterSafeUrl&&(e=vl(a.interpreterSafeUrl).toString());Mx(this,d,e,a.program,b,c)}else cu(Error("Cannot initialize botguard without program"))};
function Mx(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,cv(c,function(){window[g]?Nx(a,d,g,e):(a.state=3,ev(c),cu(new T("Unable to load Botguard","from "+c)))},f)):b?(f=Gg("SCRIPT"),b instanceof Ib?Kb(f,b):f.textContent=b,f.nonce=Hb(document),document.head.appendChild(f),document.head.removeChild(f),window[g]?Nx(a,d,g,e):(a.state=4,cu(new T("Unable to load Botguard from JS")))):cu(new T("Unable to load VM; no url or JS provided"))}
p.isLoading=function(){return this.state===2};
function Nx(a,b,c,d){a.state=5;try{var e=new tj({program:b,ke:c,Ae:{disable:!R("att_web_record_metrics"),Fa:"aGIf"}});e.af.then(function(){a.state=6;d&&d(b)});
a.Rc(e)}catch(f){a.state=7,f instanceof Error&&cu(f)}}
p.invoke=function(a){a=a===void 0?{}:a;return this.Uc()?this.Fd({cd:a}):null};
p.dispose=function(){this.Rc(null);this.state=8};
p.Uc=function(){return!!this.h};
p.Fd=function(a){return this.h.yd(a)};
p.Rc=function(a){tc(this.h);this.h=a};var Ox=[],Px=!1;function Qx(){if(!R("disable_biscotti_fetch_for_ad_blocker_detection")&&!R("disable_biscotti_fetch_entirely_for_all_web_clients")&&Fu()){var a=P("PLAYER_VARS",{});if(xg(a)!="1"&&!Gu(a)){var b=function(){Px=!0;"google_ad_status"in window?Xl("DCLKSTAT",1):Xl("DCLKSTAT",2)};
try{cv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Ox.push(Hj.pa(function(){if(!(Px||"google_ad_status"in window)){try{gv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Px=!0;Xl("DCLKSTAT",3)}},5E3))}}}
function Rx(){var a=Number(P("DCLKSTAT",0));return isNaN(a)?0:a}
;function Sx(){var a=F("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Tx(){Lx.apply(this,arguments)}
w(Tx,Lx);Tx.prototype.Rc=function(a){var b;(b=Sx())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.yd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Tx.prototype.Uc=function(){return!!Sx()};
Tx.prototype.Fd=function(a){return Sx().bgvmc(a)};function Ux(a){Vs.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.G},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.H},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.H},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(Ux,Vs);Ux.prototype.G=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Ux.prototype.u=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Ux.prototype.H=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
Ux.prototype.i=function(){this.h=new Map};function Vx(a){Vs.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.H},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.H},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.H},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
R("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(Vx,Vs);Vx.prototype.i=function(a,b){a(b==null?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Vx.prototype.h=function(a,b){a(b==null?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Vx.prototype.u=function(a,b){a(b==null?void 0:b.event)};
Vx.prototype.H=function(a,b){a(b==null?void 0:b.event)};function Wx(){this.o=new Ux;this.u=new Vx}
Wx.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.u.install(c)})};function Xx(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
Xx.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=uu(c===void 0?0:c)){a=this.client;d=new nu({trackingParams:d});var e=void 0;if(R("no_client_ve_attach_unless_shown")){var f=Dv(d,c);zv.set(f,!0);Ev(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Cv({cttAuthInfo:wu(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?Fv("visualElementGestured",f,d):a?Ut("visualElementGestured",d,a,f):qo("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Xx.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new nu({trackingParams:a}),b,c===void 0?0:c)};
Xx.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=uu(d);a||(a=(a=ru(d===void 0?0:d))?new nu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Cv({cttAuthInfo:wu(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?Fv("visualElementStateChanged",d,b):a?Ut("visualElementStateChanged",b,a,d):qo("visualElementStateChanged",b,d))}};
function Yx(a,b){if(b===void 0)for(var c=tu(),d=0;d<c.length;d++)c[d]!==void 0&&Yx(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Bv(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Zx(){Wx.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));R("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));R("web_log_cfg_cee_ks")||Bn($x)}
w(Zx,Wx);Zx.prototype.j=function(){qo("finalPayload",{csn:uu()})};
Zx.prototype.h=function(){hu(iu)};
Zx.prototype.i=function(){var a=Yx;Xx.h||(Xx.h=new Xx);a(Xx.h)};
function $x(){var a=P("CLIENT_EXPERIMENT_EVENTS");if(a){var b=ae();a=z(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&qo("genericClientExperimentEvent",{eventType:c});delete Wl.CLIENT_EXPERIMENT_EVENTS}}
;function ay(){}
function by(){var a=F("ytglobal.storage_");a||(a=new ay,D("ytglobal.storage_",a));return a}
ay.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(cy()):d.return()})};
function cy(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",ay);function oo(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
oo.prototype.Ea=function(a){this.handleError(a)};
oo.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":R("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":R("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":dy(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function dy(a,b){by().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:ey(c==null?void 0:c.usage),deviceStorageQuotaMbytes:ey(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function ey(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var fy={},gy=(fy["api.invalidparam"]=2,fy.auth=150,fy["drm.auth"]=150,fy["heartbeat.net"]=150,fy["heartbeat.servererror"]=150,fy["heartbeat.stop"]=150,fy["html5.unsupportedads"]=5,fy["fmt.noneavailable"]=5,fy["fmt.decode"]=5,fy["fmt.unplayable"]=5,fy["html5.missingapi"]=5,fy["html5.unsupportedlive"]=5,fy["drm.unavailable"]=5,fy["mrm.blocked"]=151,fy["embedder.identity.denied"]=152,fy);var hy=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function iy(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function jy(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=z(hy);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function ky(a,b,c,d){if(Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function ly(a){G.call(this);var b=this;this.api=a;this.X=this.u=!1;this.B=[];this.P={};this.j=[];this.i=[];this.Y=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.U=R("web_player_split_event_bus_iframe");this.o=P("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.G=function(c){a:if(!(b.o!=="*"&&c.origin!==b.o||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=c.source;
c=c.origin;d=d.id;c!=="null"&&(b.o=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.u){b.X=!0;b.u=!1;b.sendMessage("initialDelivery",my(b));b.sendMessage("onReady");e=z(b.B);for(d=e.next();!d.done;d=e.next())ny(b,d.value);b.B=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.Y&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.P[e]||e==="onReady"||
(c=oy(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.U?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.P[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&iy(e)){var f=d;if(Qa(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=jy(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=jy(g);break;case "loadPlaylist":case "cuePlaylist":g=ky(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);iy(e)&&py(b,my(b))}}}};
qy.addEventListener("message",this.G);if(a=P("WIDGET_ID"))this.sessionId=a;ry(this,"onReady",function(){b.u=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.Y=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?gy[c]||d:d;b.sendMessage("onError",Number(b.errorCode))}});
ry(this,"onVideoProgress",this.Ve.bind(this));ry(this,"onVolumeChange",this.We.bind(this));ry(this,"onApiChange",this.Oe.bind(this));ry(this,"onPlaybackQualityChange",this.Se.bind(this));ry(this,"onPlaybackRateChange",this.Te.bind(this));ry(this,"onStateChange",this.Ue.bind(this));ry(this,"onWebglSettingsChanged",this.Xe.bind(this));ry(this,"onCaptionsTrackListChanged",this.Pe.bind(this));ry(this,"captionssettingschanged",this.Qe.bind(this))}
w(ly,G);function py(a,b){a.sendMessage("infoDelivery",b)}
p=ly.prototype;p.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.X?ny(this,a):this.B.push(a)};
function oy(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function ry(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function my(a){if(!a.api)return null;var b=a.api.getApiInterface();Sb(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
p.Ue=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());py(this,a)};
p.Se=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());py(this,a)};
p.Te=function(a){py(this,{playbackRate:a})};
p.Oe=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
p.We=function(){py(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
p.Ve=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());py(this,a)};
p.Xe=function(){py(this,{sphericalProperties:this.api.getSphericalProperties()})};
p.Pe=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};py(this,a)}};
p.Qe=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};py(this,a)}};
function ny(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){cu(d)}}}
p.aa=function(){G.prototype.aa.call(this);qy.removeEventListener("message",this.G);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.U?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var qy=window;function sy(a,b,c){G.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=R("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.da){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=ty(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=uy(g,f))&&vy(d,g,f))}}}}}};
wy.addEventListener("message",this.i);vy(this,"RECEIVING")}
w(sy,G);p=sy.prototype;p.addListener=function(a,b){if(!(a in this.h)){var c=this.Re.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
p.Re=function(a,b){this.da||vy(this,a,xy(a,b))};
p.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
p.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
p.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function ty(a,b){switch(a){case "loadVideoById":return[jy(b)];case "cueVideoById":return[jy(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[ky(b)];case "cuePlaylist":return[ky(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function uy(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function xy(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function vy(a,b,c){a.da||(b={id:a.id,command:b},c&&(b.data=c),yy.postMessage(JSON.stringify(b),a.origin))}
p.aa=function(){wy.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);G.prototype.aa.call(this)};
var wy=window,yy=window.parent;var zy=new Tx;function Ay(){return zy.Uc()}
function By(a){a=a===void 0?{}:a;return zy.invoke(a)}
;function Cy(a,b,c,d,e){G.call(this);var f=this;this.B=b;this.webPlayerContextConfig=d;this.xc=e;this.Oa=!1;this.api={};this.ia=this.u=null;this.U=new M;this.h={};this.Y=this.oa=this.elementId=this.Pa=this.config=null;this.X=!1;this.j=this.G=null;this.Da={};this.yc=["onReady"];this.lastError=null;this.mb=NaN;this.P={};this.ga=0;this.i=this.o=a;vc(this,this.U);Dy(this);c?this.ga=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(Ey(this),Fy(this))}
w(Cy,G);p=Cy.prototype;p.getId=function(){return this.B};
p.loadNewVideoConfig=function(a){if(!this.da){this.ga&&(clearTimeout(this.ga),this.ga=0);var b=a||{};b instanceof Tu||(b=new Tu(b));this.config=b;this.setConfig(a);Fy(this);this.isReady()&&Gy(this)}};
function Ey(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.B,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.B:a.config.attrs.id=a.B);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
p.setConfig=function(a){this.Pa=a;this.config=Hy(a);Ey(this);if(!this.oa){var b;this.oa=Iy(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Bj(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Bj(Number(a)||a))};
function Gy(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Jy(a){var b=!0,c=Ky(a);c&&a.config&&(b=c.dataset.version===Ly(a));return b&&!!F("yt.player.Application.create")}
function Fy(a){if(!a.da&&!a.X){var b=Jy(a);if(b&&(Ky(a)?"html5":null)==="html5")a.Y="html5",a.isReady()||My(a);else if(Ny(a),a.Y="html5",b&&a.j&&a.o)a.o.appendChild(a.j),My(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=Oy(a,"player_bootstrap_method")?F("yt.player.Application.createAlternate")||F("yt.player.Application.create"):F("yt.player.Application.create");var e=a.config?Hy(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.xc);My(a)};
a.X=!0;b?a.G():(cv(Ly(a),a.G),(b=Py(a))&&jv(b||""),Qy(a)&&!c&&D("yt.player.Application.create",null))}}}
function Ky(a){var b=Fg(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function My(a){if(!a.da){var b=Ky(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.X=!1;if(!Oy(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}Ry(a)}else a.mb=setTimeout(function(){My(a)},50)}}
function Ry(a){Dy(a);a.Oa=!0;var b=Ky(a);if(b){a.u=Sy(a,b,"addEventListener");a.ia=Sy(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Sy(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);Gy(a);a.oa&&a.oa(a.api);a.U.lb("onReady",a.api)}
function Sy(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new T("PlayerProxy error in method call",{error:f,method:c,playerId:a.B}),e.level="WARNING",e;}}}
function Dy(a){a.Oa=!1;if(a.ia)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ia(b,a.h[b]);for(var c in a.P)a.P.hasOwnProperty(c)&&clearTimeout(Number(c));a.P={};a.u=null;a.ia=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Pa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
p.isReady=function(){return this.Oa};
p.addEventListener=function(a,b){var c=this,d=Iy(this,b);d&&(Mb(this.yc,a)>=0||this.h[a]||(b=Ty(this,a),this.u&&this.u(a,b)),this.U.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
p.removeEventListener=function(a,b){this.da||(b=Iy(this,b))&&this.U.unsubscribe(a,b)};
function Iy(a,b){var c=b;if(typeof b==="string"){if(a.Da[b])return a.Da[b];c=function(){var d=B.apply(0,arguments),e=F(b);if(e)try{e.apply(C,d)}catch(f){throw d=new T("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Da[b]=c}return c?c:null}
function Ty(a,b){function c(d){function e(){if(!a.da)try{a.U.lb(b,d!=null?d:void 0)}catch(h){var g=new T("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.B,data:d,originalStack:h.stack,componentStack:h.Td});g.level="WARNING";throw g;}}
if(Oy(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.P,h=String(f);h in g&&delete g[h]},0);
wg(a.P,String(f))}}
return a.h[b]=c}
p.getPlayerType=function(){return this.Y||(Ky(this)?"html5":null)};
p.getLastError=function(){return this.lastError};
function Ny(a){a.cancel();Dy(a);a.Y=null;a.config&&(a.config.loaded=!1);var b=Ky(a);b&&(Jy(a)||!Qy(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
p.cancel=function(){this.G&&gv(Ly(this),this.G);clearTimeout(this.mb);this.X=!1};
p.aa=function(){Ny(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new T("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Da=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Pa=this.config=this.api=null;delete this.o;delete this.i;G.prototype.aa.call(this)};
function Qy(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function Ly(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Py(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Oy(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function Hy(a){for(var b={},c=z(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?zg(e):e}return b}
;var Uy={},Vy="player_uid_"+(Math.random()*1E9>>>0);function Wy(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Fg(c):c;var e=Vy+"_"+Ra(c),f=Uy[e];if(f&&d)return Xy(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new Cy(c,e,a,b,void 0);Uy[e]=f;f.addOnDisposeCallback(function(){delete Uy[f.getId()]});
return f.api}
function Xy(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Yy=null,Zy=null;
function $y(){Ww();var a=on(),b=rn(119),c=window.devicePixelRatio>1;if(document.body&&Pj(document.body,"exp-invert-logo"))if(c&&!Pj(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Pj(d,"inverted-hdpi")){var e=Nj(d);Oj(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Pj(document.body,"inverted-hdpi")&&Qj();if(b!=c){b="f"+(Math.floor(119/31)+1);d=sn(b)||0;d=c?d|67108864:d&-67108865;d===0?delete ln[b]:(c=d.toString(16),ln[b]=c.toString());
c=!0;R("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in ln)ln.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(ln[f])));var f=d.join("&");gn(b,f,63072E3,a.i,c)}}
function az(){bz()}
function cz(){Vw("ep_init_pr");bz()}
function bz(){var a=Yy.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function dz(){Yy&&Yy.sendAbandonmentPing&&Yy.sendAbandonmentPing();P("PL_ATT")&&zy.dispose();for(var a=Hj,b=0,c=Ox.length;b<c;b++)a.qa(Ox[b]);Ox.length=0;ev("//static.doubleclick.net/instream/ad_status.js");Px=!1;Xl("DCLKSTAT",0);uc(Zy);Yy&&(Yy.removeEventListener("onVideoDataChange",az),Yy.destroy())}
;D("yt.setConfig",Xl);D("yt.config.set",Xl);D("yt.setMsg",bv);D("yt.msgs.set",bv);D("yt.logging.errors.log",bu);
D("writeEmbed",function(){var a=P("PLAYER_CONFIG");if(!a){var b=P("PLAYER_VARS");b&&(a={args:b})}Nv(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=P("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Rw("embed",["ol"]);c=yx();if(!c.serializedForcedExperimentIds){var d=km(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)&&Rw("watch",["pbs","pbu","pbp"]);Yy=Wy(a,c);Yy.addEventListener("onVideoDataChange",az);Yy.addEventListener("onReady",cz);a=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?Zy=new ly(Yy):P("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(Zy=new sy(Yy,a,b));Qx();R("ytidb_create_logger_embed_killswitch")||no();a={};Zx.h||(Zx.h=new Zx);Zx.h.install((a.flush_logs={callback:function(){Ht()}},a));
$r();R("ytidb_clear_embedded_player")&&Hj.pa(function(){var f,g;if(!wx){var h=Ls();Hs(h,{qc:vx,Cd:tx});var k={bd:{feedbackEndpoint:$v(lx),modifyChannelNotificationPreferenceEndpoint:$v(mx),playlistEditEndpoint:$v(nx),shareEntityEndpoint:$v(kx),subscribeEndpoint:$v(hx),unsubscribeEndpoint:$v(ix),webPlayerShareEntityServiceEndpoint:$v(ox)}},l=Wv(),m={};l&&(m.client_location=l);f===void 0&&(f=dn());g===void 0&&(g=h.resolve(vx));ax(k,g,f,m);Hs(h,{qc:gx,Dd:$w.h});wx=h.resolve(gx)}Kx()})});
D("yt.abuse.player.botguardInitialized",F("yt.abuse.player.botguardInitialized")||Ay);D("yt.abuse.player.invokeBotguard",F("yt.abuse.player.invokeBotguard")||By);D("yt.abuse.dclkstatus.checkDclkStatus",F("yt.abuse.dclkstatus.checkDclkStatus")||Rx);D("yt.player.exports.navigate",F("yt.player.exports.navigate")||Mv);D("yt.util.activity.init",F("yt.util.activity.init")||ps);D("yt.util.activity.getTimeSinceActive",F("yt.util.activity.getTimeSinceActive")||ss);
D("yt.util.activity.setTimestamp",F("yt.util.activity.setTimestamp")||qs);window.addEventListener("load",am(function(){$y()}));
window.addEventListener("pageshow",am(function(a){a.persisted||$y()}));
window.addEventListener("pagehide",am(function(a){R("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?dz():a.persisted||dz()}));
window.onerror=function(a,b,c,d,e){var f;b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=Yl("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new T(h),e.name="UnhandledWindowError",e.message=
h,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!R("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.Td)f||(f={}),f.componentStack=Vt(m)}f&&fu(e,f);g?bu(e):cu(e)}};
Gi=du;window.addEventListener("unhandledrejection",function(a){du(a.reason)});
Nb(P("ERRORS")||[],function(a){bu.apply(null,a)});
Xl("ERRORS",[]);}).call(this);
