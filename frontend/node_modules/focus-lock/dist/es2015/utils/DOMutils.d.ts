import { NodeIndex } from './tabOrder';
export declare const filterFocusable: (nodes: HTMLInputElement[]) => HTMLInputElement[];
export declare const getTabbableNodes: (topNodes: HTMLElement[], withGuards?: boolean | undefined) => NodeIndex[];
export declare const getAllTabbableNodes: (topNodes: HTMLElement[]) => NodeIndex[];
export declare const parentAutofocusables: (topNode: HTMLElement) => HTMLInputElement[];
