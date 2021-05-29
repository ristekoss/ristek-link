"use strict";

exports.__esModule = true;
exports.useEnvironment = useEnvironment;
exports.EnvironmentProvider = EnvironmentProvider;

var _utils = require("@chakra-ui/utils");

var _react = _interopRequireWildcard(require("react"));

var _mockDocument = require("./mock-document");

var _mockWindow = require("./mock-window");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var mockEnv = {
  window: _mockWindow.ssrWindow,
  document: _mockDocument.ssrDocument
};
var defaultEnv = _utils.isBrowser ? {
  window: window,
  document: document
} : mockEnv;
var EnvironmentContext = /*#__PURE__*/(0, _react.createContext)(defaultEnv);

if (_utils.__DEV__) {
  EnvironmentContext.displayName = "EnvironmentContext";
}

function useEnvironment() {
  return (0, _react.useContext)(EnvironmentContext);
}

function EnvironmentProvider(props) {
  var children = props.children,
      environmentProp = props.environment;

  var _useState = (0, _react.useState)(null),
      node = _useState[0],
      setNode = _useState[1];

  var context = (0, _react.useMemo)(function () {
    var _ref;

    var doc = node == null ? void 0 : node.ownerDocument;
    var win = node == null ? void 0 : node.ownerDocument.defaultView;
    var nodeEnv = doc ? {
      document: doc,
      window: win
    } : undefined;
    var env = (_ref = environmentProp != null ? environmentProp : nodeEnv) != null ? _ref : defaultEnv;
    return env;
  }, [node, environmentProp]);
  var showEnvGetter = !node && !environmentProp;
  return /*#__PURE__*/_react["default"].createElement(EnvironmentContext.Provider, {
    value: context
  }, children, showEnvGetter && /*#__PURE__*/_react["default"].createElement("span", {
    ref: function ref(el) {
      if (el) setNode(el);
    }
  }));
}

if (_utils.__DEV__) {
  EnvironmentProvider.displayName = "EnvironmentProvider";
}
//# sourceMappingURL=env.js.map