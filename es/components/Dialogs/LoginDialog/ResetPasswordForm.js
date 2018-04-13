import _jsx from "@babel/runtime/helpers/jsx";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { CircularProgress } from "material-ui/es/Progress";
import EmailIcon from '@material-ui/icons/Email';
import Form from '../../Form';
import FormGroup from '../../Form/Group';
import TextField from '../../Form/TextField';
import Button from '../../Form/Button';
var enhance = translate();

var _ref =
/*#__PURE__*/
_jsx(EmailIcon, {
  nativeColor: "#9f9d9e"
});

var _ref2 =
/*#__PURE__*/
_jsx("div", {
  className: "Button-loading"
}, void 0, _jsx(CircularProgress, {
  size: "100%"
}));

var ResetPasswordForm =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ResetPasswordForm, _React$Component);

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
      });
    }, _this.refEmail = function (email) {
      _this.email = email;
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = ResetPasswordForm.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps() {
    this.setState({
      busy: false
    });
  };

  _proto.render = function render() {
    var _props = this.props,
        t = _props.t,
        error = _props.error,
        onCloseDialog = _props.onCloseDialog;
    var _state = this.state,
        busy = _state.busy,
        done = _state.done;

    if (done) {
      return _jsx("div", {}, void 0, _jsx("p", {}, void 0, t('login.passwordResetSent')), _jsx("p", {}, void 0, _jsx(Button, {
        className: "ResetPasswordForm-submit",
        onClick: onCloseDialog
      }, void 0, t('close'))));
    }

    return _jsx(Form, {
      className: "ResetPasswordForm",
      onSubmit: this.handleSubmit
    }, void 0, error && _jsx(FormGroup, {}, void 0, error.message), _jsx(FormGroup, {}, void 0, React.createElement(TextField, {
      ref: this.refEmail,
      className: "ResetPasswordForm-field",
      type: "email",
      placeholder: "E-Mail",
      icon: _ref
    })), _jsx(FormGroup, {}, void 0, _jsx(Button, {
      className: "ResetPasswordForm-submit",
      disabled: busy
    }, void 0, busy ? _ref2 : t('login.requestPasswordReset'))));
  };

  return ResetPasswordForm;
}(React.Component);

ResetPasswordForm.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  error: PropTypes.object,
  onResetPassword: PropTypes.func.isRequired,
  onCloseDialog: PropTypes.func.isRequired
} : {};
export default enhance(ResetPasswordForm);
//# sourceMappingURL=ResetPasswordForm.js.map
