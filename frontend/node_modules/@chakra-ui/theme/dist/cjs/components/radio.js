"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _checkbox = _interopRequireDefault(require("./checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var parts = ["container", "control", "label"];

function baseStyleControl(props) {
  var _Checkbox$baseStyle = _checkbox["default"].baseStyle(props),
      control = _Checkbox$baseStyle.control;

  return _extends({}, control, {
    borderRadius: "full",
    _checked: _extends({}, control["_checked"], {
      _before: {
        content: "\"\"",
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    })
  });
}

var baseStyle = function baseStyle(props) {
  return {
    label: _checkbox["default"].baseStyle(props).label,
    control: baseStyleControl(props)
  };
};

var sizes = {
  md: {
    control: {
      w: 4,
      h: 4
    },
    label: {
      fontSize: "md"
    }
  },
  lg: {
    control: {
      w: 5,
      h: 5
    },
    label: {
      fontSize: "lg"
    }
  },
  sm: {
    control: {
      width: 3,
      height: 3
    },
    label: {
      fontSize: "sm"
    }
  }
};
var defaultProps = {
  size: "md",
  colorScheme: "blue"
};
var _default = {
  parts: parts,
  baseStyle: baseStyle,
  sizes: sizes,
  defaultProps: defaultProps
};
exports["default"] = _default;
//# sourceMappingURL=radio.js.map