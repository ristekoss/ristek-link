import * as React from "react";
import { useUnmountEffect } from "./use-unmount-effect";
export function useForceUpdate() {
  var unloadingRef = React.useRef(false);
  var [count, setCount] = React.useState(0);
  useUnmountEffect(() => {
    unloadingRef.current = true;
  });
  return React.useCallback(() => {
    if (!unloadingRef.current) {
      setCount(count + 1);
    }
  }, [count]);
}
//# sourceMappingURL=use-force-update.js.map