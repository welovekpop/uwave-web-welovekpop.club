import { set } from './SettingsActionCreators';
import { settingsSelector } from '../selectors/settingSelectors';
import { ENTER_FULLSCREEN, EXIT_FULLSCREEN } from '../constants/ActionTypes';
export function setVolume(volume) {
  return set('volume', volume);
}
export function mute() {
  return set('muted', true);
}
export function unmute() {
  return set('muted', false);
}
export function setVideoSize(size) {
  return set('videoSize', size);
}
var nextVideoSize = {
  large: 'small',
  small: 'large'
};
export function toggleVideoSize() {
  return function (dispatch, getState) {
    var current = settingsSelector(getState()).videoSize;
    var other = nextVideoSize[current];
    dispatch(setVideoSize(other));
  };
}
export function enterFullscreen() {
  return {
    type: ENTER_FULLSCREEN
  };
}
export function exitFullscreen() {
  return {
    type: EXIT_FULLSCREEN
  };
}
//# sourceMappingURL=PlaybackActionCreators.js.map
