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

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _GuestsRow = require('./GuestsRow');

var _GuestsRow2 = _interopRequireDefault(_GuestsRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RoomUserList = function RoomUserList(_ref) {
  var className = _ref.className,
      users = _ref.users,
      guests = _ref.guests;

  var showGuests = guests > 0;
  // The "and X guests" row is implemented somewhat hackily as an extra user
  // row. To render properly at the end of the list, it needs to be rendered as
  // an element of the list--so we tell react-list that we have an extra row
  // when th guests row is shown.
  var length = users.length + (showGuests ? 1 : 0);
  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('UserList', 'UserList--online', className)
  }, void 0, (0, _jsx3.default)(_reactList2.default, {
    itemRenderer: function itemRenderer(index, key) {
      var rowClass = (0, _classnames2.default)('UserList-row', index % 2 === 0 && 'UserList-row--alternate');
      // The very last row is the guests row
      if (index === users.length) {
        return (0, _jsx3.default)(_GuestsRow2.default, {
          className: rowClass,
          guests: guests
        }, key);
      }
      return (0, _jsx3.default)(_Row2.default, {
        className: rowClass,
        user: users[index]
      }, key);
    },
    length: length,
    type: 'uniform'
  }));
};

RoomUserList.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  users: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  guests: _propTypes2.default.number.isRequired
} : {};

exports.default = RoomUserList;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
