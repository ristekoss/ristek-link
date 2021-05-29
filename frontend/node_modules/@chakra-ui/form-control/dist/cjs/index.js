"use strict";

exports.__esModule = true;

var _formControl = require("./form-control");

Object.keys(_formControl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _formControl[key]) return;
  exports[key] = _formControl[key];
});

var _useFormControl = require("./use-form-control");

Object.keys(_useFormControl).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useFormControl[key]) return;
  exports[key] = _useFormControl[key];
});

var _formError = require("./form-error");

Object.keys(_formError).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _formError[key]) return;
  exports[key] = _formError[key];
});

var _formLabel = require("./form-label");

Object.keys(_formLabel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _formLabel[key]) return;
  exports[key] = _formLabel[key];
});
//# sourceMappingURL=index.js.map