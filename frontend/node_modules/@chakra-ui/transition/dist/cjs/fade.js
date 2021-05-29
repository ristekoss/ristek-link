"use strict";

exports.__esModule = true;
exports.Fade = exports.fadeConfig = void 0;

var _utils = require("@chakra-ui/utils");

var _framerMotion = require("framer-motion");

var React = _interopRequireWildcard(require("react"));

var _transitionUtils = require("./transition-utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var variants = {
  enter: function enter(_temp) {
    var _transition$enter;

    var _ref = _temp === void 0 ? {} : _temp,
        transition = _ref.transition,
        transitionEnd = _ref.transitionEnd,
        delay = _ref.delay;

    return {
      opacity: 1,
      transition: (_transition$enter = transition == null ? void 0 : transition.enter) != null ? _transition$enter : _transitionUtils.withDelay.enter(_transitionUtils.TransitionDefaults.enter, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
    };
  },
  exit: function exit(_temp2) {
    var _transition$exit;

    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        transition = _ref2.transition,
        transitionEnd = _ref2.transitionEnd,
        delay = _ref2.delay;

    return {
      opacity: 0,
      transition: (_transition$exit = transition == null ? void 0 : transition.exit) != null ? _transition$exit : _transitionUtils.withDelay.exit(_transitionUtils.TransitionDefaults.exit, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit
    };
  }
};
var fadeConfig = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: variants
};
exports.fadeConfig = fadeConfig;
var Fade = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var unmountOnExit = props.unmountOnExit,
      isOpen = props["in"],
      className = props.className,
      transition = props.transition,
      transitionEnd = props.transitionEnd,
      delay = props.delay,
      rest = _objectWithoutPropertiesLoose(props, ["unmountOnExit", "in", "className", "transition", "transitionEnd", "delay"]);

  var animate = isOpen || unmountOnExit ? "enter" : "exit";
  var show = unmountOnExit ? isOpen && unmountOnExit : true;
  var custom = {
    transition: transition,
    transitionEnd: transitionEnd,
    delay: delay
  };
  return /*#__PURE__*/React.createElement(_framerMotion.AnimatePresence, {
    custom: custom
  }, show && /*#__PURE__*/React.createElement(_framerMotion.motion.div, _extends({
    ref: ref,
    className: (0, _utils.cx)("chakra-fade", className),
    custom: custom
  }, fadeConfig, {
    animate: animate
  }, rest)));
});
exports.Fade = Fade;

if (_utils.__DEV__) {
  Fade.displayName = "Fade";
}
//# sourceMappingURL=fade.js.map