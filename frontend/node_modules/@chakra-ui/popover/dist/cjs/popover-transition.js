"use strict";

exports.__esModule = true;
exports.PopoverTransition = void 0;

var _system = require("@chakra-ui/system");

var _framerMotion = require("framer-motion");

var _utils = require("@chakra-ui/utils");

var _react = _interopRequireDefault(require("react"));

var _popoverContext = require("./popover-context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var mergeVariants = function mergeVariants(variants) {
  if (!variants) return;
  return (0, _utils.mergeWith)(variants, {
    enter: {
      visibility: "visible"
    },
    exit: {
      transitionEnd: {
        visibility: "hidden"
      }
    }
  });
};

var scaleFade = {
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: [0.4, 0, 1, 1]
    }
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: [0, 0, 0.2, 1]
    }
  }
};
var Section = (0, _framerMotion.motion)(_system.chakra.section);

var PopoverTransition = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var _usePopoverContext = (0, _popoverContext.usePopoverContext)(),
      isOpen = _usePopoverContext.isOpen;

  return /*#__PURE__*/_react["default"].createElement(Section, _extends({
    ref: ref,
    variants: mergeVariants(props.variants)
  }, props, {
    initial: false,
    animate: isOpen ? "enter" : "exit"
  }));
});

exports.PopoverTransition = PopoverTransition;
PopoverTransition.defaultProps = {
  variants: scaleFade
};
//# sourceMappingURL=popover-transition.js.map