import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectedPlaylistSelector } from '../selectors/playlistSelectors';
import { showSearchResultsSelector } from '../selectors/searchSelectors';
import { showImportPanelSelector } from '../selectors/importSelectors';
import createLazyOverlay from '../components/LazyOverlay';
var mapStateToProps = createStructuredSelector({
  selectedPlaylist: selectedPlaylistSelector,
  showImportPanel: showImportPanelSelector,
  showSearchResults: showSearchResultsSelector
});
var enhance = connect(mapStateToProps);
var PlaylistManager = createLazyOverlay({
  loader: function loader() {
    return import('../components/PlaylistManager'
    /* webpackChunkName: "playlists" */
    );
  },
  title: function title(t) {
    return t('playlists.title');
  }
});
export default enhance(PlaylistManager);
//# sourceMappingURL=PlaylistManager.js.map
