import { useRef, useEffect } from "react";
export function usePrevious(value) {
  var ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
//# sourceMappingURL=use-previous.js.map