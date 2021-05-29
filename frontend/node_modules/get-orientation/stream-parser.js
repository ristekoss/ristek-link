"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Stream = require("stream");
const StreamParser = require("stream-parser"); // tslint:disable-line
class StreamParserWritableClass extends Stream.Writable {
    constructor() {
        super();
        StreamParser(this);
    }
}
// HACK: The "stream-parser" module *patches* prototype of given class on call
// So basically original class does not have any definition about stream-parser injected methods.
// thus that's why we cast type here
exports.StreamParserWritable = StreamParserWritableClass;
//# sourceMappingURL=stream-parser.js.map