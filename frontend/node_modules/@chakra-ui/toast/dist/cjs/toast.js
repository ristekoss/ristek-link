"use strict";

exports.__esModule = true;
exports.Toast = void 0;

var _hooks = require("@chakra-ui/hooks");

var _utils = require("@chakra-ui/utils");

var _alert = _interopRequireDefault(require("@reach/alert"));

var _framerMotion = require("framer-motion");

var React = _interopRequireWildcard(require("react"));

var _toast = require("./toast.utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @todo After Gerrit refactors this implementation,
 * allow users to change the toast transition direction from
 * a `ToastProvider` component.
 *
 * Here's an API example:
 *
 * ```jsx
 * <ToastProvider
 *   motion={customVariants}
 *   component={CustomToastComponent}
 *   autoCloseTimeout={3000}
 *   toastSpacing={32} // this will control the `margin` value applied
 * >
 * </ToastProvider>
 * ```
 */
var toastMotionVariants = {
  initial: function initial(props) {
    var _ref;

    var position = props.position;
    var dir = ["top", "bottom"].includes(position) ? "y" : "x";
    var factor = ["top-right", "bottom-right"].includes(position) ? 1 : -1;
    if (position === "bottom") factor = 1;
    return _ref = {
      opacity: 0
    }, _ref[dir] = factor * 24, _ref;
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1]
    }
  }
};

var Toast = function Toast(props) {
  var id = props.id,
      message = props.message,
      onCloseComplete = props.onCloseComplete,
      onRequestRemove = props.onRequestRemove,
      _props$requestClose = props.requestClose,
      requestClose = _props$requestClose === void 0 ? false : _props$requestClose,
      _props$position = props.position,
      position = _props$position === void 0 ? "bottom" : _props$position,
      _props$duration = props.duration,
      duration = _props$duration === void 0 ? 5000 : _props$duration;

  var _React$useState = React.useState(duration),
      delay = _React$useState[0],
      setDelay = _React$useState[1];

  var isPresent = (0, _framerMotion.useIsPresent)();
  (0, _hooks.useUpdateEffect)(function () {
    if (!isPresent) {
      onCloseComplete == null ? void 0 : onCloseComplete();
    }
  }, [isPresent]);
  (0, _hooks.useUpdateEffect)(function () {
    setDelay(duration);
  }, [duration]);

  var onMouseEnter = function onMouseEnter() {
    return setDelay(null);
  };

  var onMouseLeave = function onMouseLeave() {
    return setDelay(duration);
  };

  var close = function close() {
    if (isPresent) onRequestRemove();
  };

  React.useEffect(function () {
    if (isPresent && requestClose) {
      onRequestRemove();
    }
  }, [isPresent, requestClose, onRequestRemove]);
  (0, _hooks.useTimeout)(close, delay);
  var style = React.useMemo(function () {
    return (0, _toast.getToastStyle)(position);
  }, [position]);
  return /*#__PURE__*/React.createElement(_framerMotion.motion.li, {
    layout: true,
    className: "chakra-toast",
    variants: toastMotionVariants,
    initial: "initial",
    animate: "animate",
    exit: "exit",
    onHoverStart: onMouseEnter,
    onHoverEnd: onMouseLeave,
    custom: {
      position: position
    },
    style: style
  }, /*#__PURE__*/React.createElement(_alert["default"], {
    className: "chakra-toast__inner",
    style: {
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: "0.5rem"
    }
  }, (0, _utils.isFunction)(message) ? message({
    id: id,
    onClose: close
  }) : message));
};

exports.Toast = Toast;

if (_utils.__DEV__) {
  Toast.displayName = "Toast";
}
//# sourceMappingURL=toast.js.map