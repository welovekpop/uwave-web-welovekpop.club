import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import ChangeUsernameButton from './ChangeUsernameButton';

var Profile = function Profile(_ref) {
  var className = _ref.className,
      user = _ref.user,
      onChangeUsername = _ref.onChangeUsername;
  return _jsx('div', {
    className: cx('SettingsPanelProfile', className)
  }, void 0, _jsx(Avatar, {
    className: 'SettingsPanelProfile-avatar',
    user: user
  }), _jsx('h2', {
    className: 'SettingsPanelProfile-username'
  }, void 0, user.username, _jsx(ChangeUsernameButton, {
    onChangeUsername: onChangeUsername,
    initialUsername: user.username
  })));
};

Profile.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  user: PropTypes.object.isRequired,

  onChangeUsername: PropTypes.func.isRequired
} : {};

export default Profile;
//# sourceMappingURL=Profile.js.map
