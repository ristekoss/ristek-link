"use strict";

exports.__esModule = true;
exports.ModalTransition = void 0;

var _system = require("@chakra-ui/system");

var _transition = require("@chakra-ui/transition");

var _framerMotion = require("framer-motion");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var transitions = {
  slideInBottom: _extends({}, _transition.slideFadeConfig, {
    custom: {
      offsetY: 16,
      reverse: true
    }
  }),
  slideInRight: _extends({}, _transition.slideFadeConfig, {
    custom: {
      offsetX: 16,
      reverse: true
    }
  }),
  scale: _extends({}, _transition.scaleFadeConfig, {
    custom: {
      initialScale: 0.95,
      reverse: true
    }
  }),
  none: {}
};
var Motion = (0, _system.chakra)(_framerMotion.motion.section);
var ModalTransition = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var preset = props.preset,
      rest = _objectWithoutPropertiesLoose(props, ["preset"]);

  var motionProps = transitions[preset];
  return /*#__PURE__*/React.createElement(Motion, _extends({
    ref: ref
  }, motionProps, rest));
});
exports.ModalTransition = ModalTransition;
//# sourceMappingURL=modal-transition.js.map