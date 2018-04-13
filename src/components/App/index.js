/* global localStorage */
import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import compose from 'recompose/compose';
import toClass from 'recompose/toClass';
import withState from 'recompose/withState';
import mapProps from 'recompose/mapProps';
import HTML5Backend from 'react-dnd-html5-backend';
import Snackbar from 'material-ui/Snackbar';

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

const MovedNotification = compose(
  withState('seen', 'setSeen', () => {
    try {
      // eslint-disable-next-line no-underscore-dangle
      return !localStorage._session || localStorage._session.length <= 30 ||
        !!localStorage.wlkSawMoveMessage;
    } catch (err) {
      return false;
    }
  }),
  mapProps(({ seen, setSeen, ...props }) => ({
    ...props,
    open: !seen,
    onClose: () => {
      try {
        localStorage.wlkSawMoveMessage = '1';
      } catch (err) {
        // Nothing
      }
      setSeen(true);
    },
  })),
)(Snackbar);

const App = ({
  activeOverlay,
  isConnected,
  settings,
  onCloseOverlay,
}) => (
  <div className="App">
    <div className="AppColumn AppColumn--left">
      <div className="AppRow AppRow--top">
        <HeaderBar
          className="App-header"
          title="üWave"
        />
      </div>
      <div className="AppRow AppRow--middle">
        <Video
          enabled={settings.videoEnabled}
          size={settings.videoSize}
          isMuted={settings.muted}
          volume={settings.volume}
        />
        <ErrorArea />
        <ConnectionIndicator isConnected={isConnected} />
      </div>
      <Overlays transitionName="Overlay" active={activeOverlay}>
        <About key="about" onCloseOverlay={onCloseOverlay} />
        <AdminProxy key="admin" onCloseOverlay={onCloseOverlay} />
        <PlaylistManager key="playlistManager" onCloseOverlay={onCloseOverlay} />
        <RoomHistory key="roomHistory" onCloseOverlay={onCloseOverlay} />
        <SettingsManager key="settings" onCloseOverlay={onCloseOverlay} />
      </Overlays>
      <FooterBar className="AppRow AppRow--bottom" />
    </div>

    <div className="AppColumn AppColumn--right">
      <SidePanels />
    </div>

    <Dialogs />

    <AddToPlaylistMenu />
    <DragLayer />
    <MovedNotification
      message="WLK was recently updated! You will need to log in again, because of some security improvements that have been made."
    />
  </div>
);

App.propTypes = {
  activeOverlay: PropTypes.string,
  isConnected: PropTypes.bool.isRequired,
  settings: PropTypes.object.isRequired,
  onCloseOverlay: PropTypes.func.isRequired,
};

export default compose(
  DragDropContext(HTML5Backend),
  // DragDropContext needs to be able to set a ref on the component, so we can't
  // use a stateless function directly.
  toClass,
)(App);
