"use strict";

exports.__esModule = true;
exports.omitThemingProps = omitThemingProps;
exports["default"] = isTag;
exports.getDisplayName = getDisplayName;
exports.domElements = void 0;

var _utils = require("@chakra-ui/utils");

/**
 * Carefully selected html elements for chakra components.
 * This is mostly for `chakra.<element>` syntax.
 */
var domElements = ["a", "b", "article", "aside", "blockquote", "button", "caption", "cite", "circle", "code", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "img", "input", "kbd", "label", "li", "main", "mark", "nav", "ol", "p", "path", "pre", "q", "rect", "s", "svg", "section", "select", "strong", "small", "span", "sub", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "tr", "ul"];
exports.domElements = domElements;

function omitThemingProps(props) {
  return (0, _utils.omit)(props, ["styleConfig", "size", "variant", "colorScheme"]);
}

function isTag(target) {
  return (0, _utils.isString)(target) && (_utils.__DEV__ ? target.charAt(0) === target.charAt(0).toLowerCase() : true);
}

function getDisplayName(primitive) {
  return isTag(primitive) ? "chakra." + primitive : getComponentName(primitive);
}

function getComponentName(primitive) {
  return (_utils.__DEV__ ? (0, _utils.isString)(primitive) && primitive : false) || !(0, _utils.isString)(primitive) && primitive.displayName || !(0, _utils.isString)(primitive) && primitive.name || "ChakraComponent";
}
//# sourceMappingURL=system.utils.js.map