import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import EmailIcon from 'material-ui-icons/Email';
import PasswordIcon from 'material-ui-icons/Lock';
import Paper from 'material-ui/es/Paper';
import Typography from 'material-ui/es/Typography';
import { translate } from 'react-i18next';
import Form from '../../../components/Form';
import FormGroup from '../../../components/Form/Group';
import TextField from '../../../components/Form/TextField';
import Button from '../../../components/Form/Button';

var enhance = translate();

var _ref = _jsx(EmailIcon, {
  nativeColor: '#9f9d9e'
});

var _ref2 = _jsx(PasswordIcon, {
  nativeColor: '#9f9d9e'
});

var _ref3 = _jsx(PasswordIcon, {
  nativeColor: '#9f9d9e'
});

var PasswordResetPage = function (_React$Component) {
  _inherits(PasswordResetPage, _React$Component);

  function PasswordResetPage() {
    var _temp, _this, _ret;

    _classCallCheck(this, PasswordResetPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      newPassword: '',
      newPasswordConfirm: ''
    }, _this.handlePasswordChange = function (event) {
      _this.setState({
        newPassword: event.target.value
      });
    }, _this.handlePasswordConfirmChange = function (event) {
      _this.setState({
        newPasswordConfirm: event.target.value
      });
    }, _this.handleSubmit = function (event) {
      event.preventDefault();

      if (_this.isValid()) {
        _this.props.onSubmit(_this.state.newPassword);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  PasswordResetPage.prototype.isValid = function isValid() {
    return this.state.newPassword.length >= 6 && this.state.newPassword === this.state.newPasswordConfirm;
  };

  PasswordResetPage.prototype.render = function render() {
    var _props = this.props,
        t = _props.t,
        email = _props.email;

    var isValid = this.isValid();

    return _jsx(Paper, {
      className: 'PasswordReset'
    }, void 0, _jsx(Form, {
      onSubmit: this.handleSubmit
    }, void 0, _jsx(FormGroup, {}, void 0, _jsx(Typography, {}, void 0, t('resetPassword.introduction'))), email &&
    // Not used at the moment, but we may show (parts of) the user's
    // email address on the reset page at some point.
    _jsx(FormGroup, {}, void 0, _jsx(TextField, {
      type: 'email',
      disabled: true,
      value: email,
      placeholder: t('login.email'),
      icon: _ref
    })), _jsx(FormGroup, {}, void 0, _jsx(TextField, {
      type: 'password',
      value: this.state.newPassword,
      onChange: this.handlePasswordChange,
      placeholder: t('login.password'),
      icon: _ref2
    })), _jsx(FormGroup, {}, void 0, _jsx(TextField, {
      type: 'password',
      value: this.state.newPasswordConfirm,
      onChange: this.handlePasswordConfirmChange,
      placeholder: t('login.password'),
      icon: _ref3
    })), _jsx(FormGroup, {}, void 0, _jsx(Button, {
      disabled: !isValid
    }, void 0, t('resetPassword.submit')))));
  };

  return PasswordResetPage;
}(React.Component);

PasswordResetPage.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
} : {};


export default enhance(PasswordResetPage);
//# sourceMappingURL=index.js.map
