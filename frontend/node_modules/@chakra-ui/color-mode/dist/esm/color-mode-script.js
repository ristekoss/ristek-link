import * as React from "react";

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
export var ColorModeScript = props => {
  var {
    initialColorMode = "light"
  } = props;
  var html = "(" + String(setScript) + ")('" + initialColorMode + "')";
  return /*#__PURE__*/React.createElement("script", {
    nonce: props.nonce,
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
};
//# sourceMappingURL=color-mode-script.js.map