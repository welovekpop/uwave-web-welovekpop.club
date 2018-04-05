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

var _redux = require('redux');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _reactRedux = require('react-redux');

var _reactI18next = require('react-i18next');

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

var _DialogActionCreators = require('../../actions/DialogActionCreators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    onLogin: _DialogActionCreators.openLoginDialog,
    onRegister: _DialogActionCreators.openRegisterDialog
  }, dispatch);
};

var enhance = (0, _compose2.default)((0, _reactI18next.translate)(), (0, _reactRedux.connect)(undefined, mapDispatchToProps));

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
  return (0, _jsx3.default)('span', {
    style: { display: 'flex', justifyContent: 'stretch', height: '100%' }
  }, void 0, (0, _jsx3.default)(_Button2.default, {
    variant: 'raised',
    color: 'primary',
    onClick: onLogin,
    style: buttonStyle
  }, void 0, t('login.login')), (0, _jsx3.default)(_Button2.default, {
    onClick: onRegister,
    style: buttonStyle
  }, void 0, t('login.register')));
};

LoginButtons.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  onLogin: _propTypes2.default.func.isRequired,
  onRegister: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(LoginButtons);
//# sourceMappingURL=LoginButtons.js.map
//# sourceMappingURL=LoginButtons.js.map
