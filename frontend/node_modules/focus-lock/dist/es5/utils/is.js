"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isElementHidden = function (computedStyle) {
    if (!computedStyle || !computedStyle.getPropertyValue) {
        return false;
    }
    return (computedStyle.getPropertyValue('display') === 'none' || computedStyle.getPropertyValue('visibility') === 'hidden');
};
exports.isVisible = function (node) {
    return !node ||
        node === document ||
        (node && node.nodeType === Node.DOCUMENT_NODE) ||
        (!isElementHidden(window.getComputedStyle(node, null)) &&
            exports.isVisible(node.parentNode && node.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                ? node.parentNode.host
                : node.parentNode));
};
exports.notHiddenInput = function (node) {
    return !((node.tagName === 'INPUT' || node.tagName === 'BUTTON') && (node.type === 'hidden' || node.disabled));
};
exports.isGuard = function (node) { return Boolean(node && node.dataset && node.dataset.focusGuard); };
exports.isNotAGuard = function (node) { return !exports.isGuard(node); };
exports.isDefined = function (x) { return Boolean(x); };
