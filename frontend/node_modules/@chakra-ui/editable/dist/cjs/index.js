"use strict";

exports.__esModule = true;

var _editable = require("./editable");

Object.keys(_editable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _editable[key]) return;
  exports[key] = _editable[key];
});

var _useEditable = require("./use-editable");

Object.keys(_useEditable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useEditable[key]) return;
  exports[key] = _useEditable[key];
});
//# sourceMappingURL=index.js.map