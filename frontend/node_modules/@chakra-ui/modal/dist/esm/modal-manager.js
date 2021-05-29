function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { useEffect } from "react";
/**
 * Proper state management for nested modals.
 * Simplified, but inspired by material-ui's ModalManager class.
 */

class ModalManager {
  constructor() {
    _defineProperty(this, "modals", void 0);

    this.modals = [];
  }

  add(modal) {
    this.modals.push(modal);
  }

  remove(modal) {
    this.modals = this.modals.filter(_modal => _modal !== modal);
  }

  isTopModal(modal) {
    var topmostModal = this.modals[this.modals.length - 1];
    return topmostModal === modal;
  }

}

export var manager = new ModalManager();
export function useModalManager(ref, isOpen) {
  useEffect(() => {
    if (isOpen) {
      manager.add(ref);
    }

    return () => {
      manager.remove(ref);
    };
  }, [isOpen, ref]);
}
//# sourceMappingURL=modal-manager.js.map