"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _reactI18next = require("react-i18next");

var _Dialog = _interopRequireWildcard(require("material-ui/Dialog"));

var _IconButton = _interopRequireDefault(require("material-ui/IconButton"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _LoginForm = _interopRequireDefault(require("./LoginForm"));

var _RegisterForm = _interopRequireDefault(require("./RegisterForm"));

var _ResetPasswordForm = _interopRequireDefault(require("./ResetPasswordForm"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose.default)((0, _reactI18next.translate)(), (0, _Dialog.withMobileDialog)());

var _ref =
/*#__PURE__*/
(0, _jsx2.default)(_Close.default, {});

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
    form = _react.default.createElement(_RegisterForm.default, props);
  } else if (show === 'reset') {
    title = 'Reset Password';
    form = _react.default.createElement(_ResetPasswordForm.default, props);
  } else {
    title = t('login.login');
    form = _react.default.createElement(_LoginForm.default, props);
  }

  return (0, _jsx2.default)(_Dialog.default, {
    classes: {
      paper: (0, _classnames.default)('Dialog', 'LoginDialog', fullScreen && 'LoginDialog--mobile')
    },
    open: open,
    fullScreen: fullScreen,
    onClose: onCloseDialog,
    "aria-labelledby": "uw-login-title"
  }, void 0, (0, _jsx2.default)(_Dialog.DialogTitle, {
    className: "Dialog-title",
    id: "uw-login-title"
  }, void 0, title, fullScreen && (0, _jsx2.default)(_IconButton.default, {
    className: "Dialog-close",
    onClick: onCloseDialog
  }, void 0, _ref)), (0, _jsx2.default)(_Dialog.DialogContent, {
    className: "Dialog-body"
  }, void 0, form));
};

LoginDialog.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  open: _propTypes.default.bool,
  show: _propTypes.default.string,
  fullScreen: _propTypes.default.bool.isRequired,
  onCloseDialog: _propTypes.default.func
} : {};

var _default = enhance(LoginDialog); //# sourceMappingURL=index.js.map


exports.default = _default;
//# sourceMappingURL=index.js.map
