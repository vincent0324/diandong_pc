webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(31);

	__webpack_require__(169);

	// header
	__webpack_require__(173);
	var City = __webpack_require__(175);
	var UserPanel = __webpack_require__(180);
	var Search = __webpack_require__(184);

	ReactDOM.render(React.createElement(City, null), document.getElementById('city-holder'));
	ReactDOM.render(React.createElement(UserPanel, null), document.getElementById('user-holder'));
	ReactDOM.render(React.createElement(Search, null), document.getElementById('search-holder'));

	// nav
	__webpack_require__(190);

	// focus
	var Focus = __webpack_require__(192);
	var focus = new Focus();

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * https://github.com/es-shims/es5-shim
	 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
	 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
	 */

	// vim: ts=4 sts=4 sw=4 expandtab

	// Add semicolon to prevent IIFE from being passed as argument to concatenated code.
	;

	// UMD (Universal Module Definition)
	// see https://github.com/umdjs/umd/blob/master/templates/returnExports.js
	(function (root, factory) {
	    'use strict';

	    /* global define, exports, module */
	    if (true) {
	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        // Node. Does not work with strict CommonJS, but
	        // only CommonJS-like enviroments that support module.exports,
	        // like Node.
	        module.exports = factory();
	    } else {
	        // Browser globals (root is window)
	        root.returnExports = factory();
	    }
	}(this, function () {
	    /**
	     * Brings an environment as close to ECMAScript 5 compliance
	     * as is possible with the facilities of erstwhile engines.
	     *
	     * Annotated ES5: http://es5.github.com/ (specific links below)
	     * ES5 Spec: http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
	     * Required reading: http://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/
	     */

	    // Shortcut to an often accessed properties, in order to avoid multiple
	    // dereference that costs universally. This also holds a reference to known-good
	    // functions.
	    var $Array = Array;
	    var ArrayPrototype = $Array.prototype;
	    var $Object = Object;
	    var ObjectPrototype = $Object.prototype;
	    var $Function = Function;
	    var FunctionPrototype = $Function.prototype;
	    var $String = String;
	    var StringPrototype = $String.prototype;
	    var $Number = Number;
	    var NumberPrototype = $Number.prototype;
	    var array_slice = ArrayPrototype.slice;
	    var array_splice = ArrayPrototype.splice;
	    var array_push = ArrayPrototype.push;
	    var array_unshift = ArrayPrototype.unshift;
	    var array_concat = ArrayPrototype.concat;
	    var array_join = ArrayPrototype.join;
	    var call = FunctionPrototype.call;
	    var apply = FunctionPrototype.apply;
	    var max = Math.max;
	    var min = Math.min;

	    // Having a toString local variable name breaks in Opera so use to_string.
	    var to_string = ObjectPrototype.toString;

	    /* global Symbol */
	    /* eslint-disable one-var-declaration-per-line, no-redeclare, max-statements-per-line */
	    var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
	    var isCallable; /* inlined from https://npmjs.com/is-callable */ var fnToStr = Function.prototype.toString, constructorRegex = /^\s*class /, isES6ClassFn = function isES6ClassFn(value) { try { var fnStr = fnToStr.call(value); var singleStripped = fnStr.replace(/\/\/.*\n/g, ''); var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, ''); var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' '); return constructorRegex.test(spaceStripped); } catch (e) { return false; /* not a function */ } }, tryFunctionObject = function tryFunctionObject(value) { try { if (isES6ClassFn(value)) { return false; } fnToStr.call(value); return true; } catch (e) { return false; } }, fnClass = '[object Function]', genClass = '[object GeneratorFunction]', isCallable = function isCallable(value) { if (!value) { return false; } if (typeof value !== 'function' && typeof value !== 'object') { return false; } if (hasToStringTag) { return tryFunctionObject(value); } if (isES6ClassFn(value)) { return false; } var strClass = to_string.call(value); return strClass === fnClass || strClass === genClass; };

	    var isRegex; /* inlined from https://npmjs.com/is-regex */ var regexExec = RegExp.prototype.exec, tryRegexExec = function tryRegexExec(value) { try { regexExec.call(value); return true; } catch (e) { return false; } }, regexClass = '[object RegExp]'; isRegex = function isRegex(value) { if (typeof value !== 'object') { return false; } return hasToStringTag ? tryRegexExec(value) : to_string.call(value) === regexClass; };
	    var isString; /* inlined from https://npmjs.com/is-string */ var strValue = String.prototype.valueOf, tryStringObject = function tryStringObject(value) { try { strValue.call(value); return true; } catch (e) { return false; } }, stringClass = '[object String]'; isString = function isString(value) { if (typeof value === 'string') { return true; } if (typeof value !== 'object') { return false; } return hasToStringTag ? tryStringObject(value) : to_string.call(value) === stringClass; };
	    /* eslint-enable one-var-declaration-per-line, no-redeclare, max-statements-per-line */

	    /* inlined from http://npmjs.com/define-properties */
	    var supportsDescriptors = $Object.defineProperty && (function () {
	        try {
	            var obj = {};
	            $Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
	            for (var _ in obj) { // jscs:ignore disallowUnusedVariables
	                return false;
	            }
	            return obj.x === obj;
	        } catch (e) { /* this is ES3 */
	            return false;
	        }
	    }());
	    var defineProperties = (function (has) {
	        // Define configurable, writable, and non-enumerable props
	        // if they don't exist.
	        var defineProperty;
	        if (supportsDescriptors) {
	            defineProperty = function (object, name, method, forceAssign) {
	                if (!forceAssign && (name in object)) {
	                    return;
	                }
	                $Object.defineProperty(object, name, {
	                    configurable: true,
	                    enumerable: false,
	                    writable: true,
	                    value: method
	                });
	            };
	        } else {
	            defineProperty = function (object, name, method, forceAssign) {
	                if (!forceAssign && (name in object)) {
	                    return;
	                }
	                object[name] = method;
	            };
	        }
	        return function defineProperties(object, map, forceAssign) {
	            for (var name in map) {
	                if (has.call(map, name)) {
	                    defineProperty(object, name, map[name], forceAssign);
	                }
	            }
	        };
	    }(ObjectPrototype.hasOwnProperty));

	    //
	    // Util
	    // ======
	    //

	    /* replaceable with https://npmjs.com/package/es-abstract /helpers/isPrimitive */
	    var isPrimitive = function isPrimitive(input) {
	        var type = typeof input;
	        return input === null || (type !== 'object' && type !== 'function');
	    };

	    var isActualNaN = $Number.isNaN || function isActualNaN(x) {
	        return x !== x;
	    };

	    var ES = {
	        // ES5 9.4
	        // http://es5.github.com/#x9.4
	        // http://jsperf.com/to-integer
	        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToInteger */
	        ToInteger: function ToInteger(num) {
	            var n = +num;
	            if (isActualNaN(n)) {
	                n = 0;
	            } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
	                n = (n > 0 || -1) * Math.floor(Math.abs(n));
	            }
	            return n;
	        },

	        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToPrimitive */
	        ToPrimitive: function ToPrimitive(input) {
	            var val, valueOf, toStr;
	            if (isPrimitive(input)) {
	                return input;
	            }
	            valueOf = input.valueOf;
	            if (isCallable(valueOf)) {
	                val = valueOf.call(input);
	                if (isPrimitive(val)) {
	                    return val;
	                }
	            }
	            toStr = input.toString;
	            if (isCallable(toStr)) {
	                val = toStr.call(input);
	                if (isPrimitive(val)) {
	                    return val;
	                }
	            }
	            throw new TypeError();
	        },

	        // ES5 9.9
	        // http://es5.github.com/#x9.9
	        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToObject */
	        ToObject: function (o) {
	            if (o == null) { // this matches both null and undefined
	                throw new TypeError("can't convert " + o + ' to object');
	            }
	            return $Object(o);
	        },

	        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToUint32 */
	        ToUint32: function ToUint32(x) {
	            return x >>> 0;
	        }
	    };

	    //
	    // Function
	    // ========
	    //

	    // ES-5 15.3.4.5
	    // http://es5.github.com/#x15.3.4.5

	    var Empty = function Empty() {};

	    defineProperties(FunctionPrototype, {
	        bind: function bind(that) { // .length is 1
	            // 1. Let Target be the this value.
	            var target = this;
	            // 2. If IsCallable(Target) is false, throw a TypeError exception.
	            if (!isCallable(target)) {
	                throw new TypeError('Function.prototype.bind called on incompatible ' + target);
	            }
	            // 3. Let A be a new (possibly empty) internal list of all of the
	            //   argument values provided after thisArg (arg1, arg2 etc), in order.
	            // XXX slicedArgs will stand in for "A" if used
	            var args = array_slice.call(arguments, 1); // for normal call
	            // 4. Let F be a new native ECMAScript object.
	            // 11. Set the [[Prototype]] internal property of F to the standard
	            //   built-in Function prototype object as specified in 15.3.3.1.
	            // 12. Set the [[Call]] internal property of F as described in
	            //   15.3.4.5.1.
	            // 13. Set the [[Construct]] internal property of F as described in
	            //   15.3.4.5.2.
	            // 14. Set the [[HasInstance]] internal property of F as described in
	            //   15.3.4.5.3.
	            var bound;
	            var binder = function () {

	                if (this instanceof bound) {
	                    // 15.3.4.5.2 [[Construct]]
	                    // When the [[Construct]] internal method of a function object,
	                    // F that was created using the bind function is called with a
	                    // list of arguments ExtraArgs, the following steps are taken:
	                    // 1. Let target be the value of F's [[TargetFunction]]
	                    //   internal property.
	                    // 2. If target has no [[Construct]] internal method, a
	                    //   TypeError exception is thrown.
	                    // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
	                    //   property.
	                    // 4. Let args be a new list containing the same values as the
	                    //   list boundArgs in the same order followed by the same
	                    //   values as the list ExtraArgs in the same order.
	                    // 5. Return the result of calling the [[Construct]] internal
	                    //   method of target providing args as the arguments.

	                    var result = apply.call(
	                        target,
	                        this,
	                        array_concat.call(args, array_slice.call(arguments))
	                    );
	                    if ($Object(result) === result) {
	                        return result;
	                    }
	                    return this;

	                } else {
	                    // 15.3.4.5.1 [[Call]]
	                    // When the [[Call]] internal method of a function object, F,
	                    // which was created using the bind function is called with a
	                    // this value and a list of arguments ExtraArgs, the following
	                    // steps are taken:
	                    // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
	                    //   property.
	                    // 2. Let boundThis be the value of F's [[BoundThis]] internal
	                    //   property.
	                    // 3. Let target be the value of F's [[TargetFunction]] internal
	                    //   property.
	                    // 4. Let args be a new list containing the same values as the
	                    //   list boundArgs in the same order followed by the same
	                    //   values as the list ExtraArgs in the same order.
	                    // 5. Return the result of calling the [[Call]] internal method
	                    //   of target providing boundThis as the this value and
	                    //   providing args as the arguments.

	                    // equiv: target.call(this, ...boundArgs, ...args)
	                    return apply.call(
	                        target,
	                        that,
	                        array_concat.call(args, array_slice.call(arguments))
	                    );

	                }

	            };

	            // 15. If the [[Class]] internal property of Target is "Function", then
	            //     a. Let L be the length property of Target minus the length of A.
	            //     b. Set the length own property of F to either 0 or L, whichever is
	            //       larger.
	            // 16. Else set the length own property of F to 0.

	            var boundLength = max(0, target.length - args.length);

	            // 17. Set the attributes of the length own property of F to the values
	            //   specified in 15.3.5.1.
	            var boundArgs = [];
	            for (var i = 0; i < boundLength; i++) {
	                array_push.call(boundArgs, '$' + i);
	            }

	            // XXX Build a dynamic function with desired amount of arguments is the only
	            // way to set the length property of a function.
	            // In environments where Content Security Policies enabled (Chrome extensions,
	            // for ex.) all use of eval or Function costructor throws an exception.
	            // However in all of these environments Function.prototype.bind exists
	            // and so this code will never be executed.
	            bound = $Function('binder', 'return function (' + array_join.call(boundArgs, ',') + '){ return binder.apply(this, arguments); }')(binder);

	            if (target.prototype) {
	                Empty.prototype = target.prototype;
	                bound.prototype = new Empty();
	                // Clean up dangling references.
	                Empty.prototype = null;
	            }

	            // TODO
	            // 18. Set the [[Extensible]] internal property of F to true.

	            // TODO
	            // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
	            // 20. Call the [[DefineOwnProperty]] internal method of F with
	            //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
	            //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
	            //   false.
	            // 21. Call the [[DefineOwnProperty]] internal method of F with
	            //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
	            //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
	            //   and false.

	            // TODO
	            // NOTE Function objects created using Function.prototype.bind do not
	            // have a prototype property or the [[Code]], [[FormalParameters]], and
	            // [[Scope]] internal properties.
	            // XXX can't delete prototype in pure-js.

	            // 22. Return F.
	            return bound;
	        }
	    });

	    // _Please note: Shortcuts are defined after `Function.prototype.bind` as we
	    // use it in defining shortcuts.
	    var owns = call.bind(ObjectPrototype.hasOwnProperty);
	    var toStr = call.bind(ObjectPrototype.toString);
	    var arraySlice = call.bind(array_slice);
	    var arraySliceApply = apply.bind(array_slice);
	    var strSlice = call.bind(StringPrototype.slice);
	    var strSplit = call.bind(StringPrototype.split);
	    var strIndexOf = call.bind(StringPrototype.indexOf);
	    var pushCall = call.bind(array_push);
	    var isEnum = call.bind(ObjectPrototype.propertyIsEnumerable);
	    var arraySort = call.bind(ArrayPrototype.sort);

	    //
	    // Array
	    // =====
	    //

	    var isArray = $Array.isArray || function isArray(obj) {
	        return toStr(obj) === '[object Array]';
	    };

	    // ES5 15.4.4.12
	    // http://es5.github.com/#x15.4.4.13
	    // Return len+argCount.
	    // [bugfix, ielt8]
	    // IE < 8 bug: [].unshift(0) === undefined but should be "1"
	    var hasUnshiftReturnValueBug = [].unshift(0) !== 1;
	    defineProperties(ArrayPrototype, {
	        unshift: function () {
	            array_unshift.apply(this, arguments);
	            return this.length;
	        }
	    }, hasUnshiftReturnValueBug);

	    // ES5 15.4.3.2
	    // http://es5.github.com/#x15.4.3.2
	    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
	    defineProperties($Array, { isArray: isArray });

	    // The IsCallable() check in the Array functions
	    // has been replaced with a strict check on the
	    // internal class of the object to trap cases where
	    // the provided function was actually a regular
	    // expression literal, which in V8 and
	    // JavaScriptCore is a typeof "function".  Only in
	    // V8 are regular expression literals permitted as
	    // reduce parameters, so it is desirable in the
	    // general case for the shim to match the more
	    // strict and common behavior of rejecting regular
	    // expressions.

	    // ES5 15.4.4.18
	    // http://es5.github.com/#x15.4.4.18
	    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach

	    // Check failure of by-index access of string characters (IE < 9)
	    // and failure of `0 in boxedString` (Rhino)
	    var boxedString = $Object('a');
	    var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

	    var properlyBoxesContext = function properlyBoxed(method) {
	        // Check node 0.6.21 bug where third parameter is not boxed
	        var properlyBoxesNonStrict = true;
	        var properlyBoxesStrict = true;
	        var threwException = false;
	        if (method) {
	            try {
	                method.call('foo', function (_, __, context) {
	                    if (typeof context !== 'object') {
	                        properlyBoxesNonStrict = false;
	                    }
	                });

	                method.call([1], function () {
	                    'use strict';

	                    properlyBoxesStrict = typeof this === 'string';
	                }, 'x');
	            } catch (e) {
	                threwException = true;
	            }
	        }
	        return !!method && !threwException && properlyBoxesNonStrict && properlyBoxesStrict;
	    };

	    defineProperties(ArrayPrototype, {
	        forEach: function forEach(callbackfn/*, thisArg*/) {
	            var object = ES.ToObject(this);
	            var self = splitString && isString(this) ? strSplit(this, '') : object;
	            var i = -1;
	            var length = ES.ToUint32(self.length);
	            var T;
	            if (arguments.length > 1) {
	                T = arguments[1];
	            }

	            // If no callback function or if callback is not a callable function
	            if (!isCallable(callbackfn)) {
	                throw new TypeError('Array.prototype.forEach callback must be a function');
	            }

	            while (++i < length) {
	                if (i in self) {
	                    // Invoke the callback function with call, passing arguments:
	                    // context, property value, property key, thisArg object
	                    if (typeof T === 'undefined') {
	                        callbackfn(self[i], i, object);
	                    } else {
	                        callbackfn.call(T, self[i], i, object);
	                    }
	                }
	            }
	        }
	    }, !properlyBoxesContext(ArrayPrototype.forEach));

	    // ES5 15.4.4.19
	    // http://es5.github.com/#x15.4.4.19
	    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
	    defineProperties(ArrayPrototype, {
	        map: function map(callbackfn/*, thisArg*/) {
	            var object = ES.ToObject(this);
	            var self = splitString && isString(this) ? strSplit(this, '') : object;
	            var length = ES.ToUint32(self.length);
	            var result = $Array(length);
	            var T;
	            if (arguments.length > 1) {
	                T = arguments[1];
	            }

	            // If no callback function or if callback is not a callable function
	            if (!isCallable(callbackfn)) {
	                throw new TypeError('Array.prototype.map callback must be a function');
	            }

	            for (var i = 0; i < length; i++) {
	                if (i in self) {
	                    if (typeof T === 'undefined') {
	                        result[i] = callbackfn(self[i], i, object);
	                    } else {
	                        result[i] = callbackfn.call(T, self[i], i, object);
	                    }
	                }
	            }
	            return result;
	        }
	    }, !properlyBoxesContext(ArrayPrototype.map));

	    // ES5 15.4.4.20
	    // http://es5.github.com/#x15.4.4.20
	    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
	    defineProperties(ArrayPrototype, {
	        filter: function filter(callbackfn/*, thisArg*/) {
	            var object = ES.ToObject(this);
	            var self = splitString && isString(this) ? strSplit(this, '') : object;
	            var length = ES.ToUint32(self.length);
	            var result = [];
	            var value;
	            var T;
	            if (arguments.length > 1) {
	                T = arguments[1];
	            }

	            // If no callback function or if callback is not a callable function
	            if (!isCallable(callbackfn)) {
	                throw new TypeError('Array.prototype.filter callback must be a function');
	            }

	            for (var i = 0; i < length; i++) {
	                if (i in self) {
	                    value = self[i];
	                    if (typeof T === 'undefined' ? callbackfn(value, i, object) : callbackfn.call(T, value, i, object)) {
	                        pushCall(result, value);
	                    }
	                }
	            }
	            return result;
	        }
	    }, !properlyBoxesContext(ArrayPrototype.filter));

	    // ES5 15.4.4.16
	    // http://es5.github.com/#x15.4.4.16
	    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
	    defineProperties(ArrayPrototype, {
	        every: function every(callbackfn/*, thisArg*/) {
	            var object = ES.ToObject(this);
	            var self = splitString && isString(this) ? strSplit(this, '') : object;
	            var length = ES.ToUint32(self.length);
	            var T;
	            if (arguments.length > 1) {
	                T = arguments[1];
	            }

	            // If no callback function or if callback is not a callable function
	            if (!isCallable(callbackfn)) {
	                throw new TypeError('Array.prototype.every callback must be a function');
	            }

	            for (var i = 0; i < length; i++) {
	                if (i in self && !(typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
	                    return false;
	                }
	            }
	            return true;
	        }
	    }, !properlyBoxesContext(ArrayPrototype.every));

	    // ES5 15.4.4.17
	    // http://es5.github.com/#x15.4.4.17
	    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
	    defineProperties(ArrayPrototype, {
	        some: function some(callbackfn/*, thisArg */) {
	            var object = ES.ToObject(this);
	            var self = splitString && isString(this) ? strSplit(this, '') : object;
	            var length = ES.ToUint32(self.length);
	            var T;
	            if (arguments.length > 1) {
	                T = arguments[1];
	            }

	            // If no callback function or if callback is not a callable function
	            if (!isCallable(callbackfn)) {
	                throw new TypeError('Array.prototype.some callback must be a function');
	            }

	            for (var i = 0; i < length; i++) {
	                if (i in self && (typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
	                    return true;
	                }
	            }
	            return false;
	        }
	    }, !properlyBoxesContext(ArrayPrototype.some));

	    // ES5 15.4.4.21
	    // http://es5.github.com/#x15.4.4.21
	    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
	    var reduceCoercesToObject = false;
	    if (ArrayPrototype.reduce) {
	        reduceCoercesToObject = typeof ArrayPrototype.reduce.call('es5', function (_, __, ___, list) {
	            return list;
	        }) === 'object';
	    }
	    defineProperties(ArrayPrototype, {
	        reduce: function reduce(callbackfn/*, initialValue*/) {
	            var object = ES.ToObject(this);
	            var self = splitString && isString(this) ? strSplit(this, '') : object;
	            var length = ES.ToUint32(self.length);

	            // If no callback function or if callback is not a callable function
	            if (!isCallable(callbackfn)) {
	                throw new TypeError('Array.prototype.reduce callback must be a function');
	            }

	            // no value to return if no initial value and an empty array
	            if (length === 0 && arguments.length === 1) {
	                throw new TypeError('reduce of empty array with no initial value');
	            }

	            var i = 0;
	            var result;
	            if (arguments.length >= 2) {
	                result = arguments[1];
	            } else {
	                do {
	                    if (i in self) {
	                        result = self[i++];
	                        break;
	                    }

	                    // if array contains no values, no initial value to return
	                    if (++i >= length) {
	                        throw new TypeError('reduce of empty array with no initial value');
	                    }
	                } while (true);
	            }

	            for (; i < length; i++) {
	                if (i in self) {
	                    result = callbackfn(result, self[i], i, object);
	                }
	            }

	            return result;
	        }
	    }, !reduceCoercesToObject);

	    // ES5 15.4.4.22
	    // http://es5.github.com/#x15.4.4.22
	    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
	    var reduceRightCoercesToObject = false;
	    if (ArrayPrototype.reduceRight) {
	        reduceRightCoercesToObject = typeof ArrayPrototype.reduceRight.call('es5', function (_, __, ___, list) {
	            return list;
	        }) === 'object';
	    }
	    defineProperties(ArrayPrototype, {
	        reduceRight: function reduceRight(callbackfn/*, initial*/) {
	            var object = ES.ToObject(this);
	            var self = splitString && isString(this) ? strSplit(this, '') : object;
	            var length = ES.ToUint32(self.length);

	            // If no callback function or if callback is not a callable function
	            if (!isCallable(callbackfn)) {
	                throw new TypeError('Array.prototype.reduceRight callback must be a function');
	            }

	            // no value to return if no initial value, empty array
	            if (length === 0 && arguments.length === 1) {
	                throw new TypeError('reduceRight of empty array with no initial value');
	            }

	            var result;
	            var i = length - 1;
	            if (arguments.length >= 2) {
	                result = arguments[1];
	            } else {
	                do {
	                    if (i in self) {
	                        result = self[i--];
	                        break;
	                    }

	                    // if array contains no values, no initial value to return
	                    if (--i < 0) {
	                        throw new TypeError('reduceRight of empty array with no initial value');
	                    }
	                } while (true);
	            }

	            if (i < 0) {
	                return result;
	            }

	            do {
	                if (i in self) {
	                    result = callbackfn(result, self[i], i, object);
	                }
	            } while (i--);

	            return result;
	        }
	    }, !reduceRightCoercesToObject);

	    // ES5 15.4.4.14
	    // http://es5.github.com/#x15.4.4.14
	    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
	    var hasFirefox2IndexOfBug = ArrayPrototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
	    defineProperties(ArrayPrototype, {
	        indexOf: function indexOf(searchElement/*, fromIndex */) {
	            var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
	            var length = ES.ToUint32(self.length);

	            if (length === 0) {
	                return -1;
	            }

	            var i = 0;
	            if (arguments.length > 1) {
	                i = ES.ToInteger(arguments[1]);
	            }

	            // handle negative indices
	            i = i >= 0 ? i : max(0, length + i);
	            for (; i < length; i++) {
	                if (i in self && self[i] === searchElement) {
	                    return i;
	                }
	            }
	            return -1;
	        }
	    }, hasFirefox2IndexOfBug);

	    // ES5 15.4.4.15
	    // http://es5.github.com/#x15.4.4.15
	    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
	    var hasFirefox2LastIndexOfBug = ArrayPrototype.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
	    defineProperties(ArrayPrototype, {
	        lastIndexOf: function lastIndexOf(searchElement/*, fromIndex */) {
	            var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
	            var length = ES.ToUint32(self.length);

	            if (length === 0) {
	                return -1;
	            }
	            var i = length - 1;
	            if (arguments.length > 1) {
	                i = min(i, ES.ToInteger(arguments[1]));
	            }
	            // handle negative indices
	            i = i >= 0 ? i : length - Math.abs(i);
	            for (; i >= 0; i--) {
	                if (i in self && searchElement === self[i]) {
	                    return i;
	                }
	            }
	            return -1;
	        }
	    }, hasFirefox2LastIndexOfBug);

	    // ES5 15.4.4.12
	    // http://es5.github.com/#x15.4.4.12
	    var spliceNoopReturnsEmptyArray = (function () {
	        var a = [1, 2];
	        var result = a.splice();
	        return a.length === 2 && isArray(result) && result.length === 0;
	    }());
	    defineProperties(ArrayPrototype, {
	        // Safari 5.0 bug where .splice() returns undefined
	        splice: function splice(start, deleteCount) {
	            if (arguments.length === 0) {
	                return [];
	            } else {
	                return array_splice.apply(this, arguments);
	            }
	        }
	    }, !spliceNoopReturnsEmptyArray);

	    var spliceWorksWithEmptyObject = (function () {
	        var obj = {};
	        ArrayPrototype.splice.call(obj, 0, 0, 1);
	        return obj.length === 1;
	    }());
	    defineProperties(ArrayPrototype, {
	        splice: function splice(start, deleteCount) {
	            if (arguments.length === 0) {
	                return [];
	            }
	            var args = arguments;
	            this.length = max(ES.ToInteger(this.length), 0);
	            if (arguments.length > 0 && typeof deleteCount !== 'number') {
	                args = arraySlice(arguments);
	                if (args.length < 2) {
	                    pushCall(args, this.length - start);
	                } else {
	                    args[1] = ES.ToInteger(deleteCount);
	                }
	            }
	            return array_splice.apply(this, args);
	        }
	    }, !spliceWorksWithEmptyObject);
	    var spliceWorksWithLargeSparseArrays = (function () {
	        // Per https://github.com/es-shims/es5-shim/issues/295
	        // Safari 7/8 breaks with sparse arrays of size 1e5 or greater
	        var arr = new $Array(1e5);
	        // note: the index MUST be 8 or larger or the test will false pass
	        arr[8] = 'x';
	        arr.splice(1, 1);
	        // note: this test must be defined *after* the indexOf shim
	        // per https://github.com/es-shims/es5-shim/issues/313
	        return arr.indexOf('x') === 7;
	    }());
	    var spliceWorksWithSmallSparseArrays = (function () {
	        // Per https://github.com/es-shims/es5-shim/issues/295
	        // Opera 12.15 breaks on this, no idea why.
	        var n = 256;
	        var arr = [];
	        arr[n] = 'a';
	        arr.splice(n + 1, 0, 'b');
	        return arr[n] === 'a';
	    }());
	    defineProperties(ArrayPrototype, {
	        splice: function splice(start, deleteCount) {
	            var O = ES.ToObject(this);
	            var A = [];
	            var len = ES.ToUint32(O.length);
	            var relativeStart = ES.ToInteger(start);
	            var actualStart = relativeStart < 0 ? max((len + relativeStart), 0) : min(relativeStart, len);
	            var actualDeleteCount = min(max(ES.ToInteger(deleteCount), 0), len - actualStart);

	            var k = 0;
	            var from;
	            while (k < actualDeleteCount) {
	                from = $String(actualStart + k);
	                if (owns(O, from)) {
	                    A[k] = O[from];
	                }
	                k += 1;
	            }

	            var items = arraySlice(arguments, 2);
	            var itemCount = items.length;
	            var to;
	            if (itemCount < actualDeleteCount) {
	                k = actualStart;
	                var maxK = len - actualDeleteCount;
	                while (k < maxK) {
	                    from = $String(k + actualDeleteCount);
	                    to = $String(k + itemCount);
	                    if (owns(O, from)) {
	                        O[to] = O[from];
	                    } else {
	                        delete O[to];
	                    }
	                    k += 1;
	                }
	                k = len;
	                var minK = len - actualDeleteCount + itemCount;
	                while (k > minK) {
	                    delete O[k - 1];
	                    k -= 1;
	                }
	            } else if (itemCount > actualDeleteCount) {
	                k = len - actualDeleteCount;
	                while (k > actualStart) {
	                    from = $String(k + actualDeleteCount - 1);
	                    to = $String(k + itemCount - 1);
	                    if (owns(O, from)) {
	                        O[to] = O[from];
	                    } else {
	                        delete O[to];
	                    }
	                    k -= 1;
	                }
	            }
	            k = actualStart;
	            for (var i = 0; i < items.length; ++i) {
	                O[k] = items[i];
	                k += 1;
	            }
	            O.length = len - actualDeleteCount + itemCount;

	            return A;
	        }
	    }, !spliceWorksWithLargeSparseArrays || !spliceWorksWithSmallSparseArrays);

	    var originalJoin = ArrayPrototype.join;
	    var hasStringJoinBug;
	    try {
	        hasStringJoinBug = Array.prototype.join.call('123', ',') !== '1,2,3';
	    } catch (e) {
	        hasStringJoinBug = true;
	    }
	    if (hasStringJoinBug) {
	        defineProperties(ArrayPrototype, {
	            join: function join(separator) {
	                var sep = typeof separator === 'undefined' ? ',' : separator;
	                return originalJoin.call(isString(this) ? strSplit(this, '') : this, sep);
	            }
	        }, hasStringJoinBug);
	    }

	    var hasJoinUndefinedBug = [1, 2].join(undefined) !== '1,2';
	    if (hasJoinUndefinedBug) {
	        defineProperties(ArrayPrototype, {
	            join: function join(separator) {
	                var sep = typeof separator === 'undefined' ? ',' : separator;
	                return originalJoin.call(this, sep);
	            }
	        }, hasJoinUndefinedBug);
	    }

	    var pushShim = function push(item) {
	        var O = ES.ToObject(this);
	        var n = ES.ToUint32(O.length);
	        var i = 0;
	        while (i < arguments.length) {
	            O[n + i] = arguments[i];
	            i += 1;
	        }
	        O.length = n + i;
	        return n + i;
	    };

	    var pushIsNotGeneric = (function () {
	        var obj = {};
	        var result = Array.prototype.push.call(obj, undefined);
	        return result !== 1 || obj.length !== 1 || typeof obj[0] !== 'undefined' || !owns(obj, 0);
	    }());
	    defineProperties(ArrayPrototype, {
	        push: function push(item) {
	            if (isArray(this)) {
	                return array_push.apply(this, arguments);
	            }
	            return pushShim.apply(this, arguments);
	        }
	    }, pushIsNotGeneric);

	    // This fixes a very weird bug in Opera 10.6 when pushing `undefined
	    var pushUndefinedIsWeird = (function () {
	        var arr = [];
	        var result = arr.push(undefined);
	        return result !== 1 || arr.length !== 1 || typeof arr[0] !== 'undefined' || !owns(arr, 0);
	    }());
	    defineProperties(ArrayPrototype, { push: pushShim }, pushUndefinedIsWeird);

	    // ES5 15.2.3.14
	    // http://es5.github.io/#x15.4.4.10
	    // Fix boxed string bug
	    defineProperties(ArrayPrototype, {
	        slice: function (start, end) {
	            var arr = isString(this) ? strSplit(this, '') : this;
	            return arraySliceApply(arr, arguments);
	        }
	    }, splitString);

	    var sortIgnoresNonFunctions = (function () {
	        try {
	            [1, 2].sort(null);
	            [1, 2].sort({});
	            return true;
	        } catch (e) {}
	        return false;
	    }());
	    var sortThrowsOnRegex = (function () {
	        // this is a problem in Firefox 4, in which `typeof /a/ === 'function'`
	        try {
	            [1, 2].sort(/a/);
	            return false;
	        } catch (e) {}
	        return true;
	    }());
	    var sortIgnoresUndefined = (function () {
	        // applies in IE 8, for one.
	        try {
	            [1, 2].sort(undefined);
	            return true;
	        } catch (e) {}
	        return false;
	    }());
	    defineProperties(ArrayPrototype, {
	        sort: function sort(compareFn) {
	            if (typeof compareFn === 'undefined') {
	                return arraySort(this);
	            }
	            if (!isCallable(compareFn)) {
	                throw new TypeError('Array.prototype.sort callback must be a function');
	            }
	            return arraySort(this, compareFn);
	        }
	    }, sortIgnoresNonFunctions || !sortIgnoresUndefined || !sortThrowsOnRegex);

	    //
	    // Object
	    // ======
	    //

	    // ES5 15.2.3.14
	    // http://es5.github.com/#x15.2.3.14

	    // http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
	    var hasDontEnumBug = !isEnum({ 'toString': null }, 'toString');
	    var hasProtoEnumBug = isEnum(function () {}, 'prototype');
	    var hasStringEnumBug = !owns('x', '0');
	    var equalsConstructorPrototype = function (o) {
	        var ctor = o.constructor;
	        return ctor && ctor.prototype === o;
	    };
	    var blacklistedKeys = {
	        $window: true,
	        $console: true,
	        $parent: true,
	        $self: true,
	        $frame: true,
	        $frames: true,
	        $frameElement: true,
	        $webkitIndexedDB: true,
	        $webkitStorageInfo: true,
	        $external: true
	    };
	    var hasAutomationEqualityBug = (function () {
	        /* globals window */
	        if (typeof window === 'undefined') {
	            return false;
	        }
	        for (var k in window) {
	            try {
	                if (!blacklistedKeys['$' + k] && owns(window, k) && window[k] !== null && typeof window[k] === 'object') {
	                    equalsConstructorPrototype(window[k]);
	                }
	            } catch (e) {
	                return true;
	            }
	        }
	        return false;
	    }());
	    var equalsConstructorPrototypeIfNotBuggy = function (object) {
	        if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
	            return equalsConstructorPrototype(object);
	        }
	        try {
	            return equalsConstructorPrototype(object);
	        } catch (e) {
	            return false;
	        }
	    };
	    var dontEnums = [
	        'toString',
	        'toLocaleString',
	        'valueOf',
	        'hasOwnProperty',
	        'isPrototypeOf',
	        'propertyIsEnumerable',
	        'constructor'
	    ];
	    var dontEnumsLength = dontEnums.length;

	    // taken directly from https://github.com/ljharb/is-arguments/blob/master/index.js
	    // can be replaced with require('is-arguments') if we ever use a build process instead
	    var isStandardArguments = function isArguments(value) {
	        return toStr(value) === '[object Arguments]';
	    };
	    var isLegacyArguments = function isArguments(value) {
	        return value !== null &&
	            typeof value === 'object' &&
	            typeof value.length === 'number' &&
	            value.length >= 0 &&
	            !isArray(value) &&
	            isCallable(value.callee);
	    };
	    var isArguments = isStandardArguments(arguments) ? isStandardArguments : isLegacyArguments;

	    defineProperties($Object, {
	        keys: function keys(object) {
	            var isFn = isCallable(object);
	            var isArgs = isArguments(object);
	            var isObject = object !== null && typeof object === 'object';
	            var isStr = isObject && isString(object);

	            if (!isObject && !isFn && !isArgs) {
	                throw new TypeError('Object.keys called on a non-object');
	            }

	            var theKeys = [];
	            var skipProto = hasProtoEnumBug && isFn;
	            if ((isStr && hasStringEnumBug) || isArgs) {
	                for (var i = 0; i < object.length; ++i) {
	                    pushCall(theKeys, $String(i));
	                }
	            }

	            if (!isArgs) {
	                for (var name in object) {
	                    if (!(skipProto && name === 'prototype') && owns(object, name)) {
	                        pushCall(theKeys, $String(name));
	                    }
	                }
	            }

	            if (hasDontEnumBug) {
	                var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
	                for (var j = 0; j < dontEnumsLength; j++) {
	                    var dontEnum = dontEnums[j];
	                    if (!(skipConstructor && dontEnum === 'constructor') && owns(object, dontEnum)) {
	                        pushCall(theKeys, dontEnum);
	                    }
	                }
	            }
	            return theKeys;
	        }
	    });

	    var keysWorksWithArguments = $Object.keys && (function () {
	        // Safari 5.0 bug
	        return $Object.keys(arguments).length === 2;
	    }(1, 2));
	    var keysHasArgumentsLengthBug = $Object.keys && (function () {
	        var argKeys = $Object.keys(arguments);
	        return arguments.length !== 1 || argKeys.length !== 1 || argKeys[0] !== 1;
	    }(1));
	    var originalKeys = $Object.keys;
	    defineProperties($Object, {
	        keys: function keys(object) {
	            if (isArguments(object)) {
	                return originalKeys(arraySlice(object));
	            } else {
	                return originalKeys(object);
	            }
	        }
	    }, !keysWorksWithArguments || keysHasArgumentsLengthBug);

	    //
	    // Date
	    // ====
	    //

	    var hasNegativeMonthYearBug = new Date(-3509827329600292).getUTCMonth() !== 0;
	    var aNegativeTestDate = new Date(-1509842289600292);
	    var aPositiveTestDate = new Date(1449662400000);
	    var hasToUTCStringFormatBug = aNegativeTestDate.toUTCString() !== 'Mon, 01 Jan -45875 11:59:59 GMT';
	    var hasToDateStringFormatBug;
	    var hasToStringFormatBug;
	    var timeZoneOffset = aNegativeTestDate.getTimezoneOffset();
	    if (timeZoneOffset < -720) {
	        hasToDateStringFormatBug = aNegativeTestDate.toDateString() !== 'Tue Jan 02 -45875';
	        hasToStringFormatBug = !(/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/).test(aPositiveTestDate.toString());
	    } else {
	        hasToDateStringFormatBug = aNegativeTestDate.toDateString() !== 'Mon Jan 01 -45875';
	        hasToStringFormatBug = !(/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/).test(aPositiveTestDate.toString());
	    }

	    var originalGetFullYear = call.bind(Date.prototype.getFullYear);
	    var originalGetMonth = call.bind(Date.prototype.getMonth);
	    var originalGetDate = call.bind(Date.prototype.getDate);
	    var originalGetUTCFullYear = call.bind(Date.prototype.getUTCFullYear);
	    var originalGetUTCMonth = call.bind(Date.prototype.getUTCMonth);
	    var originalGetUTCDate = call.bind(Date.prototype.getUTCDate);
	    var originalGetUTCDay = call.bind(Date.prototype.getUTCDay);
	    var originalGetUTCHours = call.bind(Date.prototype.getUTCHours);
	    var originalGetUTCMinutes = call.bind(Date.prototype.getUTCMinutes);
	    var originalGetUTCSeconds = call.bind(Date.prototype.getUTCSeconds);
	    var originalGetUTCMilliseconds = call.bind(Date.prototype.getUTCMilliseconds);
	    var dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	    var monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	    var daysInMonth = function daysInMonth(month, year) {
	        return originalGetDate(new Date(year, month, 0));
	    };

	    defineProperties(Date.prototype, {
	        getFullYear: function getFullYear() {
	            if (!this || !(this instanceof Date)) {
	                throw new TypeError('this is not a Date object.');
	            }
	            var year = originalGetFullYear(this);
	            if (year < 0 && originalGetMonth(this) > 11) {
	                return year + 1;
	            }
	            return year;
	        },
	        getMonth: function getMonth() {
	            if (!this || !(this instanceof Date)) {
	                throw new TypeError('this is not a Date object.');
	            }
	            var year = originalGetFullYear(this);
	            var month = originalGetMonth(this);
	            if (year < 0 && month > 11) {
	                return 0;
	            }
	            return month;
	        },
	        getDate: function getDate() {
	            if (!this || !(this instanceof Date)) {
	                throw new TypeError('this is not a Date object.');
	            }
	            var year = originalGetFullYear(this);
	            var month = originalGetMonth(this);
	            var date = originalGetDate(this);
	            if (year < 0 && month > 11) {
	                if (month === 12) {
	                    return date;
	                }
	                var days = daysInMonth(0, year + 1);
	                return (days - date) + 1;
	            }
	            return date;
	        },
	        getUTCFullYear: function getUTCFullYear() {
	            if (!this || !(this instanceof Date)) {
	                throw new TypeError('this is not a Date object.');
	            }
	            var year = originalGetUTCFullYear(this);
	            if (year < 0 && originalGetUTCMonth(this) > 11) {
	                return year + 1;
	            }
	            return year;
	        },
	        getUTCMonth: function getUTCMonth() {
	            if (!this || !(this instanceof Date)) {
	                throw new TypeError('this is not a Date object.');
	            }
	            var year = originalGetUTCFullYear(this);
	            var month = originalGetUTCMonth(this);
	            if (year < 0 && month > 11) {
	                return 0;
	            }
	            return month;
	        },
	        getUTCDate: function getUTCDate() {
	            if (!this || !(this instanceof Date)) {
	                throw new TypeError('this is not a Date object.');
	            }
	            var year = originalGetUTCFullYear(this);
	            var month = originalGetUTCMonth(this);
	            var date = originalGetUTCDate(this);
	            if (year < 0 && month > 11) {
	                if (month === 12) {
	                    return date;
	                }
	                var days = daysInMonth(0, year + 1);
	                return (days - date) + 1;
	            }
	            return date;
	        }
	    }, hasNegativeMonthYearBug);

	    defineProperties(Date.prototype, {
	        toUTCString: function toUTCString() {
	            if (!this || !(this instanceof Date)) {
	                throw new TypeError('this is not a Date object.');
	            }
	            var day = originalGetUTCDay(this);
	            var date = originalGetUTCDate(this);
	            var month = originalGetUTCMonth(this);
	            var year = originalGetUTCFullYear(this);
	            var hour = originalGetUTCHours(this);
	            var minute = originalGetUTCMinutes(this);
	            var second = originalGetUTCSeconds(this);
	            return dayName[day] + ', ' +
	                (date < 10 ? '0' + date : date) + ' ' +
	                monthName[month] + ' ' +
	                year + ' ' +
	                (hour < 10 ? '0' + hour : hour) + ':' +
	                (minute < 10 ? '0' + minute : minute) + ':' +
	                (second < 10 ? '0' + second : second) + ' GMT';
	        }
	    }, hasNegativeMonthYearBug || hasToUTCStringFormatBug);

	    // Opera 12 has `,`
	    defineProperties(Date.prototype, {
	        toDateString: function toDateString() {
	            if (!this || !(this instanceof Date)) {
	                throw new TypeError('this is not a Date object.');
	            }
	            var day = this.getDay();
	            var date = this.getDate();
	            var month = this.getMonth();
	            var year = this.getFullYear();
	            return dayName[day] + ' ' +
	                monthName[month] + ' ' +
	                (date < 10 ? '0' + date : date) + ' ' +
	                year;
	        }
	    }, hasNegativeMonthYearBug || hasToDateStringFormatBug);

	    // can't use defineProperties here because of toString enumeration issue in IE <= 8
	    if (hasNegativeMonthYearBug || hasToStringFormatBug) {
	        Date.prototype.toString = function toString() {
	            if (!this || !(this instanceof Date)) {
	                throw new TypeError('this is not a Date object.');
	            }
	            var day = this.getDay();
	            var date = this.getDate();
	            var month = this.getMonth();
	            var year = this.getFullYear();
	            var hour = this.getHours();
	            var minute = this.getMinutes();
	            var second = this.getSeconds();
	            var timezoneOffset = this.getTimezoneOffset();
	            var hoursOffset = Math.floor(Math.abs(timezoneOffset) / 60);
	            var minutesOffset = Math.floor(Math.abs(timezoneOffset) % 60);
	            return dayName[day] + ' ' +
	                monthName[month] + ' ' +
	                (date < 10 ? '0' + date : date) + ' ' +
	                year + ' ' +
	                (hour < 10 ? '0' + hour : hour) + ':' +
	                (minute < 10 ? '0' + minute : minute) + ':' +
	                (second < 10 ? '0' + second : second) + ' GMT' +
	                (timezoneOffset > 0 ? '-' : '+') +
	                (hoursOffset < 10 ? '0' + hoursOffset : hoursOffset) +
	                (minutesOffset < 10 ? '0' + minutesOffset : minutesOffset);
	        };
	        if (supportsDescriptors) {
	            $Object.defineProperty(Date.prototype, 'toString', {
	                configurable: true,
	                enumerable: false,
	                writable: true
	            });
	        }
	    }

	    // ES5 15.9.5.43
	    // http://es5.github.com/#x15.9.5.43
	    // This function returns a String value represent the instance in time
	    // represented by this Date object. The format of the String is the Date Time
	    // string format defined in 15.9.1.15. All fields are present in the String.
	    // The time zone is always UTC, denoted by the suffix Z. If the time value of
	    // this object is not a finite Number a RangeError exception is thrown.
	    var negativeDate = -62198755200000;
	    var negativeYearString = '-000001';
	    var hasNegativeDateBug = Date.prototype.toISOString && new Date(negativeDate).toISOString().indexOf(negativeYearString) === -1;
	    var hasSafari51DateBug = Date.prototype.toISOString && new Date(-1).toISOString() !== '1969-12-31T23:59:59.999Z';

	    var getTime = call.bind(Date.prototype.getTime);

	    defineProperties(Date.prototype, {
	        toISOString: function toISOString() {
	            if (!isFinite(this) || !isFinite(getTime(this))) {
	                // Adope Photoshop requires the second check.
	                throw new RangeError('Date.prototype.toISOString called on non-finite value.');
	            }

	            var year = originalGetUTCFullYear(this);

	            var month = originalGetUTCMonth(this);
	            // see https://github.com/es-shims/es5-shim/issues/111
	            year += Math.floor(month / 12);
	            month = (month % 12 + 12) % 12;

	            // the date time string format is specified in 15.9.1.15.
	            var result = [month + 1, originalGetUTCDate(this), originalGetUTCHours(this), originalGetUTCMinutes(this), originalGetUTCSeconds(this)];
	            year = (
	                (year < 0 ? '-' : (year > 9999 ? '+' : '')) +
	                strSlice('00000' + Math.abs(year), (0 <= year && year <= 9999) ? -4 : -6)
	            );

	            for (var i = 0; i < result.length; ++i) {
	                // pad months, days, hours, minutes, and seconds to have two digits.
	                result[i] = strSlice('00' + result[i], -2);
	            }
	            // pad milliseconds to have three digits.
	            return (
	                year + '-' + arraySlice(result, 0, 2).join('-') +
	                'T' + arraySlice(result, 2).join(':') + '.' +
	                strSlice('000' + originalGetUTCMilliseconds(this), -3) + 'Z'
	            );
	        }
	    }, hasNegativeDateBug || hasSafari51DateBug);

	    // ES5 15.9.5.44
	    // http://es5.github.com/#x15.9.5.44
	    // This function provides a String representation of a Date object for use by
	    // JSON.stringify (15.12.3).
	    var dateToJSONIsSupported = (function () {
	        try {
	            return Date.prototype.toJSON &&
	                new Date(NaN).toJSON() === null &&
	                new Date(negativeDate).toJSON().indexOf(negativeYearString) !== -1 &&
	                Date.prototype.toJSON.call({ // generic
	                    toISOString: function () { return true; }
	                });
	        } catch (e) {
	            return false;
	        }
	    }());
	    if (!dateToJSONIsSupported) {
	        Date.prototype.toJSON = function toJSON(key) {
	            // When the toJSON method is called with argument key, the following
	            // steps are taken:

	            // 1.  Let O be the result of calling ToObject, giving it the this
	            // value as its argument.
	            // 2. Let tv be ES.ToPrimitive(O, hint Number).
	            var O = $Object(this);
	            var tv = ES.ToPrimitive(O);
	            // 3. If tv is a Number and is not finite, return null.
	            if (typeof tv === 'number' && !isFinite(tv)) {
	                return null;
	            }
	            // 4. Let toISO be the result of calling the [[Get]] internal method of
	            // O with argument "toISOString".
	            var toISO = O.toISOString;
	            // 5. If IsCallable(toISO) is false, throw a TypeError exception.
	            if (!isCallable(toISO)) {
	                throw new TypeError('toISOString property is not callable');
	            }
	            // 6. Return the result of calling the [[Call]] internal method of
	            //  toISO with O as the this value and an empty argument list.
	            return toISO.call(O);

	            // NOTE 1 The argument is ignored.

	            // NOTE 2 The toJSON function is intentionally generic; it does not
	            // require that its this value be a Date object. Therefore, it can be
	            // transferred to other kinds of objects for use as a method. However,
	            // it does require that any such object have a toISOString method. An
	            // object is free to use the argument key to filter its
	            // stringification.
	        };
	    }

	    // ES5 15.9.4.2
	    // http://es5.github.com/#x15.9.4.2
	    // based on work shared by Daniel Friesen (dantman)
	    // http://gist.github.com/303249
	    var supportsExtendedYears = Date.parse('+033658-09-27T01:46:40.000Z') === 1e15;
	    var acceptsInvalidDates = !isNaN(Date.parse('2012-04-04T24:00:00.500Z')) || !isNaN(Date.parse('2012-11-31T23:59:59.000Z')) || !isNaN(Date.parse('2012-12-31T23:59:60.000Z'));
	    var doesNotParseY2KNewYear = isNaN(Date.parse('2000-01-01T00:00:00.000Z'));
	    if (doesNotParseY2KNewYear || acceptsInvalidDates || !supportsExtendedYears) {
	        // XXX global assignment won't work in embeddings that use
	        // an alternate object for the context.
	        /* global Date: true */
	        /* eslint-disable no-undef */
	        var maxSafeUnsigned32Bit = Math.pow(2, 31) - 1;
	        var hasSafariSignedIntBug = isActualNaN(new Date(1970, 0, 1, 0, 0, 0, maxSafeUnsigned32Bit + 1).getTime());
	        /* eslint-disable no-implicit-globals */
	        Date = (function (NativeDate) {
	        /* eslint-enable no-implicit-globals */
	        /* eslint-enable no-undef */
	            // Date.length === 7
	            var DateShim = function Date(Y, M, D, h, m, s, ms) {
	                var length = arguments.length;
	                var date;
	                if (this instanceof NativeDate) {
	                    var seconds = s;
	                    var millis = ms;
	                    if (hasSafariSignedIntBug && length >= 7 && ms > maxSafeUnsigned32Bit) {
	                        // work around a Safari 8/9 bug where it treats the seconds as signed
	                        var msToShift = Math.floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;
	                        var sToShift = Math.floor(msToShift / 1e3);
	                        seconds += sToShift;
	                        millis -= sToShift * 1e3;
	                    }
	                    date = length === 1 && $String(Y) === Y ? // isString(Y)
	                        // We explicitly pass it through parse:
	                        new NativeDate(DateShim.parse(Y)) :
	                        // We have to manually make calls depending on argument
	                        // length here
	                        length >= 7 ? new NativeDate(Y, M, D, h, m, seconds, millis) :
	                        length >= 6 ? new NativeDate(Y, M, D, h, m, seconds) :
	                        length >= 5 ? new NativeDate(Y, M, D, h, m) :
	                        length >= 4 ? new NativeDate(Y, M, D, h) :
	                        length >= 3 ? new NativeDate(Y, M, D) :
	                        length >= 2 ? new NativeDate(Y, M) :
	                        length >= 1 ? new NativeDate(Y instanceof NativeDate ? +Y : Y) :
	                                      new NativeDate();
	                } else {
	                    date = NativeDate.apply(this, arguments);
	                }
	                if (!isPrimitive(date)) {
	                    // Prevent mixups with unfixed Date object
	                    defineProperties(date, { constructor: DateShim }, true);
	                }
	                return date;
	            };

	            // 15.9.1.15 Date Time String Format.
	            var isoDateExpression = new RegExp('^' +
	                '(\\d{4}|[+-]\\d{6})' + // four-digit year capture or sign +
	                                          // 6-digit extended year
	                '(?:-(\\d{2})' + // optional month capture
	                '(?:-(\\d{2})' + // optional day capture
	                '(?:' + // capture hours:minutes:seconds.milliseconds
	                    'T(\\d{2})' + // hours capture
	                    ':(\\d{2})' + // minutes capture
	                    '(?:' + // optional :seconds.milliseconds
	                        ':(\\d{2})' + // seconds capture
	                        '(?:(\\.\\d{1,}))?' + // milliseconds capture
	                    ')?' +
	                '(' + // capture UTC offset component
	                    'Z|' + // UTC capture
	                    '(?:' + // offset specifier +/-hours:minutes
	                        '([-+])' + // sign capture
	                        '(\\d{2})' + // hours offset capture
	                        ':(\\d{2})' + // minutes offset capture
	                    ')' +
	                ')?)?)?)?' +
	            '$');

	            var months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

	            var dayFromMonth = function dayFromMonth(year, month) {
	                var t = month > 1 ? 1 : 0;
	                return (
	                    months[month] +
	                    Math.floor((year - 1969 + t) / 4) -
	                    Math.floor((year - 1901 + t) / 100) +
	                    Math.floor((year - 1601 + t) / 400) +
	                    365 * (year - 1970)
	                );
	            };

	            var toUTC = function toUTC(t) {
	                var s = 0;
	                var ms = t;
	                if (hasSafariSignedIntBug && ms > maxSafeUnsigned32Bit) {
	                    // work around a Safari 8/9 bug where it treats the seconds as signed
	                    var msToShift = Math.floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;
	                    var sToShift = Math.floor(msToShift / 1e3);
	                    s += sToShift;
	                    ms -= sToShift * 1e3;
	                }
	                return $Number(new NativeDate(1970, 0, 1, 0, 0, s, ms));
	            };

	            // Copy any custom methods a 3rd party library may have added
	            for (var key in NativeDate) {
	                if (owns(NativeDate, key)) {
	                    DateShim[key] = NativeDate[key];
	                }
	            }

	            // Copy "native" methods explicitly; they may be non-enumerable
	            defineProperties(DateShim, {
	                now: NativeDate.now,
	                UTC: NativeDate.UTC
	            }, true);
	            DateShim.prototype = NativeDate.prototype;
	            defineProperties(DateShim.prototype, {
	                constructor: DateShim
	            }, true);

	            // Upgrade Date.parse to handle simplified ISO 8601 strings
	            var parseShim = function parse(string) {
	                var match = isoDateExpression.exec(string);
	                if (match) {
	                    // parse months, days, hours, minutes, seconds, and milliseconds
	                    // provide default values if necessary
	                    // parse the UTC offset component
	                    var year = $Number(match[1]),
	                        month = $Number(match[2] || 1) - 1,
	                        day = $Number(match[3] || 1) - 1,
	                        hour = $Number(match[4] || 0),
	                        minute = $Number(match[5] || 0),
	                        second = $Number(match[6] || 0),
	                        millisecond = Math.floor($Number(match[7] || 0) * 1000),
	                        // When time zone is missed, local offset should be used
	                        // (ES 5.1 bug)
	                        // see https://bugs.ecmascript.org/show_bug.cgi?id=112
	                        isLocalTime = Boolean(match[4] && !match[8]),
	                        signOffset = match[9] === '-' ? 1 : -1,
	                        hourOffset = $Number(match[10] || 0),
	                        minuteOffset = $Number(match[11] || 0),
	                        result;
	                    var hasMinutesOrSecondsOrMilliseconds = minute > 0 || second > 0 || millisecond > 0;
	                    if (
	                        hour < (hasMinutesOrSecondsOrMilliseconds ? 24 : 25) &&
	                        minute < 60 && second < 60 && millisecond < 1000 &&
	                        month > -1 && month < 12 && hourOffset < 24 &&
	                        minuteOffset < 60 && // detect invalid offsets
	                        day > -1 &&
	                        day < (dayFromMonth(year, month + 1) - dayFromMonth(year, month))
	                    ) {
	                        result = (
	                            (dayFromMonth(year, month) + day) * 24 +
	                            hour +
	                            hourOffset * signOffset
	                        ) * 60;
	                        result = (
	                            (result + minute + minuteOffset * signOffset) * 60 +
	                            second
	                        ) * 1000 + millisecond;
	                        if (isLocalTime) {
	                            result = toUTC(result);
	                        }
	                        if (-8.64e15 <= result && result <= 8.64e15) {
	                            return result;
	                        }
	                    }
	                    return NaN;
	                }
	                return NativeDate.parse.apply(this, arguments);
	            };
	            defineProperties(DateShim, { parse: parseShim });

	            return DateShim;
	        }(Date));
	        /* global Date: false */
	    }

	    // ES5 15.9.4.4
	    // http://es5.github.com/#x15.9.4.4
	    if (!Date.now) {
	        Date.now = function now() {
	            return new Date().getTime();
	        };
	    }

	    //
	    // Number
	    // ======
	    //

	    // ES5.1 15.7.4.5
	    // http://es5.github.com/#x15.7.4.5
	    var hasToFixedBugs = NumberPrototype.toFixed && (
	      (0.00008).toFixed(3) !== '0.000' ||
	      (0.9).toFixed(0) !== '1' ||
	      (1.255).toFixed(2) !== '1.25' ||
	      (1000000000000000128).toFixed(0) !== '1000000000000000128'
	    );

	    var toFixedHelpers = {
	        base: 1e7,
	        size: 6,
	        data: [0, 0, 0, 0, 0, 0],
	        multiply: function multiply(n, c) {
	            var i = -1;
	            var c2 = c;
	            while (++i < toFixedHelpers.size) {
	                c2 += n * toFixedHelpers.data[i];
	                toFixedHelpers.data[i] = c2 % toFixedHelpers.base;
	                c2 = Math.floor(c2 / toFixedHelpers.base);
	            }
	        },
	        divide: function divide(n) {
	            var i = toFixedHelpers.size;
	            var c = 0;
	            while (--i >= 0) {
	                c += toFixedHelpers.data[i];
	                toFixedHelpers.data[i] = Math.floor(c / n);
	                c = (c % n) * toFixedHelpers.base;
	            }
	        },
	        numToString: function numToString() {
	            var i = toFixedHelpers.size;
	            var s = '';
	            while (--i >= 0) {
	                if (s !== '' || i === 0 || toFixedHelpers.data[i] !== 0) {
	                    var t = $String(toFixedHelpers.data[i]);
	                    if (s === '') {
	                        s = t;
	                    } else {
	                        s += strSlice('0000000', 0, 7 - t.length) + t;
	                    }
	                }
	            }
	            return s;
	        },
	        pow: function pow(x, n, acc) {
	            return (n === 0 ? acc : (n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc)));
	        },
	        log: function log(x) {
	            var n = 0;
	            var x2 = x;
	            while (x2 >= 4096) {
	                n += 12;
	                x2 /= 4096;
	            }
	            while (x2 >= 2) {
	                n += 1;
	                x2 /= 2;
	            }
	            return n;
	        }
	    };

	    var toFixedShim = function toFixed(fractionDigits) {
	        var f, x, s, m, e, z, j, k;

	        // Test for NaN and round fractionDigits down
	        f = $Number(fractionDigits);
	        f = isActualNaN(f) ? 0 : Math.floor(f);

	        if (f < 0 || f > 20) {
	            throw new RangeError('Number.toFixed called with invalid number of decimals');
	        }

	        x = $Number(this);

	        if (isActualNaN(x)) {
	            return 'NaN';
	        }

	        // If it is too big or small, return the string value of the number
	        if (x <= -1e21 || x >= 1e21) {
	            return $String(x);
	        }

	        s = '';

	        if (x < 0) {
	            s = '-';
	            x = -x;
	        }

	        m = '0';

	        if (x > 1e-21) {
	            // 1e-21 < x < 1e21
	            // -70 < log2(x) < 70
	            e = toFixedHelpers.log(x * toFixedHelpers.pow(2, 69, 1)) - 69;
	            z = (e < 0 ? x * toFixedHelpers.pow(2, -e, 1) : x / toFixedHelpers.pow(2, e, 1));
	            z *= 0x10000000000000; // Math.pow(2, 52);
	            e = 52 - e;

	            // -18 < e < 122
	            // x = z / 2 ^ e
	            if (e > 0) {
	                toFixedHelpers.multiply(0, z);
	                j = f;

	                while (j >= 7) {
	                    toFixedHelpers.multiply(1e7, 0);
	                    j -= 7;
	                }

	                toFixedHelpers.multiply(toFixedHelpers.pow(10, j, 1), 0);
	                j = e - 1;

	                while (j >= 23) {
	                    toFixedHelpers.divide(1 << 23);
	                    j -= 23;
	                }

	                toFixedHelpers.divide(1 << j);
	                toFixedHelpers.multiply(1, 1);
	                toFixedHelpers.divide(2);
	                m = toFixedHelpers.numToString();
	            } else {
	                toFixedHelpers.multiply(0, z);
	                toFixedHelpers.multiply(1 << (-e), 0);
	                m = toFixedHelpers.numToString() + strSlice('0.00000000000000000000', 2, 2 + f);
	            }
	        }

	        if (f > 0) {
	            k = m.length;

	            if (k <= f) {
	                m = s + strSlice('0.0000000000000000000', 0, f - k + 2) + m;
	            } else {
	                m = s + strSlice(m, 0, k - f) + '.' + strSlice(m, k - f);
	            }
	        } else {
	            m = s + m;
	        }

	        return m;
	    };
	    defineProperties(NumberPrototype, { toFixed: toFixedShim }, hasToFixedBugs);

	    var hasToPrecisionUndefinedBug = (function () {
	        try {
	            return 1.0.toPrecision(undefined) === '1';
	        } catch (e) {
	            return true;
	        }
	    }());
	    var originalToPrecision = NumberPrototype.toPrecision;
	    defineProperties(NumberPrototype, {
	        toPrecision: function toPrecision(precision) {
	            return typeof precision === 'undefined' ? originalToPrecision.call(this) : originalToPrecision.call(this, precision);
	        }
	    }, hasToPrecisionUndefinedBug);

	    //
	    // String
	    // ======
	    //

	    // ES5 15.5.4.14
	    // http://es5.github.com/#x15.5.4.14

	    // [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
	    // Many browsers do not split properly with regular expressions or they
	    // do not perform the split correctly under obscure conditions.
	    // See http://blog.stevenlevithan.com/archives/cross-browser-split
	    // I've tested in many browsers and this seems to cover the deviant ones:
	    //    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
	    //    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
	    //    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
	    //       [undefined, "t", undefined, "e", ...]
	    //    ''.split(/.?/) should be [], not [""]
	    //    '.'.split(/()()/) should be ["."], not ["", "", "."]

	    if (
	        'ab'.split(/(?:ab)*/).length !== 2 ||
	        '.'.split(/(.?)(.?)/).length !== 4 ||
	        'tesst'.split(/(s)*/)[1] === 't' ||
	        'test'.split(/(?:)/, -1).length !== 4 ||
	        ''.split(/.?/).length ||
	        '.'.split(/()()/).length > 1
	    ) {
	        (function () {
	            var compliantExecNpcg = typeof (/()??/).exec('')[1] === 'undefined'; // NPCG: nonparticipating capturing group
	            var maxSafe32BitInt = Math.pow(2, 32) - 1;

	            StringPrototype.split = function (separator, limit) {
	                var string = String(this);
	                if (typeof separator === 'undefined' && limit === 0) {
	                    return [];
	                }

	                // If `separator` is not a regex, use native split
	                if (!isRegex(separator)) {
	                    return strSplit(this, separator, limit);
	                }

	                var output = [];
	                var flags = (separator.ignoreCase ? 'i' : '') +
	                            (separator.multiline ? 'm' : '') +
	                            (separator.unicode ? 'u' : '') + // in ES6
	                            (separator.sticky ? 'y' : ''), // Firefox 3+ and ES6
	                    lastLastIndex = 0,
	                    // Make `global` and avoid `lastIndex` issues by working with a copy
	                    separator2, match, lastIndex, lastLength;
	                var separatorCopy = new RegExp(separator.source, flags + 'g');
	                if (!compliantExecNpcg) {
	                    // Doesn't need flags gy, but they don't hurt
	                    separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	                }
	                /* Values for `limit`, per the spec:
	                 * If undefined: 4294967295 // maxSafe32BitInt
	                 * If 0, Infinity, or NaN: 0
	                 * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
	                 * If negative number: 4294967296 - Math.floor(Math.abs(limit))
	                 * If other: Type-convert, then use the above rules
	                 */
	                var splitLimit = typeof limit === 'undefined' ? maxSafe32BitInt : ES.ToUint32(limit);
	                match = separatorCopy.exec(string);
	                while (match) {
	                    // `separatorCopy.lastIndex` is not reliable cross-browser
	                    lastIndex = match.index + match[0].length;
	                    if (lastIndex > lastLastIndex) {
	                        pushCall(output, strSlice(string, lastLastIndex, match.index));
	                        // Fix browsers whose `exec` methods don't consistently return `undefined` for
	                        // nonparticipating capturing groups
	                        if (!compliantExecNpcg && match.length > 1) {
	                            /* eslint-disable no-loop-func */
	                            match[0].replace(separator2, function () {
	                                for (var i = 1; i < arguments.length - 2; i++) {
	                                    if (typeof arguments[i] === 'undefined') {
	                                        match[i] = void 0;
	                                    }
	                                }
	                            });
	                            /* eslint-enable no-loop-func */
	                        }
	                        if (match.length > 1 && match.index < string.length) {
	                            array_push.apply(output, arraySlice(match, 1));
	                        }
	                        lastLength = match[0].length;
	                        lastLastIndex = lastIndex;
	                        if (output.length >= splitLimit) {
	                            break;
	                        }
	                    }
	                    if (separatorCopy.lastIndex === match.index) {
	                        separatorCopy.lastIndex++; // Avoid an infinite loop
	                    }
	                    match = separatorCopy.exec(string);
	                }
	                if (lastLastIndex === string.length) {
	                    if (lastLength || !separatorCopy.test('')) {
	                        pushCall(output, '');
	                    }
	                } else {
	                    pushCall(output, strSlice(string, lastLastIndex));
	                }
	                return output.length > splitLimit ? arraySlice(output, 0, splitLimit) : output;
	            };
	        }());

	    // [bugfix, chrome]
	    // If separator is undefined, then the result array contains just one String,
	    // which is the this value (converted to a String). If limit is not undefined,
	    // then the output array is truncated so that it contains no more than limit
	    // elements.
	    // "0".split(undefined, 0) -> []
	    } else if ('0'.split(void 0, 0).length) {
	        StringPrototype.split = function split(separator, limit) {
	            if (typeof separator === 'undefined' && limit === 0) {
	                return [];
	            }
	            return strSplit(this, separator, limit);
	        };
	    }

	    var str_replace = StringPrototype.replace;
	    var replaceReportsGroupsCorrectly = (function () {
	        var groups = [];
	        'x'.replace(/x(.)?/g, function (match, group) {
	            pushCall(groups, group);
	        });
	        return groups.length === 1 && typeof groups[0] === 'undefined';
	    }());

	    if (!replaceReportsGroupsCorrectly) {
	        StringPrototype.replace = function replace(searchValue, replaceValue) {
	            var isFn = isCallable(replaceValue);
	            var hasCapturingGroups = isRegex(searchValue) && (/\)[*?]/).test(searchValue.source);
	            if (!isFn || !hasCapturingGroups) {
	                return str_replace.call(this, searchValue, replaceValue);
	            } else {
	                var wrappedReplaceValue = function (match) {
	                    var length = arguments.length;
	                    var originalLastIndex = searchValue.lastIndex;
	                    searchValue.lastIndex = 0;
	                    var args = searchValue.exec(match) || [];
	                    searchValue.lastIndex = originalLastIndex;
	                    pushCall(args, arguments[length - 2], arguments[length - 1]);
	                    return replaceValue.apply(this, args);
	                };
	                return str_replace.call(this, searchValue, wrappedReplaceValue);
	            }
	        };
	    }

	    // ECMA-262, 3rd B.2.3
	    // Not an ECMAScript standard, although ECMAScript 3rd Edition has a
	    // non-normative section suggesting uniform semantics and it should be
	    // normalized across all browsers
	    // [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
	    var string_substr = StringPrototype.substr;
	    var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
	    defineProperties(StringPrototype, {
	        substr: function substr(start, length) {
	            var normalizedStart = start;
	            if (start < 0) {
	                normalizedStart = max(this.length + start, 0);
	            }
	            return string_substr.call(this, normalizedStart, length);
	        }
	    }, hasNegativeSubstrBug);

	    // ES5 15.5.4.20
	    // whitespace from: http://es5.github.io/#x15.5.4.20
	    var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	        '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' +
	        '\u2029\uFEFF';
	    var zeroWidth = '\u200b';
	    var wsRegexChars = '[' + ws + ']';
	    var trimBeginRegexp = new RegExp('^' + wsRegexChars + wsRegexChars + '*');
	    var trimEndRegexp = new RegExp(wsRegexChars + wsRegexChars + '*$');
	    var hasTrimWhitespaceBug = StringPrototype.trim && (ws.trim() || !zeroWidth.trim());
	    defineProperties(StringPrototype, {
	        // http://blog.stevenlevithan.com/archives/faster-trim-javascript
	        // http://perfectionkills.com/whitespace-deviations/
	        trim: function trim() {
	            if (typeof this === 'undefined' || this === null) {
	                throw new TypeError("can't convert " + this + ' to object');
	            }
	            return $String(this).replace(trimBeginRegexp, '').replace(trimEndRegexp, '');
	        }
	    }, hasTrimWhitespaceBug);
	    var trim = call.bind(String.prototype.trim);

	    var hasLastIndexBug = StringPrototype.lastIndexOf && 'abcあい'.lastIndexOf('あい', 2) !== -1;
	    defineProperties(StringPrototype, {
	        lastIndexOf: function lastIndexOf(searchString) {
	            if (typeof this === 'undefined' || this === null) {
	                throw new TypeError("can't convert " + this + ' to object');
	            }
	            var S = $String(this);
	            var searchStr = $String(searchString);
	            var numPos = arguments.length > 1 ? $Number(arguments[1]) : NaN;
	            var pos = isActualNaN(numPos) ? Infinity : ES.ToInteger(numPos);
	            var start = min(max(pos, 0), S.length);
	            var searchLen = searchStr.length;
	            var k = start + searchLen;
	            while (k > 0) {
	                k = max(0, k - searchLen);
	                var index = strIndexOf(strSlice(S, k, start + searchLen), searchStr);
	                if (index !== -1) {
	                    return k + index;
	                }
	            }
	            return -1;
	        }
	    }, hasLastIndexBug);

	    var originalLastIndexOf = StringPrototype.lastIndexOf;
	    defineProperties(StringPrototype, {
	        lastIndexOf: function lastIndexOf(searchString) {
	            return originalLastIndexOf.apply(this, arguments);
	        }
	    }, StringPrototype.lastIndexOf.length !== 1);

	    // ES-5 15.1.2.2
	    /* eslint-disable radix */
	    if (parseInt(ws + '08') !== 8 || parseInt(ws + '0x16') !== 22) {
	    /* eslint-enable radix */
	        /* global parseInt: true */
	        parseInt = (function (origParseInt) {
	            var hexRegex = /^[\-+]?0[xX]/;
	            return function parseInt(str, radix) {
	                var string = trim(String(str));
	                var defaultedRadix = $Number(radix) || (hexRegex.test(string) ? 16 : 10);
	                return origParseInt(string, defaultedRadix);
	            };
	        }(parseInt));
	    }

	    // https://es5.github.io/#x15.1.2.3
	    if (1 / parseFloat('-0') !== -Infinity) {
	        /* global parseFloat: true */
	        parseFloat = (function (origParseFloat) {
	            return function parseFloat(string) {
	                var inputString = trim(String(string));
	                var result = origParseFloat(inputString);
	                return result === 0 && strSlice(inputString, 0, 1) === '-' ? -0 : result;
	            };
	        }(parseFloat));
	    }

	    if (String(new RangeError('test')) !== 'RangeError: test') {
	        var errorToStringShim = function toString() {
	            if (typeof this === 'undefined' || this === null) {
	                throw new TypeError("can't convert " + this + ' to object');
	            }
	            var name = this.name;
	            if (typeof name === 'undefined') {
	                name = 'Error';
	            } else if (typeof name !== 'string') {
	                name = $String(name);
	            }
	            var msg = this.message;
	            if (typeof msg === 'undefined') {
	                msg = '';
	            } else if (typeof msg !== 'string') {
	                msg = $String(msg);
	            }
	            if (!name) {
	                return msg;
	            }
	            if (!msg) {
	                return name;
	            }
	            return name + ': ' + msg;
	        };
	        // can't use defineProperties here because of toString enumeration issue in IE <= 8
	        Error.prototype.toString = errorToStringShim;
	    }

	    if (supportsDescriptors) {
	        var ensureNonEnumerable = function (obj, prop) {
	            if (isEnum(obj, prop)) {
	                var desc = Object.getOwnPropertyDescriptor(obj, prop);
	                if (desc.configurable) {
	                    desc.enumerable = false;
	                    Object.defineProperty(obj, prop, desc);
	                }
	            }
	        };
	        ensureNonEnumerable(Error.prototype, 'message');
	        if (Error.prototype.message !== '') {
	            Error.prototype.message = '';
	        }
	        ensureNonEnumerable(Error.prototype, 'name');
	    }

	    if (String(/a/mig) !== '/a/gim') {
	        var regexToString = function toString() {
	            var str = '/' + this.source + '/';
	            if (this.global) {
	                str += 'g';
	            }
	            if (this.ignoreCase) {
	                str += 'i';
	            }
	            if (this.multiline) {
	                str += 'm';
	            }
	            return str;
	        };
	        // can't use defineProperties here because of toString enumeration issue in IE <= 8
	        RegExp.prototype.toString = regexToString;
	    }
	}));


