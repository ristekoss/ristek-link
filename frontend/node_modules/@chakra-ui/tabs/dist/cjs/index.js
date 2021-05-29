"use strict";

exports.__esModule = true;

var _tabs = require("./tabs");

Object.keys(_tabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _tabs[key]) return;
  exports[key] = _tabs[key];
});

var _useTabs = require("./use-tabs");

Object.keys(_useTabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useTabs[key]) return;
  exports[key] = _useTabs[key];
});
//# sourceMappingURL=index.js.map