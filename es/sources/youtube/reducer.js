import _extends from 'babel-runtime/helpers/extends';
import { IDLE, LOADING, LOADED } from '../../constants/LoadingStates';

import { PLAYLIST, CHANNEL, GET_IMPORTABLE_PLAYLIST_START, GET_IMPORTABLE_PLAYLIST_COMPLETE, GET_CHANNEL_PLAYLISTS_START, GET_CHANNEL_PLAYLISTS_COMPLETE } from './constants';

var initialState = {
  type: null,
  importingState: IDLE,
  importingPlaylistName: '',
  importingPlaylistItems: [],
  importingChannelTitle: '',
  importablePlaylists: []
};

export default function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      error = action.error,
      payload = action.payload;

  switch (type) {
    case GET_IMPORTABLE_PLAYLIST_START:
      return _extends({}, state, {
        type: PLAYLIST,
        importingState: LOADING
      });
    case GET_IMPORTABLE_PLAYLIST_COMPLETE:
      if (error) {
        return _extends({}, state, {
          type: null,
          importingState: IDLE
        });
      }

      return _extends({}, state, {
        importingState: LOADED,
        importingPlaylist: payload.playlist,
        importingPlaylistItems: payload.items
      });
    case GET_CHANNEL_PLAYLISTS_START:
      return _extends({}, state, {
        type: CHANNEL,
        importingState: LOADING
      });
    case GET_CHANNEL_PLAYLISTS_COMPLETE:
      if (error) {
        return _extends({}, state, {
          type: null,
          importingState: IDLE
        });
      }

      return _extends({}, state, {
        importingState: LOADED,
        importingChannelTitle: payload.channel.title,
        importablePlaylists: payload.playlists
      });
    default:
      return state;
  }
}
//# sourceMappingURL=reducer.js.map
