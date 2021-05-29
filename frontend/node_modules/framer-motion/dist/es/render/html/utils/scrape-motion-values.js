import { isForcedMotionValue } from '../../../motion/utils/is-forced-motion-value.js';
import { isMotionValue } from '../../../value/utils/is-motion-value.js';

function scrapeMotionValuesFromProps(props) {
    var style = props.style;
    var newValues = {};
    for (var key in style) {
        if (isMotionValue(style[key]) || isForcedMotionValue(key, props)) {
            newValues[key] = style[key];
        }
    }
    return newValues;
}

export { scrapeMotionValuesFromProps };
