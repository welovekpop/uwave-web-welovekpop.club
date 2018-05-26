"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var _reselect = require("reselect");

var _playlistSelectors = require("../../selectors/playlistSelectors");

var _searchSelectors = require("../../selectors/searchSelectors");

var _importSelectors = require("../../selectors/importSelectors");

var _LazyOverlay = _interopRequireDefault(require("../../components/LazyOverlay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  selectedPlaylist: _playlistSelectors.selectedPlaylistSelector,
  selectedItems: _playlistSelectors.filteredSelectedPlaylistItemsSelector,
  showImportPanel: _importSelectors.showImportPanelSelector,
  showSearchResults: _searchSelectors.showSearchResultsSelector
});
var enhance = (0, _reactRedux.connect)(mapStateToProps);
var PlaylistManager = (0, _LazyOverlay.default)({
  loader: function loader() {
    return Promise.resolve().then(() => require('../components/PlaylistManager'));
  },
  title: function title(t) {
    return t('playlists.title');
  }
});

var _default = enhance(PlaylistManager);

exports.default = _default;
//# sourceMappingURL=PlaylistManager.js.map
