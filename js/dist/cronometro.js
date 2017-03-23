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

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

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
	            var hours, minutes;
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
	        if (obj.autoplay) {
	            this.play();
	        } else {
	            this.render();
	        }
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
	        key: 'reset_and_play',
	        value: function reset_and_play() {
	            this.stop();
	            this.play();
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
	            var _this2 = this;

	            var formatedHours = Cronometro.getFormatedHours(this.seconds),
	                hours = Cronometro.getFormatedTime(formatedHours.hours),
	                minutes = Cronometro.getFormatedTime(formatedHours.minutes),
	                seconds = Cronometro.getFormatedTime(formatedHours.seconds);

	            function if_input_then(element, callback) {
	                if (element === 'INPUT') {
	                    callback.yes();
	                } else {
	                    callback.no();
	                }
	            }

	            if (this.$el) {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = this.$el[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var element = _step.value;

	                        element.innerHTML = hours + ':' + minutes + ':' + seconds;
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            }

	            if (this.$input) {
	                var test_node_collection = function test_node_collection() {
	                    var _iteratorNormalCompletion2 = true;
	                    var _didIteratorError2 = false;
	                    var _iteratorError2 = undefined;

	                    try {
	                        var _loop = function _loop() {
	                            var element = _step2.value;

	                            if_input_then(element.tagName, {
	                                yes: function yes() {
	                                    element.value = hours + ':' + minutes + ':' + seconds;
	                                }
	                            });
	                        };

	                        for (var _iterator2 = _this2.$input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                            _loop();
	                        }
	                    } catch (err) {
	                        _didIteratorError2 = true;
	                        _iteratorError2 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                                _iterator2.return();
	                            }
	                        } finally {
	                            if (_didIteratorError2) {
	                                throw _iteratorError2;
	                            }
	                        }
	                    }
	                };
	                if_input_then(this.$input.tagName, {
	                    yes: function yes() {
	                        _this2.$input.value = hours + ':' + minutes + ':' + seconds;
	                    },
	                    no: function no() {
	                        test_node_collection();
	                    }
	                });
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
	exports.default = Cronometro;

/***/ }
/******/ ]);