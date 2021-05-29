import { SpanId } from '../shared';
declare type Reporter = (spanName: string, duration: number, timestamp: number, id: SpanId, parentId?: SpanId, attrs?: Object) => void;
export declare let report: Reporter;
export {};
