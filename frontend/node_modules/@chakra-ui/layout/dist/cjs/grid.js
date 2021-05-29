"use strict";

exports.__esModule = true;
exports.GridItem = exports.Grid = void 0;

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * React component used to create grid layouts.
 *
 * It renders a `div` with `display: grid` and
 * comes with helpful style shorthand.
 *
 * @see Docs https://chakra-ui.com/docs/layout/grid
 */
var Grid = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var area = props.area,
      templateAreas = props.templateAreas,
      gap = props.gap,
      rowGap = props.rowGap,
      columnGap = props.columnGap,
      column = props.column,
      row = props.row,
      autoFlow = props.autoFlow,
      autoRows = props.autoRows,
      templateRows = props.templateRows,
      autoColumns = props.autoColumns,
      templateColumns = props.templateColumns,
      rest = _objectWithoutPropertiesLoose(props, ["area", "templateAreas", "gap", "rowGap", "columnGap", "column", "row", "autoFlow", "autoRows", "templateRows", "autoColumns", "templateColumns"]);

  var styles = {
    display: "grid",
    gridArea: area,
    gridTemplateAreas: templateAreas,
    gridGap: gap,
    gridRowGap: rowGap,
    gridColumnGap: columnGap,
    gridAutoColumns: autoColumns,
    gridColumn: column,
    gridRow: row,
    gridAutoFlow: autoFlow,
    gridAutoRows: autoRows,
    gridTemplateRows: templateRows,
    gridTemplateColumns: templateColumns
  };
  return /*#__PURE__*/React.createElement(_system.chakra.div, _extends({
    ref: ref,
    __css: styles
  }, rest));
});
exports.Grid = Grid;

if (_utils.__DEV__) {
  Grid.displayName = "Grid";
}

function spanFn(span) {
  return (0, _utils.mapResponsive)(span, function (value) {
    return value === "auto" ? "auto" : "span " + value + "/span " + value;
  });
}

var GridItem = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var colSpan = props.colSpan,
      colStart = props.colStart,
      colEnd = props.colEnd,
      rowEnd = props.rowEnd,
      rowSpan = props.rowSpan,
      rowStart = props.rowStart,
      rest = _objectWithoutPropertiesLoose(props, ["colSpan", "colStart", "colEnd", "rowEnd", "rowSpan", "rowStart"]);

  var styles = (0, _utils.filterUndefined)({
    gridColumn: spanFn(colSpan),
    gridRow: spanFn(rowSpan),
    gridColumnStart: colStart,
    gridColumnEnd: colEnd,
    gridRowStart: rowStart,
    gridRowEnd: rowEnd
  });
  return /*#__PURE__*/React.createElement(_system.chakra.div, _extends({
    ref: ref,
    __css: styles
  }, rest));
});
exports.GridItem = GridItem;
//# sourceMappingURL=grid.js.map