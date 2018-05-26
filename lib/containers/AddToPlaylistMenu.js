"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reselect = require("reselect");

var _PlaylistActionCreators = require("../actions/PlaylistActionCreators");

var _VoteActionCreators = require("../actions/VoteActionCreators");

var _addToPlaylistMenuSelectors = require("../selectors/addToPlaylistMenuSelectors");

var _playlistSelectors = require("../selectors/playlistSelectors");

var _AddToPlaylistMenu = _interopRequireDefault(require("../components/AddToPlaylistMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    onClose: _PlaylistActionCreators.closeAddMediaMenu,
    onCreatePlaylist: _PlaylistActionCreators.createPlaylist,
    onAddMedia: _PlaylistActionCreators.addMedia,
    onFavoriteMedia: _VoteActionCreators.favoriteMedia
  }, dispatch);
};

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  isFavorite: _addToPlaylistMenuSelectors.isFavoriteSelector,
  isOpen: _addToPlaylistMenuSelectors.isOpenSelector,
  position: _addToPlaylistMenuSelectors.positionSelector,
  playlists: _playlistSelectors.playlistsSelector,
  media: _addToPlaylistMenuSelectors.mediaSelector,
  historyID: _addToPlaylistMenuSelectors.historyIDSelector
});

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)("span", {});

var AddToPlaylistMenuContainer = function AddToPlaylistMenuContainer(_ref) {
  var isOpen = _ref.isOpen,
      position = _ref.position,
      isFavorite = _ref.isFavorite,
      playlists = _ref.playlists,
      media = _ref.media,
      historyID = _ref.historyID,
      onCreatePlaylist = _ref.onCreatePlaylist,
      onAddMedia = _ref.onAddMedia,
      onFavoriteMedia = _ref.onFavoriteMedia,
      onClose = _ref.onClose;

  if (!isOpen) {
    return _ref2;
  }

  var onSelect = function onSelect(playlist) {
    return isFavorite ? onFavoriteMedia(playlist, historyID) : onAddMedia(playlist, media);
  };

  return (0, _jsx2.default)(_AddToPlaylistMenu.default, {
    open: isOpen,
    position: position,
    playlists: playlists,
    onClose: onClose,
    onCreatePlaylist: onCreatePlaylist,
    onSelect: onSelect
  });
};

AddToPlaylistMenuContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  isFavorite: _propTypes.default.bool,
  isOpen: _propTypes.default.bool,
  position: _propTypes.default.shape({
    x: _propTypes.default.number.isRequired,
    y: _propTypes.default.number.isRequired
  }),
  playlists: _propTypes.default.arrayOf(_propTypes.default.object),
  media: _propTypes.default.arrayOf(_propTypes.default.object),
  historyID: _propTypes.default.string,
  onClose: _propTypes.default.func.isRequired,
  onCreatePlaylist: _propTypes.default.func.isRequired,
  onAddMedia: _propTypes.default.func.isRequired,
  onFavoriteMedia: _propTypes.default.func.isRequired
} : {};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddToPlaylistMenuContainer);

exports.default = _default;
//# sourceMappingURL=AddToPlaylistMenu.js.map
