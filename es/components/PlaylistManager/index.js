import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import OverlayContent from '../Overlay/Content';
import PlaylistMenu from '../../containers/PlaylistManagerMenu';
import PlaylistPanel from '../../containers/PlaylistManagerPanel';
import PlaylistImport from '../../containers/PlaylistImportManager';
import SearchResults from '../../containers/SearchResultsPanel';
import PlaylistHeader from './Header';
import PlaylistPanelEmpty from './Panel/Empty';

var _ref2 = _jsx('div', {
  className: 'PlaylistPanel'
}, void 0, _jsx(PlaylistImport, {}));

var _ref3 = _jsx(SearchResults, {});

var _ref4 = _jsx(PlaylistPanelEmpty, {});

var _ref5 = _jsx(PlaylistMenu, {
  className: 'PlaylistManager-menu'
});

var PlaylistManager = function PlaylistManager(_ref) {
  var className = _ref.className,
      selectedPlaylist = _ref.selectedPlaylist,
      showSearchResults = _ref.showSearchResults,
      showImportPanel = _ref.showImportPanel,
      onCloseOverlay = _ref.onCloseOverlay;

  var panel = void 0;
  if (showImportPanel) {
    panel = _ref2;
  } else if (showSearchResults) {
    panel = _ref3;
  } else if (selectedPlaylist) {
    // HACK Give this a key so it's remounted when you switch playlists.
    // This is because there is some statefulness down the tree, especially
    // in playlist filters and scroll position.
    // By forcing a remount using a key we throw away all state and keep it
    // consistent.
    // TODO To *actually* fix playlist filters bleeding across playlist lines,
    // we should reset the playlist filter state alone somehow when the
    // selected playlist changes.
    panel = _jsx(PlaylistPanel, {}, selectedPlaylist._id);
  } else {
    panel = _ref4;
  }

  return _jsx('div', {
    className: cx('PlaylistManager', className)
  }, void 0, _jsx(PlaylistHeader, {
    className: 'PlaylistManager-header AppRow AppRow--top',
    onCloseOverlay: onCloseOverlay
  }), _jsx(OverlayContent, {}, void 0, _ref5, _jsx('div', {
    className: 'PlaylistManager-panel'
  }, void 0, panel)));
};

PlaylistManager.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  selectedPlaylist: PropTypes.object,
  showSearchResults: PropTypes.bool.isRequired,
  showImportPanel: PropTypes.bool.isRequired,
  onCloseOverlay: PropTypes.func
} : {};

export default PlaylistManager;
//# sourceMappingURL=index.js.map
