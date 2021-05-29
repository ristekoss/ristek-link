"use strict";

exports.__esModule = true;

var _pinInput = require("./pin-input");

Object.keys(_pinInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _pinInput[key]) return;
  exports[key] = _pinInput[key];
});

var _usePinInput = require("./use-pin-input");

Object.keys(_usePinInput).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _usePinInput[key]) return;
  exports[key] = _usePinInput[key];
});
//# sourceMappingURL=index.js.map