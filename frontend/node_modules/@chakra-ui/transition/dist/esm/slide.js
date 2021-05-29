function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { cx, __DEV__ } from "@chakra-ui/utils";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { slideTransition, TransitionEasings, withDelay } from "./transition-utils";
var defaultTransition = {
  exit: {
    duration: 0.15,
    ease: TransitionEasings.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
};
var variants = {
  exit: (_ref) => {
    var _transition$exit;

    var {
      direction,
      transition,
      transitionEnd,
      delay
    } = _ref;
    var {
      exit: exitStyles
    } = slideTransition({
      direction
    });
    return _extends({}, exitStyles, {
      transition: (_transition$exit = transition == null ? void 0 : transition.exit) != null ? _transition$exit : withDelay.exit(defaultTransition.exit, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit
    });
  },
  enter: (_ref2) => {
    var _transition$enter;

    var {
      direction,
      transitionEnd,
      transition,
      delay
    } = _ref2;
    var {
      enter: enterStyles
    } = slideTransition({
      direction
    });
    return _extends({}, enterStyles, {
      transition: (_transition$enter = transition == null ? void 0 : transition.enter) != null ? _transition$enter : withDelay.enter(defaultTransition.enter, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
    });
  }
};
export var Slide = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
    direction = "right",
    style,
    unmountOnExit,
    in: isOpen,
    className,
    transition,
    transitionEnd,
    delay
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["direction", "style", "unmountOnExit", "in", "className", "transition", "transitionEnd", "delay"]);

  var transitionStyles = slideTransition({
    direction
  });
  var computedStyle = Object.assign({
    position: "fixed"
  }, transitionStyles.position, style);
  var show = unmountOnExit ? isOpen && unmountOnExit : true;
  var animate = isOpen || unmountOnExit ? "enter" : "exit";
  var custom = {
    transitionEnd,
    transition,
    direction,
    delay
  };
  return /*#__PURE__*/React.createElement(AnimatePresence, {
    custom: custom
  }, show && /*#__PURE__*/React.createElement(motion.div, _extends({
    ref: ref,
    initial: "exit",
    className: cx("chakra-slide", className),
    animate: animate,
    exit: "exit",
    custom: custom,
    variants: variants,
    style: computedStyle
  }, rest)));
});

if (__DEV__) {
  Slide.displayName = "Slide";
}
//# sourceMappingURL=slide.js.map