"use strict";

exports.__esModule = true;
exports.toPrecision = toPrecision;
exports.countDecimalPlaces = countDecimalPlaces;
exports.valueToPercent = valueToPercent;
exports.percentToValue = percentToValue;
exports.roundValueToStep = roundValueToStep;
exports.clampValue = clampValue;
exports.maxSafeInteger = exports.minSafeInteger = void 0;

var _assertion = require("./assertion");

var _function = require("./function");

var minSafeInteger = Number.MIN_SAFE_INTEGER || -9007199254740991;
exports.minSafeInteger = minSafeInteger;
var maxSafeInteger = Number.MAX_SAFE_INTEGER || 9007199254740991;
exports.maxSafeInteger = maxSafeInteger;

function toNumber(value) {
  var num = parseFloat(value);
  return (0, _assertion.isNotNumber)(num) ? 0 : num;
}
/**
 * Converts a value to a specific precision (or decimal points).
 *
 * Returns a string representing a number in fixed-point notation.
 *
 * @param value the value to convert
 * @param precision the precision or decimal points
 */


function toPrecision(value, precision) {
  var nextValue = toNumber(value);
  var scaleFactor = Math.pow(10, precision != null ? precision : 10);
  nextValue = Math.round(nextValue * scaleFactor) / scaleFactor;
  return precision ? nextValue.toFixed(precision) : nextValue.toString();
}
/**
 * Counts the number of decimal places a number has
 *
 * @param value the decimal value to count
 */


function countDecimalPlaces(value) {
  if (!Number.isFinite(value)) return 0;
  var e = 1;
  var p = 0;

  while (Math.round(value * e) / e !== value) {
    e *= 10;
    p += 1;
  }

  return p;
}
/**
 * Convert a value to percentage based on lower and upper bound values
 *
 * @param value the value in number
 * @param min the minimum value
 * @param max the maximum value
 */


function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}
/**
 * Calculate the value based on percentage, lower and upper bound values
 *
 * @param percent the percent value in decimals (e.g 0.6, 0.3)
 * @param min the minimum value
 * @param max the maximum value
 */


function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}
/**
 * Rounds a specific value to the next or previous step
 *
 * @param value the value to round
 * @param from the number that stepping started from
 * @param step the specified step
 */


function roundValueToStep(value, from, step) {
  var nextValue = Math.round((value - from) / step) * step + from;
  var precision = countDecimalPlaces(step);
  return toPrecision(nextValue, precision);
}
/**
 * Clamps a value to ensure it stays within the min and max range.
 *
 * @param value the value to clamp
 * @param min the minimum value
 * @param max the maximum value
 */


function clampValue(value, min, max) {
  if (value == null) return value;
  (0, _function.warn)({
    condition: max < min,
    message: "clamp: max cannot be less than min"
  });
  return Math.min(Math.max(value, min), max);
}
//# sourceMappingURL=number.js.map