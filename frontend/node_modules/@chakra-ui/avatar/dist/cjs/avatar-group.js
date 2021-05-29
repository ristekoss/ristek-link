"use strict";

exports.__esModule = true;
exports.AvatarGroup = void 0;

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var _reactUtils = require("@chakra-ui/react-utils");

var React = _interopRequireWildcard(require("react"));

var _avatar = require("./avatar");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * AvatarGroup displays a number of avatars grouped together in a stack.
 */
var AvatarGroup = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var styles = (0, _system.useMultiStyleConfig)("Avatar", props);

  var _omitThemingProps = (0, _system.omitThemingProps)(props),
      children = _omitThemingProps.children,
      borderColor = _omitThemingProps.borderColor,
      max = _omitThemingProps.max,
      _omitThemingProps$spa = _omitThemingProps.spacing,
      spacing = _omitThemingProps$spa === void 0 ? "-0.75rem" : _omitThemingProps$spa,
      _omitThemingProps$bor = _omitThemingProps.borderRadius,
      borderRadius = _omitThemingProps$bor === void 0 ? "full" : _omitThemingProps$bor,
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["children", "borderColor", "max", "spacing", "borderRadius"]);

  var validChildren = (0, _reactUtils.getValidChildren)(children);
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
  var clones = reversedChildren.map(function (child, index) {
    var _child$props$borderCo;

    var isFirstAvatar = index === 0;
    var childProps = {
      marginEnd: isFirstAvatar ? 0 : spacing,
      size: props.size,
      borderColor: (_child$props$borderCo = child.props.borderColor) != null ? _child$props$borderCo : borderColor,
      showBorder: true
    };
    return /*#__PURE__*/React.cloneElement(child, (0, _utils.filterUndefined)(childProps));
  });
  var groupStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "row-reverse"
  };

  var excessStyles = _extends({
    borderRadius: borderRadius,
    marginStart: spacing
  }, _avatar.baseStyle, styles.excessLabel);

  return /*#__PURE__*/React.createElement(_system.chakra.div, _extends({
    ref: ref,
    role: "group",
    __css: groupStyles
  }, rest, {
    className: (0, _utils.cx)("chakra-avatar__group", props.className)
  }), excess > 0 && /*#__PURE__*/React.createElement(_system.chakra.span, {
    className: "chakra-avatar__excess",
    __css: excessStyles
  }, "+" + excess), clones);
});
exports.AvatarGroup = AvatarGroup;

if (_utils.__DEV__) {
  AvatarGroup.displayName = "AvatarGroup";
}
//# sourceMappingURL=avatar-group.js.map