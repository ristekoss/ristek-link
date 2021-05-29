"use strict";

exports.__esModule = true;
exports.useBoolean = useBoolean;

var _react = require("react");

/**
 * React hook to manage boolean (on - off) states
 *
 * @param initialState the initial boolean state value
 */
function useBoolean(initialState) {
  if (initialState === void 0) {
    initialState = false;
  }

  var _useState = (0, _react.useState)(initialState),
      value = _useState[0],
      setValue = _useState[1];

  var on = (0, _react.useCallback)(function () {
    setValue(true);
  }, []);
  var off = (0, _react.useCallback)(function () {
    setValue(false);
  }, []);
  var toggle = (0, _react.useCallback)(function () {
    setValue(function (prev) {
      return !prev;
    });
  }, []);
  return [value, {
    on: on,
    off: off,
    toggle: toggle
  }];
}
//# sourceMappingURL=use-boolean.js.map