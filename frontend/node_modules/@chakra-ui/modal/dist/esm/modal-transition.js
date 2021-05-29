function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { chakra } from "@chakra-ui/system";
import { scaleFadeConfig, slideFadeConfig } from "@chakra-ui/transition";
import { motion } from "framer-motion";
import * as React from "react";
var transitions = {
  slideInBottom: _extends({}, slideFadeConfig, {
    custom: {
      offsetY: 16,
      reverse: true
    }
  }),
  slideInRight: _extends({}, slideFadeConfig, {
    custom: {
      offsetX: 16,
      reverse: true
    }
  }),
  scale: _extends({}, scaleFadeConfig, {
    custom: {
      initialScale: 0.95,
      reverse: true
    }
  }),
  none: {}
};
var Motion = chakra(motion.section);
export var ModalTransition = /*#__PURE__*/React.forwardRef((props, ref) => {
  var {
    preset
  } = props,
      rest = _objectWithoutPropertiesLoose(props, ["preset"]);

  var motionProps = transitions[preset];
  return /*#__PURE__*/React.createElement(Motion, _extends({
    ref: ref
  }, motionProps, rest));
});
//# sourceMappingURL=modal-transition.js.map