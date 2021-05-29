"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _input = _interopRequireDefault(require("./input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var baseStyle = _extends({}, _input["default"].baseStyle.field, {
  paddingY: "8px",
  minHeight: "80px",
  lineHeight: "short"
});

var variants = {
  outline: function outline(props) {
    return _input["default"].variants.outline(props).field;
  },
  flushed: function flushed(props) {
    return _input["default"].variants.flushed(props).field;
  },
  filled: function filled(props) {
    return _input["default"].variants.filled(props).field;
  },
  unstyled: _input["default"].variants.unstyled.field
};
var sizes = {
  xs: _input["default"].sizes.xs.field,
  sm: _input["default"].sizes.sm.field,
  md: _input["default"].sizes.md.field,
  lg: _input["default"].sizes.lg.field
};
var defaultProps = {
  size: "md",
  variant: "outline"
};
var _default = {
  baseStyle: baseStyle,
  sizes: sizes,
  variants: variants,
  defaultProps: defaultProps
};
exports["default"] = _default;
//# sourceMappingURL=textarea.js.map