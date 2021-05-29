function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { forwardRef } from "@chakra-ui/system";
import * as React from "react";
import { Modal, ModalContent } from "./modal";
export function AlertDialog(props) {
  var {
    leastDestructiveRef
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["leastDestructiveRef"]);

  return /*#__PURE__*/React.createElement(Modal, _extends({}, rest, {
    initialFocusRef: leastDestructiveRef
  }));
}
export var AlertDialogContent = /*#__PURE__*/forwardRef((props, ref) => /*#__PURE__*/React.createElement(ModalContent, _extends({
  ref: ref,
  role: "alertdialog"
}, props)));
export { ModalBody as AlertDialogBody, ModalCloseButton as AlertDialogCloseButton, ModalFooter as AlertDialogFooter, ModalHeader as AlertDialogHeader, ModalOverlay as AlertDialogOverlay } from "./modal";
//# sourceMappingURL=alert-dialog.js.map