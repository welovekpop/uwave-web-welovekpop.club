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

var _reactRedux = require('react-redux');

var _reactI18next = require('react-i18next');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _reactGoogleButton = require('react-google-button');

var _reactGoogleButton2 = _interopRequireDefault(_reactGoogleButton);

var _LoginActionCreators = require('../../../actions/LoginActionCreators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose2.default)((0, _reactRedux.connect)(null, {
  onGoogleClick: _LoginActionCreators.loginWithGoogle
}), (0, _reactI18next.translate)());

var SocialLogin = function SocialLogin(_ref) {
  var t = _ref.t,
      onGoogleClick = _ref.onGoogleClick;
  return (0, _jsx3.default)(_reactGoogleButton2.default, {
    style: { width: '100%' },
    label: t('login.social.loginWithGoogle'),
    onClick: onGoogleClick
  });
};

SocialLogin.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  onGoogleClick: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(SocialLogin);
//# sourceMappingURL=SocialLogin.js.map
//# sourceMappingURL=SocialLogin.js.map
