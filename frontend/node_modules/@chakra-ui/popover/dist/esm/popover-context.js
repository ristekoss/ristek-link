import { createContext } from "@chakra-ui/react-utils";
export var [PopoverProvider, usePopoverContext] = createContext({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
});
//# sourceMappingURL=popover-context.js.map