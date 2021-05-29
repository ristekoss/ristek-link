import * as React from "react";
import { useCallbackRef } from "./use-callback-ref";
/**
 * React hook that provides a declarative `setTimeout`
 *
 * @param callback the callback to run after specified delay
 * @param delay the delay (in ms)
 */

export function useTimeout(callback, delay) {
  var fn = useCallbackRef(callback);
  React.useEffect(() => {
    if (delay == null) return undefined;
    var timeoutId = null;
    timeoutId = window.setTimeout(() => {
      fn();
    }, delay);
    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [delay, fn]);
}
//# sourceMappingURL=use-timeout.js.map