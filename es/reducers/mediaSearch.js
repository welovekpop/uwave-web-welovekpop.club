import _extends from 'babel-runtime/helpers/extends';
import { SHOW_IMPORT_PANEL } from '../constants/actionTypes/imports';
import { SELECT_PLAYLIST } from '../constants/actionTypes/playlists';
import { SET_SEARCH_SOURCE, SHOW_SEARCH_RESULTS, SEARCH_START, SEARCH_COMPLETE } from '../constants/actionTypes/search';
import { IDLE, LOADING, LOADED } from '../constants/LoadingStates';

var initialState = {
  sourceType: 'youtube',
  query: null,
  showResults: false,
  results: {},
  loadingState: IDLE
};

export default function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type,
      payload = action.payload;

  switch (type) {
    case SHOW_SEARCH_RESULTS:
      return _extends({}, state, {
        showResults: true
      });
    case SEARCH_START:
      return _extends({}, state, {
        query: payload.query,
        results: {},
        loadingState: LOADING
      });
    case SEARCH_COMPLETE:
      return _extends({}, state, {
        results: payload.results,
        loadingState: LOADED
      });
    case SET_SEARCH_SOURCE:
      return _extends({}, state, {
        sourceType: payload.source
      });
    case SELECT_PLAYLIST:
    case SHOW_IMPORT_PANEL:
      return _extends({}, state, {
        showResults: false
      });
    default:
      return state;
  }
}
//# sourceMappingURL=mediaSearch.js.map
