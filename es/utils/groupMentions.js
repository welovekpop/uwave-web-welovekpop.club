import { createSelector } from 'reselect';
import { userListSelector } from '../selectors/userSelectors';
import { djAndWaitlistUsersSelector } from '../selectors/waitlistSelectors';

var ROLE_MANAGER = 3;
var ROLE_MODERATOR = 2;
var ROLE_USER = 0;

export var everyone = {
  role: ROLE_MANAGER,
  users: userListSelector
};

// plug.dj-like.
export var djs = {
  role: ROLE_MODERATOR,
  users: djAndWaitlistUsersSelector
};
export var waitlist = djs;

export var staff = {
  role: ROLE_USER,
  users: createSelector(userListSelector, function (users) {
    return users.filter(function (user) {
      return user.role > 1;
    });
  })
};
//# sourceMappingURL=groupMentions.js.map
