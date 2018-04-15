"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _reselect = require("reselect");

var _styles = require("material-ui/styles");

var _reactI18next = require("react-i18next");

var _actions = require("../actions");

var _ErrorArea = _interopRequireDefault(require("../../containers/ErrorArea"));

var _PasswordResetPage = _interopRequireDefault(require("../components/PasswordResetPage"));

var _PasswordResetSuccessPage = _interopRequireDefault(require("../components/PasswordResetSuccessPage"));

var _theme = _interopRequireDefault(require("../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  success: function success(state) {
    return state.passwordReset.success;
  }
});
var mapDispatchToProps = {
  onSubmit: _actions.resetPassword
};
var enhance = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);
var muiTheme = (0, _styles.createMuiTheme)(_theme.default);

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_PasswordResetSuccessPage.default, {});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_ErrorArea.default, {});

var PasswordResetApp = function PasswordResetApp(_ref) {
  var locale = _ref.locale,
      success = _ref.success,
      props = (0, _objectWithoutProperties2.default)(_ref, ["locale", "success"]);
  return (0, _jsx2.default)(_styles.MuiThemeProvider, {
    theme: muiTheme
  }, void 0, (0, _jsx2.default)(_reactI18next.I18nextProvider, {
    i18n: locale
  }, void 0, (0, _jsx2.default)("div", {}, void 0, success ? _ref2 : _react.default.createElement(_PasswordResetPage.default, props), _ref3)));
};

PasswordResetApp.propTypes = process.env.NODE_ENV !== "production" ? {
  locale: _propTypes.default.object.isRequired,
  success: _propTypes.default.bool
} : {};

var _default = enhance(PasswordResetApp); //# sourceMappingURL=PasswordResetApp.js.map


exports.default = _default;
//# sourceMappingURL=PasswordResetApp.js.map
