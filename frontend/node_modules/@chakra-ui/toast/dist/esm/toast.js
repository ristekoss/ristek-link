import { useTimeout, useUpdateEffect } from "@chakra-ui/hooks";
import { isFunction, __DEV__ } from "@chakra-ui/utils";
import ReachAlert from "@reach/alert";
import { motion, useIsPresent } from "framer-motion";
import * as React from "react";
import { getToastStyle } from "./toast.utils";
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
  initial: props => {
    var {
      position
    } = props;
    var dir = ["top", "bottom"].includes(position) ? "y" : "x";
    var factor = ["top-right", "bottom-right"].includes(position) ? 1 : -1;
    if (position === "bottom") factor = 1;
    return {
      opacity: 0,
      [dir]: factor * 24
    };
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
export var Toast = props => {
  var {
    id,
    message,
    onCloseComplete,
    onRequestRemove,
    requestClose = false,
    position = "bottom",
    duration = 5000
  } = props;
  var [delay, setDelay] = React.useState(duration);
  var isPresent = useIsPresent();
  useUpdateEffect(() => {
    if (!isPresent) {
      onCloseComplete == null ? void 0 : onCloseComplete();
    }
  }, [isPresent]);
  useUpdateEffect(() => {
    setDelay(duration);
  }, [duration]);

  var onMouseEnter = () => setDelay(null);

  var onMouseLeave = () => setDelay(duration);

  var close = () => {
    if (isPresent) onRequestRemove();
  };

  React.useEffect(() => {
    if (isPresent && requestClose) {
      onRequestRemove();
    }
  }, [isPresent, requestClose, onRequestRemove]);
  useTimeout(close, delay);
  var style = React.useMemo(() => getToastStyle(position), [position]);
  return /*#__PURE__*/React.createElement(motion.li, {
    layout: true,
    className: "chakra-toast",
    variants: toastMotionVariants,
    initial: "initial",
    animate: "animate",
    exit: "exit",
    onHoverStart: onMouseEnter,
    onHoverEnd: onMouseLeave,
    custom: {
      position
    },
    style: style
  }, /*#__PURE__*/React.createElement(ReachAlert, {
    className: "chakra-toast__inner",
    style: {
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: "0.5rem"
    }
  }, isFunction(message) ? message({
    id,
    onClose: close
  }) : message));
};

if (__DEV__) {
  Toast.displayName = "Toast";
}
//# sourceMappingURL=toast.js.map