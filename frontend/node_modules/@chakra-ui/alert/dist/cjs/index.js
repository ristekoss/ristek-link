"use strict";

exports.__esModule = true;

var _alert = require("./alert");

Object.keys(_alert).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _alert[key]) return;
  exports[key] = _alert[key];
});
//# sourceMappingURL=index.js.map