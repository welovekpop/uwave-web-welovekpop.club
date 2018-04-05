import { togglePlaylistManager } from '../../actions/OverlayActionCreators';
import { selectPlaylist } from '../../actions/PlaylistActionCreators';

// eslint-disable-next-line import/prefer-default-export
export function openPlaylist(playlistID) {
  return function (dispatch) {
    dispatch(togglePlaylistManager());
    dispatch(selectPlaylist(playlistID));
  };
}
//# sourceMappingURL=OverlayActionCreators.js.map
