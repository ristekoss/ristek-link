import { useCallbackRef, useControllableProp } from "@chakra-ui/hooks";
import { clampValue, countDecimalPlaces, maxSafeInteger, minSafeInteger, toPrecision } from "@chakra-ui/utils";
import { useCallback, useState } from "react";
export function useCounter(props) {
  if (props === void 0) {
    props = {};
  }

  var {
    onChange,
    precision: precisionProp,
    defaultValue,
    value: valueProp,
    step: stepProp = 1,
    min = minSafeInteger,
    max = maxSafeInteger,
    keepWithinRange = true
  } = props;
  var onChangeProp = useCallbackRef(onChange);
  var [valueState, setValue] = useState(() => {
    var _cast;

    if (defaultValue == null) return "";
    return (_cast = cast(defaultValue, stepProp, precisionProp)) != null ? _cast : "";
  });
  /**
   * Because the component that consumes this hook can be controlled or uncontrolled
   * we'll keep track of that
   */

  var [isControlled, value] = useControllableProp(valueProp, valueState);
  var decimalPlaces = getDecimalPlaces(parse(value), stepProp);
  var precision = precisionProp != null ? precisionProp : decimalPlaces;
  var update = useCallback(next => {
    if (next === value) return;

    if (!isControlled) {
      setValue(next.toString());
    }

    onChangeProp == null ? void 0 : onChangeProp(next.toString(), parse(next));
  }, [onChangeProp, isControlled, value]); // Function to clamp the value and round it to the precision

  var clamp = useCallback(value => {
    var nextValue = value;

    if (keepWithinRange) {
      nextValue = clampValue(nextValue, min, max);
    }

    return toPrecision(nextValue, precision);
  }, [precision, keepWithinRange, max, min]);
  var increment = useCallback(function (step) {
    if (step === void 0) {
      step = stepProp;
    }

    var next;
    /**
     * Let's follow the native browser behavior for
     * scenarios where the input starts empty ("")
     */

    if (value === "") {
      /**
       * If `min` is set, native input, starts at the `min`.
       * Else, it starts at `step`
       */
      next = parse(step);
    } else {
      next = parse(value) + step;
    }

    next = clamp(next);
    update(next);
  }, [clamp, stepProp, update, value]);
  var decrement = useCallback(function (step) {
    if (step === void 0) {
      step = stepProp;
    }

    var next; // Same thing here. We'll follow native implementation

    if (value === "") {
      next = parse(-step);
    } else {
      next = parse(value) - step;
    }

    next = clamp(next);
    update(next);
  }, [clamp, stepProp, update, value]);
  var reset = useCallback(() => {
    var next;

    if (defaultValue == null) {
      next = "";
    } else {
      var _cast2;

      next = (_cast2 = cast(defaultValue, stepProp, precisionProp)) != null ? _cast2 : min;
    }

    update(next);
  }, [defaultValue, precisionProp, stepProp, update, min]);
  var castValue = useCallback(value => {
    var _cast3;

    var nextValue = (_cast3 = cast(value, stepProp, precision)) != null ? _cast3 : min;
    update(nextValue);
  }, [precision, stepProp, update, min]);
  var valueAsNumber = parse(value);
  /**
   * Common range checks
   */

  var isOutOfRange = valueAsNumber > max || valueAsNumber < min;
  var isAtMax = valueAsNumber === max;
  var isAtMin = valueAsNumber === min;
  return {
    isOutOfRange,
    isAtMax,
    isAtMin,
    precision,
    value,
    valueAsNumber,
    update,
    reset,
    increment,
    decrement,
    clamp,
    cast: castValue,
    setValue
  };
}

function parse(value) {
  return parseFloat(value.toString().replace(/[^\w.-]+/g, ""));
}

function getDecimalPlaces(value, step) {
  return Math.max(countDecimalPlaces(step), countDecimalPlaces(value));
}

function cast(value, step, precision) {
  var parsedValue = parse(value);
  if (Number.isNaN(parsedValue)) return undefined;
  var decimalPlaces = getDecimalPlaces(parsedValue, step);
  return toPrecision(parsedValue, precision != null ? precision : decimalPlaces);
}
//# sourceMappingURL=use-counter.js.map