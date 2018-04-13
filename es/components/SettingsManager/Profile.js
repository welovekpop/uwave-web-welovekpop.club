import _jsx from "@babel/runtime/helpers/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import UserRoles from '../UserCard/UserRoles';
import ChangeUsernameButton from './ChangeUsernameButton';

var formatJoinDate = function formatJoinDate(date) {
  return new Date(date).toLocaleString([], {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });
};

var Profile = function Profile(_ref) {
  var className = _ref.className,
      user = _ref.user,
      onChangeUsername = _ref.onChangeUsername;
  return _jsx("div", {
    className: cx('SettingsPanelProfile', className)
  }, void 0, _jsx(Avatar, {
    className: "SettingsPanelProfile-avatar",
    user: user
  }), _jsx("div", {
    className: "SettingsPanelProfile-textblock"
  }, void 0, _jsx("h2", {
    className: "SettingsPanelProfile-username"
  }, void 0, user.username, _jsx(ChangeUsernameButton, {
    onChangeUsername: onChangeUsername,
    initialUsername: user.username
  })), _jsx(UserRoles, {
    roles: user.roles
  }), _jsx("p", {
    className: "SettingsPanelProfile-date"
  }, void 0, formatJoinDate(user.createdAt))));
};

Profile.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  user: PropTypes.object.isRequired,
  onChangeUsername: PropTypes.func.isRequired
} : {};
export default Profile;
//# sourceMappingURL=Profile.js.map
