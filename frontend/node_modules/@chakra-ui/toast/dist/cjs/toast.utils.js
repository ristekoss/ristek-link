"use strict";

exports.__esModule = true;
exports.findToast = findToast;
exports.getToastStyle = getToastStyle;
exports.isVisible = exports.getToastPosition = exports.findById = void 0;

/**
 * Given an array of toasts for a specific position.
 * It returns the toast that matches the `id` passed
 */
var findById = function findById(arr, id) {
  return arr.find(function (toast) {
    return toast.id === id;
  });
};
/**
 * Given the toast manager state, finds the toast that matches
 * the id and return its position and index
 */


exports.findById = findById;

function findToast(toasts, id) {
  var position = getToastPosition(toasts, id);
  var index = position ? toasts[position].findIndex(function (toast) {
    return toast.id === id;
  }) : -1;
  return {
    position: position,
    index: index
  };
}
/**
 * Given the toast manager state, finds the position of the toast that
 * matches the `id`
 */


var getToastPosition = function getToastPosition(toasts, id) {
  var _Object$values$flat$f;

  return (_Object$values$flat$f = Object.values(toasts).flat().find(function (toast) {
    return toast.id === id;
  })) == null ? void 0 : _Object$values$flat$f.position;
};
/**
 * Given the toast manager state, checks if a specific toast is
 * still in the state, which means it is still visible on screen.
 */


exports.getToastPosition = getToastPosition;

var isVisible = function isVisible(toasts, id) {
  return !!getToastPosition(toasts, id);
};
/**
 * Get's the styles to be applied to a toast's container
 * based on its position in the manager
 */


exports.isVisible = isVisible;

function getToastStyle(position) {
  var isRighty = position.includes("right");
  var isLefty = position.includes("left");
  var alignItems = "center";
  if (isRighty) alignItems = "flex-end";
  if (isLefty) alignItems = "flex-start";
  return {
    display: "flex",
    flexDirection: "column",
    alignItems: alignItems
  };
}
//# sourceMappingURL=toast.utils.js.map