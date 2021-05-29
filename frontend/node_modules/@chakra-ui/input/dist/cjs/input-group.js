"use strict";

exports.__esModule = true;
exports.InputGroup = void 0;

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var _reactUtils = require("@chakra-ui/react-utils");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InputGroup = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var styles = (0, _system.useMultiStyleConfig)("Input", props);

  var _omitThemingProps = (0, _system.omitThemingProps)(props),
      children = _omitThemingProps.children,
      className = _omitThemingProps.className,
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["children", "className"]);

  var _className = (0, _utils.cx)("chakra-input__group", className);

  var groupStyles = {};
  var validChildren = (0, _reactUtils.getValidChildren)(children);
  var input = styles.field;
  validChildren.forEach(function (child) {
    if (!styles) return;

    if (input && child.type.id === "InputLeftElement") {
      var _input$height;

      groupStyles.paddingStart = (_input$height = input.height) != null ? _input$height : input.h;
    }

    if (input && child.type.id === "InputRightElement") {
      var _input$height2;

      groupStyles.paddingEnd = (_input$height2 = input.height) != null ? _input$height2 : input.h;
    }

    if (child.type.id === "InputRightAddon") {
      groupStyles.borderEndRadius = 0;
    }

    if (child.type.id === "InputLeftAddon") {
      groupStyles.borderStartRadius = 0;
    }
  });
  var clones = validChildren.map(function (child) {
    var _child$props, _child$props2;

    /**
     * Make it possible to override the size and variant from `Input`
     */
    var theming = {
      size: ((_child$props = child.props) == null ? void 0 : _child$props.size) || props.size,
      variant: ((_child$props2 = child.props) == null ? void 0 : _child$props2.variant) || props.variant
    };
    return child.type.id !== "Input" ? /*#__PURE__*/React.cloneElement(child, theming) : /*#__PURE__*/React.cloneElement(child, Object.assign(theming, groupStyles, child.props));
  });
  return /*#__PURE__*/React.createElement(_system.chakra.div, _extends({
    className: _className,
    ref: ref,
    __css: {
      width: "100%",
      display: "flex",
      position: "relative"
    }
  }, rest), /*#__PURE__*/React.createElement(_system.StylesProvider, {
    value: styles
  }, clones));
});
exports.InputGroup = InputGroup;

if (_utils.__DEV__) {
  InputGroup.displayName = "InputGroup";
}
//# sourceMappingURL=input-group.js.map