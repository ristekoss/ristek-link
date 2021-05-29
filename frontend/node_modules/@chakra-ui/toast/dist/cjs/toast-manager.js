"use strict";

exports.__esModule = true;
exports.ToastManager = void 0;

var _utils = require("@chakra-ui/utils");

var _framerMotion = require("framer-motion");

var React = _interopRequireWildcard(require("react"));

var _toast = require("./toast");

var _toast2 = require("./toast.utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Manages the creation, and removal of toasts
 * across all corners ("top", "bottom", etc.)
 */
var ToastManager = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(ToastManager, _React$Component);

  /**
   * Static id counter to create unique ids
   * for each toast
   */

  /**
   * State to track all the toast across all positions
   */
  function ToastManager(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      top: [],
      "top-left": [],
      "top-right": [],
      "bottom-left": [],
      bottom: [],
      "bottom-right": []
    });

    _defineProperty(_assertThisInitialized(_this), "notify", function (message, options) {
      var toast = _this.createToast(message, options);

      var position = toast.position,
          id = toast.id;

      _this.setState(function (prevToasts) {
        var _extends2;

        var isTop = position.includes("top");
        /**
         * - If the toast is positioned at the top edges, the
         * recent toast stacks on top of the other toasts.
         *
         * - If the toast is positioned at the bottom edges, the recent
         * toast stacks below the other toasts.
         */

        var toasts = isTop ? [toast].concat(prevToasts[position]) : [].concat(prevToasts[position], [toast]);
        return _extends({}, prevToasts, (_extends2 = {}, _extends2[position] = toasts, _extends2));
      });

      return id;
    });

    _defineProperty(_assertThisInitialized(_this), "updateToast", function (id, options) {
      _this.setState(function (prevState) {
        var nextState = _extends({}, prevState);

        var _findToast = (0, _toast2.findToast)(nextState, id),
            position = _findToast.position,
            index = _findToast.index;

        if (position && index !== -1) {
          nextState[position][index] = _extends({}, nextState[position][index], options);
        }

        return nextState;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeAll", function (_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          positions = _ref.positions;

      // only one setState here for perf reasons
      // instead of spamming this.closeToast
      _this.setState(function (prev) {
        var allPositions = ["bottom", "bottom-right", "bottom-left", "top", "top-left", "top-right"];
        var positionsToClose = positions != null ? positions : allPositions;
        return positionsToClose.reduce(function (acc, position) {
          acc[position] = prev[position].map(function (toast) {
            return _extends({}, toast, {
              requestClose: true
            });
          });
          return acc;
        }, {});
      });
    });

    _defineProperty(_assertThisInitialized(_this), "createToast", function (message, options) {
      var _options$id, _options$position;

      ToastManager.counter += 1;
      var id = (_options$id = options.id) != null ? _options$id : ToastManager.counter;
      var position = (_options$position = options.position) != null ? _options$position : "top";
      return {
        id: id,
        message: message,
        position: position,
        duration: options.duration,
        onCloseComplete: options.onCloseComplete,
        onRequestRemove: function onRequestRemove() {
          return _this.removeToast(String(id), position);
        },
        status: options.status,
        requestClose: false
      };
    });

    _defineProperty(_assertThisInitialized(_this), "closeToast", function (id) {
      _this.setState(function (prevState) {
        var _extends3;

        var position = (0, _toast2.getToastPosition)(prevState, id);
        if (!position) return prevState;
        return _extends({}, prevState, (_extends3 = {}, _extends3[position] = prevState[position].map(function (toast) {
          // id may be string or number
          // eslint-disable-next-line eqeqeq
          if (toast.id == id) {
            return _extends({}, toast, {
              requestClose: true
            });
          }

          return toast;
        }), _extends3));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "removeToast", function (id, position) {
      _this.setState(function (prevState) {
        var _extends4;

        return _extends({}, prevState, (_extends4 = {}, _extends4[position] = prevState[position].filter(function (toast) {
          return toast.id != id;
        }), _extends4));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "isVisible", function (id) {
      var _findToast2 = (0, _toast2.findToast)(_this.state, id),
          position = _findToast2.position;

      return Boolean(position);
    });

    _defineProperty(_assertThisInitialized(_this), "getStyle", function (position) {
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
        margin: margin,
        top: top,
        bottom: bottom,
        right: right,
        left: left
      };
    });

    var methods = {
      notify: _this.notify,
      closeAll: _this.closeAll,
      close: _this.closeToast,
      update: _this.updateToast,
      isActive: _this.isVisible
    };
    props.notify(methods);
    return _this;
  }
  /**
   * Function to actually create a toast and add it
   * to state at the specified position
   */


  var _proto = ToastManager.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return (0, _utils.objectKeys)(this.state).map(function (position) {
      var toasts = _this2.state[position];
      return /*#__PURE__*/React.createElement("ul", {
        key: position,
        id: "chakra-toast-manager-" + position,
        style: _this2.getStyle(position)
      }, /*#__PURE__*/React.createElement(_framerMotion.AnimatePresence, {
        initial: false
      }, toasts.map(function (toast) {
        return /*#__PURE__*/React.createElement(_toast.Toast, _extends({
          key: toast.id
        }, toast));
      })));
    });
  };

  return ToastManager;
}(React.Component);

exports.ToastManager = ToastManager;

_defineProperty(ToastManager, "counter", 0);
//# sourceMappingURL=toast-manager.js.map