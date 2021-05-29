"use strict";

exports.__esModule = true;
exports.useFocusEffect = useFocusEffect;

var _utils = require("@chakra-ui/utils");

var _useUpdateEffect = require("./use-update-effect");

/**
 * React hook to focus an element conditionally
 *
 * @param ref the ref of the element to focus
 * @param options focus management options
 */
function useFocusEffect(ref, options) {
  var shouldFocus = options.shouldFocus,
      preventScroll = options.preventScroll;
  (0, _useUpdateEffect.useUpdateEffect)(function () {
    var node = ref.current;
    if (!node || !shouldFocus) return;

    if (!(0, _utils.hasFocusWithin)(node)) {
      (0, _utils.focus)(node, {
        preventScroll: preventScroll,
        nextTick: true
      });
    }
  }, [shouldFocus, ref, preventScroll]);
}
//# sourceMappingURL=use-focus-effect.js.map