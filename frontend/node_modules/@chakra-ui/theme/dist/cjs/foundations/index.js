"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _borders = _interopRequireDefault(require("./borders"));

var _breakpoints = _interopRequireDefault(require("./breakpoints"));

var _colors = _interopRequireDefault(require("./colors"));

var _radius = _interopRequireDefault(require("./radius"));

var _shadows = _interopRequireDefault(require("./shadows"));

var _sizes = _interopRequireDefault(require("./sizes"));

var _spacing = require("./spacing");

var _transition = _interopRequireDefault(require("./transition"));

var _typography = _interopRequireDefault(require("./typography"));

var _zIndex = _interopRequireDefault(require("./z-index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var foundations = _extends({
  breakpoints: _breakpoints["default"],
  zIndices: _zIndex["default"],
  radii: _radius["default"],
  colors: _colors["default"]
}, _typography["default"], {
  sizes: _sizes["default"],
  shadows: _shadows["default"],
  space: _spacing.spacing,
  borders: _borders["default"],
  transition: _transition["default"]
});

var _default = foundations;
exports["default"] = _default;
//# sourceMappingURL=index.js.map