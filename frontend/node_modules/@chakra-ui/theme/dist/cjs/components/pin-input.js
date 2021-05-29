"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _input = _interopRequireDefault(require("./input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var baseStyle = _extends({}, _input["default"].baseStyle.field, {
  textAlign: "center"
});

var sizes = {
  lg: {
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  }
};
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
var defaultProps = _input["default"].defaultProps;
var _default = {
  baseStyle: baseStyle,
  sizes: sizes,
  variants: variants,
  defaultProps: defaultProps
};
exports["default"] = _default;
//# sourceMappingURL=pin-input.js.map