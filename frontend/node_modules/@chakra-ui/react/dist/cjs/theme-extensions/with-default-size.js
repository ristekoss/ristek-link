"use strict";

exports.__esModule = true;
exports.withDefaultSize = withDefaultSize;

var _utils = require("@chakra-ui/utils");

var _extendTheme = require("../extend-theme");

function withDefaultSize(_ref) {
  var size = _ref.size,
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
        var withSize = {
          defaultProps: {
            size: size
          }
        };
        return [componentName, withSize];
      }))
    });
  };
}
//# sourceMappingURL=with-default-size.js.map