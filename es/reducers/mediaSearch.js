import _objectSpread from "@babel/runtime/helpers/builtin/objectSpread";
import { SHOW_IMPORT_PANEL } from '../constants/actionTypes/imports';
import { SELECT_PLAYLIST } from '../constants/actionTypes/playlists';
import { SET_SEARCH_SOURCE, SHOW_SEARCH_RESULTS, SEARCH_START, SEARCH_COMPLETE, SEARCH_DELETE } from '../constants/actionTypes/search';
import { IDLE, LOADING, LOADED } from '../constants/LoadingStates';
var initialState = {
  sourceType: 'youtube',
  query: null,
  showResults: false,
  results: {},
  loadingState: IDLE
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
    case SHOW_SEARCH_RESULTS:
      return _objectSpread({}, state, {
        showResults: true
      });

    case SEARCH_START:
      return _objectSpread({}, state, {
        query: payload.query,
        results: {},
        loadingState: LOADING
      });

    case SEARCH_COMPLETE:
      return _objectSpread({}, state, {
        results: payload.results,
        loadingState: LOADED
      });

    case SET_SEARCH_SOURCE:
      return _objectSpread({}, state, {
        sourceType: payload.source
      });

    case SEARCH_DELETE:
      return _objectSpread({}, state, {
        query: null,
        loadingState: IDLE,
        results: {},
        showResults: false
      });

    case SELECT_PLAYLIST:
    case SHOW_IMPORT_PANEL:
      return _objectSpread({}, state, {
        showResults: false
      });

    default:
      return state;
  }
}
//# sourceMappingURL=mediaSearch.js.map
