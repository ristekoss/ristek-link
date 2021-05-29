import { UseClickableProps } from "@chakra-ui/clickable";
import { Dict, LazyBehavior } from "@chakra-ui/utils";
import * as React from "react";
export declare const TabsDescendantsProvider: React.Provider<import("@chakra-ui/descendant").DescendantsManager<HTMLButtonElement, {}>>, useTabsDescendantsContext: () => import("@chakra-ui/descendant").DescendantsManager<HTMLButtonElement, {}>, useTabsDescendants: () => import("@chakra-ui/descendant").DescendantsManager<HTMLButtonElement, {}>, useTabsDescendant: (options?: {
    disabled?: boolean | undefined;
    id?: string | undefined;
} | undefined) => {
    descendants: import("@chakra-ui/descendant/dist/types/use-descendant").UseDescendantsReturn;
    index: number;
    enabledIndex: number;
    register: (node: HTMLButtonElement | null) => void;
};
export interface UseTabsProps {
    /**
     * The orientation of the tab list.
     */
    orientation?: "vertical" | "horizontal";
    /**
     * If `true`, the tabs will be manually activated and
     * display its panel by pressing Space or Enter.
     *
     * If `false`, the tabs will be automatically activated
     * and their panel is displayed when they receive focus.
     */
    isManual?: boolean;
    /**
     * Callback when the index (controlled or un-controlled) changes.
     */
    onChange?: (index: number) => void;
    /**
     * The index of the selected tab (in controlled mode)
     */
    index?: number;
    /**
     * The initial index of the selected tab (in uncontrolled mode)
     */
    defaultIndex?: number;
    /**
     * The id of the tab
     */
    id?: string;
    /**
     * Performance 🚀:
     * If `true`, rendering of the tab panel's will be deferred until it is selected.
     */
    isLazy?: boolean;
    /**
     * Performance 🚀:
     * The lazy behavior of tab panels' content when not active.
     * Only works when `isLazy={true}`
     *
     * - "unmount": The content of inactive tab panels are always unmounted.
     * - "keepMounted": The content of inactive tab panels is initially unmounted,
     * but stays mounted when selected.
     *
     * @default "unmount"
     */
    lazyBehavior?: LazyBehavior;
    /**
     * The writing mode direction.
     *
     * - When in RTL, the left and right navigation is flipped
     */
    direction?: "rtl" | "ltr";
}
/**
 * Tabs hooks that provides all the states, and accessibility
 * helpers to keep all things working properly.
 *
 * Its returned object will be passed unto a Context Provider
 * so all child components can read from it.
 * There is no document link yet
 * @see Docs https://chakra-ui.com/docs/components/useTabs
 */
export declare function useTabs(props: UseTabsProps): {
    id: string;
    selectedIndex: number;
    focusedIndex: number;
    setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
    setFocusedIndex: React.Dispatch<React.SetStateAction<number>>;
    isManual: boolean | undefined;
    isLazy: boolean | undefined;
    lazyBehavior: LazyBehavior;
    orientation: "vertical" | "horizontal";
    descendants: import("@chakra-ui/descendant").DescendantsManager<HTMLButtonElement, {}>;
    direction: "rtl" | "ltr";
    htmlProps: {
        /**
         * The id of the tab
         */
        id?: string | undefined;
    };
};
export declare type UseTabsReturn = Omit<ReturnType<typeof useTabs>, "htmlProps" | "descendants">;
export declare const TabsProvider: React.Provider<Pick<{
    id: string;
    selectedIndex: number;
    focusedIndex: number;
    setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
    setFocusedIndex: React.Dispatch<React.SetStateAction<number>>;
    isManual: boolean | undefined;
    isLazy: boolean | undefined;
    lazyBehavior: LazyBehavior;
    orientation: "vertical" | "horizontal";
    descendants: import("@chakra-ui/descendant").DescendantsManager<HTMLButtonElement, {}>;
    direction: "rtl" | "ltr";
    htmlProps: {
        /**
         * The id of the tab
         */
        id?: string | undefined;
    };
}, "isManual" | "isLazy" | "lazyBehavior" | "orientation" | "direction" | "id" | "focusedIndex" | "setFocusedIndex" | "selectedIndex" | "setSelectedIndex">>, useTabsContext: () => Pick<{
    id: string;
    selectedIndex: number;
    focusedIndex: number;
    setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
    setFocusedIndex: React.Dispatch<React.SetStateAction<number>>;
    isManual: boolean | undefined;
    isLazy: boolean | undefined;
    lazyBehavior: LazyBehavior;
    orientation: "vertical" | "horizontal";
    descendants: import("@chakra-ui/descendant").DescendantsManager<HTMLButtonElement, {}>;
    direction: "rtl" | "ltr";
    htmlProps: {
        /**
         * The id of the tab
         */
        id?: string | undefined;
    };
}, "isManual" | "isLazy" | "lazyBehavior" | "orientation" | "direction" | "id" | "focusedIndex" | "setFocusedIndex" | "selectedIndex" | "setSelectedIndex">;
export interface UseTabListProps {
    children?: React.ReactNode;
    onKeyDown?: React.KeyboardEventHandler;
    ref?: React.Ref<any>;
}
/**
 * Tabs hook to manage multiple tab buttons,
 * and ensures only one tab is selected per time.
 *
 * @param props props object for the tablist
 */
