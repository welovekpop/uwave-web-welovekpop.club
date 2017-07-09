'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactList = require('react-list');

var _reactList2 = _interopRequireDefault(_reactList);

var _ModRow = require('./ModRow');

var _ModRow2 = _interopRequireDefault(_ModRow);

var _SimpleRow = require('./SimpleRow');

var _SimpleRow2 = _interopRequireDefault(_SimpleRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WaitList = function WaitList(_ref) {
  var className = _ref.className,
      users = _ref.users,
      _onMoveUser = _ref.onMoveUser,
      _onRemoveUser = _ref.onRemoveUser,
      canMoveUsers = _ref.canMoveUsers;

  var Row = canMoveUsers ? _ModRow2.default : _SimpleRow2.default;
  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('UserList', 'UserList--queue', 'WaitList', className)
  }, void 0, (0, _jsx3.default)(_reactList2.default, {
    itemRenderer: function itemRenderer(index, key) {
      return (0, _jsx3.default)(Row, {
        className: (0, _classnames2.default)('UserList-row', index % 2 === 0 && 'UserList-row--alternate'),
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
  className: _propTypes2.default.string,
  users: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  canMoveUsers: _propTypes2.default.bool.isRequired,
  onMoveUser: _propTypes2.default.func.isRequired,
  onRemoveUser: _propTypes2.default.func.isRequired
} : {};

exports.default = WaitList;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
