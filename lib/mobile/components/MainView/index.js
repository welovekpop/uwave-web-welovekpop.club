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

var _withHandlers = require('recompose/withHandlers');

var _withHandlers2 = _interopRequireDefault(_withHandlers);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('material-ui/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = require('material-ui/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _History = require('material-ui-icons/History');

var _History2 = _interopRequireDefault(_History);

var _Menu = require('material-ui-icons/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _SongTitle = require('../../../components/SongTitle');

var _SongTitle2 = _interopRequireDefault(_SongTitle);

var _Video = require('../../containers/Video');

var _Video2 = _interopRequireDefault(_Video);

var _Chat = require('../../containers/Chat');

var _Chat2 = _interopRequireDefault(_Chat);

var _DrawerMenu = require('../../containers/DrawerMenu');

var _DrawerMenu2 = _interopRequireDefault(_DrawerMenu);

var _UsersDrawer = require('../../containers/UsersDrawer');

var _UsersDrawer2 = _interopRequireDefault(_UsersDrawer);

var _VideoDisabledMessage = require('./VideoDisabledMessage');

var _VideoDisabledMessage2 = _interopRequireDefault(_VideoDisabledMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var waitlistIconStyle = {
  fontSize: '125%',
  textAlign: 'center'
};

var getWaitlistLabel = function getWaitlistLabel(size, position) {
  if (size > 0) {
    var posText = position !== -1 ? position + 1 + '/' + size : size;

    return posText;
  }
  return '0';
};

var enhance = (0, _withHandlers2.default)({
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

var _ref2 = (0, _jsx3.default)(_Menu2.default, {});

var _ref3 = (0, _jsx3.default)(_History2.default, {});

var _ref4 = (0, _jsx3.default)('div', {
  className: 'MobileApp-chat'
}, void 0, (0, _jsx3.default)(_Chat2.default, {}));

var _ref5 = (0, _jsx3.default)(_DrawerMenu2.default, {});

var _ref6 = (0, _jsx3.default)(_UsersDrawer2.default, {});

var MainView = function MainView(_ref) {
  var media = _ref.media,
      videoEnabled = _ref.videoEnabled,
      waitlistPosition = _ref.waitlistPosition,
      waitlistSize = _ref.waitlistSize,
      onOpenRoomHistory = _ref.onOpenRoomHistory,
      onOpenDrawer = _ref.onOpenDrawer,
      onOpenWaitlist = _ref.onOpenWaitlist,
      onEnableVideo = _ref.onEnableVideo;
  return (0, _jsx3.default)('div', {
    className: 'MainView'
  }, void 0, (0, _jsx3.default)(_AppBar2.default, {
    position: 'static',
    className: 'MainView-appBar'
  }, void 0, (0, _jsx3.default)(_Toolbar2.default, {}, void 0, (0, _jsx3.default)(_IconButton2.default, {
    'aria-label': 'Menu',
    onClick: onOpenDrawer
  }, void 0, _ref2), (0, _jsx3.default)(_Typography2.default, {
    variant: 'title',
    className: 'MainView-title'
  }, void 0, media ? (0, _jsx3.default)(_SongTitle2.default, {
    artist: media.artist,
    title: media.title
  }) : 'Nobody is DJing!'), (0, _jsx3.default)(_IconButton2.default, {
    onClick: onOpenRoomHistory
  }, void 0, _ref3), (0, _jsx3.default)(_IconButton2.default, {
    style: waitlistIconStyle,
    onClick: onOpenWaitlist
  }, void 0, getWaitlistLabel(waitlistSize, waitlistPosition)))), (0, _jsx3.default)('div', {
    className: 'MainView-content'
  }, void 0, (0, _jsx3.default)('div', {
    className: 'MobileApp-video'
  }, void 0, (0, _jsx3.default)(_Video2.default, {
    enabled: videoEnabled,
    size: 'large'
  }), !videoEnabled && (0, _jsx3.default)(_VideoDisabledMessage2.default, {
    onEnableVideo: onEnableVideo
  })), _ref4), _ref5, _ref6);
};

MainView.propTypes = process.env.NODE_ENV !== "production" ? {
  media: _propTypes2.default.object,
  videoEnabled: _propTypes2.default.bool.isRequired,
  waitlistPosition: _propTypes2.default.number.isRequired,
  waitlistSize: _propTypes2.default.number.isRequired,
  onOpenRoomHistory: _propTypes2.default.func.isRequired,
  onOpenWaitlist: _propTypes2.default.func.isRequired,
  onOpenDrawer: _propTypes2.default.func.isRequired,
  onEnableVideo: _propTypes2.default.func.isRequired
} : {};

exports.default = enhance(MainView);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
