function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { sortNodes, isElement, getNextIndex, getPrevIndex } from "./utils";

/**
 * @internal
 *
 * Class to manage descendants and their relative indices in the DOM.
 * It uses `node.compareDocumentPosition(...)` under the hood
 */
export class DescendantsManager {
  constructor() {
    var _this = this;

    _defineProperty(this, "descendants", new Map());

    _defineProperty(this, "register", nodeOrOptions => {
      if (nodeOrOptions == null) return;

      if (isElement(nodeOrOptions)) {
        return this.registerNode(nodeOrOptions);
      }

      return node => {
        this.registerNode(node, nodeOrOptions);
      };
    });

    _defineProperty(this, "unregister", node => {
      this.descendants.delete(node);
      var sorted = sortNodes(Array.from(this.descendants.keys()));
      this.assignIndex(sorted);
    });

    _defineProperty(this, "destroy", () => {
      this.descendants.clear();
    });

    _defineProperty(this, "assignIndex", descendants => {
      this.descendants.forEach(descendant => {
        var index = descendants.indexOf(descendant.node);
        descendant.index = index;
        descendant.node.dataset.index = descendant.index.toString();
      });
    });

    _defineProperty(this, "count", () => this.descendants.size);

    _defineProperty(this, "enabledCount", () => this.enabledValues().length);

    _defineProperty(this, "values", () => {
      var values = Array.from(this.descendants.values());
      return values.sort((a, b) => a.index - b.index);
    });

    _defineProperty(this, "enabledValues", () => {
      return this.values().filter(descendant => !descendant.disabled);
    });

    _defineProperty(this, "item", index => {
      if (this.count() === 0) return undefined;
      return this.values()[index];
    });

    _defineProperty(this, "enabledItem", index => {
      if (this.enabledCount() === 0) return undefined;
      return this.enabledValues()[index];
    });

    _defineProperty(this, "first", () => this.item(0));

    _defineProperty(this, "firstEnabled", () => this.enabledItem(0));

    _defineProperty(this, "last", () => this.item(this.descendants.size - 1));

    _defineProperty(this, "lastEnabled", () => {
      var lastIndex = this.enabledValues().length - 1;
      return this.enabledItem(lastIndex);
    });

    _defineProperty(this, "indexOf", node => {
      var _this$descendants$get, _this$descendants$get2;

      if (!node) return -1;
      return (_this$descendants$get = (_this$descendants$get2 = this.descendants.get(node)) == null ? void 0 : _this$descendants$get2.index) != null ? _this$descendants$get : -1;
    });

    _defineProperty(this, "enabledIndexOf", node => {
      if (node == null) return -1;
      return this.enabledValues().findIndex(i => i.node.isSameNode(node));
    });

    _defineProperty(this, "next", function (index, loop) {
      if (loop === void 0) {
        loop = true;
      }

      var next = getNextIndex(index, _this.count(), loop);
      return _this.item(next);
    });

    _defineProperty(this, "nextEnabled", function (index, loop) {
      if (loop === void 0) {
        loop = true;
      }

      var item = _this.item(index);

      if (!item) return;

      var enabledIndex = _this.enabledIndexOf(item.node);

      var nextEnabledIndex = getNextIndex(enabledIndex, _this.enabledCount(), loop);
      return _this.enabledItem(nextEnabledIndex);
    });

    _defineProperty(this, "prev", function (index, loop) {
      if (loop === void 0) {
        loop = true;
      }

      var prev = getPrevIndex(index, _this.count() - 1, loop);
      return _this.item(prev);
    });

    _defineProperty(this, "prevEnabled", function (index, loop) {
      if (loop === void 0) {
        loop = true;
      }

      var item = _this.item(index);

      if (!item) return;

      var enabledIndex = _this.enabledIndexOf(item.node);

      var prevEnabledIndex = getPrevIndex(enabledIndex, _this.enabledCount() - 1, loop);
      return _this.enabledItem(prevEnabledIndex);
    });

    _defineProperty(this, "registerNode", (node, options) => {
      if (!node || this.descendants.has(node)) return;
      var keys = Array.from(this.descendants.keys()).concat(node);
      var sorted = sortNodes(keys);

      if (options != null && options.disabled) {
        options.disabled = !!options.disabled;
      }

      var descendant = _extends({
        node,
        index: -1
      }, options);

      this.descendants.set(node, descendant);
      this.assignIndex(sorted);
    });
  }

}
//# sourceMappingURL=descendant.js.map