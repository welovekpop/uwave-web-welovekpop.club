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

var _PlaylistManagerMenu = require('../../containers/PlaylistManagerMenu');

var _PlaylistManagerMenu2 = _interopRequireDefault(_PlaylistManagerMenu);

var _PlaylistManagerPanel = require('../../containers/PlaylistManagerPanel');

var _PlaylistManagerPanel2 = _interopRequireDefault(_PlaylistManagerPanel);

var _PlaylistImportManager = require('../../containers/PlaylistImportManager');

var _PlaylistImportManager2 = _interopRequireDefault(_PlaylistImportManager);

var _SearchResultsPanel = require('../../containers/SearchResultsPanel');

var _SearchResultsPanel2 = _interopRequireDefault(_SearchResultsPanel);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Empty = require('./Panel/Empty');

var _Empty2 = _interopRequireDefault(_Empty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = (0, _jsx3.default)('div', {
  className: 'PlaylistPanel'
}, void 0, (0, _jsx3.default)(_PlaylistImportManager2.default, {}));

var _ref3 = (0, _jsx3.default)(_SearchResultsPanel2.default, {});

var _ref4 = (0, _jsx3.default)(_Empty2.default, {});

var _ref5 = (0, _jsx3.default)(_PlaylistManagerMenu2.default, {
  className: 'PlaylistManager-menu'
});

var PlaylistManager = function PlaylistManager(_ref) {
  var className = _ref.className,
      selectedPlaylist = _ref.selectedPlaylist,
      showSearchResults = _ref.showSearchResults,
      showImportPanel = _ref.showImportPanel,
      onCloseOverlay = _ref.onCloseOverlay;

  var panel = void 0;
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
    panel = (0, _jsx3.default)(_PlaylistManagerPanel2.default, {}, selectedPlaylist._id);
  } else {
    panel = _ref4;
  }

  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('PlaylistManager', className)
  }, void 0, (0, _jsx3.default)(_Header2.default, {
    className: 'PlaylistManager-header AppRow AppRow--top',
    onCloseOverlay: onCloseOverlay
  }), (0, _jsx3.default)('div', {
    className: 'AppRow AppRow--middle'
  }, void 0, _ref5, (0, _jsx3.default)('div', {
    className: 'PlaylistManager-panel'
  }, void 0, panel)));
};

PlaylistManager.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  selectedPlaylist: _propTypes2.default.object,
  showSearchResults: _propTypes2.default.bool.isRequired,
  showImportPanel: _propTypes2.default.bool.isRequired,
  onCloseOverlay: _propTypes2.default.func
} : {};

exports.default = PlaylistManager;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
