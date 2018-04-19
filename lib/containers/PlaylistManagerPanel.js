"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _redux = require("redux");

var _reselect = require("reselect");

var _reactRedux = require("react-redux");

var _playlistSelectors = require("../selectors/playlistSelectors");

var _DialogActionCreators = require("../actions/DialogActionCreators");

var _PlaylistActionCreators = require("../actions/PlaylistActionCreators");

var _Panel = _interopRequireDefault(require("../components/PlaylistManager/Panel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  playlist: _playlistSelectors.selectedPlaylistSelector,
  media: _playlistSelectors.filteredSelectedPlaylistItemsSelector,
  loading: _playlistSelectors.isSelectedPlaylistLoadingSelector,
  isFiltered: _playlistSelectors.isFilteredSelector
});

var selectionOrOne = function selectionOrOne(media, selection) {
  if (selection.isSelected(media)) {
    return selection.get();
  }

  return [media];
};

var onOpenAddMediaMenu = function onOpenAddMediaMenu(position, media, selection) {
  return (0, _PlaylistActionCreators.addMediaMenu)(selectionOrOne(media, selection), position);
};

var onRemoveFromPlaylist = function onRemoveFromPlaylist(playlist) {
  return function (media, selection) {
    return (0, _PlaylistActionCreators.removeMedia)(playlist, selectionOrOne(media, selection));
  };
};

var onMoveMedia = function onMoveMedia(playlist) {
  return function (media, opts) {
    return (0, _PlaylistActionCreators.moveMedia)(playlist, media, opts);
  };
};

var onMoveToFirst = function onMoveToFirst(playlist) {
  return function (media, selection) {
    return (0, _PlaylistActionCreators.moveMedia)(playlist, selectionOrOne(media, selection), {
      at: 'start'
    });
  };
};

var onMoveToLast = function onMoveToLast(playlist) {
  return function (media, selection) {
    return (0, _PlaylistActionCreators.moveMedia)(playlist, selectionOrOne(media, selection), {
      at: 'end'
    });
  };
};

var onEditMedia = function onEditMedia(playlist) {
  return function (media) {
    return (0, _PlaylistActionCreators.editMedia)(playlist, media);
  };
};

var onLoadPlaylistPage = function onLoadPlaylistPage(_ref) {
  var isFiltered = _ref.isFiltered,
      playlist = _ref.playlist;
  return function (page) {
    return isFiltered ? (0, _PlaylistActionCreators.loadFilteredPlaylistItems)(playlist._id, page) : (0, _PlaylistActionCreators.loadPlaylist)(playlist._id, page);
  };
}; // Most of the playlist-related action creators need to know which playlist to
// use, i.e. need to have a reference to the selected playlist. The selected
// playlist is picked out in `mapStateToProps`, but we can't access its result
// in `mapDispatchToProps` yet. Instead, `mapDispatchToProps` passes the
// `dispatch` function to the `mergeProps` function below, and then that
// configures the action creators.
// TODO Maybe it's better to have versions of these action creators that work on
// the selected playlist by default? using redux-thunk.


var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

var mergeProps = function mergeProps(state, _ref2, props) {
  var dispatch = _ref2.dispatch;
  return (0, _extends2.default)({}, props, state, (0, _redux.bindActionCreators)({
    onShufflePlaylist: _PlaylistActionCreators.shufflePlaylist.bind(null, state.playlist._id),
    onActivatePlaylist: _PlaylistActionCreators.activatePlaylist.bind(null, state.playlist._id),
    onRenamePlaylist: _PlaylistActionCreators.renamePlaylist.bind(null, state.playlist._id),
    onDeletePlaylist: _PlaylistActionCreators.deletePlaylist.bind(null, state.playlist._id),
    onNotDeletable: _PlaylistActionCreators.cannotDeleteActivePlaylist,
    onOpenAddMediaMenu: onOpenAddMediaMenu,
    onOpenPreviewMediaDialog: _DialogActionCreators.openPreviewMediaDialog,
    onMoveToFirst: onMoveToFirst(state.playlist._id),
    onMoveToLast: onMoveToLast(state.playlist._id),
    onMoveMedia: onMoveMedia(state.playlist._id),
    onEditMedia: onEditMedia(state.playlist._id),
    onRemoveFromPlaylist: onRemoveFromPlaylist(state.playlist._id),
    onLoadPlaylistPage: onLoadPlaylistPage(state),
    onFilterPlaylistItems: _PlaylistActionCreators.filterPlaylistItems.bind(null, state.playlist._id)
  }, dispatch));
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, mergeProps)(_Panel.default); //# sourceMappingURL=PlaylistManagerPanel.js.map


exports.default = _default;
//# sourceMappingURL=PlaylistManagerPanel.js.map
