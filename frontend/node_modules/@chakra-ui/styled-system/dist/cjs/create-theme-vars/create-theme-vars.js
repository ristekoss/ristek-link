"use strict";

exports.__esModule = true;
exports.createThemeVars = createThemeVars;

var _utils = require("@chakra-ui/utils");

var _calc = require("./calc");

var _cssVar3 = require("./css-var");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function createThemeVars(target, options) {
  var context = {
    cssMap: {},
    cssVars: {}
  };
  (0, _utils.walkObject)(target, function (value, path) {
    var _tokenHandlerMap$firs;

    // firstKey will be e.g. "space"
    var firstKey = path[0];
    var handler = (_tokenHandlerMap$firs = tokenHandlerMap[firstKey]) != null ? _tokenHandlerMap$firs : tokenHandlerMap.defaultHandler;

    var _handler = handler(path, value, options),
        cssVars = _handler.cssVars,
        cssMap = _handler.cssMap;

    Object.assign(context.cssVars, cssVars);
    Object.assign(context.cssMap, cssMap);
  });
  return context;
}

/**
 * Define transformation handlers for ThemeScale
 */
var tokenHandlerMap = {
  space: function space(keys, value, options) {
    var _extends2;

    var properties = tokenHandlerMap.defaultHandler(keys, value, options);
    var firstKey = keys[0],
        referenceKeys = keys.slice(1);
    var negativeLookupKey = firstKey + ".-" + referenceKeys.join(".");
    var negativeVarKey = keys.join("-");

    var _cssVar = (0, _cssVar3.cssVar)(negativeVarKey, undefined, options.cssVarPrefix),
        variable = _cssVar.variable,
        reference = _cssVar.reference;

    var negativeValue = _calc.calc.negate(value);

    var varRef = _calc.calc.negate(reference);

    return {
      cssVars: properties.cssVars,
      cssMap: _extends({}, properties.cssMap, (_extends2 = {}, _extends2[negativeLookupKey] = {
        value: "" + negativeValue,
        "var": "" + variable,
        varRef: varRef
      }, _extends2))
    };
  },
  defaultHandler: function defaultHandler(keys, value, options) {
    var _cssVars, _cssMap;

    var lookupKey = keys.join(".");
    var varKey = keys.join("-");

    var _cssVar2 = (0, _cssVar3.cssVar)(varKey, undefined, options.cssVarPrefix),
        variable = _cssVar2.variable,
        reference = _cssVar2.reference;

    return {
      cssVars: (_cssVars = {}, _cssVars[variable] = value, _cssVars),
      cssMap: (_cssMap = {}, _cssMap[lookupKey] = {
        value: value,
        "var": variable,
        varRef: reference
      }, _cssMap)
    };
  }
};
//# sourceMappingURL=create-theme-vars.js.map