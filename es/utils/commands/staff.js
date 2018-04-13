import { register, findUser } from '../ChatCommands';
import { log } from '../../actions/ChatActionCreators';
import { rolesSelector } from '../../selectors/configSelectors';
import { userListSelector, isModeratorSelector, isManagerSelector } from '../../selectors/userSelectors';
import { addUserRole, removeUserRole } from '../../actions/ModerationActionCreators';
import { toggleAdmin } from '../../actions/OverlayActionCreators';
register('roles', 'List roles.', {
  action: function action() {
    return function (dispatch, getState) {
      var allRoles = Object.keys(rolesSelector(getState()));
      var roles = allRoles.filter(function (role) {
        return role.indexOf('.') === -1;
      });
      var permissions = allRoles.filter(function (role) {
        return role.indexOf('.') !== -1;
      });
      dispatch(log("Roles: " + roles.join(', ')));
      return dispatch(log("Permissions: " + permissions.join(', ')));
    };
  }
});
register('addrole', 'Assign a role to a user. Syntax: "/addrole username role"', {
  guard: isManagerSelector,
  action: function action(username, role) {
    return function (dispatch, getState) {
      if (!username) {
        return dispatch(log('Provide a user to promote or demote.'));
      }

      if (!role) {
        return dispatch(log("Provide a role to assign to " + username + ". Use /roles for a full list."));
      }

      var user = findUser(userListSelector(getState()), username);
      return dispatch(addUserRole(user, role));
    };
  }
});
register('removerole', 'Remove a role from a user. Syntax: "/removerole username role"', {
  guard: isManagerSelector,
  action: function action(username, role) {
    return function (dispatch, getState) {
      if (!username) {
        return dispatch(log('Provide a user to promote or demote.'));
      }

      if (!role) {
        return dispatch(log("Provide a role assign to " + username + ". Use /roles for a full list."));
      }

      var user = findUser(userListSelector(getState()), username);
      return dispatch(removeUserRole(user, role));
    };
  }
});
register('admin', 'Open the administration panel.', {
  guard: isModeratorSelector,
  action: toggleAdmin
});
//# sourceMappingURL=staff.js.map
