"use strict";

exports.__esModule = true;
exports.useMediaQuery = useMediaQuery;

var React = _interopRequireWildcard(require("react"));

var _utils = require("@chakra-ui/utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useSafeLayoutEffect = _utils.isBrowser ? React.useLayoutEffect : React.useEffect;
/**
 * React hook that tracks state of a CSS media query
 *
 * @param query the media query to match
 */

function useMediaQuery(query) {
  var queries = Array.isArray(query) ? query : [query];
  var isSupported = _utils.isBrowser && "matchMedia" in window;

  var _React$useState = React.useState(queries.map(function (query) {
    return isSupported ? !!window.matchMedia(query).matches : false;
  })),
      matches = _React$useState[0],
      setMatches = _React$useState[1];

  useSafeLayoutEffect(function () {
    if (!isSupported) return undefined;
    var mediaQueryList = queries.map(function (query) {
      return window.matchMedia(query);
    });
    var listenerList = mediaQueryList.map(function (mediaQuery, index) {
      var listener = function listener() {
        return setMatches(function (prev) {
          return prev.map(function (prevValue, idx) {
            return index === idx ? !!mediaQuery.matches : prevValue;
          });
        });
      };

      mediaQuery.addListener(listener);
      return listener;
    });
    return function () {
      mediaQueryList.forEach(function (mediaQuery, index) {
        mediaQuery.removeListener(listenerList[index]);
      });
    };
  }, [query]);
  return matches;
}
//# sourceMappingURL=use-media-query.js.map