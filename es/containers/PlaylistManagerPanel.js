import _extends from 'babel-runtime/helpers/extends';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectedPlaylistSelector, filteredSelectedPlaylistItemsSelector, isSelectedPlaylistLoadingSelector, isFilteredSelector } from '../selectors/playlistSelectors';

import { openPreviewMediaDialog } from '../actions/DialogActionCreators';
import { addMediaMenu, editMedia, moveMedia, removeMedia, filterPlaylistItems, renamePlaylist, deletePlaylist, cannotDeleteActivePlaylist, shufflePlaylist, activatePlaylist, loadPlaylist, loadFilteredPlaylistItems } from '../actions/PlaylistActionCreators';

import PlaylistPanel from '../components/PlaylistManager/Panel';

var mapStateToProps = createStructuredSelector({
  playlist: selectedPlaylistSelector,
  media: filteredSelectedPlaylistItemsSelector,
  loading: isSelectedPlaylistLoadingSelector,
  isFiltered: isFilteredSelector
});

var selectionOrOne = function selectionOrOne(media, selection) {
  if (selection.isSelected(media)) {
    return selection.get();
  }
  return [media];
};

var onOpenAddMediaMenu = function onOpenAddMediaMenu(position, media, selection) {
  return addMediaMenu(selectionOrOne(media, selection), position);
};
var onRemoveFromPlaylist = function onRemoveFromPlaylist(playlist) {
  return function (media, selection) {
    return removeMedia(playlist, selectionOrOne(media, selection));
  };
};
var onMoveMedia = function onMoveMedia(playlist) {
  return function (media, opts) {
    return moveMedia(playlist, media, opts);
  };
};
var onMoveToFirst = function onMoveToFirst(playlist) {
  return function (media, selection) {
    return moveMedia(playlist, selectionOrOne(media, selection), { at: 'start' });
  };
};
var onEditMedia = function onEditMedia(playlist) {
  return function (media) {
    return editMedia(playlist, media);
  };
};
var onLoadPlaylistPage = function onLoadPlaylistPage(_ref) {
  var isFiltered = _ref.isFiltered,
      playlist = _ref.playlist;
  return function (page) {
    return isFiltered ? loadFilteredPlaylistItems(playlist._id, page) : loadPlaylist(playlist._id, page);
  };
};

// Most of the playlist-related action creators need to know which playlist to
// use, i.e. need to have a reference to the selected playlist. The selected
// playlist is picked out in `mapStateToProps`, but we can't access its result
// in `mapDispatchToProps` yet. Instead, `mapDispatchToProps` passes the
// `dispatch` function to the `mergeProps` function below, and then that
// configures the action creators.
// TODO Maybe it's better to have versions of these action creators that work on
// the selected playlist by default? using redux-thunk.
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return { dispatch: dispatch };
};

var mergeProps = function mergeProps(state, _ref2, props) {
  var dispatch = _ref2.dispatch;
  return _extends({}, props, state, bindActionCreators({
    onShufflePlaylist: shufflePlaylist.bind(null, state.playlist._id),
    onActivatePlaylist: activatePlaylist.bind(null, state.playlist._id),
    onRenamePlaylist: renamePlaylist.bind(null, state.playlist._id),
    onDeletePlaylist: deletePlaylist.bind(null, state.playlist._id),
    onNotDeletable: cannotDeleteActivePlaylist,

    onOpenAddMediaMenu: onOpenAddMediaMenu,
    onOpenPreviewMediaDialog: openPreviewMediaDialog,
    onMoveToFirst: onMoveToFirst(state.playlist._id),
    onMoveMedia: onMoveMedia(state.playlist._id),
    onEditMedia: onEditMedia(state.playlist._id),
    onRemoveFromPlaylist: onRemoveFromPlaylist(state.playlist._id),
    onLoadPlaylistPage: onLoadPlaylistPage(state),
    onFilterPlaylistItems: filterPlaylistItems.bind(null, state.playlist._id)
  }, dispatch));
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(PlaylistPanel);
//# sourceMappingURL=PlaylistManagerPanel.js.map
