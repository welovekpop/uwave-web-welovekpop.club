"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _UserNotificationMessage = _interopRequireDefault(require("./UserNotificationMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserNameChanged = function UserNameChanged(_ref) {
  var user = _ref.user,
      timestamp = _ref.timestamp,
      newUsername = _ref.newUsername;
  return (0, _jsx2.default)(_UserNotificationMessage.default, {
    type: "userNameChanged",
    className: "ChatMessage--userNameChanged",
    i18nKey: "chat.userNameChanged",
    user: user,
    timestamp: timestamp,
    newUsername: newUsername
  });
};

UserNameChanged.propTypes = process.env.NODE_ENV !== "production" ? {
  user: _propTypes.default.object.isRequired,
  newUsername: _propTypes.default.string.isRequired,
  timestamp: _propTypes.default.number.isRequired
} : {};
var _default = UserNameChanged; //# sourceMappingURL=NameChangedMessage.js.map

exports.default = _default;
//# sourceMappingURL=NameChangedMessage.js.map
