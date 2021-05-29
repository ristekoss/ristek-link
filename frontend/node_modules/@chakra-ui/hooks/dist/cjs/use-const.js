"use strict";

exports.__esModule = true;
exports.useConst = useConst;

var _react = require("react");

/**
 * Creates a constant value over the lifecycle of a component.
 *
 * Even if `useMemo` is provided an empty array as its final argument, it doesn't offer
 * a guarantee that it won't re-run for performance reasons later on. By using `useConstant`
 * you can ensure that initialisers don't execute twice or more.
 */
function useConst(init) {
  var ref = (0, _react.useRef)(null);

  if (ref.current === null) {
    ref.current = typeof init === "function" ? init() : init;
  }

  return ref.current;
}
//# sourceMappingURL=use-const.js.map