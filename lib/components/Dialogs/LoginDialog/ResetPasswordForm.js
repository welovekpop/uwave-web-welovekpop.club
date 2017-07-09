'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _ref = (0, _jsx3.default)(_email2.default, {
  color: '#9f9d9e'
});

var _ref2 = (0, _jsx3.default)('div', {
  className: 'Button-loading'
}, void 0, (0, _jsx3.default)(_Loader2.default, {
  size: 'tiny'
}));

var ResetPasswordForm = function (_React$Component) {
  (0, _inherits3.default)(ResetPasswordForm, _React$Component);

  function ResetPasswordForm() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ResetPasswordForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { busy: false }, _this.handleSubmit = function (event) {
      event.preventDefault();
      _this.setState({ busy: true });
      _this.props.onResetPassword({
        email: _this.email.value
      });
    }, _this.refEmail = function (email) {
      _this.email = email;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  ResetPasswordForm.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
    this.setState({ busy: false });
  };

  ResetPasswordForm.prototype.render = function render() {
    var error = this.props.error;
    var busy = this.state.busy;

    return (0, _jsx3.default)(_Form2.default, {
      className: 'ResetPasswordForm',
      onSubmit: this.handleSubmit
    }, void 0, error && (0, _jsx3.default)(_Group2.default, {}, void 0, error.message), (0, _jsx3.default)(_Group2.default, {}, void 0, _react2.default.createElement(_TextField2.default, {
      ref: this.refEmail,
      className: 'ResetPasswordForm-field',
      type: 'email',
      placeholder: 'E-Mail',
      icon: _ref
    })), (0, _jsx3.default)(_Group2.default, {}, void 0, (0, _jsx3.default)(_Button2.default, {
      className: 'ResetPasswordForm-submit',
      disabled: busy
    }, void 0, busy ? _ref2 : 'RESET PASSWORD')));
  };

  return ResetPasswordForm;
}(_react2.default.Component);

exports.default = ResetPasswordForm;

ResetPasswordForm.propTypes = process.env.NODE_ENV !== "production" ? {
  error: _propTypes2.default.object,
  onResetPassword: _propTypes2.default.func
} : {};
//# sourceMappingURL=ResetPasswordForm.js.map
//# sourceMappingURL=ResetPasswordForm.js.map
