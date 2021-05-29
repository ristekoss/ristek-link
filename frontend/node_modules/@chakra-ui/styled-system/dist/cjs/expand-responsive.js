"use strict";

exports.__esModule = true;
exports.expandResponsive = void 0;

var _utils = require("@chakra-ui/utils");

/**
 * Expands an array or object syntax responsive style.
 *
 * @example
 * expandResponsive({ mx: [1, 2] })
 * // or
 * expandResponsive({ mx: { base: 1, sm: 2 } })
 *
 * // => { mx: 1, "@media(min-width:<sm>)": { mx: 2 } }
 */
var expandResponsive = function expandResponsive(styles) {
  return function (theme) {
    /**
     * Before any style can be processed, the user needs to call `toCSSVar`
     * which analyzes the theme's breakpoint and appends a `__breakpoints` property
     * to the theme with more details of the breakpoints.
     *
     * To learn more, go here: packages/utils/src/responsive.ts #analyzeBreakpoints
     */
    if (!theme.__breakpoints) return styles;
    var _theme$__breakpoints = theme.__breakpoints,
        isResponsive = _theme$__breakpoints.isResponsive,
        toArrayValue = _theme$__breakpoints.toArrayValue,
        medias = _theme$__breakpoints.media;
    var computedStyles = {};

    for (var key in styles) {
      var value = (0, _utils.runIfFn)(styles[key], theme);
      if (value == null) continue; // converts the object responsive syntax to array syntax

      value = (0, _utils.isObject)(value) && isResponsive(value) ? toArrayValue(value) : value;

      if (!Array.isArray(value)) {
        computedStyles[key] = value;
        continue;
      }

      var queries = value.slice(0, medias.length).length;

      for (var index = 0; index < queries; index += 1) {
        var media = medias == null ? void 0 : medias[index];

        if (!media) {
          computedStyles[key] = value[index];
          continue;
        }

        computedStyles[media] = computedStyles[media] || {};

        if (value[index] == null) {
          continue;
        }

        computedStyles[media][key] = value[index];
      }
    }

    return computedStyles;
  };
};

exports.expandResponsive = expandResponsive;
//# sourceMappingURL=expand-responsive.js.map