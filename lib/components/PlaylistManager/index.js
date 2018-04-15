"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Content = _interopRequireDefault(require("../Overlay/Content"));

var _PlaylistManagerMenu = _interopRequireDefault(require("../../containers/PlaylistManagerMenu"));

var _PlaylistManagerPanel = _interopRequireDefault(require("../../containers/PlaylistManagerPanel"));

var _PlaylistImportManager = _interopRequireDefault(require("../../containers/PlaylistImportManager"));

var _SearchResultsPanel = _interopRequireDefault(require("../../containers/SearchResultsPanel"));

var _Header = _interopRequireDefault(require("./Header"));

var _Empty = _interopRequireDefault(require("./Panel/Empty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "PlaylistPanel"
}, void 0, (0, _jsx2.default)(_PlaylistImportManager.default, {}));

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_SearchResultsPanel.default, {});

var _ref4 =
/*#__PURE__*/
(0, _jsx2.default)(_Empty.default, {});

var _ref5 =
/*#__PURE__*/
(0, _jsx2.default)(_PlaylistManagerMenu.default, {
  className: "PlaylistManager-menu"
});

var PlaylistManager = function PlaylistManager(_ref) {
  var className = _ref.className,
      selectedPlaylist = _ref.selectedPlaylist,
      showSearchResults = _ref.showSearchResults,
      showImportPanel = _ref.showImportPanel,
      onCloseOverlay = _ref.onCloseOverlay;
  var panel;

  if (showImportPanel) {
    panel = _ref2;
  } else if (showSearchResults) {
    panel = _ref3;
  } else if (selectedPlaylist) {
    // HACK Give this a key so it's remounted when you switch playlists.
    // This is because there is some statefulness down the tree, especially
    // in playlist filters and scroll position.
    // By forcing a remount using a key we throw away all state and keep it
    // consistent.
    // TODO To *actually* fix playlist filters bleeding across playlist lines,
    // we should reset the playlist filter state alone somehow when the
    // selected playlist changes.
    panel = (0, _jsx2.default)(_PlaylistManagerPanel.default, {}, selectedPlaylist._id);
  } else {
    panel = _ref4;
  }

  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('PlaylistManager', className)
  }, void 0, (0, _jsx2.default)(_Header.default, {
    className: "PlaylistManager-header AppRow AppRow--top",
    onCloseOverlay: onCloseOverlay
  }), (0, _jsx2.default)(_Content.default, {}, void 0, _ref5, (0, _jsx2.default)("div", {
    className: "PlaylistManager-panel"
  }, void 0, panel)));
};

PlaylistManager.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  selectedPlaylist: _propTypes.default.object,
  showSearchResults: _propTypes.default.bool.isRequired,
  showImportPanel: _propTypes.default.bool.isRequired,
  onCloseOverlay: _propTypes.default.func
} : {};
var _default = PlaylistManager; //# sourceMappingURL=index.js.map

exports.default = _default;
//# sourceMappingURL=index.js.map
