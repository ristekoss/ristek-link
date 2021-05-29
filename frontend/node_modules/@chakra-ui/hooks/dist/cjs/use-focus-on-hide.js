"use strict";

exports.__esModule = true;
exports.useFocusOnHide = useFocusOnHide;

var _utils = require("@chakra-ui/utils");

var _useUpdateEffect = require("./use-update-effect");

function preventReturnFocus(containerRef) {
  var el = containerRef.current;
  if (!el) return false;
  var activeElement = (0, _utils.getActiveElement)(el);
  if (!activeElement) return false;
  if ((0, _utils.contains)(el, activeElement)) return false;
  if ((0, _utils.isTabbable)(activeElement)) return true;
  return false;
}
/**
 * Popover hook to manage the focus when the popover closes or hides.
 *
 * We either want to return focus back to the popover trigger or
 * let focus proceed normally if user moved to another interactive
 * element in the viewport.
 */


function useFocusOnHide(containerRef, options) {
  var shouldFocusProp = options.shouldFocus,
      visible = options.visible,
      focusRef = options.focusRef;
  var shouldFocus = shouldFocusProp && !visible;
  (0, _useUpdateEffect.useUpdateEffect)(function () {
    if (!shouldFocus) return;

    if (preventReturnFocus(containerRef)) {
      return;
    }

    var el = (focusRef == null ? void 0 : focusRef.current) || containerRef.current;

    if (el) {
      (0, _utils.focus)(el, {
        nextTick: true
      });
    }
  }, [shouldFocus, containerRef, focusRef]);
}
//# sourceMappingURL=use-focus-on-hide.js.map