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

var JoinMessage = function JoinMessage(_ref) {
  var user = _ref.user,
      timestamp = _ref.timestamp;
  return (0, _jsx2.default)(_UserNotificationMessage.default, {
    type: "userJoin",
    className: "ChatMessage--userJoin",
    i18nKey: "chat.userJoin",
    user: user,
    timestamp: timestamp
  });
};

JoinMessage.propTypes = process.env.NODE_ENV !== "production" ? {
  user: _propTypes.default.object.isRequired,
  timestamp: _propTypes.default.number.isRequired
} : {};
var _default = JoinMessage; //# sourceMappingURL=JoinMessage.js.map

exports.default = _default;
//# sourceMappingURL=JoinMessage.js.map
