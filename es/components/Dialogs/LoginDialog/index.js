import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Dialog from 'material-ui/Dialog';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ResetPasswordForm from './ResetPasswordForm';

var contentStyle = {
  maxWidth: 350
};

var bodyStyle = {
  padding: 24
};

var enhance = translate();

var LoginDialog = function LoginDialog(props) {
  var t = props.t,
      open = props.open,
      show = props.show,
      onCloseDialog = props.onCloseDialog;

  var form = void 0;
  var title = void 0;
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
    contentClassName: 'Dialog LoginDialog',
    bodyClassName: 'Dialog-body',
    titleClassName: 'Dialog-title',
    contentStyle: contentStyle,
    bodyStyle: bodyStyle,
    title: title,
    open: open,
    onRequestClose: onCloseDialog,
    autoScrollBodyContent: true
  }, void 0, form);
};

LoginDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  open: PropTypes.bool,
  show: PropTypes.string,
  onCloseDialog: PropTypes.func
} : {};

export default enhance(LoginDialog);
//# sourceMappingURL=index.js.map
