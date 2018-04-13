"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.etaSelector = exports.baseEtaSelector = exports.waitlistSelector = exports.userInWaitlistSelector = exports.positionSelector = exports.djAndWaitlistUsersSelector = exports.waitlistUsersSelector = exports.sizeSelector = exports.isLockedSelector = void 0;

var _reselect = require("reselect");

var _boothSelectors = require("./boothSelectors");

var _userSelectors = require("./userSelectors");

var baseSelector = function baseSelector(state) {
  return state.waitlist;
};

var isLockedSelector = (0, _reselect.createSelector)(baseSelector, function (wl) {
  return !!wl.locked;
});
exports.isLockedSelector = isLockedSelector;
var waitlistIDsSelector = (0, _reselect.createSelector)(baseSelector, function (wl) {
  return wl.waitlist;
});
var sizeSelector = (0, _reselect.createSelector)(waitlistIDsSelector, function (list) {
  return list.length;
});
exports.sizeSelector = sizeSelector;
var waitlistUsersSelector = (0, _reselect.createSelector)(waitlistIDsSelector, _userSelectors.usersSelector, function (ids, users) {
  return ids.map(function (id) {
    return users[id];
  });
});
exports.waitlistUsersSelector = waitlistUsersSelector;
var djAndWaitlistUsersSelector = (0, _reselect.createSelector)(_boothSelectors.djSelector, waitlistUsersSelector, function (dj, waitlist) {
  return dj ? [dj].concat(waitlist) : waitlist;
});
exports.djAndWaitlistUsersSelector = djAndWaitlistUsersSelector;
var positionSelector = (0, _reselect.createSelector)(waitlistIDsSelector, _userSelectors.currentUserSelector, function (ids, user) {
  if (!user) return -1;
  return ids.indexOf(user._id);
});
exports.positionSelector = positionSelector;
var userInWaitlistSelector = (0, _reselect.createSelector)(positionSelector, _boothSelectors.isCurrentDJSelector, function (position, isDJ) {
  return position !== -1 || isDJ;
});
exports.userInWaitlistSelector = userInWaitlistSelector;
var waitlistSelector = (0, _reselect.createStructuredSelector)({
  locked: isLockedSelector,
  users: waitlistUsersSelector
}); // Most videos come in at around 4 minutes.

exports.waitlistSelector = waitlistSelector;
var averagePlayDuration = 4 * 60 * 1000;
var baseEtaSelector = (0, _reselect.createSelector)(positionSelector, sizeSelector, function (position, size) {
  return (position === -1 ? size : position) * averagePlayDuration;
});
exports.baseEtaSelector = baseEtaSelector;
var etaSelector = (0, _reselect.createSelector)(baseEtaSelector, _boothSelectors.timeRemainingSelector, function (eta, remaining) {
  return eta + remaining;
}); //# sourceMappingURL=waitlistSelectors.js.map

exports.etaSelector = etaSelector;
//# sourceMappingURL=waitlistSelectors.js.map
