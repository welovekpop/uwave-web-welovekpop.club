import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import muiThemeable from 'material-ui/styles/muiThemeable';

// TODO define role names server-side instead of role numbers
var tempRoleIDToRoleName = {
  0: 'default',
  1: 'special',
  2: 'moderator',
  3: 'manager',
  4: 'admin'
};

var Username = function Username(_ref) {
  var muiTheme = _ref.muiTheme,
      className = _ref.className,
      user = _ref.user;
  var rankColors = muiTheme.rankColors;

  var roleName = tempRoleIDToRoleName[Math.min(user.role, 4)];
  var styles = void 0;
  if (rankColors[roleName]) {
    styles = { color: rankColors[roleName] };
  }

  return _jsx('span', {
    className: cx('Username', 'Username--' + roleName, className),
    style: styles
  }, void 0, user.username);
};

Username.propTypes = process.env.NODE_ENV !== "production" ? {
  muiTheme: PropTypes.object.isRequired,
  className: PropTypes.string,
  user: PropTypes.object.isRequired
} : {};

export default compose(muiThemeable(), pure)(Username);
//# sourceMappingURL=index.js.map
