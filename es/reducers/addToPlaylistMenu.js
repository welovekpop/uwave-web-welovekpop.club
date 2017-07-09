import _extends from 'babel-runtime/helpers/extends';
import { OPEN_ADD_MEDIA_MENU, CLOSE_ADD_MEDIA_MENU } from '../constants/actionTypes/playlists';

var initialState = {
  open: false,
  position: { x: 0, y: 0 },
  playlists: [],
  type: null,
  data: null
};

export default function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload,
      meta = action.meta;

  switch (type) {
    case OPEN_ADD_MEDIA_MENU:
      return _extends({}, state, {
        open: true,
        type: meta.type,
        position: meta.position,
        playlists: meta.playlists,
        data: payload
      });
    case CLOSE_ADD_MEDIA_MENU:
      return initialState;
    default:
      return state;
  }
}
//# sourceMappingURL=addToPlaylistMenu.js.map
