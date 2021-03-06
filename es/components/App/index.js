import _jsx from "@babel/runtime/helpers/builtin/jsx";

/* global localStorage */
import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import compose from 'recompose/compose';
import toClass from 'recompose/toClass';
import HTML5Backend from 'react-dnd-html5-backend';
import FooterBar from '../../containers/FooterBar';
import HeaderBar from '../../containers/HeaderBar';
import Video from '../../containers/Video';
import ErrorArea from '../../containers/ErrorArea';
import Overlays from './Overlays';
import PlaylistManager from '../../containers/PlaylistManager';
import RoomHistory from '../../containers/RoomHistory';
import SettingsManager from '../../containers/SettingsManager';
import AdminProxy from '../AdminProxy';
import About from '../../containers/About';
import ConnectionIndicator from '../ConnectionIndicator';
import SidePanels from '../../containers/SidePanels';
import Dialogs from '../Dialogs';
import AddToPlaylistMenu from '../../containers/AddToPlaylistMenu';
import DragLayer from '../../containers/DragLayer';

var _ref2 =
/*#__PURE__*/
_jsx("div", {
  className: "AppRow AppRow--top"
}, void 0, _jsx(HeaderBar, {
  className: "App-header",
  title: "\xFCWave"
}));

var _ref3 =
/*#__PURE__*/
_jsx(ErrorArea, {});

var _ref4 =
/*#__PURE__*/
_jsx(FooterBar, {
  className: "AppRow AppRow--bottom"
});

var _ref5 =
/*#__PURE__*/
_jsx("div", {
  className: "AppColumn AppColumn--right"
}, void 0, _jsx(SidePanels, {}));

var _ref6 =
/*#__PURE__*/
_jsx(Dialogs, {});

var _ref7 =
/*#__PURE__*/
_jsx(AddToPlaylistMenu, {});

var _ref8 =
/*#__PURE__*/
_jsx(DragLayer, {});

var App = function App(_ref) {
  var activeOverlay = _ref.activeOverlay,
      isConnected = _ref.isConnected,
      settings = _ref.settings,
      onCloseOverlay = _ref.onCloseOverlay;
  return _jsx("div", {
    className: "App"
  }, void 0, _jsx("div", {
    className: "AppColumn AppColumn--left"
  }, void 0, _ref2, _jsx("div", {
    className: "AppRow AppRow--middle"
  }, void 0, _jsx(Video, {
    enabled: settings.videoEnabled,
    size: settings.videoSize,
    isMuted: settings.muted,
    volume: settings.volume
  }), _ref3, _jsx(ConnectionIndicator, {
    isConnected: isConnected
  })), _jsx(Overlays, {
    transitionName: "Overlay",
    active: activeOverlay
  }, void 0, _jsx(About, {
    onCloseOverlay: onCloseOverlay
  }, "about"), _jsx(AdminProxy, {
    onCloseOverlay: onCloseOverlay
  }, "admin"), _jsx(PlaylistManager, {
    onCloseOverlay: onCloseOverlay
  }, "playlistManager"), _jsx(RoomHistory, {
    onCloseOverlay: onCloseOverlay
  }, "roomHistory"), _jsx(SettingsManager, {
    onCloseOverlay: onCloseOverlay
  }, "settings")), _ref4), _ref5, _ref6, _ref7, _ref8);
};

App.propTypes = process.env.NODE_ENV !== "production" ? {
  activeOverlay: PropTypes.string,
  isConnected: PropTypes.bool.isRequired,
  settings: PropTypes.object.isRequired,
  onCloseOverlay: PropTypes.func.isRequired
} : {};
export default compose(DragDropContext(HTML5Backend), // DragDropContext needs to be able to set a ref on the component, so we can't
// use a stateless function directly.
toClass)(App);
//# sourceMappingURL=index.js.map
