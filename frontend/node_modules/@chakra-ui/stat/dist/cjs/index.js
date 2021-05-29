"use strict";

exports.__esModule = true;

var _stat = require("./stat");

Object.keys(_stat).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _stat[key]) return;
  exports[key] = _stat[key];
});
//# sourceMappingURL=index.js.map