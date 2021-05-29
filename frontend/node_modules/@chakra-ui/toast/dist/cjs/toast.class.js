"use strict";

exports.__esModule = true;
exports.toast = void 0;

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _toastManager = require("./toast-manager");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var portalId = "chakra-toast-portal";

var Toaster =
/**
 * Initialize the manager and mount it in the DOM
 * inside the portal node.
 *
 * @todo
 *
 * Update toast constructor to use `PortalManager`'s node or document.body.
 * Once done, we can remove the `zIndex` in `toast.manager.tsx`
 */
function Toaster() {
  var _this = this;

  _defineProperty(this, "createToast", void 0);

  _defineProperty(this, "removeAll", void 0);

  _defineProperty(this, "closeToast", void 0);

  _defineProperty(this, "updateToast", void 0);

  _defineProperty(this, "isToastActive", void 0);

  _defineProperty(this, "bindFunctions", function (methods) {
    _this.createToast = methods.notify;
    _this.removeAll = methods.closeAll;
    _this.closeToast = methods.close;
    _this.updateToast = methods.update;
    _this.isToastActive = methods.isActive;
  });

  _defineProperty(this, "notify", function (message, options) {
    if (options === void 0) {
      options = {};
    }

    return _this.createToast == null ? void 0 : _this.createToast(message, options);
  });

  _defineProperty(this, "close", function (id) {
    _this.closeToast == null ? void 0 : _this.closeToast(id);
  });

  _defineProperty(this, "closeAll", function (options) {
    _this.removeAll == null ? void 0 : _this.removeAll(options);
  });

  _defineProperty(this, "update", function (id, options) {
    if (options === void 0) {
      options = {};
    }

    _this.updateToast == null ? void 0 : _this.updateToast(id, options);
  });

  _defineProperty(this, "isActive", function (id) {
    return _this.isToastActive == null ? void 0 : _this.isToastActive(id);
  });

  if (!_utils.isBrowser) return;
  var portal;
  var existingPortal = document.getElementById(portalId);

  if (existingPortal) {
    portal = existingPortal;
  } else {
    var _document$body;

    var div = document.createElement("div");
    div.id = portalId;
    (_document$body = document.body) == null ? void 0 : _document$body.appendChild(div);
    portal = div;
  }

  (0, _reactDom.render)( /*#__PURE__*/React.createElement(_toastManager.ToastManager, {
    notify: this.bindFunctions
  }), portal);
};

var toast = new Toaster();
exports.toast = toast;
//# sourceMappingURL=toast.class.js.map