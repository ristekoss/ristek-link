"use strict";

exports.__esModule = true;
exports.useOutsideClick = useOutsideClick;

var _utils = require("@chakra-ui/utils");

var _react = require("react");

var _useCallbackRef = require("./use-callback-ref");

/**
 * Example, used in components like Dialogs and Popovers so they can close
 * when a user clicks outside them.
 */
function useOutsideClick(props) {
  var ref = props.ref,
      handler = props.handler;
  var savedHandler = (0, _useCallbackRef.useCallbackRef)(handler);
  var stateRef = (0, _react.useRef)({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false
  });
  var state = stateRef.current;
  (0, _react.useEffect)(function () {
    var onPointerDown = function onPointerDown(e) {
      if (isValidEvent(e, ref)) {
        state.isPointerDown = true;
      }
    };

    var onMouseUp = function onMouseUp(event) {
      if (state.ignoreEmulatedMouseEvents) {
        state.ignoreEmulatedMouseEvents = false;
        return;
      }

      if (state.isPointerDown && handler && isValidEvent(event, ref)) {
        state.isPointerDown = false;
        savedHandler(event);
      }
    };

    var onTouchEnd = function onTouchEnd(event) {
      state.ignoreEmulatedMouseEvents = true;

      if (handler && state.isPointerDown && isValidEvent(event, ref)) {
        state.isPointerDown = false;
        savedHandler(event);
      }
    };

    var doc = (0, _utils.getOwnerDocument)(ref.current);
    doc.addEventListener("mousedown", onPointerDown, true);
    doc.addEventListener("mouseup", onMouseUp, true);
    doc.addEventListener("touchstart", onPointerDown, true);
    doc.addEventListener("touchend", onTouchEnd, true);
    return function () {
      doc.removeEventListener("mousedown", onPointerDown, true);
      doc.removeEventListener("mouseup", onMouseUp, true);
      doc.removeEventListener("touchstart", onPointerDown, true);
      doc.removeEventListener("touchend", onTouchEnd, true);
    };
  }, [handler, ref, savedHandler, state]);
}

function isValidEvent(event, ref) {
  var _ref$current;

  var target = event.target;
  if (event.button > 0) return false; // if the event target is no longer in the document

  if (target) {
    var doc = (0, _utils.getOwnerDocument)(target);
    if (!doc.body.contains(target)) return false;
  }

  return !((_ref$current = ref.current) != null && _ref$current.contains(target));
}
//# sourceMappingURL=use-outside-click.js.map