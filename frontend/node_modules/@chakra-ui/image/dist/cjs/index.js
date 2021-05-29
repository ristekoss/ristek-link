"use strict";

exports.__esModule = true;

var _image = require("./image");

Object.keys(_image).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _image[key]) return;
  exports[key] = _image[key];
});

var _useImage = require("./use-image");

Object.keys(_useImage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useImage[key]) return;
  exports[key] = _useImage[key];
});
//# sourceMappingURL=index.js.map