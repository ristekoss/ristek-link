import * as React from "react";
/**
 * Checks if the key pressed is a printable character
 * and can be used for shortcut navigation
 */

function isPrintableCharacter(event) {
  var {
    key
  } = event;
  return key.length === 1 || key.length > 1 && /[^a-zA-Z0-9]/.test(key);
}

/**
 * React hook that provides an enhanced keydown handler,
 * that's used for key navigation within menus, select dropdowns.
 */
export function useShortcut(props) {
  if (props === void 0) {
    props = {};
  }

  var {
    timeout = 300,
    preventDefault = () => true
  } = props;
  var [keys, setKeys] = React.useState([]);
  var timeoutRef = React.useRef();

  var flush = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  var clearKeysAfterDelay = () => {
    flush();
    timeoutRef.current = setTimeout(() => {
      setKeys([]);
      timeoutRef.current = null;
    }, timeout);
  };

  React.useEffect(() => flush, []);

  function onKeyDown(fn) {
    return event => {
      if (event.key === "Backspace") {
        var keysCopy = [...keys];
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