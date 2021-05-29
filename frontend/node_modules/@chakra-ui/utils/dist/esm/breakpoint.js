import { getLastItem } from "./array";
import { isNumber, isObject } from "./assertion";
import { fromEntries } from "./object";

function analyzeCSSValue(value) {
  var num = parseFloat(value.toString());
  var unit = value.toString().replace(String(num), "");
  return {
    unitless: !unit,
    value: num,
    unit
  };
}

export function px(value) {
  if (value == null) return value;
  var {
    unitless
  } = analyzeCSSValue(value);
  return unitless || isNumber(value) ? value + "px" : value;
}

var sortByBreakpointValue = (a, b) => parseInt(a[1], 10) > parseInt(b[1], 10) ? 1 : -1;

var sortBps = breakpoints => fromEntries(Object.entries(breakpoints).sort(sortByBreakpointValue));

function normalize(breakpoints) {
  var sorted = sortBps(breakpoints);
  return Object.assign(Object.values(sorted), sorted);
}

function keys(breakpoints) {
  var value = Object.keys(sortBps(breakpoints));
  return new Set(value);
}

function subtract(value) {
  var _px;

  if (!value) return value;
  value = (_px = px(value)) != null ? _px : value;
  var factor = value.endsWith("px") ? -1 : // the equivalent of 1px in em using a 16px base
  -0.0635;
  return isNumber(value) ? "" + (value + factor) : value.replace(/([0-9]+\.?[0-9]*)/, m => "" + (parseFloat(m) + factor));
}

function queryString(min, max) {
  var query = [];
  if (min) query.push("@media screen and (min-width: " + px(min) + ")");
  if (query.length > 0 && max) query.push("and");
  if (max) query.push("@media screen and (max-width: " + px(max) + ")");
  return query.join(" ");
}

export function analyzeBreakpoints(breakpoints) {
  var _breakpoints$base;

  if (!breakpoints) return null;
  breakpoints.base = (_breakpoints$base = breakpoints.base) != null ? _breakpoints$base : "0px";
  var normalized = normalize(breakpoints);
  var queries = Object.entries(breakpoints).sort(sortByBreakpointValue).map((_ref, index, entry) => {
    var _entry;

    var [breakpoint, minW] = _ref;
    var [, maxW] = (_entry = entry[index + 1]) != null ? _entry : [];
    maxW = parseFloat(maxW) > 0 ? subtract(maxW) : undefined;
    return {
      breakpoint,
      minW,
      maxW,
      maxWQuery: queryString(null, maxW),
      minWQuery: queryString(minW),
      minMaxQuery: queryString(minW, maxW)
    };
  });

  var _keys = keys(breakpoints);

  var _keysArr = Array.from(_keys.values());

  return {
    keys: _keys,
    normalized,

    isResponsive(test) {
      var keys = Object.keys(test);
      return keys.length > 0 && keys.every(key => _keys.has(key));
    },

    asObject: sortBps(breakpoints),
    asArray: normalize(breakpoints),
    details: queries,
    media: [null, ...normalized.map(minW => queryString(minW)).slice(1)],

    toArrayValue(test) {
      if (!isObject(test)) {
        throw new Error("toArrayValue: value must be an object");
      }

      var result = _keysArr.map(bp => {
        var _test$bp;

        return (_test$bp = test[bp]) != null ? _test$bp : null;
      });

      while (getLastItem(result) === null) {
        result.pop();
      }

      return result;
    },

    toObjectValue(test) {
      if (!Array.isArray(test)) {
        throw new Error("toObjectValue: value must be an array");
      }

      return test.reduce((acc, value, index) => {
        var key = _keysArr[index];
        if (key != null && value != null) acc[key] = value;
        return acc;
      }, {});
    }

  };
}
//# sourceMappingURL=breakpoint.js.map