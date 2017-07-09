import { createSelector } from 'reselect';
import naturalCmp from 'natural-compare';
import values from 'object-values';

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
export var currentUserSelector = createSelector(authSelector, function (auth) {
  return auth.user;
});
export var isLoggedInSelector = createSelector(currentUserSelector, Boolean);
export var tokenSelector = createSelector(authSelector, function (auth) {
  return auth.jwt;
});

var currentRoleSelector = createSelector(currentUserSelector, function (user) {
  return user ? user.role : 0;
});

export var isModeratorSelector = createSelector(currentRoleSelector, function (role) {
  return role >= 2;
});

export var isManagerSelector = createSelector(currentRoleSelector, function (role) {
  return role >= 3;
});

function compareUsers(a, b) {
  if (a.role > b.role) {
    return -1;
  }
  if (a.role < b.role) {
    return 1;
  }
  return naturalCmp(a.username.toLowerCase(), b.username.toLowerCase());
}

export var userListSelector = createSelector(usersSelector, function (users) {
  return values(users).sort(compareUsers);
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
//# sourceMappingURL=userSelectors.js.map
