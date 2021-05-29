// Number assertions
export function isNumber(value) {
  return typeof value === "number";
}
export function isNotNumber(value) {
  return typeof value !== "number" || Number.isNaN(value) || !Number.isFinite(value);
}
export function isNumeric(value) {
  return value != null && value - parseFloat(value) + 1 >= 0;
} // Array assertions

export function isArray(value) {
  return Array.isArray(value);
}
export function isEmptyArray(value) {
  return isArray(value) && value.length === 0;
} // Function assertions

export function isFunction(value) {
  return typeof value === "function";
} // Generic assertions

export function isDefined(value) {
  return typeof value !== "undefined" && value !== undefined;
}
export function isUndefined(value) {
  return typeof value === "undefined" || value === undefined;
} // Object assertions

export function isObject(value) {
  var type = typeof value;
  return value != null && (type === "object" || type === "function") && !isArray(value);
}
export function isEmptyObject(value) {
  return isObject(value) && Object.keys(value).length === 0;
}
export function isNotEmptyObject(value) {
  return value && !isEmptyObject(value);
}
export function isNull(value) {
  return value == null;
} // String assertions

export function isString(value) {
  return Object.prototype.toString.call(value) === "[object String]";
}
export function isCssVar(value) {
  return /^var\(--.+\)$/.test(value);
} // Empty assertions

export function isEmpty(value) {
  if (isArray(value)) return isEmptyArray(value);
  if (isObject(value)) return isEmptyObject(value);
  if (value == null || value === "") return true;
  return false;
}
export var __DEV__ = process.env.NODE_ENV !== "production";
export var __TEST__ = process.env.NODE_ENV === "test";
export function isRefObject(val) {
  return "current" in val;
}
export function isInputEvent(value) {
  return value && isObject(value) && isObject(value.target);
}
//# sourceMappingURL=assertion.js.map