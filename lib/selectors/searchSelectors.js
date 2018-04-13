"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showSearchResultsSelector = exports.searchResultsCountSelector = exports.searchResultsSelector = exports.searchLoadingStateSelector = exports.searchQuerySelector = exports.searchSourceTypeSelector = void 0;

var _reselect = require("reselect");

var baseSearchSelector = function baseSearchSelector(state) {
  return state.mediaSearch;
};

var searchSourceTypeSelector = (0, _reselect.createSelector)(baseSearchSelector, function (search) {
  return search.sourceType;
});
exports.searchSourceTypeSelector = searchSourceTypeSelector;
var searchQuerySelector = (0, _reselect.createSelector)(baseSearchSelector, function (search) {
  return search.query;
});
exports.searchQuerySelector = searchQuerySelector;
var searchLoadingStateSelector = (0, _reselect.createSelector)(baseSearchSelector, function (search) {
  return search.loadingState;
});
exports.searchLoadingStateSelector = searchLoadingStateSelector;
var searchResultsCombinedSelector = (0, _reselect.createSelector)(baseSearchSelector, function (search) {
  return search.results;
});
var searchResultsSelector = (0, _reselect.createSelector)(searchResultsCombinedSelector, searchSourceTypeSelector, function (results, sourceType) {
  return results[sourceType];
});
exports.searchResultsSelector = searchResultsSelector;
var searchResultsCountSelector = (0, _reselect.createSelector)(searchResultsSelector, function (results) {
  return results ? results.length : 0;
});
exports.searchResultsCountSelector = searchResultsCountSelector;
var showSearchResultsSelector = (0, _reselect.createSelector)(baseSearchSelector, function (search) {
  return !!search.showResults;
}); //# sourceMappingURL=searchSelectors.js.map

exports.showSearchResultsSelector = showSearchResultsSelector;
//# sourceMappingURL=searchSelectors.js.map
