'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _nest = require('recompose/nest');

var _nest2 = _interopRequireDefault(_nest);

var _playlistSelectors = require('../../selectors/playlistSelectors');

var _searchSelectors = require('../../selectors/searchSelectors');

var _importSelectors = require('../../selectors/importSelectors');

var _Overlay = require('../../components/Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _PlaylistManager = require('../components/PlaylistManager');

var _PlaylistManager2 = _interopRequireDefault(_PlaylistManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  selectedPlaylist: _playlistSelectors.selectedPlaylistSelector,
  selectedItems: _playlistSelectors.filteredSelectedPlaylistItemsSelector,
  showImportPanel: _importSelectors.showImportPanelSelector,
  showSearchResults: _searchSelectors.showSearchResultsSelector
});

exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _nest2.default)(_Overlay2.default, _PlaylistManager2.default));
//# sourceMappingURL=PlaylistManager.js.map
//# sourceMappingURL=PlaylistManager.js.map
