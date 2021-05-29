"use strict";

exports.__esModule = true;
exports.border = void 0;

var _utils = require("../utils");

var border = {
  border: _utils.t.borders("border"),
  borderWidth: _utils.t.borderWidths("borderWidth"),
  borderStyle: _utils.t.borderStyles("borderStyle"),
  borderColor: _utils.t.colors("borderColor"),
  borderRadius: _utils.t.radii("borderRadius"),
  borderTop: _utils.t.borders("borderTop"),
  borderBlockStart: _utils.t.borders("borderBlockStart"),
  borderTopLeftRadius: _utils.t.radii("borderTopLeftRadius"),
  borderStartStartRadius: _utils.t.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: _utils.t.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: _utils.t.radii("borderTopRightRadius"),
  borderStartEndRadius: _utils.t.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: _utils.t.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: _utils.t.borders("borderRight"),
  borderInlineEnd: _utils.t.borders("borderInlineEnd"),
  borderBottom: _utils.t.borders("borderBottom"),
  borderBlockEnd: _utils.t.borders("borderBlockEnd"),
  borderBottomLeftRadius: _utils.t.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: _utils.t.radii("borderBottomRightRadius"),
  borderLeft: _utils.t.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: _utils.t.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: _utils.t.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: _utils.t.borders(["borderLeft", "borderRight"]),
  borderInline: _utils.t.borders("borderInline"),
  borderY: _utils.t.borders(["borderTop", "borderBottom"]),
  borderBlock: _utils.t.borders("borderBlock"),
  borderTopWidth: _utils.t.borderWidths("borderTopWidth"),
  borderBlockStartWidth: _utils.t.borderWidths("borderBlockStartWidth"),
  borderTopColor: _utils.t.colors("borderTopColor"),
  borderBlockStartColor: _utils.t.colors("borderBlockStartColor"),
  borderTopStyle: _utils.t.borderStyles("borderTopStyle"),
  borderBlockStartStyle: _utils.t.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: _utils.t.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: _utils.t.borderWidths("borderBlockEndWidth"),
  borderBottomColor: _utils.t.colors("borderBottomColor"),
  borderBlockEndColor: _utils.t.colors("borderBlockEndColor"),
  borderBottomStyle: _utils.t.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: _utils.t.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: _utils.t.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: _utils.t.borderWidths("borderInlineStartWidth"),
  borderLeftColor: _utils.t.colors("borderLeftColor"),
  borderInlineStartColor: _utils.t.colors("borderInlineStartColor"),
  borderLeftStyle: _utils.t.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: _utils.t.borderStyles("borderInlineStartStyle"),
  borderRightWidth: _utils.t.borderWidths("borderRightWidth"),
  borderInlineEndWidth: _utils.t.borderWidths("borderInlineEndWidth"),
  borderRightColor: _utils.t.colors("borderRightColor"),
  borderInlineEndColor: _utils.t.colors("borderInlineEndColor"),
  borderRightStyle: _utils.t.borderStyles("borderRightStyle"),
  borderInlineEndStyle: _utils.t.borderStyles("borderInlineEndStyle"),
  borderTopRadius: _utils.t.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: _utils.t.radii(["borderBottomLeftRadius", "borderBottomRightRadius"]),
  borderLeftRadius: _utils.t.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: _utils.t.radii(["borderTopRightRadius", "borderBottomRightRadius"])
};
exports.border = border;
Object.assign(border, {
  rounded: border.borderRadius,
  roundedTop: border.borderTopRadius,
  roundedTopLeft: border.borderTopLeftRadius,
  roundedTopRight: border.borderTopRightRadius,
  roundedTopStart: border.borderStartStartRadius,
  roundedTopEnd: border.borderStartEndRadius,
  roundedBottom: border.borderBottomRadius,
  roundedBottomLeft: border.borderBottomLeftRadius,
  roundedBottomRight: border.borderBottomRightRadius,
  roundedBottomStart: border.borderEndStartRadius,
  roundedBottomEnd: border.borderEndEndRadius,
  roundedLeft: border.borderLeftRadius,
  roundedRight: border.borderRightRadius,
  roundedStart: border.borderInlineStartRadius,
  roundedEnd: border.borderInlineEndRadius,
  borderStart: border.borderInlineStart,
  borderEnd: border.borderInlineEnd,
  borderTopStartRadius: border.borderStartStartRadius,
  borderTopEndRadius: border.borderStartEndRadius,
  borderBottomStartRadius: border.borderEndStartRadius,
  borderBottomEndRadius: border.borderEndEndRadius,
  borderStartRadius: border.borderInlineStartRadius,
  borderEndRadius: border.borderInlineEndRadius,
  borderStartWidth: border.borderInlineStartWidth,
  borderEndWidth: border.borderInlineEndWidth,
  borderStartColor: border.borderInlineStartColor,
  borderEndColor: border.borderInlineEndColor,
  borderStartStyle: border.borderInlineStartStyle,
  borderEndStyle: border.borderInlineEndStyle
});
/**
 * The prop types for border properties listed above
 */
//# sourceMappingURL=border.js.map