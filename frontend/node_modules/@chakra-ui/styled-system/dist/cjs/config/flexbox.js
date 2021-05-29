"use strict";

exports.__esModule = true;
exports.flexbox = void 0;

var _createTransform = require("../create-transform");

var _utils = require("../utils");

var _static, _static2;

var reverse = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
};
var owlSelector = "& > :not(style) ~ :not(style)";
var flexbox = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: {
    transform: function transform(value) {
      var _reverse$value;

      var _ref = (_reverse$value = reverse[value]) != null ? _reverse$value : {},
          space = _ref.space,
          divide = _ref.divide;

      var result = {
        flexDirection: value
      };
      if (space) result[space] = 1;
      if (divide) result[divide] = 1;
      return result;
    }
  },
  spaceX: {
    "static": (_static = {}, _static[owlSelector] = {
      marginInlineStart: "calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",
      marginInlineEnd: "calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"
    }, _static),
    transform: (0, _createTransform.createTransform)({
      scale: "space",
      transform: function transform(value) {
        return value !== null ? {
          "--chakra-space-x": value
        } : null;
      }
    })
  },
  spaceY: {
    "static": (_static2 = {}, _static2[owlSelector] = {
      marginTop: "calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",
      marginBottom: "calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"
    }, _static2),
    transform: (0, _createTransform.createTransform)({
      scale: "space",
      transform: function transform(value) {
        return value != null ? {
          "--chakra-space-y": value
        } : null;
      }
    })
  },
  flex: true,
  flexFlow: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: _utils.t.sizes("flexBasis"),
  justifySelf: true,
  alignSelf: true,
  order: true,
  placeItems: true,
  placeContent: true,
  placeSelf: true,
  flexDir: _utils.t.prop("flexDirection")
};
exports.flexbox = flexbox;
//# sourceMappingURL=flexbox.js.map