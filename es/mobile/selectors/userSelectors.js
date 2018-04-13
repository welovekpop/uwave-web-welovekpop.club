import { createSelector } from 'reselect';
import { userListSelector } from '../../selectors/userSelectors';
import { djAndWaitlistUsersSelector } from '../../selectors/waitlistSelectors';
export * from '../../selectors/userSelectors';
export var listenersSelector = createSelector(userListSelector, djAndWaitlistUsersSelector, function (users, waitlist) {
  return users.filter(function (user) {
    return !waitlist.some(function (waiting) {
      return waiting._id === user._id;
    });
  });
});
//# sourceMappingURL=userSelectors.js.map
