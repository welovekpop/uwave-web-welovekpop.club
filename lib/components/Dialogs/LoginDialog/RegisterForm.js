"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _Email = _interopRequireDefault(require("@material-ui/icons/Email"));

var _Lock = _interopRequireDefault(require("@material-ui/icons/Lock"));

var _Person = _interopRequireDefault(require("@material-ui/icons/Person"));

var _Form = _interopRequireDefault(require("../../Form"));

var _Group = _interopRequireDefault(require("../../Form/Group"));

var _TextField = _interopRequireDefault(require("../../Form/TextField"));

var _Button = _interopRequireDefault(require("../../Form/Button"));

var _ReCaptcha = _interopRequireDefault(require("../../ReCaptcha"));

var _SocialLogin = _interopRequireDefault(require("./SocialLogin"));

var _Separator = _interopRequireDefault(require("./Separator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref =
/*#__PURE__*/
(0, _jsx2.default)(_react.default.Fragment, {}, void 0, (0, _jsx2.default)(_SocialLogin.default, {}), (0, _jsx2.default)(_Separator.default, {}));

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_Person.default, {
  nativeColor: "#9f9d9e"
});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_Email.default, {
  nativeColor: "#9f9d9e"
});

var _ref4 =
/*#__PURE__*/
(0, _jsx2.default)(_Lock.default, {
  nativeColor: "#9f9d9e"
});

var _ref5 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "Button-loading"
}, void 0, (0, _jsx2.default)(_CircularProgress.default, {
  size: "100%"
}));

var RegisterForm =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(RegisterForm, _React$Component);

  function RegisterForm() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      busy: false,
      agreed: false,
      captchaResponse: null
    }, _this.handleSubmit = function (event) {
      event.preventDefault();

      _this.setState({
        busy: true
      });

      _this.props.onRegister({
        username: _this.username.value,
        email: _this.email.value,
        password: _this.password.value,
        grecaptcha: _this.state.captchaResponse
      });
    }, _this.handleCaptchaResponse = function (response) {
      _this.setState({
        captchaResponse: response
      });
    }, _this.handleTosCheckbox = function (event, checked) {
      _this.setState({
        agreed: checked
      });
    }, _this.refUsername = function (username) {
      _this.username = username;
    }, _this.refEmail = function (email) {
      _this.email = email;
    }, _this.refPassword = function (password) {
      _this.password = password;
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = RegisterForm.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps() {
    this.setState({
      busy: false
    });
  };

  _proto.renderCaptcha = function renderCaptcha() {
    if (!this.props.useReCaptcha) {
      return null;
    }

    return (0, _jsx2.default)(_Group.default, {}, void 0, (0, _jsx2.default)(_ReCaptcha.default, {
      sitekey: this.props.reCaptchaSiteKey,
      onResponse: this.handleCaptchaResponse,
      theme: "dark"
    }));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        t = _this$props.t,
        error = _this$props.error,
        supportsSocialAuth = _this$props.supportsSocialAuth,
        useReCaptcha = _this$props.useReCaptcha;
    var _this$state = this.state,
        agreed = _this$state.agreed,
        busy = _this$state.busy,
        captchaResponse = _this$state.captchaResponse;
    var captchaOk = !useReCaptcha || !!captchaResponse;
    return (0, _jsx2.default)(_Form.default, {
      className: "RegisterForm",
      onSubmit: this.handleSubmit
    }, void 0, error && (0, _jsx2.default)(_Group.default, {}, void 0, error.message), supportsSocialAuth && _ref, (0, _jsx2.default)(_Group.default, {}, void 0, _react.default.createElement(_TextField.default, {
      ref: this.refUsername,
      className: "RegisterForm-field",
      placeholder: t('login.username'),
      icon: _ref2,
      autoFocus: true
    })), (0, _jsx2.default)(_Group.default, {}, void 0, _react.default.createElement(_TextField.default, {
      ref: this.refEmail,
      className: "RegisterForm-field",
      type: "email",
      placeholder: t('login.email'),
      icon: _ref3
    })), (0, _jsx2.default)(_Group.default, {}, void 0, _react.default.createElement(_TextField.default, {
      ref: this.refPassword,
      className: "RegisterForm-field",
      type: "password",
      placeholder: t('login.password'),
      icon: _ref4
    })), this.renderCaptcha(), (0, _jsx2.default)(_Group.default, {}, void 0, (0, _jsx2.default)(_FormControlLabel.default, {
      control: (0, _jsx2.default)(_Checkbox.default, {
        checked: agreed,
        onChange: this.handleTosCheckbox
      }),
      label: (0, _jsx2.default)(_reactI18next.Interpolate, {
        i18nKey: "login.agree",
        privacyPolicy: (0, _jsx2.default)("a", {
          target: "_blank",
          rel: "noreferrer noopener",
          href: "/privacy.html"
        }, void 0, t('login.privacyPolicy'))
      })
    })), (0, _jsx2.default)(_Group.default, {}, void 0, (0, _jsx2.default)(_Button.default, {
      className: "RegisterForm-submit",
      disabled: busy || !agreed || !captchaOk
    }, void 0, busy ? _ref5 : t('login.register'))));
  };

  return RegisterForm;
}(_react.default.Component);

RegisterForm.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  useReCaptcha: _propTypes.default.bool,
  reCaptchaSiteKey: _propTypes.default.string,
  supportsSocialAuth: _propTypes.default.bool,
  error: _propTypes.default.object,
  onRegister: _propTypes.default.func
} : {};

var _default = enhance(RegisterForm);

exports.default = _default;
//# sourceMappingURL=RegisterForm.js.map
