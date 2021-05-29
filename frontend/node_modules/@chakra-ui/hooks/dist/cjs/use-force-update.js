"use strict";

exports.__esModule = true;
exports.useForceUpdate = useForceUpdate;

var React = _interopRequireWildcard(require("react"));

var _useUnmountEffect = require("./use-unmount-effect");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useForceUpdate() {
  var unloadingRef = React.useRef(false);

  var _React$useState = React.useState(0),
      count = _React$useState[0],
      setCount = _React$useState[1];

  (0, _useUnmountEffect.useUnmountEffect)(function () {
    unloadingRef.current = true;
  });
  return React.useCallback(function () {
    if (!unloadingRef.current) {
      setCount(count + 1);
    }
  }, [count]);
}
//# sourceMappingURL=use-force-update.js.map