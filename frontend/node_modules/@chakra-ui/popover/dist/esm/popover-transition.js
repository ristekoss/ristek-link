function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { chakra } from "@chakra-ui/system";
import { motion } from "framer-motion";
import { mergeWith } from "@chakra-ui/utils";
import React from "react";
import { usePopoverContext } from "./popover-context"; // TODO: consider moving this to some util

var mergeVariants = variants => {
  if (!variants) return;
  return mergeWith(variants, {
    enter: {
      visibility: "visible"
    },
    exit: {
      transitionEnd: {
        visibility: "hidden"
      }
    }
  });
};

var scaleFade = {
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: [0.4, 0, 1, 1]
    }
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: [0, 0, 0.2, 1]
    }
  }
};
var Section = motion(chakra.section);
export var PopoverTransition = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
    isOpen
  } = usePopoverContext();
  return /*#__PURE__*/React.createElement(Section, _extends({
    ref: ref,
    variants: mergeVariants(props.variants)
  }, props, {
    initial: false,
    animate: isOpen ? "enter" : "exit"
  }));
});
PopoverTransition.defaultProps = {
  variants: scaleFade
};
//# sourceMappingURL=popover-transition.js.map