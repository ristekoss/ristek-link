"use strict";

exports.__esModule = true;
exports.mode = mode;
exports.orient = orient;

var _utils = require("@chakra-ui/utils");

exports.runIfFn = _utils.runIfFn;

function mode(light, dark) {
  return function (props) {
    return props.colorMode === "dark" ? dark : light;
  };
}

function orient(options) {
  var orientation = options.orientation,
      vertical = options.vertical,
      horizontal = options.horizontal;
  if (!orientation) return {};
  return orientation === "vertical" ? vertical : horizontal;
}
//# sourceMappingURL=component.js.map