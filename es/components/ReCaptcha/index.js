import _jsx from "@babel/runtime/helpers/jsx";
import _extends from "@babel/runtime/helpers/extends";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React from 'react';
import loadScript from 'load-script2';
import { CircularProgress } from "material-ui/es/Progress";
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
  loadScript(GRECAPTCHA_API + "?onload=" + onloadCallbackName + "&render=explicit");
  onloadCallbacks.push(cb);
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
