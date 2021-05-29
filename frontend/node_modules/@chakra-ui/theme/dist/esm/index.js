function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import components from "./components";
import foundations from "./foundations";
import styles from "./styles";
var direction = "ltr";
var config = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
};
export var theme = _extends({
  direction
}, foundations, {
  components,
  styles,
  config
});
export * from "./theme.types";
export * from "./utils";
export default theme;
//# sourceMappingURL=index.js.map