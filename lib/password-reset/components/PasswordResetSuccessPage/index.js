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

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var PasswordResetSuccessPage = function PasswordResetSuccessPage(_ref) {
  var t = _ref.t;
  return (0, _jsx3.default)(_Paper2.default, {
    className: 'PasswordReset'
  }, void 0, (0, _jsx3.default)(_Typography2.default, {
    variant: 'body1'
  }, void 0, t('resetPassword.success')));
};

PasswordResetSuccessPage.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(PasswordResetSuccessPage);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
