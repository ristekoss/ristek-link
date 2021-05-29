function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { chakra, forwardRef, omitThemingProps, useStyleConfig } from "@chakra-ui/system";
import { cx, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
export var Heading = /*#__PURE__*/forwardRef((props, ref) => {
  var styles = useStyleConfig("Heading", props);

  var _omitThemingProps = omitThemingProps(props),
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["className"]);

  return /*#__PURE__*/React.createElement(chakra.h2, _extends({
    ref: ref,
    className: cx("chakra-heading", props.className)
  }, rest, {
    __css: styles
  }));
});

if (__DEV__) {
  Heading.displayName = "Heading";
}
//# sourceMappingURL=heading.js.map