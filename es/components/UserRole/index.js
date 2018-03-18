import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { translate } from 'react-i18next';
import upperCaseFirst from 'upper-case-first';

var UserRole = function UserRole(_ref) {
  var t = _ref.t,
      muiTheme = _ref.muiTheme,
      roleName = _ref.roleName;
  return _jsx('div', {
    className: 'UserRole',
    style: { color: muiTheme.rankColors[roleName] }
  }, void 0, t('roles.' + roleName, { defaultValue: upperCaseFirst(roleName) }));
};

UserRole.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  muiTheme: PropTypes.object.isRequired,
  roleName: PropTypes.string.isRequired
} : {};

export default compose(muiThemeable(), translate())(UserRole);
//# sourceMappingURL=index.js.map
