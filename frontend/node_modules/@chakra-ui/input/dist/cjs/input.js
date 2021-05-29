"use strict";

exports.__esModule = true;
exports.Input = void 0;

var _formControl = require("@chakra-ui/form-control");

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Input
 *
 * Element that allows users enter single valued data.
 */
var Input = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var styles = (0, _system.useMultiStyleConfig)("Input", props);
  var ownProps = (0, _system.omitThemingProps)(props);
  var input = (0, _formControl.useFormControl)(ownProps);

  var _className = (0, _utils.cx)("chakra-input", props.className);

  return /*#__PURE__*/React.createElement(_system.chakra.input, _extends({}, input, {
    __css: styles.field,
    ref: ref,
    className: _className
  }));
});
exports.Input = Input;

if (_utils.__DEV__) {
  Input.displayName = "Input";
} // This is used in `input-group.tsx`


Input.id = "Input";
//# sourceMappingURL=input.js.map