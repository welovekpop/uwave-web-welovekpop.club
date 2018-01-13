'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactI18next = require('react-i18next');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Username = require('../../Username');

var _Username2 = _interopRequireDefault(_Username);

var _UserNotificationMessage = require('./UserNotificationMessage');

var _UserNotificationMessage2 = _interopRequireDefault(_UserNotificationMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toUsername = function toUsername(user) {
  return (0, _jsx3.default)(_Username2.default, {
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
  return (0, _jsx3.default)(_UserNotificationMessage2.default, {
    type: 'skip',
    className: 'ChatMessage--skip',
    i18nKey: getLangKey(!!moderator, !!reason),
    user: moderator || user,
    djName: toUsername(user),
    reason: reason ? t('booth.skip.reasons.' + reason) : undefined,
    timestamp: timestamp
  });
};

SkipMessage.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  user: _propTypes2.default.object.isRequired,
  moderator: _propTypes2.default.object,
  timestamp: _propTypes2.default.number.isRequired,
  reason: _propTypes2.default.string
} : {};

exports.default = enhance(SkipMessage);
//# sourceMappingURL=SkipMessage.js.map
//# sourceMappingURL=SkipMessage.js.map
