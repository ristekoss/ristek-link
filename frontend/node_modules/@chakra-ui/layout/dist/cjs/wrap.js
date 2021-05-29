"use strict";

exports.__esModule = true;
exports.WrapItem = exports.Wrap = void 0;

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Layout component used to stack elements that differ in length
 * and are liable to wrap.
 *
 * Common use cases:
 * - Buttons that appear together at the end of forms
 * - Lists of tags and chips
 *
 * @see Docs https://chakra-ui.com/docs/layout/wrap
 */
var Wrap = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? "0.5rem" : _props$spacing,
      children = props.children,
      justify = props.justify,
      direction = props.direction,
      align = props.align,
      className = props.className,
      shouldWrapChildren = props.shouldWrapChildren,
      rest = _objectWithoutPropertiesLoose(props, ["spacing", "children", "justify", "direction", "align", "className", "shouldWrapChildren"]);

  var styles = React.useMemo(function () {
    return {
      "--chakra-wrap-spacing": function chakraWrapSpacing(theme) {
        return (0, _utils.mapResponsive)(spacing, function (value) {
          return (0, _system.tokenToCSSVar)("space", value)(theme);
        });
      },
      "--wrap-spacing": "calc(var(--chakra-wrap-spacing) / 2)",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: justify,
      alignItems: align,
      flexDirection: direction,
      listStyleType: "none",
      padding: "0",
      margin: "calc(var(--wrap-spacing) * -1)",
      "& > *:not(style)": {
        margin: "var(--wrap-spacing)"
      }
    };
  }, [spacing, justify, align, direction]);
  var childrenToRender = shouldWrapChildren ? React.Children.map(children, function (child, index) {
    return /*#__PURE__*/React.createElement(WrapItem, {
      key: index
    }, child);
  }) : children;
  return /*#__PURE__*/React.createElement(_system.chakra.div, _extends({
    ref: ref,
    className: (0, _utils.cx)("chakra-wrap", className)
  }, rest), /*#__PURE__*/React.createElement(_system.chakra.ul, {
    className: "chakra-wrap__list",
    __css: styles
  }, childrenToRender));
});
exports.Wrap = Wrap;

if (_utils.__DEV__) {
  Wrap.displayName = "Wrap";
}

var WrapItem = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var className = props.className,
      rest = _objectWithoutPropertiesLoose(props, ["className"]);

  return /*#__PURE__*/React.createElement(_system.chakra.li, _extends({
    ref: ref,
    __css: {
      display: "flex",
      alignItems: "flex-start"
    },
    className: (0, _utils.cx)("chakra-wrap__listitem", className)
  }, rest));
});
exports.WrapItem = WrapItem;

if (_utils.__DEV__) {
  WrapItem.displayName = "WrapItem";
}
//# sourceMappingURL=wrap.js.map