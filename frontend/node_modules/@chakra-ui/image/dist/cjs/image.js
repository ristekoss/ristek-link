"use strict";

exports.__esModule = true;
exports.Img = exports.Image = void 0;

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

var _useImage = require("./use-image");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NativeImage = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var htmlWidth = props.htmlWidth,
      htmlHeight = props.htmlHeight,
      alt = props.alt,
      rest = _objectWithoutPropertiesLoose(props, ["htmlWidth", "htmlHeight", "alt"]);

  return /*#__PURE__*/React.createElement("img", _extends({
    width: htmlWidth,
    height: htmlHeight,
    ref: ref,
    alt: alt
  }, rest));
});

/**
 * React component that renders an image with support
 * for fallbacks
 *
 * @see Docs https://chakra-ui.com/docs/data-display/image
 */
var Image = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var fallbackSrc = props.fallbackSrc,
      fallback = props.fallback,
      src = props.src,
      align = props.align,
      fit = props.fit,
      loading = props.loading,
      ignoreFallback = props.ignoreFallback,
      crossOrigin = props.crossOrigin,
      rest = _objectWithoutPropertiesLoose(props, ["fallbackSrc", "fallback", "src", "align", "fit", "loading", "ignoreFallback", "crossOrigin"]);
  /**
   * Defer to native `img` tag if `loading` prop is passed
   * @see https://github.com/chakra-ui/chakra-ui/issues/1027
   */


  var shouldIgnore = loading != null || ignoreFallback;
  var status = (0, _useImage.useImage)(_extends({}, props, {
    ignoreFallback: shouldIgnore
  }));

  var shared = _extends({
    ref: ref,
    objectFit: fit,
    objectPosition: align
  }, shouldIgnore ? rest : (0, _utils.omit)(rest, ["onError", "onLoad"]));

  if (status !== "loaded") {
    /**
     * If user passed a custom fallback component,
     * let's render it here.
     */
    if (fallback) return fallback;
    return /*#__PURE__*/React.createElement(_system.chakra.img, _extends({
      as: NativeImage,
      className: "chakra-image__placeholder",
      src: fallbackSrc
    }, shared));
  }

  return /*#__PURE__*/React.createElement(_system.chakra.img, _extends({
    as: NativeImage,
    src: src,
    crossOrigin: crossOrigin,
    loading: loading,
    className: "chakra-image"
  }, shared));
});
exports.Image = Image;

/**
 * Fallback component for most SSR users who want to use the native `img` with
 * support for chakra props
 */
var Img = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  return /*#__PURE__*/React.createElement(_system.chakra.img, _extends({
    ref: ref,
    as: NativeImage,
    className: "chakra-image"
  }, props));
});
exports.Img = Img;

if (_utils.__DEV__) {
  Image.displayName = "Image";
}
//# sourceMappingURL=image.js.map