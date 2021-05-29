import * as React from "react";
import { LiveRegion } from "./live-region";
export function useLiveRegion(options) {
  var [liveRegion] = React.useState(() => new LiveRegion(options));
  React.useEffect(() => () => {
    liveRegion.destroy();
  }, [liveRegion]);
  return liveRegion;
}
export default useLiveRegion;
//# sourceMappingURL=use-live-region.js.map