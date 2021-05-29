"use strict";

exports.__esModule = true;
exports["default"] = exports.VisuallyHiddenInput = exports.VisuallyHidden = exports.visuallyHiddenStyle = void 0;

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

/**
 * Styles to visually hide an element
 * but make it accessible to screen-readers
 */
var visuallyHiddenStyle = {
  border: "0px",
  clip: "rect(0px, 0px, 0px, 0px)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
/**
 * Visually hidden component used to hide
 * elements on screen
 */

exports.visuallyHiddenStyle = visuallyHiddenStyle;
var VisuallyHidden = (0, _system.chakra)("span", {
  baseStyle: visuallyHiddenStyle
});
exports.VisuallyHidden = VisuallyHidden;

if (_utils.__DEV__) {
  VisuallyHidden.displayName = "VisuallyHidden";
}
/**
 * Visually hidden input component for designing
 * custom input components using the html `input`
 * as a proxy
 */


var VisuallyHiddenInput = (0, _system.chakra)("input", {
  baseStyle: visuallyHiddenStyle
});
exports.VisuallyHiddenInput = VisuallyHiddenInput;

if (_utils.__DEV__) {
  VisuallyHiddenInput.displayName = "VisuallyHiddenInput";
}

var _default = VisuallyHidden;
exports["default"] = _default;
//# sourceMappingURL=visually-hidden.js.map