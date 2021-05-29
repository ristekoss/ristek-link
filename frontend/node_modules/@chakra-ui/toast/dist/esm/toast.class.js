function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { isBrowser } from "@chakra-ui/utils";
import * as React from "react";
import { render } from "react-dom";
import { ToastManager } from "./toast-manager";
var portalId = "chakra-toast-portal";

class Toaster {
  /**
   * Initialize the manager and mount it in the DOM
   * inside the portal node.
   *
   * @todo
   *
   * Update toast constructor to use `PortalManager`'s node or document.body.
   * Once done, we can remove the `zIndex` in `toast.manager.tsx`
   */
  constructor() {
    var _this = this;

    _defineProperty(this, "createToast", void 0);

    _defineProperty(this, "removeAll", void 0);

    _defineProperty(this, "closeToast", void 0);

    _defineProperty(this, "updateToast", void 0);

    _defineProperty(this, "isToastActive", void 0);

    _defineProperty(this, "bindFunctions", methods => {
      this.createToast = methods.notify;
      this.removeAll = methods.closeAll;
      this.closeToast = methods.close;
      this.updateToast = methods.update;
      this.isToastActive = methods.isActive;
    });

    _defineProperty(this, "notify", function (message, options) {
      if (options === void 0) {
        options = {};
      }

      return _this.createToast == null ? void 0 : _this.createToast(message, options);
    });

    _defineProperty(this, "close", id => {
      var _this$closeToast;

      (_this$closeToast = this.closeToast) == null ? void 0 : _this$closeToast.call(this, id);
    });

    _defineProperty(this, "closeAll", options => {
      var _this$removeAll;

      (_this$removeAll = this.removeAll) == null ? void 0 : _this$removeAll.call(this, options);
    });

    _defineProperty(this, "update", function (id, options) {
      if (options === void 0) {
        options = {};
      }

      _this.updateToast == null ? void 0 : _this.updateToast(id, options);
    });

    _defineProperty(this, "isActive", id => {
      var _this$isToastActive;

      return (_this$isToastActive = this.isToastActive) == null ? void 0 : _this$isToastActive.call(this, id);
    });

    if (!isBrowser) return;
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

    render( /*#__PURE__*/React.createElement(ToastManager, {
      notify: this.bindFunctions
    }), portal);
  }

}

export var toast = new Toaster();
//# sourceMappingURL=toast.class.js.map