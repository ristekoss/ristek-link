"use strict";

exports.__esModule = true;
exports.Progress = exports.ProgressLabel = void 0;

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

var _progress = require("./progress.utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * ProgressLabel is used to show the numeric value of the progress.
 * @see Docs https://chakra-ui.com/docs/feedback/progress
 */
var ProgressLabel = function ProgressLabel(props) {
  var styles = (0, _system.useStyles)();

  var labelStyles = _extends({
    top: "50%",
    left: "50%",
    width: "100%",
    textAlign: "center",
    position: "absolute",
    transform: "translate(-50%, -50%)"
  }, styles.label);

  return /*#__PURE__*/React.createElement(_system.chakra.div, _extends({}, props, {
    __css: labelStyles
  }));
};

exports.ProgressLabel = ProgressLabel;

if (_utils.__DEV__) {
  ProgressLabel.displayName = "ProgressLabel";
}

/**
 * ProgressFilledTrack (Linear)
 *
 * The progress component that visually indicates the current level of the progress bar.
 * It applies `background-color` and changes its width.
 *
 * @see Docs https://chakra-ui.com/docs/components/progress
 */
var ProgressFilledTrack = function ProgressFilledTrack(props) {
  var min = props.min,
      max = props.max,
      value = props.value,
      isIndeterminate = props.isIndeterminate,
      rest = _objectWithoutPropertiesLoose(props, ["min", "max", "value", "isIndeterminate"]);

  var progress = (0, _progress.getProgressProps)({
    value: value,
    min: min,
    max: max,
    isIndeterminate: isIndeterminate
  });
  var styles = (0, _system.useStyles)();

  var trackStyles = _extends({
    height: "100%"
  }, styles.filledTrack);

  return /*#__PURE__*/React.createElement(_system.chakra.div, _extends({
    style: _extends({
      width: progress.percent + "%"
    }, rest.style)
  }, progress.bind, rest, {
    __css: trackStyles
  }));
};

/**
 * Progress (Linear)
 *
 * Progress is used to display the progress status for a task that takes a long
 * time or consists of several steps.
 *
 * It includes accessible attributes to help assistive technologies understand
 * and speak the progress values.
 *
 * @see Docs https://chakra-ui.com/docs/components/progress
 */
var Progress = function Progress(props) {
  var _styles$track;

  var _omitThemingProps = (0, _system.omitThemingProps)(props),
      value = _omitThemingProps.value,
      _omitThemingProps$min = _omitThemingProps.min,
      min = _omitThemingProps$min === void 0 ? 0 : _omitThemingProps$min,
      _omitThemingProps$max = _omitThemingProps.max,
      max = _omitThemingProps$max === void 0 ? 100 : _omitThemingProps$max,
      hasStripe = _omitThemingProps.hasStripe,
      isAnimated = _omitThemingProps.isAnimated,
      children = _omitThemingProps.children,
      propBorderRadius = _omitThemingProps.borderRadius,
      isIndeterminate = _omitThemingProps.isIndeterminate,
      ariaLabel = _omitThemingProps["aria-label"],
      ariaLabelledBy = _omitThemingProps["aria-labelledby"],
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["value", "min", "max", "hasStripe", "isAnimated", "children", "borderRadius", "isIndeterminate", "aria-label", "aria-labelledby"]);

  var styles = (0, _system.useMultiStyleConfig)("Progress", props);
  var borderRadius = propBorderRadius != null ? propBorderRadius : (_styles$track = styles.track) == null ? void 0 : _styles$track.borderRadius;
  var stripAnimation = {
    animation: _progress.stripe + " 1s linear infinite"
  };
  /**
   * We should not use stripe if it is `indeterminate`
   */

  var shouldAddStripe = !isIndeterminate && hasStripe;
  var shouldAnimateStripe = shouldAddStripe && isAnimated;
  /**
   * Generate styles for stripe and stripe animation
   */

  var css = _extends({}, shouldAnimateStripe && stripAnimation, isIndeterminate && {
    position: "absolute",
    willChange: "left",
    minWidth: "50%",
    animation: _progress.progress + " 1s ease infinite normal none running"
  });

  var trackStyles = _extends({
    overflow: "hidden",
    position: "relative"
  }, styles.track);

  return /*#__PURE__*/React.createElement(_system.chakra.div, _extends({
    borderRadius: borderRadius,
    __css: trackStyles
  }, rest), /*#__PURE__*/React.createElement(_system.StylesProvider, {
    value: styles
  }, /*#__PURE__*/React.createElement(ProgressFilledTrack, {
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    min: min,
    max: max,
    value: value,
    isIndeterminate: isIndeterminate,
    css: css,
    borderRadius: borderRadius
  }), children));
};

exports.Progress = Progress;

if (_utils.__DEV__) {
  Progress.displayName = "Progress";
}
//# sourceMappingURL=progress.js.map