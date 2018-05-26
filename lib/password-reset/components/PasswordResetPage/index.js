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

var _Email = _interopRequireDefault(require("@material-ui/icons/Email"));

var _Lock = _interopRequireDefault(require("@material-ui/icons/Lock"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _reactI18next = require("react-i18next");

var _Form = _interopRequireDefault(require("../../../components/Form"));

var _Group = _interopRequireDefault(require("../../../components/Form/Group"));

var _TextField = _interopRequireDefault(require("../../../components/Form/TextField"));

var _Button = _interopRequireDefault(require("../../../components/Form/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref =
/*#__PURE__*/
(0, _jsx2.default)(_Email.default, {
  nativeColor: "#9f9d9e"
});

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_Lock.default, {
  nativeColor: "#9f9d9e"
});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_Lock.default, {
  nativeColor: "#9f9d9e"
});

var PasswordResetPage =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(PasswordResetPage, _React$Component);

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
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
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
    return (0, _jsx2.default)(_Paper.default, {
      className: "PasswordReset"
    }, void 0, (0, _jsx2.default)(_Form.default, {
      onSubmit: this.handleSubmit
    }, void 0, (0, _jsx2.default)(_Group.default, {}, void 0, (0, _jsx2.default)(_Typography.default, {}, void 0, t('resetPassword.introduction'))), email && // Not used at the moment, but we may show (parts of) the user's
    // email address on the reset page at some point.
    (0, _jsx2.default)(_Group.default, {}, void 0, (0, _jsx2.default)(_TextField.default, {
      type: "email",
      disabled: true,
      value: email,
      placeholder: t('login.email'),
      icon: _ref
    })), (0, _jsx2.default)(_Group.default, {}, void 0, (0, _jsx2.default)(_TextField.default, {
      type: "password",
      value: this.state.newPassword,
      onChange: this.handlePasswordChange,
      placeholder: t('login.password'),
      icon: _ref2
    })), (0, _jsx2.default)(_Group.default, {}, void 0, (0, _jsx2.default)(_TextField.default, {
      type: "password",
      value: this.state.newPasswordConfirm,
      onChange: this.handlePasswordConfirmChange,
      placeholder: t('login.password'),
      icon: _ref3
    })), (0, _jsx2.default)(_Group.default, {}, void 0, (0, _jsx2.default)(_Button.default, {
      disabled: !isValid
    }, void 0, t('resetPassword.submit')))));
  };

  return PasswordResetPage;
}(_react.default.Component);

PasswordResetPage.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  email: _propTypes.default.string.isRequired,
  onSubmit: _propTypes.default.func.isRequired
} : {};

var _default = enhance(PasswordResetPage);

exports.default = _default;
//# sourceMappingURL=index.js.map
