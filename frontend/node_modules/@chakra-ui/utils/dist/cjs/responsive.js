"use strict";

exports.__esModule = true;
exports.mapResponsive = mapResponsive;
exports.objectToArrayNotation = objectToArrayNotation;
exports.arrayToObjectNotation = arrayToObjectNotation;
exports.isResponsiveObjectLike = isResponsiveObjectLike;
exports.isCustomBreakpoint = exports.breakpoints = void 0;

var _array = require("./array");

var _assertion = require("./assertion");

var _object = require("./object");

var breakpoints = Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);
exports.breakpoints = breakpoints;

function mapResponsive(prop, mapper) {
  if ((0, _assertion.isArray)(prop)) {
    return prop.map(function (item) {
      if (item === null) {
        return null;
      }

      return mapper(item);
    });
  }

  if ((0, _assertion.isObject)(prop)) {
    return (0, _object.objectKeys)(prop).reduce(function (result, key) {
      result[key] = mapper(prop[key]);
      return result;
    }, {});
  }

  if (prop != null) {
    return mapper(prop);
  }

  return null;
}

function objectToArrayNotation(obj, bps) {
  if (bps === void 0) {
    bps = breakpoints;
  }

  var result = bps.map(function (br) {
    var _obj$br;

    return (_obj$br = obj[br]) != null ? _obj$br : null;
  });

  while ((0, _array.getLastItem)(result) === null) {
    result.pop();
  }

  return result;
}

function arrayToObjectNotation(values, bps) {
  if (bps === void 0) {
    bps = breakpoints;
  }

  var result = {};
  values.forEach(function (value, index) {
    var key = bps[index];
    if (value == null) return;
    result[key] = value;
  });
  return result;
}

function isResponsiveObjectLike(obj, bps) {
  if (bps === void 0) {
    bps = breakpoints;
  }

  var keys = Object.keys(obj);
  return keys.length > 0 && keys.every(function (key) {
    return bps.includes(key);
  });
}
/**
 * since breakpoints are defined as custom properties on an array, you may
 * `Object.keys(theme.breakpoints)` to retrieve both regular numeric indices
 * and custom breakpoints as string.
 *
 * This function returns true given a custom array property.
 */


var isCustomBreakpoint = function isCustomBreakpoint(maybeBreakpoint) {
  return Number.isNaN(Number(maybeBreakpoint));
};

exports.isCustomBreakpoint = isCustomBreakpoint;
//# sourceMappingURL=responsive.js.map