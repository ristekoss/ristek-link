"use strict";

exports.__esModule = true;
exports.shadow = void 0;

var _utils = require("../utils");

var shadow = {
  boxShadow: _utils.t.shadows("boxShadow"),
  textShadow: _utils.t.shadows("textShadow")
};
exports.shadow = shadow;
Object.assign(shadow, {
  shadow: shadow.boxShadow
});
/**
 * Types for box and text shadow properties
 */
//# sourceMappingURL=shadow.js.map