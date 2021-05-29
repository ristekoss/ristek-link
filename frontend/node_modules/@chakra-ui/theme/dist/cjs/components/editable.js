"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var parts = ["preview", "input"];
var baseStylePreview = {
  borderRadius: "md",
  py: "3px",
  transition: "all 0.2s"
};
var baseStyleInput = {
  borderRadius: "md",
  py: "3px",
  transition: "all 0.2s",
  width: "full",
  _focus: {
    boxShadow: "outline"
  },
  _placeholder: {
    opacity: 0.6
  }
};
var baseStyle = {
  preview: baseStylePreview,
  input: baseStyleInput
};
var _default = {
  parts: parts,
  baseStyle: baseStyle
};
exports["default"] = _default;
//# sourceMappingURL=editable.js.map