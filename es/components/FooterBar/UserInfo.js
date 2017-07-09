import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import SettingsIcon from 'material-ui/svg-icons/action/settings';

import Avatar from '../Avatar';

var fullSizeStyle = {
  width: '100%',
  height: '100%'
};

var _ref2 = _jsx('div', {
  className: 'UserInfo-settings'
}, void 0, _jsx(SettingsIcon, {
  color: '#fff',
  style: fullSizeStyle
}));

var UserInfo = function UserInfo(_ref) {
  var className = _ref.className,
      user = _ref.user,
      onClick = _ref.onClick;
  return _jsx('button', {
    className: cx('UserInfo', className),
    onClick: onClick
  }, void 0, _jsx(Avatar, {
    className: 'UserInfo-avatar',
    user: user
  }), _ref2);
};

UserInfo.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  user: PropTypes.object.isRequired,
  onClick: PropTypes.func
} : {};

export default pure(UserInfo);
//# sourceMappingURL=UserInfo.js.map
