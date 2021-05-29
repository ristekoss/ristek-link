import { useCallback, useState } from "react";

/**
 * React hook to manage boolean (on - off) states
 *
 * @param initialState the initial boolean state value
 */
export function useBoolean(initialState) {
  if (initialState === void 0) {
    initialState = false;
  }

  var [value, setValue] = useState(initialState);
  var on = useCallback(() => {
    setValue(true);
  }, []);
  var off = useCallback(() => {
    setValue(false);
  }, []);
  var toggle = useCallback(() => {
    setValue(prev => !prev);
  }, []);
  return [value, {
    on,
    off,
    toggle
  }];
}
//# sourceMappingURL=use-boolean.js.map