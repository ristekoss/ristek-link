"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _themeTools = require("@chakra-ui/theme-tools");

var _sizes = _interopRequireDefault(require("../foundations/sizes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var parts = ["container", "excessLabel", "badge", "label"];

function baseStyleBadge(props) {
  return {
    transform: "translate(25%, 25%)",
    borderRadius: "full",
    border: "0.2em solid",
    borderColor: (0, _themeTools.mode)("white", "gray.800")(props)
  };
}

function baseStyleExcessLabel(props) {
  return {
    bg: (0, _themeTools.mode)("gray.200", "whiteAlpha.400")(props)
  };
}

function baseStyleContainer(props) {
  var name = props.name,
      theme = props.theme;
  var bg = name ? (0, _themeTools.randomColor)({
    string: name
  }) : "gray.400";
  var isBgDark = (0, _themeTools.isDark)(bg)(theme);
  var color = "white";
  if (!isBgDark) color = "gray.800";
  var borderColor = (0, _themeTools.mode)("white", "gray.800")(props);
  return {
    bg: bg,
    color: color,
    borderColor: borderColor,
    verticalAlign: "top"
  };
}

var baseStyle = function baseStyle(props) {
  return {
    badge: baseStyleBadge(props),
    excessLabel: baseStyleExcessLabel(props),
    container: baseStyleContainer(props)
  };
};

function getSize(size) {
  var themeSize = _sizes["default"][size];
  return {
    container: {
      width: size,
      height: size,
      fontSize: "calc(" + (themeSize != null ? themeSize : size) + " / 2.5)"
    },
    excessLabel: {
      width: size,
      height: size
    },
    label: {
      fontSize: "calc(" + (themeSize != null ? themeSize : size) + " / 2.5)",
      lineHeight: size !== "100%" ? themeSize != null ? themeSize : size : undefined
    }
  };
}

var sizes = {
  "2xs": getSize("4"),
  xs: getSize("6"),
  sm: getSize("8"),
  md: getSize("12"),
  lg: getSize("16"),
  xl: getSize("24"),
  "2xl": getSize("32"),
  full: getSize("100%")
};
var defaultProps = {
  size: "md"
};
var _default = {
  parts: parts,
  baseStyle: baseStyle,
  sizes: sizes,
  defaultProps: defaultProps
};
exports["default"] = _default;
//# sourceMappingURL=avatar.js.map