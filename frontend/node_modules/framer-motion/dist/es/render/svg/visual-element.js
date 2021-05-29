import { __assign } from 'tslib';
import { visualElement } from '../index.js';
import { scrapeMotionValuesFromProps } from './utils/scrape-motion-values.js';
import { htmlConfig } from '../html/visual-element.js';
import { buildSVGAttrs } from './utils/build-attrs.js';
import { camelToDash } from '../dom/utils/camel-to-dash.js';
import { camelCaseAttributes } from './utils/camel-case-attrs.js';
import { isTransformProp } from '../html/utils/transform.js';
import { renderSVG } from './utils/render.js';
import { getDefaultValueType } from '../dom/value-types/defaults.js';
import { buildLayoutProjectionTransformOrigin, buildLayoutProjectionTransform } from '../html/utils/build-projection-transform.js';

var svgVisualElement = visualElement(__assign(__assign({}, htmlConfig), { getBaseTarget: function (props, key) {
        return props[key];
    },
    readValueFromInstance: function (domElement, key) {
        var _a;
        if (isTransformProp(key)) {
            return ((_a = getDefaultValueType(key)) === null || _a === void 0 ? void 0 : _a.default) || 0;
        }
        key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
        return domElement.getAttribute(key);
    },
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps,
    build: function (_element, renderState, latestValues, projection, layoutState, options, props) {
        var isProjectionTranform = projection.isEnabled && layoutState.isHydrated;
        buildSVGAttrs(renderState, latestValues, projection, layoutState, options, props.transformTemplate, isProjectionTranform ? buildLayoutProjectionTransform : undefined, isProjectionTranform
            ? buildLayoutProjectionTransformOrigin
            : undefined);
    }, render: renderSVG }));

export { svgVisualElement };
