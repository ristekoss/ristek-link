"use strict";

exports.__esModule = true;

var _radio = require("./radio");

Object.keys(_radio).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _radio[key]) return;
  exports[key] = _radio[key];
});

var _useRadio = require("./use-radio");

Object.keys(_useRadio).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useRadio[key]) return;
  exports[key] = _useRadio[key];
});

var _useRadioGroup = require("./use-radio-group");

Object.keys(_useRadioGroup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useRadioGroup[key]) return;
  exports[key] = _useRadioGroup[key];
});

var _radioGroup = require("./radio-group");

Object.keys(_radioGroup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _radioGroup[key]) return;
  exports[key] = _radioGroup[key];
});
//# sourceMappingURL=index.js.map