import _jsx from 'babel-runtime/helpers/jsx';
import muiThemeable from 'material-ui/styles/muiThemeable';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import ChangeUsernameButton from './ChangeUsernameButton';

var enhance = muiThemeable();

var tempRoleIDToReadableName = ['User', 'Special', 'Moderator', 'Manager', 'Admin'];

var formatJoinDate = function formatJoinDate(date) {
  return new Date(date).toLocaleString([], {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });
};

var tempRoleIDToRoleName = {
  0: 'default',
  1: 'special',
  2: 'moderator',
  3: 'manager',
  4: 'admin'
};

var Profile = function Profile(_ref) {
  var className = _ref.className,
      user = _ref.user,
      onChangeUsername = _ref.onChangeUsername,
      muiTheme = _ref.muiTheme;
  return _jsx('div', {
    className: cx('SettingsPanelProfile', className)
  }, void 0, _jsx(Avatar, {
    className: 'SettingsPanelProfile-avatar',
    user: user
  }), _jsx('div', {
    className: 'SettingsPanelProfile-textblock'
  }, void 0, _jsx('h2', {
    className: 'SettingsPanelProfile-username'
  }, void 0, user.username, _jsx(ChangeUsernameButton, {
    onChangeUsername: onChangeUsername,
    initialUsername: user.username
  })), _jsx('p', {
    style: { color: muiTheme.rankColors[tempRoleIDToRoleName[user.role]] },
    className: 'SettingsPanelProfile-role'
  }, void 0, tempRoleIDToReadableName[user.role]), _jsx('p', {
    className: 'SettingsPanelProfile-date'
  }, void 0, formatJoinDate(user.createdAt))));
};

Profile.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  user: PropTypes.object.isRequired,

  onChangeUsername: PropTypes.func.isRequired,
  muiTheme: PropTypes.object.isRequired
} : {};

export default enhance(Profile);
//# sourceMappingURL=Profile.js.map
