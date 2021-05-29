"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var parts = ["container", "button", "panel", "icon"];
var baseStyleContainer = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
};
var baseStyleButton = {
  fontSize: "1rem",
  _focus: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: 4,
  py: 2
};
var baseStylePanel = {
  pt: 2,
  px: 4,
  pb: 5
};
var baseStyleIcon = {
  fontSize: "1.25em"
};
var baseStyle = {
  container: baseStyleContainer,
  button: baseStyleButton,
  panel: baseStylePanel,
  icon: baseStyleIcon
};
var _default = {
  parts: parts,
  baseStyle: baseStyle
};
exports["default"] = _default;
//# sourceMappingURL=accordion.js.map