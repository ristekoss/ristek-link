import * as React from "react";
import { useSafeLayoutEffect } from "./use-safe-layout-effect";
/**
 * React hook to persist any value between renders,
 * but keeps it up-to-date if it changes.
 *
 * @param value the value or function to persist
 */

export function useCallbackRef(fn, deps) {
  if (deps === void 0) {
    deps = [];
  }

  var ref = React.useRef(fn);
  useSafeLayoutEffect(() => {
    ref.current = fn;
  }); // eslint-disable-next-line react-hooks/exhaustive-deps

  return React.useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return ref.current == null ? void 0 : ref.current(...args);
  }, deps);
}
//# sourceMappingURL=use-callback-ref.js.map