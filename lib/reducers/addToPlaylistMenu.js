'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _playlists = require('../constants/actionTypes/playlists');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  open: false,
  position: { x: 0, y: 0 },
  playlists: [],
  type: null,
  data: null
};

function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload,
      meta = action.meta;

  switch (type) {
    case _playlists.OPEN_ADD_MEDIA_MENU:
      return (0, _extends3.default)({}, state, {
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
}
//# sourceMappingURL=addToPlaylistMenu.js.map
//# sourceMappingURL=addToPlaylistMenu.js.map
