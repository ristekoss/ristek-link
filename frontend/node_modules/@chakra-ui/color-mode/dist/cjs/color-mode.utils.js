"use strict";

exports.__esModule = true;
exports.syncBodyClassName = syncBodyClassName;
exports.getColorScheme = getColorScheme;
exports.addListener = addListener;
exports.root = exports.darkQuery = exports.lightQuery = exports.queries = void 0;

var _utils = require("@chakra-ui/utils");

var classNames = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};

/**
 * SSR: Graceful fallback for the `body` element
 */
var mockBody = {
  classList: {
    add: _utils.noop,
    remove: _utils.noop
  }
};

var getBody = function getBody() {
  return _utils.isBrowser ? document.body : mockBody;
};
/**
 * Function to add/remove class from `body` based on color mode
 */


function syncBodyClassName(isDark) {
  var body = getBody();
  body.classList.add(isDark ? classNames.dark : classNames.light);
  body.classList.remove(isDark ? classNames.light : classNames.dark);
}
/**
 * Check if JS media query matches the query string passed
 */


function getMediaQuery(query) {
  var mediaQueryList = window.matchMedia == null ? void 0 : window.matchMedia(query);

  if (!mediaQueryList) {
    return undefined;
  }

  return !!mediaQueryList.media === mediaQueryList.matches;
}

var queries = {
  light: "(prefers-color-scheme: light)",
  dark: "(prefers-color-scheme: dark)"
};
exports.queries = queries;
var lightQuery = queries.light;
exports.lightQuery = lightQuery;
var darkQuery = queries.dark;
exports.darkQuery = darkQuery;

function getColorScheme(fallback) {
  var _getMediaQuery;

  var isDark = (_getMediaQuery = getMediaQuery(queries.dark)) != null ? _getMediaQuery : fallback === "dark";
  return isDark ? "dark" : "light";
}
/**
 * Adds system os color mode listener, and run the callback
 * once preference changes
 */


function addListener(fn) {
  if (!("matchMedia" in window)) {
    return _utils.noop;
  }

  var mediaQueryList = window.matchMedia(queries.dark);

  var listener = function listener() {
    fn(mediaQueryList.matches ? "dark" : "light");
  };

  listener();
  mediaQueryList.addListener(listener);
  return function () {
    mediaQueryList.removeListener(listener);
  };
}

var root = {
  get: function get() {
    return document.documentElement.style.getPropertyValue("--chakra-ui-color-mode");
  },
  set: function set(mode) {
    if (_utils.isBrowser) {
      document.documentElement.style.setProperty("--chakra-ui-color-mode", mode);
    }
  }
};
exports.root = root;
//# sourceMappingURL=color-mode.utils.js.map