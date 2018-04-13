"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var _reselect = require("reselect");

var _nest = _interopRequireDefault(require("recompose/nest"));

var _playlistSelectors = require("../selectors/playlistSelectors");

var _searchSelectors = require("../selectors/searchSelectors");

var _importSelectors = require("../selectors/importSelectors");

var _Overlay = _interopRequireDefault(require("../components/Overlay"));

var _PlaylistManager = _interopRequireDefault(require("../components/PlaylistManager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  selectedPlaylist: _playlistSelectors.selectedPlaylistSelector,
  showImportPanel: _importSelectors.showImportPanelSelector,
  showSearchResults: _searchSelectors.showSearchResultsSelector
});

var _default = (0, _reactRedux.connect)(mapStateToProps)((0, _nest.default)(_Overlay.default, _PlaylistManager.default)); //# sourceMappingURL=PlaylistManager.js.map


exports.default = _default;
//# sourceMappingURL=PlaylistManager.js.map
