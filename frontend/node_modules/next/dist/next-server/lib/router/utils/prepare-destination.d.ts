/// <reference types="node" />
import { IncomingMessage } from 'http';
import { ParsedUrlQuery } from 'querystring';
import { RouteHas } from '../../../../lib/load-custom-routes';
declare type Params = {
    [param: string]: any;
};
export declare const getSafeParamName: (paramName: string) => string;
export declare function matchHas(req: IncomingMessage, has: RouteHas[], query: Params): false | Params;
export declare function compileNonPath(value: string, params: Params): string;
export default function prepareDestination(destination: string, params: Params, query: ParsedUrlQuery, appendParamsToQuery: boolean): {
    newUrl: string;
    parsedDestination: {
        query?: ParsedUrlQuery | undefined;
        protocol?: string | undefined;
        hostname?: string | undefined;
        port?: string | undefined;
    } & {
        pathname: string;
        query: ParsedUrlQuery;
        search: string;
        hash: string;
        href: string;
    };
};
export {};
