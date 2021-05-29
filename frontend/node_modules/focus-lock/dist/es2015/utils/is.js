var isElementHidden = function (computedStyle) {
    if (!computedStyle || !computedStyle.getPropertyValue) {
        return false;
    }
    return (computedStyle.getPropertyValue('display') === 'none' || computedStyle.getPropertyValue('visibility') === 'hidden');
};
export var isVisible = function (node) {
    return !node ||
        node === document ||
        (node && node.nodeType === Node.DOCUMENT_NODE) ||
        (!isElementHidden(window.getComputedStyle(node, null)) &&
            isVisible(node.parentNode && node.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                ? node.parentNode.host
                : node.parentNode));
};
export var notHiddenInput = function (node) {
    return !((node.tagName === 'INPUT' || node.tagName === 'BUTTON') && (node.type === 'hidden' || node.disabled));
};
export var isGuard = function (node) { return Boolean(node && node.dataset && node.dataset.focusGuard); };
export var isNotAGuard = function (node) { return !isGuard(node); };
export var isDefined = function (x) { return Boolean(x); };
