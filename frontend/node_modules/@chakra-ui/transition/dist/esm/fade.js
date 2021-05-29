function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { cx, __DEV__ } from "@chakra-ui/utils";
import { AnimatePresence, motion } from "framer-motion";
import * as React from "react";
import { TransitionDefaults, withDelay } from "./transition-utils";
var variants = {
  enter: function enter(_temp) {
    var _transition$enter;

    var {
      transition,
      transitionEnd,
      delay
    } = _temp === void 0 ? {} : _temp;
    return {
      opacity: 1,
      transition: (_transition$enter = transition == null ? void 0 : transition.enter) != null ? _transition$enter : withDelay.enter(TransitionDefaults.enter, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
    };
  },
  exit: function exit(_temp2) {
    var _transition$exit;

    var {
      transition,
      transitionEnd,
      delay
    } = _temp2 === void 0 ? {} : _temp2;
    return {
      opacity: 0,
      transition: (_transition$exit = transition == null ? void 0 : transition.exit) != null ? _transition$exit : withDelay.exit(TransitionDefaults.exit, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit
    };
  }
};
export var fadeConfig = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: variants
};
export var Fade = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
    unmountOnExit,
    in: isOpen,
    className,
    transition,
    transitionEnd,
    delay
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["unmountOnExit", "in", "className", "transition", "transitionEnd", "delay"]);

  var animate = isOpen || unmountOnExit ? "enter" : "exit";
  var show = unmountOnExit ? isOpen && unmountOnExit : true;
  var custom = {
    transition,
    transitionEnd,
    delay
  };
  return /*#__PURE__*/React.createElement(AnimatePresence, {
    custom: custom
  }, show && /*#__PURE__*/React.createElement(motion.div, _extends({
    ref: ref,
    className: cx("chakra-fade", className),
    custom: custom
  }, fadeConfig, {
    animate: animate
  }, rest)));
});

if (__DEV__) {
  Fade.displayName = "Fade";
}
//# sourceMappingURL=fade.js.map