"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _themeTools = require("@chakra-ui/theme-tools");

var baseStyle = function baseStyle(props) {
  return {
    borderRadius: "md",
    fontWeight: "semibold",
    _focus: {
      boxShadow: "outline",
      padding: "1rem",
      position: "fixed",
      top: "1.5rem",
      insetStart: "1.5rem",
      bg: (0, _themeTools.mode)("white", "gray.700")(props)
    }
  };
};

var _default = {
  baseStyle: baseStyle
};
exports["default"] = _default;
//# sourceMappingURL=skip-link.js.map