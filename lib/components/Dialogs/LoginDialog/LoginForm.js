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

var _Email = _interopRequireDefault(require("@material-ui/icons/Email"));

var _Lock = _interopRequireDefault(require("@material-ui/icons/Lock"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _Form = _interopRequireDefault(require("../../Form"));

var _Group = _interopRequireDefault(require("../../Form/Group"));

var _TextField = _interopRequireDefault(require("../../Form/TextField"));

var _Button = _interopRequireDefault(require("../../Form/Button"));

var _SocialLogin = _interopRequireDefault(require("./SocialLogin"));

var _Separator = _interopRequireDefault(require("./Separator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref =
/*#__PURE__*/
(0, _jsx2.default)(_react.default.Fragment, {}, void 0, (0, _jsx2.default)(_SocialLogin.default, {}), (0, _jsx2.default)(_Separator.default, {}));

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_Email.default, {
  nativeColor: "#9f9d9e"
});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_Lock.default, {
  nativeColor: "#9f9d9e"
});

var _ref4 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "Button-loading"
}, void 0, (0, _jsx2.default)(_CircularProgress.default, {
  size: "100%"
}));

var LoginForm =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(LoginForm, _React$Component);

  function LoginForm() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      busy: false
    }, _this.handleSubmit = function (event) {
      event.preventDefault();

      _this.setState({
        busy: true
      });

      _this.props.onLogin({
        email: _this.email.value,
        password: _this.password.value
      });
    }, _this.handleResetPassword = function (event) {
      event.preventDefault();

      _this.props.onOpenResetPasswordDialog();
    }, _this.refEmail = function (email) {
      _this.email = email;
    }, _this.refPassword = function (password) {
      _this.password = password;
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = LoginForm.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps() {
    this.setState({
      busy: false
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        t = _this$props.t,
        error = _this$props.error,
        supportsSocialAuth = _this$props.supportsSocialAuth;
    var busy = this.state.busy;
    return (0, _jsx2.default)(_Form.default, {
      className: "LoginForm",
      onSubmit: this.handleSubmit
    }, void 0, error && (0, _jsx2.default)(_Group.default, {}, void 0, error.message), supportsSocialAuth && _ref, (0, _jsx2.default)(_Group.default, {}, void 0, _react.default.createElement(_TextField.default, {
      ref: this.refEmail,
      className: "LoginForm-field",
      type: "email",
      placeholder: t('login.email'),
      icon: _ref2,
      autoFocus: true
    })), (0, _jsx2.default)(_Group.default, {}, void 0, _react.default.createElement(_TextField.default, {
      ref: this.refPassword,
      className: "LoginForm-field",
      type: "password",
      placeholder: t('login.password'),
      icon: _ref3
    })), (0, _jsx2.default)(_Group.default, {}, void 0, (0, _jsx2.default)(_Button.default, {
      className: "LoginForm-submit",
      disabled: busy
    }, void 0, busy ? _ref4 : t('login.login'))), (0, _jsx2.default)(_Group.default, {
      className: "LoginForm-forgot"
    }, void 0, (0, _jsx2.default)("button", {
      onClick: this.handleResetPassword,
      className: "LoginForm-forgotLink"
    }, void 0, "Forgot Password?")));
  };

  return LoginForm;
}(_react.default.Component);

LoginForm.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  error: _propTypes.default.object,
  supportsSocialAuth: _propTypes.default.bool,
  onLogin: _propTypes.default.func,
  onOpenResetPasswordDialog: _propTypes.default.func
} : {};

var _default = enhance(LoginForm);

exports.default = _default;
//# sourceMappingURL=LoginForm.js.map
