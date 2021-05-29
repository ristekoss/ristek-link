/// <reference types="node" />
export declare function pathify(path: string): string;
export declare function instantiateEmscriptenWasm(factory: (args: {
    locateFile: () => string;
}) => {
    decode?: (buffer: Buffer | Uint8Array, width: number, height: number, opts: any) => Buffer;
    encode?: (buffer: Buffer | Uint8Array, width: number, height: number, opts: any) => Buffer;
}, path: string): {
    decode?: ((buffer: Uint8Array | Buffer, width: number, height: number, opts: any) => Buffer) | undefined;
    encode?: ((buffer: Uint8Array | Buffer, width: number, height: number, opts: any) => Buffer) | undefined;
};
