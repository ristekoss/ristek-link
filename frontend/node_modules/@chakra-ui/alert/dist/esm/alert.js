function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { chakra, forwardRef, omitThemingProps, StylesProvider, useMultiStyleConfig, useStyles } from "@chakra-ui/system";
import { cx } from "@chakra-ui/utils";
import { createContext } from "@chakra-ui/react-utils";
import * as React from "react";
import { CheckIcon, InfoIcon, WarningIcon } from "./icons";
var STATUSES = {
  info: {
    icon: InfoIcon,
    colorScheme: "blue"
  },
  warning: {
    icon: WarningIcon,
    colorScheme: "orange"
  },
  success: {
    icon: CheckIcon,
    colorScheme: "green"
  },
  error: {
    icon: WarningIcon,
    colorScheme: "red"
  }
};
var [AlertProvider, useAlertContext] = createContext({
  name: "AlertContext",
  errorMessage: "useAlertContext: `context` is undefined. Seems you forgot to wrap alert components in `<Alert />`"
});

/**
 * Alert is used to communicate the state or status of a
 * page, feature or action
 */
export var Alert = /*#__PURE__*/forwardRef((props, ref) => {
  var _props$colorScheme;

  var _omitThemingProps = omitThemingProps(props),
      {
    status = "info"
  } = _omitThemingProps,
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["status"]);

  var colorScheme = (_props$colorScheme = props.colorScheme) != null ? _props$colorScheme : STATUSES[status].colorScheme;
  var styles = useMultiStyleConfig("Alert", _extends({}, props, {
    colorScheme
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
      status
    }
  }, /*#__PURE__*/React.createElement(StylesProvider, {
    value: styles
  }, /*#__PURE__*/React.createElement(chakra.div, _extends({
    role: "alert",
    ref: ref
  }, rest, {
    className: cx("chakra-alert", props.className),
    __css: alertStyles
  }))));
});
export var AlertTitle = /*#__PURE__*/forwardRef((props, ref) => {
  var styles = useStyles();
  return /*#__PURE__*/React.createElement(chakra.div, _extends({
    ref: ref
  }, props, {
    className: cx("chakra-alert__title", props.className),
    __css: styles.title
  }));
});
export var AlertDescription = /*#__PURE__*/forwardRef((props, ref) => {
  var styles = useStyles();

  var descriptionStyles = _extends({
    display: "inline"
  }, styles.description);

  return /*#__PURE__*/React.createElement(chakra.div, _extends({
    ref: ref
  }, props, {
    className: cx("chakra-alert__desc", props.className),
    __css: descriptionStyles
  }));
});
export var AlertIcon = props => {
  var {
    status
  } = useAlertContext();
  var {
    icon: BaseIcon
  } = STATUSES[status];
  var styles = useStyles();
  return /*#__PURE__*/React.createElement(chakra.span, _extends({
    display: "inherit"
  }, props, {
    className: cx("chakra-alert__icon", props.className),
    __css: styles.icon
  }), /*#__PURE__*/React.createElement(BaseIcon, {
    w: "100%",
    h: "100%"
  }));
};
//# sourceMappingURL=alert.js.map