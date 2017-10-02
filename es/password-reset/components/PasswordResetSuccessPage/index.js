import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Paper from 'material-ui/Paper';

var enhance = translate();

var PasswordResetSuccessPage = function PasswordResetSuccessPage(_ref) {
  var t = _ref.t;
  return _jsx(Paper, {
    className: 'PasswordReset'
  }, void 0, _jsx('p', {}, void 0, t('resetPassword.success')));
};

PasswordResetSuccessPage.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired
} : {};

export default enhance(PasswordResetSuccessPage);
//# sourceMappingURL=index.js.map
