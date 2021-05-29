import { contains, detectBrowser, focus, getOwnerDocument, isActiveElement, isRefObject } from "@chakra-ui/utils";
import { usePointerEvent } from "./use-pointer-event";

/**
 * Polyfill to get `relatedTarget` working correctly consistently
 * across all browsers.
 *
 * It ensures that elements receives focus on pointer down if
 * it's not the active active element.
 *
 * @internal
 */
export function useFocusOnPointerDown(props) {
  var {
    ref,
    elements,
    enabled
  } = props;
  var isSafari = detectBrowser("Safari");

  var doc = () => getOwnerDocument(ref.current);

  usePointerEvent(doc, "pointerdown", event => {
    if (!isSafari || !enabled) return;
    var target = event.target;
    var els = elements != null ? elements : [ref];
    var isValidTarget = els.some(elementOrRef => {
      var el = isRefObject(elementOrRef) ? elementOrRef.current : elementOrRef;
      return contains(el, target);
    });

    if (!isActiveElement(target) && isValidTarget) {
      event.preventDefault();
      focus(target);
    }
  });
}
//# sourceMappingURL=use-focus-on-pointerdown.js.map