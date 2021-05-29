function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import { createDescendantContext } from "@chakra-ui/descendant";
import { useControllableState, useIds, useUnmountEffect } from "@chakra-ui/hooks";
import { createContext, mergeRefs } from "@chakra-ui/react-utils";
import { addItem, callAllHandlers, focus, isArray, isUndefined, normalizeEventKey, removeItem, warn } from "@chakra-ui/utils";
import { useCallback, useRef, useState } from "react";
/* -------------------------------------------------------------------------------------------------
 * Create context to track descendants and their indices
 * -----------------------------------------------------------------------------------------------*/

export var [AccordionDescendantsProvider, useAccordionDescendantsContext, useAccordionDescendants, useAccordionDescendant] = createDescendantContext();
/* -------------------------------------------------------------------------------------------------
 * useAccordion - The root react hook that manages all accordion items
 * -----------------------------------------------------------------------------------------------*/

/**
 * useAccordion hook provides all the state and focus management logic
 * for accordion items.
 */
export function useAccordion(props) {
  var {
    onChange,
    defaultIndex,
    index: indexProp,
    allowMultiple,
    allowToggle
  } = props,
      htmlProps = _objectWithoutPropertiesLoose(props, ["onChange", "defaultIndex", "index", "allowMultiple", "allowToggle"]); // validate the props and `warn` if used incorrectly


  allowMultipleWarning(props);
  allowMultipleAndAllowToggleWarning(props);
  /**
   * Think of this as the register to each accordion item.
   * We used to manage focus between accordion item buttons.
   *
   * Every accordion item, registers their button refs in this context
   */

  var descendants = useAccordionDescendants();
  /**
   * This state is used to track the index focused accordion
   * button when click on the button, tab on the button, or
   * use the down/up arrow to navigate.
   */

  var [focusedIndex, setFocusedIndex] = useState(-1);
  /**
   * Reset focused index when accordion unmounts
   * or descendants change
   */

  useUnmountEffect(() => {
    setFocusedIndex(-1);
  });
  /**
   * Hook that manages the controlled and un-controlled state
   * for the accordion.
   */

  var [index, setIndex] = useControllableState({
    value: indexProp,

    defaultValue() {
      if (allowMultiple) return defaultIndex != null ? defaultIndex : [];
      return defaultIndex != null ? defaultIndex : -1;
    },

    onChange
  });
  /**
   * Gets the `isOpen` and `onChange` props for a child accordion item based on
   * the child's index.
   *
   * @param idx {number} The index of the child accordion item
   */

  var getAccordionItemProps = idx => {
    var isOpen = false;

    if (idx !== null) {
      isOpen = isArray(index) ? index.includes(idx) : index === idx;
    }

    var onChange = isOpen => {
      if (idx === null) return;

      if (allowMultiple && isArray(index)) {
        var nextState = isOpen ? addItem(index, idx) : removeItem(index, idx);
        setIndex(nextState);
      } else if (isOpen) {
        setIndex(idx);
      } else if (allowToggle) {
        setIndex(-1);
      }
    };

    return {
      isOpen,
      onChange
    };
  };

  return {
    index,
    setIndex,
    htmlProps,
    getAccordionItemProps,
    focusedIndex,
    setFocusedIndex,
    descendants
  };
}
export var [AccordionProvider, useAccordionContext] = createContext({
  name: "AccordionContext",
  errorMessage: "useAccordionContext: `context` is undefined. Seems you forgot to wrap the accordion components in `<Accordion />`"
});
/* -------------------------------------------------------------------------------------------------
 * Hook for a single accordion item
 * -----------------------------------------------------------------------------------------------*/

/**
 * useAccordionItem
 *
 * React hook that provides the open/close functionality
 * for an accordion item and its children
 */
