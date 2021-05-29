function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { createDescendantContext } from "@chakra-ui/descendant";
import { useControllableState, useId } from "@chakra-ui/hooks";
import { ariaAttr, callAllHandlers, focus } from "@chakra-ui/utils";
import { createContext, mergeRefs } from "@chakra-ui/react-utils";
import * as React from "react";
/* -------------------------------------------------------------------------------------------------
 * Create context to track descendants and their indices
 * -----------------------------------------------------------------------------------------------*/

export var [PinInputDescendantsProvider, usePinInputDescendantsContext, usePinInputDescendants, usePinInputDescendant] = createDescendantContext();
/* -------------------------------------------------------------------------------------------------
 * Create context that stores pin-input logic
 * -----------------------------------------------------------------------------------------------*/

export var [PinInputProvider, usePinInputContext] = createContext({
  name: "PinInputContext",
  errorMessage: "usePinInputContext: `context` is undefined. Seems you forgot to all pin input fields within `<PinInput />`"
});
/* -------------------------------------------------------------------------------------------------
 * usePinInput hook
 * -----------------------------------------------------------------------------------------------*/

var toArray = value => value == null ? void 0 : value.split("");

function validate(value, type) {
  var NUMERIC_REGEX = /^[0-9]+$/;
  var ALPHA_NUMERIC_REGEX = /^[a-zA-Z0-9]+$/i;
  var regex = type === "alphanumeric" ? ALPHA_NUMERIC_REGEX : NUMERIC_REGEX;
  return regex.test(value);
}
/* -------------------------------------------------------------------------------------------------
 * usePinInput - handles the general pin input logic
 * -----------------------------------------------------------------------------------------------*/

/**
 * @internal
 */


export function usePinInput(props) {
  if (props === void 0) {
    props = {};
  }

  var {
    autoFocus,
    value,
    defaultValue,
    onChange: _onChange,
    onComplete,
    placeholder = "○",
    manageFocus = true,
    otp = false,
    id: idProp,
    isDisabled,
    isInvalid,
    type = "number",
    mask
  } = props;
  var uuid = useId();
  var id = idProp != null ? idProp : "pin-input-" + uuid;
  var descendants = usePinInputDescendants();
  var [moveFocus, setMoveFocus] = React.useState(true);
  var [focusedIndex, setFocusedIndex] = React.useState(-1);
  var [values, setValues] = useControllableState({
    defaultValue: toArray(defaultValue) || [],
    value: toArray(value),
    onChange: values => _onChange == null ? void 0 : _onChange(values.join(""))
  });
  React.useEffect(() => {
    if (autoFocus) {
      var first = descendants.first();
      if (first) focus(first.node, {
        nextTick: true
      });
    } // We don't want to listen for updates to `autoFocus` since it only runs initially
    // eslint-disable-next-line

  }, [descendants]);
  var focusNext = React.useCallback(index => {
    if (!moveFocus || !manageFocus) return;
    var next = descendants.next(index, false);
    if (next) focus(next.node, {
      nextTick: true
    });
  }, [descendants, moveFocus, manageFocus]);
  var setValue = React.useCallback((value, index) => {
    var nextValues = [...values];
    nextValues[index] = value;
    setValues(nextValues);
    var isComplete = value !== "" && nextValues.length === descendants.count() && nextValues.every(inputValue => inputValue != null && inputValue !== "");

    if (isComplete) {
      onComplete == null ? void 0 : onComplete(nextValues.join(""));
    } else {
      focusNext(index);
    }
  }, [values, setValues, focusNext, onComplete, descendants]);
  var clear = React.useCallback(() => {
    var values = Array(descendants.count()).fill("");
    setValues(values);
    var first = descendants.first();
    if (first) focus(first.node);
  }, [descendants, setValues]);
  var getNextValue = React.useCallback((value, eventValue) => {
    var nextValue = eventValue;

    if ((value == null ? void 0 : value.length) > 0) {
      if (value[0] === eventValue.charAt(0)) {
        nextValue = eventValue.charAt(1);
      } else if (value[0] === eventValue.charAt(1)) {
        nextValue = eventValue.charAt(0);
      }
    }

    return nextValue;
  }, []);
  var getInputProps = React.useCallback(props => {
    var {
      index
    } = props,
        rest = _objectWithoutPropertiesLoose(props, ["index"]);
    /**
     * Improved from: https://github.com/uber/baseweb/blob/master/src/pin-code/pin-code.js
     */


    var onChange = event => {
      var eventValue = event.target.value;
      var currentValue = values[index];
      var nextValue = getNextValue(currentValue, eventValue); // if the value was removed using backspace

      if (nextValue === "") {
        setValue("", index);
        return;
      } // in the case of an autocomplete or copy and paste


      if (eventValue.length > 2) {
        // see if we can use the string to fill out our values
        if (validate(eventValue, type)) {
          // Ensure the value matches the number of inputs
          var _nextValue = eventValue.split("").filter((_, index) => index < descendants.count());

          setValues(_nextValue); // if pasting fills the entire input fields, trigger `onComplete`

          if (_nextValue.length === descendants.count()) {
            onComplete == null ? void 0 : onComplete(_nextValue.join(""));
          }
        }
      } else {
        // only set if the new value is a number
        if (validate(nextValue, type)) {
          setValue(nextValue, index);
        }

        setMoveFocus(true);
      }
    };

    var onKeyDown = event => {
      if (event.key === "Backspace" && manageFocus) {
        if (event.target.value === "") {
          var prevInput = descendants.prev(index, false);

          if (prevInput) {
            setValue("", index - 1);
            focus(prevInput.node);
            setMoveFocus(true);
          }
        } else {
          setMoveFocus(false);
        }
      }
    };

    var onFocus = () => {
      setFocusedIndex(index);
    };

    var onBlur = () => {
      setFocusedIndex(-1);
    };

    var hasFocus = focusedIndex === index;
    var inputType = type === "number" ? "tel" : "text";
    return _extends({
      "aria-label": "Please enter your pin code",
      inputMode: type === "number" ? "numeric" : "text",
      type: mask ? "password" : inputType
    }, rest, {
      id: id + "-" + index,
      disabled: isDisabled,
      "aria-invalid": ariaAttr(isInvalid),
      onChange: callAllHandlers(rest.onChange, onChange),
      onKeyDown: callAllHandlers(rest.onKeyDown, onKeyDown),
      onFocus: callAllHandlers(rest.onFocus, onFocus),
      onBlur: callAllHandlers(rest.onBlur, onBlur),
      value: values[index] || "",
      autoComplete: otp ? "one-time-code" : "off",
      placeholder: hasFocus ? "" : placeholder
    });
  }, [descendants, focusedIndex, getNextValue, id, isDisabled, mask, isInvalid, manageFocus, onComplete, otp, placeholder, setValue, setValues, type, values]);
  return {
    // prop getter
    getInputProps,
    // state
    id,
    descendants,
    values,
    // actions
    setValue,
    setValues,
    clear
  };
}

/**
 * @internal
 */
export function usePinInputField(props, ref) {
  if (props === void 0) {
    props = {};
  }

  if (ref === void 0) {
    ref = null;
  }

  var {
    getInputProps
  } = usePinInputContext();
  var {
    index,
    register
  } = usePinInputDescendant();
  return getInputProps(_extends({}, props, {
    ref: mergeRefs(register, ref),
    index
  }));
}
//# sourceMappingURL=use-pin-input.js.map