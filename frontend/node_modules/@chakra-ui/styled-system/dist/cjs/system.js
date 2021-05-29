"use strict";

exports.__esModule = true;
exports.isStyleProp = exports.propNames = exports.layoutPropNames = exports.systemProps = void 0;

var _utils = require("@chakra-ui/utils");

var _config = require("./config");

var _pseudos = require("./pseudos");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var systemProps = (0, _utils.mergeWith)({}, _config.background, _config.border, _config.color, _config.flexbox, _config.layout, _config.outline, _config.grid, _config.others, _config.position, _config.shadow, _config.space, _config.typography, _config.transform, _config.list, _config.transition);
exports.systemProps = systemProps;
var layoutSystem = (0, _utils.mergeWith)({}, _config.space, _config.layout, _config.flexbox, _config.grid, _config.position);
var layoutPropNames = (0, _utils.objectKeys)(layoutSystem);
exports.layoutPropNames = layoutPropNames;
var propNames = [].concat((0, _utils.objectKeys)(systemProps), _pseudos.pseudoPropNames);
exports.propNames = propNames;

var styleProps = _extends({}, systemProps, _pseudos.pseudoSelectors);

var isStyleProp = function isStyleProp(prop) {
  return prop in styleProps;
};

exports.isStyleProp = isStyleProp;
//# sourceMappingURL=system.js.map