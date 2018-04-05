'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _styles = require('material-ui/styles');

var _reactI18next = require('react-i18next');

var _actions = require('../actions');

var _ErrorArea = require('../../containers/ErrorArea');

var _ErrorArea2 = _interopRequireDefault(_ErrorArea);

var _PasswordResetPage = require('../components/PasswordResetPage');

var _PasswordResetPage2 = _interopRequireDefault(_PasswordResetPage);

var _PasswordResetSuccessPage = require('../components/PasswordResetSuccessPage');

var _PasswordResetSuccessPage2 = _interopRequireDefault(_PasswordResetSuccessPage);

var _theme = require('../../theme');

var _theme2 = _interopRequireDefault(_theme);

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

var _ref2 = (0, _jsx3.default)(_PasswordResetSuccessPage2.default, {});

var _ref3 = (0, _jsx3.default)(_ErrorArea2.default, {});

var PasswordResetApp = function PasswordResetApp(_ref) {
  var locale = _ref.locale,
      success = _ref.success,
      props = (0, _objectWithoutProperties3.default)(_ref, ['locale', 'success']);

  return (0, _jsx3.default)(_styles.MuiThemeProvider, {
    theme: _theme2.default
  }, void 0, (0, _jsx3.default)(_reactI18next.I18nextProvider, {
    i18n: locale
  }, void 0, (0, _jsx3.default)('div', {}, void 0, success ? _ref2 : _react2.default.createElement(_PasswordResetPage2.default, props), _ref3)));
};

PasswordResetApp.propTypes = process.env.NODE_ENV !== "production" ? {
  locale: _propTypes2.default.object.isRequired,
  success: _propTypes2.default.bool
} : {};

exports.default = enhance(PasswordResetApp);
//# sourceMappingURL=PasswordResetApp.js.map
//# sourceMappingURL=PasswordResetApp.js.map
