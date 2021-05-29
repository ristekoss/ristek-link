import { runIfFn } from "@chakra-ui/utils";
import * as React from "react";
import { useCallbackRef } from "./use-callback-ref";

/**
 * React hook to manage browser event listeners
 *
 * @param event the event name
 * @param handler the event handler function to execute
 * @param doc the dom environment to execute against (defaults to `document`)
 * @param options the event listener options
 *
 * @internal
 */
export function useEventListener(event, handler, env, options) {
  var listener = useCallbackRef(handler);
  React.useEffect(() => {
    var _runIfFn;

    var node = (_runIfFn = runIfFn(env)) != null ? _runIfFn : document;
    node.addEventListener(event, listener, options);
    return () => {
      node.removeEventListener(event, listener, options);
    };
  }, [event, env, options, listener]);
  return () => {
    var _runIfFn2;

    var node = (_runIfFn2 = runIfFn(env)) != null ? _runIfFn2 : document;
    node.removeEventListener(event, listener, options);
  };
}
//# sourceMappingURL=use-event-listener.js.map