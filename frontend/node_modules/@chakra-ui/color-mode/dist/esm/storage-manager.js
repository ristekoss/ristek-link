import { __DEV__ } from "@chakra-ui/utils";

var hasSupport = () => typeof Storage !== "undefined";

export var storageKey = "chakra-ui-color-mode";

/**
 * Simple object to handle read-write to localStorage
 */
export var localStorageManager = {
  get(init) {
    if (!hasSupport()) return init;

    try {
      var _value = localStorage.getItem(storageKey);

      return _value != null ? _value : init;
    } catch (error) {
      if (__DEV__) {
        console.log(error);
      }

      return init;
    }
  },

  set(value) {
    if (!hasSupport()) return;

    try {
      localStorage.setItem(storageKey, value);
    } catch (error) {
      if (__DEV__) {
        console.log(error);
      }
    }
  },

  type: "localStorage"
};
/**
 * Simple object to handle read-write to cookies
 */

export var cookieStorageManager = function cookieStorageManager(cookies) {
  if (cookies === void 0) {
    cookies = "";
  }

  return {
    get(init) {
      var match = cookies.match(new RegExp("(^| )" + storageKey + "=([^;]+)"));

      if (match) {
        return match[2];
      }

      return init;
    },

    set(value) {
      document.cookie = storageKey + "=" + value + "; max-age=31536000; path=/";
    },

    type: "cookie"
  };
};
//# sourceMappingURL=storage-manager.js.map