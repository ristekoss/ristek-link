"use strict";

exports.__esModule = true;
var _exportNames = {
  popperCSSVars: true
};
exports.popperCSSVars = void 0;

var _usePopper = require("./use-popper");

Object.keys(_usePopper).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _usePopper[key]) return;
  exports[key] = _usePopper[key];
});

var _utils = require("./utils");

exports.popperCSSVars = _utils.cssVars;
//# sourceMappingURL=index.js.map