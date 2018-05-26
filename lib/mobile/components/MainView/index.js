"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withHandlers = _interopRequireDefault(require("recompose/withHandlers"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _History = _interopRequireDefault(require("@material-ui/icons/History"));

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

var _SongTitle = _interopRequireDefault(require("../../../components/SongTitle"));

var _Video = _interopRequireDefault(require("../../containers/Video"));

var _Chat = _interopRequireDefault(require("../../containers/Chat"));

var _DrawerMenu = _interopRequireDefault(require("../../containers/DrawerMenu"));

var _UsersDrawer = _interopRequireDefault(require("../../containers/UsersDrawer"));

var _VideoDisabledMessage = _interopRequireDefault(require("./VideoDisabledMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var waitlistIconStyle = {
  fontSize: '125%',
  textAlign: 'center'
};

var getWaitlistLabel = function getWaitlistLabel(size, position) {
  if (size > 0) {
    var posText = position !== -1 ? position + 1 + "/" + size : size;
    return posText;
  }

  return '0';
};

var enhance = (0, _withHandlers.default)({
  // Prevent defaults for react-tap-event-plugin:
  // https://github.com/zilverline/react-tap-event-plugin/issues/77
  onOpenRoomHistory: function onOpenRoomHistory(props) {
    return function (event) {
      event.preventDefault();
      props.onOpenRoomHistory();
    };
  },
  onOpenDrawer: function onOpenDrawer(props) {
    return function (event) {
      event.preventDefault();
      props.onOpenDrawer();
    };
  },
  onOpenWaitlist: function onOpenWaitlist(props) {
    return function (event) {
      event.preventDefault();
      props.onOpenWaitlist();
    };
  }
});

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)(_Menu.default, {});

var _ref3 =
/*#__PURE__*/
(0, _jsx2.default)(_History.default, {});

var _ref4 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "MobileApp-chat"
}, void 0, (0, _jsx2.default)(_Chat.default, {}));

var _ref5 =
/*#__PURE__*/
(0, _jsx2.default)(_DrawerMenu.default, {});

var _ref6 =
/*#__PURE__*/
(0, _jsx2.default)(_UsersDrawer.default, {});

var MainView = function MainView(_ref) {
  var media = _ref.media,
      videoEnabled = _ref.videoEnabled,
      waitlistPosition = _ref.waitlistPosition,
      waitlistSize = _ref.waitlistSize,
      onOpenRoomHistory = _ref.onOpenRoomHistory,
      onOpenDrawer = _ref.onOpenDrawer,
      onOpenWaitlist = _ref.onOpenWaitlist,
      onEnableVideo = _ref.onEnableVideo;
  return (0, _jsx2.default)("div", {
    className: "MainView"
  }, void 0, (0, _jsx2.default)(_AppBar.default, {
    position: "static",
    className: "MainView-appBar"
  }, void 0, (0, _jsx2.default)(_Toolbar.default, {}, void 0, (0, _jsx2.default)(_IconButton.default, {
    "aria-label": "Menu",
    onClick: onOpenDrawer
  }, void 0, _ref2), (0, _jsx2.default)(_Typography.default, {
    variant: "title",
    className: "MainView-title"
  }, void 0, media ? (0, _jsx2.default)(_SongTitle.default, {
    artist: media.artist,
    title: media.title
  }) : 'Nobody is DJing!'), (0, _jsx2.default)(_IconButton.default, {
    onClick: onOpenRoomHistory
  }, void 0, _ref3), (0, _jsx2.default)(_IconButton.default, {
    style: waitlistIconStyle,
    onClick: onOpenWaitlist
  }, void 0, getWaitlistLabel(waitlistSize, waitlistPosition)))), (0, _jsx2.default)("div", {
    className: "MainView-content"
  }, void 0, (0, _jsx2.default)("div", {
    className: "MobileApp-video"
  }, void 0, (0, _jsx2.default)(_Video.default, {
    enabled: videoEnabled,
    size: "large"
  }), !videoEnabled && (0, _jsx2.default)(_VideoDisabledMessage.default, {
    onEnableVideo: onEnableVideo
  })), _ref4), _ref5, _ref6);
};

MainView.propTypes = process.env.NODE_ENV !== "production" ? {
  media: _propTypes.default.object,
  videoEnabled: _propTypes.default.bool.isRequired,
  waitlistPosition: _propTypes.default.number.isRequired,
  waitlistSize: _propTypes.default.number.isRequired,
  onOpenRoomHistory: _propTypes.default.func.isRequired,
  onOpenWaitlist: _propTypes.default.func.isRequired,
  onOpenDrawer: _propTypes.default.func.isRequired,
  onEnableVideo: _propTypes.default.func.isRequired
} : {};

var _default = enhance(MainView);

exports.default = _default;
//# sourceMappingURL=index.js.map
