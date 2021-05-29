import { toArray } from './array';
import { isVisible, notHiddenInput } from './is';
import { orderByTabIndex } from './tabOrder';
import { getFocusables, getParentAutofocusables } from './tabUtils';
export var filterFocusable = function (nodes) {
    return toArray(nodes)
        .filter(function (node) { return isVisible(node); })
        .filter(function (node) { return notHiddenInput(node); });
};
export var getTabbableNodes = function (topNodes, withGuards) {
    return orderByTabIndex(filterFocusable(getFocusables(topNodes, withGuards)), true, withGuards);
};
export var getAllTabbableNodes = function (topNodes) {
    return orderByTabIndex(filterFocusable(getFocusables(topNodes)), false);
};
export var parentAutofocusables = function (topNode) {
    return filterFocusable(getParentAutofocusables(topNode));
};
