"use strict";

exports.__esModule = true;
exports.useImage = useImage;

var _hooks = require("@chakra-ui/hooks");

var _react = require("react");

/**
 * React hook that loads an image in the browser,
 * and let's us know the `status` so we can show image
 * fallback if it is still `pending`
 *
 * @returns the status of the image loading progress
 *
 * @example
 *
 * ```jsx
 * function App(){
 *   const status = useImage({ src: "image.png" })
 *   return status === "loaded" ? <img src="image.png" /> : <Placeholder />
 * }
 * ```
 */
function useImage(props) {
  var src = props.src,
      srcSet = props.srcSet,
      onLoad = props.onLoad,
      onError = props.onError,
      crossOrigin = props.crossOrigin,
      sizes = props.sizes,
      ignoreFallback = props.ignoreFallback;

  var _useState = (0, _react.useState)("pending"),
      status = _useState[0],
      setStatus = _useState[1];

  (0, _react.useEffect)(function () {
    setStatus(src ? "loading" : "pending");
  }, [src]);
  var imageRef = (0, _react.useRef)();
  var load = (0, _react.useCallback)(function () {
    if (!src) return;
    flush();
    var img = new Image();
    img.src = src;

    if (crossOrigin) {
      img.crossOrigin = crossOrigin;
    }

    if (srcSet) {
      img.srcset = srcSet;
    }

    if (sizes) {
      img.sizes = sizes;
    }

    img.onload = function (event) {
      flush();
      setStatus("loaded");
      onLoad == null ? void 0 : onLoad(event);
    };

    img.onerror = function (error) {
      flush();
      setStatus("failed");
      onError == null ? void 0 : onError(error);
    };

    imageRef.current = img;
  }, [src, crossOrigin, srcSet, sizes, onLoad, onError]);

  var flush = function flush() {
    if (imageRef.current) {
      imageRef.current.onload = null;
      imageRef.current.onerror = null;
      imageRef.current = null;
    }
  };

  (0, _hooks.useSafeLayoutEffect)(function () {
    /**
     * If user opts out of the fallback/placeholder
     * logic, let's bail out.
     */
    if (ignoreFallback) return undefined;

    if (status === "loading") {
      load();
    }

    return function () {
      flush();
    };
  }, [status, load, ignoreFallback]);
  /**
   * If user opts out of the fallback/placeholder
   * logic, let's just return 'loaded'
   */

  return ignoreFallback ? "loaded" : status;
}
//# sourceMappingURL=use-image.js.map