"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _LogMessage = _interopRequireDefault(require("./LogMessage"));

var _JoinMessage = _interopRequireDefault(require("./NotificationMessages/JoinMessage"));

var _LeaveMessage = _interopRequireDefault(require("./NotificationMessages/LeaveMessage"));

var _NameChangedMessage = _interopRequireDefault(require("./NotificationMessages/NameChangedMessage"));

var _SkipMessage = _interopRequireDefault(require("./NotificationMessages/SkipMessage"));

var _RoleUpdateMessage = _interopRequireDefault(require("./NotificationMessages/RoleUpdateMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  log: _LogMessage.default,
  userJoin: _JoinMessage.default,
  userLeave: _LeaveMessage.default,
  userNameChanged: _NameChangedMessage.default,
  skip: _SkipMessage.default,
  roleUpdate: _RoleUpdateMessage.default
}; //# sourceMappingURL=specialMessages.js.map

exports.default = _default;
//# sourceMappingURL=specialMessages.js.map
