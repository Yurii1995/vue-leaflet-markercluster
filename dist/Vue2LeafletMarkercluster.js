(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("babel-runtime/core-js/object/keys"),require("leaflet"),require("leaflet.markercluster")):"function"==typeof define&&define.amd?define(["babel-runtime/core-js/object/keys","leaflet","leaflet.markercluster"],t):"object"==typeof exports?exports.Vue2LeafletMarkercluster=t(require("babel-runtime/core-js/object/keys"),require("leaflet"),require("leaflet.markercluster")):e.Vue2LeafletMarkercluster=t(e["babel-runtime/core-js/object/keys"],e.leaflet,e["leaflet.markercluster"])})(this,function(e,t,r){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=9)}([function(e,t,r){var n=r(4)(r(1),r(5),null,null);e.exports=n.exports},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(7),u=n(o);r(8);var a=r(3),i=n(a),c=r(2),s=n(c),f={options:{type:Object,default:function(){return{}}}};t.default={props:f,data:function(){return{ready:!1}},mounted:function(){this.mapObject=u.default.markerClusterGroup(this.options),u.default.DomEvent.on(this.mapObject,this.$listeners),(0,i.default)(this,this.mapObject,f),this.ready=!0,this.parentContainer=(0,s.default)(this.$parent),this.parentContainer.addLayer(this)},beforeDestroy:function(){this.parentContainer.removeLayer(this)},methods:{addLayer:function(e,t){t||this.mapObject.addLayer(e.mapObject)},removeLayer:function(e,t){t||this.mapObject.removeLayer(e.mapObject)}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=!1;!t;)void 0==e.mapObject?e=e.$parent:t=!0;return e}},function(e,t,r){"use strict";function n(e){return e.charAt(0).toUpperCase()+e.slice(1)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(6),u=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=function(e,t,r,o){for(var a=(0,u.default)(r),i=0;i<a.length;i++)(function(){var o=a[i],u="set"+n(o),c=r[o].type===Object||r[o].type===Array||Array.isArray(r[o].type);r[o].custom?e.$watch(o,function(t,r){e[u](t,r)},{deep:c}):"setOptions"==u?e.$watch(o,function(e,r){L.setOptions(t,e)},{deep:c}):e.$watch(o,function(e,r){t[u](e)},{deep:c})})()}},function(e,t){e.exports=function(e,t,r,n){var o,u=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,u=e.default);var i="function"==typeof u?u.options:u;if(t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),r&&(i._scopeId=r),n){var c=i.computed||(i.computed={});Object.keys(n).forEach(function(e){var t=n[e];c[e]=function(){return t}})}return{esModule:o,exports:u,options:i}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticStyle:{display:"none"}},[e.ready?e._t("default"):e._e()],2)},staticRenderFns:[]}},function(e,t){e.exports=require("babel-runtime/core-js/object/keys")},function(e,t){e.exports=require("leaflet")},function(e,t){e.exports=require("leaflet.markercluster")},function(e,t,r){e.exports=r(0)}])});
//# sourceMappingURL=Vue2LeafletMarkercluster.js.map