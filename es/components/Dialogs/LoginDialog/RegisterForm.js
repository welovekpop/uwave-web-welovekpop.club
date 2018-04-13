import _jsx from "@babel/runtime/helpers/jsx";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import { translate, Interpolate } from 'react-i18next';
import { FormControlLabel } from "material-ui/es/Form";
import Checkbox from "material-ui/es/Checkbox";
import { CircularProgress } from "material-ui/es/Progress";
import EmailIcon from '@material-ui/icons/Email';
import PasswordIcon from '@material-ui/icons/Lock';
import UserIcon from '@material-ui/icons/Person';
import Form from '../../Form';
import FormGroup from '../../Form/Group';
import TextField from '../../Form/TextField';
import Button from '../../Form/Button';
import ReCaptcha from '../../ReCaptcha';
import SocialLogin from './SocialLogin';
import Separator from './Separator';
var enhance = translate();

var _ref =
/*#__PURE__*/
_jsx(React.Fragment, {}, void 0, _jsx(SocialLogin, {}), _jsx(Separator, {}));

var _ref2 =
/*#__PURE__*/
_jsx(UserIcon, {
  nativeColor: "#9f9d9e"
});

var _ref3 =
/*#__PURE__*/
_jsx(EmailIcon, {
  nativeColor: "#9f9d9e"
});

var _ref4 =
/*#__PURE__*/
_jsx(PasswordIcon, {
  nativeColor: "#9f9d9e"
});

var _ref5 =
/*#__PURE__*/
_jsx("div", {
  className: "Button-loading"
}, void 0, _jsx(CircularProgress, {
  size: "100%"
}));

var RegisterForm =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(RegisterForm, _React$Component);

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
    }, _temp) || _assertThisInitialized(_this);
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

    return _jsx(FormGroup, {}, void 0, _jsx(ReCaptcha, {
      sitekey: this.props.reCaptchaSiteKey,
      onResponse: this.handleCaptchaResponse,
      theme: "dark"
    }));
  };

  _proto.render = function render() {
    var _props = this.props,
        t = _props.t,
        error = _props.error,
        supportsSocialAuth = _props.supportsSocialAuth;
    var _state = this.state,
        agreed = _state.agreed,
        busy = _state.busy;
    return _jsx(Form, {
      className: "RegisterForm",
      onSubmit: this.handleSubmit
    }, void 0, error && _jsx(FormGroup, {}, void 0, error.message), supportsSocialAuth && _ref, _jsx(FormGroup, {}, void 0, React.createElement(TextField, {
      ref: this.refUsername,
      className: "RegisterForm-field",
      placeholder: t('login.username'),
      icon: _ref2,
      autoFocus: true
    })), _jsx(FormGroup, {}, void 0, React.createElement(TextField, {
      ref: this.refEmail,
      className: "RegisterForm-field",
      type: "email",
      placeholder: t('login.email'),
      icon: _ref3
    })), _jsx(FormGroup, {}, void 0, React.createElement(TextField, {
      ref: this.refPassword,
      className: "RegisterForm-field",
      type: "password",
      placeholder: t('login.password'),
      icon: _ref4
    })), this.renderCaptcha(), _jsx(FormGroup, {}, void 0, _jsx(FormControlLabel, {
      control: _jsx(Checkbox, {
        checked: agreed,
        onChange: this.handleTosCheckbox
      }),
      label: _jsx(Interpolate, {
        i18nKey: "login.agree",
        privacyPolicy: _jsx("a", {
          target: "_blank",
          rel: "noreferrer noopener",
          href: "/privacy.html"
        }, void 0, t('login.privacyPolicy'))
      })
    })), _jsx(FormGroup, {}, void 0, _jsx(Button, {
      className: "RegisterForm-submit",
      disabled: busy || !agreed
    }, void 0, busy ? _ref5 : t('login.register'))));
  };

  return RegisterForm;
}(React.Component);

RegisterForm.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  useReCaptcha: PropTypes.bool,
  reCaptchaSiteKey: PropTypes.string,
  supportsSocialAuth: PropTypes.bool,
  error: PropTypes.object,
  onRegister: PropTypes.func
} : {};
export default enhance(RegisterForm);
//# sourceMappingURL=RegisterForm.js.map
