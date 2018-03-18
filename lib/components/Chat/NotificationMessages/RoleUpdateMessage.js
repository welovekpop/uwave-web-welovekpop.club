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

var _upperCaseFirst = require('upper-case-first');

var _upperCaseFirst2 = _interopRequireDefault(_upperCaseFirst);

var _UserNotificationMessage = require('./UserNotificationMessage');

var _UserNotificationMessage2 = _interopRequireDefault(_UserNotificationMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getLangKey = function getLangKey(updateType) {
  if (updateType === 'add') {
    return 'chat.rolesAdded';
  }
  return 'chat.rolesRemoved';
};

var RoleUpdateMessage = function RoleUpdateMessage(_ref) {
  var user = _ref.user,
      updateType = _ref.updateType,
      roles = _ref.roles,
      timestamp = _ref.timestamp;
  return (0, _jsx3.default)(_UserNotificationMessage2.default, {
    type: 'roleUpdate',
    className: 'ChatMessage--roleUpdate',
    i18nKey: getLangKey(updateType),
    user: user,
    roles: roles.map(_upperCaseFirst2.default).join(', '),
    timestamp: timestamp
  });
};

RoleUpdateMessage.propTypes = process.env.NODE_ENV !== "production" ? {
  user: _propTypes2.default.object.isRequired,
  updateType: _propTypes2.default.oneOf(['add', 'remove']).isRequired,
  roles: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  timestamp: _propTypes2.default.number.isRequired
} : {};

exports.default = RoleUpdateMessage;
//# sourceMappingURL=RoleUpdateMessage.js.map
//# sourceMappingURL=RoleUpdateMessage.js.map
