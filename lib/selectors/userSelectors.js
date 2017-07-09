'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listenerCountSelector = exports.guestCountSelector = exports.userCountSelector = exports.userListSelector = exports.isManagerSelector = exports.isModeratorSelector = exports.tokenSelector = exports.isLoggedInSelector = exports.currentUserSelector = exports.authErrorSelector = exports.usersSelector = undefined;

var _reselect = require('reselect');

var _naturalCompare = require('natural-compare');

var _naturalCompare2 = _interopRequireDefault(_naturalCompare);

var _objectValues = require('object-values');

var _objectValues2 = _interopRequireDefault(_objectValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var authSelector = function authSelector(state) {
  return state.auth;
};

var usersBaseSelector = function usersBaseSelector(state) {
  return state.users;
};
var usersSelector = exports.usersSelector = (0, _reselect.createSelector)(usersBaseSelector, function (base) {
  return base.users;
});

var authErrorSelector = exports.authErrorSelector = (0, _reselect.createSelector)(authSelector, function (auth) {
  return auth.error;
});
var currentUserSelector = exports.currentUserSelector = (0, _reselect.createSelector)(authSelector, function (auth) {
  return auth.user;
});
var isLoggedInSelector = exports.isLoggedInSelector = (0, _reselect.createSelector)(currentUserSelector, Boolean);
var tokenSelector = exports.tokenSelector = (0, _reselect.createSelector)(authSelector, function (auth) {
  return auth.jwt;
});

var currentRoleSelector = (0, _reselect.createSelector)(currentUserSelector, function (user) {
  return user ? user.role : 0;
});

var isModeratorSelector = exports.isModeratorSelector = (0, _reselect.createSelector)(currentRoleSelector, function (role) {
  return role >= 2;
});

var isManagerSelector = exports.isManagerSelector = (0, _reselect.createSelector)(currentRoleSelector, function (role) {
  return role >= 3;
});

function compareUsers(a, b) {
  if (a.role > b.role) {
    return -1;
  }
  if (a.role < b.role) {
    return 1;
  }
  return (0, _naturalCompare2.default)(a.username.toLowerCase(), b.username.toLowerCase());
}

var userListSelector = exports.userListSelector = (0, _reselect.createSelector)(usersSelector, function (users) {
  return (0, _objectValues2.default)(users).sort(compareUsers);
});

var userCountSelector = exports.userCountSelector = (0, _reselect.createSelector)(userListSelector, function (users) {
  return users.length;
});

var guestCountSelector = exports.guestCountSelector = (0, _reselect.createSelector)(usersBaseSelector, function (base) {
  return base.guests;
});

var listenerCountSelector = exports.listenerCountSelector = (0, _reselect.createSelector)(userCountSelector, guestCountSelector, function (users, guests) {
  return users + guests;
});
//# sourceMappingURL=userSelectors.js.map
//# sourceMappingURL=userSelectors.js.map
