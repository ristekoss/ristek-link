import { Span } from '../../../telemetry/trace';
export declare const spans: WeakMap<any, Span>;
export declare class ProfilingPlugin {
    compiler: any;
    apply(compiler: any): void;
    traceHookPair(spanName: string, startHook: any, stopHook: any, attrs?: any, onSetSpan?: (span: Span) => void): void;
    traceLoopedHook(spanName: string, startHook: any, stopHook: any): void;
    traceTopLevelHooks(compiler: any): void;
    traceCompilationHooks(compiler: any): void;
}
