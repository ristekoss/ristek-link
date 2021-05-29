"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var parts = ["container", "item", "link", "separator"];
var baseStyleLink = {
  transition: "all 0.15s ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focus: {
    boxShadow: "outline"
  }
};
var baseStyle = {
  link: baseStyleLink
};
var _default = {
  parts: parts,
  baseStyle: baseStyle
};
exports["default"] = _default;
//# sourceMappingURL=breadcrumb.js.map