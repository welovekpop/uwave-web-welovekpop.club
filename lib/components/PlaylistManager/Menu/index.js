"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Menu = require("material-ui/Menu");

var _Row = _interopRequireDefault(require("./Row"));

var _NewPlaylist = _interopRequireDefault(require("./NewPlaylist"));

var _SearchResultsRow = _interopRequireDefault(require("./SearchResultsRow"));

var _PlaylistImportRow = _interopRequireDefault(require("./PlaylistImportRow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return (0, _jsx2.default)(_Menu.MenuList, {
    className: (0, _classnames.default)('PlaylistMenu', className)
  }, void 0, (0, _jsx2.default)(_NewPlaylist.default, {
    className: "PlaylistMenu-row",
    onCreatePlaylist: onCreatePlaylist
  }), searchQuery && (0, _jsx2.default)(_SearchResultsRow.default, {
    className: (0, _classnames.default)('PlaylistMenu-row', searchIsSelected),
    query: searchQuery,
    size: searchResults,
    onClick: onSelectSearchResults,
    onClose: onCloseSearchResults
  }), playlists.map(function (pl) {
    return (0, _jsx2.default)(_Row.default, {
      className: "PlaylistMenu-row",
      playlist: pl,
      selected: isSelectingPlaylist && selected._id === pl._id,
      onClick: function onClick() {
        return onSelectPlaylist(pl._id);
      },
      onAddToPlaylist: onAddToPlaylist
    }, pl._id);
  }), (0, _jsx2.default)(_PlaylistImportRow.default, {
    className: (0, _classnames.default)('PlaylistMenu-row', importIsSelected),
    onClick: onShowImportPanel
  }));
};

PlaylistMenu.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  playlists: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  selected: _propTypes.default.object,
  showSearchResults: _propTypes.default.bool.isRequired,
  showImportPanel: _propTypes.default.bool.isRequired,
  searchQuery: _propTypes.default.string,
  searchResults: _propTypes.default.number,
  onCreatePlaylist: _propTypes.default.func.isRequired,
  onSelectPlaylist: _propTypes.default.func.isRequired,
  onSelectSearchResults: _propTypes.default.func.isRequired,
  onCloseSearchResults: _propTypes.default.func.isRequired,
  onAddToPlaylist: _propTypes.default.func.isRequired,
  onShowImportPanel: _propTypes.default.func.isRequired
} : {};
var _default = PlaylistMenu; //# sourceMappingURL=index.js.map

exports.default = _default;
//# sourceMappingURL=index.js.map
