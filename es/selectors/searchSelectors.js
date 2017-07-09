import { createSelector } from 'reselect';

var baseSearchSelector = function baseSearchSelector(state) {
  return state.mediaSearch;
};

export var searchSourceTypeSelector = createSelector(baseSearchSelector, function (search) {
  return search.sourceType;
});

export var searchQuerySelector = createSelector(baseSearchSelector, function (search) {
  return search.query;
});

export var searchLoadingStateSelector = createSelector(baseSearchSelector, function (search) {
  return search.loadingState;
});

var searchResultsCombinedSelector = createSelector(baseSearchSelector, function (search) {
  return search.results;
});

export var searchResultsSelector = createSelector(searchResultsCombinedSelector, searchSourceTypeSelector, function (results, sourceType) {
  return results[sourceType];
});

export var searchResultsCountSelector = createSelector(searchResultsSelector, function (results) {
  return results ? results.length : 0;
});

export var showSearchResultsSelector = createSelector(baseSearchSelector, function (search) {
  return !!search.showResults;
});
//# sourceMappingURL=searchSelectors.js.map
