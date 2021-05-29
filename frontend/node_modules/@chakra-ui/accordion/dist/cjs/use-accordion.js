"use strict";

exports.__esModule = true;
exports.useAccordion = useAccordion;
exports.useAccordionItem = useAccordionItem;
exports.useAccordionContext = exports.AccordionProvider = exports.useAccordionDescendant = exports.useAccordionDescendants = exports.useAccordionDescendantsContext = exports.AccordionDescendantsProvider = void 0;

var _descendant = require("@chakra-ui/descendant");

var _hooks = require("@chakra-ui/hooks");

var _reactUtils = require("@chakra-ui/react-utils");

var _utils = require("@chakra-ui/utils");

var _react = require("react");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* -------------------------------------------------------------------------------------------------
 * Create context to track descendants and their indices
 * -----------------------------------------------------------------------------------------------*/
var _createDescendantCont = (0, _descendant.createDescendantContext)(),
    AccordionDescendantsProvider = _createDescendantCont[0],
    useAccordionDescendantsContext = _createDescendantCont[1],
    useAccordionDescendants = _createDescendantCont[2],
    useAccordionDescendant = _createDescendantCont[3];
/* -------------------------------------------------------------------------------------------------
 * useAccordion - The root react hook that manages all accordion items
 * -----------------------------------------------------------------------------------------------*/


exports.useAccordionDescendant = useAccordionDescendant;
exports.useAccordionDescendants = useAccordionDescendants;
exports.useAccordionDescendantsContext = useAccordionDescendantsContext;
exports.AccordionDescendantsProvider = AccordionDescendantsProvider;

/**
 * useAccordion hook provides all the state and focus management logic
 * for accordion items.
 */
function useAccordion(props) {
  var onChange = props.onChange,
      defaultIndex = props.defaultIndex,
      indexProp = props.index,
      allowMultiple = props.allowMultiple,
      allowToggle = props.allowToggle,
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

  var _useState = (0, _react.useState)(-1),
      focusedIndex = _useState[0],
      setFocusedIndex = _useState[1];
  /**
   * Reset focused index when accordion unmounts
   * or descendants change
   */


  (0, _hooks.useUnmountEffect)(function () {
    setFocusedIndex(-1);
  });
  /**
   * Hook that manages the controlled and un-controlled state
   * for the accordion.
   */

  var _useControllableState = (0, _hooks.useControllableState)({
    value: indexProp,
    defaultValue: function defaultValue() {
      if (allowMultiple) return defaultIndex != null ? defaultIndex : [];
      return defaultIndex != null ? defaultIndex : -1;
    },
    onChange: onChange
  }),
      index = _useControllableState[0],
      setIndex = _useControllableState[1];
  /**
   * Gets the `isOpen` and `onChange` props for a child accordion item based on
   * the child's index.
   *
   * @param idx {number} The index of the child accordion item
   */


  var getAccordionItemProps = function getAccordionItemProps(idx) {
    var isOpen = false;

    if (idx !== null) {
      isOpen = (0, _utils.isArray)(index) ? index.includes(idx) : index === idx;
    }

    var onChange = function onChange(isOpen) {
      if (idx === null) return;

      if (allowMultiple && (0, _utils.isArray)(index)) {
        var nextState = isOpen ? (0, _utils.addItem)(index, idx) : (0, _utils.removeItem)(index, idx);
        setIndex(nextState);
      } else if (isOpen) {
        setIndex(idx);
      } else if (allowToggle) {
        setIndex(-1);
      }
    };

    return {
      isOpen: isOpen,
      onChange: onChange
    };
  };

  return {
    index: index,
    setIndex: setIndex,
    htmlProps: htmlProps,
    getAccordionItemProps: getAccordionItemProps,
    focusedIndex: focusedIndex,
    setFocusedIndex: setFocusedIndex,
    descendants: descendants
  };
}

var _createContext = (0, _reactUtils.createContext)({
  name: "AccordionContext",
  errorMessage: "useAccordionContext: `context` is undefined. Seems you forgot to wrap the accordion components in `<Accordion />`"
}),
    AccordionProvider = _createContext[0],
    useAccordionContext = _createContext[1];
/* -------------------------------------------------------------------------------------------------
 * Hook for a single accordion item
 * -----------------------------------------------------------------------------------------------*/


exports.useAccordionContext = useAccordionContext;
exports.AccordionProvider = AccordionProvider;

/**
 * useAccordionItem
 *
 * React hook that provides the open/close functionality
 * for an accordion item and its children
 */
