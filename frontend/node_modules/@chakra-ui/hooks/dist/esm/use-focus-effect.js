import { hasFocusWithin, focus } from "@chakra-ui/utils";
import { useUpdateEffect } from "./use-update-effect";

/**
 * React hook to focus an element conditionally
 *
 * @param ref the ref of the element to focus
 * @param options focus management options
 */
export function useFocusEffect(ref, options) {
  var {
    shouldFocus,
    preventScroll
  } = options;
  useUpdateEffect(() => {
    var node = ref.current;
    if (!node || !shouldFocus) return;

    if (!hasFocusWithin(node)) {
      focus(node, {
        preventScroll,
        nextTick: true
      });
    }
  }, [shouldFocus, ref, preventScroll]);
}
//# sourceMappingURL=use-focus-effect.js.map