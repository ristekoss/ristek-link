import * as React from "react";
import ReactFocusLock from "react-focus-lock";
import { __DEV__, getAllFocusable, focus } from "@chakra-ui/utils";
export var FocusLock = props => {
  var {
    initialFocusRef,
    finalFocusRef,
    contentRef,
    restoreFocus,
    children,
    isDisabled,
    autoFocus,
    persistentFocus,
    lockFocusAcrossFrames
  } = props;
  var onActivation = React.useCallback(() => {
    if (initialFocusRef != null && initialFocusRef.current) {
      initialFocusRef.current.focus();
    } else if (contentRef != null && contentRef.current) {
      var focusables = getAllFocusable(contentRef.current);

      if (focusables.length === 0) {
        focus(contentRef.current, {
          nextTick: true
        });
      }
    }
  }, [initialFocusRef, contentRef]);
  var onDeactivation = React.useCallback(() => {
    var _finalFocusRef$curren;

    finalFocusRef == null ? void 0 : (_finalFocusRef$curren = finalFocusRef.current) == null ? void 0 : _finalFocusRef$curren.focus();
  }, [finalFocusRef]);
  var returnFocus = restoreFocus && !finalFocusRef;
  return /*#__PURE__*/React.createElement(ReactFocusLock, {
    crossFrame: lockFocusAcrossFrames,
    persistentFocus: persistentFocus,
    autoFocus: autoFocus,
    disabled: isDisabled,
    onActivation: onActivation,
    onDeactivation: onDeactivation,
    returnFocus: returnFocus
  }, children);
};

if (__DEV__) {
  FocusLock.displayName = "FocusLock";
}

export default FocusLock;
//# sourceMappingURL=index.js.map