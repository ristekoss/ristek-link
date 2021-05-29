"use strict";

exports.__esModule = true;
exports.usePrefersReducedMotion = usePrefersReducedMotion;
exports.useColorModePreference = useColorModePreference;

var _useMediaQuery3 = require("./use-media-query");

/**
 * React hook used to get the user's animation preference.
 */
function usePrefersReducedMotion() {
  var _useMediaQuery = (0, _useMediaQuery3.useMediaQuery)("(prefers-reduced-motion: reduce)"),
      prefersReducedMotion = _useMediaQuery[0];

  return prefersReducedMotion;
}
/**
 * React hook for getting the user's color mode preference.
 */


function useColorModePreference() {
  var _useMediaQuery2 = (0, _useMediaQuery3.useMediaQuery)(["(prefers-color-scheme: light)", "(prefers-color-scheme: dark)"]),
      isDark = _useMediaQuery2[0],
      isLight = _useMediaQuery2[1];

  if (isLight) return "light";
  if (isDark) return "dark";
  return undefined;
}
//# sourceMappingURL=media-query.hook.js.map