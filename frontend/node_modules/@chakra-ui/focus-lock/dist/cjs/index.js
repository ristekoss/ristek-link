"use strict";

exports.__esModule = true;
exports["default"] = exports.FocusLock = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactFocusLock = _interopRequireDefault(require("react-focus-lock"));

var _utils = require("@chakra-ui/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var FocusLock = function FocusLock(props) {
  var initialFocusRef = props.initialFocusRef,
      finalFocusRef = props.finalFocusRef,
      contentRef = props.contentRef,
      restoreFocus = props.restoreFocus,
      children = props.children,
      isDisabled = props.isDisabled,
      autoFocus = props.autoFocus,
      persistentFocus = props.persistentFocus,
      lockFocusAcrossFrames = props.lockFocusAcrossFrames;
  var onActivation = React.useCallback(function () {
    if (initialFocusRef != null && initialFocusRef.current) {
      initialFocusRef.current.focus();
    } else if (contentRef != null && contentRef.current) {
      var focusables = (0, _utils.getAllFocusable)(contentRef.current);

      if (focusables.length === 0) {
        (0, _utils.focus)(contentRef.current, {
          nextTick: true
        });
      }
    }
  }, [initialFocusRef, contentRef]);
  var onDeactivation = React.useCallback(function () {
    var _finalFocusRef$curren;

    finalFocusRef == null ? void 0 : (_finalFocusRef$curren = finalFocusRef.current) == null ? void 0 : _finalFocusRef$curren.focus();
  }, [finalFocusRef]);
  var returnFocus = restoreFocus && !finalFocusRef;
  return /*#__PURE__*/React.createElement(_reactFocusLock["default"], {
    crossFrame: lockFocusAcrossFrames,
    persistentFocus: persistentFocus,
    autoFocus: autoFocus,
    disabled: isDisabled,
    onActivation: onActivation,
    onDeactivation: onDeactivation,
    returnFocus: returnFocus
  }, children);
};

exports.FocusLock = FocusLock;

if (_utils.__DEV__) {
  FocusLock.displayName = "FocusLock";
}

var _default = FocusLock;
exports["default"] = _default;
//# sourceMappingURL=index.js.map