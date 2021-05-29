"use strict";

exports.__esModule = true;

var _button = require("./button");

Object.keys(_button).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _button[key]) return;
  exports[key] = _button[key];
});

var _buttonGroup = require("./button-group");

Object.keys(_buttonGroup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _buttonGroup[key]) return;
  exports[key] = _buttonGroup[key];
});

var _iconButton = require("./icon-button");

Object.keys(_iconButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _iconButton[key]) return;
  exports[key] = _iconButton[key];
});
//# sourceMappingURL=index.js.map