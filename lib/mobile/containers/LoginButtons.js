"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _redux = require("redux");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _reactRedux = require("react-redux");

var _reactI18next = require("react-i18next");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _DialogActionCreators = require("../../actions/DialogActionCreators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    onLogin: _DialogActionCreators.openLoginDialog,
    onRegister: _DialogActionCreators.openRegisterDialog
  }, dispatch);
};

var enhance = (0, _compose.default)((0, _reactI18next.translate)(), (0, _reactRedux.connect)(undefined, mapDispatchToProps));
var buttonStyle = {
  height: '100%',
  fontSize: '11pt',
  textTransform: 'uppercase',
  width: '50%'
};

var LoginButtons = function LoginButtons(_ref) {
  var t = _ref.t,
      onLogin = _ref.onLogin,
      onRegister = _ref.onRegister;
  return (0, _jsx2.default)("span", {
    style: {
      display: 'flex',
      justifyContent: 'stretch',
      height: '100%'
    }
  }, void 0, (0, _jsx2.default)(_Button.default, {
    variant: "raised",
    color: "primary",
    onClick: onLogin,
    style: buttonStyle
  }, void 0, t('login.login')), (0, _jsx2.default)(_Button.default, {
    onClick: onRegister,
    style: buttonStyle
  }, void 0, t('login.register')));
};

LoginButtons.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  onLogin: _propTypes.default.func.isRequired,
  onRegister: _propTypes.default.func.isRequired
} : {};

var _default = enhance(LoginButtons);

exports.default = _default;
//# sourceMappingURL=LoginButtons.js.map
