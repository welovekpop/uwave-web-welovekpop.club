'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MediaList = require('../../MediaList');

var _MediaList2 = _interopRequireDefault(_MediaList);

var _Loader = require('../../Loader');

var _Loader2 = _interopRequireDefault(_Loader);

var _Meta = require('./Meta');

var _Meta2 = _interopRequireDefault(_Meta);

var _Row = require('../../MediaList/Row');

var _Row2 = _interopRequireDefault(_Row);

var _PlaylistItemRow = require('./PlaylistItemRow');

var _PlaylistItemRow2 = _interopRequireDefault(_PlaylistItemRow);

var _AddToPlaylist = require('../../MediaList/Actions/AddToPlaylist');

var _AddToPlaylist2 = _interopRequireDefault(_AddToPlaylist);

var _RemoveFromPlaylist = require('../../MediaList/Actions/RemoveFromPlaylist');

var _RemoveFromPlaylist2 = _interopRequireDefault(_RemoveFromPlaylist);

var _EditMedia = require('../../MediaList/Actions/EditMedia');

var _EditMedia2 = _interopRequireDefault(_EditMedia);

var _MoveToFirst = require('../../MediaList/Actions/MoveToFirst');

var _MoveToFirst2 = _interopRequireDefault(_MoveToFirst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeActions = function makeActions(_ref) {
  var onOpenAddMediaMenu = _ref.onOpenAddMediaMenu,
      onMoveToFirst = _ref.onMoveToFirst,
      onEditMedia = _ref.onEditMedia,
      onRemoveFromPlaylist = _ref.onRemoveFromPlaylist,
      isFiltered = _ref.isFiltered;
  return function (media, selection, index) {
    return [(0, _jsx3.default)(_AddToPlaylist2.default, {
      onAdd: function onAdd(position) {
        return onOpenAddMediaMenu(position, media, selection);
      }
    }, 'add'),
    // Don't show the "move to first" action on the first item in the playlist.
    // If the playlist is filtered we don't know if the first item to show is
    // also the first in the playlist, so just show it always in that case.
    (index > 0 || isFiltered) && (0, _jsx3.default)(_MoveToFirst2.default, {
      onFirst: function onFirst() {
        return onMoveToFirst(media, selection);
      }
    }, 'first'), (0, _jsx3.default)(_EditMedia2.default, {
      onEdit: function onEdit() {
        return onEditMedia(media);
      }
    }, 'edit'), (0, _jsx3.default)(_RemoveFromPlaylist2.default, {
      onRemove: function onRemove() {
        return onRemoveFromPlaylist(media, selection);
      }
    }, 'remove')];
  };
};

var _ref2 = (0, _jsx3.default)('div', {
  className: 'PlaylistPanel-loading'
}, void 0, (0, _jsx3.default)(_Loader2.default, {
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
    list = (0, _jsx3.default)(_MediaList2.default, {
      className: 'PlaylistPanel-media',
      size: media.length,
      media: media,
      rowComponent: isFiltered ? _Row2.default : _PlaylistItemRow2.default,
      rowProps: { onMoveMedia: onMoveMedia },
      onOpenPreviewMediaDialog: onOpenPreviewMediaDialog,
      makeActions: makeActions(props),
      onRequestPage: onLoadPlaylistPage
    });
  }

  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('PlaylistPanel', className)
  }, void 0, (0, _jsx3.default)(_Meta2.default, {
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
  className: _propTypes2.default.string,
  playlist: _propTypes2.default.object.isRequired,
  media: _propTypes2.default.array.isRequired,
  loading: _propTypes2.default.bool.isRequired,
  isFiltered: _propTypes2.default.bool.isRequired,
  onShufflePlaylist: _propTypes2.default.func.isRequired,
  onActivatePlaylist: _propTypes2.default.func.isRequired,
  onRenamePlaylist: _propTypes2.default.func.isRequired,
  onDeletePlaylist: _propTypes2.default.func.isRequired,
  onLoadPlaylistPage: _propTypes2.default.func.isRequired,
  onFilterPlaylistItems: _propTypes2.default.func.isRequired,
  onNotDeletable: _propTypes2.default.func.isRequired,
  onMoveMedia: _propTypes2.default.func.isRequired,
  onOpenPreviewMediaDialog: _propTypes2.default.func.isRequired
} : {};

exports.default = PlaylistPanel;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
