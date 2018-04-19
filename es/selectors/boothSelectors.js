import { createSelector } from 'reselect';
import { isPreviewMediaDialogOpenSelector } from './dialogSelectors';
import { isMutedSelector, volumeSelector } from './settingSelectors';
import { currentTimeSelector } from './timeSelectors';
import { currentUserSelector, currentUserHasRoleSelector, usersSelector } from './userSelectors';

var baseSelector = function baseSelector(state) {
  return state.booth;
};

export var historyIDSelector = createSelector(baseSelector, function (booth) {
  return booth.historyID;
});
export var mediaSelector = createSelector(baseSelector, function (booth) {
  return booth.media;
});
export var startTimeSelector = createSelector(baseSelector, function (booth) {
  return booth.startTime || 0;
});
export var mediaDurationSelector = createSelector(mediaSelector, function (media) {
  return media ? media.end - media.start : 0;
});
export var endTimeSelector = createSelector(startTimeSelector, mediaDurationSelector, function (startTime, duration) {
  return startTime + duration * 1000 || 0;
});
export var timeElapsedSelector = createSelector(startTimeSelector, currentTimeSelector, // in seconds! because media duration is in seconds, too.
function (startTime, currentTime) {
  return startTime ? Math.max((currentTime - startTime) / 1000, 0) : 0;
});
export var timeRemainingSelector = createSelector(mediaDurationSelector, timeElapsedSelector, function (duration, elapsed) {
  return duration > 0 ? duration - elapsed : 0;
});
export var mediaProgressSelector = createSelector(mediaDurationSelector, timeElapsedSelector, function (duration, elapsed) {
  return duration // Ensure that the result is between 0 and 1
  // It can be outside this range if a network or server hiccup
  // results in an advance event getting delayed.
  ? Math.max(0, Math.min(1, elapsed / duration)) : 0;
});
export var djSelector = createSelector(baseSelector, usersSelector, function (booth, users) {
  return users[booth.djID];
});
export var isCurrentDJSelector = createSelector(djSelector, currentUserSelector, function (dj, me) {
  return dj && me ? dj._id === me._id : false;
});
export var canSkipSelector = createSelector(historyIDSelector, isCurrentDJSelector, currentUserHasRoleSelector, function (historyID, isCurrentDJ, hasRole) {
  if (!historyID) {
    return false;
  }

  return isCurrentDJ ? hasRole('booth.skip.self') : hasRole('booth.skip.other');
}); // Playback should be muted when the user requested it,
// and when a media preview dialog is open. (Otherwise their audio will interfere.)

var playbackMutedSelector = createSelector(isMutedSelector, isPreviewMediaDialogOpenSelector, function (isMuted, isPreviewMediaDialogOpen) {
  return isMuted || isPreviewMediaDialogOpen;
});
export var playbackVolumeSelector = createSelector(volumeSelector, playbackMutedSelector, function (volume, isMuted) {
  return isMuted ? 0 : volume;
});
export var mobilePlaybackVolumeSelector = createSelector(playbackMutedSelector, function (isMuted) {
  return isMuted ? 0 : 100;
});
//# sourceMappingURL=boothSelectors.js.map
