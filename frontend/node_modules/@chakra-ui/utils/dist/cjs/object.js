"use strict";

exports.__esModule = true;
exports.omit = omit;
exports.pick = pick;
exports.split = split;
exports.get = get;
exports.getWithDefault = getWithDefault;
exports.objectFilter = objectFilter;
exports.getCSSVar = exports.fromEntries = exports.objectKeys = exports.filterUndefined = exports.memoizedGet = exports.memoize = exports.mergeWith = void 0;

var _lodash = _interopRequireDefault(require("lodash.mergewith"));

exports.mergeWith = _lodash["default"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function omit(object, keys) {
  var result = {};
  Object.keys(object).forEach(function (key) {
    if (keys.includes(key)) return;
    result[key] = object[key];
  });
  return result;
}

function pick(object, keys) {
  var result = {};
  keys.forEach(function (key) {
    if (key in object) {
      result[key] = object[key];
    }
  });
  return result;
}

function split(object, keys) {
  var picked = {};
  var omitted = {};
  Object.keys(object).forEach(function (key) {
    if (keys.includes(key)) {
      picked[key] = object[key];
    } else {
      omitted[key] = object[key];
    }
  });
  return [picked, omitted];
}
/**
 * Get value from a deeply nested object using a string path.
 * Memoizes the value.
 * @param obj - the object
 * @param path - the string path
 * @param def  - the fallback value
 */


function get(obj, path, fallback, index) {
  var key = typeof path === "string" ? path.split(".") : [path];

  for (index = 0; index < key.length; index += 1) {
    if (!obj) break;
    obj = obj[key[index]];
  }

  return obj === undefined ? fallback : obj;
}

var memoize = function memoize(fn) {
  var cache = new WeakMap();

  var memoizedFn = function memoizedFn(obj, path, fallback, index) {
    if (typeof obj === "undefined") {
      return fn(obj, path, fallback);
    }

    if (!cache.has(obj)) {
      cache.set(obj, new Map());
    }

    var map = cache.get(obj);

    if (map.has(path)) {
      return map.get(path);
    }

    var value = fn(obj, path, fallback, index);
    map.set(path, value);
    return value;
  };

  return memoizedFn;
};

exports.memoize = memoize;
var memoizedGet = memoize(get);
/**
 * Get value from deeply nested object, based on path
 * It returns the path value if not found in object
 *
 * @param path - the string path or value
 * @param scale - the string path or value
 */

exports.memoizedGet = memoizedGet;

function getWithDefault(path, scale) {
  return memoizedGet(scale, path, path);
}

/**
 * Returns the items of an object that meet the condition specified in a callback function.
 *
 * @param object the object to loop through
 * @param fn The filter function
 */
function objectFilter(object, fn) {
  var result = {};
  Object.keys(object).forEach(function (key) {
    var value = object[key];
    var shouldPass = fn(value, key, object);

    if (shouldPass) {
      result[key] = value;
    }
  });
  return result;
}

var filterUndefined = function filterUndefined(object) {
  return objectFilter(object, function (val) {
    return val !== null && val !== undefined;
  });
};

exports.filterUndefined = filterUndefined;

var objectKeys = function objectKeys(obj) {
  return Object.keys(obj);
};
/**
 * Object.entries polyfill for Nodev10 compatibility
 */


exports.objectKeys = objectKeys;

var fromEntries = function fromEntries(entries) {
  return entries.reduce(function (carry, _ref) {
    var key = _ref[0],
        value = _ref[1];
    carry[key] = value;
    return carry;
  }, {});
};
/**
 * Get the CSS variable ref stored in the theme
 */


exports.fromEntries = fromEntries;

var getCSSVar = function getCSSVar(theme, scale, value) {
  var _theme$__cssMap$$varR, _theme$__cssMap$;

  return (_theme$__cssMap$$varR = (_theme$__cssMap$ = theme.__cssMap[scale + "." + value]) == null ? void 0 : _theme$__cssMap$.varRef) != null ? _theme$__cssMap$$varR : value;
};

exports.getCSSVar = getCSSVar;
//# sourceMappingURL=object.js.map