"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _playlists = require("../constants/actionTypes/playlists");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  open: false,
  position: {
    x: 0,
    y: 0
  },
  playlists: [],
  type: null,
  data: null
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
      payload = _action.payload,
      meta = _action.meta;

  switch (type) {
    case _playlists.OPEN_ADD_MEDIA_MENU:
      return (0, _extends2.default)({}, state, {
        open: true,
        type: meta.type,
        position: meta.position,
        playlists: meta.playlists,
        data: payload
      });

    case _playlists.CLOSE_ADD_MEDIA_MENU:
      return initialState;

    default:
      return state;
  }
} //# sourceMappingURL=addToPlaylistMenu.js.map
//# sourceMappingURL=addToPlaylistMenu.js.map
