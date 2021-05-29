import { contains, focus, getActiveElement, isTabbable } from "@chakra-ui/utils";
import { useUpdateEffect } from "./use-update-effect";

function preventReturnFocus(containerRef) {
  var el = containerRef.current;
  if (!el) return false;
  var activeElement = getActiveElement(el);
  if (!activeElement) return false;
  if (contains(el, activeElement)) return false;
  if (isTabbable(activeElement)) return true;
  return false;
}
/**
 * Popover hook to manage the focus when the popover closes or hides.
 *
 * We either want to return focus back to the popover trigger or
 * let focus proceed normally if user moved to another interactive
 * element in the viewport.
 */


export function useFocusOnHide(containerRef, options) {
  var {
    shouldFocus: shouldFocusProp,
    visible,
    focusRef
  } = options;
  var shouldFocus = shouldFocusProp && !visible;
  useUpdateEffect(() => {
    if (!shouldFocus) return;

    if (preventReturnFocus(containerRef)) {
      return;
    }

    var el = (focusRef == null ? void 0 : focusRef.current) || containerRef.current;

    if (el) {
      focus(el, {
        nextTick: true
      });
    }
  }, [shouldFocus, containerRef, focusRef]);
}
//# sourceMappingURL=use-focus-on-hide.js.map