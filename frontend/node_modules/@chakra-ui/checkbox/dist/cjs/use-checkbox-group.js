"use strict";

exports.__esModule = true;
exports.useCheckboxGroup = useCheckboxGroup;

var _hooks = require("@chakra-ui/hooks");

var _utils = require("@chakra-ui/utils");

var _react = require("react");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * React hook that provides all the state management logic
 * for a group of checkboxes.
 *
 * It is consumed by the `CheckboxGroup` component
 */
function useCheckboxGroup(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      defaultValue = _props.defaultValue,
      valueProp = _props.value,
      onChange = _props.onChange,
      isDisabled = _props.isDisabled,
      isNative = _props.isNative;
  var onChangeProp = (0, _hooks.useCallbackRef)(onChange);

  var _useControllableState = (0, _hooks.useControllableState)({
    value: valueProp,
    defaultValue: defaultValue || [],
    onChange: onChangeProp
  }),
      value = _useControllableState[0],
      setValue = _useControllableState[1];

  var handleChange = (0, _react.useCallback)(function (eventOrValue) {
    if (!value) return;
    var isChecked = (0, _utils.isInputEvent)(eventOrValue) ? eventOrValue.target.checked : !value.includes(eventOrValue);
    var selectedValue = (0, _utils.isInputEvent)(eventOrValue) ? eventOrValue.target.value : eventOrValue;
    var nextValue = isChecked ? (0, _utils.addItem)(value, selectedValue) : (0, _utils.removeItem)(value, selectedValue);
    setValue(nextValue);
  }, [setValue, value]);
  var getCheckboxProps = (0, _react.useCallback)(function (props) {
    var _extends2;

    if (props === void 0) {
      props = {};
    }

    var checkedKey = isNative ? "checked" : "isChecked";
    return _extends({}, props, (_extends2 = {}, _extends2[checkedKey] = value.includes(props.value), _extends2.onChange = handleChange, _extends2));
  }, [handleChange, isNative, value]);
  return {
    value: value,
    isDisabled: isDisabled,
    onChange: handleChange,
    setValue: setValue,
    getCheckboxProps: getCheckboxProps
  };
}
//# sourceMappingURL=use-checkbox-group.js.map