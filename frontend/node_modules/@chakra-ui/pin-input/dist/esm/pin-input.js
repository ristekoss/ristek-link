function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { chakra, forwardRef, omitThemingProps, useStyleConfig } from "@chakra-ui/system";
import { cx, __DEV__ } from "@chakra-ui/utils";
import { getValidChildren } from "@chakra-ui/react-utils";
import * as React from "react";
import { PinInputDescendantsProvider, PinInputProvider, usePinInput, usePinInputField } from "./use-pin-input";
export var PinInput = props => {
  var styles = useStyleConfig("PinInput", props);

  var _omitThemingProps = omitThemingProps(props),
      {
    children
  } = _omitThemingProps,
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["children"]);

  var _usePinInput = usePinInput(rest),
      {
    descendants
  } = _usePinInput,
      context = _objectWithoutPropertiesLoose(_usePinInput, ["descendants"]);

  var clones = getValidChildren(children).map(child => /*#__PURE__*/React.cloneElement(child, {
    __css: styles
  }));
  return /*#__PURE__*/React.createElement(PinInputDescendantsProvider, {
    value: descendants
  }, /*#__PURE__*/React.createElement(PinInputProvider, {
    value: context
  }, clones));
};

if (__DEV__) {
  PinInput.displayName = "PinInput";
}

export var PinInputField = /*#__PURE__*/forwardRef((props, ref) => {
  var inputProps = usePinInputField(props, ref);
  return /*#__PURE__*/React.createElement(chakra.input, _extends({}, inputProps, {
    className: cx("chakra-pin-input", props.className)
  }));
});

if (__DEV__) {
  PinInputField.displayName = "PinInputField";
}
//# sourceMappingURL=pin-input.js.map