"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _badge = _interopRequireDefault(require("./badge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var variants = _badge["default"].variants,
    defaultProps = _badge["default"].defaultProps;
var baseStyle = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm"
};
var _default = {
  baseStyle: baseStyle,
  variants: variants,
  defaultProps: defaultProps
};
exports["default"] = _default;
//# sourceMappingURL=code.js.map