'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _google = require('./google');

var _google2 = _interopRequireDefault(_google);

var _baidu = require('./baidu');

var _baidu2 = _interopRequireDefault(_baidu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdSense = {
  Google: _google2.default,
  Baidu: _baidu2.default
};

exports.default = AdSense;