/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * https://github.com/es-shims/es5-shim
	 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
	 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
	 */

	// vim: ts=4 sts=4 sw=4 expandtab

	// Add semicolon to prevent IIFE from being passed as argument to concatenated code.
	;

	// UMD (Universal Module Definition)
	// see https://github.com/umdjs/umd/blob/master/templates/returnExports.js
	(function (root, factory) {
	    'use strict';

	    /* global define, exports, module */
	    if (true) {
	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        // Node. Does not work with strict CommonJS, but
	        // only CommonJS-like enviroments that support module.exports,
	        // like Node.
	        module.exports = factory();
	    } else {
	        // Browser globals (root is window)
	        root.returnExports = factory();
	    }
	}(this, function () {

	    var call = Function.call;
	    var prototypeOfObject = Object.prototype;
	    var owns = call.bind(prototypeOfObject.hasOwnProperty);
	    var isEnumerable = call.bind(prototypeOfObject.propertyIsEnumerable);
	    var toStr = call.bind(prototypeOfObject.toString);

	    // If JS engine supports accessors creating shortcuts.
	    var defineGetter;
	    var defineSetter;
	    var lookupGetter;
	    var lookupSetter;
	    var supportsAccessors = owns(prototypeOfObject, '__defineGetter__');
	    if (supportsAccessors) {
	        /* eslint-disable no-underscore-dangle */
	        defineGetter = call.bind(prototypeOfObject.__defineGetter__);
	        defineSetter = call.bind(prototypeOfObject.__defineSetter__);
	        lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
	        lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
	        /* eslint-enable no-underscore-dangle */
	    }

	    var isPrimitive = function isPrimitive(o) {
	        return o == null || (typeof o !== 'object' && typeof o !== 'function');
	    };

	    // ES5 15.2.3.2
	    // http://es5.github.com/#x15.2.3.2
	    if (!Object.getPrototypeOf) {
	        // https://github.com/es-shims/es5-shim/issues#issue/2
	        // http://ejohn.org/blog/objectgetprototypeof/
	        // recommended by fschaefer on github
	        //
	        // sure, and webreflection says ^_^
	        // ... this will nerever possibly return null
	        // ... Opera Mini breaks here with infinite loops
	        Object.getPrototypeOf = function getPrototypeOf(object) {
	            /* eslint-disable no-proto */
	            var proto = object.__proto__;
	            /* eslint-enable no-proto */
	            if (proto || proto === null) {
	                return proto;
	            } else if (toStr(object.constructor) === '[object Function]') {
	                return object.constructor.prototype;
	            } else if (object instanceof Object) {
	                return prototypeOfObject;
	            } else {
	                // Correctly return null for Objects created with `Object.create(null)`
	                // (shammed or native) or `{ __proto__: null}`.  Also returns null for
	                // cross-realm objects on browsers that lack `__proto__` support (like
	                // IE <11), but that's the best we can do.
	                return null;
	            }
	        };
	    }

	    // ES5 15.2.3.3
	    // http://es5.github.com/#x15.2.3.3

	    var doesGetOwnPropertyDescriptorWork = function doesGetOwnPropertyDescriptorWork(object) {
	        try {
	            object.sentinel = 0;
	            return Object.getOwnPropertyDescriptor(object, 'sentinel').value === 0;
	        } catch (exception) {
	            return false;
	        }
	    };

	    // check whether getOwnPropertyDescriptor works if it's given. Otherwise, shim partially.
	    if (Object.defineProperty) {
	        var getOwnPropertyDescriptorWorksOnObject = doesGetOwnPropertyDescriptorWork({});
	        var getOwnPropertyDescriptorWorksOnDom = typeof document === 'undefined' ||
	        doesGetOwnPropertyDescriptorWork(document.createElement('div'));
	        if (!getOwnPropertyDescriptorWorksOnDom || !getOwnPropertyDescriptorWorksOnObject) {
	            var getOwnPropertyDescriptorFallback = Object.getOwnPropertyDescriptor;
	        }
	    }

	    if (!Object.getOwnPropertyDescriptor || getOwnPropertyDescriptorFallback) {
	        var ERR_NON_OBJECT = 'Object.getOwnPropertyDescriptor called on a non-object: ';

	        /* eslint-disable no-proto */
	        Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
	            if (isPrimitive(object)) {
	                throw new TypeError(ERR_NON_OBJECT + object);
	            }

	            // make a valiant attempt to use the real getOwnPropertyDescriptor
	            // for I8's DOM elements.
	            if (getOwnPropertyDescriptorFallback) {
	                try {
	                    return getOwnPropertyDescriptorFallback.call(Object, object, property);
	                } catch (exception) {
	                    // try the shim if the real one doesn't work
	                }
	            }

	            var descriptor;

	            // If object does not owns property return undefined immediately.
	            if (!owns(object, property)) {
	                return descriptor;
	            }

	            // If object has a property then it's for sure `configurable`, and
	            // probably `enumerable`. Detect enumerability though.
	            descriptor = {
	                enumerable: isEnumerable(object, property),
	                configurable: true
	            };

	            // If JS engine supports accessor properties then property may be a
	            // getter or setter.
	            if (supportsAccessors) {
	                // Unfortunately `__lookupGetter__` will return a getter even
	                // if object has own non getter property along with a same named
	                // inherited getter. To avoid misbehavior we temporary remove
	                // `__proto__` so that `__lookupGetter__` will return getter only
	                // if it's owned by an object.
	                var prototype = object.__proto__;
	                var notPrototypeOfObject = object !== prototypeOfObject;
	                // avoid recursion problem, breaking in Opera Mini when
	                // Object.getOwnPropertyDescriptor(Object.prototype, 'toString')
	                // or any other Object.prototype accessor
	                if (notPrototypeOfObject) {
	                    object.__proto__ = prototypeOfObject;
	                }

	                var getter = lookupGetter(object, property);
	                var setter = lookupSetter(object, property);

	                if (notPrototypeOfObject) {
	                    // Once we have getter and setter we can put values back.
	                    object.__proto__ = prototype;
	                }

	                if (getter || setter) {
	                    if (getter) {
	                        descriptor.get = getter;
	                    }
	                    if (setter) {
	                        descriptor.set = setter;
	                    }
	                    // If it was accessor property we're done and return here
	                    // in order to avoid adding `value` to the descriptor.
	                    return descriptor;
	                }
	            }

	            // If we got this far we know that object has an own property that is
	            // not an accessor so we set it as a value and return descriptor.
	            descriptor.value = object[property];
	            descriptor.writable = true;
	            return descriptor;
	        };
	        /* eslint-enable no-proto */
	    }

	    // ES5 15.2.3.4
	    // http://es5.github.com/#x15.2.3.4
	    if (!Object.getOwnPropertyNames) {
	        Object.getOwnPropertyNames = function getOwnPropertyNames(object) {
	            return Object.keys(object);
	        };
	    }

	    // ES5 15.2.3.5
	    // http://es5.github.com/#x15.2.3.5
	    if (!Object.create) {

	        // Contributed by Brandon Benvie, October, 2012
	        var createEmpty;
	        var supportsProto = !({ __proto__: null } instanceof Object);
	                            // the following produces false positives
	                            // in Opera Mini => not a reliable check
	                            // Object.prototype.__proto__ === null

	        // Check for document.domain and active x support
	        // No need to use active x approach when document.domain is not set
	        // see https://github.com/es-shims/es5-shim/issues/150
	        // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	        /* global ActiveXObject */
	        var shouldUseActiveX = function shouldUseActiveX() {
	            // return early if document.domain not set
	            if (!document.domain) {
	                return false;
	            }

	            try {
	                return !!new ActiveXObject('htmlfile');
	            } catch (exception) {
	                return false;
	            }
	        };

	        // This supports IE8 when document.domain is used
	        // see https://github.com/es-shims/es5-shim/issues/150
	        // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	        var getEmptyViaActiveX = function getEmptyViaActiveX() {
	            var empty;
	            var xDoc;

	            xDoc = new ActiveXObject('htmlfile');

	            var script = 'script';
	            xDoc.write('<' + script + '></' + script + '>');
	            xDoc.close();

	            empty = xDoc.parentWindow.Object.prototype;
	            xDoc = null;

	            return empty;
	        };

	        // The original implementation using an iframe
	        // before the activex approach was added
	        // see https://github.com/es-shims/es5-shim/issues/150
	        var getEmptyViaIFrame = function getEmptyViaIFrame() {
	            var iframe = document.createElement('iframe');
	            var parent = document.body || document.documentElement;
	            var empty;

	            iframe.style.display = 'none';
	            parent.appendChild(iframe);
	            /* eslint-disable no-script-url */
	            iframe.src = 'javascript:';
	            /* eslint-enable no-script-url */

	            empty = iframe.contentWindow.Object.prototype;
	            parent.removeChild(iframe);
	            iframe = null;

	            return empty;
	        };

	        /* global document */
	        if (supportsProto || typeof document === 'undefined') {
	            createEmpty = function () {
	                return { __proto__: null };
	            };
	        } else {
	            // In old IE __proto__ can't be used to manually set `null`, nor does
	            // any other method exist to make an object that inherits from nothing,
	            // aside from Object.prototype itself. Instead, create a new global
	            // object and *steal* its Object.prototype and strip it bare. This is
	            // used as the prototype to create nullary objects.
	            createEmpty = function () {
	                // Determine which approach to use
	                // see https://github.com/es-shims/es5-shim/issues/150
	                var empty = shouldUseActiveX() ? getEmptyViaActiveX() : getEmptyViaIFrame();

	                delete empty.constructor;
	                delete empty.hasOwnProperty;
	                delete empty.propertyIsEnumerable;
	                delete empty.isPrototypeOf;
	                delete empty.toLocaleString;
	                delete empty.toString;
	                delete empty.valueOf;

	                var Empty = function Empty() {};
	                Empty.prototype = empty;
	                // short-circuit future calls
	                createEmpty = function () {
	                    return new Empty();
	                };
	                return new Empty();
	            };
	        }

	        Object.create = function create(prototype, properties) {

	            var object;
	            var Type = function Type() {}; // An empty constructor.

	            if (prototype === null) {
	                object = createEmpty();
	            } else {
	                if (prototype !== null && isPrimitive(prototype)) {
	                    // In the native implementation `parent` can be `null`
	                    // OR *any* `instanceof Object`  (Object|Function|Array|RegExp|etc)
	                    // Use `typeof` tho, b/c in old IE, DOM elements are not `instanceof Object`
	                    // like they are in modern browsers. Using `Object.create` on DOM elements
	                    // is...err...probably inappropriate, but the native version allows for it.
	                    throw new TypeError('Object prototype may only be an Object or null'); // same msg as Chrome
	                }
	                Type.prototype = prototype;
	                object = new Type();
	                // IE has no built-in implementation of `Object.getPrototypeOf`
	                // neither `__proto__`, but this manually setting `__proto__` will
	                // guarantee that `Object.getPrototypeOf` will work as expected with
	                // objects created using `Object.create`
	                /* eslint-disable no-proto */
	                object.__proto__ = prototype;
	                /* eslint-enable no-proto */
	            }

	            if (properties !== void 0) {
	                Object.defineProperties(object, properties);
	            }

	            return object;
	        };
	    }

	    // ES5 15.2.3.6
	    // http://es5.github.com/#x15.2.3.6

	    // Patch for WebKit and IE8 standard mode
	    // Designed by hax <hax.github.com>
	    // related issue: https://github.com/es-shims/es5-shim/issues#issue/5
	    // IE8 Reference:
	    //     http://msdn.microsoft.com/en-us/library/dd282900.aspx
	    //     http://msdn.microsoft.com/en-us/library/dd229916.aspx
	    // WebKit Bugs:
	    //     https://bugs.webkit.org/show_bug.cgi?id=36423

	    var doesDefinePropertyWork = function doesDefinePropertyWork(object) {
	        try {
	            Object.defineProperty(object, 'sentinel', {});
	            return 'sentinel' in object;
	        } catch (exception) {
	            return false;
	        }
	    };

	    // check whether defineProperty works if it's given. Otherwise,
	    // shim partially.
	    if (Object.defineProperty) {
	        var definePropertyWorksOnObject = doesDefinePropertyWork({});
	        var definePropertyWorksOnDom = typeof document === 'undefined' ||
	            doesDefinePropertyWork(document.createElement('div'));
	        if (!definePropertyWorksOnObject || !definePropertyWorksOnDom) {
	            var definePropertyFallback = Object.defineProperty,
	                definePropertiesFallback = Object.defineProperties;
	        }
	    }

	    if (!Object.defineProperty || definePropertyFallback) {
	        var ERR_NON_OBJECT_DESCRIPTOR = 'Property description must be an object: ';
	        var ERR_NON_OBJECT_TARGET = 'Object.defineProperty called on non-object: ';
	        var ERR_ACCESSORS_NOT_SUPPORTED = 'getters & setters can not be defined on this javascript engine';

	        Object.defineProperty = function defineProperty(object, property, descriptor) {
	            if (isPrimitive(object)) {
	                throw new TypeError(ERR_NON_OBJECT_TARGET + object);
	            }
	            if (isPrimitive(descriptor)) {
	                throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR + descriptor);
	            }
	            // make a valiant attempt to use the real defineProperty
	            // for I8's DOM elements.
	            if (definePropertyFallback) {
	                try {
	                    return definePropertyFallback.call(Object, object, property, descriptor);
	                } catch (exception) {
	                    // try the shim if the real one doesn't work
	                }
	            }

	            // If it's a data property.
	            if ('value' in descriptor) {
	                // fail silently if 'writable', 'enumerable', or 'configurable'
	                // are requested but not supported
	                /*
	                // alternate approach:
	                if ( // can't implement these features; allow false but not true
	                    ('writable' in descriptor && !descriptor.writable) ||
	                    ('enumerable' in descriptor && !descriptor.enumerable) ||
	                    ('configurable' in descriptor && !descriptor.configurable)
	                ))
	                    throw new RangeError(
	                        'This implementation of Object.defineProperty does not support configurable, enumerable, or writable.'
	                    );
	                */

	                if (supportsAccessors && (lookupGetter(object, property) || lookupSetter(object, property))) {
	                    // As accessors are supported only on engines implementing
	                    // `__proto__` we can safely override `__proto__` while defining
	                    // a property to make sure that we don't hit an inherited
	                    // accessor.
	                    /* eslint-disable no-proto */
	                    var prototype = object.__proto__;
	                    object.__proto__ = prototypeOfObject;
	                    // Deleting a property anyway since getter / setter may be
	                    // defined on object itself.
	                    delete object[property];
	                    object[property] = descriptor.value;
	                    // Setting original `__proto__` back now.
	                    object.__proto__ = prototype;
	                    /* eslint-enable no-proto */
	                } else {
	                    object[property] = descriptor.value;
	                }
	            } else {
	                var hasGetter = 'get' in descriptor;
	                var hasSetter = 'set' in descriptor;
	                if (!supportsAccessors && (hasGetter || hasSetter)) {
	                    throw new TypeError(ERR_ACCESSORS_NOT_SUPPORTED);
	                }
	                // If we got that far then getters and setters can be defined !!
	                if (hasGetter) {
	                    defineGetter(object, property, descriptor.get);
	                }
	                if (hasSetter) {
	                    defineSetter(object, property, descriptor.set);
	                }
	            }
	            return object;
	        };
	    }

	    // ES5 15.2.3.7
	    // http://es5.github.com/#x15.2.3.7
	    if (!Object.defineProperties || definePropertiesFallback) {
	        Object.defineProperties = function defineProperties(object, properties) {
	            // make a valiant attempt to use the real defineProperties
	            if (definePropertiesFallback) {
	                try {
	                    return definePropertiesFallback.call(Object, object, properties);
	                } catch (exception) {
	                    // try the shim if the real one doesn't work
	                }
	            }

	            Object.keys(properties).forEach(function (property) {
	                if (property !== '__proto__') {
	                    Object.defineProperty(object, property, properties[property]);
	                }
	            });
	            return object;
	        };
	    }

	    // ES5 15.2.3.8
	    // http://es5.github.com/#x15.2.3.8
	    if (!Object.seal) {
	        Object.seal = function seal(object) {
	            if (Object(object) !== object) {
	                throw new TypeError('Object.seal can only be called on Objects.');
	            }
	            // this is misleading and breaks feature-detection, but
	            // allows "securable" code to "gracefully" degrade to working
	            // but insecure code.
	            return object;
	        };
	    }

	    // ES5 15.2.3.9
	    // http://es5.github.com/#x15.2.3.9
	    if (!Object.freeze) {
	        Object.freeze = function freeze(object) {
	            if (Object(object) !== object) {
	                throw new TypeError('Object.freeze can only be called on Objects.');
	            }
	            // this is misleading and breaks feature-detection, but
	            // allows "securable" code to "gracefully" degrade to working
	            // but insecure code.
	            return object;
	        };
	    }

	    // detect a Rhino bug and patch it
	    try {
	        Object.freeze(function () {});
	    } catch (exception) {
	        Object.freeze = (function (freezeObject) {
	            return function freeze(object) {
	                if (typeof object === 'function') {
	                    return object;
	                } else {
	                    return freezeObject(object);
	                }
	            };
	        }(Object.freeze));
	    }

	    // ES5 15.2.3.10
	    // http://es5.github.com/#x15.2.3.10
	    if (!Object.preventExtensions) {
	        Object.preventExtensions = function preventExtensions(object) {
	            if (Object(object) !== object) {
	                throw new TypeError('Object.preventExtensions can only be called on Objects.');
	            }
	            // this is misleading and breaks feature-detection, but
	            // allows "securable" code to "gracefully" degrade to working
	            // but insecure code.
	            return object;
	        };
	    }

	    // ES5 15.2.3.11
	    // http://es5.github.com/#x15.2.3.11
	    if (!Object.isSealed) {
	        Object.isSealed = function isSealed(object) {
	            if (Object(object) !== object) {
	                throw new TypeError('Object.isSealed can only be called on Objects.');
	            }
	            return false;
	        };
	    }

	    // ES5 15.2.3.12
	    // http://es5.github.com/#x15.2.3.12
	    if (!Object.isFrozen) {
	        Object.isFrozen = function isFrozen(object) {
	            if (Object(object) !== object) {
	                throw new TypeError('Object.isFrozen can only be called on Objects.');
	            }
	            return false;
	        };
	    }

	    // ES5 15.2.3.13
	    // http://es5.github.com/#x15.2.3.13
	    if (!Object.isExtensible) {
	        Object.isExtensible = function isExtensible(object) {
	            // 1. If Type(O) is not Object throw a TypeError exception.
	            if (Object(object) !== object) {
	                throw new TypeError('Object.isExtensible can only be called on Objects.');
	            }
	            // 2. Return the Boolean value of the [[Extensible]] internal property of O.
	            var name = '';
	            while (owns(object, name)) {
	                name += '?';
	            }
	            object[name] = true;
	            var returnValue = owns(object, name);
	            delete object[name];
	            return returnValue;
	        };
	    }

	}));


