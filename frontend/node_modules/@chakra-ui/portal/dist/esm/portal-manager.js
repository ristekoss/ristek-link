import { __DEV__ } from "@chakra-ui/utils";
import { createContext } from "@chakra-ui/react-utils";
import * as React from "react";
var [PortalManagerContextProvider, usePortalManager] = createContext({
  strict: false,
  name: "PortalManagerContext"
});
export { usePortalManager };
export function PortalManager(props) {
  var {
    children,
    zIndex
  } = props;
  return /*#__PURE__*/React.createElement(PortalManagerContextProvider, {
    value: {
      zIndex
    }
  }, children);
}

if (__DEV__) {
  PortalManager.displayName = "PortalManager";
}
//# sourceMappingURL=portal-manager.js.map