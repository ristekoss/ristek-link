"use strict";

exports.__esModule = true;
exports.usePointerEvent = usePointerEvent;

var _utils = require("@chakra-ui/utils");

var _useEventListener = require("./use-event-listener");

/**
 * Credit goes to `framer-motion` of this useful utilities.
 * License can be found here: https://github.com/framer/motion
 */

/**
 * @internal
 */
function usePointerEvent(env, eventName, handler, options) {
  return (0, _useEventListener.useEventListener)((0, _utils.getPointerEventName)(eventName), (0, _utils.wrapPointerEventHandler)(handler, eventName === "pointerdown"), env, options);
}
//# sourceMappingURL=use-pointer-event.js.map