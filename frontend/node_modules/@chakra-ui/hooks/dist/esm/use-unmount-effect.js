import * as React from "react";
export function useUnmountEffect(fn, deps) {
  if (deps === void 0) {
    deps = [];
  }

  return React.useEffect(() => () => fn(), // eslint-disable-next-line react-hooks/exhaustive-deps
  deps);
}
//# sourceMappingURL=use-unmount-effect.js.map