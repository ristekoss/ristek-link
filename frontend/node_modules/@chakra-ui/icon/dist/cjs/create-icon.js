"use strict";

exports.__esModule = true;
exports.createIcon = createIcon;

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

var _icon = require("./icon");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function createIcon(options) {
  var _options$viewBox = options.viewBox,
      viewBox = _options$viewBox === void 0 ? "0 0 24 24" : _options$viewBox,
      pathDefinition = options.d,
      path = options.path,
      displayName = options.displayName,
      _options$defaultProps = options.defaultProps,
      defaultProps = _options$defaultProps === void 0 ? {} : _options$defaultProps;
  var Comp = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
    return /*#__PURE__*/React.createElement(_icon.Icon, _extends({
      ref: ref,
      viewBox: viewBox
    }, defaultProps, props), path != null ? path : /*#__PURE__*/React.createElement("path", {
      fill: "currentColor",
      d: pathDefinition
    }));
  });

  if (_utils.__DEV__) {
    Comp.displayName = displayName;
  }

  return Comp;
}
//# sourceMappingURL=create-icon.js.map