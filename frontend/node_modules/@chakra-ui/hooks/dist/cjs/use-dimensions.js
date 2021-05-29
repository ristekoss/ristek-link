"use strict";

exports.__esModule = true;
exports.useDimensions = useDimensions;

var React = _interopRequireWildcard(require("react"));

var _utils = require("@chakra-ui/utils");

var _useSafeLayoutEffect = require("./use-safe-layout-effect");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Reack hook to measure a component's dimensions
 *
 * @param ref ref of the component to measure
 * @param observe if `true`, resize and scroll observers will be turned on
 */
function useDimensions(ref, observe) {
  var _React$useState = React.useState(null),
      dimensions = _React$useState[0],
      setDimensions = _React$useState[1];

  var rafId = React.useRef();
  (0, _useSafeLayoutEffect.useSafeLayoutEffect)(function () {
    if (!ref.current) return undefined;
    var node = ref.current;

    function measure() {
      rafId.current = requestAnimationFrame(function () {
        var boxModel = (0, _utils.getBox)(node);
        setDimensions(boxModel);
      });
    }

    measure();

    if (observe) {
      window.addEventListener("resize", measure);
      window.addEventListener("scroll", measure);
    }

    return function () {
      if (observe) {
        window.removeEventListener("resize", measure);
        window.removeEventListener("scroll", measure);
      }

      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [observe]);
  return dimensions;
}
//# sourceMappingURL=use-dimensions.js.map