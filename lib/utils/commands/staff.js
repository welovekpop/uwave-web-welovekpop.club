"use strict";

var _ChatCommands = require("../ChatCommands");

var _ChatActionCreators = require("../../actions/ChatActionCreators");

var _configSelectors = require("../../selectors/configSelectors");

var _userSelectors = require("../../selectors/userSelectors");

var _ModerationActionCreators = require("../../actions/ModerationActionCreators");

var _OverlayActionCreators = require("../../actions/OverlayActionCreators");

(0, _ChatCommands.register)('roles', 'List roles.', {
  action: function action() {
    return function (dispatch, getState) {
      var allRoles = Object.keys((0, _configSelectors.rolesSelector)(getState()));
      var roles = allRoles.filter(function (role) {
        return role.indexOf('.') === -1;
      });
      var permissions = allRoles.filter(function (role) {
        return role.indexOf('.') !== -1;
      });
      dispatch((0, _ChatActionCreators.log)("Roles: " + roles.join(', ')));
      return dispatch((0, _ChatActionCreators.log)("Permissions: " + permissions.join(', ')));
    };
  }
});
(0, _ChatCommands.register)('addrole', 'Assign a role to a user. Syntax: "/addrole username role"', {
  guard: _userSelectors.isManagerSelector,
  action: function action(username, role) {
    return function (dispatch, getState) {
      if (!username) {
        return dispatch((0, _ChatActionCreators.log)('Provide a user to promote or demote.'));
      }

      if (!role) {
        return dispatch((0, _ChatActionCreators.log)("Provide a role to assign to " + username + ". Use /roles for a full list."));
      }

      var user = (0, _ChatCommands.findUser)((0, _userSelectors.userListSelector)(getState()), username);
      return dispatch((0, _ModerationActionCreators.addUserRole)(user, role));
    };
  }
});
(0, _ChatCommands.register)('removerole', 'Remove a role from a user. Syntax: "/removerole username role"', {
  guard: _userSelectors.isManagerSelector,
  action: function action(username, role) {
    return function (dispatch, getState) {
      if (!username) {
        return dispatch((0, _ChatActionCreators.log)('Provide a user to promote or demote.'));
      }

      if (!role) {
        return dispatch((0, _ChatActionCreators.log)("Provide a role assign to " + username + ". Use /roles for a full list."));
      }

      var user = (0, _ChatCommands.findUser)((0, _userSelectors.userListSelector)(getState()), username);
      return dispatch((0, _ModerationActionCreators.removeUserRole)(user, role));
    };
  }
});
(0, _ChatCommands.register)('admin', 'Open the administration panel.', {
  guard: _userSelectors.isModeratorSelector,
  action: _OverlayActionCreators.toggleAdmin
}); //# sourceMappingURL=staff.js.map
//# sourceMappingURL=staff.js.map
