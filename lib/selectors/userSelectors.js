"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportsAuthStrategy = supportsAuthStrategy;
exports.isManagerSelector = exports.isModeratorSelector = exports.createRoleCheckSelector = exports.currentUserHasRoleSelector = exports.hasRoleSelector = exports.userHasRoleSelector = exports.listenerCountSelector = exports.guestCountSelector = exports.userCountSelector = exports.userListSelector = exports.supportsSocialAuthSelector = exports.authStrategiesSelector = exports.tokenSelector = exports.isLoggedInSelector = exports.currentUserSelector = exports.authErrorSelector = exports.usersSelector = void 0;

var _reselect = require("reselect");

var _naturalCompare = _interopRequireDefault(require("natural-compare"));

var _objectValues = _interopRequireDefault(require("object-values"));

var _configSelectors = require("./configSelectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authSelector = function authSelector(state) {
  return state.auth;
};

var usersBaseSelector = function usersBaseSelector(state) {
  return state.users;
};

var usersSelector = (0, _reselect.createSelector)(usersBaseSelector, function (base) {
  return base.users;
});
exports.usersSelector = usersSelector;
var authErrorSelector = (0, _reselect.createSelector)(authSelector, function (auth) {
  return auth.error;
});
exports.authErrorSelector = authErrorSelector;
var currentUserIDSelector = (0, _reselect.createSelector)(authSelector, function (auth) {
  return auth.user;
});
var currentUserSelector = (0, _reselect.createSelector)(usersSelector, currentUserIDSelector, function (users, userID) {
  return userID in users ? users[userID] : null;
});
exports.currentUserSelector = currentUserSelector;
var isLoggedInSelector = (0, _reselect.createSelector)(currentUserSelector, Boolean);
exports.isLoggedInSelector = isLoggedInSelector;
var tokenSelector = (0, _reselect.createSelector)(authSelector, function (auth) {
  return auth.token;
});
exports.tokenSelector = tokenSelector;
var authStrategiesSelector = (0, _reselect.createSelector)(authSelector, function (auth) {
  return auth.strategies;
});
exports.authStrategiesSelector = authStrategiesSelector;

function supportsAuthStrategy(name) {
  return (0, _reselect.createSelector)(authStrategiesSelector, function (strategies) {
    return strategies.indexOf(name) !== -1;
  });
}

var supportsSocialAuthSelector = (0, _reselect.createSelector)(supportsAuthStrategy('google'), function () {
  for (var _len = arguments.length, support = new Array(_len), _key = 0; _key < _len; _key++) {
    support[_key] = arguments[_key];
  }

  return support.some(Boolean);
}); // The Super User role allows a user to do everything. It's hardcoded as the "*"
// role.

exports.supportsSocialAuthSelector = supportsSocialAuthSelector;

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


    return (0, _naturalCompare.default)(a.username.toLowerCase(), b.username.toLowerCase());
  };
}

var userListSelector = (0, _reselect.createSelector)(_configSelectors.rolesSelector, superUserRoleSelector, usersSelector, function (roles, superuserRole, users) {
  return (0, _objectValues.default)(users).sort(compareUsers(roles, superuserRole));
});
exports.userListSelector = userListSelector;
var userCountSelector = (0, _reselect.createSelector)(userListSelector, function (users) {
  return users.length;
});
exports.userCountSelector = userCountSelector;
var guestCountSelector = (0, _reselect.createSelector)(usersBaseSelector, function (base) {
  return base.guests;
});
exports.guestCountSelector = guestCountSelector;
var listenerCountSelector = (0, _reselect.createSelector)(userCountSelector, guestCountSelector, function (users, guests) {
  return users + guests;
});
exports.listenerCountSelector = listenerCountSelector;
var userHasRoleSelector = (0, _reselect.createSelector)(_configSelectors.rolesSelector, superUserRoleSelector, function (roles, superUserRole) {
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

exports.userHasRoleSelector = userHasRoleSelector;
var hasRoleSelector = (0, _reselect.createSelector)(userHasRoleSelector, function (userHasRole) {
  return function (user, role) {
    return userHasRole(user)(role);
  };
});
exports.hasRoleSelector = hasRoleSelector;
var currentUserHasRoleSelector = (0, _reselect.createSelector)(userHasRoleSelector, currentUserSelector, function (userHasRole, user) {
  return userHasRole(user);
}); // Creates a selector that will check if the current user has a given role.
//
//   createRoleCheckSelector('some.role')(store.getState()) // → true/false
//

exports.currentUserHasRoleSelector = currentUserHasRoleSelector;

var createRoleCheckSelector = function createRoleCheckSelector(role) {
  return (0, _reselect.createSelector)(currentUserHasRoleSelector, function (hasRole) {
    return hasRole(role);
  });
}; // Selectors for compatibility with the old role system.
// TODO All uses of these selectors should be phased out in favour of more
// specific roles in the future.


exports.createRoleCheckSelector = createRoleCheckSelector;
var isModeratorSelector = createRoleCheckSelector('moderator');
exports.isModeratorSelector = isModeratorSelector;
var isManagerSelector = createRoleCheckSelector('manager');
exports.isManagerSelector = isManagerSelector;
//# sourceMappingURL=userSelectors.js.map
