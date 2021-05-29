"use strict";

exports.__esModule = true;
exports.Circle = exports.Square = exports.Box = void 0;

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Box is the most abstract component on top of which other chakra
 * components are built. It renders a `div` element by default.
 *
 * @see Docs https://chakra-ui.com/docs/layout/box
 */
var Box = (0, _system.chakra)("div");
exports.Box = Box;

if (_utils.__DEV__) {
  Box.displayName = "Box";
}
/**
 * As a constraint, you can't pass size related props
 * Only `size` would be allowed
 */


var Square = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var size = props.size,
      _props$centerContent = props.centerContent,
      centerContent = _props$centerContent === void 0 ? true : _props$centerContent,
      rest = _objectWithoutPropertiesLoose(props, ["size", "centerContent"]);

  var styles = centerContent ? {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  } : {};
  return /*#__PURE__*/React.createElement(Box, _extends({
    ref: ref,
    boxSize: size,
    __css: _extends({}, styles, {
      flexShrink: 0,
      flexGrow: 0
    })
  }, rest));
});
exports.Square = Square;

if (_utils.__DEV__) {
  Square.displayName = "Square";
}

var Circle = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var size = props.size,
      rest = _objectWithoutPropertiesLoose(props, ["size"]);

  return /*#__PURE__*/React.createElement(Square, _extends({
    size: size,
    ref: ref,
    borderRadius: "9999px"
  }, rest));
});
exports.Circle = Circle;

if (_utils.__DEV__) {
  Circle.displayName = "Circle";
}
//# sourceMappingURL=box.js.map