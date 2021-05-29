import { isObject } from "@chakra-ui/utils";
import { mergeThemeOverride } from "../extend-theme";
export function withDefaultVariant(_ref) {
  var {
    variant,
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
        var withVariant = {
          defaultProps: {
            variant
          }
        };
        return [componentName, withVariant];
      }))
    });
  };
}
//# sourceMappingURL=with-default-variant.js.map