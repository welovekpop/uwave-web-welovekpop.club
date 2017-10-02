import _jsx from 'babel-runtime/helpers/jsx';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { I18nextProvider } from 'react-i18next';
import { resetPassword } from '../actions';
import ErrorArea from '../../containers/ErrorArea';
import PasswordResetPage from '../components/PasswordResetPage';
import PasswordResetSuccessPage from '../components/PasswordResetSuccessPage';
import { muiThemeSelector } from '../../selectors/settingSelectors';

var mapStateToProps = createStructuredSelector({
  muiTheme: muiThemeSelector,
  success: function success(state) {
    return state.passwordReset.success;
  }
});

var mapDispatchToProps = {
  onSubmit: resetPassword
};

var enhance = connect(mapStateToProps, mapDispatchToProps);

var _ref2 = _jsx(PasswordResetSuccessPage, {});

var _ref3 = _jsx(ErrorArea, {});

var PasswordResetApp = function PasswordResetApp(_ref) {
  var muiTheme = _ref.muiTheme,
      locale = _ref.locale,
      success = _ref.success,
      props = _objectWithoutProperties(_ref, ['muiTheme', 'locale', 'success']);

  return _jsx(MuiThemeProvider, {
    muiTheme: muiTheme
  }, void 0, _jsx(I18nextProvider, {
    i18n: locale
  }, void 0, _jsx('div', {}, void 0, success ? _ref2 : React.createElement(PasswordResetPage, props), _ref3)));
};

PasswordResetApp.propTypes = process.env.NODE_ENV !== "production" ? {
  muiTheme: PropTypes.object.isRequired,
  locale: PropTypes.object.isRequired,
  success: PropTypes.bool
} : {};

export default enhance(PasswordResetApp);
//# sourceMappingURL=PasswordResetApp.js.map
