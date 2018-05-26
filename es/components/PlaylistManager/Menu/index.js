import _jsx from "@babel/runtime/helpers/builtin/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import MenuList from "@material-ui/core/es/MenuList";
import PlaylistRow from './Row';
import PlaylistCreateRow from './NewPlaylist';
import SearchResultsRow from './SearchResultsRow';
import PlaylistImportRow from './PlaylistImportRow';

var PlaylistMenu = function PlaylistMenu(_ref) {
  var className = _ref.className,
      playlists = _ref.playlists,
      selected = _ref.selected,
      searchQuery = _ref.searchQuery,
      showSearchResults = _ref.showSearchResults,
      searchResults = _ref.searchResults,
      onCreatePlaylist = _ref.onCreatePlaylist,
      onSelectPlaylist = _ref.onSelectPlaylist,
      onSelectSearchResults = _ref.onSelectSearchResults,
      onCloseSearchResults = _ref.onCloseSearchResults,
      onAddToPlaylist = _ref.onAddToPlaylist,
      showImportPanel = _ref.showImportPanel,
      onShowImportPanel = _ref.onShowImportPanel;
  var searchIsSelected = showSearchResults ? 'is-selected' : '';
  var importIsSelected = showImportPanel ? 'is-selected' : '';
  var isSelectingPlaylist = selected && !showSearchResults && !showImportPanel;
  return _jsx(MenuList, {
    className: cx('PlaylistMenu', className),
    disablePadding: true
  }, void 0, _jsx(PlaylistCreateRow, {
    className: "PlaylistMenu-row",
    onCreatePlaylist: onCreatePlaylist
  }), searchQuery && _jsx(SearchResultsRow, {
    className: cx('PlaylistMenu-row', searchIsSelected),
    query: searchQuery,
    size: searchResults,
    onClick: onSelectSearchResults,
    onClose: onCloseSearchResults
  }), playlists.map(function (pl) {
    return _jsx(PlaylistRow, {
      className: "PlaylistMenu-row",
      playlist: pl,
      selected: isSelectingPlaylist && selected._id === pl._id,
      onClick: function onClick() {
        return onSelectPlaylist(pl._id);
      },
      onAddToPlaylist: onAddToPlaylist
    }, pl._id);
  }), _jsx(PlaylistImportRow, {
    className: cx('PlaylistMenu-row', importIsSelected),
    onClick: onShowImportPanel
  }));
};

PlaylistMenu.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  playlists: PropTypes.arrayOf(PropTypes.object).isRequired,
  selected: PropTypes.object,
  showSearchResults: PropTypes.bool.isRequired,
  showImportPanel: PropTypes.bool.isRequired,
  searchQuery: PropTypes.string,
  searchResults: PropTypes.number,
  onCreatePlaylist: PropTypes.func.isRequired,
  onSelectPlaylist: PropTypes.func.isRequired,
  onSelectSearchResults: PropTypes.func.isRequired,
  onCloseSearchResults: PropTypes.func.isRequired,
  onAddToPlaylist: PropTypes.func.isRequired,
  onShowImportPanel: PropTypes.func.isRequired
} : {};
export default PlaylistMenu;
//# sourceMappingURL=index.js.map
