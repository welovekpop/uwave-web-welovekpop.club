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

var _UserRow = require('./UserRow');

var _UserRow2 = _interopRequireDefault(_UserRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserList = function UserList(_ref) {
  var className = _ref.className,
      users = _ref.users;
  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('UserList', className)
  }, void 0, (0, _jsx3.default)(_reactList2.default, {
    itemRenderer: function itemRenderer(index, key) {
      return (0, _jsx3.default)(_UserRow2.default, {
        className: 'UserList-row',
        user: users[index]
      }, key);
    },
    length: users.length,
    type: 'uniform'
  }));
};

UserList.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  users: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
} : {};

exports.default = UserList;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
