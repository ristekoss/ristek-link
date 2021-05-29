"use strict";

exports.__esModule = true;

var _popover = require("./popover");

Object.keys(_popover).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _popover[key]) return;
  exports[key] = _popover[key];
});

var _usePopover = require("./use-popover");

Object.keys(_usePopover).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _usePopover[key]) return;
  exports[key] = _usePopover[key];
});
//# sourceMappingURL=index.js.map