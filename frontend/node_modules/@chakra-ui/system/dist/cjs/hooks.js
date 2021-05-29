"use strict";

exports.__esModule = true;
exports.useChakra = useChakra;
exports.useToken = useToken;
exports.useProps = useProps;

var _colorMode = require("@chakra-ui/color-mode");

var _utils = require("@chakra-ui/utils");

var _react = require("react");

var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));

var _providers = require("./providers");

var _system = require("./system.utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function useChakra() {
  var colorModeResult = (0, _colorMode.useColorMode)();
  var theme = (0, _providers.useTheme)();
  return _extends({}, colorModeResult, {
    theme: theme
  });
}

function useToken(scale, token, fallback) {
  var theme = (0, _providers.useTheme)();

  if (Array.isArray(token)) {
    var fallbackArr = [];

    if (fallback) {
      fallbackArr = Array.isArray(fallback) ? fallback : [fallback];
    }

    return token.map(function (token, index) {
      var _fallbackArr$index;

      var path = scale + "." + token;
      return (0, _utils.memoizedGet)(theme, path, (_fallbackArr$index = fallbackArr[index]) != null ? _fallbackArr$index : token);
    });
  }

  var path = scale + "." + token;
  return (0, _utils.memoizedGet)(theme, path, fallback != null ? fallback : token);
}

function useProps(themeKey, props) {
  var _theme$components, _styleConfig$defaultP;

  var _useChakra = useChakra(),
      theme = _useChakra.theme,
      colorMode = _useChakra.colorMode;

  var styleConfig = props.styleConfig || ((_theme$components = theme.components) == null ? void 0 : _theme$components[themeKey]);
  var defaultProps = (_styleConfig$defaultP = styleConfig == null ? void 0 : styleConfig.defaultProps) != null ? _styleConfig$defaultP : {};

  var propsWithDefault = _extends({}, defaultProps, (0, _utils.filterUndefined)(props));

  var stylesRef = (0, _react.useRef)({});
  var mergedProps = (0, _utils.mergeWith)({}, propsWithDefault, {
    theme: theme,
    colorMode: colorMode
  });
  var memoizedStyles = (0, _react.useMemo)(function () {
    if (styleConfig) {
      var _styleConfig$baseStyl, _styleConfig$variants, _styleConfig$variants2, _styleConfig$sizes, _styleConfig$sizes2;

      var baseStyles = (0, _utils.runIfFn)((_styleConfig$baseStyl = styleConfig.baseStyle) != null ? _styleConfig$baseStyl : {}, mergedProps);
      var variants = (0, _utils.runIfFn)((_styleConfig$variants = (_styleConfig$variants2 = styleConfig.variants) == null ? void 0 : _styleConfig$variants2[mergedProps.variant]) != null ? _styleConfig$variants : {}, mergedProps);
      var sizes = (0, _utils.runIfFn)((_styleConfig$sizes = (_styleConfig$sizes2 = styleConfig.sizes) == null ? void 0 : _styleConfig$sizes2[mergedProps.size]) != null ? _styleConfig$sizes : {}, mergedProps);
      var styles = (0, _utils.mergeWith)(baseStyles, sizes, variants);

      if (styleConfig.parts) {
        styleConfig.parts.forEach(function (part) {
          var _styles$part;

          styles[part] = (_styles$part = styles[part]) != null ? _styles$part : {};
        });
      }

      var isStyleEqual = (0, _reactFastCompare["default"])(stylesRef.current, styles);

      if (!isStyleEqual) {
        stylesRef.current = styles;
      }
    }

    return stylesRef.current;
  }, [styleConfig, mergedProps]);
  return {
    styles: memoizedStyles,
    props: (0, _system.omitThemingProps)(propsWithDefault)
  };
}
//# sourceMappingURL=hooks.js.map