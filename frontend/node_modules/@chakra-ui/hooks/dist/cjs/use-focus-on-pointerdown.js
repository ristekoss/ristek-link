"use strict";

exports.__esModule = true;
exports.useFocusOnPointerDown = useFocusOnPointerDown;

var _utils = require("@chakra-ui/utils");

var _usePointerEvent = require("./use-pointer-event");

/**
 * Polyfill to get `relatedTarget` working correctly consistently
 * across all browsers.
 *
 * It ensures that elements receives focus on pointer down if
 * it's not the active active element.
 *
 * @internal
 */
function useFocusOnPointerDown(props) {
  var ref = props.ref,
      elements = props.elements,
      enabled = props.enabled;
  var isSafari = (0, _utils.detectBrowser)("Safari");

  var doc = function doc() {
    return (0, _utils.getOwnerDocument)(ref.current);
  };

  (0, _usePointerEvent.usePointerEvent)(doc, "pointerdown", function (event) {
    if (!isSafari || !enabled) return;
    var target = event.target;
    var els = elements != null ? elements : [ref];
    var isValidTarget = els.some(function (elementOrRef) {
      var el = (0, _utils.isRefObject)(elementOrRef) ? elementOrRef.current : elementOrRef;
      return (0, _utils.contains)(el, target);
    });

    if (!(0, _utils.isActiveElement)(target) && isValidTarget) {
      event.preventDefault();
      (0, _utils.focus)(target);
    }
  });
}
//# sourceMappingURL=use-focus-on-pointerdown.js.map