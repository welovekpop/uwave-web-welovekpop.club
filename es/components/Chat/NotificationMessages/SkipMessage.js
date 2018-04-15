import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import Username from '../../Username';
import UserNotificationMessage from './UserNotificationMessage';

var toUsername = function toUsername(user) {
  return _jsx(Username, {
    user: user
  });
};

var getLangKey = function getLangKey(hasModerator, hasReason) {
  if (hasReason) {
    return hasModerator ? 'chat.modSkipReason' : 'chat.selfSkipReason';
  }

  return hasModerator ? 'chat.modSkip' : 'chat.selfSkip';
};

var enhance = translate();

var SkipMessage = function SkipMessage(_ref) {
  var t = _ref.t,
      user = _ref.user,
      moderator = _ref.moderator,
      reason = _ref.reason,
      timestamp = _ref.timestamp;
  return _jsx(UserNotificationMessage, {
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
  t: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  moderator: PropTypes.object,
  timestamp: PropTypes.number.isRequired,
  reason: PropTypes.string
} : {};
export default enhance(SkipMessage);
//# sourceMappingURL=SkipMessage.js.map
