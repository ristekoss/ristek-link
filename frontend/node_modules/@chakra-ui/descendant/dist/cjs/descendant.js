"use strict";

exports.__esModule = true;
exports.DescendantsManager = void 0;

var _utils = require("./utils");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @internal
 *
 * Class to manage descendants and their relative indices in the DOM.
 * It uses `node.compareDocumentPosition(...)` under the hood
 */
var DescendantsManager = function DescendantsManager() {
  var _this = this;

  _defineProperty(this, "descendants", new Map());

  _defineProperty(this, "register", function (nodeOrOptions) {
    if (nodeOrOptions == null) return;

    if ((0, _utils.isElement)(nodeOrOptions)) {
      return _this.registerNode(nodeOrOptions);
    }

    return function (node) {
      _this.registerNode(node, nodeOrOptions);
    };
  });

  _defineProperty(this, "unregister", function (node) {
    _this.descendants["delete"](node);

    var sorted = (0, _utils.sortNodes)(Array.from(_this.descendants.keys()));

    _this.assignIndex(sorted);
  });

  _defineProperty(this, "destroy", function () {
    _this.descendants.clear();
  });

  _defineProperty(this, "assignIndex", function (descendants) {
    _this.descendants.forEach(function (descendant) {
      var index = descendants.indexOf(descendant.node);
      descendant.index = index;
      descendant.node.dataset.index = descendant.index.toString();
    });
  });

  _defineProperty(this, "count", function () {
    return _this.descendants.size;
  });

  _defineProperty(this, "enabledCount", function () {
    return _this.enabledValues().length;
  });

  _defineProperty(this, "values", function () {
    var values = Array.from(_this.descendants.values());
    return values.sort(function (a, b) {
      return a.index - b.index;
    });
  });

  _defineProperty(this, "enabledValues", function () {
    return _this.values().filter(function (descendant) {
      return !descendant.disabled;
    });
  });

  _defineProperty(this, "item", function (index) {
    if (_this.count() === 0) return undefined;
    return _this.values()[index];
  });

  _defineProperty(this, "enabledItem", function (index) {
    if (_this.enabledCount() === 0) return undefined;
    return _this.enabledValues()[index];
  });

  _defineProperty(this, "first", function () {
    return _this.item(0);
  });

  _defineProperty(this, "firstEnabled", function () {
    return _this.enabledItem(0);
  });

  _defineProperty(this, "last", function () {
    return _this.item(_this.descendants.size - 1);
  });

  _defineProperty(this, "lastEnabled", function () {
    var lastIndex = _this.enabledValues().length - 1;
    return _this.enabledItem(lastIndex);
  });

  _defineProperty(this, "indexOf", function (node) {
    var _this$descendants$get, _this$descendants$get2;

    if (!node) return -1;
    return (_this$descendants$get = (_this$descendants$get2 = _this.descendants.get(node)) == null ? void 0 : _this$descendants$get2.index) != null ? _this$descendants$get : -1;
  });

  _defineProperty(this, "enabledIndexOf", function (node) {
    if (node == null) return -1;
    return _this.enabledValues().findIndex(function (i) {
      return i.node.isSameNode(node);
    });
  });

  _defineProperty(this, "next", function (index, loop) {
    if (loop === void 0) {
      loop = true;
    }

    var next = (0, _utils.getNextIndex)(index, _this.count(), loop);
    return _this.item(next);
  });

  _defineProperty(this, "nextEnabled", function (index, loop) {
    if (loop === void 0) {
      loop = true;
    }

    var item = _this.item(index);

    if (!item) return;

    var enabledIndex = _this.enabledIndexOf(item.node);

    var nextEnabledIndex = (0, _utils.getNextIndex)(enabledIndex, _this.enabledCount(), loop);
    return _this.enabledItem(nextEnabledIndex);
  });

  _defineProperty(this, "prev", function (index, loop) {
    if (loop === void 0) {
      loop = true;
    }

    var prev = (0, _utils.getPrevIndex)(index, _this.count() - 1, loop);
    return _this.item(prev);
  });

  _defineProperty(this, "prevEnabled", function (index, loop) {
    if (loop === void 0) {
      loop = true;
    }

    var item = _this.item(index);

    if (!item) return;

    var enabledIndex = _this.enabledIndexOf(item.node);

    var prevEnabledIndex = (0, _utils.getPrevIndex)(enabledIndex, _this.enabledCount() - 1, loop);
    return _this.enabledItem(prevEnabledIndex);
  });

  _defineProperty(this, "registerNode", function (node, options) {
    if (!node || _this.descendants.has(node)) return;
    var keys = Array.from(_this.descendants.keys()).concat(node);
    var sorted = (0, _utils.sortNodes)(keys);

    if (options != null && options.disabled) {
      options.disabled = !!options.disabled;
    }

    var descendant = _extends({
      node: node,
      index: -1
    }, options);

    _this.descendants.set(node, descendant);

    _this.assignIndex(sorted);
  });
};

exports.DescendantsManager = DescendantsManager;
//# sourceMappingURL=descendant.js.map