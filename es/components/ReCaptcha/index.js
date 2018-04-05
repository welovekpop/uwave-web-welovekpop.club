import _jsx from 'babel-runtime/helpers/jsx';
import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import loadScript from 'load-script2';
import { CircularProgress } from 'material-ui/es/Progress';
import InternalCaptcha from './ReCaptcha';

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
  loadScript(GRECAPTCHA_API + '?onload=' + onloadCallbackName + '&render=explicit');
  onloadCallbacks.push(cb);
}

var _ref = _jsx(CircularProgress, {
  className: 'ReCaptcha-spinner'
});

var ReCaptcha = function (_React$Component) {
  _inherits(ReCaptcha, _React$Component);

  function ReCaptcha() {
    var _temp, _this, _ret;

    _classCallCheck(this, ReCaptcha);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      grecaptcha: window.grecaptcha
    }, _temp), _possibleConstructorReturn(_this, _ret);
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
    return React.createElement(InternalCaptcha, _extends({}, this.props, {
      grecaptcha: this.state.grecaptcha
    }));
  };

  return ReCaptcha;
}(React.Component);

export default ReCaptcha;
//# sourceMappingURL=index.js.map
