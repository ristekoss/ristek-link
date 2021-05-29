import { useTheme } from "@chakra-ui/system";
import { memoizedGet as get, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
import { useMediaQuery } from "./use-media-query";

/**
 * Visibility
 *
 * React component to control the visibility of its
 * children based on the current breakpoint
 */
var Visibility = props => {
  var {
    breakpoint,
    hide,
    children
  } = props;
  var [show] = useMediaQuery(breakpoint);
  var isVisible = hide ? !show : show;
  var rendered = isVisible ? children : null;
  return rendered;
};

export var Hide = props => {
  var {
    children
  } = props;
  var query = useQuery(props);
  return /*#__PURE__*/React.createElement(Visibility, {
    breakpoint: query,
    hide: true
  }, children);
};

if (__DEV__) {
  Hide.displayName = "Hide";
}

export var Show = props => {
  var {
    children
  } = props;
  var query = useQuery(props);
  return /*#__PURE__*/React.createElement(Visibility, {
    breakpoint: query
  }, children);
};

if (__DEV__) {
  Show.displayName = "Show";
}

var getBreakpoint = (theme, value) => get(theme, "breakpoints." + value, value);

export function useQuery(props) {
  var {
    breakpoint = "",
    below,
    above
  } = props;
  var theme = useTheme();
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