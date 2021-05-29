/// <reference types="react" />
import { ColorMode } from "./color-mode-provider";
declare type Mode = ColorMode | "system" | undefined;
interface ColorModeScriptProps {
    initialColorMode?: Mode;
    /**
     * Optional nonce that will be passed to the created `<script>` tag.
     */
    nonce?: string;
}
/**
 * Script to add to the root of your application when using localStorage,
 * to help prevent flash of color mode that can happen during page load.
 */
export declare const ColorModeScript: (props: ColorModeScriptProps) => JSX.Element;
export {};
//# sourceMappingURL=color-mode-script.d.ts.map