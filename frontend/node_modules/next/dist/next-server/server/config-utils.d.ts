export declare function install(useWebpack5: boolean): void;
declare type CheckReasons = 'test-mode' | 'no-config' | 'future-flag' | 'no-future-flag' | 'no-webpack-config' | 'webpack-config';
declare type CheckResult = {
    enabled: boolean;
    reason: CheckReasons;
};
export declare function shouldLoadWithWebpack5(phase: string, dir: string): Promise<CheckResult>;
export declare function loadWebpackHook(phase: string, dir: string): Promise<void>;
export {};
