function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import Icon from "@chakra-ui/icon";
import { chakra, forwardRef, omitThemingProps, StylesProvider, useMultiStyleConfig, useStyles } from "@chakra-ui/system";
import { cx, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
import { useFormControlContext } from "./form-control";

/**
 * Used to provide feedback about an invalid input,
 * and suggest clear instructions on how to fix it.
 */
export var FormErrorMessage = /*#__PURE__*/forwardRef((props, ref) => {
  var styles = useMultiStyleConfig("FormError", props);
  var ownProps = omitThemingProps(props);
  var field = useFormControlContext();
  if (!(field != null && field.isInvalid)) return null;
  return /*#__PURE__*/React.createElement(StylesProvider, {
    value: styles
  }, /*#__PURE__*/React.createElement(chakra.div, _extends({}, field == null ? void 0 : field.getErrorMessageProps(ownProps, ref), {
    className: cx("chakra-form__error-message", props.className),
    __css: _extends({
      display: "flex",
      alignItems: "center"
    }, styles.text)
  })));
});

if (__DEV__) {
  FormErrorMessage.displayName = "FormErrorMessage";
}
/**
 * Used as the visual indicator that a field is invalid or
 * a field has incorrect values.
 */


export var FormErrorIcon = /*#__PURE__*/forwardRef((props, ref) => {
  var styles = useStyles();
  var field = useFormControlContext();
  if (!(field != null && field.isInvalid)) return null;

  var _className = cx("chakra-form__error-icon", props.className);

  return /*#__PURE__*/React.createElement(Icon, _extends({
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

if (__DEV__) {
  FormErrorIcon.displayName = "FormErrorIcon";
}
//# sourceMappingURL=form-error.js.map