export declare enum TARGET {
    CONSOLE = "CONSOLE",
    ZIPKIN = "ZIPKIN",
    TELEMETRY = "TELEMETRY"
}
export declare type SpanId = string;
export declare const traceGlobals: Map<any, any>;
export declare const setGlobal: (key: any, val: any) => void;
export declare const debugLog: {
    (message?: any, ...optionalParams: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
};
