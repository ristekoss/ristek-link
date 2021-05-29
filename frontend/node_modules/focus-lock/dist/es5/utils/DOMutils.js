"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_1 = require("./array");
var is_1 = require("./is");
var tabOrder_1 = require("./tabOrder");
var tabUtils_1 = require("./tabUtils");
exports.filterFocusable = function (nodes) {
    return array_1.toArray(nodes)
        .filter(function (node) { return is_1.isVisible(node); })
        .filter(function (node) { return is_1.notHiddenInput(node); });
};
exports.getTabbableNodes = function (topNodes, withGuards) {
    return tabOrder_1.orderByTabIndex(exports.filterFocusable(tabUtils_1.getFocusables(topNodes, withGuards)), true, withGuards);
};
exports.getAllTabbableNodes = function (topNodes) {
    return tabOrder_1.orderByTabIndex(exports.filterFocusable(tabUtils_1.getFocusables(topNodes)), false);
};
exports.parentAutofocusables = function (topNode) {
    return exports.filterFocusable(tabUtils_1.getParentAutofocusables(topNode));
};
