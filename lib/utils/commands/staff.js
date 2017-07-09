'use strict';

var _ChatCommands = require('../ChatCommands');

var _ChatActionCreators = require('../../actions/ChatActionCreators');

var _userSelectors = require('../../selectors/userSelectors');

var _ModerationActionCreators = require('../../actions/ModerationActionCreators');

var roleNames = {
  user: 0,
  default: 0,
  normal: 0,
  none: 0,
  special: 1,
  moderator: 2,
  mod: 2,
  manager: 3,
  admin: 4
};
(0, _ChatCommands.register)('userrole', 'Assign a different role to a user. Syntax: "/userrole username role"', {
  guard: _userSelectors.isManagerSelector,
  action: function action(username, role) {
    return function (dispatch, getState) {
      if (!username) {
        return dispatch((0, _ChatActionCreators.log)('Provide a user to promote or demote.'));
      }
      if (!(role in roleNames)) {
        return dispatch((0, _ChatActionCreators.log)('Provide a role to promote ' + username + ' to. [user, special, moderator, manager, admin]'));
      }
      var user = (0, _ChatCommands.findUser)((0, _userSelectors.userListSelector)(getState()), username);
      return dispatch((0, _ModerationActionCreators.setUserRole)(user, roleNames[role]));
    };
  }
});
//# sourceMappingURL=staff.js.map
//# sourceMappingURL=staff.js.map
