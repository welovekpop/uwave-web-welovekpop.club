'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _LogMessage = require('./LogMessage');

var _LogMessage2 = _interopRequireDefault(_LogMessage);

var _JoinMessage = require('./NotificationMessages/JoinMessage');

var _JoinMessage2 = _interopRequireDefault(_JoinMessage);

var _LeaveMessage = require('./NotificationMessages/LeaveMessage');

var _LeaveMessage2 = _interopRequireDefault(_LeaveMessage);

var _NameChangedMessage = require('./NotificationMessages/NameChangedMessage');

var _NameChangedMessage2 = _interopRequireDefault(_NameChangedMessage);

var _SkipMessage = require('./NotificationMessages/SkipMessage');

var _SkipMessage2 = _interopRequireDefault(_SkipMessage);

var _RoleUpdateMessage = require('./NotificationMessages/RoleUpdateMessage');

var _RoleUpdateMessage2 = _interopRequireDefault(_RoleUpdateMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  log: _LogMessage2.default,
  userJoin: _JoinMessage2.default,
  userLeave: _LeaveMessage2.default,
  userNameChanged: _NameChangedMessage2.default,
  skip: _SkipMessage2.default,
  roleUpdate: _RoleUpdateMessage2.default
};
//# sourceMappingURL=specialMessages.js.map
//# sourceMappingURL=specialMessages.js.map
