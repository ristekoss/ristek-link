import { runIfFn } from "@chakra-ui/utils";
import * as React from "react";
import { useCallbackRef } from "./use-callback-ref";
export function useControllableProp(prop, state) {
  var isControlled = prop !== undefined;
  var value = isControlled && typeof prop !== "undefined" ? prop : state;
  return [isControlled, value];
}

/**
 * React hook for using controlling component state.
 * @param props
 */
export function useControllableState(props) {
  var {
    value: valueProp,
    defaultValue,
    onChange,
    shouldUpdate = (prev, next) => prev !== next
  } = props;
  var onChangeProp = useCallbackRef(onChange);
  var shouldUpdateProp = useCallbackRef(shouldUpdate);
  var [valueState, setValue] = React.useState(defaultValue);
  var isControlled = valueProp !== undefined;
  var value = isControlled ? valueProp : valueState;
  var updateValue = React.useCallback(next => {
    var nextValue = runIfFn(next, value);

    if (!shouldUpdateProp(value, nextValue)) {
      return;
    }

    if (!isControlled) {
      setValue(nextValue);
    }

    onChangeProp(nextValue);
  }, [isControlled, onChangeProp, value, shouldUpdateProp]);
  return [value, updateValue];
}
//# sourceMappingURL=use-controllable.js.map