"use strict";

exports.__esModule = true;
exports.useStyleConfig = useStyleConfig;
exports.useMultiStyleConfig = useMultiStyleConfig;

var _utils = require("@chakra-ui/utils");

var _react = require("react");

var _reactFastCompare = _interopRequireDefault(require("react-fast-compare"));

var _hooks = require("./hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function useStyleConfig(themeKey, props, opts) {
  var _styleConfig$defaultP, _opts2;

  if (props === void 0) {
    props = {};
  }

  if (opts === void 0) {
    opts = {};
  }

  var _props = props,
      styleConfigProp = _props.styleConfig,
      rest = _objectWithoutPropertiesLoose(_props, ["styleConfig"]);

  var _useChakra = (0, _hooks.useChakra)(),
      theme = _useChakra.theme,
      colorMode = _useChakra.colorMode;

  var themeStyleConfig = (0, _utils.memoizedGet)(theme, "components." + themeKey);
  var styleConfig = styleConfigProp || themeStyleConfig;
  var mergedProps = (0, _utils.mergeWith)({
    theme: theme,
    colorMode: colorMode
  }, (_styleConfig$defaultP = styleConfig == null ? void 0 : styleConfig.defaultProps) != null ? _styleConfig$defaultP : {}, (0, _utils.filterUndefined)((0, _utils.omit)(rest, ["children"])));
  /**
   * Store the computed styles in a `ref` to avoid unneeded re-computation
   */

  var stylesRef = (0, _react.useRef)({});
  return (0, _react.useMemo)(function () {
    if (styleConfig) {
      var _styleConfig$baseStyl, _styleConfig$variants, _styleConfig$variants2, _styleConfig$sizes$me, _styleConfig$sizes, _opts;

      var baseStyles = (0, _utils.runIfFn)((_styleConfig$baseStyl = styleConfig.baseStyle) != null ? _styleConfig$baseStyl : {}, mergedProps);
      var variants = (0, _utils.runIfFn)((_styleConfig$variants = (_styleConfig$variants2 = styleConfig.variants) == null ? void 0 : _styleConfig$variants2[mergedProps.variant]) != null ? _styleConfig$variants : {}, mergedProps);
      var sizes = (0, _utils.runIfFn)((_styleConfig$sizes$me = (_styleConfig$sizes = styleConfig.sizes) == null ? void 0 : _styleConfig$sizes[mergedProps.size]) != null ? _styleConfig$sizes$me : {}, mergedProps);
      var styles = (0, _utils.mergeWith)({}, baseStyles, sizes, variants);

      if ((_opts = opts) != null && _opts.isMultiPart && styleConfig.parts) {
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
  }, [styleConfig, mergedProps, (_opts2 = opts) == null ? void 0 : _opts2.isMultiPart]);
}

function useMultiStyleConfig(themeKey, props) {
  return useStyleConfig(themeKey, props, {
    isMultiPart: true
  });
}
//# sourceMappingURL=use-style-config.js.map