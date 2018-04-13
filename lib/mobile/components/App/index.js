"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _toClass = _interopRequireDefault(require("recompose/toClass"));

var _withState = _interopRequireDefault(require("recompose/withState"));

var _reactDnd = require("react-dnd");

var _reactDndHtml5Backend = _interopRequireDefault(require("react-dnd-html5-backend"));

var _Snackbar = _interopRequireDefault(require("material-ui/Snackbar"));

var _ErrorArea = _interopRequireDefault(require("../../../containers/ErrorArea"));

var _PlaylistManager = _interopRequireDefault(require("../../containers/PlaylistManager"));

var _RoomHistory = _interopRequireDefault(require("../../containers/RoomHistory"));

var _SettingsManager = _interopRequireDefault(require("../../../containers/SettingsManager"));

var _Dialogs = _interopRequireDefault(require("../../../components/Dialogs"));

var _AddToPlaylistMenu = _interopRequireDefault(require("../../../containers/AddToPlaylistMenu"));

var _DragLayer = _interopRequireDefault(require("../../../containers/DragLayer"));

var _MainView = _interopRequireDefault(require("../../containers/MainView"));

var _About = _interopRequireDefault(require("../../containers/About"));

var _ServerList = _interopRequireDefault(require("../../containers/ServerList"));

var _Overlays = _interopRequireDefault(require("./Overlays"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _compose.default)((0, _reactDnd.DragDropContext)(_reactDndHtml5Backend.default), _toClass.default, (0, _withState.default)('dismissedWarning', 'onDismiss', false));

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_MainView.default, {});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_ErrorArea.default, {});

var _ref4 =
/*#__PURE__*/
(0, _jsx2.default)(_Dialogs.default, {});

var _ref5 =
/*#__PURE__*/
(0, _jsx2.default)(_AddToPlaylistMenu.default, {});

var _ref6 =
/*#__PURE__*/
(0, _jsx2.default)(_DragLayer.default, {});

var MobileApp = function MobileApp(_ref) {
  var settings = _ref.settings,
      activeOverlay = _ref.activeOverlay,
      onCloseOverlay = _ref.onCloseOverlay,
      dismissedWarning = _ref.dismissedWarning,
      onDismiss = _ref.onDismiss;
  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('App', 'MobileApp', 'is-mobile', settings.videoEnabled && 'MobileApp--videoEnabled')
  }, void 0, _ref2, (0, _jsx2.default)(_Snackbar.default, {
    open: !dismissedWarning,
    onClose: function onClose() {
      return onDismiss(true);
    },
    message: "Note: The mobile version is in beta and may crash regularly."
  }), _ref3, (0, _jsx2.default)(_Overlays.default, {
    transitionName: "Overlay",
    active: activeOverlay
  }, void 0, (0, _jsx2.default)(_About.default, {
    onCloseOverlay: onCloseOverlay
  }, "about"), (0, _jsx2.default)(_ServerList.default, {
    onCloseOverlay: onCloseOverlay
  }, "serverList"), (0, _jsx2.default)(_PlaylistManager.default, {
    onCloseOverlay: onCloseOverlay
  }, "playlistManager"), (0, _jsx2.default)(_RoomHistory.default, {
    onCloseOverlay: onCloseOverlay
  }, "roomHistory"), (0, _jsx2.default)(_SettingsManager.default, {
    onCloseOverlay: onCloseOverlay
  }, "settings")), _ref4, _ref5, _ref6);
};

MobileApp.propTypes = process.env.NODE_ENV !== "production" ? {
  settings: _propTypes.default.shape({
    videoEnabled: _propTypes.default.bool.isRequired
  }).isRequired,
  activeOverlay: _propTypes.default.string,
  onCloseOverlay: _propTypes.default.func.isRequired,
  // Mobile Beta warning
  dismissedWarning: _propTypes.default.bool.isRequired,
  onDismiss: _propTypes.default.func.isRequired
} : {};

var _default = enhance(MobileApp); //# sourceMappingURL=index.js.map


exports.default = _default;
//# sourceMappingURL=index.js.map
