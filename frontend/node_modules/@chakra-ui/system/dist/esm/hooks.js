function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { useColorMode } from "@chakra-ui/color-mode";
import { filterUndefined, memoizedGet as get, mergeWith, runIfFn } from "@chakra-ui/utils";
import { useMemo, useRef } from "react";
import isEqual from "react-fast-compare";
import { useTheme } from "./providers";
import { omitThemingProps } from "./system.utils";
export function useChakra() {
  var colorModeResult = useColorMode();
  var theme = useTheme();
  return _extends({}, colorModeResult, {
    theme
  });
}
export function useToken(scale, token, fallback) {
  var theme = useTheme();

  if (Array.isArray(token)) {
    var fallbackArr = [];

    if (fallback) {
      fallbackArr = Array.isArray(fallback) ? fallback : [fallback];
    }

    return token.map((token, index) => {
      var _fallbackArr$index;

      var path = scale + "." + token;
      return get(theme, path, (_fallbackArr$index = fallbackArr[index]) != null ? _fallbackArr$index : token);
    });
  }

  var path = scale + "." + token;
  return get(theme, path, fallback != null ? fallback : token);
}
export function useProps(themeKey, props) {
  var _theme$components, _styleConfig$defaultP;

  var {
    theme,
    colorMode
  } = useChakra();
  var styleConfig = props.styleConfig || ((_theme$components = theme.components) == null ? void 0 : _theme$components[themeKey]);
  var defaultProps = (_styleConfig$defaultP = styleConfig == null ? void 0 : styleConfig.defaultProps) != null ? _styleConfig$defaultP : {};

  var propsWithDefault = _extends({}, defaultProps, filterUndefined(props));

  var stylesRef = useRef({});
  var mergedProps = mergeWith({}, propsWithDefault, {
    theme,
    colorMode
  });
  var memoizedStyles = useMemo(() => {
    if (styleConfig) {
      var _styleConfig$baseStyl, _styleConfig$variants, _styleConfig$variants2, _styleConfig$sizes, _styleConfig$sizes2;

      var baseStyles = runIfFn((_styleConfig$baseStyl = styleConfig.baseStyle) != null ? _styleConfig$baseStyl : {}, mergedProps);
      var variants = runIfFn((_styleConfig$variants = (_styleConfig$variants2 = styleConfig.variants) == null ? void 0 : _styleConfig$variants2[mergedProps.variant]) != null ? _styleConfig$variants : {}, mergedProps);
      var sizes = runIfFn((_styleConfig$sizes = (_styleConfig$sizes2 = styleConfig.sizes) == null ? void 0 : _styleConfig$sizes2[mergedProps.size]) != null ? _styleConfig$sizes : {}, mergedProps);
      var styles = mergeWith(baseStyles, sizes, variants);

      if (styleConfig.parts) {
        styleConfig.parts.forEach(part => {
          var _styles$part;

          styles[part] = (_styles$part = styles[part]) != null ? _styles$part : {};
        });
      }

      var isStyleEqual = isEqual(stylesRef.current, styles);

      if (!isStyleEqual) {
        stylesRef.current = styles;
      }
    }

    return stylesRef.current;
  }, [styleConfig, mergedProps]);
  return {
    styles: memoizedStyles,
    props: omitThemingProps(propsWithDefault)
  };
}
//# sourceMappingURL=hooks.js.map