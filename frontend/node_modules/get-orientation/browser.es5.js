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

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
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

    var fileReaderMap = new WeakMap();
    function getOrientation(input) {
        return __awaiter(this, void 0, void 0, function () {
            var offset, totalBytes, bufSignature, signature, head, tail, bufMarker, marker, bufSegmentHead, segmentHead, isEXIF, segmentSize, bufSegmentSize, segmentSize, remainingBytes, bufTIFFHeader, tiffHeader, isLittleEndian, ifdOffset, bufFieldCount, fieldCount, bufField, field, tagId, value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(input instanceof ArrayBuffer || input instanceof Blob)) {
                            throw new TypeError("Unexpected input type");
                        }
                        offset = 0;
                        totalBytes = getSize(input);
                        return [4 /*yield*/, readBytes(input, offset, 4)];
                    case 1:
                        bufSignature = _a.sent();
                        offset += bufSignature.byteLength;
                        signature = new DataView(bufSignature);
                        head = signature.getUint16(0);
                        tail = signature.getUint16(2);
                        if (!(head === 0xffd8)) return [3 /*break*/, 11];
                        bufMarker = bufSignature.slice(2);
                        _a.label = 2;
                    case 2:
                        marker = (new DataView(bufMarker)).getUint16(0);
                        if (!(marker === 0xffe1)) return [3 /*break*/, 4];
                        return [4 /*yield*/, readBytes(input, offset, 8)];
                    case 3:
                        bufSegmentHead = _a.sent();
                        segmentHead = new DataView(bufSegmentHead);
                        isEXIF = segmentHead.getUint16(2) === 0x4578
                            && segmentHead.getUint16(4) === 0x6966
                            && segmentHead.getUint16(6) === 0x0000;
                        if (isEXIF) {
                            offset += bufSegmentHead.byteLength;
                            return [3 /*break*/, 10];
                        }
                        else {
                            segmentSize = segmentHead.getUint16(0);
                            offset += segmentSize;
                        }
                        return [3 /*break*/, 7];
                    case 4:
                        if (!(0xffe0 <= marker && marker <= 0xffef)) return [3 /*break*/, 6];
                        return [4 /*yield*/, readBytes(input, offset, 2)];
                    case 5:
                        bufSegmentSize = _a.sent();
                        offset += bufSegmentSize.byteLength;
                        segmentSize = (new DataView(bufSegmentSize)).getUint16(0);
                        remainingBytes = segmentSize - 2;
                        offset += remainingBytes;
                        return [3 /*break*/, 7];
                    case 6: // If any other JPEG marker segment was found, skip entire bytes.
                    // Please refer Table B.1 – Marker code assignments from
                    // https://www.w3.org/Graphics/JPEG/itu-t81.pdf
                    return [2 /*return*/, exports.Orientation.TOP_LEFT];
                    case 7: return [4 /*yield*/, readBytes(input, offset, 2)];
                    case 8:
                        bufMarker = _a.sent();
                        offset += bufMarker.byteLength;
                        _a.label = 9;
                    case 9:
                        if (offset < totalBytes) return [3 /*break*/, 2];
                        _a.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if ((head === 0x4949 && tail === 0x2a00) || (head === 0x4d4d && tail === 0x002a)) {
                            // yeah this is TIFF header
                            // reset offset cursor.
                            offset = 0;
                        }
                        else { // This stream is not a JPEG file. Skip.
                            return [2 /*return*/, exports.Orientation.TOP_LEFT];
                        }
                        _a.label = 12;
                    case 12: return [4 /*yield*/, readBytes(input, offset, 8)];
                    case 13:
                        bufTIFFHeader = _a.sent();
                        tiffHeader = new DataView(bufTIFFHeader);
                        isLittleEndian = tiffHeader.getUint16(0) === 0x4949;
                        ifdOffset = tiffHeader.getUint32(4, isLittleEndian);
                        // move cursor to IFD block
                        offset += ifdOffset;
                        return [4 /*yield*/, readBytes(input, offset, 2)];
                    case 14:
                        bufFieldCount = _a.sent();
                        offset += bufFieldCount.byteLength;
                        fieldCount = (new DataView(bufFieldCount)).getUint16(0, isLittleEndian);
                        _a.label = 15;
                    case 15:
                        if (!(fieldCount-- > 0)) return [3 /*break*/, 17];
                        return [4 /*yield*/, readBytes(input, offset, 12)];
                    case 16:
                        bufField = _a.sent();
                        offset += bufField.byteLength;
                        field = new DataView(bufField);
                        tagId = field.getUint16(0, isLittleEndian);
                        if (tagId === 0x112) { // Orientation Tag
                            value = (new DataView(bufField.slice(8, 12))).getUint16(0, isLittleEndian);
                            if (1 <= value && value <= 8) {
                                return [2 /*return*/, value];
                            }
                            else {
                                throw new Error("Unexpected Orientation Value");
                            }
                        }
                        return [3 /*break*/, 15];
                    case 17: return [2 /*return*/, exports.Orientation.TOP_LEFT];
                }
            });
        });
    }
    function readBytes(input, offset, size) {
        if (input instanceof Blob) {
            return new Promise(function (resolve, reject) {
                var reader = fileReaderMap.get(input);
                if (!reader) {
                    reader = new FileReader();
                    fileReaderMap.set(input, reader);
                }
                reader.onerror = function (e) {
                    reader.onerror = null;
                    reader.onload = null;
                    reject(e);
                };
                reader.onload = function () {
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
//# sourceMappingURL=browser.es5.js.map
