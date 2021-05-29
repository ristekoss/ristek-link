import * as React from "react";
export function useEventListeners() {
  var listeners = React.useRef(new Map());
  var currentListeners = listeners.current;
  var add = React.useCallback((el, type, listener, options) => {
    listeners.current.set(listener, {
      type,
      el,
      options
    });
    el.addEventListener(type, listener, options);
  }, []);
  var remove = React.useCallback((el, type, listener, options) => {
    el.removeEventListener(type, listener, options);
    listeners.current.delete(listener);
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
//# sourceMappingURL=use-event-listeners.js.map