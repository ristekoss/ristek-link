"use strict";

exports.__esModule = true;
exports.InputRightElement = exports.InputLeftElement = void 0;

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledElement = (0, _system.chakra)("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "0",
    zIndex: 2
  }
});
var InputElement = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var _input$height, _input$height2, _elementStyles;

  var _props$placement = props.placement,
      placement = _props$placement === void 0 ? "left" : _props$placement,
      rest = _objectWithoutPropertiesLoose(props, ["placement"]);

  var styles = (0, _system.useStyles)();
  var input = styles.field;
  var attr = placement === "left" ? "insetStart" : "insetEnd";
  var elementStyles = (_elementStyles = {}, _elementStyles[attr] = "0", _elementStyles.width = (_input$height = input == null ? void 0 : input.height) != null ? _input$height : input == null ? void 0 : input.h, _elementStyles.height = (_input$height2 = input == null ? void 0 : input.height) != null ? _input$height2 : input == null ? void 0 : input.h, _elementStyles.fontSize = input == null ? void 0 : input.fontSize, _elementStyles);
  return /*#__PURE__*/React.createElement(StyledElement, _extends({
    ref: ref,
    __css: elementStyles
  }, rest));
}); // This is used in `input-group.tsx`

InputElement.id = "InputElement";

if (_utils.__DEV__) {
  InputElement.displayName = "InputElement";
}

var InputLeftElement = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var className = props.className,
      rest = _objectWithoutPropertiesLoose(props, ["className"]);

  var _className = (0, _utils.cx)("chakra-input__left-element", className);

  return /*#__PURE__*/React.createElement(InputElement, _extends({
    ref: ref,
    placement: "left",
    className: _className
  }, rest));
}); // This is used in `input-group.tsx`

exports.InputLeftElement = InputLeftElement;
InputLeftElement.id = "InputLeftElement";

if (_utils.__DEV__) {
  InputLeftElement.displayName = "InputLeftElement";
}

var InputRightElement = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var className = props.className,
      rest = _objectWithoutPropertiesLoose(props, ["className"]);

  var _className = (0, _utils.cx)("chakra-input__right-element", className);

  return /*#__PURE__*/React.createElement(InputElement, _extends({
    ref: ref,
    placement: "right",
    className: _className
  }, rest));
}); // This is used in `input-group.tsx`

exports.InputRightElement = InputRightElement;
InputRightElement.id = "InputRightElement";

if (_utils.__DEV__) {
  InputRightElement.displayName = "InputRightElement";
}
//# sourceMappingURL=input-element.js.map