import { isObject } from "@chakra-ui/utils";
import { mergeThemeOverride } from "../extend-theme";
export function withDefaultSize(_ref) {
  var {
    size,
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
        var withSize = {
          defaultProps: {
            size
          }
        };
        return [componentName, withSize];
      }))
    });
  };
}
//# sourceMappingURL=with-default-size.js.map