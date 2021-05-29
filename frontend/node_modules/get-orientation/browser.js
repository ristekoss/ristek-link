(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.getOrientation = {}));
}(this, function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    (function (Orientation) {
        Orientation[Orientation["TOP_LEFT"] = 1] = "TOP_LEFT";
        Orientation[Orientation["TOP_RIGHT"] = 2] = "TOP_RIGHT";
        Orientation[Orientation["BOTTOM_RIGHT"] = 3] = "BOTTOM_RIGHT";
        Orientation[Orientation["BOTTOM_LEFT"] = 4] = "BOTTOM_LEFT";
        Orientation[Orientation["LEFT_TOP"] = 5] = "LEFT_TOP";
        Orientation[Orientation["RIGHT_TOP"] = 6] = "RIGHT_TOP";
        Orientation[Orientation["RIGHT_BOTTOM"] = 7] = "RIGHT_BOTTOM";
        Orientation[Orientation["LEFT_BOTTOM"] = 8] = "LEFT_BOTTOM";
    })(exports.Orientation || (exports.Orientation = {}));

    const fileReaderMap = new WeakMap();
    function getOrientation(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(input instanceof ArrayBuffer || input instanceof Blob)) {
                throw new TypeError("Unexpected input type");
            }
            let offset = 0;
            const totalBytes = getSize(input);
            // Signature validation
            {
                const bufSignature = yield readBytes(input, offset, 4);
                offset += bufSignature.byteLength;
                const signature = new DataView(bufSignature);
                const head = signature.getUint16(0);
                const tail = signature.getUint16(2);
                // Check EXIF SOI first
                if (head === 0xffd8) {
                    // This is EXIF structure. handle application markers
                    let bufMarker = bufSignature.slice(2);
                    do {
                        const marker = (new DataView(bufMarker)).getUint16(0);
                        if (marker === 0xffe1) { // APP1 Marker - EXIF, or Adobe XMP
                            // We must verify that marker segment to avoid conflict.
                            // Adobe XMP uses APP1 space too!
                            const bufSegmentHead = yield readBytes(input, offset, 8);
                            const segmentHead = new DataView(bufSegmentHead);
                            const isEXIF = segmentHead.getUint16(2) === 0x4578
                                && segmentHead.getUint16(4) === 0x6966
                                && segmentHead.getUint16(6) === 0x0000;
                            if (isEXIF) {
                                offset += bufSegmentHead.byteLength;
                                break;
                            }
                            else {
                                const segmentSize = segmentHead.getUint16(0);
                                offset += segmentSize;
                            }
                        }
                        else if (0xffe0 <= marker && marker <= 0xffef) { // Other JPEG application markers
                            // e.g. APP0 Marker (JFIF), APP2 Marker (FlashFix Extension, ICC Color Profile), Photoshop IRB...
                            // @see http://www.ozhiker.com/electronics/pjmt/jpeg_info/app_segments.html
                            // Just skip. we don't need them
                            const bufSegmentSize = yield readBytes(input, offset, 2);
                            offset += bufSegmentSize.byteLength;
                            const segmentSize = (new DataView(bufSegmentSize)).getUint16(0);
                            const remainingBytes = segmentSize - 2;
                            offset += remainingBytes;
                        }
                        else { // If any other JPEG marker segment was found, skip entire bytes.
                            // Please refer Table B.1 – Marker code assignments from
                            // https://www.w3.org/Graphics/JPEG/itu-t81.pdf
                            return exports.Orientation.TOP_LEFT;
                        }
                        bufMarker = yield readBytes(input, offset, 2);
                        offset += bufMarker.byteLength;
                    } while (offset < totalBytes);
                }
                else if ((head === 0x4949 && tail === 0x2a00) || (head === 0x4d4d && tail === 0x002a)) {
                    // yeah this is TIFF header
                    // reset offset cursor.
                    offset = 0;
                }
                else { // This stream is not a JPEG file. Skip.
                    return exports.Orientation.TOP_LEFT;
                }
            }
            const bufTIFFHeader = yield readBytes(input, offset, 8);
            const tiffHeader = new DataView(bufTIFFHeader);
            const isLittleEndian = tiffHeader.getUint16(0) === 0x4949;
            const ifdOffset = tiffHeader.getUint32(4, isLittleEndian);
            // move cursor to IFD block
            offset += ifdOffset;
            const bufFieldCount = yield readBytes(input, offset, 2);
            offset += bufFieldCount.byteLength;
            let fieldCount = (new DataView(bufFieldCount)).getUint16(0, isLittleEndian);
            while (fieldCount-- > 0) {
                const bufField = yield readBytes(input, offset, 12);
                offset += bufField.byteLength;
                const field = new DataView(bufField);
                const tagId = field.getUint16(0, isLittleEndian);
                if (tagId === 0x112) { // Orientation Tag
                    const value = (new DataView(bufField.slice(8, 12))).getUint16(0, isLittleEndian);
                    if (1 <= value && value <= 8) {
                        return value;
                    }
                    else {
                        throw new Error("Unexpected Orientation Value");
                    }
                }
            }
            return exports.Orientation.TOP_LEFT;
        });
    }
    function readBytes(input, offset, size) {
        if (input instanceof Blob) {
            return new Promise((resolve, reject) => {
                let reader = fileReaderMap.get(input);
                if (!reader) {
                    reader = new FileReader();
                    fileReaderMap.set(input, reader);
                }
                reader.onerror = (e) => {
                    reader.onerror = null;
                    reader.onload = null;
                    reject(e);
                };
                reader.onload = () => {
                    reader.onerror = null;
                    reader.onload = null;
                    resolve(reader.result);
                };
                reader.readAsArrayBuffer(input.slice(offset, offset + size));
            });
        }
        return Promise.resolve(input.slice(offset, offset + size));
    }
    function getSize(input) {
        return input instanceof Blob ?
            input.size :
            input.byteLength;
    }

    exports.getOrientation = getOrientation;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=browser.js.map
