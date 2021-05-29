"use strict";

exports.__esModule = true;
exports.withDefaultColorScheme = withDefaultColorScheme;

var _utils = require("@chakra-ui/utils");

var _extendTheme = require("../extend-theme");

function withDefaultColorScheme(_ref) {
  var colorScheme = _ref.colorScheme,
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
        var withColorScheme = {
          defaultProps: {
            colorScheme: colorScheme
          }
        };
        return [componentName, withColorScheme];
      }))
    });
  };
}
//# sourceMappingURL=with-default-color-scheme.js.map