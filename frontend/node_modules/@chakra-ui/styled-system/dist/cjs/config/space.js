"use strict";

exports.__esModule = true;
exports.space = void 0;

var _utils = require("../utils");

var space = {
  margin: _utils.t.spaceT("margin"),
  marginTop: _utils.t.spaceT("marginTop"),
  marginBlockStart: _utils.t.spaceT("marginBlockStart"),
  marginRight: _utils.t.spaceT("marginRight"),
  marginInlineEnd: _utils.t.spaceT("marginInlineEnd"),
  marginBottom: _utils.t.spaceT("marginBottom"),
  marginBlockEnd: _utils.t.spaceT("marginBlockEnd"),
  marginLeft: _utils.t.spaceT("marginLeft"),
  marginInlineStart: _utils.t.spaceT("marginInlineStart"),
  marginX: _utils.t.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: _utils.t.spaceT("marginInline"),
  marginY: _utils.t.spaceT(["marginTop", "marginBottom"]),
  marginBlock: _utils.t.spaceT("marginBlock"),
  padding: _utils.t.space("padding"),
  paddingTop: _utils.t.space("paddingTop"),
  paddingBlockStart: _utils.t.space("paddingBlockStart"),
  paddingRight: _utils.t.space("paddingRight"),
  paddingBottom: _utils.t.space("paddingBottom"),
  paddingBlockEnd: _utils.t.space("paddingBlockEnd"),
  paddingLeft: _utils.t.space("paddingLeft"),
  paddingInlineStart: _utils.t.space("paddingInlineStart"),
  paddingInlineEnd: _utils.t.space("paddingInlineEnd"),
  paddingX: _utils.t.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: _utils.t.space("paddingInline"),
  paddingY: _utils.t.space(["paddingTop", "paddingBottom"]),
  paddingBlock: _utils.t.space("paddingBlock")
};
exports.space = space;
Object.assign(space, {
  m: space.margin,
  mt: space.marginTop,
  mr: space.marginRight,
  me: space.marginInlineEnd,
  marginEnd: space.marginInlineEnd,
  mb: space.marginBottom,
  ml: space.marginLeft,
  ms: space.marginInlineStart,
  marginStart: space.marginInlineStart,
  mx: space.marginX,
  my: space.marginY,
  p: space.padding,
  pt: space.paddingTop,
  py: space.paddingY,
  px: space.paddingX,
  pb: space.paddingBottom,
  pl: space.paddingLeft,
  ps: space.paddingInlineStart,
  paddingStart: space.paddingInlineStart,
  pr: space.paddingRight,
  pe: space.paddingInlineEnd,
  paddingEnd: space.paddingInlineEnd
});
/**
 * Types for space related CSS properties
 */
//# sourceMappingURL=space.js.map