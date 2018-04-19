import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _extends from "@babel/runtime/helpers/builtin/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/builtin/objectWithoutProperties";

/* global localStorage */
import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import compose from 'recompose/compose';
import toClass from 'recompose/toClass';
import withState from 'recompose/withState';
import mapProps from 'recompose/mapProps';
import HTML5Backend from 'react-dnd-html5-backend';
import Snackbar from "material-ui/es/Snackbar";
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
var MovedNotification = compose(withState('seen', 'setSeen', function () {
  try {
    // eslint-disable-next-line no-underscore-dangle
    return !localStorage._session || localStorage._session.length <= 30 || !!localStorage.wlkSawMoveMessage;
  } catch (err) {
    return false;
  }
}), mapProps(function (_ref) {
  var seen = _ref.seen,
      setSeen = _ref.setSeen,
      props = _objectWithoutProperties(_ref, ["seen", "setSeen"]);

  return _extends({}, props, {
    open: !seen,
    onClose: function onClose() {
      try {
        localStorage.wlkSawMoveMessage = '1';
      } catch (err) {// Nothing
      }

      setSeen(true);
    }
  });
}))(Snackbar);

var _ref3 =
/*#__PURE__*/
_jsx("div", {
  className: "AppRow AppRow--top"
}, void 0, _jsx(HeaderBar, {
  className: "App-header",
  title: "\xFCWave"
}));

var _ref4 =
/*#__PURE__*/
_jsx(ErrorArea, {});

var _ref5 =
/*#__PURE__*/
_jsx(FooterBar, {
  className: "AppRow AppRow--bottom"
});

var _ref6 =
/*#__PURE__*/
_jsx("div", {
  className: "AppColumn AppColumn--right"
}, void 0, _jsx(SidePanels, {}));

var _ref7 =
/*#__PURE__*/
_jsx(Dialogs, {});

var _ref8 =
/*#__PURE__*/
_jsx(AddToPlaylistMenu, {});

var _ref9 =
/*#__PURE__*/
_jsx(DragLayer, {});

var _ref10 =
/*#__PURE__*/
_jsx(MovedNotification, {
  message: "WLK was recently updated! You will need to log in again, because of some security improvements that have been made."
});

var App = function App(_ref2) {
  var activeOverlay = _ref2.activeOverlay,
      isConnected = _ref2.isConnected,
      settings = _ref2.settings,
      onCloseOverlay = _ref2.onCloseOverlay;
  return _jsx("div", {
    className: "App"
  }, void 0, _jsx("div", {
    className: "AppColumn AppColumn--left"
  }, void 0, _ref3, _jsx("div", {
    className: "AppRow AppRow--middle"
  }, void 0, _jsx(Video, {
    enabled: settings.videoEnabled,
    size: settings.videoSize,
    isMuted: settings.muted,
    volume: settings.volume
  }), _ref4, _jsx(ConnectionIndicator, {
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
  }, "settings")), _ref5), _ref6, _ref7, _ref8, _ref9, _ref10);
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
