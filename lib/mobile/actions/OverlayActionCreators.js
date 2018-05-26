"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openPlaylist = openPlaylist;
exports.toggleServerList = toggleServerList;

var _OverlayActionCreators = require("../../actions/OverlayActionCreators");

var _PlaylistActionCreators = require("../../actions/PlaylistActionCreators");

function openPlaylist(playlistID) {
  return function (dispatch) {
    dispatch((0, _OverlayActionCreators.togglePlaylistManager)());
    dispatch((0, _PlaylistActionCreators.selectPlaylist)(playlistID));
  };
}

function toggleServerList() {
  return (0, _OverlayActionCreators.toggleOverlay)('serverList');
}
//# sourceMappingURL=OverlayActionCreators.js.map
