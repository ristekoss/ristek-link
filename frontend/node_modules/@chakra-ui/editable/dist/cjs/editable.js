"use strict";

exports.__esModule = true;
exports.useEditableState = useEditableState;
exports.useEditableControls = useEditableControls;
exports.EditableInput = exports.EditablePreview = exports.Editable = void 0;

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var _reactUtils = require("@chakra-ui/react-utils");

var React = _interopRequireWildcard(require("react"));

var _useEditable2 = require("./use-editable");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _createContext = (0, _reactUtils.createContext)({
  name: "EditableContext",
  errorMessage: "useEditableContext: context is undefined. Seems you forgot to wrap the editable components in `<Editable />`"
}),
    EditableProvider = _createContext[0],
    useEditableContext = _createContext[1];

/**
 * Editable
 *
 * The wrapper that provides context and logic for all editable
 * components. It renders a `div`
 */
var Editable = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var styles = (0, _system.useMultiStyleConfig)("Editable", props);
  var ownProps = (0, _system.omitThemingProps)(props);

  var _useEditable = (0, _useEditable2.useEditable)(ownProps),
      htmlProps = _useEditable.htmlProps,
      context = _objectWithoutPropertiesLoose(_useEditable, ["htmlProps"]);

  var isEditing = context.isEditing,
      onSubmit = context.onSubmit,
      onCancel = context.onCancel,
      onEdit = context.onEdit;

  var _className = (0, _utils.cx)("chakra-editable", props.className);

  var children = (0, _utils.runIfFn)(props.children, {
    isEditing: isEditing,
    onSubmit: onSubmit,
    onCancel: onCancel,
    onEdit: onEdit
  });
  return /*#__PURE__*/React.createElement(EditableProvider, {
    value: context
  }, /*#__PURE__*/React.createElement(_system.StylesProvider, {
    value: styles
  }, /*#__PURE__*/React.createElement(_system.chakra.div, _extends({
    ref: ref
  }, htmlProps, {
    className: _className
  }), children)));
});
exports.Editable = Editable;

if (_utils.__DEV__) {
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
var EditablePreview = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var _useEditableContext = useEditableContext(),
      getPreviewProps = _useEditableContext.getPreviewProps;

  var styles = (0, _system.useStyles)();
  var previewProps = getPreviewProps(props, ref);

  var _className = (0, _utils.cx)("chakra-editable__preview", props.className);

  return /*#__PURE__*/React.createElement(_system.chakra.span, _extends({}, previewProps, {
    __css: _extends({
      cursor: "text",
      display: "inline-block"
    }, commonStyles, styles.preview),
    className: _className
  }));
});
exports.EditablePreview = EditablePreview;

if (_utils.__DEV__) {
  EditablePreview.displayName = "EditablePreview";
}

/**
 * EditableInput
 *
 * The input used in the `edit` mode
 */
var EditableInput = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var _useEditableContext2 = useEditableContext(),
      getInputProps = _useEditableContext2.getInputProps;

  var styles = (0, _system.useStyles)();
  var inputProps = getInputProps(props, ref);

  var _className = (0, _utils.cx)("chakra-editable__input", props.className);

  return /*#__PURE__*/React.createElement(_system.chakra.input, _extends({}, inputProps, {
    __css: _extends({
      outline: 0
    }, commonStyles, styles.input),
    className: _className
  }));
});
exports.EditableInput = EditableInput;

if (_utils.__DEV__) {
  EditableInput.displayName = "EditableInput";
}
/**
 * React hook use to gain access to the editable state and actions.
 */


function useEditableState() {
  var _useEditableContext3 = useEditableContext(),
      isEditing = _useEditableContext3.isEditing,
      onSubmit = _useEditableContext3.onSubmit,
      onCancel = _useEditableContext3.onCancel,
      onEdit = _useEditableContext3.onEdit,
      isDisabled = _useEditableContext3.isDisabled;

  return {
    isEditing: isEditing,
    onSubmit: onSubmit,
    onCancel: onCancel,
    onEdit: onEdit,
    isDisabled: isDisabled
  };
}
/**
 * React hook use to create controls for the editable component
 */


function useEditableControls() {
  var _useEditableContext4 = useEditableContext(),
      isEditing = _useEditableContext4.isEditing,
      getEditButtonProps = _useEditableContext4.getEditButtonProps,
      getCancelButtonProps = _useEditableContext4.getCancelButtonProps,
      getSubmitButtonProps = _useEditableContext4.getSubmitButtonProps;

  return {
    isEditing: isEditing,
    getEditButtonProps: getEditButtonProps,
    getCancelButtonProps: getCancelButtonProps,
    getSubmitButtonProps: getSubmitButtonProps
  };
}
//# sourceMappingURL=editable.js.map