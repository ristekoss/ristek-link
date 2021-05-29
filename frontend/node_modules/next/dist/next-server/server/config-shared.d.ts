import { Header, Redirect, Rewrite } from '../../lib/load-custom-routes';
export declare type DomainLocales = Array<{
    http?: true;
    domain: string;
    locales?: string[];
    defaultLocale: string;
}>;
export declare type NextConfig = {
    [key: string]: any;
} & {
    i18n?: {
        locales: string[];
        defaultLocale: string;
        domains?: DomainLocales;
        localeDetection?: false;
    } | null;
    headers?: () => Promise<Header[]>;
    rewrites?: () => Promise<Rewrite[] | {
        beforeFiles: Rewrite[];
        afterFiles: Rewrite[];
        fallback: Rewrite[];
    }>;
    redirects?: () => Promise<Redirect[]>;
    trailingSlash?: boolean;
    future: {
        strictPostcssConfiguration?: boolean;
        excludeDefaultMomentLocales?: boolean;
        webpack5?: boolean;
    };
    experimental: {
        cpus?: number;
        plugins?: boolean;
        profiling?: boolean;
        sprFlushToDisk?: boolean;
        reactMode?: 'legacy' | 'concurrent' | 'blocking';
        workerThreads?: boolean;
        pageEnv?: boolean;
        optimizeFonts?: boolean;
        optimizeImages?: boolean;
        optimizeCss?: boolean;
        scrollRestoration?: boolean;
        scriptLoader?: boolean;
        stats?: boolean;
        externalDir?: boolean;
        serialWebpackBuild?: boolean;
        babelMultiThread?: boolean;
        conformance?: boolean;
        amp?: {
            optimizer?: any;
            validator?: string;
            skipValidation?: boolean;
        };
    };
};
export declare const defaultConfig: NextConfig;
export declare function normalizeConfig(phase: string, config: any): any;
