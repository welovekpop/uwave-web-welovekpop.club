"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _LoadingStates = require("../../constants/LoadingStates");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  type: null,
  importingState: _LoadingStates.IDLE,
  importingPlaylistName: '',
  importingPlaylistItems: [],
  importingChannelTitle: '',
  importablePlaylists: []
};

function reduce(state, action) {
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
    case _constants.GET_IMPORTABLE_PLAYLIST_START:
      return (0, _extends2.default)({}, state, {
        type: _constants.PLAYLIST,
        importingState: _LoadingStates.LOADING
      });

    case _constants.GET_IMPORTABLE_PLAYLIST_COMPLETE:
      if (error) {
        return (0, _extends2.default)({}, state, {
          type: null,
          importingState: _LoadingStates.IDLE
        });
      }

      return (0, _extends2.default)({}, state, {
        importingState: _LoadingStates.LOADED,
        importingPlaylist: payload.playlist,
        importingPlaylistItems: payload.items
      });

    case _constants.GET_CHANNEL_PLAYLISTS_START:
      return (0, _extends2.default)({}, state, {
        type: _constants.CHANNEL,
        importingState: _LoadingStates.LOADING
      });

    case _constants.GET_CHANNEL_PLAYLISTS_COMPLETE:
      if (error) {
        return (0, _extends2.default)({}, state, {
          type: null,
          importingState: _LoadingStates.IDLE
        });
      }

      return (0, _extends2.default)({}, state, {
        importingState: _LoadingStates.LOADED,
        importingChannelTitle: payload.channel.title,
        importablePlaylists: payload.playlists
      });

    default:
      return state;
  }
} //# sourceMappingURL=reducer.js.map
//# sourceMappingURL=reducer.js.map
