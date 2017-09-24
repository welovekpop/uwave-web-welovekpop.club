import { createSelector, createStructuredSelector } from 'reselect';
import { timeRemainingSelector, djSelector, isCurrentDJSelector } from './boothSelectors';
import { currentUserSelector, usersSelector } from './userSelectors';

var baseSelector = function baseSelector(state) {
  return state.waitlist;
};

export var isLockedSelector = createSelector(baseSelector, function (wl) {
  return !!wl.locked;
});
var waitlistIDsSelector = createSelector(baseSelector, function (wl) {
  return wl.waitlist;
});

export var sizeSelector = createSelector(waitlistIDsSelector, function (list) {
  return list.length;
});

export var waitlistUsersSelector = createSelector(waitlistIDsSelector, usersSelector, function (ids, users) {
  return ids.map(function (id) {
    return users[id];
  });
});

export var djAndWaitlistUsersSelector = createSelector(djSelector, waitlistUsersSelector, function (dj, waitlist) {
  return dj ? [dj].concat(waitlist) : waitlist;
});

export var positionSelector = createSelector(waitlistIDsSelector, currentUserSelector, function (ids, user) {
  if (!user) return -1;
  return ids.indexOf(user._id);
});

export var userInWaitlistSelector = createSelector(positionSelector, isCurrentDJSelector, function (position, isDJ) {
  return position !== -1 || isDJ;
});

export var waitlistSelector = createStructuredSelector({
  locked: isLockedSelector,
  users: waitlistUsersSelector
});

// Most videos come in at around 4 minutes.
var averagePlayDuration = 4 * 60 * 1000;
export var baseEtaSelector = createSelector(positionSelector, sizeSelector, function (position, size) {
  return (position === -1 ? size : position) * averagePlayDuration;
});

export var etaSelector = createSelector(baseEtaSelector, timeRemainingSelector, function (eta, remaining) {
  return eta + remaining;
});
//# sourceMappingURL=waitlistSelectors.js.map
