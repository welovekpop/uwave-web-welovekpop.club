'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImportablePlaylist = getImportablePlaylist;
exports.importPlaylist = importPlaylist;
exports.getChannelPlaylists = getChannelPlaylists;

var _RequestActionCreators = require('../../actions/RequestActionCreators');

var _PlaylistActionCreators = require('../../actions/PlaylistActionCreators');

var _constants = require('./constants');

function getImportablePlaylistStart(url) {
  return {
    type: _constants.GET_IMPORTABLE_PLAYLIST_START,
    payload: { url: url }
  };
}

function getImportablePlaylistComplete(url, playlist, items) {
  return {
    type: _constants.GET_IMPORTABLE_PLAYLIST_COMPLETE,
    payload: { url: url, playlist: playlist, items: items }
  };
}

function getImportablePlaylist(url) {
  return (0, _RequestActionCreators.get)('/import/youtube/playlist', {
    qs: { url: url },
    onStart: function onStart() {
      return getImportablePlaylistStart(url);
    },
    onComplete: function onComplete(_ref) {
      var playlist = _ref.playlist,
          items = _ref.items;
      return getImportablePlaylistComplete(url, playlist, items);
    },
    onError: function onError(error) {
      return {
        type: _constants.GET_IMPORTABLE_PLAYLIST_COMPLETE,
        error: true,
        payload: error,
        meta: { url: url }
      };
    }
  });
}

function importPlaylistStart(id, name) {
  return function (dispatch) {
    dispatch((0, _PlaylistActionCreators.createPlaylistStart)({ name: name }, 'yt:' + id));
    dispatch({
      type: _constants.IMPORT_PLAYLIST_START,
      payload: { id: id, name: name }
    });
  };
}

function importPlaylistComplete(id, playlist) {
  return function (dispatch) {
    dispatch({
      type: _constants.IMPORT_PLAYLIST_COMPLETE,
      payload: { playlist: playlist },
      meta: { id: id }
    });
    dispatch((0, _PlaylistActionCreators.createPlaylistComplete)(playlist, 'yt:' + id));
  };
}

function importPlaylist(id, name) {
  return (0, _RequestActionCreators.post)('/import/youtube/importplaylist', { id: id, name: name }, {
    onStart: function onStart() {
      return importPlaylistStart(id, name);
    },
    onComplete: function onComplete(playlist) {
      return importPlaylistComplete(id, playlist);
    },
    onError: function onError(error) {
      return {
        type: _constants.IMPORT_PLAYLIST_COMPLETE,
        error: true,
        payload: error,
        meta: { id: id }
      };
    }
  });
}

function getChannelPlaylistsStart(url) {
  return {
    type: _constants.GET_CHANNEL_PLAYLISTS_START,
    payload: { url: url }
  };
}

function getChannelPlaylistsComplete(channel, playlists) {
  return {
    type: _constants.GET_CHANNEL_PLAYLISTS_COMPLETE,
    payload: {
      channel: channel,
      playlists: playlists
    }
  };
}

function getChannelPlaylists(url) {
  return (0, _RequestActionCreators.get)('/import/youtube/channel', {
    qs: { url: url },
    onStart: function onStart() {
      return getChannelPlaylistsStart(url);
    },
    onComplete: function onComplete(_ref2) {
      var channel = _ref2.channel,
          playlists = _ref2.playlists;
      return getChannelPlaylistsComplete(channel, playlists);
    },
    onError: function onError(error) {
      return {
        type: _constants.GET_CHANNEL_PLAYLISTS_COMPLETE,
        error: true,
        payload: error,
        meta: { url: url }
      };
    }
  });
}
//# sourceMappingURL=actions.js.map
//# sourceMappingURL=actions.js.map
