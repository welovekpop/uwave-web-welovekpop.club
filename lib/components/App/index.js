'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDnd = require('react-dnd');

var _compose = require('recompose/compose');

var _compose2 = _interopRequireDefault(_compose);

var _toClass = require('recompose/toClass');

var _toClass2 = _interopRequireDefault(_toClass);

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _FooterBar = require('../../containers/FooterBar');

var _FooterBar2 = _interopRequireDefault(_FooterBar);

var _HeaderBar = require('../../containers/HeaderBar');

var _HeaderBar2 = _interopRequireDefault(_HeaderBar);

var _Video = require('../../containers/Video');

var _Video2 = _interopRequireDefault(_Video);

var _ErrorArea = require('../../containers/ErrorArea');

var _ErrorArea2 = _interopRequireDefault(_ErrorArea);

var _Overlays = require('./Overlays');

var _Overlays2 = _interopRequireDefault(_Overlays);

var _PlaylistManager = require('../../containers/PlaylistManager');

var _PlaylistManager2 = _interopRequireDefault(_PlaylistManager);

var _RoomHistory = require('../../containers/RoomHistory');

var _RoomHistory2 = _interopRequireDefault(_RoomHistory);

var _SettingsManager = require('../../containers/SettingsManager');

var _SettingsManager2 = _interopRequireDefault(_SettingsManager);

var _AdminProxy = require('../AdminProxy');

var _AdminProxy2 = _interopRequireDefault(_AdminProxy);

var _About = require('../../containers/About');

var _About2 = _interopRequireDefault(_About);

var _ConnectionIndicator = require('../ConnectionIndicator');

var _ConnectionIndicator2 = _interopRequireDefault(_ConnectionIndicator);

var _SidePanels = require('../../containers/SidePanels');

var _SidePanels2 = _interopRequireDefault(_SidePanels);

var _Dialogs = require('../Dialogs');

var _Dialogs2 = _interopRequireDefault(_Dialogs);

var _AddToPlaylistMenu = require('../../containers/AddToPlaylistMenu');

var _AddToPlaylistMenu2 = _interopRequireDefault(_AddToPlaylistMenu);

var _DragLayer = require('../../containers/DragLayer');

var _DragLayer2 = _interopRequireDefault(_DragLayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = (0, _jsx3.default)('div', {
  className: 'AppRow AppRow--top'
}, void 0, (0, _jsx3.default)(_HeaderBar2.default, {
  className: 'App-header',
  title: '\xFCWave'
}));

var _ref3 = (0, _jsx3.default)(_ErrorArea2.default, {});

var _ref4 = (0, _jsx3.default)(_FooterBar2.default, {
  className: 'AppRow AppRow--bottom'
});

var _ref5 = (0, _jsx3.default)('div', {
  className: 'AppColumn AppColumn--right'
}, void 0, (0, _jsx3.default)(_SidePanels2.default, {}));

var _ref6 = (0, _jsx3.default)(_Dialogs2.default, {});

var _ref7 = (0, _jsx3.default)(_AddToPlaylistMenu2.default, {});

var _ref8 = (0, _jsx3.default)(_DragLayer2.default, {});

var App = function App(_ref) {
  var activeOverlay = _ref.activeOverlay,
      isConnected = _ref.isConnected,
      settings = _ref.settings,
      hasAboutPage = _ref.hasAboutPage,
      onCloseOverlay = _ref.onCloseOverlay;
  return (0, _jsx3.default)('div', {
    className: 'App'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'AppColumn AppColumn--left'
  }, void 0, _ref2, (0, _jsx3.default)('div', {
    className: 'AppRow AppRow--middle'
  }, void 0, (0, _jsx3.default)(_Video2.default, {
    enabled: settings.videoEnabled,
    size: settings.videoSize,
    isMuted: settings.muted,
    volume: settings.volume
  }), _ref3, (0, _jsx3.default)(_ConnectionIndicator2.default, {
    isConnected: isConnected
  })), (0, _jsx3.default)(_Overlays2.default, {
    transitionName: 'Overlay',
    active: activeOverlay
  }, void 0, hasAboutPage && (0, _jsx3.default)(_About2.default, {
    onCloseOverlay: onCloseOverlay
  }, 'about'), (0, _jsx3.default)(_AdminProxy2.default, {
    onCloseOverlay: onCloseOverlay
  }, 'admin'), (0, _jsx3.default)(_PlaylistManager2.default, {
    onCloseOverlay: onCloseOverlay
  }, 'playlistManager'), (0, _jsx3.default)(_RoomHistory2.default, {
    onCloseOverlay: onCloseOverlay
  }, 'roomHistory'), (0, _jsx3.default)(_SettingsManager2.default, {
    onCloseOverlay: onCloseOverlay
  }, 'settings')), _ref4), _ref5, _ref6, _ref7, _ref8);
};

App.propTypes = process.env.NODE_ENV !== "production" ? {
  activeOverlay: _propTypes2.default.string,
  isConnected: _propTypes2.default.bool.isRequired,
  settings: _propTypes2.default.object.isRequired,
  hasAboutPage: _propTypes2.default.bool,

  onCloseOverlay: _propTypes2.default.func.isRequired
} : {};

exports.default = (0, _compose2.default)((0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default),
// DragDropContext needs to be able to set a ref on the component, so we can't
// use a stateless function directly.
_toClass2.default)(App);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
