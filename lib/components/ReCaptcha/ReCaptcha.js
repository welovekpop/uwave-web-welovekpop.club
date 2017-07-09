'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class, _temp2;

var ReCaptcha = (_temp2 = _class = function (_React$Component) {
  (0, _inherits3.default)(ReCaptcha, _React$Component);

  function ReCaptcha() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ReCaptcha);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleResponse = function (res) {
      if (_this.props.onResponse) {
        _this.props.onResponse(res);
      }
    }, _this.refContainer = function (container) {
      _this.container = container;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  ReCaptcha.prototype.componentDidMount = function componentDidMount() {
    this.props.grecaptcha.render(this.container, {
      sitekey: this.props.sitekey,
      callback: this.handleResponse,
      theme: this.props.theme
    });
  };

  ReCaptcha.prototype.render = function render() {
    return _react2.default.createElement('div', { ref: this.refContainer });
  };

  return ReCaptcha;
}(_react2.default.Component), _class.defaultProps = {
  theme: 'light'
}, _temp2);
exports.default = ReCaptcha;

ReCaptcha.propTypes = process.env.NODE_ENV !== "production" ? {
  grecaptcha: _propTypes2.default.object.isRequired,
  sitekey: _propTypes2.default.string.isRequired,
  theme: _propTypes2.default.string,
  onResponse: _propTypes2.default.func.isRequired
} : {};
//# sourceMappingURL=ReCaptcha.js.map
//# sourceMappingURL=ReCaptcha.js.map
