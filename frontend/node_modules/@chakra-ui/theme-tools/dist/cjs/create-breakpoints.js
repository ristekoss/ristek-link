"use strict";

exports.__esModule = true;
exports.createBreakpoints = void 0;

var _utils = require("@chakra-ui/utils");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var createBreakpoints = function createBreakpoints(config) {
  (0, _utils.warn)({
    condition: true,
    message: ["[chakra-ui]: createBreakpoints(...) will be deprecated pretty soon", "simply pass the breakpoints as an object. Remove the createBreakpoint(..) call"].join("")
  });
  return _extends({
    base: "0em"
  }, config);
};

exports.createBreakpoints = createBreakpoints;
//# sourceMappingURL=create-breakpoints.js.map