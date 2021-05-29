function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { chakra, forwardRef, useStyles } from "@chakra-ui/system";
import { cx, __DEV__ } from "@chakra-ui/utils";
import * as React from "react";
var StyledElement = chakra("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "0",
    zIndex: 2
  }
});
var InputElement = /*#__PURE__*/forwardRef((props, ref) => {
  var _input$height, _input$height2;

  var {
    placement = "left"
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["placement"]);

  var styles = useStyles();
  var input = styles.field;
  var attr = placement === "left" ? "insetStart" : "insetEnd";
  var elementStyles = {
    [attr]: "0",
    width: (_input$height = input == null ? void 0 : input.height) != null ? _input$height : input == null ? void 0 : input.h,
    height: (_input$height2 = input == null ? void 0 : input.height) != null ? _input$height2 : input == null ? void 0 : input.h,
    fontSize: input == null ? void 0 : input.fontSize
  };
  return /*#__PURE__*/React.createElement(StyledElement, _extends({
    ref: ref,
    __css: elementStyles
  }, rest));
}); // This is used in `input-group.tsx`

InputElement.id = "InputElement";

if (__DEV__) {
  InputElement.displayName = "InputElement";
}

export var InputLeftElement = /*#__PURE__*/forwardRef((props, ref) => {
  var {
    className
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["className"]);

  var _className = cx("chakra-input__left-element", className);

  return /*#__PURE__*/React.createElement(InputElement, _extends({
    ref: ref,
    placement: "left",
    className: _className
  }, rest));
}); // This is used in `input-group.tsx`

InputLeftElement.id = "InputLeftElement";

if (__DEV__) {
  InputLeftElement.displayName = "InputLeftElement";
}

export var InputRightElement = /*#__PURE__*/forwardRef((props, ref) => {
  var {
    className
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["className"]);

  var _className = cx("chakra-input__right-element", className);

  return /*#__PURE__*/React.createElement(InputElement, _extends({
    ref: ref,
    placement: "right",
    className: _className
  }, rest));
}); // This is used in `input-group.tsx`

InputRightElement.id = "InputRightElement";

if (__DEV__) {
  InputRightElement.displayName = "InputRightElement";
}
//# sourceMappingURL=input-element.js.map