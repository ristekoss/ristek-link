"use strict";

exports.__esModule = true;

var _avatar = require("./avatar");

Object.keys(_avatar).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _avatar[key]) return;
  exports[key] = _avatar[key];
});

var _avatarGroup = require("./avatar-group");

Object.keys(_avatarGroup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _avatarGroup[key]) return;
  exports[key] = _avatarGroup[key];
});
//# sourceMappingURL=index.js.map