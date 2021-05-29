"use strict";

exports.__esModule = true;
exports.ColorModeScript = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function setScript(initialValue) {
  var mql = window.matchMedia("(prefers-color-scheme: dark)");
  var systemPreference = mql.matches ? "dark" : "light";
  var persistedPreference;

  try {
    persistedPreference = localStorage.getItem("chakra-ui-color-mode");
  } catch (error) {
    console.log("Chakra UI: localStorage is not available. Color mode persistence might not work as expected");
  }

  var isInStorage = typeof persistedPreference === "string";
  var colorMode;

  if (isInStorage) {
    colorMode = persistedPreference;
  } else {
    colorMode = initialValue === "system" ? systemPreference : initialValue;
  }

  if (colorMode) {
    var root = document.documentElement;
    root.style.setProperty("--chakra-ui-color-mode", colorMode);
  }
}

/**
 * Script to add to the root of your application when using localStorage,
 * to help prevent flash of color mode that can happen during page load.
 */
var ColorModeScript = function ColorModeScript(props) {
  var _props$initialColorMo = props.initialColorMode,
      initialColorMode = _props$initialColorMo === void 0 ? "light" : _props$initialColorMo;
  var html = "(" + String(setScript) + ")('" + initialColorMode + "')";
  return /*#__PURE__*/React.createElement("script", {
    nonce: props.nonce,
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
};

exports.ColorModeScript = ColorModeScript;
//# sourceMappingURL=color-mode-script.js.map