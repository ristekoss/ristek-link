"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _themeTools = require("@chakra-ui/theme-tools");

var baseStyle = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold"
};

function variantSolid(props) {
  var c = props.colorScheme,
      theme = props.theme;
  var dark = (0, _themeTools.transparentize)(c + ".500", 0.6)(theme);
  return {
    bg: (0, _themeTools.mode)(c + ".500", dark)(props),
    color: (0, _themeTools.mode)("white", "whiteAlpha.800")(props)
  };
}

function variantSubtle(props) {
  var c = props.colorScheme,
      theme = props.theme;
  var darkBg = (0, _themeTools.transparentize)(c + ".200", 0.16)(theme);
  return {
    bg: (0, _themeTools.mode)(c + ".100", darkBg)(props),
    color: (0, _themeTools.mode)(c + ".800", c + ".200")(props)
  };
}

function variantOutline(props) {
  var c = props.colorScheme,
      theme = props.theme;
  var darkColor = (0, _themeTools.transparentize)(c + ".200", 0.8)(theme);
  var lightColor = (0, _themeTools.getColor)(theme, c + ".500");
  var color = (0, _themeTools.mode)(lightColor, darkColor)(props);
  return {
    color: color,
    boxShadow: "inset 0 0 0px 1px " + color
  };
}

var variants = {
  solid: variantSolid,
  subtle: variantSubtle,
  outline: variantOutline
};
var defaultProps = {
  variant: "subtle",
  colorScheme: "gray"
};
var _default = {
  baseStyle: baseStyle,
  variants: variants,
  defaultProps: defaultProps
};
exports["default"] = _default;
//# sourceMappingURL=badge.js.map