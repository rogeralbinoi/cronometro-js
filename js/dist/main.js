/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Cronometro = function () {
	    function Cronometro($el, $input) {
	        _classCallCheck(this, Cronometro);

	        this.$el = $el;
	        this.min = 0;
	        this.sec = 0;
	        this.$input = $input;

	        var duration = 1000,
	            end = +new Date() + duration;
	        var that = this;
	        that.render();
	        function step() {
	            var current = +new Date();
	            if (current - end < 60) {} else {
	                end = +new Date() + duration;
	                that.nextSec();
	                that.render();
	            }

	            setTimeout(step);
	        }
	        setTimeout(step);
	    }

	    _createClass(Cronometro, [{
	        key: 'nextSec',
	        value: function nextSec() {
	            if (this.sec >= 59) {
	                this.min += 1;
	                this.sec = 0;
	                return;
	            }
	            this.sec += 1;
	            return;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var min = String(this.min).length > 1 ? this.min : '0' + this.min;
	            var sec = String(this.sec).length > 1 ? this.sec : '0' + this.sec;
	            this.$el.html(min + ':' + sec);
	            this.$input.val(min + ':' + sec);
	        }
	    }]);

	    return Cronometro;
	}();

	window.Cronometro = Cronometro;

/***/ }
/******/ ]);