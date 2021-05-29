import { camelToDash } from '../../dom/utils/camel-to-dash.js';
import { renderHTML } from '../../html/utils/render.js';
import { camelCaseAttributes } from './camel-case-attrs.js';

function renderSVG(element, renderState) {
    renderHTML(element, renderState);
    for (var key in renderState.attrs) {
        element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
    }
}

export { renderSVG };
