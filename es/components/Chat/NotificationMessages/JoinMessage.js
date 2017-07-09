import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import UserNotificationMessage from './UserNotificationMessage';

var JoinMessage = function JoinMessage(_ref) {
  var user = _ref.user,
      timestamp = _ref.timestamp;
  return _jsx(UserNotificationMessage, {
    type: 'userJoin',
    className: 'ChatMessage--userJoin',
    i18nKey: 'chat.userJoin',
    user: user,
    timestamp: timestamp
  });
};

JoinMessage.propTypes = process.env.NODE_ENV !== "production" ? {
  user: PropTypes.object.isRequired,
  timestamp: PropTypes.number.isRequired
} : {};

export default JoinMessage;
//# sourceMappingURL=JoinMessage.js.map
