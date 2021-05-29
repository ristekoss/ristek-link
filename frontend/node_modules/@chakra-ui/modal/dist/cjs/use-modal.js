"use strict";

exports.__esModule = true;
exports.useModal = useModal;
exports.useAriaHidden = useAriaHidden;

var _hooks = require("@chakra-ui/hooks");

var _utils = require("@chakra-ui/utils");

var _reactUtils = require("@chakra-ui/react-utils");

var _ariaHidden = require("aria-hidden");

var _react = require("react");

var _modalManager = require("./modal-manager");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Modal hook that manages all the logic for the modal dialog widget
 * and returns prop getters, state and actions.
 *
 * @param props
 */
function useModal(props) {
  var isOpen = props.isOpen,
      onClose = props.onClose,
      id = props.id,
      _props$closeOnOverlay = props.closeOnOverlayClick,
      closeOnOverlayClick = _props$closeOnOverlay === void 0 ? true : _props$closeOnOverlay,
      _props$closeOnEsc = props.closeOnEsc,
      closeOnEsc = _props$closeOnEsc === void 0 ? true : _props$closeOnEsc,
      _props$useInert = props.useInert,
      useInert = _props$useInert === void 0 ? true : _props$useInert,
      onOverlayClickProp = props.onOverlayClick,
      onEsc = props.onEsc;
  var dialogRef = (0, _react.useRef)(null);
  var overlayRef = (0, _react.useRef)(null);

  var _useIds = (0, _hooks.useIds)(id, "chakra-modal", "chakra-modal--header", "chakra-modal--body"),
      dialogId = _useIds[0],
      headerId = _useIds[1],
      bodyId = _useIds[2];
  /**
   * Hook used to polyfill `aria-modal` for older browsers.
   * It uses `aria-hidden` to all other nodes.
   *
   * @see https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
   */


  useAriaHidden(dialogRef, isOpen && useInert);
  /**
   * Hook use to manage multiple or nested modals
   */

  (0, _modalManager.useModalManager)(dialogRef, isOpen);
  var mouseDownTarget = (0, _react.useRef)(null);
  var onMouseDown = (0, _react.useCallback)(function (event) {
    mouseDownTarget.current = event.target;
  }, []);
  var onKeyDown = (0, _react.useCallback)(function (event) {
    if (event.key === "Escape") {
      event.stopPropagation();

      if (closeOnEsc) {
        onClose == null ? void 0 : onClose();
      }

      onEsc == null ? void 0 : onEsc();
    }
  }, [closeOnEsc, onClose, onEsc]);

  var _useState = (0, _react.useState)(false),
      headerMounted = _useState[0],
      setHeaderMounted = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      bodyMounted = _useState2[0],
      setBodyMounted = _useState2[1];

  var getDialogProps = (0, _react.useCallback)(function (props, ref) {
    if (props === void 0) {
      props = {};
    }

    if (ref === void 0) {
      ref = null;
    }

    return _extends({
      role: "dialog"
    }, props, {
      ref: (0, _reactUtils.mergeRefs)(ref, dialogRef),
      id: dialogId,
      tabIndex: -1,
      "aria-modal": true,
      "aria-labelledby": headerMounted ? headerId : undefined,
      "aria-describedby": bodyMounted ? bodyId : undefined,
      onClick: (0, _utils.callAllHandlers)(props.onClick, function (event) {
        return event.stopPropagation();
      })
    });
  }, [bodyId, bodyMounted, dialogId, headerId, headerMounted]);
  var onOverlayClick = (0, _react.useCallback)(function (event) {
    event.stopPropagation();
    /**
     * Make sure the event starts and ends on the same DOM element.
     *
     * This is used to prevent the modal from closing when you
     * start dragging from the content, and release drag outside the content.
     *
     * We prevent this because it is technically not a considered "click outside"
     */

    if (mouseDownTarget.current !== event.target) return;
    /**
     * When you click on the overlay, we want to remove only the topmost modal
     */

    if (!_modalManager.manager.isTopModal(dialogRef)) return;

    if (closeOnOverlayClick) {
      onClose == null ? void 0 : onClose();
    }

    onOverlayClickProp == null ? void 0 : onOverlayClickProp();
  }, [onClose, closeOnOverlayClick, onOverlayClickProp]);
  var getDialogContainerProps = (0, _react.useCallback)(function (props, ref) {
    if (props === void 0) {
      props = {};
    }

    if (ref === void 0) {
      ref = null;
    }

    return _extends({}, props, {
      ref: (0, _reactUtils.mergeRefs)(ref, overlayRef),
      onClick: (0, _utils.callAllHandlers)(props.onClick, onOverlayClick),
      onKeyDown: (0, _utils.callAllHandlers)(props.onKeyDown, onKeyDown),
      onMouseDown: (0, _utils.callAllHandlers)(props.onMouseDown, onMouseDown)
    });
  }, [onKeyDown, onMouseDown, onOverlayClick]);
  return {
    isOpen: isOpen,
    onClose: onClose,
    headerId: headerId,
    bodyId: bodyId,
    setBodyMounted: setBodyMounted,
    setHeaderMounted: setHeaderMounted,
    dialogRef: dialogRef,
    overlayRef: overlayRef,
    getDialogProps: getDialogProps,
    getDialogContainerProps: getDialogContainerProps
  };
}

/**
 * Modal hook to polyfill `aria-modal`.
 *
 * It applies `aria-hidden` to elements behind the modal
 * to indicate that they're `inert`.
 *
 * @param ref React ref of the node
 * @param shouldHide whether `aria-hidden` should be applied
 */
function useAriaHidden(ref, shouldHide) {
  (0, _react.useEffect)(function () {
    if (!ref.current) return undefined;
    var undo = null;

    if (shouldHide && ref.current) {
      undo = (0, _ariaHidden.hideOthers)(ref.current);
    }

    return function () {
      if (shouldHide) {
        undo == null ? void 0 : undo();
      }
    };
  }, [shouldHide, ref]);
}
//# sourceMappingURL=use-modal.js.map