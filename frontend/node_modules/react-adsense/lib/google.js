'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Google = function (_React$Component) {
  _inherits(Google, _React$Component);

  function Google() {
    _classCallCheck(this, Google);

    return _possibleConstructorReturn(this, (Google.__proto__ || Object.getPrototypeOf(Google)).apply(this, arguments));
  }

  _createClass(Google, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (window) (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('ins', { className: this.props.className + ' adsbygoogle',
        style: this.props.style,
        'data-ad-client': this.props.client,
        'data-ad-slot': this.props.slot,
        'data-ad-layout': this.props.layout,
        'data-ad-layout-key': this.props.layoutKey,
        'data-ad-format': this.props.format,
        'data-full-width-responsive': this.props.responsive });
    }
  }]);

  return Google;
}(_react2.default.Component);

exports.default = Google;
;

Google.propTypes = {
  className: _propTypes2.default.string,
  style: _propTypes2.default.object, // eslint-disable-line
  client: _propTypes2.default.string.isRequired,
  slot: _propTypes2.default.string.isRequired,
  layout: _propTypes2.default.string,
  layoutKey: _propTypes2.default.string,
  format: _propTypes2.default.string,
  responsive: _propTypes2.default.string
};

Google.defaultProps = {
  className: '',
  style: { display: 'block' },
  format: 'auto',
  layout: '',
  layoutKey: '',
  responsive: 'false'
};