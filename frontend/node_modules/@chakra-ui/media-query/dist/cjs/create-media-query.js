"use strict";

exports.__esModule = true;
exports["default"] = createMediaQueries;

var _utils = require("@chakra-ui/utils");

function createMediaQueries(breakpoints) {
  return Object.entries(breakpoints) // sort css units in ascending order to ensure media queries are generated
  // in the correct order and reference to each other correctly aswell
  .sort(function (a, b) {
    return Number.parseInt(a[1], 10) > Number.parseInt(b[1], 10) ? 1 : -1;
  }).map(function (_ref, index, arr) {
    var breakpoint = _ref[0],
        minWidth = _ref[1];
    // given a following breakpoint
    var next = arr[index + 1]; // this breakpoint must end prior the threshold of the next

    var maxWidth = next ? next[1] : undefined;
    var query = createMediaQueryString(minWidth, maxWidth);
    return {
      minWidth: minWidth,
      maxWidth: maxWidth,
      breakpoint: breakpoint,
      query: query
    };
  });
}
/**
 * Create a media query string from the breakpoints,
 * using a combination of `min-width` and `max-width`.
 */


function createMediaQueryString(minWidth, maxWidth) {
  var hasMinWidth = parseInt(minWidth, 10) >= 0;

  if (!hasMinWidth && !maxWidth) {
    return "";
  }

  var query = "(min-width: " + toMediaString(minWidth) + ")";

  if (!maxWidth) {
    return query;
  }

  if (query) {
    query += " and ";
  }

  query += "(max-width: " + toMediaString(subtract(maxWidth)) + ")";
  return query;
}

var measurementRegex = /([0-9]+\.?[0-9]*)/;

var calculateMeasurement = function calculateMeasurement(value, modifier) {
  if (typeof value === "number") {
    return "" + (value + modifier);
  }

  return value.replace(measurementRegex, function (match) {
    return "" + (parseFloat(match) + modifier);
  });
};
/**
 * 0.01 and 0.1 are too small of a difference for `px` breakpoint values
 *
 * @see https://github.com/chakra-ui/chakra-ui/issues/2188#issuecomment-712774785
 */


function subtract(value) {
  return calculateMeasurement(value, value.endsWith("px") ? -1 : -0.01);
}
/**
 * Convert media query value to string
 */


function toMediaString(value) {
  return (0, _utils.isNumber)(value) ? value + "px" : value;
}
//# sourceMappingURL=create-media-query.js.map