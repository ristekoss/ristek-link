"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var baseStyle = {
  fontFamily: "heading",
  fontWeight: "bold"
};
var sizes = {
  "4xl": {
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  },
  "3xl": {
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  },
  "2xl": {
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  },
  xl: {
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  },
  lg: {
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  },
  md: {
    fontSize: "xl",
    lineHeight: 1.2
  },
  sm: {
    fontSize: "md",
    lineHeight: 1.2
  },
  xs: {
    fontSize: "sm",
    lineHeight: 1.2
  }
};
var defaultProps = {
  size: "xl"
};
var _default = {
  baseStyle: baseStyle,
  sizes: sizes,
  defaultProps: defaultProps
};
exports["default"] = _default;
//# sourceMappingURL=heading.js.map