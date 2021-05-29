"use strict";

exports.__esModule = true;
exports.SlideFade = exports.slideFadeConfig = void 0;

var _utils = require("@chakra-ui/utils");

var _framerMotion = require("framer-motion");

var React = _interopRequireWildcard(require("react"));

var _transitionUtils = require("./transition-utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var variants = {
  initial: function initial(_ref) {
    var _transition$exit;

    var offsetX = _ref.offsetX,
        offsetY = _ref.offsetY,
        transition = _ref.transition,
        transitionEnd = _ref.transitionEnd,
        delay = _ref.delay;
    return {
      opacity: 0,
      x: offsetX,
      y: offsetY,
      transition: (_transition$exit = transition == null ? void 0 : transition.exit) != null ? _transition$exit : _transitionUtils.withDelay.exit(_transitionUtils.TransitionDefaults.exit, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit
    };
  },
  enter: function enter(_ref2) {
    var _transition$enter;

    var transition = _ref2.transition,
        transitionEnd = _ref2.transitionEnd,
        delay = _ref2.delay;
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: (_transition$enter = transition == null ? void 0 : transition.enter) != null ? _transition$enter : _transitionUtils.withDelay.enter(_transitionUtils.TransitionDefaults.enter, delay),
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.enter
    };
  },
  exit: function exit(_ref3) {
    var _transition$exit2;

    var offsetY = _ref3.offsetY,
        offsetX = _ref3.offsetX,
        transition = _ref3.transition,
        transitionEnd = _ref3.transitionEnd,
        reverse = _ref3.reverse,
        delay = _ref3.delay;
    var offset = {
      x: offsetX,
      y: offsetY
    };
    return _extends({
      opacity: 0,
      transition: (_transition$exit2 = transition == null ? void 0 : transition.exit) != null ? _transition$exit2 : _transitionUtils.withDelay.exit(_transitionUtils.TransitionDefaults.exit, delay)
    }, reverse ? _extends({}, offset, {
      transitionEnd: transitionEnd == null ? void 0 : transitionEnd.exit
    }) : {
      transitionEnd: _extends({}, offset, transitionEnd == null ? void 0 : transitionEnd.exit)
    });
  }
};
var slideFadeConfig = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: variants
};
exports.slideFadeConfig = slideFadeConfig;
var SlideFade = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var unmountOnExit = props.unmountOnExit,
      isOpen = props["in"],
      _props$reverse = props.reverse,
      reverse = _props$reverse === void 0 ? true : _props$reverse,
      className = props.className,
      _props$offsetX = props.offsetX,
      offsetX = _props$offsetX === void 0 ? 0 : _props$offsetX,
      _props$offsetY = props.offsetY,
      offsetY = _props$offsetY === void 0 ? 8 : _props$offsetY,
      transition = props.transition,
      transitionEnd = props.transitionEnd,
      delay = props.delay,
      rest = _objectWithoutPropertiesLoose(props, ["unmountOnExit", "in", "reverse", "className", "offsetX", "offsetY", "transition", "transitionEnd", "delay"]);

  var show = unmountOnExit ? isOpen && unmountOnExit : true;
  var animate = isOpen || unmountOnExit ? "enter" : "exit";
  var custom = {
    offsetX: offsetX,
    offsetY: offsetY,
    reverse: reverse,
    transition: transition,
    transitionEnd: transitionEnd,
    delay: delay
  };
  return /*#__PURE__*/React.createElement(_framerMotion.AnimatePresence, {
    custom: custom
  }, show && /*#__PURE__*/React.createElement(_framerMotion.motion.div, _extends({
    ref: ref,
    className: (0, _utils.cx)("chakra-offset-slide", className),
    custom: custom
  }, slideFadeConfig, {
    animate: animate
  }, rest)));
});
exports.SlideFade = SlideFade;

if (_utils.__DEV__) {
  SlideFade.displayName = "SlideFade";
}
//# sourceMappingURL=slide-fade.js.map