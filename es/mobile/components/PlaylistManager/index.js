import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import OverlayHeader from '../../../components/Overlay/Header';
import OverlayContent from '../../../components/Overlay/Content';
import PlaylistPanel from './PlaylistPanel';

var PlaylistManager = function PlaylistManager(_ref) {
  var selectedPlaylist = _ref.selectedPlaylist,
      selectedItems = _ref.selectedItems,
      onCloseOverlay = _ref.onCloseOverlay;
  return _jsx('div', {
    className: 'PlaylistManager'
  }, void 0, _jsx(OverlayHeader, {
    className: 'PlaylistHeader',
    title: selectedPlaylist.name,
    onCloseOverlay: onCloseOverlay
  }), _jsx(OverlayContent, {}, void 0, _jsx(PlaylistPanel, {
    items: selectedItems
  })));
};

PlaylistManager.propTypes = process.env.NODE_ENV !== "production" ? {
  selectedPlaylist: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  selectedItems: PropTypes.array.isRequired,
  onCloseOverlay: PropTypes.func.isRequired
} : {};

export default PlaylistManager;
//# sourceMappingURL=index.js.map
