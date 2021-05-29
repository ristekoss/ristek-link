import { Span } from './trace';
export declare function stackPush(keyObj: any, spanName: string, attrs?: any): Span;
export declare function stackPop(keyObj: any, span: any): void;
