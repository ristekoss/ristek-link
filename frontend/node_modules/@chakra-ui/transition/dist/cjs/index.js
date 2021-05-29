"use strict";

exports.__esModule = true;
var _exportNames = {
  EASINGS: true
};
exports.EASINGS = void 0;

var _collapse = require("./collapse");

Object.keys(_collapse).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _collapse[key]) return;
  exports[key] = _collapse[key];
});

var _fade = require("./fade");

Object.keys(_fade).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _fade[key]) return;
  exports[key] = _fade[key];
});

var _scaleFade = require("./scale-fade");

Object.keys(_scaleFade).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _scaleFade[key]) return;
  exports[key] = _scaleFade[key];
});

var _slide = require("./slide");

Object.keys(_slide).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _slide[key]) return;
  exports[key] = _slide[key];
});

var _slideFade = require("./slide-fade");

Object.keys(_slideFade).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _slideFade[key]) return;
  exports[key] = _slideFade[key];
});

var _transitionUtils = require("./transition-utils");

exports.EASINGS = _transitionUtils.TransitionEasings;
//# sourceMappingURL=index.js.map