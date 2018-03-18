'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.staff = exports.waitlist = exports.djs = exports.everyone = undefined;

var _reselect = require('reselect');

var _userSelectors = require('../selectors/userSelectors');

var _waitlistSelectors = require('../selectors/waitlistSelectors');

var everyone = exports.everyone = _userSelectors.userListSelector;

// plug.dj-like.
var djs = exports.djs = _waitlistSelectors.djAndWaitlistUsersSelector;
var waitlist = exports.waitlist = djs;

var staff = exports.staff = (0, _reselect.createSelector)(_userSelectors.userListSelector, _userSelectors.hasRoleSelector,
// TODO should this maybe not hardcode the 'moderator' role? How to do it
// otherwise?
function (users, hasRole) {
  return users.map(function (user) {
    return hasRole(user, 'moderator');
  });
});
//# sourceMappingURL=groupMentions.js.map
//# sourceMappingURL=groupMentions.js.map
