"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Progress = require("material-ui/Progress");

var _MediaList = _interopRequireDefault(require("../../MediaList"));

var _Meta = _interopRequireDefault(require("./Meta"));

var _Row = _interopRequireDefault(require("../../MediaList/Row"));

var _PlaylistItemRow = _interopRequireDefault(require("./PlaylistItemRow"));

var _AddToPlaylist = _interopRequireDefault(require("../../MediaList/Actions/AddToPlaylist"));

var _RemoveFromPlaylist = _interopRequireDefault(require("../../MediaList/Actions/RemoveFromPlaylist"));

var _EditMedia = _interopRequireDefault(require("../../MediaList/Actions/EditMedia"));

var _MoveToFirst = _interopRequireDefault(require("../../MediaList/Actions/MoveToFirst"));

var _MoveToLast = _interopRequireDefault(require("../../MediaList/Actions/MoveToLast"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeActions = function makeActions(_ref) {
  var onOpenAddMediaMenu = _ref.onOpenAddMediaMenu,
      onMoveToFirst = _ref.onMoveToFirst,
      onMoveToLast = _ref.onMoveToLast,
      onEditMedia = _ref.onEditMedia,
      onRemoveFromPlaylist = _ref.onRemoveFromPlaylist,
      isFiltered = _ref.isFiltered;
  return function (media, selection, index) {
    return [(0, _jsx2.default)(_AddToPlaylist.default, {
      onAdd: function onAdd(position) {
        return onOpenAddMediaMenu(position, media, selection);
      }
    }, "add"), // Don't show the "move to first" action on the first item in the playlist.
    // If the playlist is filtered we don't know if the first item to show is
    // also the first in the playlist, so just show it always in that case.
    (index > 0 || isFiltered) && (0, _jsx2.default)(_MoveToFirst.default, {
      onFirst: function onFirst() {
        return onMoveToFirst(media, selection);
      }
    }, "first"), index === 0 && !isFiltered && (0, _jsx2.default)(_MoveToLast.default, {
      onLast: function onLast() {
        return onMoveToLast(media, selection);
      }
    }, "last"), (0, _jsx2.default)(_EditMedia.default, {
      onEdit: function onEdit() {
        return onEditMedia(media);
      }
    }, "edit"), (0, _jsx2.default)(_RemoveFromPlaylist.default, {
      onRemove: function onRemove() {
        return onRemoveFromPlaylist(media, selection);
      }
    }, "remove")];
  };
};

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "PlaylistPanel-loading"
}, void 0, (0, _jsx2.default)(_Progress.CircularProgress, {
  size: "100%"
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
  var list;

  if (loading) {
    list = _ref2;
  } else {
    list = (0, _jsx2.default)(_MediaList.default, {
      className: "PlaylistPanel-media",
      size: media.length,
      media: media,
      rowComponent: isFiltered ? _Row.default : _PlaylistItemRow.default,
      rowProps: {
        onMoveMedia: onMoveMedia
      },
      onOpenPreviewMediaDialog: onOpenPreviewMediaDialog,
      makeActions: makeActions(props),
      onRequestPage: onLoadPlaylistPage
    });
  }

  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('PlaylistPanel', className)
  }, void 0, (0, _jsx2.default)(_Meta.default, {
    className: "PlaylistPanel-meta",
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
  className: _propTypes.default.string,
  playlist: _propTypes.default.object.isRequired,
  media: _propTypes.default.array.isRequired,
  loading: _propTypes.default.bool.isRequired,
  isFiltered: _propTypes.default.bool.isRequired,
  onShufflePlaylist: _propTypes.default.func.isRequired,
  onActivatePlaylist: _propTypes.default.func.isRequired,
  onRenamePlaylist: _propTypes.default.func.isRequired,
  onDeletePlaylist: _propTypes.default.func.isRequired,
  onLoadPlaylistPage: _propTypes.default.func.isRequired,
  onFilterPlaylistItems: _propTypes.default.func.isRequired,
  onNotDeletable: _propTypes.default.func.isRequired,
  onMoveMedia: _propTypes.default.func.isRequired,
  onOpenPreviewMediaDialog: _propTypes.default.func.isRequired
} : {};
var _default = PlaylistPanel; //# sourceMappingURL=index.js.map

exports.default = _default;
//# sourceMappingURL=index.js.map
