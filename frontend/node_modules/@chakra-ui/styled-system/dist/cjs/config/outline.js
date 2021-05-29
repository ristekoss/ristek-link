"use strict";

exports.__esModule = true;
exports.outline = void 0;

var _utils = require("../utils");

/**
 * The parser configuration for common outline properties
 */
var outline = {
  outline: true,
  outlineOffset: true,
  outlineColor: _utils.t.colors("outlineColor"),
  ringColor: _utils.t.prop("--chakra-ring-color", "colors"),
  ringOffsetWidth: _utils.t.prop("--chakra-ring-offset"),
  ringOffsetColor: _utils.t.prop("--chakra-ring-offset-color", "colors"),
  ringWidth: _utils.t.prop("--chakra-ring-offset"),
  ringInset: _utils.t.prop("--chakra-ring-inset")
};
exports.outline = outline;
//# sourceMappingURL=outline.js.map