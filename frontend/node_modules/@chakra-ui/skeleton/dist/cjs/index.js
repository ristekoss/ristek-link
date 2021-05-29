"use strict";

exports.__esModule = true;

var _skeleton = require("./skeleton");

Object.keys(_skeleton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _skeleton[key]) return;
  exports[key] = _skeleton[key];
});
//# sourceMappingURL=index.js.map