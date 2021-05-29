function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { chakra, forwardRef } from "@chakra-ui/system";
import { cx, __DEV__ } from "@chakra-ui/utils";
import { createContext } from "@chakra-ui/react-utils";
import * as React from "react";
var [ButtonGroupProvider, useButtonGroup] = createContext({
  strict: false,
  name: "ButtonGroupContext"
});
export { useButtonGroup };
export var ButtonGroup = /*#__PURE__*/forwardRef((props, ref) => {
  var {
    size,
    colorScheme,
    variant,
    className,
    spacing = "0.5rem",
    isAttached,
    isDisabled
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["size", "colorScheme", "variant", "className", "spacing", "isAttached", "isDisabled"]);

  var _className = cx("chakra-button__group", className);

  var context = React.useMemo(() => ({
    size,
    colorScheme,
    variant,
    isDisabled
  }), [size, colorScheme, variant, isDisabled]);
  var groupStyles = {
    display: "inline-flex"
  };

  if (isAttached) {
    groupStyles = _extends({}, groupStyles, {
      "> *:first-of-type:not(:last-of-type)": {
        borderEndRadius: 0
      },
      "> *:not(:first-of-type):not(:last-of-type)": {
        borderRadius: 0
      },
      "> *:not(:first-of-type):last-of-type": {
        borderStartRadius: 0
      }
    });
  } else {
    groupStyles = _extends({}, groupStyles, {
      "& > *:not(style) ~ *:not(style)": {
        marginStart: spacing
      }
    });
  }

  return /*#__PURE__*/React.createElement(ButtonGroupProvider, {
    value: context
  }, /*#__PURE__*/React.createElement(chakra.div, _extends({
    ref: ref,
    role: "group",
    __css: groupStyles,
    className: _className
  }, rest)));
});

if (__DEV__) {
  ButtonGroup.displayName = "ButtonGroup";
}
//# sourceMappingURL=button-group.js.map