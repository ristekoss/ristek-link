"use strict";

exports.__esModule = true;

var _accordion = require("./accordion");

Object.keys(_accordion).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _accordion[key]) return;
  exports[key] = _accordion[key];
});

var _useAccordion = require("./use-accordion");

Object.keys(_useAccordion).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useAccordion[key]) return;
  exports[key] = _useAccordion[key];
});
//# sourceMappingURL=index.js.map