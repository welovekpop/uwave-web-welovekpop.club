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

var _email = require('material-ui/svg-icons/communication/email');

var _email2 = _interopRequireDefault(_email);

var _lock = require('material-ui/svg-icons/action/lock');

var _lock2 = _interopRequireDefault(_lock);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _reactI18next = require('react-i18next');

var _Form = require('../../../components/Form');

var _Form2 = _interopRequireDefault(_Form);

var _Group = require('../../../components/Form/Group');

var _Group2 = _interopRequireDefault(_Group);

var _TextField = require('../../../components/Form/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = require('../../../components/Form/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref = (0, _jsx3.default)(_email2.default, {
  color: '#9f9d9e'
});

var _ref2 = (0, _jsx3.default)(_lock2.default, {
  color: '#9f9d9e'
});

var _ref3 = (0, _jsx3.default)(_lock2.default, {
  color: '#9f9d9e'
});

var PasswordResetPage = function (_React$Component) {
  (0, _inherits3.default)(PasswordResetPage, _React$Component);

  function PasswordResetPage() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PasswordResetPage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
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
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  PasswordResetPage.prototype.isValid = function isValid() {
    return this.state.newPassword.length >= 6 && this.state.newPassword === this.state.newPasswordConfirm;
  };

  PasswordResetPage.prototype.render = function render() {
    var _props = this.props,
        t = _props.t,
        email = _props.email;

    var isValid = this.isValid();

    return (0, _jsx3.default)(_Paper2.default, {
      className: 'PasswordReset'
    }, void 0, (0, _jsx3.default)('p', {}, void 0, t('resetPassword.introduction')), (0, _jsx3.default)(_Form2.default, {
      onSubmit: this.handleSubmit
    }, void 0, email &&
    // Not used at the moment, but we may show (parts of) the user's
    // email address on the reset page at some point.
    (0, _jsx3.default)(_Group2.default, {}, void 0, (0, _jsx3.default)(_TextField2.default, {
      type: 'email',
      disabled: true,
      value: email,
      placeholder: t('login.email'),
      icon: _ref
    })), (0, _jsx3.default)(_Group2.default, {}, void 0, (0, _jsx3.default)(_TextField2.default, {
      type: 'password',
      value: this.state.newPassword,
      onChange: this.handlePasswordChange,
      placeholder: t('login.password'),
      icon: _ref2
    })), (0, _jsx3.default)(_Group2.default, {}, void 0, (0, _jsx3.default)(_TextField2.default, {
      type: 'password',
      value: this.state.newPasswordConfirm,
      onChange: this.handlePasswordConfirmChange,
      placeholder: t('login.password'),
      icon: _ref3
    })), (0, _jsx3.default)(_Group2.default, {}, void 0, (0, _jsx3.default)(_Button2.default, {
      disabled: !isValid
    }, void 0, t('resetPassword.submit')))));
  };

  return PasswordResetPage;
}(_react2.default.Component);

PasswordResetPage.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  email: _propTypes2.default.string.isRequired,
  onSubmit: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(PasswordResetPage);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
