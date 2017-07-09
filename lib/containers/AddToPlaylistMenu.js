'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _PlaylistActionCreators = require('../actions/PlaylistActionCreators');

var _VoteActionCreators = require('../actions/VoteActionCreators');

var _addToPlaylistMenuSelectors = require('../selectors/addToPlaylistMenuSelectors');

var _playlistSelectors = require('../selectors/playlistSelectors');

var _AddToPlaylistMenu = require('../components/AddToPlaylistMenu');

var _AddToPlaylistMenu2 = _interopRequireDefault(_AddToPlaylistMenu);

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

var _ref2 = (0, _jsx3.default)('span', {});

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

  return (0, _jsx3.default)(_AddToPlaylistMenu2.default, {
    open: isOpen,
    position: position,
    playlists: playlists,
    onClose: onClose,
    onCreatePlaylist: onCreatePlaylist,
    onSelect: onSelect
  });
};

AddToPlaylistMenuContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  isFavorite: _propTypes2.default.bool,
  isOpen: _propTypes2.default.bool,
  position: _propTypes2.default.shape({
    x: _propTypes2.default.number.isRequired,
    y: _propTypes2.default.number.isRequired
  }),
  playlists: _propTypes2.default.arrayOf(_propTypes2.default.object),

  media: _propTypes2.default.arrayOf(_propTypes2.default.object),
  historyID: _propTypes2.default.string,

  onClose: _propTypes2.default.func.isRequired,
  onCreatePlaylist: _propTypes2.default.func.isRequired,
  onAddMedia: _propTypes2.default.func.isRequired,
  onFavoriteMedia: _propTypes2.default.func.isRequired
} : {};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddToPlaylistMenuContainer);
//# sourceMappingURL=AddToPlaylistMenu.js.map
//# sourceMappingURL=AddToPlaylistMenu.js.map
