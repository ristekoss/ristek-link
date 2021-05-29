var matchString = (val, regex) => val.match(regex);

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

export function parseBorder(value, key) {
  if (key === void 0) {
    key = "border";
  }

  var css = {};
  var split = value.split(" ");
  var [style] = matchString(value, styleMatch) || [""];
  var [unit] = matchString(value, unitMatch) || [""];
  var borderStyleKey = key + "Style";
  var borderWidthKey = key + "Width";
  var borderColorKey = key + "Color";
  if (style) css[borderStyleKey] = style;
  if (unit) css[borderWidthKey] = unit;
  var [color] = split.filter(val => {
    var match = matchString(val, unitMatch) && matchString(val, styleMatch);
    return !match && val !== style && val !== unit;
  });
  if (color) css[borderColorKey] = color;
  return css;
}
//# sourceMappingURL=parse-border.js.map