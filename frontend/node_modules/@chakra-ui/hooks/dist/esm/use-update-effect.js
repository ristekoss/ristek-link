import * as React from "react";
/**
 * React effect hook that invokes only on update.
 * It doesn't invoke on mount
 */

export var useUpdateEffect = (effect, deps) => {
  var mounted = React.useRef(false);
  React.useEffect(() => {
    if (mounted.current) {
      return effect();
    }

    mounted.current = true;
    return undefined; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return mounted.current;
};
//# sourceMappingURL=use-update-effect.js.map