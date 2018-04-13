import _jsx from "@babel/runtime/helpers/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import toClass from 'recompose/toClass';
import withState from 'recompose/withState';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Snackbar from "material-ui/es/Snackbar";
import ErrorArea from '../../../containers/ErrorArea';
import PlaylistManager from '../../containers/PlaylistManager';
import RoomHistory from '../../containers/RoomHistory';
import SettingsManager from '../../../containers/SettingsManager';
import Dialogs from '../../../components/Dialogs';
import AddToPlaylistMenu from '../../../containers/AddToPlaylistMenu';
import DragLayer from '../../../containers/DragLayer';
import MainView from '../../containers/MainView';
import About from '../../containers/About';
import ServerList from '../../containers/ServerList';
import Overlays from './Overlays';
var enhance = compose(DragDropContext(HTML5Backend), toClass, withState('dismissedWarning', 'onDismiss', false));

var _ref2 =
/*#__PURE__*/
_jsx(MainView, {});

var _ref3 =
/*#__PURE__*/
_jsx(ErrorArea, {});

var _ref4 =
/*#__PURE__*/
_jsx(Dialogs, {});

var _ref5 =
/*#__PURE__*/
_jsx(AddToPlaylistMenu, {});

var _ref6 =
/*#__PURE__*/
_jsx(DragLayer, {});

var MobileApp = function MobileApp(_ref) {
  var settings = _ref.settings,
      activeOverlay = _ref.activeOverlay,
      onCloseOverlay = _ref.onCloseOverlay,
      dismissedWarning = _ref.dismissedWarning,
      onDismiss = _ref.onDismiss;
  return _jsx("div", {
    className: cx('App', 'MobileApp', 'is-mobile', settings.videoEnabled && 'MobileApp--videoEnabled')
  }, void 0, _ref2, _jsx(Snackbar, {
    open: !dismissedWarning,
    onClose: function onClose() {
      return onDismiss(true);
    },
    message: "Note: The mobile version is in beta and may crash regularly."
  }), _ref3, _jsx(Overlays, {
    transitionName: "Overlay",
    active: activeOverlay
  }, void 0, _jsx(About, {
    onCloseOverlay: onCloseOverlay
  }, "about"), _jsx(ServerList, {
    onCloseOverlay: onCloseOverlay
  }, "serverList"), _jsx(PlaylistManager, {
    onCloseOverlay: onCloseOverlay
  }, "playlistManager"), _jsx(RoomHistory, {
    onCloseOverlay: onCloseOverlay
  }, "roomHistory"), _jsx(SettingsManager, {
    onCloseOverlay: onCloseOverlay
  }, "settings")), _ref4, _ref5, _ref6);
};

MobileApp.propTypes = process.env.NODE_ENV !== "production" ? {
  settings: PropTypes.shape({
    videoEnabled: PropTypes.bool.isRequired
  }).isRequired,
  activeOverlay: PropTypes.string,
  onCloseOverlay: PropTypes.func.isRequired,
  // Mobile Beta warning
  dismissedWarning: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired
} : {};
export default enhance(MobileApp);
//# sourceMappingURL=index.js.map