function useAccordionItem(props) {
  var isDisabled = props.isDisabled,
      isFocusable = props.isFocusable,
      id = props.id,
      htmlProps = _objectWithoutPropertiesLoose(props, ["isDisabled", "isFocusable", "id"]);

  var _useAccordionContext = useAccordionContext(),
      getAccordionItemProps = _useAccordionContext.getAccordionItemProps,
      setFocusedIndex = _useAccordionContext.setFocusedIndex;

  var buttonRef = (0, _react.useRef)(null);
  /**
   * Generate unique ids for all accordion item components (button and panel)
   */

  var _useIds = (0, _hooks.useIds)(id, "accordion-button", "accordion-panel"),
      buttonId = _useIds[0],
      panelId = _useIds[1];

  focusableNotDisabledWarning(props);
  /**
   * Think of this as a way to register this accordion item
   * with its parent `useAccordion`
   */

  var _useAccordionDescenda = useAccordionDescendant({
    disabled: isDisabled && !isFocusable
  }),
      register = _useAccordionDescenda.register,
      index = _useAccordionDescenda.index,
      descendants = _useAccordionDescenda.descendants;

  var _getAccordionItemProp = getAccordionItemProps(index === -1 ? null : index),
      isOpen = _getAccordionItemProp.isOpen,
      onChange = _getAccordionItemProp.onChange;

  warnIfOpenAndDisabled({
    isOpen: isOpen,
    isDisabled: isDisabled
  });

  var onOpen = function onOpen() {
    onChange == null ? void 0 : onChange(true);
  };

  var onClose = function onClose() {
    onChange == null ? void 0 : onChange(false);
  };
  /**
   * Toggle the visibility of the accordion item
   */


  var onClick = (0, _react.useCallback)(function () {
    onChange == null ? void 0 : onChange(!isOpen);
    setFocusedIndex(index);
  }, [index, setFocusedIndex, isOpen, onChange]);
  /**
   * Manage keyboard navigation between accordion items.
   */

  var onKeyDown = (0, _react.useCallback)(function (event) {
    var eventKey = (0, _utils.normalizeEventKey)(event);
    var keyMap = {
      ArrowDown: function ArrowDown() {
        var next = descendants.nextEnabled(index);
        if (next) (0, _utils.focus)(next.node);
      },
      ArrowUp: function ArrowUp() {
        var prev = descendants.prevEnabled(index);
        if (prev) (0, _utils.focus)(prev.node);
      },
      Home: function Home() {
        var first = descendants.firstEnabled();
        if (first) (0, _utils.focus)(first.node);
      },
      End: function End() {
        var last = descendants.lastEnabled();
        if (last) (0, _utils.focus)(last.node);
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

  var onFocus = (0, _react.useCallback)(function () {
    setFocusedIndex(index);
  }, [setFocusedIndex, index]);
  var getButtonProps = (0, _react.useCallback)(function (props, ref) {
    if (props === void 0) {
      props = {};
    }

    if (ref === void 0) {
      ref = null;
    }

    return _extends({}, props, {
      type: "button",
      ref: (0, _reactUtils.mergeRefs)(register, buttonRef, ref),
      id: buttonId,
      disabled: !!isDisabled,
      "aria-expanded": !!isOpen,
      "aria-controls": panelId,
      onClick: (0, _utils.callAllHandlers)(props.onClick, onClick),
      onFocus: (0, _utils.callAllHandlers)(props.onFocus, onFocus),
      onKeyDown: (0, _utils.callAllHandlers)(props.onKeyDown, onKeyDown)
    });
  }, [buttonId, isDisabled, isOpen, onClick, onFocus, onKeyDown, panelId, register]);
  var getPanelProps = (0, _react.useCallback)(function (props, ref) {
    if (props === void 0) {
      props = {};
    }

    if (ref === void 0) {
      ref = null;
    }

    return _extends({}, props, {
      ref: ref,
      role: "region",
      id: panelId,
      "aria-labelledby": buttonId,
      hidden: !isOpen
    });
  }, [buttonId, isOpen, panelId]);
  return {
    isOpen: isOpen,
    isDisabled: isDisabled,
    isFocusable: isFocusable,
    onOpen: onOpen,
    onClose: onClose,
    getButtonProps: getButtonProps,
    getPanelProps: getPanelProps,
    htmlProps: htmlProps
  };
}

/* -------------------------------------------------------------------------------------------------
 * Validate accordion and accordion item props, and emit warnings.
 * -----------------------------------------------------------------------------------------------*/
function allowMultipleWarning(props) {
  var index = props.index || props.defaultIndex;
  var condition = !(0, _utils.isUndefined)(index) && !(0, _utils.isArray)(index) && props.allowMultiple;
  (0, _utils.warn)({
    condition: !!condition,
    message: "If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: " + typeof index + ","
  });
}

function allowMultipleAndAllowToggleWarning(props) {
  (0, _utils.warn)({
    condition: !!(props.allowMultiple && props.allowToggle),
    message: "If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"
  });
}

function focusableNotDisabledWarning(props) {
  (0, _utils.warn)({
    condition: !!(props.isFocusable && !props.isDisabled),
    message: "Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.\n    "
  });
}

function warnIfOpenAndDisabled(props) {
  (0, _utils.warn)({
    condition: props.isOpen && !!props.isDisabled,
    message: "Cannot open a disabled accordion item"
  });
}
//# sourceMappingURL=use-accordion.js.map