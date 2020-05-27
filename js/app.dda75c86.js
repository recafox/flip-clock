(function(t){function e(e){for(var n,o,c=e[0],s=e[1],l=e[2],p=0,u=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);f&&f(e);while(u.length)u.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,c=1;c<r.length;c++){var s=r[c];0!==i[s]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},i={app:0},a=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/flip-clock/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=s;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("flip-clock")],1)},a=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"FlipClock"},[r("div",{staticClass:"card-wrapper"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card__number"},[r("flipper",{ref:"flipperDay1"}),r("flipper",{ref:"flipperDay2"})],1),t._m(0)]),r("div",{staticClass:"card"},[r("div",{staticClass:"card__number"},[r("flipper",{ref:"flipperHour1"}),r("flipper",{ref:"flipperHour2"})],1),t._m(1)])]),r("div",{staticClass:"card-wrapper"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card__number"},[r("flipper",{ref:"flipperMinute1"}),r("flipper",{ref:"flipperMinute2"})],1),t._m(2)]),r("div",{staticClass:"card"},[r("div",{staticClass:"card__number"},[r("flipper",{ref:"flipperSecond1"}),r("flipper",{ref:"flipperSecond2"})],1),t._m(3)])])])},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card__text"},[r("p",[t._v("Days")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card__text"},[r("p",[t._v("Hours")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card__text"},[r("p",[t._v("Minutes")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card__text"},[r("p",[t._v("Seconds")])])}],s=(r("99af"),r("a623"),r("d3b7"),r("ac1f"),r("25f0"),r("1276"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flip down",class:{go:!0===t.isFlipping}},[r("div",{staticClass:"digital front",class:t._textClass(t.frontTextFromData)}),r("div",{staticClass:"digital back",class:t._textClass(t.backTextFromData)})])}),l=[],f={name:"Flipper",props:["frontText","backText","duration"],data:function(){return{isFlipping:!1,frontTextFromData:1,backTextFromData:0}},methods:{_textClass:function(t){return t?"number".concat(t):"number0"},setFront:function(t){var e=this;e.frontTextFromData=t},setBack:function(t){var e=this;e.backTextFromData=t},flipDown:function(t,e){var r=this;if(r.isFlipping)return!1;r.isFlipping=!0,r.frontTextFromData=t,r.backTextFromData=e,setTimeout((function(){r.isFlipping=!1,r.frontTextFromData=e}),600)}},mounted:function(){var t=this;t.frontTextFromData=t.frontText,t.backTextFromData=t.backText}},p=f,u=(r("8283"),r("2877")),d=Object(u["a"])(p,s,l,!1,null,null,null),v=d.exports,m={name:"FlipClock",components:{Flipper:v},data:function(){return{timer:null,flipObjs:[],now:259200}},methods:{init:function(){for(var t=this,e=t.formatTime(t.now),r=0;r<t.flipObjs.length;r++)t.flipObjs[r].setFront(e[r])},formatTime:function(t){var e=this,r=86400,n=3600,i=60,a=e.padLeftZero(parseInt(t/r).toString(),10),o=t%r,c=e.padLeftZero(parseInt(o/n).toString(),10),s=t%(a*r+c*n),l=e.padLeftZero(parseInt(s/i).toString(),10),f=e.padLeftZero((t%(a*r+c*n+l*i)).toString(),10);return"".concat(a).concat(c).concat(l).concat(f)},run:function(){var t=this;t.timer=setInterval((function(){for(var e=t.formatTime(t.now),r=t.formatTime(t.now-1),n=0;n<t.flipObjs.length;n++)e[n]!==r[n]&&t.flipObjs[n].flipDown(e[n],r[n]);t.now-=1,r.split("").every((function(t){return t<=0}))&&clearInterval(t.timer)}),1e3)},padLeftZero:function(t){return("00"+t).substr(t.length)}},mounted:function(){var t=this;t.flipObjs=[t.$refs.flipperDay1,t.$refs.flipperDay2,t.$refs.flipperHour1,t.$refs.flipperHour2,t.$refs.flipperMinute1,t.$refs.flipperMinute2,t.$refs.flipperSecond1,t.$refs.flipperSecond2],t.init(),t.run()}},b=m,_=(r("c0b2"),Object(u["a"])(b,o,c,!1,null,null,null)),h=_.exports,x={name:"App",components:{FlipClock:h}},g=x,C=(r("5c0b"),Object(u["a"])(g,i,a,!1,null,null,null)),y=C.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),i=r.n(n);i.a},8283:function(t,e,r){"use strict";var n=r("aabc"),i=r.n(n);i.a},"9c0c":function(t,e,r){},aabc:function(t,e,r){},c0b2:function(t,e,r){"use strict";var n=r("d78f"),i=r.n(n);i.a},d78f:function(t,e,r){}});
//# sourceMappingURL=app.dda75c86.js.map