function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { chakra, forwardRef, omitThemingProps, StylesProvider, useMultiStyleConfig, useStyles } from "@chakra-ui/system";
import { cx, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
export var TableContainer = /*#__PURE__*/forwardRef((props, ref) => {
  var _ref;

  var {
    overflow,
    overflowX,
    className
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["overflow", "overflowX", "className"]);

  return /*#__PURE__*/React.createElement(chakra.div, _extends({
    ref: ref,
    className: cx("chakra-table__container", className)
  }, rest, {
    __css: {
      display: "block",
      whiteSpace: "nowrap",
      WebkitOverflowScrolling: "touch",
      overflowX: (_ref = overflow != null ? overflow : overflowX) != null ? _ref : "auto",
      overflowY: "hidden",
      maxWidth: "100%"
    }
  }));
});
export var Table = /*#__PURE__*/forwardRef((props, ref) => {
  var styles = useMultiStyleConfig("Table", props);

  var _omitThemingProps = omitThemingProps(props),
      {
    className
  } = _omitThemingProps,
      tableProps = _objectWithoutPropertiesLoose(_omitThemingProps, ["className"]);

  return /*#__PURE__*/React.createElement(StylesProvider, {
    value: styles
  }, /*#__PURE__*/React.createElement(chakra.table, _extends({
    role: "table",
    ref: ref,
    __css: styles.table,
    className: cx("chakra-table", className)
  }, tableProps)));
});

if (__DEV__) {
  Table.displayName = "Table";
}

export var TableCaption = /*#__PURE__*/forwardRef((props, ref) => {
  var {
    placement = "bottom"
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["placement"]);

  var styles = useStyles();
  return /*#__PURE__*/React.createElement(chakra.caption, _extends({}, rest, {
    ref: ref,
    __css: _extends({}, styles.caption, {
      captionSide: placement
    })
  }));
});

if (__DEV__) {
  TableCaption.displayName = "TableCaption";
}

export var Thead = /*#__PURE__*/forwardRef((props, ref) => {
  var styles = useStyles();
  return /*#__PURE__*/React.createElement(chakra.thead, _extends({}, props, {
    ref: ref,
    __css: styles.thead
  }));
});
export var Tbody = /*#__PURE__*/forwardRef((props, ref) => {
  var styles = useStyles();
  return /*#__PURE__*/React.createElement(chakra.tbody, _extends({}, props, {
    ref: ref,
    __css: styles.tbody
  }));
});
export var Tfoot = /*#__PURE__*/forwardRef((props, ref) => {
  var styles = useStyles();
  return /*#__PURE__*/React.createElement(chakra.tfoot, _extends({}, props, {
    ref: ref,
    __css: styles.tfoot
  }));
});
export var Th = /*#__PURE__*/forwardRef((_ref2, ref) => {
  var {
    isNumeric
  } = _ref2,
      rest = _objectWithoutPropertiesLoose(_ref2, ["isNumeric"]);

  var styles = useStyles();
  return /*#__PURE__*/React.createElement(chakra.th, _extends({}, rest, {
    ref: ref,
    __css: styles.th,
    "data-is-numeric": isNumeric
  }));
});
export var Tr = /*#__PURE__*/forwardRef((props, ref) => {
  var styles = useStyles();
  return /*#__PURE__*/React.createElement(chakra.tr, _extends({
    role: "row"
  }, props, {
    ref: ref,
    __css: styles.tr
  }));
});
export var Td = /*#__PURE__*/forwardRef((_ref3, ref) => {
  var {
    isNumeric
  } = _ref3,
      rest = _objectWithoutPropertiesLoose(_ref3, ["isNumeric"]);

  var styles = useStyles();
  return /*#__PURE__*/React.createElement(chakra.td, _extends({
    role: "gridcell"
  }, rest, {
    ref: ref,
    __css: styles.td,
    "data-is-numeric": isNumeric
  }));
});
//# sourceMappingURL=table.js.map