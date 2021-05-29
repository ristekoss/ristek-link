"use strict";

exports.__esModule = true;
exports.useQuery = useQuery;
exports.Show = exports.Hide = void 0;

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

var _useMediaQuery2 = require("./use-media-query");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Visibility
 *
 * React component to control the visibility of its
 * children based on the current breakpoint
 */
var Visibility = function Visibility(props) {
  var breakpoint = props.breakpoint,
      hide = props.hide,
      children = props.children;

  var _useMediaQuery = (0, _useMediaQuery2.useMediaQuery)(breakpoint),
      show = _useMediaQuery[0];

  var isVisible = hide ? !show : show;
  var rendered = isVisible ? children : null;
  return rendered;
};

var Hide = function Hide(props) {
  var children = props.children;
  var query = useQuery(props);
  return /*#__PURE__*/React.createElement(Visibility, {
    breakpoint: query,
    hide: true
  }, children);
};

exports.Hide = Hide;

if (_utils.__DEV__) {
  Hide.displayName = "Hide";
}

var Show = function Show(props) {
  var children = props.children;
  var query = useQuery(props);
  return /*#__PURE__*/React.createElement(Visibility, {
    breakpoint: query
  }, children);
};

exports.Show = Show;

if (_utils.__DEV__) {
  Show.displayName = "Show";
}

var getBreakpoint = function getBreakpoint(theme, value) {
  return (0, _utils.memoizedGet)(theme, "breakpoints." + value, value);
};

function useQuery(props) {
  var _props$breakpoint = props.breakpoint,
      breakpoint = _props$breakpoint === void 0 ? "" : _props$breakpoint,
      below = props.below,
      above = props.above;
  var theme = (0, _system.useTheme)();
  var bpBelow = getBreakpoint(theme, below);
  var bpAbove = getBreakpoint(theme, above);
  var query = breakpoint;

  if (bpBelow) {
    query = "(max-width: " + bpBelow + ")";
  } else if (bpAbove) {
    query = "(min-width: " + bpAbove + ")";
  }

  return query;
}
//# sourceMappingURL=media-query.js.map