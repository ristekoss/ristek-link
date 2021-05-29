function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { chakra, forwardRef, omitThemingProps, StylesProvider, useMultiStyleConfig } from "@chakra-ui/system";
import { cx, __DEV__ } from "@chakra-ui/utils";
import { getValidChildren } from "@chakra-ui/react-utils";
import * as React from "react";
export var InputGroup = /*#__PURE__*/forwardRef((props, ref) => {
  var styles = useMultiStyleConfig("Input", props);

  var _omitThemingProps = omitThemingProps(props),
      {
    children,
    className
  } = _omitThemingProps,
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["children", "className"]);

  var _className = cx("chakra-input__group", className);

  var groupStyles = {};
  var validChildren = getValidChildren(children);
  var input = styles.field;
  validChildren.forEach(child => {
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
  var clones = validChildren.map(child => {
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
  return /*#__PURE__*/React.createElement(chakra.div, _extends({
    className: _className,
    ref: ref,
    __css: {
      width: "100%",
      display: "flex",
      position: "relative"
    }
  }, rest), /*#__PURE__*/React.createElement(StylesProvider, {
    value: styles
  }, clones));
});

if (__DEV__) {
  InputGroup.displayName = "InputGroup";
}
//# sourceMappingURL=input-group.js.map