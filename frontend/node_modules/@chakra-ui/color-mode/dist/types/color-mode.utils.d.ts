export declare type ColorMode = "light" | "dark";
/**
 * Function to add/remove class from `body` based on color mode
 */
export declare function syncBodyClassName(isDark: boolean): void;
export declare const queries: {
    light: string;
    dark: string;
};
export declare const lightQuery: string;
export declare const darkQuery: string;
export declare function getColorScheme(fallback?: ColorMode): "light" | "dark";
/**
 * Adds system os color mode listener, and run the callback
 * once preference changes
 */
export declare function addListener(fn: Function): () => void;
export declare const root: {
    get: () => ColorMode;
    set: (mode: ColorMode) => void;
};
//# sourceMappingURL=color-mode.utils.d.ts.map