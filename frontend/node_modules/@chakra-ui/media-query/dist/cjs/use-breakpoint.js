"use strict";

exports.__esModule = true;
exports.useBreakpoint = useBreakpoint;

var _system = require("@chakra-ui/system");

var _react = _interopRequireDefault(require("react"));

var _createMediaQuery = _interopRequireDefault(require("./create-media-query"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * React hook used to get the current responsive media breakpoint.
 *
 * @param defaultBreakpoint default breakpoint name
 * (in non-window environments like SSR)
 *
 * For SSR, you can use a package like [is-mobile](https://github.com/kaimallea/isMobile)
 * to get the default breakpoint value from the user-agent
 */
function useBreakpoint(defaultBreakpoint) {
  var _useTheme = (0, _system.useTheme)(),
      breakpoints = _useTheme.breakpoints;

  var mediaQueries = _react["default"].useMemo(function () {
    return (0, _createMediaQuery["default"])(_extends({
      base: "0px"
    }, breakpoints));
  }, [breakpoints]);

  var _React$useState = _react["default"].useState(function () {
    if (!defaultBreakpoint) {
      return undefined;
    }

    var mediaQuery = mediaQueries.find(function (_ref) {
      var breakpoint = _ref.breakpoint;
      return breakpoint === defaultBreakpoint;
    });

    if (mediaQuery) {
      var query = mediaQuery.query,
          breakpoint = _objectWithoutPropertiesLoose(mediaQuery, ["query"]);

      return breakpoint;
    }

    return undefined;
  }),
      currentBreakpoint = _React$useState[0],
      setCurrentBreakpoint = _React$useState[1];

  var current = currentBreakpoint == null ? void 0 : currentBreakpoint.breakpoint;

  var update = _react["default"].useCallback(function (query, breakpoint) {
    if (query.matches && current !== breakpoint.breakpoint) {
      setCurrentBreakpoint(breakpoint);
    }
  }, [current]);

  _react["default"].useEffect(function () {
    var listeners = new Set();
    mediaQueries.forEach(function (_ref2) {
      var query = _ref2.query,
          breakpoint = _objectWithoutPropertiesLoose(_ref2, ["query"]);

      var mediaQuery = window.matchMedia(query); // trigger an initial update to determine media query

      update(mediaQuery, breakpoint);

      var handleChange = function handleChange() {
        update(mediaQuery, breakpoint);
      }; // add media query-listener


      mediaQuery.addListener(handleChange); // push the media query list handleChange
      // so we can use it to remove Listener

      listeners.add({
        mediaQuery: mediaQuery,
        handleChange: handleChange
      });
      return function () {
        // clean up 1
        mediaQuery.removeListener(handleChange);
      };
    });
    return function () {
      // clean up 2: for safety
      listeners.forEach(function (_ref3) {
        var mediaQuery = _ref3.mediaQuery,
            handleChange = _ref3.handleChange;
        mediaQuery.removeListener(handleChange);
      });
      listeners.clear();
    };
  }, [mediaQueries, breakpoints, update]);

  return current;
}
//# sourceMappingURL=use-breakpoint.js.map