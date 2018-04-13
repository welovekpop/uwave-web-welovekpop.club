import { createSelector } from 'reselect';
import naturalCmp from 'natural-compare';
import values from 'object-values';
import { rolesSelector } from './configSelectors';

var authSelector = function authSelector(state) {
  return state.auth;
};

var usersBaseSelector = function usersBaseSelector(state) {
  return state.users;
};

export var usersSelector = createSelector(usersBaseSelector, function (base) {
  return base.users;
});
export var authErrorSelector = createSelector(authSelector, function (auth) {
  return auth.error;
});
var currentUserIDSelector = createSelector(authSelector, function (auth) {
  return auth.user;
});
export var currentUserSelector = createSelector(usersSelector, currentUserIDSelector, function (users, userID) {
  return userID in users ? users[userID] : null;
});
export var isLoggedInSelector = createSelector(currentUserSelector, Boolean);
export var tokenSelector = createSelector(authSelector, function (auth) {
  return auth.token;
});
export var authStrategiesSelector = createSelector(authSelector, function (auth) {
  return auth.strategies;
});
export function supportsAuthStrategy(name) {
  return createSelector(authStrategiesSelector, function (strategies) {
    return strategies.indexOf(name) !== -1;
  });
}
export var supportsSocialAuthSelector = createSelector(supportsAuthStrategy('google'), function () {
  for (var _len = arguments.length, support = new Array(_len), _key = 0; _key < _len; _key++) {
    support[_key] = arguments[_key];
  }

  return support.some(Boolean);
}); // The Super User role allows a user to do everything. It's hardcoded as the "*"
// role.

var superUserRoleSelector = function superUserRoleSelector() {
  return '*';
}; // Flatten a user's roles.


function getAllUserRoles(roles, user) {
  function getSubRoles(subRoles, role) {
    // Recursive Reduce!
    return roles[role].reduce(getSubRoles, [role].concat(subRoles));
  }

  return user.roles ? user.roles.reduce(getSubRoles, []) : [];
}

function compareUsers(roles, superuser) {
  return function (a, b) {
    var aRoles = getAllUserRoles(roles, a);
    var bRoles = getAllUserRoles(roles, b); // Sort superusers to the top,

    if (aRoles.indexOf(superuser) !== -1) {
      return -1;
    }

    if (bRoles.indexOf(superuser) !== -1) {
      return 1;
    } // other users by the amount of permissions they have,


    if (aRoles.length > bRoles.length) {
      return -1;
    }

    if (aRoles.length < bRoles.length) {
      return 1;
    } // and sort by username if the roles are equal.


    return naturalCmp(a.username.toLowerCase(), b.username.toLowerCase());
  };
}

export var userListSelector = createSelector(rolesSelector, superUserRoleSelector, usersSelector, function (roles, superuserRole, users) {
  return values(users).sort(compareUsers(roles, superuserRole));
});
export var userCountSelector = createSelector(userListSelector, function (users) {
  return users.length;
});
export var guestCountSelector = createSelector(usersBaseSelector, function (base) {
  return base.guests;
});
export var listenerCountSelector = createSelector(userCountSelector, guestCountSelector, function (users, guests) {
  return users + guests;
});
export var userHasRoleSelector = createSelector(rolesSelector, superUserRoleSelector, function (roles, superUserRole) {
  return function (user) {
    // If there is no authenticated user, we always return false.
    if (!user) {
      return function () {
        return false;
      };
    }

    var userRoles = getAllUserRoles(roles, user); // If this is a super user, we always return true.

    if (userRoles.indexOf(superUserRole) !== -1) {
      return function () {
        return true;
      };
    }

    return function (role) {
      return userRoles.indexOf(role) !== -1;
    };
  };
}); // Selects a function that checks if a user has the given role.
//
//   const hasRole = hasRoleSelector(getState());
//   hasRole(user, 'waitlist.join');
//

export var hasRoleSelector = createSelector(userHasRoleSelector, function (userHasRole) {
  return function (user, role) {
    return userHasRole(user)(role);
  };
});
export var currentUserHasRoleSelector = createSelector(userHasRoleSelector, currentUserSelector, function (userHasRole, user) {
  return userHasRole(user);
}); // Creates a selector that will check if the current user has a given role.
//
//   createRoleCheckSelector('some.role')(store.getState()) // → true/false
//

export var createRoleCheckSelector = function createRoleCheckSelector(role) {
  return createSelector(currentUserHasRoleSelector, function (hasRole) {
    return hasRole(role);
  });
}; // Selectors for compatibility with the old role system.
// TODO All uses of these selectors should be phased out in favour of more
// specific roles in the future.

export var isModeratorSelector = createRoleCheckSelector('moderator');
export var isManagerSelector = createRoleCheckSelector('manager');
//# sourceMappingURL=userSelectors.js.map
