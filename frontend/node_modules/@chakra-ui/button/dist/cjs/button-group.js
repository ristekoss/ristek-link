"use strict";

exports.__esModule = true;
exports.ButtonGroup = exports.useButtonGroup = void 0;

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var _reactUtils = require("@chakra-ui/react-utils");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _createContext = (0, _reactUtils.createContext)({
  strict: false,
  name: "ButtonGroupContext"
}),
    ButtonGroupProvider = _createContext[0],
    useButtonGroup = _createContext[1];

exports.useButtonGroup = useButtonGroup;
var ButtonGroup = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var size = props.size,
      colorScheme = props.colorScheme,
      variant = props.variant,
      className = props.className,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? "0.5rem" : _props$spacing,
      isAttached = props.isAttached,
      isDisabled = props.isDisabled,
      rest = _objectWithoutPropertiesLoose(props, ["size", "colorScheme", "variant", "className", "spacing", "isAttached", "isDisabled"]);

  var _className = (0, _utils.cx)("chakra-button__group", className);

  var context = React.useMemo(function () {
    return {
      size: size,
      colorScheme: colorScheme,
      variant: variant,
      isDisabled: isDisabled
    };
  }, [size, colorScheme, variant, isDisabled]);
  var groupStyles = {
    display: "inline-flex"
  };

  if (isAttached) {
    groupStyles = _extends({}, groupStyles, {
      "> *:first-of-type:not(:last-of-type)": {
        borderEndRadius: 0
      },
      "> *:not(:first-of-type):not(:last-of-type)": {
        borderRadius: 0
      },
      "> *:not(:first-of-type):last-of-type": {
        borderStartRadius: 0
      }
    });
  } else {
    groupStyles = _extends({}, groupStyles, {
      "& > *:not(style) ~ *:not(style)": {
        marginStart: spacing
      }
    });
  }

  return /*#__PURE__*/React.createElement(ButtonGroupProvider, {
    value: context
  }, /*#__PURE__*/React.createElement(_system.chakra.div, _extends({
    ref: ref,
    role: "group",
    __css: groupStyles,
    className: _className
  }, rest)));
});
exports.ButtonGroup = ButtonGroup;

if (_utils.__DEV__) {
  ButtonGroup.displayName = "ButtonGroup";
}
//# sourceMappingURL=button-group.js.map