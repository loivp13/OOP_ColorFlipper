parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}var r=function(){function t(){var n=this;e(this,t),this.appElement=document.querySelector(".App"),this.buttonElement=document.querySelector(".button"),this.buttonElement.addEventListener("click",function(){n.setNewBackgroundColor()}),this.generatedColorTextElement=document.querySelector(".text_generatedColor")}return n(t,[{key:"setNewBackgroundColor",value:function(){var e="rgba(".concat(this.generateNewBackground(),", 1)");this.appElement.style.backgroundColor=e,this.generatedColorTextElement.style.backgroundColor=e,this.generatedColorTextElement.innerHTML=e,this.buttonElement.style.backgroundColor="rgba(".concat(this.generateNewBackground(),", 1)")}},{key:"generateNewBackground",value:function(){console.log("generating");for(var e=[],t=0;t<3;t++)e.push(Math.round(255*Math.random()));return e.toString()}}]),t}(),o=new r;Object.freeze(o);
},{}]},{},["d6sW"], null)
//# sourceMappingURL=/main.1b5727e6.js.map