"use strict";

exports.__esModule = true;
exports.getClosestValue = getClosestValue;

var _utils = require("@chakra-ui/utils");

function getClosestValue(values, breakpoint, breakpoints) {
  if (breakpoints === void 0) {
    breakpoints = _utils.breakpoints;
  }

  var index = Object.keys(values).indexOf(breakpoint);

  if (index !== -1) {
    return values[breakpoint];
  }

  var stopIndex = breakpoints.indexOf(breakpoint);

  while (stopIndex >= 0) {
    var key = breakpoints[stopIndex];

    if (values[key] != null) {
      index = stopIndex;
      break;
    }

    stopIndex -= 1;
  }

  if (index !== -1) {
    var _key = breakpoints[index];
    return values[_key];
  }

  return undefined;
}
//# sourceMappingURL=media-query.utils.js.map