'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openPlaylist = openPlaylist;

var _OverlayActionCreators = require('../../actions/OverlayActionCreators');

var _PlaylistActionCreators = require('../../actions/PlaylistActionCreators');

// eslint-disable-next-line import/prefer-default-export
function openPlaylist(playlistID) {
  return function (dispatch) {
    dispatch((0, _OverlayActionCreators.togglePlaylistManager)());
    dispatch((0, _PlaylistActionCreators.selectPlaylist)(playlistID));
  };
}
//# sourceMappingURL=OverlayActionCreators.js.map
//# sourceMappingURL=OverlayActionCreators.js.map
