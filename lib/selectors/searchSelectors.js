'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showSearchResultsSelector = exports.searchResultsCountSelector = exports.searchResultsSelector = exports.searchLoadingStateSelector = exports.searchQuerySelector = exports.searchSourceTypeSelector = undefined;

var _reselect = require('reselect');

var baseSearchSelector = function baseSearchSelector(state) {
  return state.mediaSearch;
};

var searchSourceTypeSelector = exports.searchSourceTypeSelector = (0, _reselect.createSelector)(baseSearchSelector, function (search) {
  return search.sourceType;
});

var searchQuerySelector = exports.searchQuerySelector = (0, _reselect.createSelector)(baseSearchSelector, function (search) {
  return search.query;
});

var searchLoadingStateSelector = exports.searchLoadingStateSelector = (0, _reselect.createSelector)(baseSearchSelector, function (search) {
  return search.loadingState;
});

var searchResultsCombinedSelector = (0, _reselect.createSelector)(baseSearchSelector, function (search) {
  return search.results;
});

var searchResultsSelector = exports.searchResultsSelector = (0, _reselect.createSelector)(searchResultsCombinedSelector, searchSourceTypeSelector, function (results, sourceType) {
  return results[sourceType];
});

var searchResultsCountSelector = exports.searchResultsCountSelector = (0, _reselect.createSelector)(searchResultsSelector, function (results) {
  return results ? results.length : 0;
});

var showSearchResultsSelector = exports.showSearchResultsSelector = (0, _reselect.createSelector)(baseSearchSelector, function (search) {
  return !!search.showResults;
});
//# sourceMappingURL=searchSelectors.js.map
//# sourceMappingURL=searchSelectors.js.map
