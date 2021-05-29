"use strict";

exports.__esModule = true;
exports.shouldForwardProp = void 0;

var _styledSystem = require("@chakra-ui/styled-system");

/**
 * List of props for emotion to omit from DOM.
 * It mostly consists of Chakra props
 */
var allPropNames = new Set([].concat(_styledSystem.propNames, ["textStyle", "layerStyle", "apply", "isTruncated", "noOfLines", "focusBorderColor", "errorBorderColor", "as", "__css", "css", "sx"]));
/**
 * htmlWidth and htmlHeight is used in the <Image />
 * component to support the native `width` and `height` attributes
 *
 * https://github.com/chakra-ui/chakra-ui/issues/149
 */

var validHTMLProps = new Set(["htmlWidth", "htmlHeight", "htmlSize"]);

var shouldForwardProp = function shouldForwardProp(prop) {
  return validHTMLProps.has(prop) || !allPropNames.has(prop);
};

exports.shouldForwardProp = shouldForwardProp;
//# sourceMappingURL=should-forward-prop.js.map