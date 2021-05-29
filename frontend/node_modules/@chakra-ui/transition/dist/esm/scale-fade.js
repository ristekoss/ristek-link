function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { cx, __DEV__ } from "@chakra-ui/utils";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { TransitionDefaults, withDelay } from "./transition-utils";
var variants = {
  exit: (_ref) => {
    var _transition$exit;

    var {
      reverse,
      initialScale,
      transition,
      transitionEnd,
      delay
    } = _ref;
    return _extends({
      opacity: 0
    }, reverse ? {
      scale: initialScale,
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit
    } : {
      transitionEnd: _extends({
        scale: initialScale
      }, transitionEnd == null ? void 0 : transitionEnd.exit)
    }, {
      transition: (_transition$exit = transition == null ? void 0 : transition.exit) != null ? _transition$exit : withDelay.exit(TransitionDefaults.exit, delay)
    });
  },
  enter: (_ref2) => {
    var _transition$enter;

    var {
      transitionEnd,
      transition,
      delay
    } = _ref2;
    return {
      opacity: 1,
      scale: 1,
      transition: (_transition$enter = transition == null ? void 0 : transition.enter) != null ? _transition$enter : withDelay.enter(TransitionDefaults.enter, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
    };
  }
};
export var scaleFadeConfig = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: variants
};
export var ScaleFade = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
    unmountOnExit,
    in: isOpen,
    reverse = true,
    initialScale = 0.95,
    className,
    transition,
    transitionEnd,
    delay
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["unmountOnExit", "in", "reverse", "initialScale", "className", "transition", "transitionEnd", "delay"]);

  var show = unmountOnExit ? isOpen && unmountOnExit : true;
  var animate = isOpen || unmountOnExit ? "enter" : "exit";
  var custom = {
    initialScale,
    reverse,
    transition,
    transitionEnd,
    delay
  };
  return /*#__PURE__*/React.createElement(AnimatePresence, {
    custom: custom
  }, show && /*#__PURE__*/React.createElement(motion.div, _extends({
    ref: ref,
    className: cx("chakra-offset-slide", className)
  }, scaleFadeConfig, {
    animate: animate,
    custom: custom
  }, rest)));
});

if (__DEV__) {
  ScaleFade.displayName = "ScaleFade";
}
//# sourceMappingURL=scale-fade.js.map