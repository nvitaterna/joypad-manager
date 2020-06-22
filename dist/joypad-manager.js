(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JoypadManager"] = factory();
	else
		root["JoypadManager"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(6);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(7);

var assertThisInitialized = __webpack_require__(8);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(0);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(1);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(2);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(4);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(5);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(3);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// CONCATENATED MODULE: ./src/JoypadEventTracker.ts



var JoypadEventTracker_JoypadEventTracker = /*#__PURE__*/function () {
  function JoypadEventTracker(name) {
    classCallCheck_default()(this, JoypadEventTracker);

    this.name = name;
    this.callbacks = [];
  }

  createClass_default()(JoypadEventTracker, [{
    key: "registerCallback",
    value: function registerCallback(callback) {
      this.callbacks.push(callback);
    }
  }, {
    key: "unRegisterCallback",
    value: function unRegisterCallback(callback) {
      this.callbacks = this.callbacks.filter(function (c) {
        return c !== callback;
      });
    }
  }]);

  return JoypadEventTracker;
}();


// CONCATENATED MODULE: ./src/event-names.ts
var GAMEPAD_CONNECT = 'connect';
var GAMEPAD_DISCONNECT = 'disconnect';
var BUTTON_PRESS = 'buttonpress';
var BUTTON_RELEASE = 'buttonrelease';
var BUTTON_CHANGE = 'buttonchange';
var AXIS_MOVE = 'axismove';

// CONCATENATED MODULE: ./src/JoypadEventEmitter.ts




var _events;



var events = (_events = {}, defineProperty_default()(_events, GAMEPAD_CONNECT, new JoypadEventTracker_JoypadEventTracker(GAMEPAD_CONNECT)), defineProperty_default()(_events, GAMEPAD_DISCONNECT, new JoypadEventTracker_JoypadEventTracker(GAMEPAD_DISCONNECT)), defineProperty_default()(_events, BUTTON_PRESS, new JoypadEventTracker_JoypadEventTracker(BUTTON_PRESS)), defineProperty_default()(_events, BUTTON_RELEASE, new JoypadEventTracker_JoypadEventTracker(BUTTON_RELEASE)), defineProperty_default()(_events, BUTTON_CHANGE, new JoypadEventTracker_JoypadEventTracker(BUTTON_CHANGE)), defineProperty_default()(_events, AXIS_MOVE, new JoypadEventTracker_JoypadEventTracker(AXIS_MOVE)), _events);

var JoypadEventEmitter_JoypadEventEmitter = /*#__PURE__*/function () {
  function JoypadEventEmitter() {
    classCallCheck_default()(this, JoypadEventEmitter);

    this.events = events;
  }

  createClass_default()(JoypadEventEmitter, [{
    key: "dispatchEvent",
    value: function dispatchEvent(eventName, event) {
      this.events[eventName].callbacks.forEach(function (callback) {
        callback(event);
      });
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(name, callback) {
      this.events[name].registerCallback(callback);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(name, callback) {
      this.events[name].unRegisterCallback(callback);
    }
  }]);

  return JoypadEventEmitter;
}();


// CONCATENATED MODULE: ./src/mappings/default-mapping.ts
/* harmony default export */ var default_mapping = ({
  ids: ['default'],
  buttons: [{
    name: 'buttonSouth'
  }, {
    name: 'buttonEast'
  }, {
    name: 'buttonWest'
  }, {
    name: 'buttonNorth'
  }, {
    name: 'leftShoulder'
  }, {
    name: 'rightShoulder'
  }, {
    name: 'leftTrigger',
    analog: true
  }, {
    name: 'rightTrigger',
    analog: true
  }, {
    name: 'select'
  }, {
    name: 'start'
  }, {
    name: 'leftStickButton'
  }, {
    name: 'rightStickButton'
  }, {
    name: 'up'
  }, {
    name: 'down'
  }, {
    name: 'left'
  }, {
    name: 'right'
  }, {
    name: 'home'
  }, {
    name: 'share'
  }],
  axes: [{
    name: 'leftStickX'
  }, {
    name: 'leftStickY'
  }, {
    name: 'rightStickX'
  }, {
    name: 'rightStickY'
  }]
});
// CONCATENATED MODULE: ./src/mappings/nintendo-switch.ts

/* harmony default export */ var nintendo_switch = ({
  ids: ['Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)', '057e-2009-Pro Controller', 'Joy-Con L+R (STANDARD GAMEPAD Vendor: 057e Product: 200e)'],
  buttons: [{
    name: 'buttonSouth'
  }, {
    name: 'buttonEast'
  }, {
    name: 'buttonWest'
  }, {
    name: 'buttonNorth'
  }, {
    name: 'leftShoulder'
  }, {
    name: 'rightShoulder'
  }, {
    name: 'leftTrigger'
  }, {
    name: 'rightTrigger'
  }, {
    name: 'select'
  }, {
    name: 'start'
  }, {
    name: 'leftStickButton'
  }, {
    name: 'rightStickButton'
  }, {
    name: 'up'
  }, {
    name: 'down'
  }, {
    name: 'left'
  }, {
    name: 'right'
  }, {
    name: 'home'
  }, {
    name: 'share'
  }],
  axes: default_mapping.axes
});
// CONCATENATED MODULE: ./src/mappings/xbox-mapping.ts

/* harmony default export */ var xbox_mapping = ({
  ids: ['Xbox 360 Controller (XInput STANDARD GAMEPAD)', 'xinput'],
  buttons: default_mapping.buttons,
  axes: default_mapping.axes
});
// CONCATENATED MODULE: ./src/mappings/index.ts



/* harmony default export */ var src_mappings = ([default_mapping, xbox_mapping, nintendo_switch]);
// CONCATENATED MODULE: ./src/generate-button-state.ts

function generateButtonState(id, customMappings) {
  var gamepadMap = src_mappings.concat(customMappings).find(function (mapping) {
    return mapping.ids.includes(id);
  }) || src_mappings[0];
  var buttons = (gamepadMap.buttons || []).map(function (button) {
    return {
      analog: !!button.analog,
      value: 0,
      name: button.name
    };
  });
  var axes = (gamepadMap.axes || []).map(function (axis) {
    return {
      value: 0,
      name: axis.name
    };
  });
  return {
    axes: axes,
    buttons: buttons
  };
}
// CONCATENATED MODULE: ./src/Joypad.ts






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Joypad_Joypad = /*#__PURE__*/function (_JoypadEventEmitter) {
  inherits_default()(Joypad, _JoypadEventEmitter);

  var _super = _createSuper(Joypad);

  /**
   * @param index the gamepad index in the JoypadManager.joypads array
   * @param joypadConfig the joypad config
   * @param mappings custom gamepad button mappings
   */
  function Joypad(index, joypadConfig, mappings) {
    var _this;

    classCallCheck_default()(this, Joypad);

    _this = _super.call(this);
    _this.index = index;
    _this.joypadConfig = joypadConfig;
    _this.mappings = mappings;
    /**
     * Whether or not the controller is connected
     */

    _this.connected = false;
    return _this;
  }
  /**
   * Set the id
   * @param id the native id
   */


  createClass_default()(Joypad, [{
    key: "setId",
    value: function setId(id) {
      if (this.id !== id) {
        this.id = id;
        this.buttonState = generateButtonState(this.id, this.mappings);
      }
    }
    /**
     * Check of the controller is connected
     */

  }, {
    key: "connect",

    /**
     * The function to call to initiate the connect event
     * @param nativePad the native HTML5 Gamepad
     */
    value: function connect(nativePad) {
      this.setId(nativePad.id);
      this.connected = true;
      this.dispatchEvent('connect', {
        joypad: this,
        nativePad: nativePad
      });
    }
    /**
     * The function to call to initiate the disconnect event
     * @param nativePad the native HTML5 Gamepad
     */

  }, {
    key: "disconnect",
    value: function disconnect(nativePad) {
      if (this.connected) {
        this.connected = false;
        this.dispatchEvent('disconnect', {
          joypad: this,
          nativePad: nativePad
        });
      }
    }
    /**
     * The main update loop function
     * @param nativePad the native HTML5 Gamepad object
     */

  }, {
    key: "update",
    value: function update(nativePad) {
      var _this2 = this;

      if (!nativePad || !nativePad.connected) {
        if (this.connected) {
          this.disconnect(nativePad);
        }

        return;
      }

      if ((nativePad === null || nativePad === void 0 ? void 0 : nativePad.connected) && !this.connected) {
        this.connect(nativePad);
      }

      if (nativePad && this.nativePad !== nativePad) {
        this.nativePad = nativePad;
      }

      if (!this.id) {
        this.setId(nativePad.id);
      }

      nativePad.buttons.forEach(function (nativeButton, index) {
        var buttonState = _this2.buttonState.buttons[index];

        if (!buttonState) {
          return;
        } // if a button value is different than the new value


        if (nativeButton.value !== buttonState.value) {
          // if it is analog, check against the threshold
          if (buttonState.analog) {
            if ( // always send event if value is 0 or 1
            nativeButton.value === 1 || buttonState.value === 1 || nativeButton.value === 0 || buttonState.value === 0 // send event if the change is larger than the threshold
            || Math.abs(nativeButton.value - buttonState.value) >= _this2.joypadConfig.analogThreshold) {
              buttonState.value = nativeButton.value;

              _this2.dispatchEvent('buttonchange', {
                button: buttonState,
                joypad: _this2,
                nativeButton: nativeButton,
                nativePad: nativePad,
                index: index
              });
            }
          } // we will still process these events for analog buttons so analog buttons can be treated as digital


          if (nativeButton.value === 1 && buttonState.value === 0) {
            buttonState.value = nativeButton.value;

            _this2.dispatchEvent('buttonpress', {
              button: buttonState,
              joypad: _this2,
              nativeButton: nativeButton,
              nativePad: nativePad,
              index: index
            });
          } else if (nativeButton.value === 0 && buttonState.value === 1) {
            buttonState.value = nativeButton.value;

            _this2.dispatchEvent('buttonrelease', {
              button: buttonState,
              joypad: _this2,
              nativeButton: nativeButton,
              nativePad: nativePad,
              index: index
            });
          }
        }
      });
      nativePad.axes.forEach(function (value, index) {
        var axisState = _this2.buttonState.axes[index];
        var nativeValue = Math.abs(value);
        var stateValue = Math.abs(axisState.value);
        var nativeIsDead = nativeValue <= _this2.joypadConfig.axisDeadzone;
        var stateIsDead = stateValue <= _this2.joypadConfig.axisDeadzone;

        if (!axisState) {
          return;
        }

        if (nativeValue !== stateValue) {
          if ( // do not send event if both are dead - means both are considered zero
          stateIsDead !== nativeIsDead // OR send event if either are dead or either are 1
          || !stateIsDead || !nativeIsDead // OR send event if they are 1
          || nativeValue === 1 || stateValue === 1) {
            axisState.value = nativeIsDead ? 0 : value;

            _this2.dispatchEvent(AXIS_MOVE, {
              axis: axisState,
              joypad: _this2,
              nativePad: nativePad,
              index: index
            });
          }
        }
      });
    }
  }, {
    key: "vibrate",
    value: function vibrate() {
      var _this$nativePad, _this$nativePad2, _this$nativePad2$hapt, _this$nativePad3;

      console.log((_this$nativePad = this.nativePad) === null || _this$nativePad === void 0 ? void 0 : _this$nativePad.vibrationActuator);
      (_this$nativePad2 = this.nativePad) === null || _this$nativePad2 === void 0 ? void 0 : (_this$nativePad2$hapt = _this$nativePad2.hapticActuators) === null || _this$nativePad2$hapt === void 0 ? void 0 : _this$nativePad2$hapt[0].pulse(10, 5);
      (_this$nativePad3 = this.nativePad) === null || _this$nativePad3 === void 0 ? void 0 : _this$nativePad3.vibrationActuator.playEffect('dual-rumble', {
        startDelay: 0,
        duration: 1000,
        weakMagnitude: 0,
        strongMagnitude: 1.0
      });
    }
  }, {
    key: "isConnected",
    get: function get() {
      return this.connected;
    }
  }]);

  return Joypad;
}(JoypadEventEmitter_JoypadEventEmitter);


// CONCATENATED MODULE: ./src/JoypadManager.ts




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


/**
 * The defaults for the joypad config
 */

var configDefaults = {
  analogThreshold: 0.1,
  axisDeadzone: 0.15,
  maxJoypads: 4
};
/**
 * The JoypadManager class used for managing joypads.
 */

var JoypadManager_JoypadManager = /*#__PURE__*/function () {
  /**
   *
   * @param joypadConfig
   * @param mappings custom mappings
   */
  function JoypadManager() {
    var joypadConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var mappings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    classCallCheck_default()(this, JoypadManager);

    /**
     * The array of joypads.
     */
    this.joypads = [];

    var parsedConfig = _objectSpread(_objectSpread({}, configDefaults), joypadConfig);

    for (var i = 0; i < parsedConfig.maxJoypads; i += 1) {
      this.joypads[i] = new Joypad_Joypad(i, parsedConfig, mappings);
    }
  }
  /**
   * The main update loop - update each joypad.
   */


  createClass_default()(JoypadManager, [{
    key: "update",
    value: function update() {
      var nativePads = navigator.getGamepads();
      this.joypads.forEach(function (joypad, index) {
        var nativePad = nativePads[index];
        joypad.update(nativePad);
      });
    }
  }]);

  return JoypadManager;
}();


// CONCATENATED MODULE: ./src/index.ts

/* harmony default export */ var src = __webpack_exports__["default"] = (JoypadManager_JoypadManager);

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=joypad-manager.js.map