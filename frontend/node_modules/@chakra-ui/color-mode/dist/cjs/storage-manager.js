"use strict";

exports.__esModule = true;
exports.cookieStorageManager = exports.localStorageManager = exports.storageKey = void 0;

var _utils = require("@chakra-ui/utils");

var hasSupport = function hasSupport() {
  return typeof Storage !== "undefined";
};

var storageKey = "chakra-ui-color-mode";
exports.storageKey = storageKey;

/**
 * Simple object to handle read-write to localStorage
 */
var localStorageManager = {
  get: function get(init) {
    if (!hasSupport()) return init;

    try {
      var _value = localStorage.getItem(storageKey);

      return _value != null ? _value : init;
    } catch (error) {
      if (_utils.__DEV__) {
        console.log(error);
      }

      return init;
    }
  },
  set: function set(value) {
    if (!hasSupport()) return;

    try {
      localStorage.setItem(storageKey, value);
    } catch (error) {
      if (_utils.__DEV__) {
        console.log(error);
      }
    }
  },
  type: "localStorage"
};
/**
 * Simple object to handle read-write to cookies
 */

exports.localStorageManager = localStorageManager;

var cookieStorageManager = function cookieStorageManager(cookies) {
  if (cookies === void 0) {
    cookies = "";
  }

  return {
    get: function get(init) {
      var match = cookies.match(new RegExp("(^| )" + storageKey + "=([^;]+)"));

      if (match) {
        return match[2];
      }

      return init;
    },
    set: function set(value) {
      document.cookie = storageKey + "=" + value + "; max-age=31536000; path=/";
    },
    type: "cookie"
  };
};

exports.cookieStorageManager = cookieStorageManager;
//# sourceMappingURL=storage-manager.js.map