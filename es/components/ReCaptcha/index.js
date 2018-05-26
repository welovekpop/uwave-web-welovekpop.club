import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _extends from "@babel/runtime/helpers/builtin/extends";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import React from 'react';
import loadScript from 'load-script2';
import CircularProgress from "@material-ui/core/es/CircularProgress";
import InternalCaptcha from './ReCaptcha';
var GRECAPTCHA_API = 'https://www.google.com/recaptcha/api.js';
var onloadCallbackName = 'grecaptchaOnload__$';
var onloadCallbacks = [];

function loadReCaptcha(cb) {
  loadScript(GRECAPTCHA_API + "?onload=" + onloadCallbackName + "&render=explicit");
  onloadCallbacks.push(cb);
}

function onload() {
  onloadCallbacks.forEach(function (fn) {
    return fn(window.grecaptcha);
  });
}

var _ref =
/*#__PURE__*/
_jsx(CircularProgress, {
  className: "ReCaptcha-spinner"
});

var ReCaptcha =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReCaptcha, _React$Component);

  function ReCaptcha() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      grecaptcha: window.grecaptcha
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = ReCaptcha.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    if (!this.state.grecaptcha) {
      if (typeof window[onloadCallbackName] !== 'function') {
        window[onloadCallbackName] = onload;
      }

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

    return React.createElement(InternalCaptcha, _extends({}, this.props, {
      grecaptcha: this.state.grecaptcha
    }));
  };

  return ReCaptcha;
}(React.Component);

export { ReCaptcha as default };
//# sourceMappingURL=index.js.map
