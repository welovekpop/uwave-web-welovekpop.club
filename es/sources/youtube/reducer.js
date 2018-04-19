import _extends from "@babel/runtime/helpers/builtin/extends";
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
export default function reduce(state, action) {
  if (state === void 0) {
    state = initialState;
  }

  if (action === void 0) {
    action = {};
  }

  var _action = action,
      type = _action.type,
      error = _action.error,
      payload = _action.payload;

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
