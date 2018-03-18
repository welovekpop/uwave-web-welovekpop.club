import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import find from 'array-find';
import compose from 'recompose/compose';
import pure from 'recompose/pure';
import muiThemeable from 'material-ui/styles/muiThemeable';

function getUserColor(rankColors, user) {
  var roleName = find(user.roles, function (name) {
    return rankColors[name];
  }) || 'default';
  return rankColors[roleName];
}

var Username = function Username(_ref) {
  var muiTheme = _ref.muiTheme,
      className = _ref.className,
      user = _ref.user;
  return _jsx('span', {
    className: cx('Username', className),
    style: { color: getUserColor(muiTheme.rankColors, user) }
  }, void 0, user.username);
};

Username.propTypes = process.env.NODE_ENV !== "production" ? {
  muiTheme: PropTypes.object.isRequired,
  className: PropTypes.string,
  user: PropTypes.object.isRequired
} : {};

export default compose(muiThemeable(), pure)(Username);
//# sourceMappingURL=index.js.map
