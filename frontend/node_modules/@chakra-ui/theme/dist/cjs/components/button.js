"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _themeTools = require("@chakra-ui/theme-tools");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var baseStyle = {
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  _focus: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
};

function variantGhost(props) {
  var c = props.colorScheme,
      theme = props.theme;

  if (c === "gray") {
    return {
      color: (0, _themeTools.mode)("inherit", "whiteAlpha.900")(props),
      _hover: {
        bg: (0, _themeTools.mode)("gray.100", "whiteAlpha.200")(props)
      },
      _active: {
        bg: (0, _themeTools.mode)("gray.200", "whiteAlpha.300")(props)
      }
    };
  }

  var darkHoverBg = (0, _themeTools.transparentize)(c + ".200", 0.12)(theme);
  var darkActiveBg = (0, _themeTools.transparentize)(c + ".200", 0.24)(theme);
  return {
    color: (0, _themeTools.mode)(c + ".600", c + ".200")(props),
    bg: "transparent",
    _hover: {
      bg: (0, _themeTools.mode)(c + ".50", darkHoverBg)(props)
    },
    _active: {
      bg: (0, _themeTools.mode)(c + ".100", darkActiveBg)(props)
    }
  };
}

function variantOutline(props) {
  var c = props.colorScheme;
  var borderColor = (0, _themeTools.mode)("gray.200", "whiteAlpha.300")(props);
  return _extends({
    border: "1px solid",
    borderColor: c === "gray" ? borderColor : "currentColor"
  }, variantGhost(props));
}

/** Accessible color overrides for less accessible colors. */
var accessibleColorMap = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
};

function variantSolid(props) {
  var c = props.colorScheme;

  if (c === "gray") {
    var _bg = (0, _themeTools.mode)("gray.100", "whiteAlpha.200")(props);

    return {
      bg: _bg,
      _hover: {
        bg: (0, _themeTools.mode)("gray.200", "whiteAlpha.300")(props),
        _disabled: {
          bg: _bg
        }
      },
      _active: {
        bg: (0, _themeTools.mode)("gray.300", "whiteAlpha.400")(props)
      }
    };
  }

  var _ref = accessibleColorMap[c] || {},
      _ref$bg = _ref.bg,
      bg = _ref$bg === void 0 ? c + ".500" : _ref$bg,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "white" : _ref$color,
      _ref$hoverBg = _ref.hoverBg,
      hoverBg = _ref$hoverBg === void 0 ? c + ".600" : _ref$hoverBg,
      _ref$activeBg = _ref.activeBg,
      activeBg = _ref$activeBg === void 0 ? c + ".700" : _ref$activeBg;

  var background = (0, _themeTools.mode)(bg, c + ".200")(props);
  return {
    bg: background,
    color: (0, _themeTools.mode)(color, "gray.800")(props),
    _hover: {
      bg: (0, _themeTools.mode)(hoverBg, c + ".300")(props),
      _disabled: {
        bg: background
      }
    },
    _active: {
      bg: (0, _themeTools.mode)(activeBg, c + ".400")(props)
    }
  };
}

function variantLink(props) {
  var c = props.colorScheme;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: (0, _themeTools.mode)(c + ".500", c + ".200")(props),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: (0, _themeTools.mode)(c + ".700", c + ".500")(props)
    }
  };
}

var variantUnstyled = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: 0,
  p: 0
};
var variants = {
  ghost: variantGhost,
  outline: variantOutline,
  solid: variantSolid,
  link: variantLink,
  unstyled: variantUnstyled
};
var sizes = {
  lg: {
    h: 12,
    minW: 12,
    fontSize: "lg",
    px: 6
  },
  md: {
    h: 10,
    minW: 10,
    fontSize: "md",
    px: 4
  },
  sm: {
    h: 8,
    minW: 8,
    fontSize: "sm",
    px: 3
  },
  xs: {
    h: 6,
    minW: 6,
    fontSize: "xs",
    px: 2
  }
};
var defaultProps = {
  variant: "solid",
  size: "md",
  colorScheme: "gray"
};
var _default = {
  baseStyle: baseStyle,
  variants: variants,
  sizes: sizes,
  defaultProps: defaultProps
};
exports["default"] = _default;
//# sourceMappingURL=button.js.map