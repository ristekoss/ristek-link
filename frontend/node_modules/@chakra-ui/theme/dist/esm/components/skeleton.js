import { keyframes } from "@chakra-ui/system";
import { getColor, mode } from "@chakra-ui/theme-tools";

var fade = (startColor, endColor) => keyframes({
  from: {
    borderColor: startColor,
    background: startColor
  },
  to: {
    borderColor: endColor,
    background: endColor
  }
});

var baseStyle = props => {
  var defaultStartColor = mode("gray.100", "gray.800")(props);
  var defaultEndColor = mode("gray.400", "gray.600")(props);
  var {
    startColor = defaultStartColor,
    endColor = defaultEndColor,
    speed,
    theme
  } = props;
  var start = getColor(theme, startColor);
  var end = getColor(theme, endColor);
  return {
    opacity: 0.7,
    borderRadius: "2px",
    borderColor: start,
    background: end,
    animation: speed + "s linear infinite alternate " + fade(start, end)
  };
};

export default {
  baseStyle
};
//# sourceMappingURL=skeleton.js.map