import _objectSpread from "@babel/runtime/helpers/objectSpread";
import { OPEN_ADD_MEDIA_MENU, CLOSE_ADD_MEDIA_MENU } from '../constants/actionTypes/playlists';
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
export default function reduce(state, action) {
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
    case OPEN_ADD_MEDIA_MENU:
      return _objectSpread({}, state, {
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
