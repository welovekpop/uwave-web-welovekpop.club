import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import { translate, Interpolate } from 'react-i18next';
import Checkbox from 'material-ui/Checkbox';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import PasswordIcon from 'material-ui/svg-icons/action/lock';
import UserIcon from 'material-ui/svg-icons/social/person';
import Loader from '../../Loader';
import Form from '../../Form';
import FormGroup from '../../Form/Group';
import TextField from '../../Form/TextField';
import Button from '../../Form/Button';
import ReCaptcha from '../../ReCaptcha';
import SocialLogin from './SocialLogin';
import Separator from './Separator';

var enhance = translate();

var _ref = _jsx(SocialLogin, {});

var _ref2 = _jsx(Separator, {});

var _ref3 = _jsx(UserIcon, {
  color: '#9f9d9e'
});

var _ref4 = _jsx(EmailIcon, {
  color: '#9f9d9e'
});

var _ref5 = _jsx(PasswordIcon, {
  color: '#9f9d9e'
});

var _ref6 = _jsx('div', {
  className: 'Button-loading'
}, void 0, _jsx(Loader, {
  size: 'tiny'
}));

var RegisterForm = function (_React$Component) {
  _inherits(RegisterForm, _React$Component);

  function RegisterForm() {
    var _temp, _this, _ret;

    _classCallCheck(this, RegisterForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      busy: false,
      agreed: false,
      captchaResponse: null
    }, _this.handleSubmit = function (event) {
      event.preventDefault();
      _this.setState({ busy: true });
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  RegisterForm.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
    this.setState({ busy: false });
  };

  RegisterForm.prototype.renderCaptcha = function renderCaptcha() {
    if (!this.props.useReCaptcha) {
      return null;
    }
    return _jsx(FormGroup, {}, void 0, _jsx(ReCaptcha, {
      sitekey: this.props.reCaptchaSiteKey,
      onResponse: this.handleCaptchaResponse,
      theme: 'dark'
    }));
  };

  RegisterForm.prototype.render = function render() {
    var _props = this.props,
        t = _props.t,
        error = _props.error;
    var _state = this.state,
        agreed = _state.agreed,
        busy = _state.busy;


    return _jsx(Form, {
      className: 'RegisterForm',
      onSubmit: this.handleSubmit
    }, void 0, error && _jsx(FormGroup, {}, void 0, error.message), _ref, _ref2, _jsx(FormGroup, {}, void 0, React.createElement(TextField, {
      ref: this.refUsername,
      className: 'RegisterForm-field',
      placeholder: t('login.username'),
      icon: _ref3,
      autoFocus: true
    })), _jsx(FormGroup, {}, void 0, React.createElement(TextField, {
      ref: this.refEmail,
      className: 'RegisterForm-field',
      type: 'email',
      placeholder: t('login.email'),
      icon: _ref4
    })), _jsx(FormGroup, {}, void 0, React.createElement(TextField, {
      ref: this.refPassword,
      className: 'RegisterForm-field',
      type: 'password',
      placeholder: t('login.password'),
      icon: _ref5
    })), this.renderCaptcha(), _jsx(FormGroup, {}, void 0, _jsx(Checkbox, {
      style: { float: 'left', width: 'auto' },
      checked: agreed,
      onCheck: this.handleTosCheckbox
    }), _jsx(Interpolate, {
      i18nKey: 'login.agree',
      privacyPolicy: _jsx('a', {
        target: '_blank',
        rel: 'noreferrer noopener',
        href: '/privacy.html'
      }, void 0, t('login.privacyPolicy'))
    })), _jsx(FormGroup, {}, void 0, _jsx(Button, {
      className: 'RegisterForm-submit',
      disabled: busy || !agreed
    }, void 0, busy ? _ref6 : t('login.register'))));
  };

  return RegisterForm;
}(React.Component);

RegisterForm.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  useReCaptcha: PropTypes.bool,
  reCaptchaSiteKey: PropTypes.string,
  error: PropTypes.object,

  onRegister: PropTypes.func
} : {};


export default enhance(RegisterForm);
//# sourceMappingURL=RegisterForm.js.map
