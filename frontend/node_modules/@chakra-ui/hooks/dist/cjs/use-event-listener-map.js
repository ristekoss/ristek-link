"use strict";

exports.__esModule = true;
exports.useEventListenerMap = useEventListenerMap;

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useEventListenerMap() {
  var listeners = React.useRef(new Map());
  var currentListeners = listeners.current;
  var add = React.useCallback(function (el, type, listener, options) {
    var pointerEventListener = (0, _utils.wrapPointerEventHandler)(listener, type === "pointerdown");
    listeners.current.set(listener, {
      __listener: pointerEventListener,
      type: (0, _utils.getPointerEventName)(type),
      el: el,
      options: options
    });
    el.addEventListener(type, pointerEventListener, options);
  }, []);
  var remove = React.useCallback(function (el, type, listener, options) {
    var _listeners$current$ge = listeners.current.get(listener),
        pointerEventListener = _listeners$current$ge.__listener;

    el.removeEventListener(type, pointerEventListener, options);
    listeners.current["delete"](pointerEventListener);
  }, []);
  React.useEffect(function () {
    return function () {
      currentListeners.forEach(function (value, key) {
        remove(value.el, value.type, key, value.options);
      });
    };
  }, [remove, currentListeners]);
  return {
    add: add,
    remove: remove
  };
}
//# sourceMappingURL=use-event-listener-map.js.map