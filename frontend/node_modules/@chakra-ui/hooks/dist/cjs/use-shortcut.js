"use strict";

exports.__esModule = true;
exports.useShortcut = useShortcut;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Checks if the key pressed is a printable character
 * and can be used for shortcut navigation
 */
function isPrintableCharacter(event) {
  var key = event.key;
  return key.length === 1 || key.length > 1 && /[^a-zA-Z0-9]/.test(key);
}

/**
 * React hook that provides an enhanced keydown handler,
 * that's used for key navigation within menus, select dropdowns.
 */
function useShortcut(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      _props$timeout = _props.timeout,
      timeout = _props$timeout === void 0 ? 300 : _props$timeout,
      _props$preventDefault = _props.preventDefault,
      preventDefault = _props$preventDefault === void 0 ? function () {
    return true;
  } : _props$preventDefault;

  var _React$useState = React.useState([]),
      keys = _React$useState[0],
      setKeys = _React$useState[1];

  var timeoutRef = React.useRef();

  var flush = function flush() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  var clearKeysAfterDelay = function clearKeysAfterDelay() {
    flush();
    timeoutRef.current = setTimeout(function () {
      setKeys([]);
      timeoutRef.current = null;
    }, timeout);
  };

  React.useEffect(function () {
    return flush;
  }, []);

  function onKeyDown(fn) {
    return function (event) {
      if (event.key === "Backspace") {
        var keysCopy = [].concat(keys);
        keysCopy.pop();
        setKeys(keysCopy);
        return;
      }

      if (isPrintableCharacter(event)) {
        var _keysCopy = keys.concat(event.key);

        if (preventDefault(event)) {
          event.preventDefault();
          event.stopPropagation();
        }

        setKeys(_keysCopy);
        fn(_keysCopy.join(""));
        clearKeysAfterDelay();
      }
    };
  }

  return onKeyDown;
}
//# sourceMappingURL=use-shortcut.js.map