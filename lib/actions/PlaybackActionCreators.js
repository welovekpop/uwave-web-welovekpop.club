"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setVolume = setVolume;
exports.mute = mute;
exports.unmute = unmute;
exports.setVideoSize = setVideoSize;
exports.toggleVideoSize = toggleVideoSize;
exports.enterFullscreen = enterFullscreen;
exports.exitFullscreen = exitFullscreen;

var _SettingsActionCreators = require("./SettingsActionCreators");

var _settingSelectors = require("../selectors/settingSelectors");

var _booth = require("../constants/actionTypes/booth");

function setVolume(volume) {
  return (0, _SettingsActionCreators.set)('volume', volume);
}

function mute() {
  return (0, _SettingsActionCreators.set)('muted', true);
}

function unmute() {
  return (0, _SettingsActionCreators.set)('muted', false);
}

function setVideoSize(size) {
  return (0, _SettingsActionCreators.set)('videoSize', size);
}

var nextVideoSize = {
  large: 'small',
  small: 'large'
};

function toggleVideoSize() {
  return function (dispatch, getState) {
    var current = (0, _settingSelectors.settingsSelector)(getState()).videoSize;
    var other = nextVideoSize[current];
    dispatch(setVideoSize(other));
  };
}

function enterFullscreen() {
  return {
    type: _booth.ENTER_FULLSCREEN
  };
}

function exitFullscreen() {
  return {
    type: _booth.EXIT_FULLSCREEN
  };
} //# sourceMappingURL=PlaybackActionCreators.js.map
//# sourceMappingURL=PlaybackActionCreators.js.map
