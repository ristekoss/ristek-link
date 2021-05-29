"use strict";

exports.__esModule = true;
exports.Textarea = void 0;

var _formControl = require("@chakra-ui/form-control");

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Textarea is used to enter an amount of text that's longer than a single line
 * @see Docs https://chakra-ui.com/docs/form/textarea
 */
var Textarea = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var styles = (0, _system.useStyleConfig)("Textarea", props);

  var _omitThemingProps = (0, _system.omitThemingProps)(props),
      className = _omitThemingProps.className,
      rows = _omitThemingProps.rows,
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["className", "rows"]);

  var textareaProps = (0, _formControl.useFormControl)(rest);
  var omitted = ["h", "minH", "height", "minHeight"];
  var textareaStyles = rows ? (0, _utils.omit)(styles, omitted) : styles;
  return /*#__PURE__*/React.createElement(_system.chakra.textarea, _extends({
    ref: ref,
    rows: rows
  }, textareaProps, {
    className: (0, _utils.cx)("chakra-textarea", className),
    __css: textareaStyles
  }));
});
exports.Textarea = Textarea;

if (_utils.__DEV__) {
  Textarea.displayName = "Textarea";
}
//# sourceMappingURL=textarea.js.map