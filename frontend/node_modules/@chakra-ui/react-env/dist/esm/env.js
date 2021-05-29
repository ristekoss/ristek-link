import { isBrowser, __DEV__ } from "@chakra-ui/utils";
import React, { createContext, useContext, useMemo, useState } from "react";
import { ssrDocument } from "./mock-document";
import { ssrWindow } from "./mock-window";
var mockEnv = {
  window: ssrWindow,
  document: ssrDocument
};
var defaultEnv = isBrowser ? {
  window,
  document
} : mockEnv;
var EnvironmentContext = /*#__PURE__*/createContext(defaultEnv);

if (__DEV__) {
  EnvironmentContext.displayName = "EnvironmentContext";
}

export function useEnvironment() {
  return useContext(EnvironmentContext);
}
export function EnvironmentProvider(props) {
  var {
    children,
    environment: environmentProp
  } = props;
  var [node, setNode] = useState(null);
  var context = useMemo(() => {
    var _ref;

    var doc = node == null ? void 0 : node.ownerDocument;
    var win = node == null ? void 0 : node.ownerDocument.defaultView;
    var nodeEnv = doc ? {
      document: doc,
      window: win
    } : undefined;
    var env = (_ref = environmentProp != null ? environmentProp : nodeEnv) != null ? _ref : defaultEnv;
    return env;
  }, [node, environmentProp]);
  var showEnvGetter = !node && !environmentProp;
  return /*#__PURE__*/React.createElement(EnvironmentContext.Provider, {
    value: context
  }, children, showEnvGetter && /*#__PURE__*/React.createElement("span", {
    ref: el => {
      if (el) setNode(el);
    }
  }));
}

if (__DEV__) {
  EnvironmentProvider.displayName = "EnvironmentProvider";
}
//# sourceMappingURL=env.js.map