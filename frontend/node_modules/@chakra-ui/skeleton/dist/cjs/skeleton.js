"use strict";

exports.__esModule = true;
exports.SkeletonCircle = exports.SkeletonText = exports.Skeleton = void 0;

var _mediaQuery = require("@chakra-ui/media-query");

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var StyledSkeleton = (0, _system.chakra)("div", {
  baseStyle: {
    boxShadow: "none",
    backgroundClip: "padding-box",
    cursor: "default",
    color: "transparent",
    pointerEvents: "none",
    userSelect: "none",
    "&::before, &::after, *": {
      visibility: "hidden"
    }
  }
});
var fade = (0, _system.keyframes)({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});

var useIsFirstRender = function useIsFirstRender() {
  var isFirstRender = React.useRef(true);
  React.useEffect(function () {
    isFirstRender.current = false;
  }, []);
  return isFirstRender.current;
};

var Skeleton = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var styles = (0, _system.useStyleConfig)("Skeleton", props);
  var isFirstRender = useIsFirstRender();

  var _omitThemingProps = (0, _system.omitThemingProps)(props),
      startColor = _omitThemingProps.startColor,
      endColor = _omitThemingProps.endColor,
      isLoaded = _omitThemingProps.isLoaded,
      fadeDuration = _omitThemingProps.fadeDuration,
      speed = _omitThemingProps.speed,
      className = _omitThemingProps.className,
      rest = _objectWithoutPropertiesLoose(_omitThemingProps, ["startColor", "endColor", "isLoaded", "fadeDuration", "speed", "className"]);

  var _className = (0, _utils.cx)("chakra-skeleton", className);

  if (isLoaded) {
    var animation = isFirstRender ? "none" : fade + " " + fadeDuration + "s";
    return /*#__PURE__*/React.createElement(_system.chakra.div, _extends({
      ref: ref,
      className: _className,
      __css: {
        animation: animation
      }
    }, rest));
  }

  return /*#__PURE__*/React.createElement(StyledSkeleton, _extends({
    ref: ref,
    className: _className
  }, rest, {
    __css: styles
  }));
});
exports.Skeleton = Skeleton;
Skeleton.defaultProps = {
  fadeDuration: 0.4,
  speed: 0.8
};

if (_utils.__DEV__) {
  Skeleton.displayName = "Skeleton";
}

function range(count) {
  return Array(count).fill(1).map(function (_, index) {
    return index + 1;
  });
}

var defaultNoOfLines = 3;

var SkeletonText = function SkeletonText(props) {
  var _props$noOfLines = props.noOfLines,
      noOfLines = _props$noOfLines === void 0 ? defaultNoOfLines : _props$noOfLines,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? "0.5rem" : _props$spacing,
      _props$skeletonHeight = props.skeletonHeight,
      skeletonHeight = _props$skeletonHeight === void 0 ? "0.5rem" : _props$skeletonHeight,
      className = props.className,
      startColor = props.startColor,
      endColor = props.endColor,
      isLoaded = props.isLoaded,
      fadeDuration = props.fadeDuration,
      speed = props.speed,
      children = props.children,
      rest = _objectWithoutPropertiesLoose(props, ["noOfLines", "spacing", "skeletonHeight", "className", "startColor", "endColor", "isLoaded", "fadeDuration", "speed", "children"]);

  var noOfLinesValue = (0, _mediaQuery.useBreakpointValue)(typeof noOfLines === "number" ? [noOfLines] : noOfLines) || defaultNoOfLines;
  var numbers = range(noOfLinesValue);

  var getWidth = function getWidth(index) {
    if (noOfLinesValue > 1) {
      return index === numbers.length ? "80%" : "100%";
    }

    return "100%";
  };

  var _className = (0, _utils.cx)("chakra-skeleton__group", className);

  return /*#__PURE__*/React.createElement(_system.chakra.div, _extends({
    className: _className
  }, rest), numbers.map(function (number, index) {
    if (isLoaded && index > 0) {
      // skip other lines
      return null;
    }

    var sizeProps = isLoaded ? null : {
      mb: number === numbers.length ? "0" : spacing,
      width: getWidth(number),
      height: skeletonHeight
    };
    return /*#__PURE__*/React.createElement(Skeleton, _extends({
      key: numbers.length.toString() + number,
      startColor: startColor,
      endColor: endColor,
      isLoaded: isLoaded,
      fadeDuration: fadeDuration,
      speed: speed
    }, sizeProps), // allows animating the children
    index === 0 ? children : undefined);
  }));
};

exports.SkeletonText = SkeletonText;

if (_utils.__DEV__) {
  SkeletonText.displayName = "SkeletonText";
}

var SkeletonCircle = function SkeletonCircle(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? "2rem" : _ref$size,
      rest = _objectWithoutPropertiesLoose(_ref, ["size"]);

  return /*#__PURE__*/React.createElement(Skeleton, _extends({
    borderRadius: "full",
    boxSize: size
  }, rest));
};

exports.SkeletonCircle = SkeletonCircle;

if (_utils.__DEV__) {
  SkeletonCircle.displayName = "SkeletonCircle";
}
//# sourceMappingURL=skeleton.js.map