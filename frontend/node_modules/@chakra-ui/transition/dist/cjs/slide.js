"use strict";

exports.__esModule = true;
exports.Slide = void 0;

var _utils = require("@chakra-ui/utils");

var _framerMotion = require("framer-motion");

var React = _interopRequireWildcard(require("react"));

var _transitionUtils = require("./transition-utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var defaultTransition = {
  exit: {
    duration: 0.15,
    ease: _transitionUtils.TransitionEasings.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
};
var variants = {
  exit: function exit(_ref) {
    var _transition$exit;

    var direction = _ref.direction,
        transition = _ref.transition,
        transitionEnd = _ref.transitionEnd,
        delay = _ref.delay;

    var _slideTransition = (0, _transitionUtils.slideTransition)({
      direction: direction
    }),
        exitStyles = _slideTransition.exit;

    return _extends({}, exitStyles, {
      transition: (_transition$exit = transition == null ? void 0 : transition.exit) != null ? _transition$exit : _transitionUtils.withDelay.exit(defaultTransition.exit, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit
    });
  },
  enter: function enter(_ref2) {
    var _transition$enter;

    var direction = _ref2.direction,
        transitionEnd = _ref2.transitionEnd,
        transition = _ref2.transition,
        delay = _ref2.delay;

    var _slideTransition2 = (0, _transitionUtils.slideTransition)({
      direction: direction
    }),
        enterStyles = _slideTransition2.enter;

    return _extends({}, enterStyles, {
      transition: (_transition$enter = transition == null ? void 0 : transition.enter) != null ? _transition$enter : _transitionUtils.withDelay.enter(defaultTransition.enter, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
    });
  }
};
var Slide = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$direction = props.direction,
      direction = _props$direction === void 0 ? "right" : _props$direction,
      style = props.style,
      unmountOnExit = props.unmountOnExit,
      isOpen = props["in"],
      className = props.className,
      transition = props.transition,
      transitionEnd = props.transitionEnd,
      delay = props.delay,
      rest = _objectWithoutPropertiesLoose(props, ["direction", "style", "unmountOnExit", "in", "className", "transition", "transitionEnd", "delay"]);

  var transitionStyles = (0, _transitionUtils.slideTransition)({
    direction: direction
  });
  var computedStyle = Object.assign({
    position: "fixed"
  }, transitionStyles.position, style);
  var show = unmountOnExit ? isOpen && unmountOnExit : true;
  var animate = isOpen || unmountOnExit ? "enter" : "exit";
  var custom = {
    transitionEnd: transitionEnd,
    transition: transition,
    direction: direction,
    delay: delay
  };
  return /*#__PURE__*/React.createElement(_framerMotion.AnimatePresence, {
    custom: custom
  }, show && /*#__PURE__*/React.createElement(_framerMotion.motion.div, _extends({
    ref: ref,
    initial: "exit",
    className: (0, _utils.cx)("chakra-slide", className),
    animate: animate,
    exit: "exit",
    custom: custom,
    variants: variants,
    style: computedStyle
  }, rest)));
});
exports.Slide = Slide;

if (_utils.__DEV__) {
  Slide.displayName = "Slide";
}
//# sourceMappingURL=slide.js.map