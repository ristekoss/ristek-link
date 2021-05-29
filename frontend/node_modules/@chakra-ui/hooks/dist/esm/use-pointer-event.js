/**
 * Credit goes to `framer-motion` of this useful utilities.
 * License can be found here: https://github.com/framer/motion
 */
import { getPointerEventName, wrapPointerEventHandler } from "@chakra-ui/utils";
import { useEventListener } from "./use-event-listener";
/**
 * @internal
 */

export function usePointerEvent(env, eventName, handler, options) {
  return useEventListener(getPointerEventName(eventName), wrapPointerEventHandler(handler, eventName === "pointerdown"), env, options);
}
//# sourceMappingURL=use-pointer-event.js.map