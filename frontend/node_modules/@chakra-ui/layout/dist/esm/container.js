function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { chakra, forwardRef, omitThemingProps, useStyleConfig } from "@chakra-ui/system";
import { cx, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";

/**
 * Layout component used to wrap app or website content
 *
 * It sets `margin-left` and `margin-right` to `auto`,
 * to keep its content centered.
 *
 * It also sets a default max-width of `60ch` (60 characters).
 */
export var Container = /*#__PURE__*/forwardRef((props, ref) => {
  var _omitThemingProps = omitThemingProps(props),
      {
    className,
    centerContent
  } = _omitThemingProps,
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["className", "centerContent"]);

  var styles = useStyleConfig("Container", props);
  return /*#__PURE__*/React.createElement(chakra.div, _extends({
    ref: ref,
    className: cx("chakra-container", className)
  }, rest, {
    __css: _extends({}, styles, centerContent && {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    })
  }));
});

if (__DEV__) {
  Container.displayName = "Container";
}
//# sourceMappingURL=container.js.map