"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _themeTools = require("@chakra-ui/theme-tools");

var _modal = _interopRequireDefault(require("./modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var parts = _modal["default"].parts;
/**
 * Since the `maxWidth` prop references theme.sizes internally,
 * we can leverage that to size our modals.
 */

function getSize(value) {
  if (value === "full") {
    return {
      dialog: {
        maxW: "100vw",
        h: "100vh"
      }
    };
  }

  return {
    dialog: {
      maxW: value
    }
  };
}

var baseStyleOverlay = {
  bg: "blackAlpha.600",
  zIndex: "overlay"
};
var baseStyleDialogContainer = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
};

function baseStyleDialog(props) {
  var isFullHeight = props.isFullHeight;
  return _extends({}, isFullHeight && {
    height: "100vh"
  }, {
    zIndex: "modal",
    maxH: "100vh",
    bg: (0, _themeTools.mode)("white", "gray.700")(props),
    color: "inherit",
    boxShadow: (0, _themeTools.mode)("lg", "dark-lg")(props)
  });
}

var baseStyleHeader = {
  px: 6,
  py: 4,
  fontSize: "xl",
  fontWeight: "semibold"
};
var baseStyleCloseButton = {
  position: "absolute",
  top: 2,
  insetEnd: 3
};
var baseStyleBody = {
  px: 6,
  py: 2,
  flex: 1,
  overflow: "auto"
};
var baseStyleFooter = {
  px: 6,
  py: 4
};

var baseStyle = function baseStyle(props) {
  return {
    overlay: baseStyleOverlay,
    dialogContainer: baseStyleDialogContainer,
    dialog: baseStyleDialog(props),
    header: baseStyleHeader,
    closeButton: baseStyleCloseButton,
    body: baseStyleBody,
    footer: baseStyleFooter
  };
};

var sizes = {
  xs: getSize("xs"),
  sm: getSize("md"),
  md: getSize("lg"),
  lg: getSize("2xl"),
  xl: getSize("4xl"),
  full: getSize("full")
};
var defaultProps = {
  size: "xs"
};
var _default = {
  parts: parts,
  baseStyle: baseStyle,
  sizes: sizes,
  defaultProps: defaultProps
};
exports["default"] = _default;
//# sourceMappingURL=drawer.js.map