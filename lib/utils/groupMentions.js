"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.staff = exports.waitlist = exports.djs = exports.everyone = void 0;

var _reselect = require("reselect");

var _userSelectors = require("../selectors/userSelectors");

var _waitlistSelectors = require("../selectors/waitlistSelectors");

var everyone = _userSelectors.userListSelector; // plug.dj-like.

exports.everyone = everyone;
var djs = _waitlistSelectors.djAndWaitlistUsersSelector;
exports.djs = djs;
var waitlist = djs;
exports.waitlist = waitlist;
var staff = (0, _reselect.createSelector)(_userSelectors.userListSelector, _userSelectors.hasRoleSelector, // TODO should this maybe not hardcode the 'moderator' role? How to do it
// otherwise?
function (users, hasRole) {
  return users.map(function (user) {
    return hasRole(user, 'moderator');
  });
}); //# sourceMappingURL=groupMentions.js.map

exports.staff = staff;
//# sourceMappingURL=groupMentions.js.map
