"use strict";

exports.__esModule = true;
exports.useControllableProp = useControllableProp;
exports.useControllableState = useControllableState;

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

var _useCallbackRef = require("./use-callback-ref");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useControllableProp(prop, state) {
  var isControlled = prop !== undefined;
  var value = isControlled && typeof prop !== "undefined" ? prop : state;
  return [isControlled, value];
}

/**
 * React hook for using controlling component state.
 * @param props
 */
function useControllableState(props) {
  var valueProp = props.value,
      defaultValue = props.defaultValue,
      onChange = props.onChange,
      _props$shouldUpdate = props.shouldUpdate,
      shouldUpdate = _props$shouldUpdate === void 0 ? function (prev, next) {
    return prev !== next;
  } : _props$shouldUpdate;
  var onChangeProp = (0, _useCallbackRef.useCallbackRef)(onChange);
  var shouldUpdateProp = (0, _useCallbackRef.useCallbackRef)(shouldUpdate);

  var _React$useState = React.useState(defaultValue),
      valueState = _React$useState[0],
      setValue = _React$useState[1];

  var isControlled = valueProp !== undefined;
  var value = isControlled ? valueProp : valueState;
  var updateValue = React.useCallback(function (next) {
    var nextValue = (0, _utils.runIfFn)(next, value);

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