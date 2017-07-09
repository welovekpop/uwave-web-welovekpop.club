'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addToPlaylistMenuSelector = exports.historyIDSelector = exports.mediaSelector = exports.isFavoriteSelector = exports.positionSelector = exports.isOpenSelector = undefined;

var _reselect = require('reselect');

var _playlistSelectors = require('./playlistSelectors');

var baseSelector = function baseSelector(state) {
  return state.addToPlaylistMenu;
};
var isOpenSelector = exports.isOpenSelector = (0, _reselect.createSelector)(baseSelector, function (menu) {
  return menu.open;
});
var positionSelector = exports.positionSelector = (0, _reselect.createSelector)(baseSelector, function (menu) {
  return menu.position;
});
var typeSelector = (0, _reselect.createSelector)(baseSelector, function (menu) {
  return menu.type;
});
var dataSelector = (0, _reselect.createSelector)(baseSelector, function (menu) {
  return menu.data;
});

var isFavoriteSelector = exports.isFavoriteSelector = (0, _reselect.createSelector)(typeSelector, function (type) {
  return type === 'favorite';
});

var mediaSelector = exports.mediaSelector = (0, _reselect.createSelector)(dataSelector, isOpenSelector, isFavoriteSelector, function (data, isOpen, isFavorite) {
  return isOpen && !isFavorite ? data.media : null;
});
var historyIDSelector = exports.historyIDSelector = (0, _reselect.createSelector)(dataSelector, isOpenSelector, isFavoriteSelector, function (data, isOpen, isFavorite) {
  return isOpen && isFavorite ? data.historyID : null;
});

var addToPlaylistMenuSelector = exports.addToPlaylistMenuSelector = (0, _reselect.createStructuredSelector)({
  type: typeSelector,
  open: isOpenSelector,
  position: positionSelector,
  playlists: _playlistSelectors.playlistsSelector
});
//# sourceMappingURL=addToPlaylistMenuSelectors.js.map
//# sourceMappingURL=addToPlaylistMenuSelectors.js.map
