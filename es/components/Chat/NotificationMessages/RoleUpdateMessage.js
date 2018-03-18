import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import upperCaseFirst from 'upper-case-first';
import UserNotificationMessage from './UserNotificationMessage';

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
  return _jsx(UserNotificationMessage, {
    type: 'roleUpdate',
    className: 'ChatMessage--roleUpdate',
    i18nKey: getLangKey(updateType),
    user: user,
    roles: roles.map(upperCaseFirst).join(', '),
    timestamp: timestamp
  });
};

RoleUpdateMessage.propTypes = process.env.NODE_ENV !== "production" ? {
  user: PropTypes.object.isRequired,
  updateType: PropTypes.oneOf(['add', 'remove']).isRequired,
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  timestamp: PropTypes.number.isRequired
} : {};

export default RoleUpdateMessage;
//# sourceMappingURL=RoleUpdateMessage.js.map
