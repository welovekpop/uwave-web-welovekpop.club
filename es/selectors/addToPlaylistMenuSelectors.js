import { createSelector, createStructuredSelector } from 'reselect';
import { playlistsSelector } from './playlistSelectors';

var baseSelector = function baseSelector(state) {
  return state.addToPlaylistMenu;
};
export var isOpenSelector = createSelector(baseSelector, function (menu) {
  return menu.open;
});
export var positionSelector = createSelector(baseSelector, function (menu) {
  return menu.position;
});
var typeSelector = createSelector(baseSelector, function (menu) {
  return menu.type;
});
var dataSelector = createSelector(baseSelector, function (menu) {
  return menu.data;
});

export var isFavoriteSelector = createSelector(typeSelector, function (type) {
  return type === 'favorite';
});

export var mediaSelector = createSelector(dataSelector, isOpenSelector, isFavoriteSelector, function (data, isOpen, isFavorite) {
  return isOpen && !isFavorite ? data.media : null;
});
export var historyIDSelector = createSelector(dataSelector, isOpenSelector, isFavoriteSelector, function (data, isOpen, isFavorite) {
  return isOpen && isFavorite ? data.historyID : null;
});

export var addToPlaylistMenuSelector = createStructuredSelector({
  type: typeSelector,
  open: isOpenSelector,
  position: positionSelector,
  playlists: playlistsSelector
});
//# sourceMappingURL=addToPlaylistMenuSelectors.js.map
