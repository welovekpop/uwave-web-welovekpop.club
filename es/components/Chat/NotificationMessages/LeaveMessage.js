import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import UserNotificationMessage from './UserNotificationMessage';

var LeaveMessage = function LeaveMessage(_ref) {
  var user = _ref.user,
      timestamp = _ref.timestamp;
  return _jsx(UserNotificationMessage, {
    type: "userLeave",
    className: "ChatMessage--userLeave",
    i18nKey: "chat.userLeave",
    user: user,
    timestamp: timestamp
  });
};

LeaveMessage.propTypes = process.env.NODE_ENV !== "production" ? {
  user: PropTypes.object.isRequired,
  timestamp: PropTypes.number.isRequired
} : {};
export default LeaveMessage;
//# sourceMappingURL=LeaveMessage.js.map
