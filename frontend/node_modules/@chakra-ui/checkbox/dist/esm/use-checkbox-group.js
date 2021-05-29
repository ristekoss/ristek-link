function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { useCallbackRef, useControllableState } from "@chakra-ui/hooks";
import { addItem, removeItem, isInputEvent } from "@chakra-ui/utils";
import { useCallback } from "react";

/**
 * React hook that provides all the state management logic
 * for a group of checkboxes.
 *
 * It is consumed by the `CheckboxGroup` component
 */
export function useCheckboxGroup(props) {
  if (props === void 0) {
    props = {};
  }

  var {
    defaultValue,
    value: valueProp,
    onChange,
    isDisabled,
    isNative
  } = props;
  var onChangeProp = useCallbackRef(onChange);
  var [value, setValue] = useControllableState({
    value: valueProp,
    defaultValue: defaultValue || [],
    onChange: onChangeProp
  });
  var handleChange = useCallback(eventOrValue => {
    if (!value) return;
    var isChecked = isInputEvent(eventOrValue) ? eventOrValue.target.checked : !value.includes(eventOrValue);
    var selectedValue = isInputEvent(eventOrValue) ? eventOrValue.target.value : eventOrValue;
    var nextValue = isChecked ? addItem(value, selectedValue) : removeItem(value, selectedValue);
    setValue(nextValue);
  }, [setValue, value]);
  var getCheckboxProps = useCallback(function (props) {
    if (props === void 0) {
      props = {};
    }

    var checkedKey = isNative ? "checked" : "isChecked";
    return _extends({}, props, {
      [checkedKey]: value.includes(props.value),
      onChange: handleChange
    });
  }, [handleChange, isNative, value]);
  return {
    value,
    isDisabled,
    onChange: handleChange,
    setValue,
    getCheckboxProps
  };
}
//# sourceMappingURL=use-checkbox-group.js.map