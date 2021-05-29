"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _themeTools = require("@chakra-ui/theme-tools");

function baseStyle(props) {
  return {
    bg: (0, _themeTools.mode)("gray.100", "whiteAlpha")(props),
    borderRadius: "md",
    borderWidth: "1px",
    borderBottomWidth: "3px",
    fontSize: "0.8em",
    fontWeight: "bold",
    lineHeight: "normal",
    px: "0.4em",
    whiteSpace: "nowrap"
  };
}

var _default = {
  baseStyle: baseStyle
};
exports["default"] = _default;
//# sourceMappingURL=kbd.js.map