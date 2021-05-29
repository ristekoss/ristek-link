"use strict";

exports.__esModule = true;

var _switch = require("./switch");

Object.keys(_switch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _switch[key]) return;
  exports[key] = _switch[key];
});
//# sourceMappingURL=index.js.map