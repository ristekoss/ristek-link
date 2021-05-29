"use strict";

exports.__esModule = true;
exports.useModalManager = useModalManager;
exports.manager = void 0;

var _react = require("react");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Proper state management for nested modals.
 * Simplified, but inspired by material-ui's ModalManager class.
 */
var ModalManager = /*#__PURE__*/function () {
  function ModalManager() {
    _defineProperty(this, "modals", void 0);

    this.modals = [];
  }

  var _proto = ModalManager.prototype;

  _proto.add = function add(modal) {
    this.modals.push(modal);
  };

  _proto.remove = function remove(modal) {
    this.modals = this.modals.filter(function (_modal) {
      return _modal !== modal;
    });
  };

  _proto.isTopModal = function isTopModal(modal) {
    var topmostModal = this.modals[this.modals.length - 1];
    return topmostModal === modal;
  };

  return ModalManager;
}();

var manager = new ModalManager();
exports.manager = manager;

function useModalManager(ref, isOpen) {
  (0, _react.useEffect)(function () {
    if (isOpen) {
      manager.add(ref);
    }

    return function () {
      manager.remove(ref);
    };
  }, [isOpen, ref]);
}
//# sourceMappingURL=modal-manager.js.map