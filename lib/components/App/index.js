"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDnd = require("react-dnd");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _toClass = _interopRequireDefault(require("recompose/toClass"));

var _reactDndHtml5Backend = _interopRequireDefault(require("react-dnd-html5-backend"));

var _FooterBar = _interopRequireDefault(require("../../containers/FooterBar"));

var _HeaderBar = _interopRequireDefault(require("../../containers/HeaderBar"));

var _Video = _interopRequireDefault(require("../../containers/Video"));

var _ErrorArea = _interopRequireDefault(require("../../containers/ErrorArea"));

var _Overlays = _interopRequireDefault(require("./Overlays"));

var _PlaylistManager = _interopRequireDefault(require("../../containers/PlaylistManager"));

var _RoomHistory = _interopRequireDefault(require("../../containers/RoomHistory"));

var _SettingsManager = _interopRequireDefault(require("../../containers/SettingsManager"));

var _AdminProxy = _interopRequireDefault(require("../AdminProxy"));

var _About = _interopRequireDefault(require("../../containers/About"));

var _ConnectionIndicator = _interopRequireDefault(require("../ConnectionIndicator"));

var _SidePanels = _interopRequireDefault(require("../../containers/SidePanels"));

var _Dialogs = _interopRequireDefault(require("../Dialogs"));

var _AddToPlaylistMenu = _interopRequireDefault(require("../../containers/AddToPlaylistMenu"));

var _DragLayer = _interopRequireDefault(require("../../containers/DragLayer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global localStorage */
var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "AppRow AppRow--top"
}, void 0, (0, _jsx2.default)(_HeaderBar.default, {
  className: "App-header",
  title: "\xFCWave"
}));

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_ErrorArea.default, {});

var _ref4 =
/*#__PURE__*/
(0, _jsx2.default)(_FooterBar.default, {
  className: "AppRow AppRow--bottom"
});

var _ref5 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "AppColumn AppColumn--right"
}, void 0, (0, _jsx2.default)(_SidePanels.default, {}));

var _ref6 =
/*#__PURE__*/
(0, _jsx2.default)(_Dialogs.default, {});

var _ref7 =
/*#__PURE__*/
(0, _jsx2.default)(_AddToPlaylistMenu.default, {});

var _ref8 =
/*#__PURE__*/
(0, _jsx2.default)(_DragLayer.default, {});

var App = function App(_ref) {
  var activeOverlay = _ref.activeOverlay,
      isConnected = _ref.isConnected,
      settings = _ref.settings,
      onCloseOverlay = _ref.onCloseOverlay;
  return (0, _jsx2.default)("div", {
    className: "App"
  }, void 0, (0, _jsx2.default)("div", {
    className: "AppColumn AppColumn--left"
  }, void 0, _ref2, (0, _jsx2.default)("div", {
    className: "AppRow AppRow--middle"
  }, void 0, (0, _jsx2.default)(_Video.default, {
    enabled: settings.videoEnabled,
    size: settings.videoSize,
    isMuted: settings.muted,
    volume: settings.volume
  }), _ref3, (0, _jsx2.default)(_ConnectionIndicator.default, {
    isConnected: isConnected
  })), (0, _jsx2.default)(_Overlays.default, {
    transitionName: "Overlay",
    active: activeOverlay
  }, void 0, (0, _jsx2.default)(_About.default, {
    onCloseOverlay: onCloseOverlay
  }, "about"), (0, _jsx2.default)(_AdminProxy.default, {
    onCloseOverlay: onCloseOverlay
  }, "admin"), (0, _jsx2.default)(_PlaylistManager.default, {
    onCloseOverlay: onCloseOverlay
  }, "playlistManager"), (0, _jsx2.default)(_RoomHistory.default, {
    onCloseOverlay: onCloseOverlay
  }, "roomHistory"), (0, _jsx2.default)(_SettingsManager.default, {
    onCloseOverlay: onCloseOverlay
  }, "settings")), _ref4), _ref5, _ref6, _ref7, _ref8);
};

App.propTypes = process.env.NODE_ENV !== "production" ? {
  activeOverlay: _propTypes.default.string,
  isConnected: _propTypes.default.bool.isRequired,
  settings: _propTypes.default.object.isRequired,
  onCloseOverlay: _propTypes.default.func.isRequired
} : {};

var _default = (0, _compose.default)((0, _reactDnd.DragDropContext)(_reactDndHtml5Backend.default), // DragDropContext needs to be able to set a ref on the component, so we can't
// use a stateless function directly.
_toClass.default)(App);

exports.default = _default;
//# sourceMappingURL=index.js.map
