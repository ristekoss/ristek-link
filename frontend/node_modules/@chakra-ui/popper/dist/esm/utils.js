function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var toVar = (value, fallback) => ({
  var: value,
  varRef: fallback ? "var(" + value + ", " + fallback + ")" : "var(" + value + ")"
});

export var cssVars = {
  arrowShadowColor: toVar("--popper-arrow-shadow-color"),
  arrowSize: toVar("--popper-arrow-size", "8px"),
  arrowSizeHalf: toVar("--popper-arrow-size-half"),
  arrowBg: toVar("--popper-arrow-bg"),
  transformOrigin: toVar("--popper-transform-origin"),
  arrowOffset: toVar("--popper-arrow-offset")
};
export function getBoxShadow(placement) {
  if (placement.includes("top")) return "1px 1px 1px 0 var(--popper-arrow-shadow-color)";
  if (placement.includes("bottom")) return "-1px -1px 1px 0 var(--popper-arrow-shadow-color)";
  if (placement.includes("right")) return "-1px 1px 1px 0 var(--popper-arrow-shadow-color)";
  if (placement.includes("left")) return "1px -1px 1px 0 var(--popper-arrow-shadow-color)";
}
var transforms = {
  top: "bottom center",
  "top-start": "bottom left",
  "top-end": "bottom right",
  bottom: "top center",
  "bottom-start": "top left",
  "bottom-end": "top right",
  left: "right center",
  "left-start": "right top",
  "left-end": "right bottom",
  right: "left center",
  "right-start": "left top",
  "right-end": "left bottom"
};
export var toTransformOrigin = placement => transforms[placement];
var defaultEventListeners = {
  scroll: true,
  resize: true
};
export function getEventListenerOptions(value) {
  var eventListeners;

  if (typeof value === "object") {
    eventListeners = {
      enabled: true,
      options: _extends({}, defaultEventListeners, value)
    };
  } else {
    eventListeners = {
      enabled: value,
      options: defaultEventListeners
    };
  }

  return eventListeners;
}
//# sourceMappingURL=utils.js.map