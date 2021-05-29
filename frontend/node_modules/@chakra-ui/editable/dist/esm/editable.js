function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { chakra, forwardRef, omitThemingProps, StylesProvider, useMultiStyleConfig, useStyles } from "@chakra-ui/system";
import { cx, runIfFn, __DEV__ } from "@chakra-ui/utils";
import { createContext } from "@chakra-ui/react-utils";
import * as React from "react";
import { useEditable } from "./use-editable";
var [EditableProvider, useEditableContext] = createContext({
  name: "EditableContext",
  errorMessage: "useEditableContext: context is undefined. Seems you forgot to wrap the editable components in `<Editable />`"
});

/**
 * Editable
 *
 * The wrapper that provides context and logic for all editable
 * components. It renders a `div`
 */
export var Editable = /*#__PURE__*/forwardRef((props, ref) => {
  var styles = useMultiStyleConfig("Editable", props);
  var ownProps = omitThemingProps(props);

  var _useEditable = useEditable(ownProps),
      {
    htmlProps
  } = _useEditable,
      context = _objectWithoutPropertiesLoose(_useEditable, ["htmlProps"]);

  var {
    isEditing,
    onSubmit,
    onCancel,
    onEdit
  } = context;

  var _className = cx("chakra-editable", props.className);

  var children = runIfFn(props.children, {
    isEditing,
    onSubmit,
    onCancel,
    onEdit
  });
  return /*#__PURE__*/React.createElement(EditableProvider, {
    value: context
  }, /*#__PURE__*/React.createElement(StylesProvider, {
    value: styles
  }, /*#__PURE__*/React.createElement(chakra.div, _extends({
    ref: ref
  }, htmlProps, {
    className: _className
  }), children)));
});

if (__DEV__) {
  Editable.displayName = "Editable";
}

var commonStyles = {
  fontSize: "inherit",
  fontWeight: "inherit",
  textAlign: "inherit",
  bg: "transparent"
};

/**
 * EditablePreview
 *
 * The `span` used to display the final value, in the `preview` mode
 */
export var EditablePreview = /*#__PURE__*/forwardRef((props, ref) => {
  var {
    getPreviewProps
  } = useEditableContext();
  var styles = useStyles();
  var previewProps = getPreviewProps(props, ref);

  var _className = cx("chakra-editable__preview", props.className);

  return /*#__PURE__*/React.createElement(chakra.span, _extends({}, previewProps, {
    __css: _extends({
      cursor: "text",
      display: "inline-block"
    }, commonStyles, styles.preview),
    className: _className
  }));
});

if (__DEV__) {
  EditablePreview.displayName = "EditablePreview";
}

/**
 * EditableInput
 *
 * The input used in the `edit` mode
 */
export var EditableInput = /*#__PURE__*/forwardRef((props, ref) => {
  var {
    getInputProps
  } = useEditableContext();
  var styles = useStyles();
  var inputProps = getInputProps(props, ref);

  var _className = cx("chakra-editable__input", props.className);

  return /*#__PURE__*/React.createElement(chakra.input, _extends({}, inputProps, {
    __css: _extends({
      outline: 0
    }, commonStyles, styles.input),
    className: _className
  }));
});

if (__DEV__) {
  EditableInput.displayName = "EditableInput";
}
/**
 * React hook use to gain access to the editable state and actions.
 */


export function useEditableState() {
  var {
    isEditing,
    onSubmit,
    onCancel,
    onEdit,
    isDisabled
  } = useEditableContext();
  return {
    isEditing,
    onSubmit,
    onCancel,
    onEdit,
    isDisabled
  };
}
/**
 * React hook use to create controls for the editable component
 */

export function useEditableControls() {
  var {
    isEditing,
    getEditButtonProps,
    getCancelButtonProps,
    getSubmitButtonProps
  } = useEditableContext();
  return {
    isEditing,
    getEditButtonProps,
    getCancelButtonProps,
    getSubmitButtonProps
  };
}
//# sourceMappingURL=editable.js.map