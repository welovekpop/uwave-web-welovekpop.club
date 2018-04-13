"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToPlaylistMenuSelector = exports.historyIDSelector = exports.mediaSelector = exports.isFavoriteSelector = exports.positionSelector = exports.isOpenSelector = void 0;

var _reselect = require("reselect");

var _playlistSelectors = require("./playlistSelectors");

var baseSelector = function baseSelector(state) {
  return state.addToPlaylistMenu;
};

var isOpenSelector = (0, _reselect.createSelector)(baseSelector, function (menu) {
  return menu.open;
});
exports.isOpenSelector = isOpenSelector;
var positionSelector = (0, _reselect.createSelector)(baseSelector, function (menu) {
  return menu.position;
});
exports.positionSelector = positionSelector;
var typeSelector = (0, _reselect.createSelector)(baseSelector, function (menu) {
  return menu.type;
});
var dataSelector = (0, _reselect.createSelector)(baseSelector, function (menu) {
  return menu.data;
});
var isFavoriteSelector = (0, _reselect.createSelector)(typeSelector, function (type) {
  return type === 'favorite';
});
exports.isFavoriteSelector = isFavoriteSelector;
var mediaSelector = (0, _reselect.createSelector)(dataSelector, isOpenSelector, isFavoriteSelector, function (data, isOpen, isFavorite) {
  return isOpen && !isFavorite ? data.media : null;
});
exports.mediaSelector = mediaSelector;
var historyIDSelector = (0, _reselect.createSelector)(dataSelector, isOpenSelector, isFavoriteSelector, function (data, isOpen, isFavorite) {
  return isOpen && isFavorite ? data.historyID : null;
});
exports.historyIDSelector = historyIDSelector;
var addToPlaylistMenuSelector = (0, _reselect.createStructuredSelector)({
  type: typeSelector,
  open: isOpenSelector,
  position: positionSelector,
  playlists: _playlistSelectors.playlistsSelector
}); //# sourceMappingURL=addToPlaylistMenuSelectors.js.map

exports.addToPlaylistMenuSelector = addToPlaylistMenuSelector;
//# sourceMappingURL=addToPlaylistMenuSelectors.js.map
