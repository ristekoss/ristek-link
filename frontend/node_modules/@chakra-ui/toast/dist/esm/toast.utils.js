/**
 * Given an array of toasts for a specific position.
 * It returns the toast that matches the `id` passed
 */
export var findById = (arr, id) => arr.find(toast => toast.id === id);
/**
 * Given the toast manager state, finds the toast that matches
 * the id and return its position and index
 */

export function findToast(toasts, id) {
  var position = getToastPosition(toasts, id);
  var index = position ? toasts[position].findIndex(toast => toast.id === id) : -1;
  return {
    position,
    index
  };
}
/**
 * Given the toast manager state, finds the position of the toast that
 * matches the `id`
 */

export var getToastPosition = (toasts, id) => {
  var _Object$values$flat$f;

  return (_Object$values$flat$f = Object.values(toasts).flat().find(toast => toast.id === id)) == null ? void 0 : _Object$values$flat$f.position;
};
/**
 * Given the toast manager state, checks if a specific toast is
 * still in the state, which means it is still visible on screen.
 */

export var isVisible = (toasts, id) => !!getToastPosition(toasts, id);
/**
 * Get's the styles to be applied to a toast's container
 * based on its position in the manager
 */

export function getToastStyle(position) {
  var isRighty = position.includes("right");
  var isLefty = position.includes("left");
  var alignItems = "center";
  if (isRighty) alignItems = "flex-end";
  if (isLefty) alignItems = "flex-start";
  return {
    display: "flex",
    flexDirection: "column",
    alignItems
  };
}
//# sourceMappingURL=toast.utils.js.map