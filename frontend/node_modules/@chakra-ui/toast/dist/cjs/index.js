"use strict";

exports.__esModule = true;
var _exportNames = {
  toast: true
};
exports.toast = void 0;

var _useToast = require("./use-toast");

Object.keys(_useToast).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _useToast[key]) return;
  exports[key] = _useToast[key];
});

var _toast = require("./toast.class");

exports.toast = _toast.toast;

var _toast2 = require("./toast.types");

Object.keys(_toast2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _toast2[key]) return;
  exports[key] = _toast2[key];
});
//# sourceMappingURL=index.js.map