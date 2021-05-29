export { DomainLocales, NextConfig, normalizeConfig } from './config-shared';
export default function loadConfig(phase: string, dir: string, customConfig?: object | null): Promise<import("./config-shared").NextConfig>;
export declare function isTargetLikeServerless(target: string): boolean;
