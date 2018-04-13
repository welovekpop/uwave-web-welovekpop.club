"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFilteredSelector = exports.isSelectedPlaylistLoadingSelector = exports.nextMediaSelector = exports.selectedPlaylistSelector = exports.filteredSelectedPlaylistItemsSelector = exports.playlistItemFilterSelector = exports.selectedPlaylistIDSelector = exports.activePlaylistSelector = exports.activePlaylistIDSelector = exports.playlistItemsSelector = exports.playlistsSelector = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _reselect = require("reselect");

var _naturalCompare = _interopRequireDefault(require("natural-compare"));

var _objectValues = _interopRequireDefault(require("object-values"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var byName = function byName(a, b) {
  return (0, _naturalCompare.default)(a.name.toLowerCase(), b.name.toLowerCase());
};

var baseSelector = function baseSelector(state) {
  return state.playlists;
};

var playlistsSelector = (0, _reselect.createSelector)(baseSelector, function (playlists) {
  return (0, _objectValues.default)(playlists.playlists).sort(byName);
});
exports.playlistsSelector = playlistsSelector;
var playlistItemsSelector = (0, _reselect.createSelector)(baseSelector, function (playlists) {
  return playlists.playlistItems;
});
exports.playlistItemsSelector = playlistItemsSelector;
var activePlaylistIDSelector = (0, _reselect.createSelector)(baseSelector, function (playlists) {
  return playlists.activePlaylistID;
});
exports.activePlaylistIDSelector = activePlaylistIDSelector;
var activeMediaSelector = (0, _reselect.createSelector)(playlistItemsSelector, activePlaylistIDSelector, function (playlistItems, activePlaylist) {
  return playlistItems[activePlaylist] || [];
});

function mergePlaylistItems(playlist, playlistItems) {
  if (playlist) {
    return (0, _objectSpread2.default)({}, playlist, {
      media: playlistItems
    });
  }

  return null;
}

var activePlaylistSelector = (0, _reselect.createSelector)(baseSelector, activePlaylistIDSelector, activeMediaSelector, function (playlists, activeID, activeMedia) {
  return mergePlaylistItems(playlists.playlists[activeID], activeMedia);
});
exports.activePlaylistSelector = activePlaylistSelector;
var selectedPlaylistIDSelector = (0, _reselect.createSelector)(baseSelector, function (playlists) {
  return playlists.selectedPlaylistID;
});
exports.selectedPlaylistIDSelector = selectedPlaylistIDSelector;
var selectedMediaSelector = (0, _reselect.createSelector)(playlistItemsSelector, selectedPlaylistIDSelector, function (playlistItems, selectedPlaylist) {
  return playlistItems[selectedPlaylist] || [];
});
var filterSelector = (0, _reselect.createSelector)(baseSelector, function (base) {
  return base.currentFilter;
});
var currentFilterSelector = (0, _reselect.createSelector)(filterSelector, selectedPlaylistIDSelector, function (filter, selectedID) {
  if (filter && filter.playlistID === selectedID) {
    return filter;
  }

  return null;
});
var playlistItemFilterSelector = (0, _reselect.createSelector)(currentFilterSelector, function (filter) {
  return filter && filter.filter;
});
exports.playlistItemFilterSelector = playlistItemFilterSelector;
var filteredSelectedPlaylistItemsSelector = (0, _reselect.createSelector)(selectedPlaylistIDSelector, selectedMediaSelector, currentFilterSelector, function (selectedID, selectedItems, filter) {
  if (filter) {
    return filter.items;
  }

  return selectedItems;
});
exports.filteredSelectedPlaylistItemsSelector = filteredSelectedPlaylistItemsSelector;
var selectedPlaylistSelector = (0, _reselect.createSelector)(baseSelector, selectedPlaylistIDSelector, selectedMediaSelector, function (playlists, selectedID, selectedMedia) {
  return mergePlaylistItems(playlists.playlists[selectedID], selectedMedia);
});
exports.selectedPlaylistSelector = selectedPlaylistSelector;
var nextMediaSelector = (0, _reselect.createSelector)(activeMediaSelector, function (media) {
  return media ? media[0] : null;
});
exports.nextMediaSelector = nextMediaSelector;
var isSelectedPlaylistLoadingSelector = (0, _reselect.createSelector)(selectedPlaylistSelector, function (selectedPlaylist) {
  return Boolean(selectedPlaylist.loading);
});
exports.isSelectedPlaylistLoadingSelector = isSelectedPlaylistLoadingSelector;
var isFilteredSelector = (0, _reselect.createSelector)(playlistItemFilterSelector, function (filter) {
  return Boolean(filter);
}); //# sourceMappingURL=playlistSelectors.js.map

exports.isFilteredSelector = isFilteredSelector;
//# sourceMappingURL=playlistSelectors.js.map
