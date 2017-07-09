import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import List from 'react-list';
import ModRow from './ModRow';
import SimpleRow from './SimpleRow';

var WaitList = function WaitList(_ref) {
  var className = _ref.className,
      users = _ref.users,
      _onMoveUser = _ref.onMoveUser,
      _onRemoveUser = _ref.onRemoveUser,
      canMoveUsers = _ref.canMoveUsers;

  var Row = canMoveUsers ? ModRow : SimpleRow;
  return _jsx('div', {
    className: cx('UserList', 'UserList--queue', 'WaitList', className)
  }, void 0, _jsx(List, {
    itemRenderer: function itemRenderer(index, key) {
      return _jsx(Row, {
        className: cx('UserList-row', index % 2 === 0 && 'UserList-row--alternate'),
        position: index,
        user: users[index],
        onMoveUser: function onMoveUser(position) {
          return _onMoveUser(users[index], position);
        },
        onRemoveUser: function onRemoveUser() {
          return _onRemoveUser(users[index]);
        }
      }, key);
    },
    length: users.length,
    type: 'uniform'
  }));
};

WaitList.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  canMoveUsers: PropTypes.bool.isRequired,
  onMoveUser: PropTypes.func.isRequired,
  onRemoveUser: PropTypes.func.isRequired
} : {};

export default WaitList;
//# sourceMappingURL=index.js.map
