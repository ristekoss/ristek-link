function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { useFormControl } from "@chakra-ui/form-control";
import { chakra, forwardRef, omitThemingProps, useMultiStyleConfig } from "@chakra-ui/system";
import { cx, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";

/**
 * Input
 *
 * Element that allows users enter single valued data.
 */
export var Input = /*#__PURE__*/forwardRef((props, ref) => {
  var styles = useMultiStyleConfig("Input", props);
  var ownProps = omitThemingProps(props);
  var input = useFormControl(ownProps);

  var _className = cx("chakra-input", props.className);

  return /*#__PURE__*/React.createElement(chakra.input, _extends({}, input, {
    __css: styles.field,
    ref: ref,
    className: _className
  }));
});

if (__DEV__) {
  Input.displayName = "Input";
} // This is used in `input-group.tsx`


Input.id = "Input";
//# sourceMappingURL=input.js.map