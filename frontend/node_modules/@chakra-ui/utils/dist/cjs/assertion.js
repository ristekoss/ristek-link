"use strict";

exports.__esModule = true;
exports.isNumber = isNumber;
exports.isNotNumber = isNotNumber;
exports.isNumeric = isNumeric;
exports.isArray = isArray;
exports.isEmptyArray = isEmptyArray;
exports.isFunction = isFunction;
exports.isDefined = isDefined;
exports.isUndefined = isUndefined;
exports.isObject = isObject;
exports.isEmptyObject = isEmptyObject;
exports.isNotEmptyObject = isNotEmptyObject;
exports.isNull = isNull;
exports.isString = isString;
exports.isCssVar = isCssVar;
exports.isEmpty = isEmpty;
exports.isRefObject = isRefObject;
exports.isInputEvent = isInputEvent;
exports.__TEST__ = exports.__DEV__ = void 0;

// Number assertions
function isNumber(value) {
  return typeof value === "number";
}

function isNotNumber(value) {
  return typeof value !== "number" || Number.isNaN(value) || !Number.isFinite(value);
}

function isNumeric(value) {
  return value != null && value - parseFloat(value) + 1 >= 0;
} // Array assertions


function isArray(value) {
  return Array.isArray(value);
}

function isEmptyArray(value) {
  return isArray(value) && value.length === 0;
} // Function assertions


function isFunction(value) {
  return typeof value === "function";
} // Generic assertions


function isDefined(value) {
  return typeof value !== "undefined" && value !== undefined;
}

function isUndefined(value) {
  return typeof value === "undefined" || value === undefined;
} // Object assertions


function isObject(value) {
  var type = typeof value;
  return value != null && (type === "object" || type === "function") && !isArray(value);
}

function isEmptyObject(value) {
  return isObject(value) && Object.keys(value).length === 0;
}

function isNotEmptyObject(value) {
  return value && !isEmptyObject(value);
}

function isNull(value) {
  return value == null;
} // String assertions


function isString(value) {
  return Object.prototype.toString.call(value) === "[object String]";
}

function isCssVar(value) {
  return /^var\(--.+\)$/.test(value);
} // Empty assertions


function isEmpty(value) {
  if (isArray(value)) return isEmptyArray(value);
  if (isObject(value)) return isEmptyObject(value);
  if (value == null || value === "") return true;
  return false;
}

var __DEV__ = process.env.NODE_ENV !== "production";

exports.__DEV__ = __DEV__;

var __TEST__ = process.env.NODE_ENV === "test";

exports.__TEST__ = __TEST__;

function isRefObject(val) {
  return "current" in val;
}

function isInputEvent(value) {
  return value && isObject(value) && isObject(value.target);
}
//# sourceMappingURL=assertion.js.map