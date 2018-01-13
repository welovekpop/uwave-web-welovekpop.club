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

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _NewPlaylist = require('./NewPlaylist');

var _NewPlaylist2 = _interopRequireDefault(_NewPlaylist);

var _SearchResultsRow = require('./SearchResultsRow');

var _SearchResultsRow2 = _interopRequireDefault(_SearchResultsRow);

var _PlaylistImportRow = require('./PlaylistImportRow');

var _PlaylistImportRow2 = _interopRequireDefault(_PlaylistImportRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(_ref) {
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
  return (0, _jsx3.default)('div', {
    role: 'menu',
    className: (0, _classnames2.default)('PlaylistMenu', className)
  }, void 0, (0, _jsx3.default)(_NewPlaylist2.default, {
    className: 'PlaylistMenu-row',
    onCreatePlaylist: onCreatePlaylist
  }), searchQuery && (0, _jsx3.default)(_SearchResultsRow2.default, {
    className: (0, _classnames2.default)('PlaylistMenu-row', searchIsSelected),
    query: searchQuery,
    size: searchResults,
    onClick: onSelectSearchResults,
    onClose: onCloseSearchResults
  }), playlists.map(function (pl) {
    return (0, _jsx3.default)(_Row2.default, {
      className: 'PlaylistMenu-row',
      playlist: pl,
      selected: isSelectingPlaylist && selected._id === pl._id,
      onClick: function onClick() {
        return onSelectPlaylist(pl._id);
      },
      onAddToPlaylist: onAddToPlaylist
    }, pl._id);
  }), (0, _jsx3.default)(_PlaylistImportRow2.default, {
    className: (0, _classnames2.default)('PlaylistMenu-row', importIsSelected),
    onClick: onShowImportPanel
  }));
};

Menu.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  playlists: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  selected: _propTypes2.default.object,
  showSearchResults: _propTypes2.default.bool.isRequired,
  showImportPanel: _propTypes2.default.bool.isRequired,
  searchQuery: _propTypes2.default.string,
  searchResults: _propTypes2.default.number,
  onCreatePlaylist: _propTypes2.default.func.isRequired,
  onSelectPlaylist: _propTypes2.default.func.isRequired,
  onSelectSearchResults: _propTypes2.default.func.isRequired,
  onCloseSearchResults: _propTypes2.default.func.isRequired,
  onAddToPlaylist: _propTypes2.default.func.isRequired,
  onShowImportPanel: _propTypes2.default.func.isRequired
} : {};

exports.default = Menu;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
