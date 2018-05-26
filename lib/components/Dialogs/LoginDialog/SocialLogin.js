"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _reactI18next = require("react-i18next");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _reactGoogleButton = _interopRequireDefault(require("react-google-button"));

var _LoginActionCreators = require("../../../actions/LoginActionCreators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose.default)((0, _reactRedux.connect)(null, {
  onGoogleClick: _LoginActionCreators.loginWithGoogle
}), (0, _reactI18next.translate)());

var SocialLogin = function SocialLogin(_ref) {
  var t = _ref.t,
      onGoogleClick = _ref.onGoogleClick;
  return (0, _jsx2.default)(_reactGoogleButton.default, {
    style: {
      width: '100%'
    },
    label: t('login.social.loginWithGoogle'),
    onClick: onGoogleClick
  });
};

SocialLogin.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  onGoogleClick: _propTypes.default.func.isRequired
} : {};

var _default = enhance(SocialLogin);

exports.default = _default;
//# sourceMappingURL=SocialLogin.js.map
