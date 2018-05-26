import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import EmailIcon from "@material-ui/icons/es/Email";
import PasswordIcon from "@material-ui/icons/es/Lock";
import Paper from "@material-ui/core/es/Paper";
import Typography from "@material-ui/core/es/Typography";
import { translate } from 'react-i18next';
import Form from '../../../components/Form';
import FormGroup from '../../../components/Form/Group';
import TextField from '../../../components/Form/TextField';
import Button from '../../../components/Form/Button';
var enhance = translate();

var _ref =
/*#__PURE__*/
_jsx(EmailIcon, {
  nativeColor: "#9f9d9e"
});

var _ref2 =
/*#__PURE__*/
_jsx(PasswordIcon, {
  nativeColor: "#9f9d9e"
});

var _ref3 =
/*#__PURE__*/
_jsx(PasswordIcon, {
  nativeColor: "#9f9d9e"
});

var PasswordResetPage =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(PasswordResetPage, _React$Component);

  function PasswordResetPage() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
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
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = PasswordResetPage.prototype;

  _proto.isValid = function isValid() {
    return this.state.newPassword.length >= 6 && this.state.newPassword === this.state.newPasswordConfirm;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        t = _this$props.t,
        email = _this$props.email;
    var isValid = this.isValid();
    return _jsx(Paper, {
      className: "PasswordReset"
    }, void 0, _jsx(Form, {
      onSubmit: this.handleSubmit
    }, void 0, _jsx(FormGroup, {}, void 0, _jsx(Typography, {}, void 0, t('resetPassword.introduction'))), email && // Not used at the moment, but we may show (parts of) the user's
    // email address on the reset page at some point.
    _jsx(FormGroup, {}, void 0, _jsx(TextField, {
      type: "email",
      disabled: true,
      value: email,
      placeholder: t('login.email'),
      icon: _ref
    })), _jsx(FormGroup, {}, void 0, _jsx(TextField, {
      type: "password",
      value: this.state.newPassword,
      onChange: this.handlePasswordChange,
      placeholder: t('login.password'),
      icon: _ref2
    })), _jsx(FormGroup, {}, void 0, _jsx(TextField, {
      type: "password",
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
