import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import withHandlers from 'recompose/withHandlers';
import AppBar from "material-ui/es/AppBar";
import Toolbar from "material-ui/es/Toolbar";
import Typography from "material-ui/es/Typography";
import IconButton from "material-ui/es/IconButton";
import HistoryIcon from '@material-ui/icons/History';
import MenuIcon from '@material-ui/icons/Menu';
import SongTitle from '../../../components/SongTitle';
import Video from '../../containers/Video';
import Chat from '../../containers/Chat';
import DrawerMenu from '../../containers/DrawerMenu';
import UsersDrawer from '../../containers/UsersDrawer';
import VideoDisabledMessage from './VideoDisabledMessage';
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

var enhance = withHandlers({
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
_jsx(MenuIcon, {});

var _ref3 =
/*#__PURE__*/
_jsx(HistoryIcon, {});

var _ref4 =
/*#__PURE__*/
_jsx("div", {
  className: "MobileApp-chat"
}, void 0, _jsx(Chat, {}));

var _ref5 =
/*#__PURE__*/
_jsx(DrawerMenu, {});

var _ref6 =
/*#__PURE__*/
_jsx(UsersDrawer, {});

var MainView = function MainView(_ref) {
  var media = _ref.media,
      videoEnabled = _ref.videoEnabled,
      waitlistPosition = _ref.waitlistPosition,
      waitlistSize = _ref.waitlistSize,
      onOpenRoomHistory = _ref.onOpenRoomHistory,
      onOpenDrawer = _ref.onOpenDrawer,
      onOpenWaitlist = _ref.onOpenWaitlist,
      onEnableVideo = _ref.onEnableVideo;
  return _jsx("div", {
    className: "MainView"
  }, void 0, _jsx(AppBar, {
    position: "static",
    className: "MainView-appBar"
  }, void 0, _jsx(Toolbar, {}, void 0, _jsx(IconButton, {
    "aria-label": "Menu",
    onClick: onOpenDrawer
  }, void 0, _ref2), _jsx(Typography, {
    variant: "title",
    className: "MainView-title"
  }, void 0, media ? _jsx(SongTitle, {
    artist: media.artist,
    title: media.title
  }) : 'Nobody is DJing!'), _jsx(IconButton, {
    onClick: onOpenRoomHistory
  }, void 0, _ref3), _jsx(IconButton, {
    style: waitlistIconStyle,
    onClick: onOpenWaitlist
  }, void 0, getWaitlistLabel(waitlistSize, waitlistPosition)))), _jsx("div", {
    className: "MainView-content"
  }, void 0, _jsx("div", {
    className: "MobileApp-video"
  }, void 0, _jsx(Video, {
    enabled: videoEnabled,
    size: "large"
  }), !videoEnabled && _jsx(VideoDisabledMessage, {
    onEnableVideo: onEnableVideo
  })), _ref4), _ref5, _ref6);
};

MainView.propTypes = process.env.NODE_ENV !== "production" ? {
  media: PropTypes.object,
  videoEnabled: PropTypes.bool.isRequired,
  waitlistPosition: PropTypes.number.isRequired,
  waitlistSize: PropTypes.number.isRequired,
  onOpenRoomHistory: PropTypes.func.isRequired,
  onOpenWaitlist: PropTypes.func.isRequired,
  onOpenDrawer: PropTypes.func.isRequired,
  onEnableVideo: PropTypes.func.isRequired
} : {};
export default enhance(MainView);
//# sourceMappingURL=index.js.map
