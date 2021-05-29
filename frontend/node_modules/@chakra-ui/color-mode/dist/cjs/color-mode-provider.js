"use strict";

exports.__esModule = true;
exports.ColorModeProvider = ColorModeProvider;
exports.useColorModeValue = useColorModeValue;
exports.LightMode = exports.DarkMode = exports.useColorMode = exports.ColorModeContext = void 0;

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

var _colorMode = require("./color-mode.utils");

var _storageManager = require("./storage-manager");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ColorModeContext = /*#__PURE__*/React.createContext({});
exports.ColorModeContext = ColorModeContext;

if (_utils.__DEV__) {
  ColorModeContext.displayName = "ColorModeContext";
}
/**
 * React hook that reads from `ColorModeProvider` context
 * Returns the color mode and function to toggle it
 */


var useColorMode = function useColorMode() {
  var context = React.useContext(ColorModeContext);

  if (context === undefined) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }

  return context;
};

exports.useColorMode = useColorMode;

/**
 * Provides context for the color mode based on config in `theme`
 * Returns the color mode and function to toggle the color mode
 */
function ColorModeProvider(props) {
  var value = props.value,
      children = props.children,
      _props$options = props.options,
      useSystemColorMode = _props$options.useSystemColorMode,
      initialColorMode = _props$options.initialColorMode,
      _props$colorModeManag = props.colorModeManager,
      colorModeManager = _props$colorModeManag === void 0 ? _storageManager.localStorageManager : _props$colorModeManag;
  /**
   * Only attempt to retrieve if we're on the server. Else this will result
   * in a hydration mismatch warning and partially invalid visuals.
   *
   * Else fallback safely to `theme.config.initialColormode` (default light)
   */

  var _React$useState = React.useState(colorModeManager.type === "cookie" ? colorModeManager.get(initialColorMode) : initialColorMode),
      colorMode = _React$useState[0],
      rawSetColorMode = _React$useState[1];

  React.useEffect(function () {
    /**
     * Since we cannot initially retrieve localStorage to due above mentioned
     * reasons, do so after hydration.
     *
     * Priority:
     * - system color mode
     * - defined value on <ColorModeScript />, if present
     * - previously stored value
     */
    if (_utils.isBrowser && colorModeManager.type === "localStorage") {
      var mode = useSystemColorMode ? (0, _colorMode.getColorScheme)(initialColorMode) : _colorMode.root.get() || colorModeManager.get();

      if (mode) {
        rawSetColorMode(mode);
      }
    }
  }, [colorModeManager, useSystemColorMode, initialColorMode]);
  React.useEffect(function () {
    var isDark = colorMode === "dark";
    (0, _colorMode.syncBodyClassName)(isDark);

    _colorMode.root.set(isDark ? "dark" : "light");
  }, [colorMode]);
  var setColorMode = React.useCallback(function (value) {
    colorModeManager.set(value);
    rawSetColorMode(value);
  }, [colorModeManager]);
  var toggleColorMode = React.useCallback(function () {
    setColorMode(colorMode === "light" ? "dark" : "light");
  }, [colorMode, setColorMode]);
  React.useEffect(function () {
    var removeListener;

    if (useSystemColorMode) {
      removeListener = (0, _colorMode.addListener)(setColorMode);
    }

    return function () {
      if (removeListener && useSystemColorMode) {
        removeListener();
      }
    };
  }, [setColorMode, useSystemColorMode]); // presence of `value` indicates a controlled context

  var context = React.useMemo(function () {
    return {
      colorMode: value != null ? value : colorMode,
      toggleColorMode: value ? _utils.noop : toggleColorMode,
      setColorMode: value ? _utils.noop : setColorMode
    };
  }, [colorMode, setColorMode, toggleColorMode, value]);
  return /*#__PURE__*/React.createElement(ColorModeContext.Provider, {
    value: context
  }, children);
}

if (_utils.__DEV__) {
  ColorModeProvider.displayName = "ColorModeProvider";
}
/**
 * Locks the color mode to `dark`, without any way to change it.
 */


var DarkMode = function DarkMode(props) {
  return /*#__PURE__*/React.createElement(ColorModeContext.Provider, _extends({
    value: {
      colorMode: "dark",
      toggleColorMode: _utils.noop,
      setColorMode: _utils.noop
    }
  }, props));
};

exports.DarkMode = DarkMode;

if (_utils.__DEV__) {
  DarkMode.displayName = "DarkMode";
}
/**
 * Locks the color mode to `light` without any way to change it.
 */


var LightMode = function LightMode(props) {
  return /*#__PURE__*/React.createElement(ColorModeContext.Provider, _extends({
    value: {
      colorMode: "light",
      toggleColorMode: _utils.noop,
      setColorMode: _utils.noop
    }
  }, props));
};

exports.LightMode = LightMode;

if (_utils.__DEV__) {
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


function useColorModeValue(light, dark) {
  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  return colorMode === "dark" ? dark : light;
}
//# sourceMappingURL=color-mode-provider.js.map