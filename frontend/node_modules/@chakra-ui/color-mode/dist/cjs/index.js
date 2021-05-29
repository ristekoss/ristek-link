"use strict";

exports.__esModule = true;

var _colorModeProvider = require("./color-mode-provider");

Object.keys(_colorModeProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _colorModeProvider[key]) return;
  exports[key] = _colorModeProvider[key];
});

var _storageManager = require("./storage-manager");

Object.keys(_storageManager).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _storageManager[key]) return;
  exports[key] = _storageManager[key];
});

var _colorModeScript = require("./color-mode-script");

Object.keys(_colorModeScript).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _colorModeScript[key]) return;
  exports[key] = _colorModeScript[key];
});
//# sourceMappingURL=index.js.map