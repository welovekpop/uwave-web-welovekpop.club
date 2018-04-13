"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _loadScript = _interopRequireDefault(require("load-script2"));

var _Progress = require("material-ui/Progress");

var _ReCaptcha = _interopRequireDefault(require("./ReCaptcha"));

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
  (0, _loadScript.default)(GRECAPTCHA_API + "?onload=" + onloadCallbackName + "&render=explicit");
  onloadCallbacks.push(cb);
}

var _ref =
/*#__PURE__*/
(0, _jsx2.default)(_Progress.CircularProgress, {
  className: "ReCaptcha-spinner"
});

var ReCaptcha =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ReCaptcha, _React$Component);

  function ReCaptcha() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      grecaptcha: window.grecaptcha
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = ReCaptcha.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    if (!this.state.grecaptcha) {
      loadReCaptcha(function (grecaptcha) {
        _this2.setState({
          grecaptcha: grecaptcha
        });
      });
    }
  };

  _proto.render = function render() {
    if (!this.state.grecaptcha) {
      return _ref;
    }

    return _react.default.createElement(_ReCaptcha.default, (0, _extends2.default)({}, this.props, {
      grecaptcha: this.state.grecaptcha
    }));
  };

  return ReCaptcha;
}(_react.default.Component); //# sourceMappingURL=index.js.map


exports.default = ReCaptcha;
//# sourceMappingURL=index.js.map
