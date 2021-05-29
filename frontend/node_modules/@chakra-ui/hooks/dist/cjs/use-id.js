"use strict";

exports.__esModule = true;
exports.useId = useId;
exports.useIds = useIds;

var React = _interopRequireWildcard(require("react"));

var _useSafeLayoutEffect = require("./use-safe-layout-effect");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Credit: https://github.com/reach/reach-ui/blob/develop/packages/auto-id/src/index.tsx
 */
var handoffComplete = false;
var id = 0;

var genId = function genId() {
  return ++id;
};
/**
 * Reack hook to generate unique id
 *
 * @param idProp the external id passed from the user
 * @param prefix prefix to append before the id
 */


function useId(idProp, prefix) {
  var initialId = idProp || (handoffComplete ? genId() : null);

  var _React$useState = React.useState(initialId),
      uid = _React$useState[0],
      setUid = _React$useState[1];

  (0, _useSafeLayoutEffect.useSafeLayoutEffect)(function () {
    if (uid === null) setUid(genId());
  }, []);
  React.useEffect(function () {
    if (handoffComplete === false) {
      handoffComplete = true;
    }
  }, []);
  var id = uid != null ? uid.toString() : undefined;
  return prefix ? prefix + "-" + id : id;
}
/**
 * Reack hook to generate ids for use in compound components
 *
 * @param idProp the external id passed from the user
 * @param prefixes array of prefixes to use
 *
 * @example
 *
 * ```js
 * const [buttonId, menuId] = useIds("52", "button", "menu")
 *
 * // buttonId will be `button-52`
 * // menuId will be `menu-52`
 * ```
 */


function useIds(idProp) {
  var id = useId(idProp);

  for (var _len = arguments.length, prefixes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    prefixes[_key - 1] = arguments[_key];
  }

  return prefixes.map(function (prefix) {
    return prefix + "-" + id;
  });
}
//# sourceMappingURL=use-id.js.map