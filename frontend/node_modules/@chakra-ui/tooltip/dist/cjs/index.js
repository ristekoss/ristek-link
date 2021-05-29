"use strict";

exports.__esModule = true;

var _tooltip = require("./tooltip");

Object.keys(_tooltip).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _tooltip[key]) return;
  exports[key] = _tooltip[key];
});

var _useTooltip = require("./use-tooltip");

Object.keys(_useTooltip).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useTooltip[key]) return;
  exports[key] = _useTooltip[key];
});
//# sourceMappingURL=index.js.map