export function useAccordionItem(props) {
  var {
    isDisabled,
    isFocusable,
    id
  } = props,
      htmlProps = _objectWithoutPropertiesLoose(props, ["isDisabled", "isFocusable", "id"]);

  var {
    getAccordionItemProps,
    setFocusedIndex
  } = useAccordionContext();
  var buttonRef = useRef(null);
  /**
   * Generate unique ids for all accordion item components (button and panel)
   */

  var [buttonId, panelId] = useIds(id, "accordion-button", "accordion-panel");
  focusableNotDisabledWarning(props);
  /**
   * Think of this as a way to register this accordion item
   * with its parent `useAccordion`
   */

  var {
    register,
    index,
    descendants
  } = useAccordionDescendant({
    disabled: isDisabled && !isFocusable
  });
  var {
    isOpen,
    onChange
  } = getAccordionItemProps(index === -1 ? null : index);
  warnIfOpenAndDisabled({
    isOpen,
    isDisabled
  });

  var onOpen = () => {
    onChange == null ? void 0 : onChange(true);
  };

  var onClose = () => {
    onChange == null ? void 0 : onChange(false);
  };
  /**
   * Toggle the visibility of the accordion item
   */


  var onClick = useCallback(() => {
    onChange == null ? void 0 : onChange(!isOpen);
    setFocusedIndex(index);
  }, [index, setFocusedIndex, isOpen, onChange]);
  /**
   * Manage keyboard navigation between accordion items.
   */

  var onKeyDown = useCallback(event => {
    var eventKey = normalizeEventKey(event);
    var keyMap = {
      ArrowDown: () => {
        var next = descendants.nextEnabled(index);
        if (next) focus(next.node);
      },
      ArrowUp: () => {
        var prev = descendants.prevEnabled(index);
        if (prev) focus(prev.node);
      },
      Home: () => {
        var first = descendants.firstEnabled();
        if (first) focus(first.node);
      },
      End: () => {
        var last = descendants.lastEnabled();
        if (last) focus(last.node);
      }
    };
    var action = keyMap[eventKey];

    if (action) {
      event.preventDefault();
      action(event);
    }
  }, [descendants, index]);
  /**
   * Since each accordion item's button still remains tabbable, let's
   * update the focusedIndex when it receives focus
   */

  var onFocus = useCallback(() => {
    setFocusedIndex(index);
  }, [setFocusedIndex, index]);
  var getButtonProps = useCallback(function (props, ref) {
    if (props === void 0) {
      props = {};
    }

    if (ref === void 0) {
      ref = null;
    }

    return _extends({}, props, {
      type: "button",
      ref: mergeRefs(register, buttonRef, ref),
      id: buttonId,
      disabled: !!isDisabled,
      "aria-expanded": !!isOpen,
      "aria-controls": panelId,
      onClick: callAllHandlers(props.onClick, onClick),
      onFocus: callAllHandlers(props.onFocus, onFocus),
      onKeyDown: callAllHandlers(props.onKeyDown, onKeyDown)
    });
  }, [buttonId, isDisabled, isOpen, onClick, onFocus, onKeyDown, panelId, register]);
  var getPanelProps = useCallback(function (props, ref) {
    if (props === void 0) {
      props = {};
    }

    if (ref === void 0) {
      ref = null;
    }

    return _extends({}, props, {
      ref,
      role: "region",
      id: panelId,
      "aria-labelledby": buttonId,
      hidden: !isOpen
    });
  }, [buttonId, isOpen, panelId]);
  return {
    isOpen,
    isDisabled,
    isFocusable,
    onOpen,
    onClose,
    getButtonProps,
    getPanelProps,
    htmlProps
  };
}

/* -------------------------------------------------------------------------------------------------
 * Validate accordion and accordion item props, and emit warnings.
 * -----------------------------------------------------------------------------------------------*/
function allowMultipleWarning(props) {
  var index = props.index || props.defaultIndex;
  var condition = !isUndefined(index) && !isArray(index) && props.allowMultiple;
  warn({
    condition: !!condition,
    message: "If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: " + typeof index + ","
  });
}

function allowMultipleAndAllowToggleWarning(props) {
  warn({
    condition: !!(props.allowMultiple && props.allowToggle),
    message: "If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"
  });
}

function focusableNotDisabledWarning(props) {
  warn({
    condition: !!(props.isFocusable && !props.isDisabled),
    message: "Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.\n    "
  });
}

function warnIfOpenAndDisabled(props) {
  warn({
    condition: props.isOpen && !!props.isDisabled,
    message: "Cannot open a disabled accordion item"
  });
}
//# sourceMappingURL=use-accordion.js.map