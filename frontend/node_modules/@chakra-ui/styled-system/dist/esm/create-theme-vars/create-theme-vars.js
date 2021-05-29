function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { walkObject } from "@chakra-ui/utils";
import { calc } from "./calc";
import { cssVar } from "./css-var";
export function createThemeVars(target, options) {
  var context = {
    cssMap: {},
    cssVars: {}
  };
  walkObject(target, (value, path) => {
    var _tokenHandlerMap$firs;

    // firstKey will be e.g. "space"
    var [firstKey] = path;
    var handler = (_tokenHandlerMap$firs = tokenHandlerMap[firstKey]) != null ? _tokenHandlerMap$firs : tokenHandlerMap.defaultHandler;
    var {
      cssVars,
      cssMap
    } = handler(path, value, options);
    Object.assign(context.cssVars, cssVars);
    Object.assign(context.cssMap, cssMap);
  });
  return context;
}

/**
 * Define transformation handlers for ThemeScale
 */
var tokenHandlerMap = {
  space: (keys, value, options) => {
    var properties = tokenHandlerMap.defaultHandler(keys, value, options);
    var [firstKey, ...referenceKeys] = keys;
    var negativeLookupKey = firstKey + ".-" + referenceKeys.join(".");
    var negativeVarKey = keys.join("-");
    var {
      variable,
      reference
    } = cssVar(negativeVarKey, undefined, options.cssVarPrefix);
    var negativeValue = calc.negate(value);
    var varRef = calc.negate(reference);
    return {
      cssVars: properties.cssVars,
      cssMap: _extends({}, properties.cssMap, {
        [negativeLookupKey]: {
          value: "" + negativeValue,
          var: "" + variable,
          varRef
        }
      })
    };
  },
  defaultHandler: (keys, value, options) => {
    var lookupKey = keys.join(".");
    var varKey = keys.join("-");
    var {
      variable,
      reference
    } = cssVar(varKey, undefined, options.cssVarPrefix);
    return {
      cssVars: {
        [variable]: value
      },
      cssMap: {
        [lookupKey]: {
          value,
          var: variable,
          varRef: reference
        }
      }
    };
  }
};
//# sourceMappingURL=create-theme-vars.js.map