'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactI18next = require('react-i18next');

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _LoginForm = require('./LoginForm');

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _RegisterForm = require('./RegisterForm');

var _RegisterForm2 = _interopRequireDefault(_RegisterForm);

var _ResetPasswordForm = require('./ResetPasswordForm');

var _ResetPasswordForm2 = _interopRequireDefault(_ResetPasswordForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contentStyle = {
  maxWidth: 350
};

var bodyStyle = {
  padding: 24
};

var enhance = (0, _reactI18next.translate)();

var LoginDialog = function LoginDialog(props) {
  var t = props.t,
      open = props.open,
      show = props.show,
      onCloseDialog = props.onCloseDialog;

  var form = void 0;
  var title = void 0;
  if (show === 'register') {
    title = t('login.register');
    form = _react2.default.createElement(_RegisterForm2.default, props);
  } else if (show === 'reset') {
    title = 'Reset Password';
    form = _react2.default.createElement(_ResetPasswordForm2.default, props);
  } else {
    title = t('login.login');
    form = _react2.default.createElement(_LoginForm2.default, props);
  }
  return (0, _jsx3.default)(_Dialog2.default, {
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
  t: _propTypes2.default.func.isRequired,
  open: _propTypes2.default.bool,
  show: _propTypes2.default.string,
  onCloseDialog: _propTypes2.default.func
} : {};

exports.default = enhance(LoginDialog);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
