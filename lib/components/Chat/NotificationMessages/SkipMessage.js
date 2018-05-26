"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _reactI18next = require("react-i18next");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Username = _interopRequireDefault(require("../../Username"));

var _UserNotificationMessage = _interopRequireDefault(require("./UserNotificationMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toUsername = function toUsername(user) {
  return (0, _jsx2.default)(_Username.default, {
    user: user
  });
};

var getLangKey = function getLangKey(hasModerator, hasReason) {
  if (hasReason) {
    return hasModerator ? 'chat.modSkipReason' : 'chat.selfSkipReason';
  }

  return hasModerator ? 'chat.modSkip' : 'chat.selfSkip';
};

var enhance = (0, _reactI18next.translate)();

var SkipMessage = function SkipMessage(_ref) {
  var t = _ref.t,
      user = _ref.user,
      moderator = _ref.moderator,
      reason = _ref.reason,
      timestamp = _ref.timestamp;
  return (0, _jsx2.default)(_UserNotificationMessage.default, {
    type: "skip",
    className: "ChatMessage--skip",
    i18nKey: getLangKey(!!moderator, !!reason),
    user: moderator || user,
    djName: toUsername(user),
    reason: reason ? t("booth.skip.reasons." + reason) : undefined,
    timestamp: timestamp
  });
};

SkipMessage.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  user: _propTypes.default.object.isRequired,
  moderator: _propTypes.default.object,
  timestamp: _propTypes.default.number.isRequired,
  reason: _propTypes.default.string
} : {};

var _default = enhance(SkipMessage);

exports.default = _default;
//# sourceMappingURL=SkipMessage.js.map
