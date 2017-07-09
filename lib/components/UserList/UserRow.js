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

var _Avatar = require('../Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Username = require('../Username');

var _Username2 = _interopRequireDefault(_Username);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserRow = function UserRow(_ref) {
  var className = _ref.className,
      user = _ref.user;
  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('UserRow', className)
  }, void 0, (0, _jsx3.default)(_Avatar2.default, {
    className: 'UserRow-avatar',
    user: user
  }), (0, _jsx3.default)(_Username2.default, {
    className: 'UserRow-username',
    user: user
  }));
};

UserRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  user: _propTypes2.default.object.isRequired
} : {};

exports.default = UserRow;
//# sourceMappingURL=UserRow.js.map
//# sourceMappingURL=UserRow.js.map
