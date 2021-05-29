import * as React from "react";
import { getBox } from "@chakra-ui/utils";
import { useSafeLayoutEffect } from "./use-safe-layout-effect";
/**
 * Reack hook to measure a component's dimensions
 *
 * @param ref ref of the component to measure
 * @param observe if `true`, resize and scroll observers will be turned on
 */

export function useDimensions(ref, observe) {
  var [dimensions, setDimensions] = React.useState(null);
  var rafId = React.useRef();
  useSafeLayoutEffect(() => {
    if (!ref.current) return undefined;
    var node = ref.current;

    function measure() {
      rafId.current = requestAnimationFrame(() => {
        var boxModel = getBox(node);
        setDimensions(boxModel);
      });
    }

    measure();

    if (observe) {
      window.addEventListener("resize", measure);
      window.addEventListener("scroll", measure);
    }

    return () => {
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