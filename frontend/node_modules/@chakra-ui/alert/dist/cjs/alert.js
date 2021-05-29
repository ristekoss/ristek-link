"use strict";

exports.__esModule = true;
exports.AlertIcon = exports.AlertDescription = exports.AlertTitle = exports.Alert = void 0;

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var _reactUtils = require("@chakra-ui/react-utils");

var React = _interopRequireWildcard(require("react"));

var _icons = require("./icons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var STATUSES = {
  info: {
    icon: _icons.InfoIcon,
    colorScheme: "blue"
  },
  warning: {
    icon: _icons.WarningIcon,
    colorScheme: "orange"
  },
  success: {
    icon: _icons.CheckIcon,
    colorScheme: "green"
  },
  error: {
    icon: _icons.WarningIcon,
    colorScheme: "red"
  }
};

var _createContext = (0, _reactUtils.createContext)({
  name: "AlertContext",
  errorMessage: "useAlertContext: `context` is undefined. Seems you forgot to wrap alert components in `<Alert />`"
}),
    AlertProvider = _createContext[0],
    useAlertContext = _createContext[1];

/**
 * Alert is used to communicate the state or status of a
 * page, feature or action
 */
var Alert = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var _props$colorScheme;

  var _omitThemingProps = (0, _system.omitThemingProps)(props),
      _omitThemingProps$sta = _omitThemingProps.status,
      status = _omitThemingProps$sta === void 0 ? "info" : _omitThemingProps$sta,
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["status"]);

  var colorScheme = (_props$colorScheme = props.colorScheme) != null ? _props$colorScheme : STATUSES[status].colorScheme;
  var styles = (0, _system.useMultiStyleConfig)("Alert", _extends({}, props, {
    colorScheme: colorScheme
  }));

  var alertStyles = _extends({
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden"
  }, styles.container);

  return /*#__PURE__*/React.createElement(AlertProvider, {
    value: {
      status: status
    }
  }, /*#__PURE__*/React.createElement(_system.StylesProvider, {
    value: styles
  }, /*#__PURE__*/React.createElement(_system.chakra.div, _extends({
    role: "alert",
    ref: ref
  }, rest, {
    className: (0, _utils.cx)("chakra-alert", props.className),
    __css: alertStyles
  }))));
});
exports.Alert = Alert;
var AlertTitle = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var styles = (0, _system.useStyles)();
  return /*#__PURE__*/React.createElement(_system.chakra.div, _extends({
    ref: ref
  }, props, {
    className: (0, _utils.cx)("chakra-alert__title", props.className),
    __css: styles.title
  }));
});
exports.AlertTitle = AlertTitle;
var AlertDescription = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var styles = (0, _system.useStyles)();

  var descriptionStyles = _extends({
    display: "inline"
  }, styles.description);

  return /*#__PURE__*/React.createElement(_system.chakra.div, _extends({
    ref: ref
  }, props, {
    className: (0, _utils.cx)("chakra-alert__desc", props.className),
    __css: descriptionStyles
  }));
});
exports.AlertDescription = AlertDescription;

var AlertIcon = function AlertIcon(props) {
  var _useAlertContext = useAlertContext(),
      status = _useAlertContext.status;

  var BaseIcon = STATUSES[status].icon;
  var styles = (0, _system.useStyles)();
  return /*#__PURE__*/React.createElement(_system.chakra.span, _extends({
    display: "inherit"
  }, props, {
    className: (0, _utils.cx)("chakra-alert__icon", props.className),
    __css: styles.icon
  }), /*#__PURE__*/React.createElement(BaseIcon, {
    w: "100%",
    h: "100%"
  }));
};

exports.AlertIcon = AlertIcon;
//# sourceMappingURL=alert.js.map