/***/ },

/***/ 3:
/***/ function(module, exports) {

	// Console-polyfill. MIT license.
	// https://github.com/paulmillr/console-polyfill
	// Make it safe to do console.log() always.
	(function(global) {
	  'use strict';
	  if (!global.console) {
	    global.console = {};
	  }
	  var con = global.console;
	  var prop, method;
	  var dummy = function() {};
	  var properties = ['memory'];
	  var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
	     'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
	     'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
	  while (prop = properties.pop()) if (!con[prop]) con[prop] = {};
	  while (method = methods.pop()) if (typeof con[method] !== 'function') con[method] = dummy;
	  // Using `this` for web workers & supports Browserify / Webpack.
	})(typeof window === 'undefined' ? this : window);


/***/ },

/***/ 169:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 173:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(4);
	var $ = __webpack_require__(176);
	var Cookie = __webpack_require__(177);

	__webpack_require__(178);

	var City = React.createClass({
	    displayName: 'City',


	    getInitialState: function getInitialState() {
	        return { currentCity: '北京' };
	    },

	    getCurrentCityFromCookie: function getCurrentCityFromCookie() {

	        if (!!Cookie.get('cityName')) {
	            return true;
	        }

	        return false;
	    },

	    componentDidMount: function componentDidMount() {

	        if (this.getCurrentCityFromCookie()) {
	            this.setState({ currentCity: Cookie.get('cityName') });
	        } else {
	            this.getCurrentCityRequest = $.ajax({
	                url: 'http://car.diandong.com/api/get_local',
	                data: {},
	                dataType: 'jsonp',
	                type: 'POST',
	                success: function (result) {
	                    this.setState({ currentCity: result.data.city });
	                    Cookie.set('cityName', result.data.city);
	                    Cookie.set('cityId', result.data.code);
	                }.bind(this)
	            });
	        }
	    },

	    componentWillUnmount: function componentWillUnmount() {
	        this.getCurrentCityRequest.abort();
	    },

	    render: function render() {

	        return React.createElement(
	            'div',
	            { className: 'current-city' },
	            React.createElement(
	                'i',
	                { className: 'icon' },
	                '\uE659'
	            ),
	            React.createElement(
	                'a',
	                { href: 'http://www.diandong.com/city/' },
	                this.state.currentCity
	            )
	        );
	    }
	});

	module.exports = City;

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	// https://github.com/2046/cookie

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {

	    'use strict';

	    var decode, encode;

	    decode = decodeURIComponent;
	    encode = encodeURIComponent;

	    exports.get = function (key, opt) {
	        opt = opt || {};
	        validateCookieName(key);
	        return (opt.converter || same)(parseCookieString(document.cookie, !opt.raw)[key]);
	    };

	    exports.set = function (key, val, opt) {
	        var expires, domain, path, text, date;

	        validateCookieName(key);

	        opt = opt || {};
	        path = opt.path;
	        expires = opt.expires;
	        domain = opt.domain;

	        if (!opt.raw) {
	            val = encode(String(val));
	        }

	        date = expires;
	        text = key + '=' + val;

	        if (typeof date === 'number') {
	            date = new Date();
	            date.setDate(date.getDate() + expires);
	        }

	        if (date instanceof Date) {
	            text += '; expires=' + date.toUTCString();
	        }

	        if (isNonEmptyString(domain)) {
	            text += '; domain=' + domain;
	        }

	        if (isNonEmptyString(path)) {
	            text += '; path=' + path;
	        }

	        if (opt.secure) {
	            text += '; secure';
	        }

	        document.cookie = text;
	        return text;
	    };

	    exports.remove = function (key, opt) {
	        opt = opt || {};
	        opt.expires = new Date(0);
	        return this.set(key, '', opt);
	    };

	    function parseCookieString(text, shouldDecode) {
	        var cookies, cookieKey, cookieVal, cookieKeyVal, decodeVal, cookieParts, index, len;

	        cookies = {};
	        decodeVal = shouldDecode ? decode : same;

	        if (typeof text === 'string' && text.length > 0) {
	            cookieParts = text.split(/;\s/g);

	            for (index = 0, len = cookieParts.length; index < len; index++) {
	                cookieKeyVal = cookieParts[index].match(/([^=]+)=/i);

	                if (cookieKeyVal instanceof Array) {
	                    try {
	                        cookieKey = decode(cookieKeyVal[1]);
	                        cookieVal = decodeVal(cookieParts[index].substring(cookieKeyVal[1].length + 1));
	                    } catch (e) {}
	                } else {
	                    cookieVal = '';
	                    cookieKey = decode(cookieParts[index]);
	                }

	                if (cookieKey) {
	                    cookies[cookieKey] = cookieVal;
	                }
	            }
	        }

	        return cookies;
	    };

	    function same(str) {
	        return str;
	    };

	    function isNonEmptyString(str) {
	        return typeof str === 'string' && str !== '';
	    };

	    function validateCookieName(key) {
	        if (!isNonEmptyString(key)) {
	            throw new TypeError('Cookie name must be a non-empty string');
	        }
	    };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 178:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(4);
	var User = __webpack_require__(181);
	var user = new User();

	__webpack_require__(182);

	var UserPanel = React.createClass({
	    displayName: 'UserPanel',


	    getInitialState: function getInitialState() {
	        return { userId: null, userName: null, userAvatar: null, redirectUrl: null };
	    },

	    componentWillMount: function componentWillMount() {
	        var currentRedirectUrl = 'http://passport.diandong.com/ark/login?redirect=' + location.href;

	        this.setState({ redirectUrl: currentRedirectUrl });

	        if (user.id !== '') {
	            this.setState({ userId: user.id, userName: user.name, userAvatar: user.avatar });
	        }
	    },

	    render: function render() {

	        if (this.state.userId) {
	            return React.createElement(
	                'div',
	                { className: 'user-panel' },
	                React.createElement(
	                    'div',
	                    { className: 'user-panel-avatar no-background' },
	                    React.createElement('img', { src: this.state.userAvatar })
	                ),
	                React.createElement(
	                    'a',
	                    { href: 'http://passport.diandong.com/ark/baseinfo' },
	                    this.state.userName
	                ),
	                React.createElement(
	                    'a',
	                    { href: 'http://passport.diandong.com/ark/logout' },
	                    '\u9000\u51FA'
	                )
	            );
	        }

	        return React.createElement(
	            'div',
	            { className: 'user-panel' },
	            React.createElement('div', { className: 'user-panel-avatar' }),
	            React.createElement(
	                'a',
	                { href: 'http://passport.diandong.com/ark/login' },
	                '\u767B\u5F55'
	            ),
	            React.createElement(
	                'a',
	                { href: 'http://passport.diandong.com/ark/register/' },
	                '\u6CE8\u518C'
	            )
	        );
	    }
	});

	module.exports = UserPanel;

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {

	    'use strict';

	    var Cookie = __webpack_require__(177);

	    var User = function User() {
	        this.init();
	    };

	    User.prototype = {

	        id: '',

	        name: '',

	        nickname: '',

	        avatar: '',

	        init: function init() {
	            this.getUserInfo();
	        },

	        getUserInfo: function getUserInfo() {
	            var userName = Cookie.get('ark_rememberusername') || '';
	            var userAvatar = Cookie.get('ark_headimg') || '';
	            var nickname = Cookie.get('ark_nickname') || '';
	            var userId = Cookie.get('ark_userid') || '';

	            this.setUserInfo(userId, userName, nickname, userAvatar);
	        },

	        setUserInfo: function setUserInfo(id, name, nickname, avatar) {
	            this.id = id;
	            this.name = name;
	            this.nickname = nickname;
	            this.avatar = avatar;
	        }
	    };

	    module.exports = User;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 182:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(4);
	var $ = __webpack_require__(176);
	var Suggests = __webpack_require__(185);

	__webpack_require__(188);

	var Search = React.createClass({
	    displayName: 'Search',


	    getInitialState: function getInitialState() {
	        return { searchPlaceholderValue: null, keywords: '', suggests: {}, focus: false };
	    },

	    handleKeywordChange: function handleKeywordChange(event) {
	        var currentInputValue = event.target.value;

	        this.setState({ keywords: currentInputValue });

	        this.getSearchSuggestRequest = $.ajax({
	            url: 'http://car.diandong.com/api/chexi_fuzzysearch',
	            data: {
	                keywords: currentInputValue
	            },
	            dataType: 'jsonp',
	            type: 'GET',
	            success: function (result) {
	                if (result.state.err) {
	                    this.setState({ suggests: {} });
	                } else {
	                    var resultLength = result.data.length;
	                    var resultObject = {};

	                    for (var i = 0; i < resultLength; i++) {
	                        var keyIndex = result.data[i].cxid;
	                        var keyValue = result.data[i].name;

	                        resultObject[keyIndex] = keyValue;
	                    }

	                    this.setState({ suggests: resultObject });
	                }
	            }.bind(this)
	        });
	    },

	    handleKeyUp: function handleKeyUp(event) {
	        if (event.keyCode === 13) {
	            this.handleSubmit();
	        }
	    },

	    handleFocus: function handleFocus() {
	        this.setState({ focus: true });
	    },

	    handleBlur: function handleBlur() {
	        this.setState({ focus: false });
	    },

	    handleSubmit: function handleSubmit() {
	        var searchKeywords;

	        searchKeywords = this.state.keywords ? this.state.keywords : this.state.searchPlaceholderValue;

	        window.open('http://search.diandong.com/zonghe/?words=' + searchKeywords);
	    },

	    componentWillMount: function componentWillMount() {
	        this.getSearchPlaceholderRequest = $.ajax({
	            url: 'http://car.diandong.com/api/getSectionData?sectionid=296',
	            data: {},
	            dataType: 'jsonp',
	            type: 'POST',
	            success: function (result) {
	                var searchPlaceholderValue = result.data[0].title || '';

	                this.setState({ searchPlaceholderValue: searchPlaceholderValue });
	            }.bind(this)
	        });

	        $(document).on('click', function (e) {
	            if ($(e.target).attr('id') !== 'search-wrapper') {
	                this.setState({ suggests: {} });
	            }
	        }.bind(this));
	    },

	    componentWillUnmount: function componentWillUnmount() {
	        this.getSearchPlaceholderRequest.abort();
	        this.getSearchSuggestRequest.abort();
	    },

	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: this.state.focus ? "search-wrapper focus" : "search-wrapper", id: 'search-wrapper' },
	            React.createElement(
	                'div',
	                { className: 'search-bar' },
	                React.createElement('input', { className: 'search-input', type: 'text', value: this.state.keywords, onChange: this.handleKeywordChange, onKeyUp: this.handleKeyUp, onFocus: this.handleFocus, onBlur: this.handleBlur, placeholder: this.state.searchPlaceholderValue }),
	                React.createElement(
	                    'a',
	                    { className: 'search-submit-btn', onClick: this.handleSubmit, href: 'javascript:;' },
	                    React.createElement(
	                        'i',
	                        { className: 'icon' },
	                        '\uE60A'
	                    )
	                )
	            ),
	            React.createElement(Suggests, { suggests: this.state.suggests })
	        );
	    }
	});

	module.exports = Search;

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(4);
	var ReactDOM = __webpack_require__(31);

	__webpack_require__(186);

	var Suggests = React.createClass({
	    displayName: 'Suggests',


	    getListOfSuggestIds: function getListOfSuggestIds() {
	        return Object.keys(this.props.suggests);
	    },

	    getNumberOfSuggests: function getNumberOfSuggests() {
	        return this.getListOfSuggestIds().length;
	    },

	    getSuggestElement: function getSuggestElement(suggestId) {
	        var suggestElementUrl = "http://car.diandong.com/chexi/index/" + suggestId;
	        var suggestElementName = this.props.suggests[suggestId];

	        // key不能省，会报错
	        return React.createElement(
	            'a',
	            { target: '_blank', href: suggestElementUrl, key: suggestId },
	            suggestElementName
	        );
	    },

	    render: function render() {
	        var numberOfSuggests = this.getNumberOfSuggests();

	        if (numberOfSuggests > 0) {
	            var suggestElements = this.getListOfSuggestIds().map(this.getSuggestElement);

	            return React.createElement(
	                'div',
	                { className: 'search-suggest-list' },
	                suggestElements
	            );
	        }

	        return null;
	    }
	});

	module.exports = Suggests;

