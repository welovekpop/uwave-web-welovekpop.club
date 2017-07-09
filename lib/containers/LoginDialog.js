'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _LoginActionCreators = require('../actions/LoginActionCreators');

var _DialogActionCreators = require('../actions/DialogActionCreators');

var _dialogSelectors = require('../selectors/dialogSelectors');

var _LoginDialog = require('../components/Dialogs/LoginDialog');

var _LoginDialog2 = _interopRequireDefault(_LoginDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    onOpenResetPasswordDialog: _DialogActionCreators.openResetPasswordDialog,
    onResetPassword: _LoginActionCreators.resetPassword,
    onLogin: _LoginActionCreators.login,
    onRegister: _LoginActionCreators.register,
    onCloseDialog: _DialogActionCreators.closeLoginDialog
  }, dispatch);
};

exports.default = (0, _reactRedux.connect)(_dialogSelectors.loginDialogSelector, mapDispatchToProps)(_LoginDialog2.default);
//# sourceMappingURL=LoginDialog.js.map
//# sourceMappingURL=LoginDialog.js.map
