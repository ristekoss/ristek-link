"use strict";

exports.__esModule = true;
exports.background = void 0;

var _utils = require("../utils");

var _parseGradient = require("../utils/parse-gradient");

function bgClipTransform(value) {
  return value === "text" ? {
    color: "transparent",
    backgroundClip: "text"
  } : {
    backgroundClip: value
  };
}

var background = {
  bg: _utils.t.colors("background"),
  bgColor: _utils.t.colors("backgroundColor"),
  background: _utils.t.colors("background"),
  backgroundColor: _utils.t.colors("backgroundColor"),
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundAttachment: true,
  backgroundBlendMode: true,
  backgroundClip: {
    transform: bgClipTransform
  },
  bgImage: _utils.t.prop("backgroundImage"),
  bgImg: _utils.t.prop("backgroundImage"),
  bgBlendMode: _utils.t.prop("backgroundBlendMode"),
  bgSize: _utils.t.prop("backgroundSize"),
  bgPosition: _utils.t.prop("backgroundPosition"),
  bgPos: _utils.t.prop("backgroundPosition"),
  bgRepeat: _utils.t.prop("backgroundRepeat"),
  bgAttachment: _utils.t.prop("backgroundAttachment"),
  bgGradient: {
    property: "backgroundImage",
    transform: _parseGradient.gradientTransform
  },
  bgClip: {
    transform: bgClipTransform
  }
};
exports.background = background;
//# sourceMappingURL=background.js.map