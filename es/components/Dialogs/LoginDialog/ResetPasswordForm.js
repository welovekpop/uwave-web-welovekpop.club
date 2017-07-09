import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';
import PropTypes from 'prop-types';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import Loader from '../../Loader';
import Form from '../../Form';
import FormGroup from '../../Form/Group';
import TextField from '../../Form/TextField';
import Button from '../../Form/Button';

var _ref = _jsx(EmailIcon, {
  color: '#9f9d9e'
});

var _ref2 = _jsx('div', {
  className: 'Button-loading'
}, void 0, _jsx(Loader, {
  size: 'tiny'
}));

var ResetPasswordForm = function (_React$Component) {
  _inherits(ResetPasswordForm, _React$Component);

  function ResetPasswordForm() {
    var _temp, _this, _ret;

    _classCallCheck(this, ResetPasswordForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = { busy: false }, _this.handleSubmit = function (event) {
      event.preventDefault();
      _this.setState({ busy: true });
      _this.props.onResetPassword({
        email: _this.email.value
      });
    }, _this.refEmail = function (email) {
      _this.email = email;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ResetPasswordForm.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
    this.setState({ busy: false });
  };

  ResetPasswordForm.prototype.render = function render() {
    var error = this.props.error;
    var busy = this.state.busy;


    return _jsx(Form, {
      className: 'ResetPasswordForm',
      onSubmit: this.handleSubmit
    }, void 0, error && _jsx(FormGroup, {}, void 0, error.message), _jsx(FormGroup, {}, void 0, React.createElement(TextField, {
      ref: this.refEmail,
      className: 'ResetPasswordForm-field',
      type: 'email',
      placeholder: 'E-Mail',
      icon: _ref
    })), _jsx(FormGroup, {}, void 0, _jsx(Button, {
      className: 'ResetPasswordForm-submit',
      disabled: busy
    }, void 0, busy ? _ref2 : 'RESET PASSWORD')));
  };

  return ResetPasswordForm;
}(React.Component);

export { ResetPasswordForm as default };
ResetPasswordForm.propTypes = process.env.NODE_ENV !== "production" ? {
  error: PropTypes.object,
  onResetPassword: PropTypes.func
} : {};
//# sourceMappingURL=ResetPasswordForm.js.map
