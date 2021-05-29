"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _themeTools = require("@chakra-ui/theme-tools");

function baseStyle(props) {
  var hoverBg = (0, _themeTools.mode)("blackAlpha.100", "whiteAlpha.100")(props);
  var activeBg = (0, _themeTools.mode)("blackAlpha.200", "whiteAlpha.200")(props);
  return {
    borderRadius: "md",
    transition: "all 0.2s",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
      boxShadow: "none"
    },
    _hover: {
      bg: hoverBg
    },
    _active: {
      bg: activeBg
    },
    _focus: {
      boxShadow: "outline"
    }
  };
}

var sizes = {
  lg: {
    w: "40px",
    h: "40px",
    fontSize: "16px"
  },
  md: {
    w: "32px",
    h: "32px",
    fontSize: "12px"
  },
  sm: {
    w: "24px",
    h: "24px",
    fontSize: "10px"
  }
};
var defaultProps = {
  size: "md"
};
var _default = {
  baseStyle: baseStyle,
  sizes: sizes,
  defaultProps: defaultProps
};
exports["default"] = _default;
//# sourceMappingURL=close-button.js.map