import * as React from "react";
import { useSafeLayoutEffect } from "./use-safe-layout-effect";
/**
 * React hook for performant `useCallbacks`
 *
 * @see https://github.com/facebook/react/issues/14099#issuecomment-440013892
 *
 * @deprecated Use `useCallbackRef` instead. `useEventCallback` will be removed
 * in a future version.
 */

export function useEventCallback(callback) {
  var ref = React.useRef(callback);
  useSafeLayoutEffect(() => {
    ref.current = callback;
  });
  return React.useCallback(function (event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return ref.current(event, ...args);
  }, []);
}
//# sourceMappingURL=use-event-callback.js.map