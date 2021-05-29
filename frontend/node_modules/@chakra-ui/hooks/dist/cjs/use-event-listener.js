"use strict";

exports.__esModule = true;
exports.useEventListener = useEventListener;

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

var _useCallbackRef = require("./use-callback-ref");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * React hook to manage browser event listeners
 *
 * @param event the event name
 * @param handler the event handler function to execute
 * @param doc the dom environment to execute against (defaults to `document`)
 * @param options the event listener options
 *
 * @internal
 */
function useEventListener(event, handler, env, options) {
  var listener = (0, _useCallbackRef.useCallbackRef)(handler);
  React.useEffect(function () {
    var _runIfFn;

    var node = (_runIfFn = (0, _utils.runIfFn)(env)) != null ? _runIfFn : document;
    node.addEventListener(event, listener, options);
    return function () {
      node.removeEventListener(event, listener, options);
    };
  }, [event, env, options, listener]);
  return function () {
    var _runIfFn2;

    var node = (_runIfFn2 = (0, _utils.runIfFn)(env)) != null ? _runIfFn2 : document;
    node.removeEventListener(event, listener, options);
  };
}
//# sourceMappingURL=use-event-listener.js.map