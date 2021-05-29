"use strict";

exports.__esModule = true;

var _modal = require("./modal");

Object.keys(_modal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _modal[key]) return;
  exports[key] = _modal[key];
});

var _useModal = require("./use-modal");

Object.keys(_useModal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useModal[key]) return;
  exports[key] = _useModal[key];
});

var _alertDialog = require("./alert-dialog");

Object.keys(_alertDialog).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _alertDialog[key]) return;
  exports[key] = _alertDialog[key];
});

var _drawer = require("./drawer");

Object.keys(_drawer).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _drawer[key]) return;
  exports[key] = _drawer[key];
});
//# sourceMappingURL=index.js.map