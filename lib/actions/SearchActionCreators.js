'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSource = setSource;
exports.showSearchResults = showSearchResults;
exports.search = search;

var _search = require('../constants/actionTypes/search');

var _RequestActionCreators = require('./RequestActionCreators');

function setSource(source) {
  return {
    type: _search.SET_SEARCH_SOURCE,
    payload: { source: source }
  };
}

function showSearchResults() {
  return { type: _search.SHOW_SEARCH_RESULTS };
}

function searchStart(query) {
  return {
    type: _search.SEARCH_START,
    payload: { query: query }
  };
}

function search(query) {
  return (0, _RequestActionCreators.get)('/search', {
    qs: { query: query },
    onStart: function onStart() {
      return function (dispatch) {
        dispatch(searchStart(query));
        dispatch(showSearchResults());
      };
    },
    onComplete: function onComplete(results) {
      return {
        type: _search.SEARCH_COMPLETE,
        payload: { results: results }
      };
    },
    onError: function onError(error) {
      return {
        type: _search.SEARCH_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}
//# sourceMappingURL=SearchActionCreators.js.map
//# sourceMappingURL=SearchActionCreators.js.map
