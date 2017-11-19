'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _loadScript = require('load-script2');

var _loadScript2 = _interopRequireDefault(_loadScript);

var _Loader = require('../Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _ReCaptcha = require('./ReCaptcha');

var _ReCaptcha2 = _interopRequireDefault(_ReCaptcha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GRECAPTCHA_API = 'https://www.google.com/recaptcha/api.js';
var onloadCallbackName = 'grecaptchaOnload__$';
var onloadCallbacks = [];

if (typeof window !== 'undefined') {
  window[onloadCallbackName] = function () {
    onloadCallbacks.forEach(function (fn) {
      return fn(window.grecaptcha);
    });
  };
}

function loadReCaptcha(cb) {
  (0, _loadScript2.default)(GRECAPTCHA_API + '?onload=' + onloadCallbackName + '&render=explicit');
  onloadCallbacks.push(cb);
}

var _ref = (0, _jsx3.default)(_Loader2.default, {
  className: 'ReCaptcha-spinner',
  size: 'tiny'
});

var ReCaptcha = function (_React$Component) {
  (0, _inherits3.default)(ReCaptcha, _React$Component);

  function ReCaptcha() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ReCaptcha);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      grecaptcha: window.grecaptcha
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  ReCaptcha.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    if (!this.state.grecaptcha) {
      loadReCaptcha(function (grecaptcha) {
        _this2.setState({ grecaptcha: grecaptcha });
      });
    }
  };

  ReCaptcha.prototype.render = function render() {
    if (!this.state.grecaptcha) {
      return _ref;
    }
    return _react2.default.createElement(_ReCaptcha2.default, (0, _extends3.default)({}, this.props, {
      grecaptcha: this.state.grecaptcha
    }));
  };

  return ReCaptcha;
}(_react2.default.Component);

exports.default = ReCaptcha;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
