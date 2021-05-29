"use strict";

exports.__esModule = true;
exports.CheckboxIcon = void 0;

var _system = require("@chakra-ui/system");

var _framerMotion = require("framer-motion");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// @future: only call `motion(chakra.svg)` when we drop framer-motion v3 support
var MotionSvg = "custom" in _framerMotion.motion ? _framerMotion.motion.custom(_system.chakra.svg) : (0, _framerMotion.motion)(_system.chakra.svg);

var CheckIcon = function CheckIcon(props) {
  return /*#__PURE__*/React.createElement(MotionSvg, _extends({
    width: "1.2em",
    viewBox: "0 0 12 10",
    variants: {
      unchecked: {
        opacity: 0,
        strokeDashoffset: 16
      },
      checked: {
        opacity: 1,
        strokeDashoffset: 0,
        transition: {
          duration: 0.2
        }
      }
    },
    style: {
      fill: "none",
      strokeWidth: 2,
      stroke: "currentColor",
      strokeDasharray: 16
    }
  }, props), /*#__PURE__*/React.createElement("polyline", {
    points: "1.5 6 4.5 9 10.5 1"
  }));
};

var IndeterminateIcon = function IndeterminateIcon(props) {
  return /*#__PURE__*/React.createElement(MotionSvg, _extends({
    width: "1.2em",
    viewBox: "0 0 24 24",
    variants: {
      unchecked: {
        scaleX: 0.65,
        opacity: 0
      },
      checked: {
        scaleX: 1,
        opacity: 1,
        transition: {
          scaleX: {
            duration: 0
          },
          opacity: {
            duration: 0.02
          }
        }
      }
    },
    style: {
      stroke: "currentColor",
      strokeWidth: 4
    }
  }, props), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    x2: "3",
    y1: "12",
    y2: "12"
  }));
};

var CheckboxTransition = function CheckboxTransition(_ref) {
  var open = _ref.open,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(_framerMotion.AnimatePresence, {
    initial: false
  }, open && /*#__PURE__*/React.createElement(_framerMotion.motion.div, {
    variants: {
      unchecked: {
        scale: 0.5
      },
      checked: {
        scale: 1
      }
    },
    initial: "unchecked",
    animate: "checked",
    exit: "unchecked",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%"
    }
  }, children));
};

/**
 * CheckboxIcon is used to visually indicate the checked or indeterminate
 * state of a checkbox.
 *
 * @todo allow users pass their own icon svgs
 */
var CheckboxIcon = function CheckboxIcon(props) {
  var isIndeterminate = props.isIndeterminate,
      isChecked = props.isChecked,
      rest = _objectWithoutPropertiesLoose(props, ["isIndeterminate", "isChecked"]);

  var IconEl = isIndeterminate ? IndeterminateIcon : CheckIcon;
  return /*#__PURE__*/React.createElement(CheckboxTransition, {
    open: isChecked || isIndeterminate
  }, /*#__PURE__*/React.createElement(IconEl, rest));
};

exports.CheckboxIcon = CheckboxIcon;
//# sourceMappingURL=checkbox-icon.js.map