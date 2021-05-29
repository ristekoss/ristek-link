"use strict";

exports.__esModule = true;
exports.SimpleGrid = void 0;

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

var _grid = require("./grid");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * SimpleGrid
 *
 * React component make that providers a simpler interface, and
 * make its easy to create responsive grid layouts.
 *
 * @see Docs https://chakra-ui.com/docs/layout/simple-grid
 */
var SimpleGrid = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var columns = props.columns,
      spacingX = props.spacingX,
      spacingY = props.spacingY,
      spacing = props.spacing,
      minChildWidth = props.minChildWidth,
      rest = _objectWithoutPropertiesLoose(props, ["columns", "spacingX", "spacingY", "spacing", "minChildWidth"]);

  var templateColumns = minChildWidth ? widthToColumns(minChildWidth) : countToColumns(columns);
  return /*#__PURE__*/React.createElement(_grid.Grid, _extends({
    ref: ref,
    gap: spacing,
    columnGap: spacingX,
    rowGap: spacingY,
    templateColumns: templateColumns
  }, rest));
});
exports.SimpleGrid = SimpleGrid;

if (_utils.__DEV__) {
  SimpleGrid.displayName = "SimpleGrid";
}

function toPx(n) {
  return (0, _utils.isNumber)(n) ? n + "px" : n;
}

function widthToColumns(width) {
  return (0, _utils.mapResponsive)(width, function (value) {
    return (0, _utils.isNull)(value) ? null : "repeat(auto-fit, minmax(" + toPx(value) + ", 1fr))";
  });
}

function countToColumns(count) {
  return (0, _utils.mapResponsive)(count, function (value) {
    return (0, _utils.isNull)(value) ? null : "repeat(" + value + ", minmax(0, 1fr))";
  });
}
//# sourceMappingURL=simple-grid.js.map