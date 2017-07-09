import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import Username from '../Username';

var UserRow = function UserRow(_ref) {
  var className = _ref.className,
      user = _ref.user;
  return _jsx('div', {
    className: cx('UserRow', className)
  }, void 0, _jsx(Avatar, {
    className: 'UserRow-avatar',
    user: user
  }), _jsx(Username, {
    className: 'UserRow-username',
    user: user
  }));
};

UserRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  user: PropTypes.object.isRequired
} : {};

export default UserRow;
//# sourceMappingURL=UserRow.js.map
