"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _upperCaseFirst = _interopRequireDefault(require("upper-case-first"));

var _UserNotificationMessage = _interopRequireDefault(require("./UserNotificationMessage"));

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
  return (0, _jsx2.default)(_UserNotificationMessage.default, {
    type: "roleUpdate",
    className: "ChatMessage--roleUpdate",
    i18nKey: getLangKey(updateType),
    user: user,
    roles: roles.map(_upperCaseFirst.default).join(', '),
    timestamp: timestamp
  });
};

RoleUpdateMessage.propTypes = process.env.NODE_ENV !== "production" ? {
  user: _propTypes.default.object.isRequired,
  updateType: _propTypes.default.oneOf(['add', 'remove']).isRequired,
  roles: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  timestamp: _propTypes.default.number.isRequired
} : {};
var _default = RoleUpdateMessage; //# sourceMappingURL=RoleUpdateMessage.js.map

exports.default = _default;
//# sourceMappingURL=RoleUpdateMessage.js.map
