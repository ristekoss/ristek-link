"use strict";

exports.__esModule = true;

var _select = require("./select");

Object.keys(_select).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _select[key]) return;
  exports[key] = _select[key];
});
//# sourceMappingURL=index.js.map