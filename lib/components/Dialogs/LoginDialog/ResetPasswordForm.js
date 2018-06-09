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

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _Email = _interopRequireDefault(require("@material-ui/icons/Email"));

var _Form = _interopRequireDefault(require("../../Form"));

var _Group = _interopRequireDefault(require("../../Form/Group"));

var _TextField = _interopRequireDefault(require("../../Form/TextField"));

var _Button = _interopRequireDefault(require("../../Form/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref =
/*#__PURE__*/
(0, _jsx2.default)(_Email.default, {
  nativeColor: "#9f9d9e"
});

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "Button-loading"
}, void 0, (0, _jsx2.default)(_CircularProgress.default, {
  size: "100%"
}));

var ResetPasswordForm =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(ResetPasswordForm, _React$Component);

  function ResetPasswordForm() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      busy: false,
      done: false
    }, _this.handleSubmit = function (event) {
      event.preventDefault();

      _this.setState({
        busy: true
      });

      Promise.resolve(_this.props.onResetPassword({
        email: _this.email.value
      })).then(function () {
        _this.setState({
          busy: false,
          done: true
        });
      }, function () {
        _this.setState({
          busy: false
        });
      });
    }, _this.refEmail = function (email) {
      _this.email = email;
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = ResetPasswordForm.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        t = _this$props.t,
        error = _this$props.error,
        onCloseDialog = _this$props.onCloseDialog;
    var _this$state = this.state,
        busy = _this$state.busy,
        done = _this$state.done;

    if (done) {
      return (0, _jsx2.default)("div", {}, void 0, (0, _jsx2.default)("p", {}, void 0, t('login.passwordResetSent')), (0, _jsx2.default)("p", {}, void 0, (0, _jsx2.default)(_Button.default, {
        className: "ResetPasswordForm-submit",
        onClick: onCloseDialog
      }, void 0, t('close'))));
    }

    return (0, _jsx2.default)(_Form.default, {
      className: "ResetPasswordForm",
      onSubmit: this.handleSubmit
    }, void 0, error && (0, _jsx2.default)(_Group.default, {}, void 0, error.message), (0, _jsx2.default)(_Group.default, {}, void 0, _react.default.createElement(_TextField.default, {
      ref: this.refEmail,
      className: "ResetPasswordForm-field",
      type: "email",
      autocomplete: "email",
      placeholder: t('login.email'),
      icon: _ref
    })), (0, _jsx2.default)(_Group.default, {}, void 0, (0, _jsx2.default)(_Button.default, {
      className: "ResetPasswordForm-submit",
      disabled: busy
    }, void 0, busy ? _ref2 : t('login.requestPasswordReset'))));
  };

  return ResetPasswordForm;
}(_react.default.Component);

ResetPasswordForm.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  error: _propTypes.default.object,
  onResetPassword: _propTypes.default.func.isRequired,
  onCloseDialog: _propTypes.default.func.isRequired
} : {};

var _default = enhance(ResetPasswordForm);

exports.default = _default;
//# sourceMappingURL=ResetPasswordForm.js.map
