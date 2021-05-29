import { contains, focus, getAllFocusable, isRefObject } from "@chakra-ui/utils";
import { useCallback } from "react";
import { useEventListener } from "./use-event-listener";
import { useUpdateEffect } from "./use-update-effect";
var defaultOptions = {
  preventScroll: true,
  shouldFocus: false
};
export function useFocusOnShow(target, options) {
  if (options === void 0) {
    options = defaultOptions;
  }

  var {
    focusRef,
    preventScroll,
    shouldFocus,
    visible
  } = options;
  var element = isRefObject(target) ? target.current : target;
  var autoFocus = shouldFocus && visible;
  var onFocus = useCallback(() => {
    if (!element || !autoFocus) return;
    if (contains(element, document.activeElement)) return;

    if (focusRef != null && focusRef.current) {
      focus(focusRef.current, {
        preventScroll,
        nextTick: true
      });
    } else {
      var tabbableEls = getAllFocusable(element);

      if (tabbableEls.length > 0) {
        focus(tabbableEls[0], {
          preventScroll,
          nextTick: true
        });
      }
    }
  }, [autoFocus, preventScroll, element, focusRef]);
  useUpdateEffect(() => {
    onFocus();
  }, [onFocus]);
  useEventListener("transitionend", onFocus, element);
}
//# sourceMappingURL=use-focus-on-show.js.map