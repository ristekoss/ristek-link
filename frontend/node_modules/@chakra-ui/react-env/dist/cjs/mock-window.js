"use strict";

exports.__esModule = true;
exports.ssrWindow = void 0;

var _mockDocument = require("./mock-document");

var noop = function noop() {};

var win = {
  document: _mockDocument.ssrDocument,
  navigator: {
    userAgent: ""
  },
  CustomEvent: function CustomEvent() {
    return this;
  },
  addEventListener: noop,
  removeEventListener: noop,
  getComputedStyle: function getComputedStyle() {
    return {
      getPropertyValue: function getPropertyValue() {
        return "";
      }
    };
  },
  matchMedia: function matchMedia() {
    return {
      matches: false,
      addListener: noop,
      removeListener: noop
    };
  },
  requestAnimationFrame: function requestAnimationFrame(callback) {
    if (typeof setTimeout === "undefined") {
      callback();
      return null;
    }

    return setTimeout(callback, 0);
  },
  cancelAnimationFrame: function cancelAnimationFrame(id) {
    if (typeof setTimeout === "undefined") return;
    clearTimeout(id);
  },
  setTimeout: function setTimeout() {
    return 0;
  },
  clearTimeout: noop,
  setInterval: function setInterval() {
    return 0;
  },
  clearInterval: noop
};
var ssrWindow = win;
exports.ssrWindow = ssrWindow;
//# sourceMappingURL=mock-window.js.map