import * as React from "react";

/**
 * Creates a named context, provider, and hook.
 *
 * @param options create context options
 */
export function createContext(options) {
  if (options === void 0) {
    options = {};
  }

  var {
    strict = true,
    errorMessage = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name
  } = options;
  var Context = /*#__PURE__*/React.createContext(undefined);
  Context.displayName = name;

  function useContext() {
    var context = React.useContext(Context);

    if (!context && strict) {
      var error = new Error(errorMessage);
      error.name = "ContextError";
      Error.captureStackTrace == null ? void 0 : Error.captureStackTrace(error, useContext);
      throw error;
    }

    return context;
  }

  return [Context.Provider, useContext, Context];
}
//# sourceMappingURL=context.js.map