import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { MuiThemeProvider, createMuiTheme } from "material-ui/es/styles";
import { I18nextProvider } from 'react-i18next';
import { resetPassword } from '../actions';
import ErrorArea from '../../containers/ErrorArea';
import PasswordResetPage from '../components/PasswordResetPage';
import PasswordResetSuccessPage from '../components/PasswordResetSuccessPage';
import theme from '../../theme';
var mapStateToProps = createStructuredSelector({
  success: function success(state) {
    return state.passwordReset.success;
  }
});
var mapDispatchToProps = {
  onSubmit: resetPassword
};
var enhance = connect(mapStateToProps, mapDispatchToProps);
var muiTheme = createMuiTheme(theme);

var _ref2 =
/*#__PURE__*/
_jsx(PasswordResetSuccessPage, {});

var _ref3 =
/*#__PURE__*/
_jsx(ErrorArea, {});

var PasswordResetApp = function PasswordResetApp(_ref) {
  var locale = _ref.locale,
      success = _ref.success,
      props = _objectWithoutProperties(_ref, ["locale", "success"]);

  return _jsx(MuiThemeProvider, {
    theme: muiTheme
  }, void 0, _jsx(I18nextProvider, {
    i18n: locale
  }, void 0, _jsx("div", {}, void 0, success ? _ref2 : React.createElement(PasswordResetPage, props), _ref3)));
};

PasswordResetApp.propTypes = process.env.NODE_ENV !== "production" ? {
  locale: PropTypes.object.isRequired,
  success: PropTypes.bool
} : {};
export default enhance(PasswordResetApp);
//# sourceMappingURL=PasswordResetApp.js.map
