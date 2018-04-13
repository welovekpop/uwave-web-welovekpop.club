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
});
export var playbackVolumeSelector = createSelector(volumeSelector, isMutedSelector, isPreviewMediaDialogOpenSelector, function (volume, isMuted, isPreviewMediaDialogOpen) {
  return isMuted || isPreviewMediaDialogOpen ? 0 : volume;
});
//# sourceMappingURL=boothSelectors.js.map
