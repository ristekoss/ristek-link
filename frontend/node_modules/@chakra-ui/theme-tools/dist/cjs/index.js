"use strict";

exports.__esModule = true;

var _color = require("./color");

Object.keys(_color).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _color[key]) return;
  exports[key] = _color[key];
});

var _component = require("./component");

Object.keys(_component).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _component[key]) return;
  exports[key] = _component[key];
});

var _createBreakpoints = require("./create-breakpoints");

Object.keys(_createBreakpoints).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _createBreakpoints[key]) return;
  exports[key] = _createBreakpoints[key];
});
//# sourceMappingURL=index.js.map