/***/ },

/***/ 186:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 188:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 190:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {

	    var Swiper = __webpack_require__(193);
	    __webpack_require__(194);

	    var Focus = function Focus() {
	        this.init();
	    };

	    Focus.prototype = {
	        init: function init() {
	            // console.log('home');
	            this.initFocusSlide();
	        },

	        initFocusSlide: function initFocusSlide() {
	            var focusSwiper = new Swiper('.focus-container', {
	                loop: true,
	                grabCursor: true,
	                // autoplay: 5000,
	                autoplayDisableOnInteraction: false,
	                wrapperClass: 'focus-wrapper',
	                slideClass: 'focus-slide',
	                pagination: '.focus-pages',
	                paginationClickable: true
	            });
	        }
	    };

	    module.exports = Focus;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*
	 * Swiper 2.7.6
	 * Mobile touch slider and framework with hardware accelerated transitions
	 *
	 * http://www.idangero.us/sliders/swiper/
	 *
	 * Copyright 2010-2015, Vladimir Kharlampidi
	 * The iDangero.us
	 * http://www.idangero.us/
	 *
	 * Licensed under GPL & MIT
	 *
	 * Released on: February 11, 2015
	*/
	var Swiper = function Swiper(a, b) {
	  "use strict";
	  function c(a, b) {
	    return document.querySelectorAll ? (b || document).querySelectorAll(a) : jQuery(a, b);
	  }function d(a) {
	    return "[object Array]" === Object.prototype.toString.apply(a) ? !0 : !1;
	  }function e() {
	    var a = G - J;return b.freeMode && (a = G - J), b.slidesPerView > D.slides.length && !b.centeredSlides && (a = 0), 0 > a && (a = 0), a;
	  }function f() {
	    function a(a) {
	      var c,
	          d,
	          e = function e() {
	        "undefined" != typeof D && null !== D && (void 0 !== D.imagesLoaded && D.imagesLoaded++, D.imagesLoaded === D.imagesToLoad.length && (D.reInit(), b.onImagesReady && D.fireCallback(b.onImagesReady, D)));
	      };a.complete ? e() : (d = a.currentSrc || a.getAttribute("src"), d ? (c = new Image(), c.onload = e, c.onerror = e, c.src = d) : e());
	    }var d = D.h.addEventListener,
	        e = "wrapper" === b.eventTarget ? D.wrapper : D.container;if (D.browser.ie10 || D.browser.ie11 ? (d(e, D.touchEvents.touchStart, p), d(document, D.touchEvents.touchMove, q), d(document, D.touchEvents.touchEnd, r)) : (D.support.touch && (d(e, "touchstart", p), d(e, "touchmove", q), d(e, "touchend", r)), b.simulateTouch && (d(e, "mousedown", p), d(document, "mousemove", q), d(document, "mouseup", r))), b.autoResize && d(window, "resize", D.resizeFix), g(), D._wheelEvent = !1, b.mousewheelControl) {
	      if (void 0 !== document.onmousewheel && (D._wheelEvent = "mousewheel"), !D._wheelEvent) try {
	        new WheelEvent("wheel"), D._wheelEvent = "wheel";
	      } catch (f) {}D._wheelEvent || (D._wheelEvent = "DOMMouseScroll"), D._wheelEvent && d(D.container, D._wheelEvent, j);
	    }if (b.keyboardControl && d(document, "keydown", i), b.updateOnImagesReady) {
	      D.imagesToLoad = c("img", D.container);for (var h = 0; h < D.imagesToLoad.length; h++) {
	        a(D.imagesToLoad[h]);
	      }
	    }
	  }function g() {
	    var a,
	        d = D.h.addEventListener;if (b.preventLinks) {
	      var e = c("a", D.container);for (a = 0; a < e.length; a++) {
	        d(e[a], "click", n);
	      }
	    }if (b.releaseFormElements) {
	      var f = c("input, textarea, select", D.container);for (a = 0; a < f.length; a++) {
	        d(f[a], D.touchEvents.touchStart, o, !0), D.support.touch && b.simulateTouch && d(f[a], "mousedown", o, !0);
	      }
	    }if (b.onSlideClick) for (a = 0; a < D.slides.length; a++) {
	      d(D.slides[a], "click", k);
	    }if (b.onSlideTouch) for (a = 0; a < D.slides.length; a++) {
	      d(D.slides[a], D.touchEvents.touchStart, l);
	    }
	  }function h() {
	    var a,
	        d = D.h.removeEventListener;if (b.onSlideClick) for (a = 0; a < D.slides.length; a++) {
	      d(D.slides[a], "click", k);
	    }if (b.onSlideTouch) for (a = 0; a < D.slides.length; a++) {
	      d(D.slides[a], D.touchEvents.touchStart, l);
	    }if (b.releaseFormElements) {
	      var e = c("input, textarea, select", D.container);for (a = 0; a < e.length; a++) {
	        d(e[a], D.touchEvents.touchStart, o, !0), D.support.touch && b.simulateTouch && d(e[a], "mousedown", o, !0);
	      }
	    }if (b.preventLinks) {
	      var f = c("a", D.container);for (a = 0; a < f.length; a++) {
	        d(f[a], "click", n);
	      }
	    }
	  }function i(a) {
	    var b = a.keyCode || a.charCode;if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey)) {
	      if (37 === b || 39 === b || 38 === b || 40 === b) {
	        for (var c = !1, d = D.h.getOffset(D.container), e = D.h.windowScroll().left, f = D.h.windowScroll().top, g = D.h.windowWidth(), h = D.h.windowHeight(), i = [[d.left, d.top], [d.left + D.width, d.top], [d.left, d.top + D.height], [d.left + D.width, d.top + D.height]], j = 0; j < i.length; j++) {
	          var k = i[j];k[0] >= e && k[0] <= e + g && k[1] >= f && k[1] <= f + h && (c = !0);
	        }if (!c) return;
	      }N ? ((37 === b || 39 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 39 === b && D.swipeNext(), 37 === b && D.swipePrev()) : ((38 === b || 40 === b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === b && D.swipeNext(), 38 === b && D.swipePrev());
	    }
	  }function j(a) {
	    var c = D._wheelEvent,
	        d = 0;if (a.detail) d = -a.detail;else if ("mousewheel" === c) {
	      if (b.mousewheelControlForceToAxis) {
	        if (N) {
	          if (!(Math.abs(a.wheelDeltaX) > Math.abs(a.wheelDeltaY))) return;d = a.wheelDeltaX;
	        } else {
	          if (!(Math.abs(a.wheelDeltaY) > Math.abs(a.wheelDeltaX))) return;d = a.wheelDeltaY;
	        }
	      } else d = a.wheelDelta;
	    } else if ("DOMMouseScroll" === c) d = -a.detail;else if ("wheel" === c) if (b.mousewheelControlForceToAxis) {
	      if (N) {
	        if (!(Math.abs(a.deltaX) > Math.abs(a.deltaY))) return;d = -a.deltaX;
	      } else {
	        if (!(Math.abs(a.deltaY) > Math.abs(a.deltaX))) return;d = -a.deltaY;
	      }
	    } else d = Math.abs(a.deltaX) > Math.abs(a.deltaY) ? -a.deltaX : -a.deltaY;if (b.freeMode) {
	      var f = D.getWrapperTranslate() + d;if (f > 0 && (f = 0), f < -e() && (f = -e()), D.setWrapperTransition(0), D.setWrapperTranslate(f), D.updateActiveSlide(f), 0 === f || f === -e()) return;
	    } else new Date().getTime() - V > 60 && (0 > d ? D.swipeNext() : D.swipePrev()), V = new Date().getTime();return b.autoplay && D.stopAutoplay(!0), a.preventDefault ? a.preventDefault() : a.returnValue = !1, !1;
	  }function k(a) {
	    D.allowSlideClick && (m(a), D.fireCallback(b.onSlideClick, D, a));
	  }function l(a) {
	    m(a), D.fireCallback(b.onSlideTouch, D, a);
	  }function m(a) {
	    if (a.currentTarget) D.clickedSlide = a.currentTarget;else {
	      var c = a.srcElement;do {
	        if (c.className.indexOf(b.slideClass) > -1) break;c = c.parentNode;
	      } while (c);D.clickedSlide = c;
	    }D.clickedSlideIndex = D.slides.indexOf(D.clickedSlide), D.clickedSlideLoopIndex = D.clickedSlideIndex - (D.loopedSlides || 0);
	  }function n(a) {
	    return D.allowLinks ? void 0 : (a.preventDefault ? a.preventDefault() : a.returnValue = !1, b.preventLinksPropagation && "stopPropagation" in a && a.stopPropagation(), !1);
	  }function o(a) {
	    return a.stopPropagation ? a.stopPropagation() : a.returnValue = !1, !1;
	  }function p(a) {
	    if (b.preventLinks && (D.allowLinks = !0), D.isTouched || b.onlyExternal) return !1;var c = a.target || a.srcElement;document.activeElement && document.activeElement !== document.body && document.activeElement !== c && document.activeElement.blur();var d = "input select textarea".split(" ");if (b.noSwiping && c && t(c)) return !1;if (_ = !1, D.isTouched = !0, $ = "touchstart" === a.type, !$ && "which" in a && 3 === a.which) return D.isTouched = !1, !1;if (!$ || 1 === a.targetTouches.length) {
	      D.callPlugins("onTouchStartBegin"), !$ && !D.isAndroid && d.indexOf(c.tagName.toLowerCase()) < 0 && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);var e = $ ? a.targetTouches[0].pageX : a.pageX || a.clientX,
	          f = $ ? a.targetTouches[0].pageY : a.pageY || a.clientY;D.touches.startX = D.touches.currentX = e, D.touches.startY = D.touches.currentY = f, D.touches.start = D.touches.current = N ? e : f, D.setWrapperTransition(0), D.positions.start = D.positions.current = D.getWrapperTranslate(), D.setWrapperTranslate(D.positions.start), D.times.start = new Date().getTime(), I = void 0, b.moveStartThreshold > 0 && (X = !1), b.onTouchStart && D.fireCallback(b.onTouchStart, D, a), D.callPlugins("onTouchStartEnd");
	    }
	  }function q(a) {
	    if (D.isTouched && !b.onlyExternal && (!$ || "mousemove" !== a.type)) {
	      var c = $ ? a.targetTouches[0].pageX : a.pageX || a.clientX,
	          d = $ ? a.targetTouches[0].pageY : a.pageY || a.clientY;if ("undefined" == typeof I && N && (I = !!(I || Math.abs(d - D.touches.startY) > Math.abs(c - D.touches.startX))), "undefined" != typeof I || N || (I = !!(I || Math.abs(d - D.touches.startY) < Math.abs(c - D.touches.startX))), I) return void (D.isTouched = !1);if (N) {
	        if (!b.swipeToNext && c < D.touches.startX || !b.swipeToPrev && c > D.touches.startX) return;
	      } else if (!b.swipeToNext && d < D.touches.startY || !b.swipeToPrev && d > D.touches.startY) return;if (a.assignedToSwiper) return void (D.isTouched = !1);if (a.assignedToSwiper = !0, b.preventLinks && (D.allowLinks = !1), b.onSlideClick && (D.allowSlideClick = !1), b.autoplay && D.stopAutoplay(!0), !$ || 1 === a.touches.length) {
	        if (D.isMoved || (D.callPlugins("onTouchMoveStart"), b.loop && (D.fixLoop(), D.positions.start = D.getWrapperTranslate()), b.onTouchMoveStart && D.fireCallback(b.onTouchMoveStart, D)), D.isMoved = !0, a.preventDefault ? a.preventDefault() : a.returnValue = !1, D.touches.current = N ? c : d, D.positions.current = (D.touches.current - D.touches.start) * b.touchRatio + D.positions.start, D.positions.current > 0 && b.onResistanceBefore && D.fireCallback(b.onResistanceBefore, D, D.positions.current), D.positions.current < -e() && b.onResistanceAfter && D.fireCallback(b.onResistanceAfter, D, Math.abs(D.positions.current + e())), b.resistance && "100%" !== b.resistance) {
	          var f;if (D.positions.current > 0 && (f = 1 - D.positions.current / J / 2, D.positions.current = .5 > f ? J / 2 : D.positions.current * f), D.positions.current < -e()) {
	            var g = (D.touches.current - D.touches.start) * b.touchRatio + (e() + D.positions.start);f = (J + g) / J;var h = D.positions.current - g * (1 - f) / 2,
	                i = -e() - J / 2;D.positions.current = i > h || 0 >= f ? i : h;
	          }
	        }if (b.resistance && "100%" === b.resistance && (D.positions.current > 0 && (!b.freeMode || b.freeModeFluid) && (D.positions.current = 0), D.positions.current < -e() && (!b.freeMode || b.freeModeFluid) && (D.positions.current = -e())), !b.followFinger) return;if (b.moveStartThreshold) {
	          if (Math.abs(D.touches.current - D.touches.start) > b.moveStartThreshold || X) {
	            if (!X) return X = !0, void (D.touches.start = D.touches.current);D.setWrapperTranslate(D.positions.current);
	          } else D.positions.current = D.positions.start;
	        } else D.setWrapperTranslate(D.positions.current);return (b.freeMode || b.watchActiveIndex) && D.updateActiveSlide(D.positions.current), b.grabCursor && (D.container.style.cursor = "move", D.container.style.cursor = "grabbing", D.container.style.cursor = "-moz-grabbin", D.container.style.cursor = "-webkit-grabbing"), Y || (Y = D.touches.current), Z || (Z = new Date().getTime()), D.velocity = (D.touches.current - Y) / (new Date().getTime() - Z) / 2, Math.abs(D.touches.current - Y) < 2 && (D.velocity = 0), Y = D.touches.current, Z = new Date().getTime(), D.callPlugins("onTouchMoveEnd"), b.onTouchMove && D.fireCallback(b.onTouchMove, D, a), !1;
	      }
	    }
	  }function r(a) {
	    if (I && D.swipeReset(), !b.onlyExternal && D.isTouched) {
	      D.isTouched = !1, b.grabCursor && (D.container.style.cursor = "move", D.container.style.cursor = "grab", D.container.style.cursor = "-moz-grab", D.container.style.cursor = "-webkit-grab"), D.positions.current || 0 === D.positions.current || (D.positions.current = D.positions.start), b.followFinger && D.setWrapperTranslate(D.positions.current), D.times.end = new Date().getTime(), D.touches.diff = D.touches.current - D.touches.start, D.touches.abs = Math.abs(D.touches.diff), D.positions.diff = D.positions.current - D.positions.start, D.positions.abs = Math.abs(D.positions.diff);var c = D.positions.diff,
	          d = D.positions.abs,
	          f = D.times.end - D.times.start;5 > d && 300 > f && D.allowLinks === !1 && (b.freeMode || 0 === d || D.swipeReset(), b.preventLinks && (D.allowLinks = !0), b.onSlideClick && (D.allowSlideClick = !0)), setTimeout(function () {
	        "undefined" != typeof D && null !== D && (b.preventLinks && (D.allowLinks = !0), b.onSlideClick && (D.allowSlideClick = !0));
	      }, 100);var g = e();if (!D.isMoved && b.freeMode) return D.isMoved = !1, b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd");if (!D.isMoved || D.positions.current > 0 || D.positions.current < -g) return D.swipeReset(), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd");if (D.isMoved = !1, b.freeMode) {
	        if (b.freeModeFluid) {
	          var h,
	              i = 1e3 * b.momentumRatio,
	              j = D.velocity * i,
	              k = D.positions.current + j,
	              l = !1,
	              m = 20 * Math.abs(D.velocity) * b.momentumBounceRatio;-g > k && (b.momentumBounce && D.support.transitions ? (-m > k + g && (k = -g - m), h = -g, l = !0, _ = !0) : k = -g), k > 0 && (b.momentumBounce && D.support.transitions ? (k > m && (k = m), h = 0, l = !0, _ = !0) : k = 0), 0 !== D.velocity && (i = Math.abs((k - D.positions.current) / D.velocity)), D.setWrapperTranslate(k), D.setWrapperTransition(i), b.momentumBounce && l && D.wrapperTransitionEnd(function () {
	            _ && (b.onMomentumBounce && D.fireCallback(b.onMomentumBounce, D), D.callPlugins("onMomentumBounce"), D.setWrapperTranslate(h), D.setWrapperTransition(300));
	          }), D.updateActiveSlide(k);
	        }return (!b.freeModeFluid || f >= 300) && D.updateActiveSlide(D.positions.current), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), void D.callPlugins("onTouchEnd");
	      }H = 0 > c ? "toNext" : "toPrev", "toNext" === H && 300 >= f && (30 > d || !b.shortSwipes ? D.swipeReset() : D.swipeNext(!0, !0)), "toPrev" === H && 300 >= f && (30 > d || !b.shortSwipes ? D.swipeReset() : D.swipePrev(!0, !0));var n = 0;if ("auto" === b.slidesPerView) {
	        for (var o, p = Math.abs(D.getWrapperTranslate()), q = 0, r = 0; r < D.slides.length; r++) {
	          if (o = N ? D.slides[r].getWidth(!0, b.roundLengths) : D.slides[r].getHeight(!0, b.roundLengths), q += o, q > p) {
	            n = o;break;
	          }
	        }n > J && (n = J);
	      } else n = F * b.slidesPerView;"toNext" === H && f > 300 && (d >= n * b.longSwipesRatio ? D.swipeNext(!0, !0) : D.swipeReset()), "toPrev" === H && f > 300 && (d >= n * b.longSwipesRatio ? D.swipePrev(!0, !0) : D.swipeReset()), b.onTouchEnd && D.fireCallback(b.onTouchEnd, D, a), D.callPlugins("onTouchEnd");
	    }
	  }function s(a, b) {
	    return a && a.getAttribute("class") && a.getAttribute("class").indexOf(b) > -1;
	  }function t(a) {
	    var c = !1;do {
	      s(a, b.noSwipingClass) && (c = !0), a = a.parentElement;
	    } while (!c && a.parentElement && !s(a, b.wrapperClass));return !c && s(a, b.wrapperClass) && s(a, b.noSwipingClass) && (c = !0), c;
	  }function u(a, b) {
	    var c,
	        d = document.createElement("div");return d.innerHTML = b, c = d.firstChild, c.className += " " + a, c.outerHTML;
	  }function v(a, c, d) {
	    function e() {
	      var f = +new Date(),
	          l = f - g;h += i * l / (1e3 / 60), k = "toNext" === j ? h > a : a > h, k ? (D.setWrapperTranslate(Math.ceil(h)), D._DOMAnimating = !0, window.setTimeout(function () {
	        e();
	      }, 1e3 / 60)) : (b.onSlideChangeEnd && ("to" === c ? d.runCallbacks === !0 && D.fireCallback(b.onSlideChangeEnd, D, j) : D.fireCallback(b.onSlideChangeEnd, D, j)), D.setWrapperTranslate(a), D._DOMAnimating = !1);
	    }var f = "to" === c && d.speed >= 0 ? d.speed : b.speed,
	        g = +new Date();if (D.support.transitions || !b.DOMAnimation) D.setWrapperTranslate(a), D.setWrapperTransition(f);else {
	      var h = D.getWrapperTranslate(),
	          i = Math.ceil((a - h) / f * (1e3 / 60)),
	          j = h > a ? "toNext" : "toPrev",
	          k = "toNext" === j ? h > a : a > h;if (D._DOMAnimating) return;e();
	    }D.updateActiveSlide(a), b.onSlideNext && "next" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlideNext, D, a), b.onSlidePrev && "prev" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlidePrev, D, a), b.onSlideReset && "reset" === c && d.runCallbacks === !0 && D.fireCallback(b.onSlideReset, D, a), "next" !== c && "prev" !== c && "to" !== c || d.runCallbacks !== !0 || w(c);
	  }function w(a) {
	    if (D.callPlugins("onSlideChangeStart"), b.onSlideChangeStart) if (b.queueStartCallbacks && D.support.transitions) {
	      if (D._queueStartCallbacks) return;D._queueStartCallbacks = !0, D.fireCallback(b.onSlideChangeStart, D, a), D.wrapperTransitionEnd(function () {
	        D._queueStartCallbacks = !1;
	      });
	    } else D.fireCallback(b.onSlideChangeStart, D, a);if (b.onSlideChangeEnd) if (D.support.transitions) {
	      if (b.queueEndCallbacks) {
	        if (D._queueEndCallbacks) return;D._queueEndCallbacks = !0, D.wrapperTransitionEnd(function (c) {
	          D.fireCallback(b.onSlideChangeEnd, c, a);
	        });
	      } else D.wrapperTransitionEnd(function (c) {
	        D.fireCallback(b.onSlideChangeEnd, c, a);
	      });
	    } else b.DOMAnimation || setTimeout(function () {
	      D.fireCallback(b.onSlideChangeEnd, D, a);
	    }, 10);
	  }function x() {
	    var a = D.paginationButtons;if (a) for (var b = 0; b < a.length; b++) {
	      D.h.removeEventListener(a[b], "click", z);
	    }
	  }function y() {
	    var a = D.paginationButtons;if (a) for (var b = 0; b < a.length; b++) {
	      D.h.addEventListener(a[b], "click", z);
	    }
	  }function z(a) {
	    for (var c, d = a.target || a.srcElement, e = D.paginationButtons, f = 0; f < e.length; f++) {
	      d === e[f] && (c = f);
	    }b.autoplay && D.stopAutoplay(!0), D.swipeTo(c);
	  }function A() {
	    ab = setTimeout(function () {
	      b.loop ? (D.fixLoop(), D.swipeNext(!0, !0)) : D.swipeNext(!0, !0) || (b.autoplayStopOnLast ? (clearTimeout(ab), ab = void 0) : D.swipeTo(0)), D.wrapperTransitionEnd(function () {
	        "undefined" != typeof ab && A();
	      });
	    }, b.autoplay);
	  }function B() {
	    D.calcSlides(), b.loader.slides.length > 0 && 0 === D.slides.length && D.loadSlides(), b.loop && D.createLoop(), D.init(), f(), b.pagination && D.createPagination(!0), b.loop || b.initialSlide > 0 ? D.swipeTo(b.initialSlide, 0, !1) : D.updateActiveSlide(0), b.autoplay && D.startAutoplay(), D.centerIndex = D.activeIndex, b.onSwiperCreated && D.fireCallback(b.onSwiperCreated, D), D.callPlugins("onSwiperCreated");
	  }if (!document.body.outerHTML && document.body.__defineGetter__ && HTMLElement) {
	    var C = HTMLElement.prototype;C.__defineGetter__ && C.__defineGetter__("outerHTML", function () {
	      return new XMLSerializer().serializeToString(this);
	    });
	  }if (window.getComputedStyle || (window.getComputedStyle = function (a) {
	    return this.el = a, this.getPropertyValue = function (b) {
	      var c = /(\-([a-z]){1})/g;return "float" === b && (b = "styleFloat"), c.test(b) && (b = b.replace(c, function () {
	        return arguments[2].toUpperCase();
	      })), a.currentStyle[b] ? a.currentStyle[b] : null;
	    }, this;
	  }), Array.prototype.indexOf || (Array.prototype.indexOf = function (a, b) {
	    for (var c = b || 0, d = this.length; d > c; c++) {
	      if (this[c] === a) return c;
	    }return -1;
	  }), (document.querySelectorAll || window.jQuery) && "undefined" != typeof a && (a.nodeType || 0 !== c(a).length)) {
	    var D = this;D.touches = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, diff: 0, abs: 0 }, D.positions = { start: 0, abs: 0, diff: 0, current: 0 }, D.times = { start: 0, end: 0 }, D.id = new Date().getTime(), D.container = a.nodeType ? a : c(a)[0], D.isTouched = !1, D.isMoved = !1, D.activeIndex = 0, D.centerIndex = 0, D.activeLoaderIndex = 0, D.activeLoopIndex = 0, D.previousIndex = null, D.velocity = 0, D.snapGrid = [], D.slidesGrid = [], D.imagesToLoad = [], D.imagesLoaded = 0, D.wrapperLeft = 0, D.wrapperRight = 0, D.wrapperTop = 0, D.wrapperBottom = 0, D.isAndroid = navigator.userAgent.toLowerCase().indexOf("android") >= 0;var E,
	        F,
	        G,
	        H,
	        I,
	        J,
	        K = { eventTarget: "wrapper", mode: "horizontal", touchRatio: 1, speed: 300, freeMode: !1, freeModeFluid: !1, momentumRatio: 1, momentumBounce: !0, momentumBounceRatio: 1, slidesPerView: 1, slidesPerGroup: 1, slidesPerViewFit: !0, simulateTouch: !0, followFinger: !0, shortSwipes: !0, longSwipesRatio: .5, moveStartThreshold: !1, onlyExternal: !1, createPagination: !0, pagination: !1, paginationElement: "span", paginationClickable: !1, paginationAsRange: !0, resistance: !0, scrollContainer: !1, preventLinks: !0, preventLinksPropagation: !1, noSwiping: !1, noSwipingClass: "swiper-no-swiping", initialSlide: 0, keyboardControl: !1, mousewheelControl: !1, mousewheelControlForceToAxis: !1, useCSS3Transforms: !0, autoplay: !1, autoplayDisableOnInteraction: !0, autoplayStopOnLast: !1, loop: !1, loopAdditionalSlides: 0, roundLengths: !1, calculateHeight: !1, cssWidthAndHeight: !1, updateOnImagesReady: !0, releaseFormElements: !0, watchActiveIndex: !1, visibilityFullFit: !1, offsetPxBefore: 0, offsetPxAfter: 0, offsetSlidesBefore: 0, offsetSlidesAfter: 0, centeredSlides: !1, queueStartCallbacks: !1, queueEndCallbacks: !1, autoResize: !0, resizeReInit: !1, DOMAnimation: !0, loader: { slides: [], slidesHTMLType: "inner", surroundGroups: 1, logic: "reload", loadAllSlides: !1 }, swipeToPrev: !0, swipeToNext: !0, slideElement: "div", slideClass: "swiper-slide", slideActiveClass: "swiper-slide-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", wrapperClass: "swiper-wrapper", paginationElementClass: "swiper-pagination-switch", paginationActiveClass: "swiper-active-switch", paginationVisibleClass: "swiper-visible-switch" };b = b || {};for (var L in K) {
	      if (L in b && "object" == _typeof(b[L])) for (var M in K[L]) {
	        M in b[L] || (b[L][M] = K[L][M]);
	      } else L in b || (b[L] = K[L]);
	    }D.params = b, b.scrollContainer && (b.freeMode = !0, b.freeModeFluid = !0), b.loop && (b.resistance = "100%");var N = "horizontal" === b.mode,
	        O = ["mousedown", "mousemove", "mouseup"];D.browser.ie10 && (O = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), D.browser.ie11 && (O = ["pointerdown", "pointermove", "pointerup"]), D.touchEvents = { touchStart: D.support.touch || !b.simulateTouch ? "touchstart" : O[0], touchMove: D.support.touch || !b.simulateTouch ? "touchmove" : O[1], touchEnd: D.support.touch || !b.simulateTouch ? "touchend" : O[2] };for (var P = D.container.childNodes.length - 1; P >= 0; P--) {
	      if (D.container.childNodes[P].className) for (var Q = D.container.childNodes[P].className.split(/\s+/), R = 0; R < Q.length; R++) {
	        Q[R] === b.wrapperClass && (E = D.container.childNodes[P]);
	      }
	    }D.wrapper = E, D._extendSwiperSlide = function (a) {
	      return a.append = function () {
	        return b.loop ? a.insertAfter(D.slides.length - D.loopedSlides) : (D.wrapper.appendChild(a), D.reInit()), a;
	      }, a.prepend = function () {
	        return b.loop ? (D.wrapper.insertBefore(a, D.slides[D.loopedSlides]), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : D.wrapper.insertBefore(a, D.wrapper.firstChild), D.reInit(), a;
	      }, a.insertAfter = function (c) {
	        if ("undefined" == typeof c) return !1;var d;return b.loop ? (d = D.slides[c + 1 + D.loopedSlides], d ? D.wrapper.insertBefore(a, d) : D.wrapper.appendChild(a), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : (d = D.slides[c + 1], D.wrapper.insertBefore(a, d)), D.reInit(), a;
	      }, a.clone = function () {
	        return D._extendSwiperSlide(a.cloneNode(!0));
	      }, a.remove = function () {
	        D.wrapper.removeChild(a), D.reInit();
	      }, a.html = function (b) {
	        return "undefined" == typeof b ? a.innerHTML : (a.innerHTML = b, a);
	      }, a.index = function () {
	        for (var b, c = D.slides.length - 1; c >= 0; c--) {
	          a === D.slides[c] && (b = c);
	        }return b;
	      }, a.isActive = function () {
	        return a.index() === D.activeIndex ? !0 : !1;
	      }, a.swiperSlideDataStorage || (a.swiperSlideDataStorage = {}), a.getData = function (b) {
	        return a.swiperSlideDataStorage[b];
	      }, a.setData = function (b, c) {
	        return a.swiperSlideDataStorage[b] = c, a;
	      }, a.data = function (b, c) {
	        return "undefined" == typeof c ? a.getAttribute("data-" + b) : (a.setAttribute("data-" + b, c), a);
	      }, a.getWidth = function (b, c) {
	        return D.h.getWidth(a, b, c);
	      }, a.getHeight = function (b, c) {
	        return D.h.getHeight(a, b, c);
	      }, a.getOffset = function () {
	        return D.h.getOffset(a);
	      }, a;
	    }, D.calcSlides = function (a) {
	      var c = D.slides ? D.slides.length : !1;D.slides = [], D.displaySlides = [];for (var d = 0; d < D.wrapper.childNodes.length; d++) {
	        if (D.wrapper.childNodes[d].className) for (var e = D.wrapper.childNodes[d].className, f = e.split(/\s+/), i = 0; i < f.length; i++) {
	          f[i] === b.slideClass && D.slides.push(D.wrapper.childNodes[d]);
	        }
	      }for (d = D.slides.length - 1; d >= 0; d--) {
	        D._extendSwiperSlide(D.slides[d]);
	      }c !== !1 && (c !== D.slides.length || a) && (h(), g(), D.updateActiveSlide(), D.params.pagination && D.createPagination(), D.callPlugins("numberOfSlidesChanged"));
	    }, D.createSlide = function (a, c, d) {
	      c = c || D.params.slideClass, d = d || b.slideElement;var e = document.createElement(d);return e.innerHTML = a || "", e.className = c, D._extendSwiperSlide(e);
	    }, D.appendSlide = function (a, b, c) {
	      return a ? a.nodeType ? D._extendSwiperSlide(a).append() : D.createSlide(a, b, c).append() : void 0;
	    }, D.prependSlide = function (a, b, c) {
	      return a ? a.nodeType ? D._extendSwiperSlide(a).prepend() : D.createSlide(a, b, c).prepend() : void 0;
	    }, D.insertSlideAfter = function (a, b, c, d) {
	      return "undefined" == typeof a ? !1 : b.nodeType ? D._extendSwiperSlide(b).insertAfter(a) : D.createSlide(b, c, d).insertAfter(a);
	    }, D.removeSlide = function (a) {
	      if (D.slides[a]) {
	        if (b.loop) {
	          if (!D.slides[a + D.loopedSlides]) return !1;D.slides[a + D.loopedSlides].remove(), D.removeLoopedSlides(), D.calcSlides(), D.createLoop();
	        } else D.slides[a].remove();return !0;
	      }return !1;
	    }, D.removeLastSlide = function () {
	      return D.slides.length > 0 ? (b.loop ? (D.slides[D.slides.length - 1 - D.loopedSlides].remove(), D.removeLoopedSlides(), D.calcSlides(), D.createLoop()) : D.slides[D.slides.length - 1].remove(), !0) : !1;
	    }, D.removeAllSlides = function () {
	      for (var a = D.slides.length, b = D.slides.length - 1; b >= 0; b--) {
	        D.slides[b].remove(), b === a - 1 && D.setWrapperTranslate(0);
	      }
	    }, D.getSlide = function (a) {
	      return D.slides[a];
	    }, D.getLastSlide = function () {
	      return D.slides[D.slides.length - 1];
	    }, D.getFirstSlide = function () {
	      return D.slides[0];
	    }, D.activeSlide = function () {
	      return D.slides[D.activeIndex];
	    }, D.fireCallback = function () {
	      var a = arguments[0];if ("[object Array]" === Object.prototype.toString.call(a)) for (var c = 0; c < a.length; c++) {
	        "function" == typeof a[c] && a[c](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	      } else "[object String]" === Object.prototype.toString.call(a) ? b["on" + a] && D.fireCallback(b["on" + a], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) : a(arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	    }, D.addCallback = function (a, b) {
	      var c,
	          e = this;return e.params["on" + a] ? d(this.params["on" + a]) ? this.params["on" + a].push(b) : "function" == typeof this.params["on" + a] ? (c = this.params["on" + a], this.params["on" + a] = [], this.params["on" + a].push(c), this.params["on" + a].push(b)) : void 0 : (this.params["on" + a] = [], this.params["on" + a].push(b));
	    }, D.removeCallbacks = function (a) {
	      D.params["on" + a] && (D.params["on" + a] = null);
	    };var S = [];for (var T in D.plugins) {
	      if (b[T]) {
	        var U = D.plugins[T](D, b[T]);U && S.push(U);
	      }
	    }D.callPlugins = function (a, b) {
	      b || (b = {});for (var c = 0; c < S.length; c++) {
	        a in S[c] && S[c][a](b);
	      }
	    }, !D.browser.ie10 && !D.browser.ie11 || b.onlyExternal || D.wrapper.classList.add("swiper-wp8-" + (N ? "horizontal" : "vertical")), b.freeMode && (D.container.className += " swiper-free-mode"), D.initialized = !1, D.init = function (a, c) {
	      var d = D.h.getWidth(D.container, !1, b.roundLengths),
	          e = D.h.getHeight(D.container, !1, b.roundLengths);if (d !== D.width || e !== D.height || a) {
	        D.width = d, D.height = e;var f, g, h, i, j, k, l;J = N ? d : e;var m = D.wrapper;if (a && D.calcSlides(c), "auto" === b.slidesPerView) {
	          var n = 0,
	              o = 0;b.slidesOffset > 0 && (m.style.paddingLeft = "", m.style.paddingRight = "", m.style.paddingTop = "", m.style.paddingBottom = ""), m.style.width = "", m.style.height = "", b.offsetPxBefore > 0 && (N ? D.wrapperLeft = b.offsetPxBefore : D.wrapperTop = b.offsetPxBefore), b.offsetPxAfter > 0 && (N ? D.wrapperRight = b.offsetPxAfter : D.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (N ? (D.wrapperLeft = (J - this.slides[0].getWidth(!0, b.roundLengths)) / 2, D.wrapperRight = (J - D.slides[D.slides.length - 1].getWidth(!0, b.roundLengths)) / 2) : (D.wrapperTop = (J - D.slides[0].getHeight(!0, b.roundLengths)) / 2, D.wrapperBottom = (J - D.slides[D.slides.length - 1].getHeight(!0, b.roundLengths)) / 2)), N ? (D.wrapperLeft >= 0 && (m.style.paddingLeft = D.wrapperLeft + "px"), D.wrapperRight >= 0 && (m.style.paddingRight = D.wrapperRight + "px")) : (D.wrapperTop >= 0 && (m.style.paddingTop = D.wrapperTop + "px"), D.wrapperBottom >= 0 && (m.style.paddingBottom = D.wrapperBottom + "px")), k = 0;var p = 0;for (D.snapGrid = [], D.slidesGrid = [], h = 0, l = 0; l < D.slides.length; l++) {
	            f = D.slides[l].getWidth(!0, b.roundLengths), g = D.slides[l].getHeight(!0, b.roundLengths), b.calculateHeight && (h = Math.max(h, g));var q = N ? f : g;if (b.centeredSlides) {
	              var r = l === D.slides.length - 1 ? 0 : D.slides[l + 1].getWidth(!0, b.roundLengths),
	                  s = l === D.slides.length - 1 ? 0 : D.slides[l + 1].getHeight(!0, b.roundLengths),
	                  t = N ? r : s;if (q > J) {
	                if (b.slidesPerViewFit) D.snapGrid.push(k + D.wrapperLeft), D.snapGrid.push(k + q - J + D.wrapperLeft);else for (var u = 0; u <= Math.floor(q / (J + D.wrapperLeft)); u++) {
	                  D.snapGrid.push(0 === u ? k + D.wrapperLeft : k + D.wrapperLeft + J * u);
	                }D.slidesGrid.push(k + D.wrapperLeft);
	              } else D.snapGrid.push(p), D.slidesGrid.push(p);p += q / 2 + t / 2;
	            } else {
	              if (q > J) {
	                if (b.slidesPerViewFit) D.snapGrid.push(k), D.snapGrid.push(k + q - J);else if (0 !== J) for (var v = 0; v <= Math.floor(q / J); v++) {
	                  D.snapGrid.push(k + J * v);
	                } else D.snapGrid.push(k);
	              } else D.snapGrid.push(k);D.slidesGrid.push(k);
	            }k += q, n += f, o += g;
	          }b.calculateHeight && (D.height = h), N ? (G = n + D.wrapperRight + D.wrapperLeft, b.cssWidthAndHeight && "height" !== b.cssWidthAndHeight || (m.style.width = n + "px"), b.cssWidthAndHeight && "width" !== b.cssWidthAndHeight || (m.style.height = D.height + "px")) : (b.cssWidthAndHeight && "height" !== b.cssWidthAndHeight || (m.style.width = D.width + "px"), b.cssWidthAndHeight && "width" !== b.cssWidthAndHeight || (m.style.height = o + "px"), G = o + D.wrapperTop + D.wrapperBottom);
	        } else if (b.scrollContainer) m.style.width = "", m.style.height = "", i = D.slides[0].getWidth(!0, b.roundLengths), j = D.slides[0].getHeight(!0, b.roundLengths), G = N ? i : j, m.style.width = i + "px", m.style.height = j + "px", F = N ? i : j;else {
	          if (b.calculateHeight) {
	            for (h = 0, j = 0, N || (D.container.style.height = ""), m.style.height = "", l = 0; l < D.slides.length; l++) {
	              D.slides[l].style.height = "", h = Math.max(D.slides[l].getHeight(!0), h), N || (j += D.slides[l].getHeight(!0));
	            }g = h, D.height = g, N ? j = g : (J = g, D.container.style.height = J + "px");
	          } else g = N ? D.height : D.height / b.slidesPerView, b.roundLengths && (g = Math.ceil(g)), j = N ? D.height : D.slides.length * g;for (f = N ? D.width / b.slidesPerView : D.width, b.roundLengths && (f = Math.ceil(f)), i = N ? D.slides.length * f : D.width, F = N ? f : g, b.offsetSlidesBefore > 0 && (N ? D.wrapperLeft = F * b.offsetSlidesBefore : D.wrapperTop = F * b.offsetSlidesBefore), b.offsetSlidesAfter > 0 && (N ? D.wrapperRight = F * b.offsetSlidesAfter : D.wrapperBottom = F * b.offsetSlidesAfter), b.offsetPxBefore > 0 && (N ? D.wrapperLeft = b.offsetPxBefore : D.wrapperTop = b.offsetPxBefore), b.offsetPxAfter > 0 && (N ? D.wrapperRight = b.offsetPxAfter : D.wrapperBottom = b.offsetPxAfter), b.centeredSlides && (N ? (D.wrapperLeft = (J - F) / 2, D.wrapperRight = (J - F) / 2) : (D.wrapperTop = (J - F) / 2, D.wrapperBottom = (J - F) / 2)), N ? (D.wrapperLeft > 0 && (m.style.paddingLeft = D.wrapperLeft + "px"), D.wrapperRight > 0 && (m.style.paddingRight = D.wrapperRight + "px")) : (D.wrapperTop > 0 && (m.style.paddingTop = D.wrapperTop + "px"), D.wrapperBottom > 0 && (m.style.paddingBottom = D.wrapperBottom + "px")), G = N ? i + D.wrapperRight + D.wrapperLeft : j + D.wrapperTop + D.wrapperBottom, parseFloat(i) > 0 && (!b.cssWidthAndHeight || "height" === b.cssWidthAndHeight) && (m.style.width = i + "px"), parseFloat(j) > 0 && (!b.cssWidthAndHeight || "width" === b.cssWidthAndHeight) && (m.style.height = j + "px"), k = 0, D.snapGrid = [], D.slidesGrid = [], l = 0; l < D.slides.length; l++) {
	            D.snapGrid.push(k), D.slidesGrid.push(k), k += F, parseFloat(f) > 0 && (!b.cssWidthAndHeight || "height" === b.cssWidthAndHeight) && (D.slides[l].style.width = f + "px"), parseFloat(g) > 0 && (!b.cssWidthAndHeight || "width" === b.cssWidthAndHeight) && (D.slides[l].style.height = g + "px");
	          }
	        }D.initialized ? (D.callPlugins("onInit"), b.onInit && D.fireCallback(b.onInit, D)) : (D.callPlugins("onFirstInit"), b.onFirstInit && D.fireCallback(b.onFirstInit, D)), D.initialized = !0;
	      }
	    }, D.reInit = function (a) {
	      D.init(!0, a);
	    }, D.resizeFix = function (a) {
	      D.callPlugins("beforeResizeFix"), D.init(b.resizeReInit || a), b.freeMode ? D.getWrapperTranslate() < -e() && (D.setWrapperTransition(0), D.setWrapperTranslate(-e())) : (D.swipeTo(b.loop ? D.activeLoopIndex : D.activeIndex, 0, !1), b.autoplay && (D.support.transitions && "undefined" != typeof ab ? "undefined" != typeof ab && (clearTimeout(ab), ab = void 0, D.startAutoplay()) : "undefined" != typeof bb && (clearInterval(bb), bb = void 0, D.startAutoplay()))), D.callPlugins("afterResizeFix");
	    }, D.destroy = function (a) {
	      var c = D.h.removeEventListener,
	          d = "wrapper" === b.eventTarget ? D.wrapper : D.container;if (D.browser.ie10 || D.browser.ie11 ? (c(d, D.touchEvents.touchStart, p), c(document, D.touchEvents.touchMove, q), c(document, D.touchEvents.touchEnd, r)) : (D.support.touch && (c(d, "touchstart", p), c(d, "touchmove", q), c(d, "touchend", r)), b.simulateTouch && (c(d, "mousedown", p), c(document, "mousemove", q), c(document, "mouseup", r))), b.autoResize && c(window, "resize", D.resizeFix), h(), b.paginationClickable && x(), b.mousewheelControl && D._wheelEvent && c(D.container, D._wheelEvent, j), b.keyboardControl && c(document, "keydown", i), b.autoplay && D.stopAutoplay(), a) {
	        D.wrapper.removeAttribute("style");for (var e = 0; e < D.slides.length; e++) {
	          D.slides[e].removeAttribute("style");
	        }
	      }D.callPlugins("onDestroy"), window.jQuery && window.jQuery(D.container).data("swiper") && window.jQuery(D.container).removeData("swiper"), window.Zepto && window.Zepto(D.container).data("swiper") && window.Zepto(D.container).removeData("swiper"), D = null;
	    }, D.disableKeyboardControl = function () {
	      b.keyboardControl = !1, D.h.removeEventListener(document, "keydown", i);
	    }, D.enableKeyboardControl = function () {
	      b.keyboardControl = !0, D.h.addEventListener(document, "keydown", i);
	    };var V = new Date().getTime();if (D.disableMousewheelControl = function () {
	      return D._wheelEvent ? (b.mousewheelControl = !1, D.h.removeEventListener(D.container, D._wheelEvent, j), !0) : !1;
	    }, D.enableMousewheelControl = function () {
	      return D._wheelEvent ? (b.mousewheelControl = !0, D.h.addEventListener(D.container, D._wheelEvent, j), !0) : !1;
	    }, b.grabCursor) {
	      var W = D.container.style;W.cursor = "move", W.cursor = "grab", W.cursor = "-moz-grab", W.cursor = "-webkit-grab";
	    }D.allowSlideClick = !0, D.allowLinks = !0;var X,
	        Y,
	        Z,
	        $ = !1,
	        _ = !0;D.swipeNext = function (a, c) {
	      "undefined" == typeof a && (a = !0), !c && b.loop && D.fixLoop(), !c && b.autoplay && D.stopAutoplay(!0), D.callPlugins("onSwipeNext");var d = D.getWrapperTranslate().toFixed(2),
	          f = d;if ("auto" === b.slidesPerView) {
	        for (var g = 0; g < D.snapGrid.length; g++) {
	          if (-d >= D.snapGrid[g].toFixed(2) && -d < D.snapGrid[g + 1].toFixed(2)) {
	            f = -D.snapGrid[g + 1];break;
	          }
	        }
	      } else {
	        var h = F * b.slidesPerGroup;f = -(Math.floor(Math.abs(d) / Math.floor(h)) * h + h);
	      }return f < -e() && (f = -e()), f === d ? !1 : (v(f, "next", { runCallbacks: a }), !0);
	    }, D.swipePrev = function (a, c) {
	      "undefined" == typeof a && (a = !0), !c && b.loop && D.fixLoop(), !c && b.autoplay && D.stopAutoplay(!0), D.callPlugins("onSwipePrev");var d,
	          e = Math.ceil(D.getWrapperTranslate());if ("auto" === b.slidesPerView) {
	        d = 0;for (var f = 1; f < D.snapGrid.length; f++) {
	          if (-e === D.snapGrid[f]) {
	            d = -D.snapGrid[f - 1];break;
	          }if (-e > D.snapGrid[f] && -e < D.snapGrid[f + 1]) {
	            d = -D.snapGrid[f];break;
	          }
	        }
	      } else {
	        var g = F * b.slidesPerGroup;d = -(Math.ceil(-e / g) - 1) * g;
	      }return d > 0 && (d = 0), d === e ? !1 : (v(d, "prev", { runCallbacks: a }), !0);
	    }, D.swipeReset = function (a) {
	      "undefined" == typeof a && (a = !0), D.callPlugins("onSwipeReset");{
	        var c,
	            d = D.getWrapperTranslate(),
	            f = F * b.slidesPerGroup;-e();
	      }if ("auto" === b.slidesPerView) {
	        c = 0;for (var g = 0; g < D.snapGrid.length; g++) {
	          if (-d === D.snapGrid[g]) return;if (-d >= D.snapGrid[g] && -d < D.snapGrid[g + 1]) {
	            c = D.positions.diff > 0 ? -D.snapGrid[g + 1] : -D.snapGrid[g];break;
	          }
	        }-d >= D.snapGrid[D.snapGrid.length - 1] && (c = -D.snapGrid[D.snapGrid.length - 1]), d <= -e() && (c = -e());
	      } else c = 0 > d ? Math.round(d / f) * f : 0, d <= -e() && (c = -e());return b.scrollContainer && (c = 0 > d ? d : 0), c < -e() && (c = -e()), b.scrollContainer && J > F && (c = 0), c === d ? !1 : (v(c, "reset", { runCallbacks: a }), !0);
	    }, D.swipeTo = function (a, c, d) {
	      a = parseInt(a, 10), D.callPlugins("onSwipeTo", { index: a, speed: c }), b.loop && (a += D.loopedSlides);var f = D.getWrapperTranslate();if (!(!isFinite(a) || a > D.slides.length - 1 || 0 > a)) {
	        var g;return g = "auto" === b.slidesPerView ? -D.slidesGrid[a] : -a * F, g < -e() && (g = -e()), g === f ? !1 : ("undefined" == typeof d && (d = !0), v(g, "to", { index: a, speed: c, runCallbacks: d }), !0);
	      }
	    }, D._queueStartCallbacks = !1, D._queueEndCallbacks = !1, D.updateActiveSlide = function (a) {
	      if (D.initialized && 0 !== D.slides.length) {
	        D.previousIndex = D.activeIndex, "undefined" == typeof a && (a = D.getWrapperTranslate()), a > 0 && (a = 0);var c;if ("auto" === b.slidesPerView) {
	          if (D.activeIndex = D.slidesGrid.indexOf(-a), D.activeIndex < 0) {
	            for (c = 0; c < D.slidesGrid.length - 1 && !(-a > D.slidesGrid[c] && -a < D.slidesGrid[c + 1]); c++) {}var d = Math.abs(D.slidesGrid[c] + a),
	                e = Math.abs(D.slidesGrid[c + 1] + a);
	            D.activeIndex = e >= d ? c : c + 1;
	          }
	        } else D.activeIndex = Math[b.visibilityFullFit ? "ceil" : "round"](-a / F);if (D.activeIndex === D.slides.length && (D.activeIndex = D.slides.length - 1), D.activeIndex < 0 && (D.activeIndex = 0), D.slides[D.activeIndex]) {
	          if (D.calcVisibleSlides(a), D.support.classList) {
	            var f;for (c = 0; c < D.slides.length; c++) {
	              f = D.slides[c], f.classList.remove(b.slideActiveClass), D.visibleSlides.indexOf(f) >= 0 ? f.classList.add(b.slideVisibleClass) : f.classList.remove(b.slideVisibleClass);
	            }D.slides[D.activeIndex].classList.add(b.slideActiveClass);
	          } else {
	            var g = new RegExp("\\s*" + b.slideActiveClass),
	                h = new RegExp("\\s*" + b.slideVisibleClass);for (c = 0; c < D.slides.length; c++) {
	              D.slides[c].className = D.slides[c].className.replace(g, "").replace(h, ""), D.visibleSlides.indexOf(D.slides[c]) >= 0 && (D.slides[c].className += " " + b.slideVisibleClass);
	            }D.slides[D.activeIndex].className += " " + b.slideActiveClass;
	          }if (b.loop) {
	            var i = D.loopedSlides;D.activeLoopIndex = D.activeIndex - i, D.activeLoopIndex >= D.slides.length - 2 * i && (D.activeLoopIndex = D.slides.length - 2 * i - D.activeLoopIndex), D.activeLoopIndex < 0 && (D.activeLoopIndex = D.slides.length - 2 * i + D.activeLoopIndex), D.activeLoopIndex < 0 && (D.activeLoopIndex = 0);
	          } else D.activeLoopIndex = D.activeIndex;b.pagination && D.updatePagination(a);
	        }
	      }
	    }, D.createPagination = function (a) {
	      if (b.paginationClickable && D.paginationButtons && x(), D.paginationContainer = b.pagination.nodeType ? b.pagination : c(b.pagination)[0], b.createPagination) {
	        var d = "",
	            e = D.slides.length,
	            f = e;b.loop && (f -= 2 * D.loopedSlides);for (var g = 0; f > g; g++) {
	          d += "<" + b.paginationElement + ' class="' + b.paginationElementClass + '"></' + b.paginationElement + ">";
	        }D.paginationContainer.innerHTML = d;
	      }D.paginationButtons = c("." + b.paginationElementClass, D.paginationContainer), a || D.updatePagination(), D.callPlugins("onCreatePagination"), b.paginationClickable && y();
	    }, D.updatePagination = function (a) {
	      if (b.pagination && !(D.slides.length < 1)) {
	        var d = c("." + b.paginationActiveClass, D.paginationContainer);if (d) {
	          var e = D.paginationButtons;if (0 !== e.length) {
	            for (var f = 0; f < e.length; f++) {
	              e[f].className = b.paginationElementClass;
	            }var g = b.loop ? D.loopedSlides : 0;if (b.paginationAsRange) {
	              D.visibleSlides || D.calcVisibleSlides(a);var h,
	                  i = [];for (h = 0; h < D.visibleSlides.length; h++) {
	                var j = D.slides.indexOf(D.visibleSlides[h]) - g;b.loop && 0 > j && (j = D.slides.length - 2 * D.loopedSlides + j), b.loop && j >= D.slides.length - 2 * D.loopedSlides && (j = D.slides.length - 2 * D.loopedSlides - j, j = Math.abs(j)), i.push(j);
	              }for (h = 0; h < i.length; h++) {
	                e[i[h]] && (e[i[h]].className += " " + b.paginationVisibleClass);
	              }b.loop ? void 0 !== e[D.activeLoopIndex] && (e[D.activeLoopIndex].className += " " + b.paginationActiveClass) : e[D.activeIndex] && (e[D.activeIndex].className += " " + b.paginationActiveClass);
	            } else b.loop ? e[D.activeLoopIndex] && (e[D.activeLoopIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass) : e[D.activeIndex] && (e[D.activeIndex].className += " " + b.paginationActiveClass + " " + b.paginationVisibleClass);
	          }
	        }
	      }
	    }, D.calcVisibleSlides = function (a) {
	      var c = [],
	          d = 0,
	          e = 0,
	          f = 0;N && D.wrapperLeft > 0 && (a += D.wrapperLeft), !N && D.wrapperTop > 0 && (a += D.wrapperTop);for (var g = 0; g < D.slides.length; g++) {
	        d += e, e = "auto" === b.slidesPerView ? N ? D.h.getWidth(D.slides[g], !0, b.roundLengths) : D.h.getHeight(D.slides[g], !0, b.roundLengths) : F, f = d + e;var h = !1;b.visibilityFullFit ? (d >= -a && -a + J >= f && (h = !0), -a >= d && f >= -a + J && (h = !0)) : (f > -a && -a + J >= f && (h = !0), d >= -a && -a + J > d && (h = !0), -a > d && f > -a + J && (h = !0)), h && c.push(D.slides[g]);
	      }0 === c.length && (c = [D.slides[D.activeIndex]]), D.visibleSlides = c;
	    };var ab, bb;D.startAutoplay = function () {
	      if (D.support.transitions) {
	        if ("undefined" != typeof ab) return !1;if (!b.autoplay) return;D.callPlugins("onAutoplayStart"), b.onAutoplayStart && D.fireCallback(b.onAutoplayStart, D), A();
	      } else {
	        if ("undefined" != typeof bb) return !1;if (!b.autoplay) return;D.callPlugins("onAutoplayStart"), b.onAutoplayStart && D.fireCallback(b.onAutoplayStart, D), bb = setInterval(function () {
	          b.loop ? (D.fixLoop(), D.swipeNext(!0, !0)) : D.swipeNext(!0, !0) || (b.autoplayStopOnLast ? (clearInterval(bb), bb = void 0) : D.swipeTo(0));
	        }, b.autoplay);
	      }
	    }, D.stopAutoplay = function (a) {
	      if (D.support.transitions) {
	        if (!ab) return;ab && clearTimeout(ab), ab = void 0, a && !b.autoplayDisableOnInteraction && D.wrapperTransitionEnd(function () {
	          A();
	        }), D.callPlugins("onAutoplayStop"), b.onAutoplayStop && D.fireCallback(b.onAutoplayStop, D);
	      } else bb && clearInterval(bb), bb = void 0, D.callPlugins("onAutoplayStop"), b.onAutoplayStop && D.fireCallback(b.onAutoplayStop, D);
	    }, D.loopCreated = !1, D.removeLoopedSlides = function () {
	      if (D.loopCreated) for (var a = 0; a < D.slides.length; a++) {
	        D.slides[a].getData("looped") === !0 && D.wrapper.removeChild(D.slides[a]);
	      }
	    }, D.createLoop = function () {
	      if (0 !== D.slides.length) {
	        D.loopedSlides = "auto" === b.slidesPerView ? b.loopedSlides || 1 : Math.floor(b.slidesPerView) + b.loopAdditionalSlides, D.loopedSlides > D.slides.length && (D.loopedSlides = D.slides.length);var a,
	            c = "",
	            d = "",
	            e = "",
	            f = D.slides.length,
	            g = Math.floor(D.loopedSlides / f),
	            h = D.loopedSlides % f;for (a = 0; g * f > a; a++) {
	          var i = a;if (a >= f) {
	            var j = Math.floor(a / f);i = a - f * j;
	          }e += D.slides[i].outerHTML;
	        }for (a = 0; h > a; a++) {
	          d += u(b.slideDuplicateClass, D.slides[a].outerHTML);
	        }for (a = f - h; f > a; a++) {
	          c += u(b.slideDuplicateClass, D.slides[a].outerHTML);
	        }var k = c + e + E.innerHTML + e + d;for (E.innerHTML = k, D.loopCreated = !0, D.calcSlides(), a = 0; a < D.slides.length; a++) {
	          (a < D.loopedSlides || a >= D.slides.length - D.loopedSlides) && D.slides[a].setData("looped", !0);
	        }D.callPlugins("onCreateLoop");
	      }
	    }, D.fixLoop = function () {
	      var a;D.activeIndex < D.loopedSlides ? (a = D.slides.length - 3 * D.loopedSlides + D.activeIndex, D.swipeTo(a, 0, !1)) : ("auto" === b.slidesPerView && D.activeIndex >= 2 * D.loopedSlides || D.activeIndex > D.slides.length - 2 * b.slidesPerView) && (a = -D.slides.length + D.activeIndex + D.loopedSlides, D.swipeTo(a, 0, !1));
	    }, D.loadSlides = function () {
	      var a = "";D.activeLoaderIndex = 0;for (var c = b.loader.slides, d = b.loader.loadAllSlides ? c.length : b.slidesPerView * (1 + b.loader.surroundGroups), e = 0; d > e; e++) {
	        a += "outer" === b.loader.slidesHTMLType ? c[e] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + e + '">' + c[e] + "</" + b.slideElement + ">";
	      }D.wrapper.innerHTML = a, D.calcSlides(!0), b.loader.loadAllSlides || D.wrapperTransitionEnd(D.reloadSlides, !0);
	    }, D.reloadSlides = function () {
	      var a = b.loader.slides,
	          c = parseInt(D.activeSlide().data("swiperindex"), 10);if (!(0 > c || c > a.length - 1)) {
	        D.activeLoaderIndex = c;var d = Math.max(0, c - b.slidesPerView * b.loader.surroundGroups),
	            e = Math.min(c + b.slidesPerView * (1 + b.loader.surroundGroups) - 1, a.length - 1);if (c > 0) {
	          var f = -F * (c - d);D.setWrapperTranslate(f), D.setWrapperTransition(0);
	        }var g;if ("reload" === b.loader.logic) {
	          D.wrapper.innerHTML = "";var h = "";for (g = d; e >= g; g++) {
	            h += "outer" === b.loader.slidesHTMLType ? a[g] : "<" + b.slideElement + ' class="' + b.slideClass + '" data-swiperindex="' + g + '">' + a[g] + "</" + b.slideElement + ">";
	          }D.wrapper.innerHTML = h;
	        } else {
	          var i = 1e3,
	              j = 0;for (g = 0; g < D.slides.length; g++) {
	            var k = D.slides[g].data("swiperindex");d > k || k > e ? D.wrapper.removeChild(D.slides[g]) : (i = Math.min(k, i), j = Math.max(k, j));
	          }for (g = d; e >= g; g++) {
	            var l;i > g && (l = document.createElement(b.slideElement), l.className = b.slideClass, l.setAttribute("data-swiperindex", g), l.innerHTML = a[g], D.wrapper.insertBefore(l, D.wrapper.firstChild)), g > j && (l = document.createElement(b.slideElement), l.className = b.slideClass, l.setAttribute("data-swiperindex", g), l.innerHTML = a[g], D.wrapper.appendChild(l));
	          }
	        }D.reInit(!0);
	      }
	    }, B();
	  }
	};Swiper.prototype = { plugins: {}, wrapperTransitionEnd: function wrapperTransitionEnd(a, b) {
	    "use strict";
	    function c(h) {
	      if (h.target === f && (a(e), e.params.queueEndCallbacks && (e._queueEndCallbacks = !1), !b)) for (d = 0; d < g.length; d++) {
	        e.h.removeEventListener(f, g[d], c);
	      }
	    }var d,
	        e = this,
	        f = e.wrapper,
	        g = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"];if (a) for (d = 0; d < g.length; d++) {
	      e.h.addEventListener(f, g[d], c);
	    }
	  }, getWrapperTranslate: function getWrapperTranslate(a) {
	    "use strict";
	    var b,
	        c,
	        d,
	        e,
	        f = this.wrapper;return "undefined" == typeof a && (a = "horizontal" === this.params.mode ? "x" : "y"), this.support.transforms && this.params.useCSS3Transforms ? (d = window.getComputedStyle(f, null), window.WebKitCSSMatrix ? e = new WebKitCSSMatrix("none" === d.webkitTransform ? "" : d.webkitTransform) : (e = d.MozTransform || d.OTransform || d.MsTransform || d.msTransform || d.transform || d.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), b = e.toString().split(",")), "x" === a && (c = window.WebKitCSSMatrix ? e.m41 : parseFloat(16 === b.length ? b[12] : b[4])), "y" === a && (c = window.WebKitCSSMatrix ? e.m42 : parseFloat(16 === b.length ? b[13] : b[5]))) : ("x" === a && (c = parseFloat(f.style.left, 10) || 0), "y" === a && (c = parseFloat(f.style.top, 10) || 0)), c || 0;
	  }, setWrapperTranslate: function setWrapperTranslate(a, b, c) {
	    "use strict";
	    var d,
	        e = this.wrapper.style,
	        f = { x: 0, y: 0, z: 0 };3 === arguments.length ? (f.x = a, f.y = b, f.z = c) : ("undefined" == typeof b && (b = "horizontal" === this.params.mode ? "x" : "y"), f[b] = a), this.support.transforms && this.params.useCSS3Transforms ? (d = this.support.transforms3d ? "translate3d(" + f.x + "px, " + f.y + "px, " + f.z + "px)" : "translate(" + f.x + "px, " + f.y + "px)", e.webkitTransform = e.MsTransform = e.msTransform = e.MozTransform = e.OTransform = e.transform = d) : (e.left = f.x + "px", e.top = f.y + "px"), this.callPlugins("onSetWrapperTransform", f), this.params.onSetWrapperTransform && this.fireCallback(this.params.onSetWrapperTransform, this, f);
	  }, setWrapperTransition: function setWrapperTransition(a) {
	    "use strict";
	    var b = this.wrapper.style;b.webkitTransitionDuration = b.MsTransitionDuration = b.msTransitionDuration = b.MozTransitionDuration = b.OTransitionDuration = b.transitionDuration = a / 1e3 + "s", this.callPlugins("onSetWrapperTransition", { duration: a }), this.params.onSetWrapperTransition && this.fireCallback(this.params.onSetWrapperTransition, this, a);
	  }, h: { getWidth: function getWidth(a, b, c) {
	      "use strict";
	      var d = window.getComputedStyle(a, null).getPropertyValue("width"),
	          e = parseFloat(d);return (isNaN(e) || d.indexOf("%") > 0 || 0 > e) && (e = a.offsetWidth - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))), b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-left")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-right"))), c ? Math.ceil(e) : e;
	    }, getHeight: function getHeight(a, b, c) {
	      "use strict";
	      if (b) return a.offsetHeight;var d = window.getComputedStyle(a, null).getPropertyValue("height"),
	          e = parseFloat(d);return (isNaN(e) || d.indexOf("%") > 0 || 0 > e) && (e = a.offsetHeight - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) - parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))), b && (e += parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-top")) + parseFloat(window.getComputedStyle(a, null).getPropertyValue("padding-bottom"))), c ? Math.ceil(e) : e;
	    }, getOffset: function getOffset(a) {
	      "use strict";
	      var b = a.getBoundingClientRect(),
	          c = document.body,
	          d = a.clientTop || c.clientTop || 0,
	          e = a.clientLeft || c.clientLeft || 0,
	          f = window.pageYOffset || a.scrollTop,
	          g = window.pageXOffset || a.scrollLeft;return document.documentElement && !window.pageYOffset && (f = document.documentElement.scrollTop, g = document.documentElement.scrollLeft), { top: b.top + f - d, left: b.left + g - e };
	    }, windowWidth: function windowWidth() {
	      "use strict";
	      return window.innerWidth ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : void 0;
	    }, windowHeight: function windowHeight() {
	      "use strict";
	      return window.innerHeight ? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : void 0;
	    }, windowScroll: function windowScroll() {
	      "use strict";
	      return "undefined" != typeof pageYOffset ? { left: window.pageXOffset, top: window.pageYOffset } : document.documentElement ? { left: document.documentElement.scrollLeft, top: document.documentElement.scrollTop } : void 0;
	    }, addEventListener: function addEventListener(a, b, c, d) {
	      "use strict";
	      "undefined" == typeof d && (d = !1), a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
	    }, removeEventListener: function removeEventListener(a, b, c, d) {
	      "use strict";
	      "undefined" == typeof d && (d = !1), a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
	    } }, setTransform: function setTransform(a, b) {
	    "use strict";
	    var c = a.style;c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = b;
	  }, setTranslate: function setTranslate(a, b) {
	    "use strict";
	    var c = a.style,
	        d = { x: b.x || 0, y: b.y || 0, z: b.z || 0 },
	        e = this.support.transforms3d ? "translate3d(" + d.x + "px," + d.y + "px," + d.z + "px)" : "translate(" + d.x + "px," + d.y + "px)";c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = e, this.support.transforms || (c.left = d.x + "px", c.top = d.y + "px");
	  }, setTransition: function setTransition(a, b) {
	    "use strict";
	    var c = a.style;c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = b + "ms";
	  }, support: { touch: window.Modernizr && Modernizr.touch === !0 || function () {
	      "use strict";
	      return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
	    }(), transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function () {
	      "use strict";
	      var a = document.createElement("div").style;return "webkitPerspective" in a || "MozPerspective" in a || "OPerspective" in a || "MsPerspective" in a || "perspective" in a;
	    }(), transforms: window.Modernizr && Modernizr.csstransforms === !0 || function () {
	      "use strict";
	      var a = document.createElement("div").style;return "transform" in a || "WebkitTransform" in a || "MozTransform" in a || "msTransform" in a || "MsTransform" in a || "OTransform" in a;
	    }(), transitions: window.Modernizr && Modernizr.csstransitions === !0 || function () {
	      "use strict";
	      var a = document.createElement("div").style;return "transition" in a || "WebkitTransition" in a || "MozTransition" in a || "msTransition" in a || "MsTransition" in a || "OTransition" in a;
	    }(), classList: function () {
	      "use strict";
	      var a = document.createElement("div");return "classList" in a;
	    }() }, browser: { ie8: function () {
	      "use strict";
	      var a = -1;if ("Microsoft Internet Explorer" === navigator.appName) {
	        var b = navigator.userAgent,
	            c = new RegExp(/MSIE ([0-9]{1,}[\.0-9]{0,})/);null !== c.exec(b) && (a = parseFloat(RegExp.$1));
	      }return -1 !== a && 9 > a;
	    }(), ie10: window.navigator.msPointerEnabled, ie11: window.navigator.pointerEnabled } }, (window.jQuery || window.Zepto) && !function (a) {
	  "use strict";
	  a.fn.swiper = function (b) {
	    var c;return this.each(function (d) {
	      var e = a(this),
	          f = new Swiper(e[0], b);d || (c = f), e.data("swiper", f);
	    }), c;
	  };
	}(window.jQuery || window.Zepto),  true ? module.exports = Swiper : "function" == typeof define && define.amd && define([], function () {
	  "use strict";
	  return Swiper;
	});

/***/ },

/***/ 194:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});