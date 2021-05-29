"use strict";

exports.__esModule = true;
exports.Switch = void 0;

var _checkbox = require("@chakra-ui/checkbox");

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Switch = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var styles = (0, _system.useMultiStyleConfig)("Switch", props);

  var _omitThemingProps = (0, _system.omitThemingProps)(props),
      _omitThemingProps$spa = _omitThemingProps.spacing,
      spacing = _omitThemingProps$spa === void 0 ? "0.5rem" : _omitThemingProps$spa,
      children = _omitThemingProps.children,
      ownProps = _objectWithoutPropertiesLoose(_omitThemingProps, ["spacing", "children"]);

  var _useCheckbox = (0, _checkbox.useCheckbox)(ownProps),
      state = _useCheckbox.state,
      getInputProps = _useCheckbox.getInputProps,
      getCheckboxProps = _useCheckbox.getCheckboxProps,
      getRootProps = _useCheckbox.getRootProps,
      getLabelProps = _useCheckbox.getLabelProps;

  var containerStyles = React.useMemo(function () {
    return _extends({
      display: "inline-block",
      verticalAlign: "middle",
      lineHeight: "normal"
    }, styles.container);
  }, [styles.container]);
  var trackStyles = React.useMemo(function () {
    return _extends({
      display: "inline-flex",
      flexShrink: 0,
      justifyContent: "flex-start",
      boxSizing: "content-box",
      cursor: "pointer"
    }, styles.track);
  }, [styles.track]);
  var labelStyles = React.useMemo(function () {
    return _extends({
      userSelect: "none",
      marginStart: spacing
    }, styles.label);
  }, [spacing, styles.label]);
  return /*#__PURE__*/React.createElement(_system.chakra.label, _extends({}, getRootProps(), {
    className: (0, _utils.cx)("chakra-switch", props.className),
    __css: containerStyles
  }), /*#__PURE__*/React.createElement("input", _extends({
    className: "chakra-switch__input"
  }, getInputProps({}, ref))), /*#__PURE__*/React.createElement(_system.chakra.span, _extends({}, getCheckboxProps(), {
    className: "chakra-switch__track",
    __css: trackStyles
  }), /*#__PURE__*/React.createElement(_system.chakra.span, {
    __css: styles.thumb,
    className: "chakra-switch__thumb",
    "data-checked": (0, _utils.dataAttr)(state.isChecked),
    "data-hover": (0, _utils.dataAttr)(state.isHovered)
  })), children && /*#__PURE__*/React.createElement(_system.chakra.span, _extends({
    className: "chakra-switch__label"
  }, getLabelProps(), {
    __css: labelStyles
  }), children));
});
exports.Switch = Switch;

if (_utils.__DEV__) {
  Switch.displayName = "Switch";
}
//# sourceMappingURL=switch.js.map