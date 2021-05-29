"use strict";

exports.__esModule = true;
exports.typography = void 0;

var _createTransform = require("../create-transform");

var _utils = require("../utils");

var typography = {
  fontFamily: _utils.t.prop("fontFamily", "fonts"),
  fontSize: _utils.t.prop("fontSize", "fontSizes", _createTransform.px),
  fontWeight: _utils.t.prop("fontWeight", "fontWeights"),
  lineHeight: _utils.t.prop("lineHeight", "lineHeights"),
  letterSpacing: _utils.t.prop("letterSpacing", "letterSpacings"),
  textAlign: true,
  fontStyle: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  textDecoration: true,
  textDecor: {
    property: "textDecoration"
  },
  noOfLines: {
    "static": {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      //@ts-ignore
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  },
  isTruncated: {
    transform: function transform(value) {
      if (value === true) {
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
      }
    }
  }
};
/**
 * Types for typography related CSS properties
 */

exports.typography = typography;
//# sourceMappingURL=typography.js.map