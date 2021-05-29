"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _system = require("@chakra-ui/system");

var _themeTools = require("@chakra-ui/theme-tools");

var fade = function fade(startColor, endColor) {
  return (0, _system.keyframes)({
    from: {
      borderColor: startColor,
      background: startColor
    },
    to: {
      borderColor: endColor,
      background: endColor
    }
  });
};

var baseStyle = function baseStyle(props) {
  var defaultStartColor = (0, _themeTools.mode)("gray.100", "gray.800")(props);
  var defaultEndColor = (0, _themeTools.mode)("gray.400", "gray.600")(props);
  var _props$startColor = props.startColor,
      startColor = _props$startColor === void 0 ? defaultStartColor : _props$startColor,
      _props$endColor = props.endColor,
      endColor = _props$endColor === void 0 ? defaultEndColor : _props$endColor,
      speed = props.speed,
      theme = props.theme;
  var start = (0, _themeTools.getColor)(theme, startColor);
  var end = (0, _themeTools.getColor)(theme, endColor);
  return {
    opacity: 0.7,
    borderRadius: "2px",
    borderColor: start,
    background: end,
    animation: speed + "s linear infinite alternate " + fade(start, end)
  };
};

var _default = {
  baseStyle: baseStyle
};
exports["default"] = _default;
//# sourceMappingURL=skeleton.js.map