"use strict";

exports.__esModule = true;
exports.useEventListeners = useEventListeners;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useEventListeners() {
  var listeners = React.useRef(new Map());
  var currentListeners = listeners.current;
  var add = React.useCallback(function (el, type, listener, options) {
    listeners.current.set(listener, {
      type: type,
      el: el,
      options: options
    });
    el.addEventListener(type, listener, options);
  }, []);
  var remove = React.useCallback(function (el, type, listener, options) {
    el.removeEventListener(type, listener, options);
    listeners.current["delete"](listener);
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
//# sourceMappingURL=use-event-listeners.js.map