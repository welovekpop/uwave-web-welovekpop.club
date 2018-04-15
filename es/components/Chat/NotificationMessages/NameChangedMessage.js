import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import UserNotificationMessage from './UserNotificationMessage';

var UserNameChanged = function UserNameChanged(_ref) {
  var user = _ref.user,
      timestamp = _ref.timestamp,
      newUsername = _ref.newUsername;
  return _jsx(UserNotificationMessage, {
    type: "userNameChanged",
    className: "ChatMessage--userNameChanged",
    i18nKey: "chat.userNameChanged",
    user: user,
    timestamp: timestamp,
    newUsername: newUsername
  });
};

UserNameChanged.propTypes = process.env.NODE_ENV !== "production" ? {
  user: PropTypes.object.isRequired,
  newUsername: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired
} : {};
export default UserNameChanged;
//# sourceMappingURL=NameChangedMessage.js.map
