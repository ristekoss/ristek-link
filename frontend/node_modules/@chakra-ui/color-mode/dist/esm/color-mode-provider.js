function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { isBrowser, noop, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
import { addListener, getColorScheme, syncBodyClassName, root } from "./color-mode.utils";
import { localStorageManager } from "./storage-manager";
export var ColorModeContext = /*#__PURE__*/React.createContext({});

if (__DEV__) {
  ColorModeContext.displayName = "ColorModeContext";
}
/**
 * React hook that reads from `ColorModeProvider` context
 * Returns the color mode and function to toggle it
 */


export var useColorMode = () => {
  var context = React.useContext(ColorModeContext);

  if (context === undefined) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }

  return context;
};

/**
 * Provides context for the color mode based on config in `theme`
 * Returns the color mode and function to toggle the color mode
 */
export function ColorModeProvider(props) {
  var {
    value,
    children,
    options: {
      useSystemColorMode,
      initialColorMode
    },
    colorModeManager = localStorageManager
  } = props;
  /**
   * Only attempt to retrieve if we're on the server. Else this will result
   * in a hydration mismatch warning and partially invalid visuals.
   *
   * Else fallback safely to `theme.config.initialColormode` (default light)
   */

  var [colorMode, rawSetColorMode] = React.useState(colorModeManager.type === "cookie" ? colorModeManager.get(initialColorMode) : initialColorMode);
  React.useEffect(() => {
    /**
     * Since we cannot initially retrieve localStorage to due above mentioned
     * reasons, do so after hydration.
     *
     * Priority:
     * - system color mode
     * - defined value on <ColorModeScript />, if present
     * - previously stored value
     */
    if (isBrowser && colorModeManager.type === "localStorage") {
      var mode = useSystemColorMode ? getColorScheme(initialColorMode) : root.get() || colorModeManager.get();

      if (mode) {
        rawSetColorMode(mode);
      }
    }
  }, [colorModeManager, useSystemColorMode, initialColorMode]);
  React.useEffect(() => {
    var isDark = colorMode === "dark";
    syncBodyClassName(isDark);
    root.set(isDark ? "dark" : "light");
  }, [colorMode]);
  var setColorMode = React.useCallback(value => {
    colorModeManager.set(value);
    rawSetColorMode(value);
  }, [colorModeManager]);
  var toggleColorMode = React.useCallback(() => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  }, [colorMode, setColorMode]);
  React.useEffect(() => {
    var removeListener;

    if (useSystemColorMode) {
      removeListener = addListener(setColorMode);
    }

    return () => {
      if (removeListener && useSystemColorMode) {
        removeListener();
      }
    };
  }, [setColorMode, useSystemColorMode]); // presence of `value` indicates a controlled context

  var context = React.useMemo(() => ({
    colorMode: value != null ? value : colorMode,
    toggleColorMode: value ? noop : toggleColorMode,
    setColorMode: value ? noop : setColorMode
  }), [colorMode, setColorMode, toggleColorMode, value]);
  return /*#__PURE__*/React.createElement(ColorModeContext.Provider, {
    value: context
  }, children);
}

if (__DEV__) {
  ColorModeProvider.displayName = "ColorModeProvider";
}
/**
 * Locks the color mode to `dark`, without any way to change it.
 */


export var DarkMode = props => /*#__PURE__*/React.createElement(ColorModeContext.Provider, _extends({
  value: {
    colorMode: "dark",
    toggleColorMode: noop,
    setColorMode: noop
  }
}, props));

if (__DEV__) {
  DarkMode.displayName = "DarkMode";
}
/**
 * Locks the color mode to `light` without any way to change it.
 */


export var LightMode = props => /*#__PURE__*/React.createElement(ColorModeContext.Provider, _extends({
  value: {
    colorMode: "light",
    toggleColorMode: noop,
    setColorMode: noop
  }
}, props));

if (__DEV__) {
  LightMode.displayName = "LightMode";
}
/**
 * Change value based on color mode.
 *
 * @param light the light mode value
 * @param dark the dark mode value
 *
 * @example
 *
 * ```js
 * const Icon = useColorModeValue(MoonIcon, SunIcon)
 * ```
 */


export function useColorModeValue(light, dark) {
  var {
    colorMode
  } = useColorMode();
  return colorMode === "dark" ? dark : light;
}
//# sourceMappingURL=color-mode-provider.js.map