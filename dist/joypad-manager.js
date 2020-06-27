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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 1 */
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
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(9);

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(10);

var assertThisInitialized = __webpack_require__(11);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "EVENT_NAMES", function() { return /* reexport */ event_names_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "Types", function() { return /* reexport */ types_namespaceObject; });

// NAMESPACE OBJECT: ./src/event-names.ts
var event_names_namespaceObject = {};
__webpack_require__.r(event_names_namespaceObject);
__webpack_require__.d(event_names_namespaceObject, "GAMEPAD_CONNECT", function() { return GAMEPAD_CONNECT; });
__webpack_require__.d(event_names_namespaceObject, "GAMEPAD_DISCONNECT", function() { return GAMEPAD_DISCONNECT; });
__webpack_require__.d(event_names_namespaceObject, "BUTTON_PRESS", function() { return BUTTON_PRESS; });
__webpack_require__.d(event_names_namespaceObject, "BUTTON_RELEASE", function() { return BUTTON_RELEASE; });
__webpack_require__.d(event_names_namespaceObject, "STICK_MOVE", function() { return STICK_MOVE; });
__webpack_require__.d(event_names_namespaceObject, "BUTTON_CHANGE", function() { return BUTTON_CHANGE; });

// NAMESPACE OBJECT: ./src/JoypadEventEmitter.ts
var JoypadEventEmitter_namespaceObject = {};
__webpack_require__.r(JoypadEventEmitter_namespaceObject);
__webpack_require__.d(JoypadEventEmitter_namespaceObject, "JoypadEventEmitter", function() { return JoypadEventEmitter_JoypadEventEmitter; });

// NAMESPACE OBJECT: ./src/mappings/index.ts
var mappings_namespaceObject = {};
__webpack_require__.r(mappings_namespaceObject);
__webpack_require__.d(mappings_namespaceObject, "default", function() { return src_mappings; });

// NAMESPACE OBJECT: ./src/Joypad.ts
var Joypad_namespaceObject = {};
__webpack_require__.r(Joypad_namespaceObject);
__webpack_require__.d(Joypad_namespaceObject, "Joypad", function() { return Joypad_Joypad; });

// NAMESPACE OBJECT: ./src/JoypadManager.ts
var JoypadManager_namespaceObject = {};
__webpack_require__.r(JoypadManager_namespaceObject);
__webpack_require__.d(JoypadManager_namespaceObject, "JoypadManager", function() { return JoypadManager_JoypadManager; });

