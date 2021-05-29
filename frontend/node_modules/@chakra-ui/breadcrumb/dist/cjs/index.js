"use strict";

exports.__esModule = true;

var _breadcrumb = require("./breadcrumb");

Object.keys(_breadcrumb).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _breadcrumb[key]) return;
  exports[key] = _breadcrumb[key];
});
//# sourceMappingURL=index.js.map