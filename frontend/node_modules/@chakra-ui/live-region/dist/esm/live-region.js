function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { isBrowser } from "@chakra-ui/utils";
export class LiveRegion {
  constructor(options) {
    _defineProperty(this, "region", void 0);

    _defineProperty(this, "options", void 0);

    _defineProperty(this, "parentNode", void 0);

    this.options = getOptions(options);
    this.region = getRegion(this.options);
    this.parentNode = this.options.parentNode;

    if (this.region) {
      this.parentNode.appendChild(this.region);
    }
  }

  speak(message) {
    this.clear();

    if (this.region) {
      this.region.innerText = message;
    }
  }

  destroy() {
    if (this.region) {
      var _this$region$parentNo;

      (_this$region$parentNo = this.region.parentNode) == null ? void 0 : _this$region$parentNo.removeChild(this.region);
    }
  }

  clear() {
    if (this.region) {
      this.region.innerText = "";
    }
  }

}

function getOptions(options) {
  var defaultOptions = {
    "aria-live": "polite",
    "aria-atomic": "true",
    "aria-relevant": "all",
    role: "status",
    id: "chakra-a11y-live-region",
    parentNode: isBrowser ? document.body : undefined
  };

  if (options) {
    return Object.assign(defaultOptions, options);
  }

  return defaultOptions;
}

function getRegion(options) {
  var region = isBrowser ? document.getElementById(options.id) : null;
  if (region) return region;

  if (isBrowser) {
    region = document.createElement("div");
    setup(region, options);
  }

  return region;
}

function setup(region, options) {
  region.id = options.id || "chakra-live-region";
  region.className = "__chakra-live-region";
  region.setAttribute("aria-live", options["aria-live"]);
  region.setAttribute("role", options.role);
  region.setAttribute("aria-relevant", options["aria-relevant"]);
  region.setAttribute("aria-atomic", String(options["aria-atomic"]));
  Object.assign(region.style, {
    border: "0px",
    clip: "rect(0px, 0px, 0px, 0px)",
    height: "1px",
    width: "1px",
    margin: "-1px",
    padding: "0px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    position: "absolute"
  });
}
//# sourceMappingURL=live-region.js.map