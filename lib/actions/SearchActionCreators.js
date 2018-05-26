"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setSource = setSource;
exports.showSearchResults = showSearchResults;
exports.search = search;
exports.deleteSearch = deleteSearch;

var _RequestActionCreators = require("./RequestActionCreators");

var _ActionTypes = require("../constants/ActionTypes");

function setSource(source) {
  return {
    type: _ActionTypes.SET_SEARCH_SOURCE,
    payload: {
      source: source
    }
  };
}

function showSearchResults() {
  return {
    type: _ActionTypes.SHOW_SEARCH_RESULTS
  };
}

function searchStart(query) {
  return {
    type: _ActionTypes.SEARCH_START,
    payload: {
      query: query
    }
  };
}

function search(query) {
  return (0, _RequestActionCreators.get)('/search', {
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
        type: _ActionTypes.SEARCH_COMPLETE,
        payload: {
          results: results
        }
      };
    },
    onError: function onError(error) {
      return {
        type: _ActionTypes.SEARCH_COMPLETE,
        error: true,
        payload: error
      };
    }
  });
}

function deleteSearch() {
  return {
    type: _ActionTypes.SEARCH_DELETE
  };
}
//# sourceMappingURL=SearchActionCreators.js.map
