import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { createPlaylist, addMedia, closeAddMediaMenu } from '../actions/PlaylistActionCreators';
import { favoriteMedia } from '../actions/VoteActionCreators';
import { isFavoriteSelector, isOpenSelector, positionSelector, mediaSelector, historyIDSelector } from '../selectors/addToPlaylistMenuSelectors';
import { playlistsSelector } from '../selectors/playlistSelectors';
import AddToPlaylistMenu from '../components/AddToPlaylistMenu';

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onClose: closeAddMediaMenu,
    onCreatePlaylist: createPlaylist,
    onAddMedia: addMedia,
    onFavoriteMedia: favoriteMedia
  }, dispatch);
};

var mapStateToProps = createStructuredSelector({
  isFavorite: isFavoriteSelector,
  isOpen: isOpenSelector,
  position: positionSelector,
  playlists: playlistsSelector,
  media: mediaSelector,
  historyID: historyIDSelector
});

var _ref2 =
/*#__PURE__*/
_jsx("span", {});

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

  return _jsx(AddToPlaylistMenu, {
    open: isOpen,
    position: position,
    playlists: playlists,
    onClose: onClose,
    onCreatePlaylist: onCreatePlaylist,
    onSelect: onSelect
  });
};

AddToPlaylistMenuContainer.propTypes = process.env.NODE_ENV !== "production" ? {
  isFavorite: PropTypes.bool,
  isOpen: PropTypes.bool,
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }),
  playlists: PropTypes.arrayOf(PropTypes.object),
  media: PropTypes.arrayOf(PropTypes.object),
  historyID: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onCreatePlaylist: PropTypes.func.isRequired,
  onAddMedia: PropTypes.func.isRequired,
  onFavoriteMedia: PropTypes.func.isRequired
} : {};
export default connect(mapStateToProps, mapDispatchToProps)(AddToPlaylistMenuContainer);
//# sourceMappingURL=AddToPlaylistMenu.js.map
