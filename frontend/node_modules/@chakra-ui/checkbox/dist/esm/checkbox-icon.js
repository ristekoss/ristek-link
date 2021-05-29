function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { chakra } from "@chakra-ui/system";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react"; // @future: only call `motion(chakra.svg)` when we drop framer-motion v3 support

var MotionSvg = "custom" in motion ? motion.custom(chakra.svg) : motion(chakra.svg);

var CheckIcon = props => /*#__PURE__*/React.createElement(MotionSvg, _extends({
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

var IndeterminateIcon = props => /*#__PURE__*/React.createElement(MotionSvg, _extends({
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

var CheckboxTransition = (_ref) => {
  var {
    open,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(AnimatePresence, {
    initial: false
  }, open && /*#__PURE__*/React.createElement(motion.div, {
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
export var CheckboxIcon = props => {
  var {
    isIndeterminate,
    isChecked
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["isIndeterminate", "isChecked"]);

  var IconEl = isIndeterminate ? IndeterminateIcon : CheckIcon;
  return /*#__PURE__*/React.createElement(CheckboxTransition, {
    open: isChecked || isIndeterminate
  }, /*#__PURE__*/React.createElement(IconEl, rest));
};
//# sourceMappingURL=checkbox-icon.js.map