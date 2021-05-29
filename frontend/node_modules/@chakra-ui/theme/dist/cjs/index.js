"use strict";

exports.__esModule = true;
var _exportNames = {
  theme: true
};
exports["default"] = exports.theme = void 0;

var _components = _interopRequireDefault(require("./components"));

var _foundations = _interopRequireDefault(require("./foundations"));

var _styles = _interopRequireDefault(require("./styles"));

var _theme = require("./theme.types");

Object.keys(_theme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _theme[key]) return;
  exports[key] = _theme[key];
});

var _utils = require("./utils");

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _utils[key]) return;
  exports[key] = _utils[key];
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var direction = "ltr";
var config = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
};

var theme = _extends({
  direction: direction
}, _foundations["default"], {
  components: _components["default"],
  styles: _styles["default"],
  config: config
});

exports.theme = theme;
var _default = theme;
exports["default"] = _default;
//# sourceMappingURL=index.js.map