webpackJsonp([6,16],{329:function(n,e,t){var r=t(341);"string"===typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0};o.transform=void 0;t(7)(r,o);r.locals&&(n.exports=r.locals)},341:function(n,e,t){e=n.exports=t(6)(void 0),e.push([n.i,"@-moz-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-o-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.songcard-page {\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n}\n.songcard {\n  float: left;\n  width: 145px;\n  height: 200px;\n  margin-right: 20px;\n  margin-bottom: 30px;\n  overflow: hidden;\n}\n.songcard .album-img {\n  width: 100%;\n  height: 145px;\n  margin-bottom: 10px;\n}\n.songcard img {\n  width: 100%;\n  height: 100%;\n}\n.songcard .title {\n  height: 16px;\n  line-height: 16px;\n  font-size: 16px;\n  color: #000;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 10px;\n}\n.songcard .creator {\n  font-size: 12px;\n  color: #a4a4a5;\n  text-align: left;\n}\n",""])},56:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function a(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),t.d(e,"default",function(){return m});var i=t(0),l=t.n(i),c=t(8),s=t(329),f=(t.n(s),function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}()),p=function(n){var e=n.playlist,t=e.creator,r=e.id,o=e.coverImgUrl,a=e.name;return l.a.createElement("div",{className:"songcard"},l.a.createElement("div",{className:"album-img"},l.a.createElement(c.a,{to:{pathname:"/playlistinfo/"+r}},l.a.createElement("img",{src:o,alt:"playlist-cover"}))),l.a.createElement("p",{className:"title"},a),l.a.createElement("p",{className:"creator"},"by ",t.nickname))},m=function(n){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,n),f(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var n=this.props.data;return l.a.createElement("div",{className:"songcard-page"},n.map(function(n){return l.a.createElement(p,{key:n.id,playlist:n})}))}}]),e}(i.Component)}});
//# sourceMappingURL=6.d15dbff0.chunk.js.map