"use strict";

exports.__esModule = true;
exports.detectDeviceType = detectDeviceType;
exports.detectOS = detectOS;
exports.detectBrowser = detectBrowser;
exports.detectTouch = detectTouch;

var _dom = require("./dom");

function getUserAgentBrowser(navigator) {
  var ua = navigator.userAgent,
      vendor = navigator.vendor;
  var android = /(android)/i.test(ua);

  switch (true) {
    case /CriOS/.test(ua):
      return "Chrome for iOS";

    case /Edg\//.test(ua):
      return "Edge";

    case android && /Silk\//.test(ua):
      return "Silk";

    case /Chrome/.test(ua) && /Google Inc/.test(vendor):
      return "Chrome";

    case /Firefox\/\d+\.\d+$/.test(ua):
      return "Firefox";

    case android:
      return "AOSP";

    case /MSIE|Trident/.test(ua):
      return "IE";

    case /Safari/.test(navigator.userAgent) && /Apple Computer/.test(ua):
      return "Safari";

    case /AppleWebKit/.test(ua):
      return "WebKit";

    default:
      return null;
  }
}

function getUserAgentOS(navigator) {
  var ua = navigator.userAgent,
      platform = navigator.platform;

  switch (true) {
    case /Android/.test(ua):
      return "Android";

    case /iPhone|iPad|iPod/.test(platform):
      return "iOS";

    case /Win/.test(platform):
      return "Windows";

    case /Mac/.test(platform):
      return "Mac";

    case /CrOS/.test(ua):
      return "Chrome OS";

    case /Firefox/.test(ua):
      return "Firefox OS";

    default:
      return null;
  }
}

function detectDeviceType(navigator) {
  var ua = navigator.userAgent;
  if (/(tablet)|(iPad)|(Nexus 9)/i.test(ua)) return "tablet";
  if (/(mobi)/i.test(ua)) return "phone";
  return "desktop";
}

function detectOS(os) {
  if (!_dom.isBrowser) return false;
  return getUserAgentOS(window.navigator) === os;
}

function detectBrowser(browser) {
  if (!_dom.isBrowser) return false;
  return getUserAgentBrowser(window.navigator) === browser;
}

function detectTouch() {
  if (!_dom.isBrowser) return false;
  return window.ontouchstart === null && window.ontouchmove === null && window.ontouchend === null;
}
//# sourceMappingURL=user-agent.js.map