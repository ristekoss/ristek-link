function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { chakra, forwardRef, useStyles } from "@chakra-ui/system";
import { cx, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
var placements = {
  left: {
    marginEnd: "-1px",
    borderEndRadius: 0,
    borderEndColor: "transparent"
  },
  right: {
    marginStart: "-1px",
    borderStartRadius: 0,
    borderStartColor: "transparent"
  }
};
var StyledAddon = chakra("div", {
  baseStyle: {
    flex: "0 0 auto",
    width: "auto",
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap"
  }
});

/**
 * InputAddon
 *
 * Element to append or prepend to an input
 */
export var InputAddon = /*#__PURE__*/forwardRef((props, ref) => {
  var _placements$placement;

  var {
    placement = "left"
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["placement"]);

  var placementStyles = (_placements$placement = placements[placement]) != null ? _placements$placement : {};
  var styles = useStyles();
  return /*#__PURE__*/React.createElement(StyledAddon, _extends({
    ref: ref
  }, rest, {
    __css: _extends({}, styles.addon, placementStyles)
  }));
});

if (__DEV__) {
  InputAddon.displayName = "InputAddon";
}
/**
 * InputLeftAddon
 *
 * Element to append to the left of an input
 */


export var InputLeftAddon = /*#__PURE__*/forwardRef((props, ref) => /*#__PURE__*/React.createElement(InputAddon, _extends({
  ref: ref,
  placement: "left"
}, props, {
  className: cx("chakra-input__left-addon", props.className)
})));

if (__DEV__) {
  InputLeftAddon.displayName = "InputLeftAddon";
} // This is used in `input-group.tsx`


InputLeftAddon.id = "InputLeftAddon";
/**
 * InputRightAddon
 *
 * Element to append to the right of an input
 */

export var InputRightAddon = /*#__PURE__*/forwardRef((props, ref) => /*#__PURE__*/React.createElement(InputAddon, _extends({
  ref: ref,
  placement: "right"
}, props, {
  className: cx("chakra-input__right-addon", props.className)
})));

if (__DEV__) {
  InputRightAddon.displayName = "InputRightAddon";
} // This is used in `input-group.tsx`


InputRightAddon.id = "InputRightAddon";
//# sourceMappingURL=input-addon.js.map