"use strict";

exports.__esModule = true;
exports.getProgressProps = getProgressProps;
exports.stripe = exports.progress = exports.rotate = exports.spin = void 0;

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var spin = (0, _system.keyframes)({
  "0%": {
    strokeDasharray: "1, 400",
    strokeDashoffset: "0"
  },
  "50%": {
    strokeDasharray: "400, 400",
    strokeDashoffset: "-100"
  },
  "100%": {
    strokeDasharray: "400, 400",
    strokeDashoffset: "-260"
  }
});
exports.spin = spin;
var rotate = (0, _system.keyframes)({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
exports.rotate = rotate;
var progress = (0, _system.keyframes)({
  "0%": {
    left: "-40%"
  },
  "100%": {
    left: "100%"
  }
});
exports.progress = progress;
var stripe = (0, _system.keyframes)({
  from: {
    backgroundPosition: "1rem 0"
  },
  to: {
    backgroundPosition: "0 0"
  }
});
exports.stripe = stripe;

/**
 * Get the common `aria-*` attributes for both the linear and circular
 * progress components.
 */
function getProgressProps(options) {
  var _options$value = options.value,
      value = _options$value === void 0 ? 0 : _options$value,
      min = options.min,
      max = options.max,
      valueText = options.valueText,
      getValueText = options.getValueText,
      isIndeterminate = options.isIndeterminate;
  var percent = (0, _utils.valueToPercent)(value, min, max);

  var getAriaValueText = function getAriaValueText() {
    if (value == null) return undefined;
    return (0, _utils.isFunction)(getValueText) ? getValueText(value, percent) : valueText;
  };

  return {
    bind: {
      "data-indeterminate": isIndeterminate ? "" : undefined,
      "aria-valuemax": max,
      "aria-valuemin": min,
      "aria-valuenow": isIndeterminate ? undefined : value,
      "aria-valuetext": getAriaValueText(),
      role: "progressbar"
    },
    percent: percent,
    value: value
  };
}
//# sourceMappingURL=progress.utils.js.map