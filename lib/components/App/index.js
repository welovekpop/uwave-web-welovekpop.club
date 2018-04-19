"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDnd = require("react-dnd");

var _compose = _interopRequireDefault(require("recompose/compose"));

var _toClass = _interopRequireDefault(require("recompose/toClass"));

var _withState = _interopRequireDefault(require("recompose/withState"));

var _mapProps = _interopRequireDefault(require("recompose/mapProps"));

var _reactDndHtml5Backend = _interopRequireDefault(require("react-dnd-html5-backend"));

var _Snackbar = _interopRequireDefault(require("material-ui/Snackbar"));

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
var MovedNotification = (0, _compose.default)((0, _withState.default)('seen', 'setSeen', function () {
  try {
    // eslint-disable-next-line no-underscore-dangle
    return !localStorage._session || localStorage._session.length <= 30 || !!localStorage.wlkSawMoveMessage;
  } catch (err) {
    return false;
  }
}), (0, _mapProps.default)(function (_ref) {
  var seen = _ref.seen,
      setSeen = _ref.setSeen,
      props = (0, _objectWithoutProperties2.default)(_ref, ["seen", "setSeen"]);
  return (0, _extends2.default)({}, props, {
    open: !seen,
    onClose: function onClose() {
      try {
        localStorage.wlkSawMoveMessage = '1';
      } catch (err) {// Nothing
      }

      setSeen(true);
    }
  });
}))(_Snackbar.default);

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "AppRow AppRow--top"
}, void 0, (0, _jsx2.default)(_HeaderBar.default, {
  className: "App-header",
  title: "\xFCWave"
}));

var _ref4 =
/*#__PURE__*/
(0, _jsx2.default)(_ErrorArea.default, {});

var _ref5 =
/*#__PURE__*/
(0, _jsx2.default)(_FooterBar.default, {
  className: "AppRow AppRow--bottom"
});

var _ref6 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "AppColumn AppColumn--right"
}, void 0, (0, _jsx2.default)(_SidePanels.default, {}));

var _ref7 =
/*#__PURE__*/
(0, _jsx2.default)(_Dialogs.default, {});

var _ref8 =
/*#__PURE__*/
(0, _jsx2.default)(_AddToPlaylistMenu.default, {});

var _ref9 =
/*#__PURE__*/
(0, _jsx2.default)(_DragLayer.default, {});

var _ref10 =
/*#__PURE__*/
(0, _jsx2.default)(MovedNotification, {
  message: "WLK was recently updated! You will need to log in again, because of some security improvements that have been made."
});

var App = function App(_ref2) {
  var activeOverlay = _ref2.activeOverlay,
      isConnected = _ref2.isConnected,
      settings = _ref2.settings,
      onCloseOverlay = _ref2.onCloseOverlay;
  return (0, _jsx2.default)("div", {
    className: "App"
  }, void 0, (0, _jsx2.default)("div", {
    className: "AppColumn AppColumn--left"
  }, void 0, _ref3, (0, _jsx2.default)("div", {
    className: "AppRow AppRow--middle"
  }, void 0, (0, _jsx2.default)(_Video.default, {
    enabled: settings.videoEnabled,
    size: settings.videoSize,
    isMuted: settings.muted,
    volume: settings.volume
  }), _ref4, (0, _jsx2.default)(_ConnectionIndicator.default, {
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
  }, "settings")), _ref5), _ref6, _ref7, _ref8, _ref9, _ref10);
};

App.propTypes = process.env.NODE_ENV !== "production" ? {
  activeOverlay: _propTypes.default.string,
  isConnected: _propTypes.default.bool.isRequired,
  settings: _propTypes.default.object.isRequired,
  onCloseOverlay: _propTypes.default.func.isRequired
} : {};

var _default = (0, _compose.default)((0, _reactDnd.DragDropContext)(_reactDndHtml5Backend.default), // DragDropContext needs to be able to set a ref on the component, so we can't
// use a stateless function directly.
_toClass.default)(App); //# sourceMappingURL=index.js.map


exports.default = _default;
//# sourceMappingURL=index.js.map
