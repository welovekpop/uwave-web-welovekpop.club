import _objectSpread from "@babel/runtime/helpers/builtin/objectSpread";
import { SHOW_IMPORT_PANEL, SHOW_IMPORT_SOURCE_PANEL, HIDE_IMPORT_SOURCE_PANEL } from '../constants/actionTypes/imports';
import { SELECT_PLAYLIST } from '../constants/actionTypes/playlists';
import { SHOW_SEARCH_RESULTS } from '../constants/actionTypes/search';
var initialState = {
  showPanel: false,
  sourceType: null
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
      payload = _action.payload;

  switch (type) {
    case SHOW_IMPORT_PANEL:
      return _objectSpread({}, state, {
        showPanel: true
      });

    case SELECT_PLAYLIST:
    case SHOW_SEARCH_RESULTS:
      return _objectSpread({}, state, {
        showPanel: false
      });

    case SHOW_IMPORT_SOURCE_PANEL:
      return _objectSpread({}, state, {
        sourceType: payload.sourceType
      });

    case HIDE_IMPORT_SOURCE_PANEL:
      return _objectSpread({}, state, {
        sourceType: null
      });

    default:
      return state;
  }
}
//# sourceMappingURL=imports.js.map