// NAMESPACE OBJECT: ./src/types.ts
var types_namespaceObject = {};
__webpack_require__.r(types_namespaceObject);
__webpack_require__.d(types_namespaceObject, "Joypad", function() { return Joypad_namespaceObject; });
__webpack_require__.d(types_namespaceObject, "JoypadManager", function() { return JoypadManager_namespaceObject; });
__webpack_require__.d(types_namespaceObject, "Events", function() { return JoypadEventEmitter_namespaceObject; });
__webpack_require__.d(types_namespaceObject, "Mapping", function() { return mappings_namespaceObject; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(0);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(3);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(5);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(6);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(7);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(4);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(2);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

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
var STICK_MOVE = 'stickmove';

// CONCATENATED MODULE: ./src/JoypadEventEmitter.ts




/* eslint-disable import/no-duplicates */



function generateEvents() {
  var _ref;

  return _ref = {}, defineProperty_default()(_ref, GAMEPAD_CONNECT, new JoypadEventTracker_JoypadEventTracker(GAMEPAD_CONNECT)), defineProperty_default()(_ref, GAMEPAD_DISCONNECT, new JoypadEventTracker_JoypadEventTracker(GAMEPAD_DISCONNECT)), defineProperty_default()(_ref, BUTTON_PRESS, new JoypadEventTracker_JoypadEventTracker(BUTTON_PRESS)), defineProperty_default()(_ref, BUTTON_RELEASE, new JoypadEventTracker_JoypadEventTracker(BUTTON_RELEASE)), defineProperty_default()(_ref, BUTTON_CHANGE, new JoypadEventTracker_JoypadEventTracker(BUTTON_CHANGE)), defineProperty_default()(_ref, STICK_MOVE, new JoypadEventTracker_JoypadEventTracker(STICK_MOVE)), _ref;
}

var JoypadEventEmitter_JoypadEventEmitter = /*#__PURE__*/function () {
  function JoypadEventEmitter() {
    classCallCheck_default()(this, JoypadEventEmitter);

    this.events = generateEvents();
  }

  createClass_default()(JoypadEventEmitter, [{
    key: "dispatchEvent",
    value: function dispatchEvent(eventName, event) {
      this.events[eventName].callbacks.forEach(function (callback) {
        callback(event);
      });
    }
    /**
     * Add an event listener to this Joypad.
     * @param name The event name.
     * @param callback The event callback to add to this event.
     */

  }, {
    key: "addEventListener",
    value: function addEventListener(name, callback) {
      this.events[name].registerCallback(callback);
    }
    /**
     * Remove an event listener from this Joypad.
     * @param name The event name.
     * @param callback The event callback to remove from this event.
     */

  }, {
    key: "removeEventListener",
    value: function removeEventListener(name, callback) {
      this.events[name].unRegisterCallback(callback);
    }
    /**
     * Remove all listeners from this Joypad.
     */

  }, {
    key: "clearEvents",
    value: function clearEvents() {
      Object.values(this.events).forEach(function (event) {
        event.callbacks = [];
      });
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
  sticks: [{
    name: 'leftStick',
    axes: {
      x: 0,
      y: 1
    }
  }, {
    name: 'rightStick',
    axes: {
      x: 2,
      y: 3
    }
  }]
});
// CONCATENATED MODULE: ./src/mappings/nintendo-switch-mappings.ts

/* harmony default export */ var nintendo_switch_mappings = ({
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
  sticks: default_mapping.sticks
});
// CONCATENATED MODULE: ./src/mappings/xbox-mappings.ts

/* harmony default export */ var xbox_mappings = ({
  ids: ['Xbox 360 Controller (XInput STANDARD GAMEPAD)', 'xinput'],
  buttons: default_mapping.buttons,
  sticks: default_mapping.sticks
});
// CONCATENATED MODULE: ./src/mappings/index.ts



var mappings_mappings = [default_mapping, xbox_mappings, nintendo_switch_mappings];
/* harmony default export */ var src_mappings = (mappings_mappings);
// CONCATENATED MODULE: ./src/generate-button-state.ts

function generateButtonState(id, customMappings) {
  var _gamepadMap, _gamepadMap2;

  var gamepadMap = customMappings.concat(src_mappings).find(function (mapping) {
    return mapping.ids.some(function (mappingId) {
      return mappingId.includes(id);
    });
  });

  if (!gamepadMap) {
    gamepadMap = src_mappings.find(function (mapping) {
      return mapping.ids.includes('default');
    });
  }

  var buttons = (((_gamepadMap = gamepadMap) === null || _gamepadMap === void 0 ? void 0 : _gamepadMap.buttons) || []).map(function (button) {
    return {
      value: 0,
      name: button.name
    };
  });
  var sticks = (((_gamepadMap2 = gamepadMap) === null || _gamepadMap2 === void 0 ? void 0 : _gamepadMap2.sticks) || []).map(function (stick) {
    return {
      name: stick.name,
      value: {
        x: 0,
        y: 0,
        angle: 0
      }
    };
  });
  return {
    mapping: gamepadMap,
    buttons: buttons,
    sticks: sticks
  };
}
// CONCATENATED MODULE: ./src/Joypad.ts








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




/** The Joypad class that is used to create joypads in the [JoypadManager]{@linkcode JoypadManager}. */

var Joypad_Joypad = /*#__PURE__*/function (_JoypadEventEmitter) {
  inherits_default()(Joypad, _JoypadEventEmitter);

  var _super = _createSuper(Joypad);

  /**
   * @param index The gamepad index in the [JoypadManager.joypads]{@linkcode JoypadManager.joypads} array.
   * @param joypadConfig The joypad configuration.
   * @param mappings Custom gamepad button mappings.
   */
  function Joypad(index, joypadConfig, mappings) {
    var _this;

    classCallCheck_default()(this, Joypad);

    _this = _super.call(this);
    _this.index = index;
    _this.joypadConfig = joypadConfig;
    _this.mappings = mappings;
    _this.connected = false;
    return _this;
  }
  /** The key-value mappings of the joypad buttons. */


  createClass_default()(Joypad, [{
    key: "setId",

    /**
     * Set the id
     * @param id the native id
     */
    value: function setId(id) {
      if (this.id !== id) {
        this.id = id;
        this.buttonState = generateButtonState(this.id, this.mappings);
      }
    }
    /** Is the controller connected? Determined by checking if this has a reference to a native gamepad AND if that native gamepad is connected. */

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
      var connected = this.syncNativePad(nativePad);

      if (!connected) {
        return;
      }

      this.loopButtons();
      this.loopSticks();
    }
    /** Sync this.nativePad with the updated gamepad, return whether or not it is connected. */

  }, {
    key: "syncNativePad",
    value: function syncNativePad(nativePad) {
      if (!nativePad || !nativePad.connected) {
        if (this.connected) {
          this.disconnect(nativePad);
        }

        return false;
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

      return true;
    }
    /** Loop through buttons */

  }, {
    key: "loopButtons",
    value: function loopButtons() {
      var _this$buttonState$map,
          _this$buttonState$map2,
          _this2 = this;

      var nativePad = this.nativePad;
      (_this$buttonState$map = this.buttonState.mapping) === null || _this$buttonState$map === void 0 ? void 0 : (_this$buttonState$map2 = _this$buttonState$map.buttons) === null || _this$buttonState$map2 === void 0 ? void 0 : _this$buttonState$map2.forEach(function (buttonMapping, index) {
        var nativeButton = nativePad.buttons[index];

        if (!nativeButton) {
          return;
        }

        var buttonState = _this2.buttons[buttonMapping.name];
        var previousValue = buttonState.value; // always set state every loop

        buttonState.value = nativeButton.value; // if a button value is different than the new value

        if (nativeButton.value !== previousValue) {
          if (buttonMapping.analog) {
            if ( // always send event if value is 0 or 1
            nativeButton.value === 1 || previousValue === 1 || nativeButton.value === 0 || previousValue === 0) {
              _this2.dispatchEvent(BUTTON_CHANGE, {
                button: buttonState,
                joypad: _this2,
                nativeButton: nativeButton,
                nativePad: nativePad,
                index: index
              });
            }
          } // we will still process these events for analog buttons so analog buttons can be treated as digital


          if (nativeButton.value === 1 && previousValue === 0) {
            _this2.dispatchEvent(BUTTON_PRESS, {
              button: buttonState,
              joypad: _this2,
              nativeButton: nativeButton,
              nativePad: nativePad,
              index: index
            });
          } else if (nativeButton.value === 0 && previousValue === 1) {
            _this2.dispatchEvent(BUTTON_RELEASE, {
              button: buttonState,
              joypad: _this2,
              nativeButton: nativeButton,
              nativePad: nativePad,
              index: index
            });
          }
        }
      });
    }
    /**
     * Determine whether or not an axis should fire the change event
     * @param stateValue the previous value
     * @param nativeValue the new value
     */

  }, {
    key: "checkAxis",
    value: function checkAxis(stateValue, nativeValue) {
      if (stateValue === nativeValue) {
        return false;
      }

      var stateAbs = Math.abs(stateValue);
      var nativeAbs = Math.abs(nativeValue);
      var stateIsDead = Math.abs(stateAbs) <= this.joypadConfig.axisDeadzone;
      var nativeIsDead = Math.abs(nativeAbs) <= this.joypadConfig.axisDeadzone; // if both are dead - no event

      if (stateIsDead && nativeIsDead) {
        return false;
      }

      return true;
    }
    /** Loop through analog sticks */

  }, {
    key: "loopSticks",
    value: function loopSticks() {
      var _this$buttonState$map3,
          _this$buttonState$map4,
          _this3 = this;

      var nativePad = this.nativePad;
      (_this$buttonState$map3 = this.buttonState.mapping) === null || _this$buttonState$map3 === void 0 ? void 0 : (_this$buttonState$map4 = _this$buttonState$map3.sticks) === null || _this$buttonState$map4 === void 0 ? void 0 : _this$buttonState$map4.forEach(function (stickMapping) {
        var nativeX = nativePad.axes[stickMapping.axes.x];
        var nativeY = nativePad.axes[stickMapping.axes.y]; // if both are undefined - no event

        if (nativeX === undefined && nativeY === undefined) {
          return;
        } // set either to 0 if they are undefined


        nativeX = nativeX === undefined ? 0 : nativeX;
        nativeY = nativeY === undefined ? 0 : nativeY;
        var stickState = _this3.sticks[stickMapping.name];
        var previousX = stickState.value.x;
        var previousY = stickState.value.y; // make sure we update state every loop

        stickState.value.x = Math.abs(nativeX) <= _this3.joypadConfig.axisDeadzone ? 0 : nativeX;
        stickState.value.y = Math.abs(nativeY) <= _this3.joypadConfig.axisDeadzone ? 0 : nativeY;
        var radians = Math.atan2(stickState.value.y, stickState.value.x);

        if (radians < 0) {
          radians += 2 * Math.PI;
        }

        stickState.value.angle = radians;

        if (_this3.checkAxis(previousX, nativeX) || _this3.checkAxis(previousY, nativeY)) {
          _this3.dispatchEvent(STICK_MOVE, {
            stick: stickState,
            joypad: _this3,
            nativePad: nativePad,
            nativeAxes: {
              x: nativeX,
              y: nativeY
            },
            index: [stickMapping.axes.x, stickMapping.axes.y]
          });
        }
      });
    }
    /** Vibrate the controller if supported. */

  }, {
    key: "vibrate",
    value: function () {
      var _vibrate = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
        var _this$nativePad, _this$nativePad$vibra;

        var vibrationParameters,
            _vibrationParameters$,
            startDelay,
            _vibrationParameters$2,
            duration,
            _vibrationParameters$3,
            weakMagnitude,
            _vibrationParameters$4,
            strongMagnitude,
            _args = arguments;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                vibrationParameters = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                _vibrationParameters$ = vibrationParameters.startDelay, startDelay = _vibrationParameters$ === void 0 ? 0 : _vibrationParameters$, _vibrationParameters$2 = vibrationParameters.duration, duration = _vibrationParameters$2 === void 0 ? 1000 : _vibrationParameters$2, _vibrationParameters$3 = vibrationParameters.weakMagnitude, weakMagnitude = _vibrationParameters$3 === void 0 ? 1 : _vibrationParameters$3, _vibrationParameters$4 = vibrationParameters.strongMagnitude, strongMagnitude = _vibrationParameters$4 === void 0 ? 1 : _vibrationParameters$4;
                return _context.abrupt("return", (_this$nativePad = this.nativePad) === null || _this$nativePad === void 0 ? void 0 : (_this$nativePad$vibra = _this$nativePad.vibrationActuator) === null || _this$nativePad$vibra === void 0 ? void 0 : _this$nativePad$vibra.playEffect('dual-rumble', {
                  startDelay: startDelay,
                  duration: duration,
                  weakMagnitude: weakMagnitude,
                  strongMagnitude: strongMagnitude
                }));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function vibrate() {
        return _vibrate.apply(this, arguments);
      }

      return vibrate;
    }()
    /** Stop any current vibrations. */

  }, {
    key: "stopVibrate",
    value: function stopVibrate() {
      var _this$nativePad2, _this$nativePad2$vibr;

      return (_this$nativePad2 = this.nativePad) === null || _this$nativePad2 === void 0 ? void 0 : (_this$nativePad2$vibr = _this$nativePad2.vibrationActuator) === null || _this$nativePad2$vibr === void 0 ? void 0 : _this$nativePad2$vibr.reset();
    }
  }, {
    key: "buttons",
    get: function get() {
      var _this$buttonState;

      return (((_this$buttonState = this.buttonState) === null || _this$buttonState === void 0 ? void 0 : _this$buttonState.buttons) || []).reduce(function (buttonMap, button) {
        buttonMap[button.name] = button;
        return buttonMap;
      }, {});
    }
    /** The key-value mappings of the joypad sticks. */

  }, {
    key: "sticks",
    get: function get() {
      var _this$buttonState2;

      return (((_this$buttonState2 = this.buttonState) === null || _this$buttonState2 === void 0 ? void 0 : _this$buttonState2.sticks) || []).reduce(function (stickMap, stick) {
        // eslint-disable-next-line no-param-reassign
        stickMap[stick.name] = stick;
        return stickMap;
      }, {});
    }
    /** The current mapping this gamepad is using. */

  }, {
    key: "mapping",
    get: function get() {
      return this.buttonState.mapping;
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



var JoypadManager_JoypadManager = /*#__PURE__*/function () {
  /**
   * Initiate the JoypadManager
   * @param joypadConfig Optional Joypad configuration
   * @param mappings Optional custom list of mappings
   */
  function JoypadManager() {
    var joypadConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var mappings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    classCallCheck_default()(this, JoypadManager);

    /**
     * The array of joypads.
     */
    this.joypads = [];
    var _joypadConfig$axisDea = joypadConfig.axisDeadzone,
        axisDeadzone = _joypadConfig$axisDea === void 0 ? 0.15 : _joypadConfig$axisDea,
        _joypadConfig$maxJoyp = joypadConfig.maxJoypads,
        maxJoypads = _joypadConfig$maxJoyp === void 0 ? 4 : _joypadConfig$maxJoyp;

    for (var i = 0; i < maxJoypads; i += 1) {
      this.joypads[i] = new Joypad_Joypad(i, {
        axisDeadzone: axisDeadzone,
        maxJoypads: maxJoypads
      }, mappings);
    }
  }
  /**
   * The main update loop - updates every joypad and passes the reference to the native gamepad.
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
// CONCATENATED MODULE: ./src/types.ts





// CONCATENATED MODULE: ./src/index.ts



/* harmony default export */ var src = __webpack_exports__["default"] = (JoypadManager_JoypadManager);


/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=joypad-manager.js.map