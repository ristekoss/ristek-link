import { SpanId } from './shared';
export declare enum SpanStatus {
    Started = 0,
    Stopped = 1
}
export declare class Span {
    name: string;
    id: SpanId;
    parentId?: SpanId;
    duration: number | null;
    attrs: {
        [key: string]: any;
    };
    status: SpanStatus;
    _start: bigint;
    constructor(name: string, parentId?: SpanId, attrs?: Object);
    stop(): void;
    traceChild(name: string, attrs?: Object): Span;
    setAttribute(key: string, value: any): void;
    traceFn(fn: any): any;
    traceAsyncFn(fn: any): Promise<any>;
}
export declare const trace: (name: string, parentId?: string | undefined, attrs?: Object | undefined) => Span;
