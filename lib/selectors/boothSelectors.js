'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playbackVolumeSelector = exports.canSkipSelector = exports.isCurrentDJSelector = exports.djSelector = exports.mediaProgressSelector = exports.timeRemainingSelector = exports.timeElapsedSelector = exports.endTimeSelector = exports.mediaDurationSelector = exports.startTimeSelector = exports.mediaSelector = exports.historyIDSelector = undefined;

var _reselect = require('reselect');

var _dialogSelectors = require('./dialogSelectors');

var _settingSelectors = require('./settingSelectors');

var _timeSelectors = require('./timeSelectors');

var _userSelectors = require('./userSelectors');

var baseSelector = function baseSelector(state) {
  return state.booth;
};

var historyIDSelector = exports.historyIDSelector = (0, _reselect.createSelector)(baseSelector, function (booth) {
  return booth.historyID;
});
var mediaSelector = exports.mediaSelector = (0, _reselect.createSelector)(baseSelector, function (booth) {
  return booth.media;
});
var startTimeSelector = exports.startTimeSelector = (0, _reselect.createSelector)(baseSelector, function (booth) {
  return booth.startTime || 0;
});

var mediaDurationSelector = exports.mediaDurationSelector = (0, _reselect.createSelector)(mediaSelector, function (media) {
  return media ? media.end - media.start : 0;
});

var endTimeSelector = exports.endTimeSelector = (0, _reselect.createSelector)(startTimeSelector, mediaDurationSelector, function (startTime, duration) {
  return startTime + duration * 1000 || 0;
});

var timeElapsedSelector = exports.timeElapsedSelector = (0, _reselect.createSelector)(startTimeSelector, _timeSelectors.currentTimeSelector,
// in seconds! because media duration is in seconds, too.
function (startTime, currentTime) {
  return startTime ? Math.max((currentTime - startTime) / 1000, 0) : 0;
});

var timeRemainingSelector = exports.timeRemainingSelector = (0, _reselect.createSelector)(mediaDurationSelector, timeElapsedSelector, function (duration, elapsed) {
  return duration > 0 ? duration - elapsed : 0;
});

var mediaProgressSelector = exports.mediaProgressSelector = (0, _reselect.createSelector)(mediaDurationSelector, timeElapsedSelector, function (duration, elapsed) {
  return duration
  // Ensure that the result is between 0 and 1
  ? Math.max(0, Math.min(1, elapsed / duration)) : 0;
});

var djSelector = exports.djSelector = (0, _reselect.createSelector)(baseSelector, _userSelectors.usersSelector, function (booth, users) {
  return users[booth.djID];
});

var isCurrentDJSelector = exports.isCurrentDJSelector = (0, _reselect.createSelector)(djSelector, _userSelectors.currentUserSelector, function (dj, me) {
  return dj && me ? dj._id === me._id : false;
});

var canSkipSelector = exports.canSkipSelector = (0, _reselect.createSelector)(historyIDSelector, isCurrentDJSelector, _userSelectors.currentUserHasRoleSelector, function (historyID, isCurrentDJ, hasRole) {
  if (!historyID) {
    return false;
  }
  return isCurrentDJ ? hasRole('booth.skip.self') : hasRole('booth.skip.other');
});

var playbackVolumeSelector = exports.playbackVolumeSelector = (0, _reselect.createSelector)(_settingSelectors.volumeSelector, _settingSelectors.isMutedSelector, _dialogSelectors.isPreviewMediaDialogOpenSelector, function (volume, isMuted, isPreviewMediaDialogOpen) {
  return isMuted || isPreviewMediaDialogOpen ? 0 : volume;
});
//# sourceMappingURL=boothSelectors.js.map
//# sourceMappingURL=boothSelectors.js.map
