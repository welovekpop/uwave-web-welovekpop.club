'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.staff = exports.waitlist = exports.djs = exports.everyone = undefined;

var _reselect = require('reselect');

var _userSelectors = require('../selectors/userSelectors');

var _waitlistSelectors = require('../selectors/waitlistSelectors');

var ROLE_MANAGER = 3;
var ROLE_MODERATOR = 2;
var ROLE_USER = 0;

var everyone = exports.everyone = {
  role: ROLE_MANAGER,
  users: _userSelectors.userListSelector
};

// plug.dj-like.
var djs = exports.djs = {
  role: ROLE_MODERATOR,
  users: _waitlistSelectors.djAndWaitlistUsersSelector
};
var waitlist = exports.waitlist = djs;

var staff = exports.staff = {
  role: ROLE_USER,
  users: (0, _reselect.createSelector)(_userSelectors.userListSelector, function (users) {
    return users.filter(function (user) {
      return user.role > 1;
    });
  })
};
//# sourceMappingURL=groupMentions.js.map
//# sourceMappingURL=groupMentions.js.map
