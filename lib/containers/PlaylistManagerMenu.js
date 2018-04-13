"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reselect = require("reselect");

var _PlaylistActionCreators = require("../actions/PlaylistActionCreators");

var _ImportActionCreators = require("../actions/ImportActionCreators");

var _SearchActionCreators = require("../actions/SearchActionCreators");

var _playlistSelectors = require("../selectors/playlistSelectors");

var _searchSelectors = require("../selectors/searchSelectors");

var _importSelectors = require("../selectors/importSelectors");

var _Menu = _interopRequireDefault(require("../components/PlaylistManager/Menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  playlists: _playlistSelectors.playlistsSelector,
  selected: _playlistSelectors.selectedPlaylistSelector,
  searchQuery: _searchSelectors.searchQuerySelector,
  showSearchResults: _searchSelectors.showSearchResultsSelector,
  searchResults: _searchSelectors.searchResultsCountSelector,
  showImportPanel: _importSelectors.showImportPanelSelector
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    onAddToPlaylist: _PlaylistActionCreators.addMedia,
    onCreatePlaylist: _PlaylistActionCreators.createPlaylist,
    onSelectPlaylist: _PlaylistActionCreators.selectPlaylist,
    onSelectSearchResults: _SearchActionCreators.showSearchResults,
    onCloseSearchResults: _SearchActionCreators.deleteSearch,
    onShowImportPanel: _ImportActionCreators.showImportPanel
  }, dispatch);
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Menu.default); //# sourceMappingURL=PlaylistManagerMenu.js.map


exports.default = _default;
//# sourceMappingURL=PlaylistManagerMenu.js.map
