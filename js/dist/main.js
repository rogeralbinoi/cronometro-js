!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(e){function i(){var t=+new Date;t-s<60||(s=+new Date+r,o.nextSec(),o.render()),setTimeout(i)}n(this,t),this.$el=e.el?e.el:void 0,this.$input=!!e.input&&e.input,this.min=0,this.sec=0;var r=1e3,s=+new Date+r,o=this;o.render(),setTimeout(i)}return i(t,[{key:"nextSec",value:function(){return this.sec>=59?(this.min+=1,void(this.sec=0)):void(this.sec+=1)}},{key:"render",value:function(){var t=String(this.min).length>1?this.min:"0"+this.min,e=String(this.sec).length>1?this.sec:"0"+this.sec;this.$el&&this.$el.html(t+":"+e),this.$input&&this.$input.val(t+":"+e)}}]),t}();window.Cronometro=r}]);