function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { chakra, forwardRef, omitThemingProps, useMultiStyleConfig } from "@chakra-ui/system";
import { cx, filterUndefined, __DEV__ } from "@chakra-ui/utils";
import { getValidChildren } from "@chakra-ui/react-utils";
import * as React from "react";
import { baseStyle } from "./avatar";

/**
 * AvatarGroup displays a number of avatars grouped together in a stack.
 */
export var AvatarGroup = /*#__PURE__*/forwardRef((props, ref) => {
  var styles = useMultiStyleConfig("Avatar", props);

  var _omitThemingProps = omitThemingProps(props),
      {
    children,
    borderColor,
    max,
    spacing = "-0.75rem",
    borderRadius = "full"
  } = _omitThemingProps,
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["children", "borderColor", "max", "spacing", "borderRadius"]);

  var validChildren = getValidChildren(children);
  /**
   * get the avatars within the max
   */

  var childrenWithinMax = max ? validChildren.slice(0, max) : validChildren;
  /**
   * get the remaining avatar count
   */

  var excess = max != null && validChildren.length - max;
  /**
   * Reversing the children is a great way to avoid using zIndex
   * to overlap the avatars
   */

  var reversedChildren = childrenWithinMax.reverse();
  var clones = reversedChildren.map((child, index) => {
    var _child$props$borderCo;

    var isFirstAvatar = index === 0;
    var childProps = {
      marginEnd: isFirstAvatar ? 0 : spacing,
      size: props.size,
      borderColor: (_child$props$borderCo = child.props.borderColor) != null ? _child$props$borderCo : borderColor,
      showBorder: true
    };
    return /*#__PURE__*/React.cloneElement(child, filterUndefined(childProps));
  });
  var groupStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row-reverse"
  };

  var excessStyles = _extends({
    borderRadius,
    marginStart: spacing
  }, baseStyle, styles.excessLabel);

  return /*#__PURE__*/React.createElement(chakra.div, _extends({
    ref: ref,
    role: "group",
    __css: groupStyles
  }, rest, {
    className: cx("chakra-avatar__group", props.className)
  }), excess > 0 && /*#__PURE__*/React.createElement(chakra.span, {
    className: "chakra-avatar__excess",
    __css: excessStyles
  }, "+" + excess), clones);
});

if (__DEV__) {
  AvatarGroup.displayName = "AvatarGroup";
}
//# sourceMappingURL=avatar-group.js.map