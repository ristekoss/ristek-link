"use strict";

exports.__esModule = true;
exports.Spacer = void 0;

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

/**
 * A flexible flex spacer that expands along the major axis of its containing flex layout.
 * It renders a `div` by default, and takes up any available space.
 *
 * @see Docs https://chakra-ui.com/docs/layout/flex#using-the-spacer
 */
var Spacer = (0, _system.chakra)("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
});
exports.Spacer = Spacer;

if (_utils.__DEV__) {
  Spacer.displayName = "Spacer";
}
//# sourceMappingURL=spacer.js.map