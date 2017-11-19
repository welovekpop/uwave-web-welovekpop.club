'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

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

var _reactI18next = require('react-i18next');

var _email = require('material-ui/svg-icons/communication/email');

var _email2 = _interopRequireDefault(_email);

var _lock = require('material-ui/svg-icons/action/lock');

var _lock2 = _interopRequireDefault(_lock);

var _Loader = require('../../Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _Form = require('../../Form');

var _Form2 = _interopRequireDefault(_Form);

var _Group = require('../../Form/Group');

var _Group2 = _interopRequireDefault(_Group);

var _TextField = require('../../Form/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = require('../../Form/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref = (0, _jsx3.default)(_email2.default, {
  color: '#9f9d9e'
});

var _ref2 = (0, _jsx3.default)(_lock2.default, {
  color: '#9f9d9e'
});

var _ref3 = (0, _jsx3.default)('div', {
  className: 'Button-loading'
}, void 0, (0, _jsx3.default)(_Loader2.default, {
  size: 'tiny'
}));

var LoginForm = function (_React$Component) {
  (0, _inherits3.default)(LoginForm, _React$Component);

  function LoginForm() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, LoginForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { busy: false }, _this.handleSubmit = function (event) {
      event.preventDefault();
      _this.setState({ busy: true });
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
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  LoginForm.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
    this.setState({ busy: false });
  };

  LoginForm.prototype.render = function render() {
    var _props = this.props,
        t = _props.t,
        error = _props.error;
    var busy = this.state.busy;

    return (0, _jsx3.default)(_Form2.default, {
      className: 'LoginForm',
      onSubmit: this.handleSubmit
    }, void 0, error && (0, _jsx3.default)(_Group2.default, {}, void 0, error.message), (0, _jsx3.default)(_Group2.default, {}, void 0, _react2.default.createElement(_TextField2.default, {
      ref: this.refEmail,
      className: 'LoginForm-field',
      type: 'email',
      placeholder: t('login.email'),
      icon: _ref,
      autoFocus: true
    })), (0, _jsx3.default)(_Group2.default, {}, void 0, _react2.default.createElement(_TextField2.default, {
      ref: this.refPassword,
      className: 'LoginForm-field',
      type: 'password',
      placeholder: t('login.password'),
      icon: _ref2
    })), (0, _jsx3.default)(_Group2.default, {}, void 0, (0, _jsx3.default)(_Button2.default, {
      className: 'LoginForm-submit',
      disabled: busy
    }, void 0, busy ? _ref3 : t('login.login'))), (0, _jsx3.default)(_Group2.default, {}, void 0, (0, _jsx3.default)('a', {
      href: true,
      onClick: this.handleResetPassword,
      className: 'LoginForm-forgot'
    }, void 0, 'Forgot Password?')));
  };

  return LoginForm;
}(_react2.default.Component);

LoginForm.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  error: _propTypes2.default.object,
  onLogin: _propTypes2.default.func,
  onOpenResetPasswordDialog: _propTypes2.default.func
} : {};

exports.default = enhance(LoginForm);
//# sourceMappingURL=LoginForm.js.map
//# sourceMappingURL=LoginForm.js.map