export declare function useTabList<P extends UseTabListProps>(props: P): P & {
    role: string;
    "aria-orientation": "vertical" | "horizontal";
    onKeyDown: (event: React.KeyboardEvent<Element>) => void;
};
export declare type UseTabListReturn = ReturnType<typeof useTabList>;
export interface UseTabOptions {
    id?: string;
    isSelected?: boolean;
    panelId?: string;
    /**
     * If `true`, the `Tab` won't be toggleable
     */
    isDisabled?: boolean;
}
export interface UseTabProps extends Omit<UseClickableProps, "color">, UseTabOptions {
}
/**
 * Tabs hook to manage each tab button.
 *
 * A tab can be disabled and focusable, or both,
 * hence the use of `useClickable` to handle this scenario
 */
export declare function useTab<P extends UseTabProps>(props: P): {
    id: string;
    role: string;
    tabIndex: number;
    type: "button";
    "aria-selected": boolean;
    "aria-controls": string;
    onFocus: ((event: React.FocusEvent<HTMLElement>) => void) | undefined;
    ref: (node: any) => void;
    "aria-disabled": boolean | undefined;
    disabled: boolean | undefined;
    onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseDown: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseUp: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onKeyUp: ((event: React.KeyboardEvent<HTMLElement>) => void) | undefined;
    onKeyDown: ((event: React.KeyboardEvent<HTMLElement>) => void) | undefined;
    onMouseOver: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseLeave: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    /**
     * The id of the tab
     */
    suppressHydrationWarning?: boolean | undefined; /**
     * Performance 🚀:
     * If `true`, rendering of the tab panel's will be deferred until it is selected.
     */
    accessKey?: string | undefined;
    className?: string | undefined;
    contentEditable?: boolean | "true" | "false" | "inherit" | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: boolean | "true" | "false" | undefined;
    hidden?: boolean | undefined;
    lang?: string | undefined;
    placeholder?: string | undefined;
    slot?: string | undefined;
    spellCheck?: boolean | "true" | "false" | undefined;
    style?: React.CSSProperties | undefined;
    title?: string | undefined;
    translate?: "yes" | "no" | undefined;
    radioGroup?: string | undefined;
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    resource?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
    is?: string | undefined;
    'aria-activedescendant'?: string | undefined;
    'aria-atomic'?: boolean | "true" | "false" | undefined;
    'aria-autocomplete'?: "none" | "inline" | "list" | "both" | undefined;
    'aria-busy'?: boolean | "true" | "false" | undefined;
    'aria-checked'?: boolean | "true" | "false" | "mixed" | undefined;
    'aria-colcount'?: number | undefined;
    'aria-colindex'?: number | undefined;
    'aria-colspan'?: number | undefined;
    'aria-current'?: boolean | "true" | "false" | "page" | "step" | "location" | "date" | "time" | undefined;
    'aria-describedby'?: string | undefined;
    'aria-details'?: string | undefined;
    'aria-dropeffect'?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
    'aria-errormessage'?: string | undefined;
    'aria-expanded'?: boolean | "true" | "false" | undefined;
    'aria-flowto'?: string | undefined;
    'aria-grabbed'?: boolean | "true" | "false" | undefined;
    'aria-haspopup'?: boolean | "true" | "false" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
    'aria-hidden'?: boolean | "true" | "false" | undefined;
    'aria-invalid'?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
    'aria-keyshortcuts'?: string | undefined;
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    'aria-level'?: number | undefined;
    'aria-live'?: "off" | "assertive" | "polite" | undefined;
    'aria-modal'?: boolean | "true" | "false" | undefined;
    'aria-multiline'?: boolean | "true" | "false" | undefined;
    'aria-multiselectable'?: boolean | "true" | "false" | undefined;
    'aria-orientation'?: "vertical" | "horizontal" | undefined;
    'aria-owns'?: string | undefined;
    'aria-placeholder'?: string | undefined;
    'aria-posinset'?: number | undefined;
    'aria-pressed'?: boolean | "true" | "false" | "mixed" | undefined;
    'aria-readonly'?: boolean | "true" | "false" | undefined;
    'aria-relevant'?: "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    'aria-required'?: boolean | "true" | "false" | undefined;
    'aria-roledescription'?: string | undefined;
    'aria-rowcount'?: number | undefined;
    'aria-rowindex'?: number | undefined;
    'aria-rowspan'?: number | undefined;
    'aria-setsize'?: number | undefined;
    'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    children?: React.ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string;
    } | undefined;
    onCopy?: ((event: React.ClipboardEvent<HTMLElement>) => void) | undefined;
    onCopyCapture?: ((event: React.ClipboardEvent<HTMLElement>) => void) | undefined;
    onCut?: ((event: React.ClipboardEvent<HTMLElement>) => void) | undefined;
    onCutCapture?: ((event: React.ClipboardEvent<HTMLElement>) => void) | undefined;
    onPaste?: ((event: React.ClipboardEvent<HTMLElement>) => void) | undefined;
    onPasteCapture?: ((event: React.ClipboardEvent<HTMLElement>) => void) | undefined;
    onCompositionEnd?: ((event: React.CompositionEvent<HTMLElement>) => void) | undefined;
    onCompositionEndCapture?: ((event: React.CompositionEvent<HTMLElement>) => void) | undefined;
    onCompositionStart?: ((event: React.CompositionEvent<HTMLElement>) => void) | undefined;
    onCompositionStartCapture?: ((event: React.CompositionEvent<HTMLElement>) => void) | undefined;
    onCompositionUpdate?: ((event: React.CompositionEvent<HTMLElement>) => void) | undefined;
    onCompositionUpdateCapture?: ((event: React.CompositionEvent<HTMLElement>) => void) | undefined;
    onFocusCapture?: ((event: React.FocusEvent<HTMLElement>) => void) | undefined;
    onBlur?: ((event: React.FocusEvent<HTMLElement>) => void) | undefined;
    onBlurCapture?: ((event: React.FocusEvent<HTMLElement>) => void) | undefined;
    onChange?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onChangeCapture?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onBeforeInput?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onBeforeInputCapture?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onInput?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onInputCapture?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onReset?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onResetCapture?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onSubmit?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onSubmitCapture?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onInvalid?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onInvalidCapture?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onLoad?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onLoadCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onError?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onErrorCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onKeyDownCapture?: ((event: React.KeyboardEvent<HTMLElement>) => void) | undefined;
    onKeyPress?: ((event: React.KeyboardEvent<HTMLElement>) => void) | undefined;
    onKeyPressCapture?: ((event: React.KeyboardEvent<HTMLElement>) => void) | undefined;
    onKeyUpCapture?: ((event: React.KeyboardEvent<HTMLElement>) => void) | undefined;
    onAbort?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onAbortCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onCanPlay?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onCanPlayCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onCanPlayThrough?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onCanPlayThroughCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onDurationChange?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onDurationChangeCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onEmptied?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onEmptiedCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onEncrypted?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onEncryptedCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onEnded?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onEndedCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onLoadedData?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onLoadedDataCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onLoadedMetadata?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onLoadedMetadataCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onLoadStart?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onLoadStartCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onPause?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onPauseCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onPlay?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onPlayCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onPlaying?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onPlayingCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onProgress?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onProgressCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onRateChange?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onRateChangeCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onSeeked?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onSeekedCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onSeeking?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onSeekingCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onStalled?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onStalledCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onSuspend?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onSuspendCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onTimeUpdate?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onTimeUpdateCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onVolumeChange?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onVolumeChangeCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onWaiting?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onWaitingCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onAuxClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onAuxClickCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onClickCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onContextMenu?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onContextMenuCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onDoubleClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onDoubleClickCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onDrag?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragEnd?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragEndCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragEnter?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragEnterCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragExit?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragExitCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragLeave?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragLeaveCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragOver?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragOverCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragStart?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragStartCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDrop?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDropCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onMouseDownCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseEnter?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseMove?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseMoveCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseOut?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseOutCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseOverCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseUpCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onSelect?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onSelectCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onTouchCancel?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchCancelCapture?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchEnd?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchEndCapture?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchMove?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchMoveCapture?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchStart?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchStartCapture?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onPointerDown?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerDownCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerMove?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerMoveCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerUp?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerUpCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerCancel?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerCancelCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerEnter?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerEnterCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerLeave?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerLeaveCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerOver?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerOverCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerOut?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerOutCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onGotPointerCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onGotPointerCaptureCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onLostPointerCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onLostPointerCaptureCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onScroll?: ((event: React.UIEvent<HTMLElement, UIEvent>) => void) | undefined;
    onScrollCapture?: ((event: React.UIEvent<HTMLElement, UIEvent>) => void) | undefined;
    onWheel?: ((event: React.WheelEvent<HTMLElement>) => void) | undefined;
    onWheelCapture?: ((event: React.WheelEvent<HTMLElement>) => void) | undefined;
    onAnimationStart?: ((event: React.AnimationEvent<HTMLElement>) => void) | undefined;
    onAnimationStartCapture?: ((event: React.AnimationEvent<HTMLElement>) => void) | undefined;
    onAnimationEnd?: ((event: React.AnimationEvent<HTMLElement>) => void) | undefined;
    onAnimationEndCapture?: ((event: React.AnimationEvent<HTMLElement>) => void) | undefined;
    onAnimationIteration?: ((event: React.AnimationEvent<HTMLElement>) => void) | undefined;
    onAnimationIterationCapture?: ((event: React.AnimationEvent<HTMLElement>) => void) | undefined;
    onTransitionEnd?: ((event: React.TransitionEvent<HTMLElement>) => void) | undefined;
    onTransitionEndCapture?: ((event: React.TransitionEvent<HTMLElement>) => void) | undefined;
} | {
    id: string;
    role: string;
    tabIndex: number;
    type: "button";
    "aria-selected": boolean;
    "aria-controls": string;
    onFocus: ((event: React.FocusEvent<HTMLElement>) => void) | undefined;
    ref: (node: any) => void;
    "data-active": boolean | "true" | "false";
    "aria-disabled": "true" | undefined;
    onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseDown: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseUp: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onKeyUp: (event: React.KeyboardEvent<HTMLElement>) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
    onMouseOver: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    onMouseLeave: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    defaultChecked?: boolean | undefined;
    defaultValue?: string | number | readonly string[] | undefined;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    className?: string | undefined;
    contentEditable?: boolean | "true" | "false" | "inherit" | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: boolean | "true" | "false" | undefined;
    hidden?: boolean | undefined;
    lang?: string | undefined;
    placeholder?: string | undefined;
    slot?: string | undefined;
    spellCheck?: boolean | "true" | "false" | undefined;
    style?: React.CSSProperties | undefined;
    title?: string | undefined;
    translate?: "yes" | "no" | undefined;
    radioGroup?: string | undefined;
    about?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    resource?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    color?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
    is?: string | undefined;
    'aria-activedescendant'?: string | undefined;
    'aria-atomic'?: boolean | "true" | "false" | undefined;
    'aria-autocomplete'?: "none" | "inline" | "list" | "both" | undefined;
    'aria-busy'?: boolean | "true" | "false" | undefined;
    'aria-checked'?: boolean | "true" | "false" | "mixed" | undefined;
    'aria-colcount'?: number | undefined;
    'aria-colindex'?: number | undefined;
    'aria-colspan'?: number | undefined;
    'aria-current'?: boolean | "true" | "false" | "page" | "step" | "location" | "date" | "time" | undefined;
    'aria-describedby'?: string | undefined;
    'aria-details'?: string | undefined;
    'aria-dropeffect'?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
    'aria-errormessage'?: string | undefined;
    'aria-expanded'?: boolean | "true" | "false" | undefined;
    'aria-flowto'?: string | undefined;
    'aria-grabbed'?: boolean | "true" | "false" | undefined;
    'aria-haspopup'?: boolean | "true" | "false" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
    'aria-hidden'?: boolean | "true" | "false" | undefined;
    'aria-invalid'?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
    'aria-keyshortcuts'?: string | undefined;
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    'aria-level'?: number | undefined;
    'aria-live'?: "off" | "assertive" | "polite" | undefined;
    'aria-modal'?: boolean | "true" | "false" | undefined;
    'aria-multiline'?: boolean | "true" | "false" | undefined;
    'aria-multiselectable'?: boolean | "true" | "false" | undefined;
    'aria-orientation'?: "vertical" | "horizontal" | undefined;
    'aria-owns'?: string | undefined;
    'aria-placeholder'?: string | undefined;
    'aria-posinset'?: number | undefined;
    'aria-pressed'?: boolean | "true" | "false" | "mixed" | undefined;
    'aria-readonly'?: boolean | "true" | "false" | undefined;
    'aria-relevant'?: "text" | "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    'aria-required'?: boolean | "true" | "false" | undefined;
    'aria-roledescription'?: string | undefined;
    'aria-rowcount'?: number | undefined;
    'aria-rowindex'?: number | undefined;
    'aria-rowspan'?: number | undefined;
    'aria-setsize'?: number | undefined;
    'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    children?: React.ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string;
    } | undefined;
    onCopy?: ((event: React.ClipboardEvent<HTMLElement>) => void) | undefined;
    onCopyCapture?: ((event: React.ClipboardEvent<HTMLElement>) => void) | undefined;
    onCut?: ((event: React.ClipboardEvent<HTMLElement>) => void) | undefined;
    onCutCapture?: ((event: React.ClipboardEvent<HTMLElement>) => void) | undefined;
    onPaste?: ((event: React.ClipboardEvent<HTMLElement>) => void) | undefined;
    onPasteCapture?: ((event: React.ClipboardEvent<HTMLElement>) => void) | undefined;
    onCompositionEnd?: ((event: React.CompositionEvent<HTMLElement>) => void) | undefined;
    onCompositionEndCapture?: ((event: React.CompositionEvent<HTMLElement>) => void) | undefined;
    onCompositionStart?: ((event: React.CompositionEvent<HTMLElement>) => void) | undefined;
    onCompositionStartCapture?: ((event: React.CompositionEvent<HTMLElement>) => void) | undefined;
    onCompositionUpdate?: ((event: React.CompositionEvent<HTMLElement>) => void) | undefined;
    onCompositionUpdateCapture?: ((event: React.CompositionEvent<HTMLElement>) => void) | undefined;
    onFocusCapture?: ((event: React.FocusEvent<HTMLElement>) => void) | undefined;
    onBlur?: ((event: React.FocusEvent<HTMLElement>) => void) | undefined;
    onBlurCapture?: ((event: React.FocusEvent<HTMLElement>) => void) | undefined;
    onChange?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onChangeCapture?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onBeforeInput?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onBeforeInputCapture?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onInput?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onInputCapture?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onReset?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onResetCapture?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onSubmit?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onSubmitCapture?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onInvalid?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onInvalidCapture?: ((event: React.FormEvent<HTMLElement>) => void) | undefined;
    onLoad?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onLoadCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onError?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onErrorCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onKeyDownCapture?: ((event: React.KeyboardEvent<HTMLElement>) => void) | undefined;
    onKeyPress?: ((event: React.KeyboardEvent<HTMLElement>) => void) | undefined;
    onKeyPressCapture?: ((event: React.KeyboardEvent<HTMLElement>) => void) | undefined;
    onKeyUpCapture?: ((event: React.KeyboardEvent<HTMLElement>) => void) | undefined;
    onAbort?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onAbortCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onCanPlay?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onCanPlayCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onCanPlayThrough?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onCanPlayThroughCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onDurationChange?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onDurationChangeCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onEmptied?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onEmptiedCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onEncrypted?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onEncryptedCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onEnded?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onEndedCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onLoadedData?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onLoadedDataCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onLoadedMetadata?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onLoadedMetadataCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onLoadStart?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onLoadStartCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onPause?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onPauseCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onPlay?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onPlayCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onPlaying?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onPlayingCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onProgress?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onProgressCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onRateChange?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onRateChangeCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onSeeked?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onSeekedCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onSeeking?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onSeekingCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onStalled?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onStalledCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onSuspend?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onSuspendCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onTimeUpdate?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onTimeUpdateCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onVolumeChange?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onVolumeChangeCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onWaiting?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onWaitingCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onAuxClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onAuxClickCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onClickCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onContextMenu?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onContextMenuCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onDoubleClick?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onDoubleClickCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onDrag?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragEnd?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragEndCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragEnter?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragEnterCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragExit?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragExitCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragLeave?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragLeaveCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragOver?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragOverCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragStart?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDragStartCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDrop?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onDropCapture?: ((event: React.DragEvent<HTMLElement>) => void) | undefined;
    onMouseDownCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseEnter?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseMove?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseMoveCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseOut?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseOutCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseOverCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onMouseUpCapture?: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined;
    onSelect?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onSelectCapture?: ((event: React.SyntheticEvent<HTMLElement, Event>) => void) | undefined;
    onTouchCancel?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchCancelCapture?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchEnd?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchEndCapture?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchMove?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchMoveCapture?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchStart?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onTouchStartCapture?: ((event: React.TouchEvent<HTMLElement>) => void) | undefined;
    onPointerDown?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerDownCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerMove?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerMoveCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerUp?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerUpCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerCancel?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerCancelCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerEnter?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerEnterCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerLeave?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerLeaveCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerOver?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerOverCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerOut?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onPointerOutCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onGotPointerCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onGotPointerCaptureCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onLostPointerCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onLostPointerCaptureCapture?: ((event: React.PointerEvent<HTMLElement>) => void) | undefined;
    onScroll?: ((event: React.UIEvent<HTMLElement, UIEvent>) => void) | undefined;
    onScrollCapture?: ((event: React.UIEvent<HTMLElement, UIEvent>) => void) | undefined;
    onWheel?: ((event: React.WheelEvent<HTMLElement>) => void) | undefined;
    onWheelCapture?: ((event: React.WheelEvent<HTMLElement>) => void) | undefined;
    onAnimationStart?: ((event: React.AnimationEvent<HTMLElement>) => void) | undefined;
    onAnimationStartCapture?: ((event: React.AnimationEvent<HTMLElement>) => void) | undefined;
    onAnimationEnd?: ((event: React.AnimationEvent<HTMLElement>) => void) | undefined;
    onAnimationEndCapture?: ((event: React.AnimationEvent<HTMLElement>) => void) | undefined;
    onAnimationIteration?: ((event: React.AnimationEvent<HTMLElement>) => void) | undefined;
    onAnimationIterationCapture?: ((event: React.AnimationEvent<HTMLElement>) => void) | undefined;
    onTransitionEnd?: ((event: React.TransitionEvent<HTMLElement>) => void) | undefined;
    onTransitionEndCapture?: ((event: React.TransitionEvent<HTMLElement>) => void) | undefined;
};
export interface UseTabPanelsProps {
    children?: React.ReactNode;
}
/**
 * Tabs hook for managing the visibility of multiple tab panels.
 *
 * Since only one panel can be show at a time, we use `cloneElement`
 * to inject `selected` panel to each TabPanel.
 *
 * It returns a cloned version of its children with
 * all functionality included.
 */
export declare function useTabPanels<P extends UseTabPanelsProps>(props: P): P & {
    children: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>[];
};
/**
 * Tabs hook for managing the visible/hidden states
 * of the tab panel.
 *
 * @param props props object for the tab panel
 */
export declare function useTabPanel(props: Dict): {
    children: any;
    role: string;
    hidden: boolean;
    id: any;
    tabIndex: number;
};
/**
 * Tabs hook to show an animated indicators that
 * follows the active tab.
 *
 * The way we do it is by measuring the DOM Rect (or dimensions)
 * of the active tab, and return that as CSS style for
 * the indicator.
 */
export declare function useTabIndicator(): React.CSSProperties;
//# sourceMappingURL=use-tabs.d.ts.map