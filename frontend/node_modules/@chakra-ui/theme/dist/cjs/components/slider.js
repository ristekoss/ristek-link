"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _themeTools = require("@chakra-ui/theme-tools");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var parts = ["container", "thumb", "track", "filledTrack"];

function thumbOrientation(props) {
  return (0, _themeTools.orient)({
    orientation: props.orientation,
    vertical: {
      left: "50%",
      transform: "translateX(-50%)",
      _active: {
        transform: "translateX(-50%) scale(1.15)"
      }
    },
    horizontal: {
      top: "50%",
      transform: "translateY(-50%)",
      _active: {
        transform: "translateY(-50%) scale(1.15)"
      }
    }
  });
}

var baseStyleContainer = function baseStyleContainer(props) {
  var orientation = props.orientation;
  return _extends({
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    }
  }, (0, _themeTools.orient)({
    orientation: orientation,
    vertical: {
      h: "100%"
    },
    horizontal: {
      w: "100%"
    }
  }));
};

function baseStyleTrack(props) {
  return {
    borderRadius: "sm",
    bg: (0, _themeTools.mode)("gray.200", "whiteAlpha.200")(props),
    _disabled: {
      bg: (0, _themeTools.mode)("gray.300", "whiteAlpha.300")(props)
    }
  };
}

function baseStyleThumb(props) {
  return _extends({
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transition: "transform 0.2s",
    _focus: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  }, thumbOrientation(props));
}

function baseStyleFilledTrack(props) {
  var c = props.colorScheme;
  return {
    bg: (0, _themeTools.mode)(c + ".500", c + ".200")(props)
  };
}

var baseStyle = function baseStyle(props) {
  return {
    container: baseStyleContainer(props),
    track: baseStyleTrack(props),
    thumb: baseStyleThumb(props),
    filledTrack: baseStyleFilledTrack(props)
  };
};

function sizeLg(props) {
  return {
    thumb: {
      w: "16px",
      h: "16px"
    },
    track: (0, _themeTools.orient)({
      orientation: props.orientation,
      horizontal: {
        h: "4px"
      },
      vertical: {
        w: "4px"
      }
    })
  };
}

function sizeMd(props) {
  return {
    thumb: {
      w: "14px",
      h: "14px"
    },
    track: (0, _themeTools.orient)({
      orientation: props.orientation,
      horizontal: {
        h: "4px"
      },
      vertical: {
        w: "4px"
      }
    })
  };
}

function sizeSm(props) {
  return {
    thumb: {
      w: "10px",
      h: "10px"
    },
    track: (0, _themeTools.orient)({
      orientation: props.orientation,
      horizontal: {
        h: "2px"
      },
      vertical: {
        w: "2px"
      }
    })
  };
}

var sizes = {
  lg: sizeLg,
  md: sizeMd,
  sm: sizeSm
};
var defaultProps = {
  size: "md",
  colorScheme: "blue"
};
var _default = {
  parts: parts,
  sizes: sizes,
  baseStyle: baseStyle,
  defaultProps: defaultProps
};
exports["default"] = _default;
//# sourceMappingURL=slider.js.map