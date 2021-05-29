"use strict";

exports.__esModule = true;

var _circularProgress = require("./circular-progress");

Object.keys(_circularProgress).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _circularProgress[key]) return;
  exports[key] = _circularProgress[key];
});

var _progress = require("./progress");

Object.keys(_progress).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _progress[key]) return;
  exports[key] = _progress[key];
});
//# sourceMappingURL=index.js.map