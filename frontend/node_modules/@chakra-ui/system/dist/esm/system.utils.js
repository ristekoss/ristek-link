import { isString, omit, __DEV__ } from "@chakra-ui/utils";

/**
 * Carefully selected html elements for chakra components.
 * This is mostly for `chakra.<element>` syntax.
 */
export var domElements = ["a", "b", "article", "aside", "blockquote", "button", "caption", "cite", "circle", "code", "dd", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "img", "input", "kbd", "label", "li", "main", "mark", "nav", "ol", "p", "path", "pre", "q", "rect", "s", "svg", "section", "select", "strong", "small", "span", "sub", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "tr", "ul"];
export function omitThemingProps(props) {
  return omit(props, ["styleConfig", "size", "variant", "colorScheme"]);
}
export default function isTag(target) {
  return isString(target) && (__DEV__ ? target.charAt(0) === target.charAt(0).toLowerCase() : true);
}
export function getDisplayName(primitive) {
  return isTag(primitive) ? "chakra." + primitive : getComponentName(primitive);
}

function getComponentName(primitive) {
  return (__DEV__ ? isString(primitive) && primitive : false) || !isString(primitive) && primitive.displayName || !isString(primitive) && primitive.name || "ChakraComponent";
}
//# sourceMappingURL=system.utils.js.map