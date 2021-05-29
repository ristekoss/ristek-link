"use strict";

exports.__esModule = true;
exports.parseBorder = parseBorder;

var matchString = function matchString(val, regex) {
  return val.match(regex);
};

var unitMatch = /(\d*\.?\d+)\s?(px|em|ex|%|in|rem|cn|mm|pt|pc+)/;
var styleMatch = /none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset/;
/**
 * Function to enable shorthand border values.
 * @example
 * border = "3px solid blue.300"
 *
 * This would parse the border values, and convert the "blue.300" token
 * to the equivalent color value. If value doesn't exist in theme, it'll use the
 * raw values.
 */

function parseBorder(value, key) {
  if (key === void 0) {
    key = "border";
  }

  var css = {};
  var split = value.split(" ");

  var _ref = matchString(value, styleMatch) || [""],
      style = _ref[0];

  var _ref2 = matchString(value, unitMatch) || [""],
      unit = _ref2[0];

  var borderStyleKey = key + "Style";
  var borderWidthKey = key + "Width";
  var borderColorKey = key + "Color";
  if (style) css[borderStyleKey] = style;
  if (unit) css[borderWidthKey] = unit;

  var _split$filter = split.filter(function (val) {
    var match = matchString(val, unitMatch) && matchString(val, styleMatch);
    return !match && val !== style && val !== unit;
  }),
      color = _split$filter[0];

  if (color) css[borderColorKey] = color;
  return css;
}
//# sourceMappingURL=parse-border.js.map