"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
const base_1 = require("./base");
exports.Orientation = base_1.Orientation;
const stream_parser_1 = require("./stream-parser");
const noop = () => { };
// @see https://www.exif.org/Exif2-2.PDF
class EXIFOrientationParser extends stream_parser_1.StreamParserWritable {
    constructor() {
        super();
        // peek first 4 bytes
        this._bytes(4, this.onSignature.bind(this));
    }
    onSignature(buf) {
        const head = buf.readUInt16BE(0);
        const tail = buf.readUInt16BE(2);
        // Check EXIF SOI first
        if (head === 0xffd8) {
            // This is EXIF structure. handle application markers
            this.onJPEGMarker(buf.slice(2));
        }
        else if ((head === 0x4949 && tail === 0x2a00) || (head === 0x4d4d && tail === 0x002a)) {
            // yeah this is TIFF header. require additional IFD offset block
            this._bytes(4, (bufIFDOffset) => {
                this.onTIFFHeader(Buffer.concat([buf, bufIFDOffset]));
            });
        }
        else { // This stream is not a JPEG file. Skip.
            this._skipBytes(Infinity, noop);
        }
    }
    onJPEGMarker(buf) {
        const marker = buf.readUInt16BE(0);
        if (marker === 0xffe1) { // APP1 Marker - EXIF, or Adobe XMP
            // We must verify that marker segment to avoid conflict.
            // Adobe XMP uses APP1 space too!
            this._bytes(8, (bufMarkerHead) => {
                const isEXIF = bufMarkerHead.readUInt16BE(2) === 0x4578
                    && bufMarkerHead.readUInt16BE(4) === 0x6966
                    && bufMarkerHead.readUInt16BE(6) === 0x0000;
                if (isEXIF) {
                    this._bytes(8, this.onTIFFHeader.bind(this));
                }
                else {
                    const size = bufMarkerHead.readUInt16BE(0);
                    const remaining = size - 6;
                    this._skipBytes(remaining, () => {
                        this._bytes(2, this.onJPEGMarker.bind(this));
                    });
                }
            });
        }
        else if (0xffe0 <= marker && marker <= 0xffef) { // Other JPEG application markers
            // e.g. APP0 Marker (JFIF), APP2 Marker (FlashFix Extension, ICC Color Profile), Photoshop IRB...
            // @see http://www.ozhiker.com/electronics/pjmt/jpeg_info/app_segments.html
            // Read length and skip. we don't need them
            this._bytes(2, (bufLength) => {
                const size = bufLength.readUInt16BE(0);
                const remaining = size - buf.length;
                this._skipBytes(remaining, () => {
                    this._bytes(2, this.onJPEGMarker.bind(this));
                });
            });
        }
        else { // If any other JPEG marker segment was found, skip entire bytes.
            // Please refer Table B.1 – Marker code assignments from
            // https://www.w3.org/Graphics/JPEG/itu-t81.pdf
            this._skipBytes(Infinity, noop);
        }
    }
    // Please refer Section 2: TIFF Structure from below link
    // @see https://www.itu.int/itudoc/itu-t/com16/tiff-fx/docs/tiff6.pdf
    onTIFFHeader(buf) {
        const isLittleEndian = buf.readUInt16BE(0) === 0x4949;
        const readUInt16 = (buffer, offset) => isLittleEndian ?
            buffer.readUInt16LE(offset) :
            buffer.readUInt16BE(offset);
        const readUInt32 = (buffer, offset) => isLittleEndian ?
            buffer.readUInt32LE(offset) :
            buffer.readUInt32BE(offset);
        const ifdOffset = readUInt32(buf, 4);
        const remainingBytesToIFD = ifdOffset - buf.length;
        const consumeIDFBlock = () => {
            this._bytes(2, (bufIFDFieldCount) => {
                let fieldCount = readUInt16(bufIFDFieldCount, 0);
                const consumeIFDFields = () => {
                    if (fieldCount-- > 0) {
                        this._bytes(12, (bufField) => {
                            const tagId = readUInt16(bufField, 0);
                            if (tagId === 0x112) { // Orientation Tag
                                const bufValueOffset = bufField.slice(8, 12);
                                const value = readUInt16(bufValueOffset, 0);
                                if (1 <= value && value <= 8) {
                                    this.emit("orientation", value);
                                }
                                else {
                                    this.emit("error", new Error("Unexpected Orientation value"));
                                }
                                this._skipBytes(Infinity, noop);
                            }
                            else {
                                consumeIFDFields();
                            }
                        });
                    }
                    else {
                        // Couldn't found any Orientation tags
                        this._skipBytes(Infinity, noop);
                    }
                };
                consumeIFDFields();
            });
        };
        // Skip remaining bytes to IFD
        if (remainingBytesToIFD > 0) {
            this._skipBytes(remainingBytesToIFD, consumeIDFBlock);
        }
        else {
            consumeIDFBlock();
        }
    }
}
exports.EXIFOrientationParser = EXIFOrientationParser;
function getOrientation(image) {
    return new Promise((resolve, reject) => {
        const parser = new EXIFOrientationParser()
            .once("error", onError)
            .once("finish", onFinish)
            .once("orientation", onOrientation);
        let acked = false;
        function onError(e) {
            parser.removeListener("finish", onFinish);
            parser.removeListener("orientation", onOrientation);
            if (!acked) {
                acked = true;
                reject(e);
            }
        }
        function onFinish() {
            parser.removeListener("error", onError);
            parser.removeListener("orientation", onOrientation);
            if (!acked) {
                acked = true;
                resolve(base_1.Orientation.TOP_LEFT);
            }
        }
        function onOrientation(orientation) {
            parser.removeListener("error", onError);
            parser.removeListener("finish", onFinish);
            if (!acked) {
                acked = true;
                resolve(orientation);
            }
        }
        if (Buffer.isBuffer(image)) {
            parser.end(image);
        }
        else if (image instanceof stream_1.Readable) {
            image.pipe(parser);
        }
        else {
            throw new TypeError("Unexpected input type");
        }
    });
}
exports.getOrientation = getOrientation;
//# sourceMappingURL=index.js.map