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
	    _createClass(Cronometro, null, [{
	        key: 'getHoursFromSeconds',
	        value: function getHoursFromSeconds(seconds) {
	            var secondsPerHours = 3600;
	            return parseInt(seconds / secondsPerHours);
	        }
	    }, {
	        key: 'getMinutesFromSeconds',
	        value: function getMinutesFromSeconds(seconds) {
	            var secondsPerMinutes = 60;
	            return parseInt(seconds / secondsPerMinutes);
	        }
	    }, {
	        key: 'getFormatedHours',
	        value: function getFormatedHours(seconds) {
	            var secondsPerMinutes = 60;
	            var secondsPerHours = 3600;
	            var hours, minutes, seconds;
	            hours = Cronometro.getHoursFromSeconds(seconds);
	            seconds -= hours * secondsPerHours;
	            minutes = Cronometro.getMinutesFromSeconds(seconds);
	            seconds -= minutes * secondsPerMinutes;
	            return {
	                hours: hours,
	                minutes: minutes,
	                seconds: seconds
	            };
	        }
	    }]);

	    function Cronometro(obj) {
	        _classCallCheck(this, Cronometro);

	        this.$el = obj.el ? obj.el : undefined;
	        this.$input = obj.input ? obj.input : false;
	        this.running = false;
	        this.seconds = 0;
	        this.render();
	    }

	    _createClass(Cronometro, [{
	        key: 'play',
	        value: function play() {
	            var _this = this;

	            if (this.running !== true) {
	                this.interval = setInterval(function () {
	                    _this.nextSec();
	                    _this.render();
	                    _this.running = true;
	                }, 1000);
	            }
	        }
	    }, {
	        key: 'stop',
	        value: function stop() {
	            this.pause();
	            this.seconds = 0;
	            this.render();
	        }
	    }, {
	        key: 'pause',
	        value: function pause() {
	            if (this.running === true) {
	                clearInterval(this.interval);
	                this.running = false;
	            }
	        }
	    }, {
	        key: 'nextSec',
	        value: function nextSec() {
	            this.seconds += 1;
	            return;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var formatedHours = Cronometro.getFormatedHours(this.seconds);
	            var hours = Cronometro.getFormatedTime(formatedHours.hours);
	            var minutes = Cronometro.getFormatedTime(formatedHours.minutes);
	            var seconds = Cronometro.getFormatedTime(formatedHours.seconds);
	            if (this.$el) {
	                this.$el.html(hours + ':' + minutes + ':' + seconds);
	            }
	            if (this.$input) {
	                this.$input.val(hours + ':' + minutes + ':' + seconds);
	            }
	        }
	    }], [{
	        key: 'getFormatedTime',
	        value: function getFormatedTime(time) {
	            return String(time).length > 1 ? time : '0' + time;
	        }
	    }]);

	    return Cronometro;
	}();

	window.Cronometro = Cronometro;

/***/ }
/******/ ]);