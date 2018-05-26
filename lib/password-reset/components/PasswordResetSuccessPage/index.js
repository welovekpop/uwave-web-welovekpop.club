"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var PasswordResetSuccessPage = function PasswordResetSuccessPage(_ref) {
  var t = _ref.t;
  return (0, _jsx2.default)(_Paper.default, {
    className: "PasswordReset"
  }, void 0, (0, _jsx2.default)(_Typography.default, {
    variant: "body1"
  }, void 0, t('resetPassword.success')));
};

PasswordResetSuccessPage.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired
} : {};

var _default = enhance(PasswordResetSuccessPage);

exports.default = _default;
//# sourceMappingURL=index.js.map
