import onIdle from 'on-idle';
import PlaylistManager from '../containers/PlaylistManager';
import SettingsManager from '../containers/SettingsManager';
import RoomHistory from '../containers/RoomHistory';

function loaded() {
  return new Promise(function (resolve) {
    if (document.readyState === 'complete') {
      resolve();
    } else {
      window.addEventListener('load', resolve);
    }
  });
}

export default function preloadDesktop() {
  loaded().then(function () {
    onIdle(function () {
      PlaylistManager.preload();
      SettingsManager.preload();
      RoomHistory.preload();
    });
  });
}
//# sourceMappingURL=preloadDesktop.js.map
