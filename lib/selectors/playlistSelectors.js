'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFilteredSelector = exports.isSelectedPlaylistLoadingSelector = exports.nextMediaSelector = exports.selectedPlaylistSelector = exports.filteredSelectedPlaylistItemsSelector = exports.playlistItemFilterSelector = exports.selectedPlaylistIDSelector = exports.activePlaylistSelector = exports.activePlaylistIDSelector = exports.playlistItemsSelector = exports.playlistsSelector = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _reselect = require('reselect');

var _naturalCompare = require('natural-compare');

var _naturalCompare2 = _interopRequireDefault(_naturalCompare);

var _objectValues = require('object-values');

var _objectValues2 = _interopRequireDefault(_objectValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var byName = function byName(a, b) {
  return (0, _naturalCompare2.default)(a.name.toLowerCase(), b.name.toLowerCase());
};

var baseSelector = function baseSelector(state) {
  return state.playlists;
};

var playlistsSelector = exports.playlistsSelector = (0, _reselect.createSelector)(baseSelector, function (playlists) {
  return (0, _objectValues2.default)(playlists.playlists).sort(byName);
});

var playlistItemsSelector = exports.playlistItemsSelector = (0, _reselect.createSelector)(baseSelector, function (playlists) {
  return playlists.playlistItems;
});

var activePlaylistIDSelector = exports.activePlaylistIDSelector = (0, _reselect.createSelector)(baseSelector, function (playlists) {
  return playlists.activePlaylistID;
});

var activeMediaSelector = (0, _reselect.createSelector)(playlistItemsSelector, activePlaylistIDSelector, function (playlistItems, activePlaylist) {
  return playlistItems[activePlaylist] || [];
});

function mergePlaylistItems(playlist, playlistItems) {
  if (playlist) {
    return (0, _extends3.default)({}, playlist, {
      media: playlistItems
    });
  }
  return null;
}

var activePlaylistSelector = exports.activePlaylistSelector = (0, _reselect.createSelector)(baseSelector, activePlaylistIDSelector, activeMediaSelector, function (playlists, activeID, activeMedia) {
  return mergePlaylistItems(playlists.playlists[activeID], activeMedia);
});

var selectedPlaylistIDSelector = exports.selectedPlaylistIDSelector = (0, _reselect.createSelector)(baseSelector, function (playlists) {
  return playlists.selectedPlaylistID;
});

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

var playlistItemFilterSelector = exports.playlistItemFilterSelector = (0, _reselect.createSelector)(currentFilterSelector, function (filter) {
  return filter && filter.filter;
});

var filteredSelectedPlaylistItemsSelector = exports.filteredSelectedPlaylistItemsSelector = (0, _reselect.createSelector)(selectedPlaylistIDSelector, selectedMediaSelector, currentFilterSelector, function (selectedID, selectedItems, filter) {
  if (filter) {
    return filter.items;
  }
  return selectedItems;
});

var selectedPlaylistSelector = exports.selectedPlaylistSelector = (0, _reselect.createSelector)(baseSelector, selectedPlaylistIDSelector, selectedMediaSelector, function (playlists, selectedID, selectedMedia) {
  return mergePlaylistItems(playlists.playlists[selectedID], selectedMedia);
});

var nextMediaSelector = exports.nextMediaSelector = (0, _reselect.createSelector)(activeMediaSelector, function (media) {
  return media ? media[0] : null;
});

var isSelectedPlaylistLoadingSelector = exports.isSelectedPlaylistLoadingSelector = (0, _reselect.createSelector)(selectedPlaylistSelector, function (selectedPlaylist) {
  return Boolean(selectedPlaylist.loading);
});

var isFilteredSelector = exports.isFilteredSelector = (0, _reselect.createSelector)(playlistItemFilterSelector, function (filter) {
  return Boolean(filter);
});
//# sourceMappingURL=playlistSelectors.js.map
//# sourceMappingURL=playlistSelectors.js.map
