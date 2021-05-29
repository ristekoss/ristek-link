"use strict";

exports.__esModule = true;
exports.determineLazyBehavior = determineLazyBehavior;

/**
 * Determines whether the children of a disclosure widget
 * should be rendered or not, depending on the lazy behavior.
 *
 * Used in accordion, tabs, popover, menu and other disclosure
 * widgets.
 */
function determineLazyBehavior(options) {
  var hasBeenSelected = options.hasBeenSelected,
      isLazy = options.isLazy,
      isSelected = options.isSelected,
      _options$lazyBehavior = options.lazyBehavior,
      lazyBehavior = _options$lazyBehavior === void 0 ? "unmount" : _options$lazyBehavior; // if not lazy, always render the disclosure's content

  if (!isLazy) return true; // if the diclosure is selected, render the disclosure's content

  if (isSelected) return true; // if the disclosure was selected but not active, keep its content active

  if (lazyBehavior === "keepMounted" && hasBeenSelected) return true;
  return false;
}
//# sourceMappingURL=lazy.js.map