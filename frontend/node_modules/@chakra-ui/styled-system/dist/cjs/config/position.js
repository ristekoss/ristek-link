"use strict";

exports.__esModule = true;
exports.position = void 0;

var _utils = require("../utils");

var position = {
  position: true,
  pos: _utils.t.prop("position"),
  zIndex: _utils.t.prop("zIndex", "zIndices"),
  inset: _utils.t.spaceT(["top", "right", "bottom", "left"]),
  insetX: _utils.t.spaceT(["left", "right"]),
  insetInline: _utils.t.spaceT("insetInline"),
  insetY: _utils.t.spaceT(["top", "bottom"]),
  insetBlock: _utils.t.spaceT("insetBlock"),
  top: _utils.t.spaceT("top"),
  insetBlockStart: _utils.t.spaceT("insetBlockStart"),
  bottom: _utils.t.spaceT("bottom"),
  insetBlockEnd: _utils.t.spaceT("insetBlockEnd"),
  left: _utils.t.spaceT("left"),
  insetInlineStart: _utils.t.logical({
    scale: "space",
    property: {
      ltr: "left",
      rtl: "right"
    }
  }),
  right: _utils.t.spaceT("right"),
  insetInlineEnd: _utils.t.logical({
    scale: "space",
    property: {
      ltr: "right",
      rtl: "left"
    }
  })
};
exports.position = position;
Object.assign(position, {
  insetStart: position.insetInlineStart,
  insetEnd: position.insetInlineEnd
});
/**
 * Types for position CSS properties
 */
//# sourceMappingURL=position.js.map