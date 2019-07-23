(function(e){function t(t){for(var n,c,i=t[0],s=t[1],u=t[2],d=0,p=[];d<i.length;d++)c=i[d],o[c]&&p.push(o[c][0]),o[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==o[s]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={app:0},a=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/barcode_editor/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0a4c":function(e,t,r){"use strict";var n=r("3a56"),o=r.n(n);o.a},"3a56":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"App",attrs:{id:"app"}},[r("div",{staticClass:"editor"},[r("div",{staticClass:"code"},[r("label",{attrs:{for:"code"}},[e._v(" Code ")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.code,expression:"code",modifiers:{trim:!0}}],staticClass:"value",attrs:{id:"code",placeholder:"Enter up to 19 digits",type:"text",maxlength:"19"},domProps:{value:e.code},on:{keypress:e.rejectNonDigits,paste:function(t){return t.preventDefault(),e.validateOnPaste(t)},input:function(t){t.target.composing||(e.code=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"checksum"},[r("label",[e._v(" CS ")]),r("div",{staticClass:"value",domProps:{textContent:e._s(e.checksum)}})]),r("div",{staticClass:"colors"},[r("label",{attrs:{for:"primary"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.colorPrimary,expression:"colorPrimary"}],attrs:{id:"primary",type:"color"},domProps:{value:e.colorPrimary},on:{input:function(t){t.target.composing||(e.colorPrimary=t.target.value)}}}),e._v(" Primary\n      ")]),r("label",{attrs:{for:"secondary"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.colorSecondary,expression:"colorSecondary"}],attrs:{id:"secondary",type:"color"},domProps:{value:e.colorSecondary},on:{input:function(t){t.target.composing||(e.colorSecondary=t.target.value)}}}),e._v(" Secondary\n      ")])])]),r("Barcode",{style:{"--color-primary":e.colorPrimary,"--color-secondary":e.colorSecondary},attrs:{digits:e.digitsArray,checksum:e.checksum}})],1)},a=[],c=(r("4917"),r("c5f6"),r("a481"),r("774e")),i=r.n(c),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Barcode"},[e.digits.length?[e._l(e.digits,function(t,n){return r("div",{key:t+"_"+n,staticClass:"bar",style:e.barStyle(t)},[r("span",{staticClass:"value"},[e._v(e._s(t))])])}),r("div",{staticClass:"bar checksum",style:e.barStyle(e.checksum)},[r("span",{staticClass:"value"},[e._v(e._s(e.checksum))])])]:r("div",{staticClass:"hint"},[e._v("\n    No data for Barcode\n  ")])],2)},u=[],l=(r("6762"),r("2fdb"),{props:{digits:{type:Array,default:function(){return[]}},checksum:{type:Number,default:null}},methods:{barStyle:function(e){var t,r;return t=e<4?4:e<8?10:17,r=[0,4,8].includes(e)?4:[1,5,9].includes(e)?8:[2,6].includes(e)?12:16,{height:"".concat(5*r,"%"),width:"".concat(t,"%")}}}}),d=l,p=(r("0a4c"),r("2877")),f=Object(p["a"])(d,s,u,!1,null,"74cee7e8",null),v=f.exports,m={name:"App",components:{Barcode:v},data:function(){return{code:"0123456789",colorPrimary:"#409EFF",colorSecondary:"#E6A23C"}},computed:{digitsArray:function(){return i()(String(this.code.replace(/\s/g,"")),Number)},checksum:function(){if(!this.code)return null;var e=this.digitsArray.filter(function(e,t){return t%2!==0}).reduce(function(e,t){return e+t},0),t=this.digitsArray.filter(function(e,t){return t%2===0}).reduce(function(e,t){return e+t},0),r=(e+3*t)%10;return 0===r?0:10-r}},methods:{rejectNonDigits:function(e){e.key.match(/\d/)||e.preventDefault()},validateOnPaste:function(e){var t=e.clipboardData.getData("text");t.match(/\d/)&&(this.code=t)}}},y=m,h=(r("5c0b"),Object(p["a"])(y,o,a,!1,null,null,null)),g=h.exports;r("6861");n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(g)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("5e27"),o=r.n(n);o.a},"5e27":function(e,t,r){},6861:function(e,t,r){}});
//# sourceMappingURL=app.0b8bbe30.js.map