"use strict";

exports.__esModule = true;
exports.InputRightAddon = exports.InputLeftAddon = exports.InputAddon = void 0;

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var placements = {
  left: {
    marginEnd: "-1px",
    borderEndRadius: 0,
    borderEndColor: "transparent"
  },
  right: {
    marginStart: "-1px",
    borderStartRadius: 0,
    borderStartColor: "transparent"
  }
};
var StyledAddon = (0, _system.chakra)("div", {
  baseStyle: {
    flex: "0 0 auto",
    width: "auto",
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap"
  }
});

/**
 * InputAddon
 *
 * Element to append or prepend to an input
 */
var InputAddon = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var _placements$placement;

  var _props$placement = props.placement,
      placement = _props$placement === void 0 ? "left" : _props$placement,
      rest = _objectWithoutPropertiesLoose(props, ["placement"]);

  var placementStyles = (_placements$placement = placements[placement]) != null ? _placements$placement : {};
  var styles = (0, _system.useStyles)();
  return /*#__PURE__*/React.createElement(StyledAddon, _extends({
    ref: ref
  }, rest, {
    __css: _extends({}, styles.addon, placementStyles)
  }));
});
exports.InputAddon = InputAddon;

if (_utils.__DEV__) {
  InputAddon.displayName = "InputAddon";
}
/**
 * InputLeftAddon
 *
 * Element to append to the left of an input
 */


var InputLeftAddon = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  return /*#__PURE__*/React.createElement(InputAddon, _extends({
    ref: ref,
    placement: "left"
  }, props, {
    className: (0, _utils.cx)("chakra-input__left-addon", props.className)
  }));
});
exports.InputLeftAddon = InputLeftAddon;

if (_utils.__DEV__) {
  InputLeftAddon.displayName = "InputLeftAddon";
} // This is used in `input-group.tsx`


InputLeftAddon.id = "InputLeftAddon";
/**
 * InputRightAddon
 *
 * Element to append to the right of an input
 */

var InputRightAddon = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  return /*#__PURE__*/React.createElement(InputAddon, _extends({
    ref: ref,
    placement: "right"
  }, props, {
    className: (0, _utils.cx)("chakra-input__right-addon", props.className)
  }));
});
exports.InputRightAddon = InputRightAddon;

if (_utils.__DEV__) {
  InputRightAddon.displayName = "InputRightAddon";
} // This is used in `input-group.tsx`


InputRightAddon.id = "InputRightAddon";
//# sourceMappingURL=input-addon.js.map