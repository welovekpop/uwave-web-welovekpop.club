import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import List from 'react-list';
import UserRow from './UserRow';

var UserList = function UserList(_ref) {
  var className = _ref.className,
      users = _ref.users;
  return _jsx('div', {
    className: cx('UserList', className)
  }, void 0, _jsx(List, {
    itemRenderer: function itemRenderer(index, key) {
      return _jsx(UserRow, {
        className: 'UserList-row',
        user: users[index]
      }, key);
    },
    length: users.length,
    type: 'uniform'
  }));
};

UserList.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  users: PropTypes.arrayOf(PropTypes.object).isRequired
} : {};

export default UserList;
//# sourceMappingURL=index.js.map
