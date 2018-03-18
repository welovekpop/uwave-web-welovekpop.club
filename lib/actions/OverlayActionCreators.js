'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openOverlay = openOverlay;
exports.toggleOverlay = toggleOverlay;
exports.toggleRoomHistory = toggleRoomHistory;
exports.togglePlaylistManager = togglePlaylistManager;
exports.toggleSettings = toggleSettings;
exports.toggleAbout = toggleAbout;
exports.toggleAdmin = toggleAdmin;
exports.closeAll = closeAll;

var _overlay = require('../constants/actionTypes/overlay');

function openOverlay(overlay) {
  return {
    type: _overlay.OPEN_OVERLAY,
    payload: { overlay: overlay }
  };
}

function toggleOverlay(overlay) {
  return {
    type: _overlay.TOGGLE_OVERLAY,
    payload: { overlay: overlay }
  };
}

function toggleRoomHistory() {
  return toggleOverlay('roomHistory');
}

function togglePlaylistManager() {
  return toggleOverlay('playlistManager');
}

function toggleSettings() {
  return toggleOverlay('settings');
}

function toggleAbout() {
  return toggleOverlay('about');
}

function toggleAdmin() {
  return toggleOverlay('admin');
}

function closeAll() {
  return { type: _overlay.CLOSE_OVERLAY };
}
//# sourceMappingURL=OverlayActionCreators.js.map
//# sourceMappingURL=OverlayActionCreators.js.map
