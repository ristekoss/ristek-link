/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';
import { UrlWithParsedQuery } from 'url';
import { NextConfig } from '../../next-server/server/config-shared';
import Server from './next-server';
export declare function imageOptimizer(server: Server, req: IncomingMessage, res: ServerResponse, parsedUrl: UrlWithParsedQuery, nextConfig: NextConfig, distDir: string): Promise<{
    finished: boolean;
}>;
export declare function getMaxAge(str: string | null): number;
