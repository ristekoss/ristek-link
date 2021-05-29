"use strict";

exports.__esModule = true;
exports.usePrevious = usePrevious;

var _react = require("react");

function usePrevious(value) {
  var ref = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    ref.current = value;
  }, [value]);
  return ref.current;
}
//# sourceMappingURL=use-previous.js.map