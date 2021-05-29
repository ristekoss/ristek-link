function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { forwardRef } from "@chakra-ui/system";
import { __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
import { Icon } from "./icon";
export function createIcon(options) {
  var {
    viewBox = "0 0 24 24",
    d: pathDefinition,
    path,
    displayName,
    defaultProps = {}
  } = options;
  var Comp = /*#__PURE__*/forwardRef((props, ref) => /*#__PURE__*/React.createElement(Icon, _extends({
    ref: ref,
    viewBox: viewBox
  }, defaultProps, props), path != null ? path : /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: pathDefinition
  })));

  if (__DEV__) {
    Comp.displayName = displayName;
  }

  return Comp;
}
//# sourceMappingURL=create-icon.js.map