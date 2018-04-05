'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _reactI18next = require('react-i18next');

var _Dialog = require('material-ui/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Close = require('material-ui-icons/Close');

var _Close2 = _interopRequireDefault(_Close);

var _LoginForm = require('./LoginForm');

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _RegisterForm = require('./RegisterForm');

var _RegisterForm2 = _interopRequireDefault(_RegisterForm);

var _ResetPasswordForm = require('./ResetPasswordForm');

var _ResetPasswordForm2 = _interopRequireDefault(_ResetPasswordForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose2.default)((0, _reactI18next.translate)(), (0, _Dialog.withMobileDialog)());

var _ref = (0, _jsx3.default)(_Close2.default, {});

var LoginDialog = function LoginDialog(props) {
  var t = props.t,
      fullScreen = props.fullScreen,
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
    classes: {
      paper: (0, _classnames2.default)('Dialog', 'LoginDialog', fullScreen && 'LoginDialog--mobile')
    },
    open: open,
    fullScreen: fullScreen,
    onClose: onCloseDialog,
    'aria-labelledby': 'uw-login-title'
  }, void 0, (0, _jsx3.default)(_Dialog.DialogTitle, {
    className: 'Dialog-title',
    id: 'uw-login-title'
  }, void 0, title, fullScreen && (0, _jsx3.default)(_IconButton2.default, {
    className: 'Dialog-close',
    onClick: onCloseDialog
  }, void 0, _ref)), (0, _jsx3.default)(_Dialog.DialogContent, {
    className: 'Dialog-body'
  }, void 0, form));
};

LoginDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  open: _propTypes2.default.bool,
  show: _propTypes2.default.string,
  fullScreen: _propTypes2.default.bool.isRequired,
  onCloseDialog: _propTypes2.default.func
} : {};

exports.default = enhance(LoginDialog);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
