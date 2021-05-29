"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _themeTools = require("@chakra-ui/theme-tools");

var styles = {
  global: function global(props) {
    return {
      body: {
        fontFamily: "body",
        color: (0, _themeTools.mode)("gray.800", "whiteAlpha.900")(props),
        bg: (0, _themeTools.mode)("white", "gray.800")(props),
        transition: "background-color 0.2s",
        lineHeight: "base"
      },
      "*::placeholder": {
        color: (0, _themeTools.mode)("gray.400", "whiteAlpha.400")(props)
      },
      "*, *::before, &::after": {
        borderColor: (0, _themeTools.mode)("gray.200", "whiteAlpha.300")(props),
        wordWrap: "break-word"
      }
    };
  }
};
var _default = styles;
exports["default"] = _default;
//# sourceMappingURL=styles.js.map