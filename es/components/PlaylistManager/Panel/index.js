import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import MediaList from '../../MediaList';
import Loader from '../../Loader';

import PlaylistMeta from './Meta';
import PlainItemRow from '../../MediaList/Row';
import PlaylistItemRow from './PlaylistItemRow';

import AddToPlaylistAction from '../../MediaList/Actions/AddToPlaylist';
import RemoveFromPlaylistAction from '../../MediaList/Actions/RemoveFromPlaylist';
import EditMediaAction from '../../MediaList/Actions/EditMedia';
import MoveToFirstAction from '../../MediaList/Actions/MoveToFirst';

var makeActions = function makeActions(_ref) {
  var onOpenAddMediaMenu = _ref.onOpenAddMediaMenu,
      onMoveToFirst = _ref.onMoveToFirst,
      onEditMedia = _ref.onEditMedia,
      onRemoveFromPlaylist = _ref.onRemoveFromPlaylist,
      isFiltered = _ref.isFiltered;
  return function (media, selection, index) {
    return [_jsx(AddToPlaylistAction, {
      onAdd: function onAdd(position) {
        return onOpenAddMediaMenu(position, media, selection);
      }
    }, 'add'),
    // Don't show the "move to first" action on the first item in the playlist.
    // If the playlist is filtered we don't know if the first item to show is
    // also the first in the playlist, so just show it always in that case.
    (index > 0 || isFiltered) && _jsx(MoveToFirstAction, {
      onFirst: function onFirst() {
        return onMoveToFirst(media, selection);
      }
    }, 'first'), _jsx(EditMediaAction, {
      onEdit: function onEdit() {
        return onEditMedia(media);
      }
    }, 'edit'), _jsx(RemoveFromPlaylistAction, {
      onRemove: function onRemove() {
        return onRemoveFromPlaylist(media, selection);
      }
    }, 'remove')];
  };
};

var _ref2 = _jsx('div', {
  className: 'PlaylistPanel-loading'
}, void 0, _jsx(Loader, {
  size: 'large'
}));

var PlaylistPanel = function PlaylistPanel(props) {
  var className = props.className,
      playlist = props.playlist,
      media = props.media,
      loading = props.loading,
      isFiltered = props.isFiltered,
      onShufflePlaylist = props.onShufflePlaylist,
      onActivatePlaylist = props.onActivatePlaylist,
      onRenamePlaylist = props.onRenamePlaylist,
      onDeletePlaylist = props.onDeletePlaylist,
      onNotDeletable = props.onNotDeletable,
      onLoadPlaylistPage = props.onLoadPlaylistPage,
      onFilterPlaylistItems = props.onFilterPlaylistItems,
      onMoveMedia = props.onMoveMedia,
      onOpenPreviewMediaDialog = props.onOpenPreviewMediaDialog;


  var list = void 0;
  if (loading) {
    list = _ref2;
  } else {
    list = _jsx(MediaList, {
      className: 'PlaylistPanel-media',
      size: media.length,
      media: media,
      rowComponent: isFiltered ? PlainItemRow : PlaylistItemRow,
      rowProps: { onMoveMedia: onMoveMedia },
      onOpenPreviewMediaDialog: onOpenPreviewMediaDialog,
      makeActions: makeActions(props),
      onRequestPage: onLoadPlaylistPage
    });
  }

  return _jsx('div', {
    className: cx('PlaylistPanel', className)
  }, void 0, _jsx(PlaylistMeta, {
    className: 'PlaylistPanel-meta',
    id: playlist._id,
    name: playlist.name,
    active: playlist.active,
    onShufflePlaylist: onShufflePlaylist,
    onActivatePlaylist: onActivatePlaylist,
    onRenamePlaylist: onRenamePlaylist,
    onDeletePlaylist: onDeletePlaylist,
    onNotDeletable: onNotDeletable,
    onFilter: onFilterPlaylistItems
  }), list);
};

PlaylistPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  playlist: PropTypes.object.isRequired,
  media: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  onShufflePlaylist: PropTypes.func.isRequired,
  onActivatePlaylist: PropTypes.func.isRequired,
  onRenamePlaylist: PropTypes.func.isRequired,
  onDeletePlaylist: PropTypes.func.isRequired,
  onLoadPlaylistPage: PropTypes.func.isRequired,
  onFilterPlaylistItems: PropTypes.func.isRequired,
  onNotDeletable: PropTypes.func.isRequired,
  onMoveMedia: PropTypes.func.isRequired,
  onOpenPreviewMediaDialog: PropTypes.func.isRequired
} : {};

export default PlaylistPanel;
//# sourceMappingURL=index.js.map
