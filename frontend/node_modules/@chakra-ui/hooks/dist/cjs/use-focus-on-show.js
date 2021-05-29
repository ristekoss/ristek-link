"use strict";

exports.__esModule = true;
exports.useFocusOnShow = useFocusOnShow;

var _utils = require("@chakra-ui/utils");

var _react = require("react");

var _useEventListener = require("./use-event-listener");

var _useUpdateEffect = require("./use-update-effect");

var defaultOptions = {
  preventScroll: true,
  shouldFocus: false
};

function useFocusOnShow(target, options) {
  if (options === void 0) {
    options = defaultOptions;
  }

  var _options = options,
      focusRef = _options.focusRef,
      preventScroll = _options.preventScroll,
      shouldFocus = _options.shouldFocus,
      visible = _options.visible;
  var element = (0, _utils.isRefObject)(target) ? target.current : target;
  var autoFocus = shouldFocus && visible;
  var onFocus = (0, _react.useCallback)(function () {
    if (!element || !autoFocus) return;
    if ((0, _utils.contains)(element, document.activeElement)) return;

    if (focusRef != null && focusRef.current) {
      (0, _utils.focus)(focusRef.current, {
        preventScroll: preventScroll,
        nextTick: true
      });
    } else {
      var tabbableEls = (0, _utils.getAllFocusable)(element);

      if (tabbableEls.length > 0) {
        (0, _utils.focus)(tabbableEls[0], {
          preventScroll: preventScroll,
          nextTick: true
        });
      }
    }
  }, [autoFocus, preventScroll, element, focusRef]);
  (0, _useUpdateEffect.useUpdateEffect)(function () {
    onFocus();
  }, [onFocus]);
  (0, _useEventListener.useEventListener)("transitionend", onFocus, element);
}
//# sourceMappingURL=use-focus-on-show.js.map