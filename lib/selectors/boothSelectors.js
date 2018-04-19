"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mobilePlaybackVolumeSelector = exports.playbackVolumeSelector = exports.canSkipSelector = exports.isCurrentDJSelector = exports.djSelector = exports.mediaProgressSelector = exports.timeRemainingSelector = exports.timeElapsedSelector = exports.endTimeSelector = exports.mediaDurationSelector = exports.startTimeSelector = exports.mediaSelector = exports.historyIDSelector = void 0;

var _reselect = require("reselect");

var _dialogSelectors = require("./dialogSelectors");

var _settingSelectors = require("./settingSelectors");

var _timeSelectors = require("./timeSelectors");

var _userSelectors = require("./userSelectors");

var baseSelector = function baseSelector(state) {
  return state.booth;
};

var historyIDSelector = (0, _reselect.createSelector)(baseSelector, function (booth) {
  return booth.historyID;
});
exports.historyIDSelector = historyIDSelector;
var mediaSelector = (0, _reselect.createSelector)(baseSelector, function (booth) {
  return booth.media;
});
exports.mediaSelector = mediaSelector;
var startTimeSelector = (0, _reselect.createSelector)(baseSelector, function (booth) {
  return booth.startTime || 0;
});
exports.startTimeSelector = startTimeSelector;
var mediaDurationSelector = (0, _reselect.createSelector)(mediaSelector, function (media) {
  return media ? media.end - media.start : 0;
});
exports.mediaDurationSelector = mediaDurationSelector;
var endTimeSelector = (0, _reselect.createSelector)(startTimeSelector, mediaDurationSelector, function (startTime, duration) {
  return startTime + duration * 1000 || 0;
});
exports.endTimeSelector = endTimeSelector;
var timeElapsedSelector = (0, _reselect.createSelector)(startTimeSelector, _timeSelectors.currentTimeSelector, // in seconds! because media duration is in seconds, too.
function (startTime, currentTime) {
  return startTime ? Math.max((currentTime - startTime) / 1000, 0) : 0;
});
exports.timeElapsedSelector = timeElapsedSelector;
var timeRemainingSelector = (0, _reselect.createSelector)(mediaDurationSelector, timeElapsedSelector, function (duration, elapsed) {
  return duration > 0 ? duration - elapsed : 0;
});
exports.timeRemainingSelector = timeRemainingSelector;
var mediaProgressSelector = (0, _reselect.createSelector)(mediaDurationSelector, timeElapsedSelector, function (duration, elapsed) {
  return duration // Ensure that the result is between 0 and 1
  // It can be outside this range if a network or server hiccup
  // results in an advance event getting delayed.
  ? Math.max(0, Math.min(1, elapsed / duration)) : 0;
});
exports.mediaProgressSelector = mediaProgressSelector;
var djSelector = (0, _reselect.createSelector)(baseSelector, _userSelectors.usersSelector, function (booth, users) {
  return users[booth.djID];
});
exports.djSelector = djSelector;
var isCurrentDJSelector = (0, _reselect.createSelector)(djSelector, _userSelectors.currentUserSelector, function (dj, me) {
  return dj && me ? dj._id === me._id : false;
});
exports.isCurrentDJSelector = isCurrentDJSelector;
var canSkipSelector = (0, _reselect.createSelector)(historyIDSelector, isCurrentDJSelector, _userSelectors.currentUserHasRoleSelector, function (historyID, isCurrentDJ, hasRole) {
  if (!historyID) {
    return false;
  }

  return isCurrentDJ ? hasRole('booth.skip.self') : hasRole('booth.skip.other');
}); // Playback should be muted when the user requested it,
// and when a media preview dialog is open. (Otherwise their audio will interfere.)

exports.canSkipSelector = canSkipSelector;
var playbackMutedSelector = (0, _reselect.createSelector)(_settingSelectors.isMutedSelector, _dialogSelectors.isPreviewMediaDialogOpenSelector, function (isMuted, isPreviewMediaDialogOpen) {
  return isMuted || isPreviewMediaDialogOpen;
});
var playbackVolumeSelector = (0, _reselect.createSelector)(_settingSelectors.volumeSelector, playbackMutedSelector, function (volume, isMuted) {
  return isMuted ? 0 : volume;
});
exports.playbackVolumeSelector = playbackVolumeSelector;
var mobilePlaybackVolumeSelector = (0, _reselect.createSelector)(playbackMutedSelector, function (isMuted) {
  return isMuted ? 0 : 100;
}); //# sourceMappingURL=boothSelectors.js.map

exports.mobilePlaybackVolumeSelector = mobilePlaybackVolumeSelector;
//# sourceMappingURL=boothSelectors.js.map
