"use strict";

exports.__esModule = true;

var _portalManager = require("./portal-manager");

Object.keys(_portalManager).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _portalManager[key]) return;
  exports[key] = _portalManager[key];
});

var _portal = require("./portal");

Object.keys(_portal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _portal[key]) return;
  exports[key] = _portal[key];
});
//# sourceMappingURL=index.js.map