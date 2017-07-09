'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _LoadingStates = require('../../constants/LoadingStates');

var _constants = require('./constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  type: null,
  importingState: _LoadingStates.IDLE,
  importingPlaylistName: '',
  importingPlaylistItems: [],
  importingChannelTitle: '',
  importablePlaylists: []
};

function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      error = action.error,
      payload = action.payload;

  switch (type) {
    case _constants.GET_IMPORTABLE_PLAYLIST_START:
      return (0, _extends3.default)({}, state, {
        type: _constants.PLAYLIST,
        importingState: _LoadingStates.LOADING
      });
    case _constants.GET_IMPORTABLE_PLAYLIST_COMPLETE:
      if (error) {
        return (0, _extends3.default)({}, state, {
          type: null,
          importingState: _LoadingStates.IDLE
        });
      }

      return (0, _extends3.default)({}, state, {
        importingState: _LoadingStates.LOADED,
        importingPlaylist: payload.playlist,
        importingPlaylistItems: payload.items
      });
    case _constants.GET_CHANNEL_PLAYLISTS_START:
      return (0, _extends3.default)({}, state, {
        type: _constants.CHANNEL,
        importingState: _LoadingStates.LOADING
      });
    case _constants.GET_CHANNEL_PLAYLISTS_COMPLETE:
      if (error) {
        return (0, _extends3.default)({}, state, {
          type: null,
          importingState: _LoadingStates.IDLE
        });
      }

      return (0, _extends3.default)({}, state, {
        importingState: _LoadingStates.LOADED,
        importingChannelTitle: payload.channel.title,
        importablePlaylists: payload.playlists
      });
    default:
      return state;
  }
}
//# sourceMappingURL=reducer.js.map
//# sourceMappingURL=reducer.js.map
