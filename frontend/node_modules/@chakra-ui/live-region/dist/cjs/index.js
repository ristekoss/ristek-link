"use strict";

exports.__esModule = true;

var _liveRegion = require("./live-region");

Object.keys(_liveRegion).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _liveRegion[key]) return;
  exports[key] = _liveRegion[key];
});

var _useLiveRegion = require("./use-live-region");

Object.keys(_useLiveRegion).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useLiveRegion[key]) return;
  exports[key] = _useLiveRegion[key];
});
//# sourceMappingURL=index.js.map