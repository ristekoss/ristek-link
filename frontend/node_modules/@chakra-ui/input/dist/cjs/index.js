"use strict";

exports.__esModule = true;

var _input = require("./input");

Object.keys(_input).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _input[key]) return;
  exports[key] = _input[key];
});

var _inputAddon = require("./input-addon");

Object.keys(_inputAddon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _inputAddon[key]) return;
  exports[key] = _inputAddon[key];
});

var _inputGroup = require("./input-group");

Object.keys(_inputGroup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _inputGroup[key]) return;
  exports[key] = _inputGroup[key];
});

var _inputElement = require("./input-element");

Object.keys(_inputElement).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _inputElement[key]) return;
  exports[key] = _inputElement[key];
});
//# sourceMappingURL=index.js.map