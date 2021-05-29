function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { objectKeys } from "@chakra-ui/utils";
import { AnimatePresence } from "framer-motion";
import * as React from "react";
import { Toast } from "./toast";
import { findToast, getToastPosition } from "./toast.utils";

/**
 * Manages the creation, and removal of toasts
 * across all corners ("top", "bottom", etc.)
 */
export class ToastManager extends React.Component {
  /**
   * Static id counter to create unique ids
   * for each toast
   */

  /**
   * State to track all the toast across all positions
   */
  constructor(props) {
    var _this;

    super(props);
    _this = this;

    _defineProperty(this, "state", {
      top: [],
      "top-left": [],
      "top-right": [],
      "bottom-left": [],
      bottom: [],
      "bottom-right": []
    });

    _defineProperty(this, "notify", (message, options) => {
      var toast = this.createToast(message, options);
      var {
        position,
        id
      } = toast;
      this.setState(prevToasts => {
        var isTop = position.includes("top");
        /**
         * - If the toast is positioned at the top edges, the
         * recent toast stacks on top of the other toasts.
         *
         * - If the toast is positioned at the bottom edges, the recent
         * toast stacks below the other toasts.
         */

        var toasts = isTop ? [toast, ...prevToasts[position]] : [...prevToasts[position], toast];
        return _extends({}, prevToasts, {
          [position]: toasts
        });
      });
      return id;
    });

    _defineProperty(this, "updateToast", (id, options) => {
      this.setState(prevState => {
        var nextState = _extends({}, prevState);

        var {
          position,
          index
        } = findToast(nextState, id);

        if (position && index !== -1) {
          nextState[position][index] = _extends({}, nextState[position][index], options);
        }

        return nextState;
      });
    });

    _defineProperty(this, "closeAll", function (_temp) {
      var {
        positions
      } = _temp === void 0 ? {} : _temp;

      // only one setState here for perf reasons
      // instead of spamming this.closeToast
      _this.setState(prev => {
        var allPositions = ["bottom", "bottom-right", "bottom-left", "top", "top-left", "top-right"];
        var positionsToClose = positions != null ? positions : allPositions;
        return positionsToClose.reduce((acc, position) => {
          acc[position] = prev[position].map(toast => _extends({}, toast, {
            requestClose: true
          }));
          return acc;
        }, {});
      });
    });

    _defineProperty(this, "createToast", (message, options) => {
      var _options$id, _options$position;

      ToastManager.counter += 1;
      var id = (_options$id = options.id) != null ? _options$id : ToastManager.counter;
      var position = (_options$position = options.position) != null ? _options$position : "top";
      return {
        id,
        message,
        position,
        duration: options.duration,
        onCloseComplete: options.onCloseComplete,
        onRequestRemove: () => this.removeToast(String(id), position),
        status: options.status,
        requestClose: false
      };
    });

    _defineProperty(this, "closeToast", id => {
      this.setState(prevState => {
        var position = getToastPosition(prevState, id);
        if (!position) return prevState;
        return _extends({}, prevState, {
          [position]: prevState[position].map(toast => {
            // id may be string or number
            // eslint-disable-next-line eqeqeq
            if (toast.id == id) {
              return _extends({}, toast, {
                requestClose: true
              });
            }

            return toast;
          })
        });
      });
    });

    _defineProperty(this, "removeToast", (id, position) => {
      this.setState(prevState => _extends({}, prevState, {
        // id may be string or number
        // eslint-disable-next-line eqeqeq
        [position]: prevState[position].filter(toast => toast.id != id)
      }));
    });

    _defineProperty(this, "isVisible", id => {
      var {
        position
      } = findToast(this.state, id);
      return Boolean(position);
    });

    _defineProperty(this, "getStyle", position => {
      var isTopOrBottom = position === "top" || position === "bottom";
      var margin = isTopOrBottom ? "0 auto" : undefined;
      var top = position.includes("top") ? "env(safe-area-inset-top, 0px)" : undefined;
      var bottom = position.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : undefined;
      var right = !position.includes("left") ? "env(safe-area-inset-right, 0px)" : undefined;
      var left = !position.includes("right") ? "env(safe-area-inset-left, 0px)" : undefined;
      return {
        position: "fixed",
        zIndex: 5500,
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
        margin,
        top,
        bottom,
        right,
        left
      };
    });

    var methods = {
      notify: this.notify,
      closeAll: this.closeAll,
      close: this.closeToast,
      update: this.updateToast,
      isActive: this.isVisible
    };
    props.notify(methods);
  }
  /**
   * Function to actually create a toast and add it
   * to state at the specified position
   */


  render() {
    return objectKeys(this.state).map(position => {
      var toasts = this.state[position];
      return /*#__PURE__*/React.createElement("ul", {
        key: position,
        id: "chakra-toast-manager-" + position,
        style: this.getStyle(position)
      }, /*#__PURE__*/React.createElement(AnimatePresence, {
        initial: false
      }, toasts.map(toast => /*#__PURE__*/React.createElement(Toast, _extends({
        key: toast.id
      }, toast)))));
    });
  }

}

_defineProperty(ToastManager, "counter", 0);
//# sourceMappingURL=toast-manager.js.map