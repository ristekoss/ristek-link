"use strict";

exports.__esModule = true;
exports.createDescendantContext = createDescendantContext;

var _reactUtils = require("@chakra-ui/react-utils");

var _react = require("react");

var _descendant = require("./descendant");

var _utils = require("./utils");

/**
 * @internal
 * React hook that initializes the DescendantsManager
 */
function useDescendants() {
  var _useState = (0, _react.useState)(function () {
    return new _descendant.DescendantsManager();
  }),
      descendants = _useState[0];

  (0, _utils.useSafeLayoutEffect)(function () {
    return function () {
      return descendants.destroy();
    };
  });
  return descendants;
}

/* -------------------------------------------------------------------------------------------------
 * Descendants context to be used in component-land.
  - Mount the `DescendantsContextProvider` at the root of the component
  - Call `useDescendantsContext` anywhere you need access to the descendants information

  NB:  I recommend using `createDescendantContext` below
 * -----------------------------------------------------------------------------------------------*/
var _createContext = (0, _reactUtils.createContext)({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
}),
    DescendantsContextProvider = _createContext[0],
    useDescendantsContext = _createContext[1];
/**
 * @internal
 * This hook provides information a descendant such as:
 * - Its index compared to other descendants
 * - ref callback to register the descendant
 * - Its enabled index compared to other enabled descendants
 */


function useDescendant(options) {
  var descendants = useDescendantsContext();

  var _useState2 = (0, _react.useState)(-1),
      index = _useState2[0],
      setIndex = _useState2[1];

  var ref = (0, _react.useRef)(null);
  (0, _utils.useSafeLayoutEffect)(function () {
    return function () {
      if (!ref.current) return;
      descendants.unregister(ref.current);
    };
  }, []);
  (0, _utils.useSafeLayoutEffect)(function () {
    if (!ref.current) return;
    var dataIndex = Number(ref.current.dataset.index);

    if (index != dataIndex && !Number.isNaN(dataIndex)) {
      setIndex(dataIndex);
    }
  });
  var refCallback = options ? (0, _utils.cast)(descendants.register(options)) : (0, _utils.cast)(descendants.register);
  return {
    descendants: descendants,
    index: index,
    enabledIndex: descendants.enabledIndexOf(ref.current),
    register: (0, _reactUtils.mergeRefs)(refCallback, ref)
  };
}
/* -------------------------------------------------------------------------------------------------
 * Function that provides strongly typed versions of the context provider and hooks above.
   To be used in component-land
 * -----------------------------------------------------------------------------------------------*/


function createDescendantContext() {
  var ContextProvider = (0, _utils.cast)(DescendantsContextProvider);

  var _useDescendantsContext = function _useDescendantsContext() {
    return (0, _utils.cast)(useDescendantsContext());
  };

  var _useDescendant = function _useDescendant(options) {
    return useDescendant(options);
  };

  var _useDescendants = function _useDescendants() {
    return useDescendants();
  };

  return [// context provider
  ContextProvider, // call this when you need to read from context
  _useDescendantsContext, // descendants state information, to be called and passed to `ContextProvider`
  _useDescendants, // descendant index information
  _useDescendant];
}
//# sourceMappingURL=use-descendant.js.map