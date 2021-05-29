"use strict";

exports.__esModule = true;
exports.toConfig = toConfig;
exports.logical = logical;

var _createTransform = require("./create-transform");

function toConfig(scale, transform) {
  return function (property) {
    var result = {
      property: property,
      scale: scale
    };
    result.transform = (0, _createTransform.createTransform)({
      scale: scale,
      transform: transform
    });
    return result;
  };
}

var getRtl = function getRtl(_ref) {
  var rtl = _ref.rtl,
      ltr = _ref.ltr;
  return function (theme) {
    return theme.direction === "rtl" ? rtl : ltr;
  };
};

function logical(options) {
  var property = options.property,
      scale = options.scale,
      transform = options.transform;
  return {
    scale: scale,
    property: getRtl(property),
    transform: scale ? (0, _createTransform.createTransform)({
      scale: scale,
      compose: transform
    }) : transform
  };
}
//# sourceMappingURL=prop-config.js.map