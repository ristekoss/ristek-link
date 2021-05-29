import { __assign } from 'tslib';
import { createHtmlRenderState } from '../../html/utils/create-render-state.js';

var createSvgRenderState = function () { return (__assign(__assign({}, createHtmlRenderState()), { attrs: {} })); };

export { createSvgRenderState };
