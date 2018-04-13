import { SET_SEARCH_SOURCE, SHOW_SEARCH_RESULTS, SEARCH_START, SEARCH_COMPLETE, SEARCH_DELETE } from '../constants/actionTypes/search';
import { get } from './RequestActionCreators';
export function setSource(source) {
  return {
    type: SET_SEARCH_SOURCE,
    payload: {
      source: source
    }
  };
}
export function showSearchResults() {
  return {
    type: SHOW_SEARCH_RESULTS
  };
}

function searchStart(query) {
  return {
    type: SEARCH_START,
    payload: {
      query: query
    }
  };
}

export function search(query) {
  return get('/search', {
    qs: {
      query: query
    },
    onStart: function onStart() {
      return function (dispatch) {
        dispatch(searchStart(query));
        dispatch(showSearchResults());
      };
    },
    onComplete: function onComplete(results) {
      return {
        type: SEARCH_COMPLETE,
        payload: {
          results: results
        }
      };
    },
    onError: function onError(error) {
      return {
        type: SEARCH_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}
export function deleteSearch() {
  return {
    type: SEARCH_DELETE
  };
}
//# sourceMappingURL=SearchActionCreators.js.map
