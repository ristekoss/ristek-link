"use strict";

exports.__esModule = true;
exports.sortNodes = sortNodes;
exports.getNextIndex = getNextIndex;
exports.getPrevIndex = getPrevIndex;
exports.cast = exports.useSafeLayoutEffect = exports.isElement = void 0;

var _react = require("react");

/**
 * Sort an array of DOM nodes according to the HTML tree order
 * @see http://www.w3.org/TR/html5/infrastructure.html#tree-order
 */
function sortNodes(nodes) {
  return nodes.sort(function (a, b) {
    var compare = a.compareDocumentPosition(b);

    if (compare & Node.DOCUMENT_POSITION_FOLLOWING || compare & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      // a < b
      return -1;
    }

    if (compare & Node.DOCUMENT_POSITION_PRECEDING || compare & Node.DOCUMENT_POSITION_CONTAINS) {
      // a > b
      return 1;
    }

    if (compare & Node.DOCUMENT_POSITION_DISCONNECTED || compare & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC) {
      throw Error("Cannot sort the given nodes.");
    } else {
      return 0;
    }
  });
}

var isElement = function isElement(el) {
  return typeof el == "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
};

exports.isElement = isElement;

function getNextIndex(current, max, loop) {
  var next = current + 1;
  if (loop && next >= max) next = 0;
  return next;
}

function getPrevIndex(current, max, loop) {
  var next = current - 1;
  if (loop && next < 0) next = max;
  return next;
}

var useSafeLayoutEffect = typeof window !== "undefined" ? _react.useLayoutEffect : _react.useEffect;
exports.useSafeLayoutEffect = useSafeLayoutEffect;

var cast = function cast(value) {
  return value;
};

exports.cast = cast;
//# sourceMappingURL=utils.js.map