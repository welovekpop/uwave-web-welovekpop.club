'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _UserNotificationMessage = require('./UserNotificationMessage');

var _UserNotificationMessage2 = _interopRequireDefault(_UserNotificationMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserNameChanged = function UserNameChanged(_ref) {
  var user = _ref.user,
      timestamp = _ref.timestamp,
      newUsername = _ref.newUsername;
  return (0, _jsx3.default)(_UserNotificationMessage2.default, {
    type: 'userNameChanged',
    className: 'ChatMessage--userNameChanged',
    i18nKey: 'chat.userNameChanged',
    user: user,
    timestamp: timestamp,
    newUsername: newUsername
  });
};

UserNameChanged.propTypes = process.env.NODE_ENV !== "production" ? {
  user: _propTypes2.default.object.isRequired,
  newUsername: _propTypes2.default.string.isRequired,
  timestamp: _propTypes2.default.number.isRequired
} : {};

exports.default = UserNameChanged;
//# sourceMappingURL=NameChangedMessage.js.map
//# sourceMappingURL=NameChangedMessage.js.map
