import React from "react";
import { useEventListener } from "./use-event-listener";
/**
 * @deprecated `useMouseDownRef` will be removed in a future version.
 */

export function useMouseDownRef(shouldListen) {
  if (shouldListen === void 0) {
    shouldListen = true;
  }

  var mouseDownRef = React.useRef();
  useEventListener("mousedown", event => {
    if (shouldListen) {
      mouseDownRef.current = event.target;
    }
  });
  return mouseDownRef;
}
//# sourceMappingURL=use-mouse-down-ref.js.map