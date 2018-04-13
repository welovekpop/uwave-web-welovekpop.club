import _objectSpread from "@babel/runtime/helpers/objectSpread";
import { createSelector } from 'reselect';
import naturalCmp from 'natural-compare';
import values from 'object-values';

var byName = function byName(a, b) {
  return naturalCmp(a.name.toLowerCase(), b.name.toLowerCase());
};

var baseSelector = function baseSelector(state) {
  return state.playlists;
};

export var playlistsSelector = createSelector(baseSelector, function (playlists) {
  return values(playlists.playlists).sort(byName);
});
export var playlistItemsSelector = createSelector(baseSelector, function (playlists) {
  return playlists.playlistItems;
});
export var activePlaylistIDSelector = createSelector(baseSelector, function (playlists) {
  return playlists.activePlaylistID;
});
var activeMediaSelector = createSelector(playlistItemsSelector, activePlaylistIDSelector, function (playlistItems, activePlaylist) {
  return playlistItems[activePlaylist] || [];
});

function mergePlaylistItems(playlist, playlistItems) {
  if (playlist) {
    return _objectSpread({}, playlist, {
      media: playlistItems
    });
  }

  return null;
}

export var activePlaylistSelector = createSelector(baseSelector, activePlaylistIDSelector, activeMediaSelector, function (playlists, activeID, activeMedia) {
  return mergePlaylistItems(playlists.playlists[activeID], activeMedia);
});
export var selectedPlaylistIDSelector = createSelector(baseSelector, function (playlists) {
  return playlists.selectedPlaylistID;
});
var selectedMediaSelector = createSelector(playlistItemsSelector, selectedPlaylistIDSelector, function (playlistItems, selectedPlaylist) {
  return playlistItems[selectedPlaylist] || [];
});
var filterSelector = createSelector(baseSelector, function (base) {
  return base.currentFilter;
});
var currentFilterSelector = createSelector(filterSelector, selectedPlaylistIDSelector, function (filter, selectedID) {
  if (filter && filter.playlistID === selectedID) {
    return filter;
  }

  return null;
});
export var playlistItemFilterSelector = createSelector(currentFilterSelector, function (filter) {
  return filter && filter.filter;
});
export var filteredSelectedPlaylistItemsSelector = createSelector(selectedPlaylistIDSelector, selectedMediaSelector, currentFilterSelector, function (selectedID, selectedItems, filter) {
  if (filter) {
    return filter.items;
  }

  return selectedItems;
});
export var selectedPlaylistSelector = createSelector(baseSelector, selectedPlaylistIDSelector, selectedMediaSelector, function (playlists, selectedID, selectedMedia) {
  return mergePlaylistItems(playlists.playlists[selectedID], selectedMedia);
});
export var nextMediaSelector = createSelector(activeMediaSelector, function (media) {
  return media ? media[0] : null;
});
export var isSelectedPlaylistLoadingSelector = createSelector(selectedPlaylistSelector, function (selectedPlaylist) {
  return Boolean(selectedPlaylist.loading);
});
export var isFilteredSelector = createSelector(playlistItemFilterSelector, function (filter) {
  return Boolean(filter);
});
//# sourceMappingURL=playlistSelectors.js.map
