import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import PasswordIcon from 'material-ui/svg-icons/action/lock';
import Loader from '../../Loader';
import Form from '../../Form';
import FormGroup from '../../Form/Group';
import TextField from '../../Form/TextField';
import Button from '../../Form/Button';

var enhance = translate();

var _ref = _jsx(EmailIcon, {
  color: '#9f9d9e'
});

var _ref2 = _jsx(PasswordIcon, {
  color: '#9f9d9e'
});

var _ref3 = _jsx('div', {
  className: 'Button-loading'
}, void 0, _jsx(Loader, {
  size: 'tiny'
}));

var LoginForm = function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  function LoginForm() {
    var _temp, _this, _ret;

    _classCallCheck(this, LoginForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { busy: false }, _this.handleSubmit = function (event) {
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LoginForm.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
    this.setState({ busy: false });
  };

  LoginForm.prototype.render = function render() {
    var _props = this.props,
        t = _props.t,
        error = _props.error;
    var busy = this.state.busy;


    return _jsx(Form, {
      className: 'LoginForm',
      onSubmit: this.handleSubmit
    }, void 0, error && _jsx(FormGroup, {}, void 0, error.message), _jsx(FormGroup, {}, void 0, React.createElement(TextField, {
      ref: this.refEmail,
      className: 'LoginForm-field',
      type: 'email',
      placeholder: t('login.email'),
      icon: _ref,
      autoFocus: true
    })), _jsx(FormGroup, {}, void 0, React.createElement(TextField, {
      ref: this.refPassword,
      className: 'LoginForm-field',
      type: 'password',
      placeholder: t('login.password'),
      icon: _ref2
    })), _jsx(FormGroup, {}, void 0, _jsx(Button, {
      className: 'LoginForm-submit',
      disabled: busy
    }, void 0, busy ? _ref3 : t('login.login'))), _jsx(FormGroup, {}, void 0, _jsx('a', {
      href: true,
      onClick: this.handleResetPassword,
      className: 'LoginForm-forgot'
    }, void 0, 'Forgot Password?')));
  };

  return LoginForm;
}(React.Component);

LoginForm.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  error: PropTypes.object,
  onLogin: PropTypes.func,
  onOpenResetPasswordDialog: PropTypes.func
} : {};


export default enhance(LoginForm);
//# sourceMappingURL=LoginForm.js.map
