"use strict";

exports.__esModule = true;

var _useCounter = require("./use-counter");

Object.keys(_useCounter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useCounter[key]) return;
  exports[key] = _useCounter[key];
});
//# sourceMappingURL=index.js.map