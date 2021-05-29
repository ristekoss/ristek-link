import { keyframes } from "@chakra-ui/system";
import { isFunction, valueToPercent } from "@chakra-ui/utils";
export var spin = keyframes({
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
export var rotate = keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
export var progress = keyframes({
  "0%": {
    left: "-40%"
  },
  "100%": {
    left: "100%"
  }
});
export var stripe = keyframes({
  from: {
    backgroundPosition: "1rem 0"
  },
  to: {
    backgroundPosition: "0 0"
  }
});

/**
 * Get the common `aria-*` attributes for both the linear and circular
 * progress components.
 */
export function getProgressProps(options) {
  var {
    value = 0,
    min,
    max,
    valueText,
    getValueText,
    isIndeterminate
  } = options;
  var percent = valueToPercent(value, min, max);

  var getAriaValueText = () => {
    if (value == null) return undefined;
    return isFunction(getValueText) ? getValueText(value, percent) : valueText;
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
    percent,
    value
  };
}
//# sourceMappingURL=progress.utils.js.map