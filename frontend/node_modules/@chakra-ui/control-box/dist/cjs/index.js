"use strict";

exports.__esModule = true;

var _controlBox = require("./control-box");

Object.keys(_controlBox).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _controlBox[key]) return;
  exports[key] = _controlBox[key];
});
//# sourceMappingURL=index.js.map