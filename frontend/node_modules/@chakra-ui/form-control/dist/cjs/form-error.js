"use strict";

exports.__esModule = true;
exports.FormErrorIcon = exports.FormErrorMessage = void 0;

var _icon = _interopRequireDefault(require("@chakra-ui/icon"));

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

var _formControl = require("./form-control");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Used to provide feedback about an invalid input,
 * and suggest clear instructions on how to fix it.
 */
var FormErrorMessage = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var styles = (0, _system.useMultiStyleConfig)("FormError", props);
  var ownProps = (0, _system.omitThemingProps)(props);
  var field = (0, _formControl.useFormControlContext)();
  if (!(field != null && field.isInvalid)) return null;
  return /*#__PURE__*/React.createElement(_system.StylesProvider, {
    value: styles
  }, /*#__PURE__*/React.createElement(_system.chakra.div, _extends({}, field == null ? void 0 : field.getErrorMessageProps(ownProps, ref), {
    className: (0, _utils.cx)("chakra-form__error-message", props.className),
    __css: _extends({
      display: "flex",
      alignItems: "center"
    }, styles.text)
  })));
});
exports.FormErrorMessage = FormErrorMessage;

if (_utils.__DEV__) {
  FormErrorMessage.displayName = "FormErrorMessage";
}
/**
 * Used as the visual indicator that a field is invalid or
 * a field has incorrect values.
 */


var FormErrorIcon = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var styles = (0, _system.useStyles)();
  var field = (0, _formControl.useFormControlContext)();
  if (!(field != null && field.isInvalid)) return null;

  var _className = (0, _utils.cx)("chakra-form__error-icon", props.className);

  return /*#__PURE__*/React.createElement(_icon["default"], _extends({
    ref: ref,
    "aria-hidden": true
  }, props, {
    __css: styles.icon,
    className: _className
  }), /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
  }));
});
exports.FormErrorIcon = FormErrorIcon;

if (_utils.__DEV__) {
  FormErrorIcon.displayName = "FormErrorIcon";
}
//# sourceMappingURL=form-error.js.map