"use strict";

exports.__esModule = true;
exports.usePopoverContext = exports.PopoverProvider = void 0;

var _reactUtils = require("@chakra-ui/react-utils");

var _createContext = (0, _reactUtils.createContext)({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}),
    PopoverProvider = _createContext[0],
    usePopoverContext = _createContext[1];

exports.usePopoverContext = usePopoverContext;
exports.PopoverProvider = PopoverProvider;
//# sourceMappingURL=popover-context.js.map