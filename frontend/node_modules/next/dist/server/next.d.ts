/// <reference types="node" />
import Server, { ServerConstructor } from '../next-server/server/next-server';
import { IncomingMessage, ServerResponse } from 'http';
import { UrlWithParsedQuery } from 'url';
declare type NextServerConstructor = ServerConstructor & {
    /**
     * Whether to launch Next.js in dev mode - @default false
     */
    dev?: boolean;
};
export declare class NextServer {
    private serverPromise?;
    private server?;
    private reqHandlerPromise?;
    private preparedAssetPrefix?;
    options: NextServerConstructor;
    constructor(options: NextServerConstructor);
    getRequestHandler(): (req: IncomingMessage, res: ServerResponse, parsedUrl?: UrlWithParsedQuery | undefined) => Promise<any>;
    setAssetPrefix(assetPrefix: string): void;
    logError(...args: Parameters<Server['logError']>): void;
    render(...args: Parameters<Server['render']>): Promise<void>;
    renderToHTML(...args: Parameters<Server['renderToHTML']>): Promise<string | null>;
    renderError(...args: Parameters<Server['renderError']>): Promise<void>;
    renderErrorToHTML(...args: Parameters<Server['renderErrorToHTML']>): Promise<string | null>;
    render404(...args: Parameters<Server['render404']>): Promise<void>;
    serveStatic(...args: Parameters<Server['serveStatic']>): Promise<void>;
    prepare(): Promise<void>;
    close(): Promise<any>;
    private createServer;
    private loadConfig;
    private getServer;
    private getServerRequestHandler;
}
declare function createServer(options: NextServerConstructor): NextServer;
export default createServer;
