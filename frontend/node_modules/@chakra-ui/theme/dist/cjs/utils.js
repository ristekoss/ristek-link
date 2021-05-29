"use strict";

exports.__esModule = true;
exports.isChakraTheme = isChakraTheme;
exports.requiredChakraThemeKeys = void 0;

var _utils = require("@chakra-ui/utils");

var requiredChakraThemeKeys = ["borders", "breakpoints", "colors", "components", "config", "direction", "fonts", "fontSizes", "fontWeights", "letterSpacings", "lineHeights", "radii", "shadows", "sizes", "space", "styles", "transition", "zIndices"];
exports.requiredChakraThemeKeys = requiredChakraThemeKeys;

function isChakraTheme(unit) {
  if (!(0, _utils.isObject)(unit)) {
    return false;
  }

  return requiredChakraThemeKeys.every(function (propertyName) {
    return Object.prototype.hasOwnProperty.call(unit, propertyName);
  });
}
//# sourceMappingURL=utils.js.map