"use strict";

exports.__esModule = true;
exports.useMouseDownRef = useMouseDownRef;

var _react = _interopRequireDefault(require("react"));

var _useEventListener = require("./use-event-listener");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @deprecated `useMouseDownRef` will be removed in a future version.
 */
function useMouseDownRef(shouldListen) {
  if (shouldListen === void 0) {
    shouldListen = true;
  }

  var mouseDownRef = _react["default"].useRef();

  (0, _useEventListener.useEventListener)("mousedown", function (event) {
    if (shouldListen) {
      mouseDownRef.current = event.target;
    }
  });
  return mouseDownRef;
}
//# sourceMappingURL=use-mouse-down-ref.js.map