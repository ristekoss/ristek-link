function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { cx, __DEV__ } from "@chakra-ui/utils";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { TransitionDefaults, withDelay } from "./transition-utils";
var variants = {
  initial: (_ref) => {
    var _transition$exit;

    var {
      offsetX,
      offsetY,
      transition,
      transitionEnd,
      delay
    } = _ref;
    return {
      opacity: 0,
      x: offsetX,
      y: offsetY,
      transition: (_transition$exit = transition == null ? void 0 : transition.exit) != null ? _transition$exit : withDelay.exit(TransitionDefaults.exit, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit
    };
  },
  enter: (_ref2) => {
    var _transition$enter;

    var {
      transition,
      transitionEnd,
      delay
    } = _ref2;
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: (_transition$enter = transition == null ? void 0 : transition.enter) != null ? _transition$enter : withDelay.enter(TransitionDefaults.enter, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
    };
  },
  exit: (_ref3) => {
    var _transition$exit2;

    var {
      offsetY,
      offsetX,
      transition,
      transitionEnd,
      reverse,
      delay
    } = _ref3;
    var offset = {
      x: offsetX,
      y: offsetY
    };
    return _extends({
      opacity: 0,
      transition: (_transition$exit2 = transition == null ? void 0 : transition.exit) != null ? _transition$exit2 : withDelay.exit(TransitionDefaults.exit, delay)
    }, reverse ? _extends({}, offset, {
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit
    }) : {
      transitionEnd: _extends({}, offset, transitionEnd == null ? void 0 : transitionEnd.exit)
    });
  }
};
export var slideFadeConfig = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: variants
};
export var SlideFade = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
    unmountOnExit,
    in: isOpen,
    reverse = true,
    className,
    offsetX = 0,
    offsetY = 8,
    transition,
    transitionEnd,
    delay
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["unmountOnExit", "in", "reverse", "className", "offsetX", "offsetY", "transition", "transitionEnd", "delay"]);

  var show = unmountOnExit ? isOpen && unmountOnExit : true;
  var animate = isOpen || unmountOnExit ? "enter" : "exit";
  var custom = {
    offsetX,
    offsetY,
    reverse,
    transition,
    transitionEnd,
    delay
  };
  return /*#__PURE__*/React.createElement(AnimatePresence, {
    custom: custom
  }, show && /*#__PURE__*/React.createElement(motion.div, _extends({
    ref: ref,
    className: cx("chakra-offset-slide", className),
    custom: custom
  }, slideFadeConfig, {
    animate: animate
  }, rest)));
});

if (__DEV__) {
  SlideFade.displayName = "SlideFade";
}
//# sourceMappingURL=slide-fade.js.map