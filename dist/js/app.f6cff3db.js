(function(t){function e(e){for(var n,i,c=e[0],s=e[1],u=e[2],d=0,p=[];d<c.length;d++)i=c[d],o[i]&&p.push(o[i][0]),o[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,c=1;c<r.length;c++){var s=r[c];0!==o[s]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/barcode_editor/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"0a4c":function(t,e,r){"use strict";var n=r("3a56"),o=r.n(n);o.a},"3a56":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"App",attrs:{id:"app"}},[r("div",{staticClass:"editor"},[r("div",{staticClass:"code"},[r("label",{attrs:{for:"code"}},[t._v(" Code ")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.code,expression:"code",modifiers:{trim:!0}}],staticClass:"value",attrs:{id:"code",placeholder:"Enter up to 19 digits",type:"text",maxlength:"19"},domProps:{value:t.code},on:{keypress:t.rejectNonDigits,paste:function(e){return e.preventDefault(),t.validateOnPaste(e)},input:function(e){e.target.composing||(t.code=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),r("div",{staticClass:"checksum"},[r("label",[t._v(" CS ")]),r("div",{staticClass:"value",domProps:{textContent:t._s(t.checksum)}})]),r("div",{staticClass:"colors"},[r("label",{attrs:{for:"primary"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.colorPrimary,expression:"colorPrimary"}],attrs:{id:"primary",type:"color"},domProps:{value:t.colorPrimary},on:{input:function(e){e.target.composing||(t.colorPrimary=e.target.value)}}}),t._v(" Primary\n      ")]),r("label",{attrs:{for:"secondary"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.colorSecondary,expression:"colorSecondary"}],attrs:{id:"secondary",type:"color"},domProps:{value:t.colorSecondary},on:{input:function(e){e.target.composing||(t.colorSecondary=e.target.value)}}}),t._v(" Secondary\n      ")])])]),r("Barcode",{style:{"--color-primary":t.colorPrimary,"--color-secondary":t.colorSecondary},attrs:{digits:t.digitsArray,checksum:t.checksum}}),r("a",{staticClass:"link-to-github",attrs:{href:"https://github.com/vilinicz/barcode_editor"}},[t._v("\n    Source on Github\n  ")])],1)},a=[],i=(r("4917"),r("c5f6"),r("a481"),r("774e")),c=r.n(i),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Barcode"},[t.digits.length?[t._l(t.digits,function(e,n){return r("div",{key:e+"_"+n,staticClass:"bar",style:t.barStyle(e)},[r("span",{staticClass:"value"},[t._v(t._s(e))])])}),r("div",{staticClass:"bar checksum",style:t.barStyle(t.checksum)},[r("span",{staticClass:"value"},[t._v(t._s(t.checksum))])])]:r("div",{staticClass:"hint"},[t._v("\n    No data for Barcode\n  ")])],2)},u=[],l=(r("6762"),r("2fdb"),{props:{digits:{type:Array,default:function(){return[]}},checksum:{type:Number,default:null}},methods:{barStyle:function(t){var e,r;return e=t<4?4:t<8?10:17,r=[0,4,8].includes(t)?4:[1,5,9].includes(t)?8:[2,6].includes(t)?12:16,{height:"".concat(5*r,"%"),width:"".concat(e,"%")}}}}),d=l,p=(r("0a4c"),r("2877")),f=Object(p["a"])(d,s,u,!1,null,"74cee7e8",null),v=f.exports,m={name:"App",components:{Barcode:v},data:function(){return{code:"0123456789",colorPrimary:"#409EFF",colorSecondary:"#E6A23C"}},computed:{digitsArray:function(){return c()(String(this.code.replace(/\s/g,"")),Number)},checksum:function(){if(!this.code)return null;var t=this.digitsArray.filter(function(t,e){return e%2!==0}).reduce(function(t,e){return t+e},0),e=this.digitsArray.filter(function(t,e){return e%2===0}).reduce(function(t,e){return t+e},0),r=(t+3*e)%10;return 0===r?0:10-r}},methods:{rejectNonDigits:function(t){t.key.match(/\d/)||t.preventDefault()},validateOnPaste:function(t){var e=t.clipboardData.getData("text");e.match(/\d/)&&(this.code=e)}}},y=m,h=(r("5c0b"),Object(p["a"])(y,o,a,!1,null,null,null)),b=h.exports;r("6861");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var n=r("5e27"),o=r.n(n);o.a},"5e27":function(t,e,r){},6861:function(t,e,r){}});
//# sourceMappingURL=app.f6cff3db.js.map