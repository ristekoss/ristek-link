"use strict";

exports.__esModule = true;
exports.useBreakpointValue = useBreakpointValue;

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var _mediaQuery = require("./media-query.utils");

var _useBreakpoint = require("./use-breakpoint");

/**
 * React hook for getting the value for the current breakpoint from the
 * provided responsive values object.
 *
 * @example
 * const width = useBreakpointValue({ base: '150px', md: '250px' })
 */
function useBreakpointValue(values) {
  var breakpoint = (0, _useBreakpoint.useBreakpoint)();
  var theme = (0, _system.useTheme)();
  if (!breakpoint) return undefined;
  /**
   * Get the non-number breakpoint keys from the provided breakpoints
   */

  var breakpoints = Object.keys(theme.breakpoints);
  var obj = (0, _utils.isArray)(values) ? (0, _utils.fromEntries)(Object.entries((0, _utils.arrayToObjectNotation)(values, breakpoints)).map(function (_ref) {
    var key = _ref[0],
        value = _ref[1];
    return [key, value];
  })) : values;
  return (0, _mediaQuery.getClosestValue)(obj, breakpoint, breakpoints);
}
//# sourceMappingURL=use-breakpoint-value.js.map