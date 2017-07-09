import _extends from 'babel-runtime/helpers/extends';
import { SHOW_IMPORT_PANEL, SHOW_IMPORT_SOURCE_PANEL, HIDE_IMPORT_SOURCE_PANEL } from '../constants/actionTypes/imports';
import { SELECT_PLAYLIST } from '../constants/actionTypes/playlists';
import { SHOW_SEARCH_RESULTS } from '../constants/actionTypes/search';

var initialState = {
  showPanel: false,
  sourceType: null
};

export default function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case SHOW_IMPORT_PANEL:
      return _extends({}, state, {
        showPanel: true
      });
    case SELECT_PLAYLIST:
    case SHOW_SEARCH_RESULTS:
      return _extends({}, state, {
        showPanel: false
      });
    case SHOW_IMPORT_SOURCE_PANEL:
      return _extends({}, state, {
        sourceType: payload.sourceType
      });
    case HIDE_IMPORT_SOURCE_PANEL:
      return _extends({}, state, {
        sourceType: null
      });
    default:
      return state;
  }
}
//# sourceMappingURL=imports.js.map
