import _jsx from "@babel/runtime/helpers/builtin/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { translate } from 'react-i18next';
import Dialog, { DialogTitle, DialogContent, withMobileDialog } from "material-ui/es/Dialog";
import IconButton from "material-ui/es/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ResetPasswordForm from './ResetPasswordForm';
var enhance = compose(translate(), withMobileDialog());

var _ref =
/*#__PURE__*/
_jsx(CloseIcon, {});

var LoginDialog = function LoginDialog(props) {
  var t = props.t,
      fullScreen = props.fullScreen,
      open = props.open,
      show = props.show,
      onCloseDialog = props.onCloseDialog;
  var form;
  var title;

  if (show === 'register') {
    title = t('login.register');
    form = React.createElement(RegisterForm, props);
  } else if (show === 'reset') {
    title = 'Reset Password';
    form = React.createElement(ResetPasswordForm, props);
  } else {
    title = t('login.login');
    form = React.createElement(LoginForm, props);
  }

  return _jsx(Dialog, {
    classes: {
      paper: cx('Dialog', 'LoginDialog', fullScreen && 'LoginDialog--mobile')
    },
    open: open,
    fullScreen: fullScreen,
    onClose: onCloseDialog,
    "aria-labelledby": "uw-login-title"
  }, void 0, _jsx(DialogTitle, {
    className: "Dialog-title",
    id: "uw-login-title"
  }, void 0, title, fullScreen && _jsx(IconButton, {
    className: "Dialog-close",
    onClick: onCloseDialog
  }, void 0, _ref)), _jsx(DialogContent, {
    className: "Dialog-body"
  }, void 0, form));
};

LoginDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  open: PropTypes.bool,
  show: PropTypes.string,
  fullScreen: PropTypes.bool.isRequired,
  onCloseDialog: PropTypes.func
} : {};
export default enhance(LoginDialog);
//# sourceMappingURL=index.js.map
