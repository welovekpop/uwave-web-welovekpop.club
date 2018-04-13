import { get, post } from '../../actions/RequestActionCreators';
import { createPlaylistStart, createPlaylistComplete } from '../../actions/PlaylistActionCreators';
import { GET_IMPORTABLE_PLAYLIST_START, GET_IMPORTABLE_PLAYLIST_COMPLETE, GET_CHANNEL_PLAYLISTS_START, GET_CHANNEL_PLAYLISTS_COMPLETE, IMPORT_PLAYLIST_START, IMPORT_PLAYLIST_COMPLETE } from './constants';

function getImportablePlaylistStart(url) {
  return {
    type: GET_IMPORTABLE_PLAYLIST_START,
    payload: {
      url: url
    }
  };
}

function getImportablePlaylistComplete(url, playlist, items) {
  return {
    type: GET_IMPORTABLE_PLAYLIST_COMPLETE,
    payload: {
      url: url,
      playlist: playlist,
      items: items
    }
  };
}

export function getImportablePlaylist(url) {
  return get('/import/youtube/playlist', {
    qs: {
      url: url
    },
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
        type: GET_IMPORTABLE_PLAYLIST_COMPLETE,
        error: true,
        payload: error,
        meta: {
          url: url
        }
      };
    }
  });
}

function importPlaylistStart(id, name) {
  return function (dispatch) {
    dispatch(createPlaylistStart({
      name: name
    }, "yt:" + id));
    dispatch({
      type: IMPORT_PLAYLIST_START,
      payload: {
        id: id,
        name: name
      }
    });
  };
}

function importPlaylistComplete(id, playlist) {
  return function (dispatch) {
    dispatch({
      type: IMPORT_PLAYLIST_COMPLETE,
      payload: {
        playlist: playlist
      },
      meta: {
        id: id
      }
    });
    dispatch(createPlaylistComplete(playlist, "yt:" + id));
  };
}

export function importPlaylist(id, name) {
  return post('/import/youtube/importplaylist', {
    id: id,
    name: name
  }, {
    onStart: function onStart() {
      return importPlaylistStart(id, name);
    },
    onComplete: function onComplete(playlist) {
      return importPlaylistComplete(id, playlist);
    },
    onError: function onError(error) {
      return {
        type: IMPORT_PLAYLIST_COMPLETE,
        error: true,
        payload: error,
        meta: {
          id: id
        }
      };
    }
  });
}

function getChannelPlaylistsStart(url) {
  return {
    type: GET_CHANNEL_PLAYLISTS_START,
    payload: {
      url: url
    }
  };
}

function getChannelPlaylistsComplete(channel, playlists) {
  return {
    type: GET_CHANNEL_PLAYLISTS_COMPLETE,
    payload: {
      channel: channel,
      playlists: playlists
    }
  };
}

export function getChannelPlaylists(url) {
  return get('/import/youtube/channel', {
    qs: {
      url: url
    },
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
        type: GET_CHANNEL_PLAYLISTS_COMPLETE,
        error: true,
        payload: error,
        meta: {
          url: url
        }
      };
    }
  });
}
//# sourceMappingURL=actions.js.map
