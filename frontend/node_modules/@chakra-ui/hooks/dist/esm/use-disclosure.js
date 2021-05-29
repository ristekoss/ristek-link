function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { callAllHandlers } from "@chakra-ui/utils";
import * as React from "react";
import { useControllableProp } from "./use-controllable";
import { useId } from "./use-id";
export function useDisclosure(props) {
  if (props === void 0) {
    props = {};
  }

  var {
    onClose: onCloseProp,
    onOpen: onOpenProp,
    isOpen: isOpenProp,
    id: idProp
  } = props;
  var [isOpenState, setIsOpen] = React.useState(props.defaultIsOpen || false);
  var [isControlled, isOpen] = useControllableProp(isOpenProp, isOpenState);
  var id = useId(idProp, "disclosure");
  var onClose = React.useCallback(() => {
    if (!isControlled) {
      setIsOpen(false);
    }

    onCloseProp == null ? void 0 : onCloseProp();
  }, [isControlled, onCloseProp]);
  var onOpen = React.useCallback(() => {
    if (!isControlled) {
      setIsOpen(true);
    }

    onOpenProp == null ? void 0 : onOpenProp();
  }, [isControlled, onOpenProp]);
  var onToggle = React.useCallback(() => {
    var action = isOpen ? onClose : onOpen;
    action();
  }, [isOpen, onOpen, onClose]);
  return {
    isOpen: !!isOpen,
    onOpen,
    onClose,
    onToggle,
    isControlled,
    getButtonProps: function getButtonProps(props) {
      if (props === void 0) {
        props = {};
      }

      return _extends({}, props, {
        "aria-expanded": "true",
        "aria-controls": id,
        onClick: callAllHandlers(props.onClick, onToggle)
      });
    },
    getDisclosureProps: function getDisclosureProps(props) {
      if (props === void 0) {
        props = {};
      }

      return _extends({}, props, {
        hidden: !isOpen,
        id
      });
    }
  };
}
//# sourceMappingURL=use-disclosure.js.map