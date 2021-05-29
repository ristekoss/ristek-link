import { getPointerEventName, wrapPointerEventHandler } from "@chakra-ui/utils";
import * as React from "react";
export function useEventListenerMap() {
  var listeners = React.useRef(new Map());
  var currentListeners = listeners.current;
  var add = React.useCallback((el, type, listener, options) => {
    var pointerEventListener = wrapPointerEventHandler(listener, type === "pointerdown");
    listeners.current.set(listener, {
      __listener: pointerEventListener,
      type: getPointerEventName(type),
      el,
      options
    });
    el.addEventListener(type, pointerEventListener, options);
  }, []);
  var remove = React.useCallback((el, type, listener, options) => {
    var {
      __listener: pointerEventListener
    } = listeners.current.get(listener);
    el.removeEventListener(type, pointerEventListener, options);
    listeners.current.delete(pointerEventListener);
  }, []);
  React.useEffect(() => () => {
    currentListeners.forEach((value, key) => {
      remove(value.el, value.type, key, value.options);
    });
  }, [remove, currentListeners]);
  return {
    add,
    remove
  };
}
//# sourceMappingURL=use-event-listener-map.js.map