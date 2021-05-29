"use strict";

exports.__esModule = true;
exports.withDefaultVariant = withDefaultVariant;

var _utils = require("@chakra-ui/utils");

var _extendTheme = require("../extend-theme");

function withDefaultVariant(_ref) {
  var variant = _ref.variant,
      components = _ref.components;
  return function (theme) {
    var names = Object.keys(theme.components || {});

    if (Array.isArray(components)) {
      names = components;
    } else if ((0, _utils.isObject)(components)) {
      names = Object.keys(components);
    }

    return (0, _extendTheme.mergeThemeOverride)(theme, {
      components: Object.fromEntries(names.map(function (componentName) {
        var withVariant = {
          defaultProps: {
            variant: variant
          }
        };
        return [componentName, withVariant];
      }))
    });
  };
}
//# sourceMappingURL=with-default-variant.js.map