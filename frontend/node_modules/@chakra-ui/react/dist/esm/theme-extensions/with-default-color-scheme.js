import { isObject } from "@chakra-ui/utils";
import { mergeThemeOverride } from "../extend-theme";
export function withDefaultColorScheme(_ref) {
  var {
    colorScheme,
    components
  } = _ref;
  return theme => {
    var names = Object.keys(theme.components || {});

    if (Array.isArray(components)) {
      names = components;
    } else if (isObject(components)) {
      names = Object.keys(components);
    }

    return mergeThemeOverride(theme, {
      components: Object.fromEntries(names.map(componentName => {
        var withColorScheme = {
          defaultProps: {
            colorScheme
          }
        };
        return [componentName, withColorScheme];
      }))
    });
  };
}
//# sourceMappingURL=with-default-color-scheme.js.map