import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import EmailIcon from '@material-ui/icons/Email';
import PasswordIcon from '@material-ui/icons/Lock';
import { CircularProgress } from "material-ui/es/Progress";
import Form from '../../Form';
import FormGroup from '../../Form/Group';
import TextField from '../../Form/TextField';
import Button from '../../Form/Button';
import SocialLogin from './SocialLogin';
import Separator from './Separator';
var enhance = translate();

var _ref =
/*#__PURE__*/
_jsx(React.Fragment, {}, void 0, _jsx(SocialLogin, {}), _jsx(Separator, {}));

var _ref2 =
/*#__PURE__*/
_jsx(EmailIcon, {
  nativeColor: "#9f9d9e"
});

var _ref3 =
/*#__PURE__*/
_jsx(PasswordIcon, {
  nativeColor: "#9f9d9e"
});

var _ref4 =
/*#__PURE__*/
_jsx("div", {
  className: "Button-loading"
}, void 0, _jsx(CircularProgress, {
  size: "100%"
}));

var LoginForm =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(LoginForm, _React$Component);

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
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = LoginForm.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps() {
    this.setState({
      busy: false
    });
  };

  _proto.render = function render() {
    var _props = this.props,
        t = _props.t,
        error = _props.error,
        supportsSocialAuth = _props.supportsSocialAuth;
    var busy = this.state.busy;
    return _jsx(Form, {
      className: "LoginForm",
      onSubmit: this.handleSubmit
    }, void 0, error && _jsx(FormGroup, {}, void 0, error.message), supportsSocialAuth && _ref, _jsx(FormGroup, {}, void 0, React.createElement(TextField, {
      ref: this.refEmail,
      className: "LoginForm-field",
      type: "email",
      placeholder: t('login.email'),
      icon: _ref2,
      autoFocus: true
    })), _jsx(FormGroup, {}, void 0, React.createElement(TextField, {
      ref: this.refPassword,
      className: "LoginForm-field",
      type: "password",
      placeholder: t('login.password'),
      icon: _ref3
    })), _jsx(FormGroup, {}, void 0, _jsx(Button, {
      className: "LoginForm-submit",
      disabled: busy
    }, void 0, busy ? _ref4 : t('login.login'))), _jsx(FormGroup, {
      className: "LoginForm-forgot"
    }, void 0, _jsx("button", {
      onClick: this.handleResetPassword,
      className: "LoginForm-forgotLink"
    }, void 0, "Forgot Password?")));
  };

  return LoginForm;
}(React.Component);

LoginForm.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  error: PropTypes.object,
  supportsSocialAuth: PropTypes.bool,
  onLogin: PropTypes.func,
  onOpenResetPasswordDialog: PropTypes.func
} : {};
export default enhance(LoginForm);
//# sourceMappingURL=LoginForm.js.map
