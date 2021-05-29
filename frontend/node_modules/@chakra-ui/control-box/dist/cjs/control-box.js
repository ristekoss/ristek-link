"use strict";

exports.__esModule = true;
exports["default"] = exports.ControlBox = void 0;

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ControlBox = function ControlBox(props) {
  var _extends2, _ref;

  var _props$type = props.type,
      type = _props$type === void 0 ? "checkbox" : _props$type,
      _hover = props._hover,
      _invalid = props._invalid,
      _disabled = props._disabled,
      _focus = props._focus,
      _checked = props._checked,
      _props$_child = props._child,
      _child = _props$_child === void 0 ? {
    opacity: 0
  } : _props$_child,
      _props$_checkedAndChi = props._checkedAndChild,
      _checkedAndChild = _props$_checkedAndChi === void 0 ? {
    opacity: 1
  } : _props$_checkedAndChi,
      _checkedAndDisabled = props._checkedAndDisabled,
      _checkedAndFocus = props._checkedAndFocus,
      _checkedAndHover = props._checkedAndHover,
      children = props.children,
      rest = _objectWithoutPropertiesLoose(props, ["type", "_hover", "_invalid", "_disabled", "_focus", "_checked", "_child", "_checkedAndChild", "_checkedAndDisabled", "_checkedAndFocus", "_checkedAndHover", "children"]);

  var checkedAndDisabled = "input[type=" + type + "]:checked:disabled + &";
  var checkedAndHover = "input[type=" + type + "]:checked:hover:not(:disabled) + &";
  var checkedAndFocus = "input[type=" + type + "]:checked:focus + &";
  var disabled = "input[type=" + type + "]:disabled + &";
  var focus = "input[type=" + type + "]:focus + &";
  var hover = "input[type=" + type + "]:hover:not(:disabled):not(:checked) + &";
  var checked = "input[type=" + type + "]:checked + &, input[type=" + type + "][aria-checked=mixed] + &";
  var invalid = "input[type=" + type + "][aria-invalid=true] + &";
  var child = "& > *";
  return /*#__PURE__*/React.createElement(_system.chakra.div, _extends({}, rest, {
    "aria-hidden": true,
    __css: (_ref = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 120ms",
      flexShrink: 0
    }, _ref[focus] = _focus, _ref[hover] = _hover, _ref[disabled] = _disabled, _ref[invalid] = _invalid, _ref[checkedAndDisabled] = _checkedAndDisabled, _ref[checkedAndFocus] = _checkedAndFocus, _ref[checkedAndHover] = _checkedAndHover, _ref[child] = _child, _ref[checked] = _extends({}, _checked, (_extends2 = {}, _extends2[child] = _checkedAndChild, _extends2)), _ref)
  }), children);
};

exports.ControlBox = ControlBox;

if (_utils.__DEV__) {
  ControlBox.displayName = "ControlBox";
}

var _default = ControlBox;
exports["default"] = _default;
//# sourceMappingURL=control-box.js.map