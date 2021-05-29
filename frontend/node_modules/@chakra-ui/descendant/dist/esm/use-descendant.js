import { createContext, mergeRefs } from "@chakra-ui/react-utils";
import { useRef, useState } from "react";
import { DescendantsManager } from "./descendant";
import { useSafeLayoutEffect, cast } from "./utils";
/**
 * @internal
 * React hook that initializes the DescendantsManager
 */

function useDescendants() {
  var [descendants] = useState(() => new DescendantsManager());
  useSafeLayoutEffect(() => {
    return () => descendants.destroy();
  });
  return descendants;
}

/* -------------------------------------------------------------------------------------------------
 * Descendants context to be used in component-land.
  - Mount the `DescendantsContextProvider` at the root of the component
  - Call `useDescendantsContext` anywhere you need access to the descendants information

  NB:  I recommend using `createDescendantContext` below
 * -----------------------------------------------------------------------------------------------*/
var [DescendantsContextProvider, useDescendantsContext] = createContext({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
/**
 * @internal
 * This hook provides information a descendant such as:
 * - Its index compared to other descendants
 * - ref callback to register the descendant
 * - Its enabled index compared to other enabled descendants
 */

function useDescendant(options) {
  var descendants = useDescendantsContext();
  var [index, setIndex] = useState(-1);
  var ref = useRef(null);
  useSafeLayoutEffect(() => {
    return () => {
      if (!ref.current) return;
      descendants.unregister(ref.current);
    };
  }, []);
  useSafeLayoutEffect(() => {
    if (!ref.current) return;
    var dataIndex = Number(ref.current.dataset.index);

    if (index != dataIndex && !Number.isNaN(dataIndex)) {
      setIndex(dataIndex);
    }
  });
  var refCallback = options ? cast(descendants.register(options)) : cast(descendants.register);
  return {
    descendants,
    index,
    enabledIndex: descendants.enabledIndexOf(ref.current),
    register: mergeRefs(refCallback, ref)
  };
}
/* -------------------------------------------------------------------------------------------------
 * Function that provides strongly typed versions of the context provider and hooks above.
   To be used in component-land
 * -----------------------------------------------------------------------------------------------*/


export function createDescendantContext() {
  var ContextProvider = cast(DescendantsContextProvider);

  var _useDescendantsContext = () => cast(useDescendantsContext());

  var _useDescendant = options => useDescendant(options);

  var _useDescendants = () => useDescendants();

  return [// context provider
  ContextProvider, // call this when you need to read from context
  _useDescendantsContext, // descendants state information, to be called and passed to `ContextProvider`
  _useDescendants, // descendant index information
  _useDescendant];
}
//# sourceMappingURL=use-descendant.js.map