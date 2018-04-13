import { createSelector } from 'reselect';
import { userListSelector, hasRoleSelector } from '../selectors/userSelectors';
import { djAndWaitlistUsersSelector } from '../selectors/waitlistSelectors';
export var everyone = userListSelector; // plug.dj-like.

export var djs = djAndWaitlistUsersSelector;
export var waitlist = djs;
export var staff = createSelector(userListSelector, hasRoleSelector, // TODO should this maybe not hardcode the 'moderator' role? How to do it
// otherwise?
function (users, hasRole) {
  return users.map(function (user) {
    return hasRole(user, 'moderator');
  });
});
//# sourceMappingURL=groupMentions.js.map
