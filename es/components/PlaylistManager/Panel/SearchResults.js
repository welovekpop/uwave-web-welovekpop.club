import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { CircularProgress } from 'material-ui/es/Progress';
import { IDLE, LOADING, LOADED } from '../../../constants/LoadingStates';
import MediaList from '../../MediaList';
import AddToPlaylistAction from '../../MediaList/Actions/AddToPlaylist';

var _ref2 = _jsx('div', {
  className: 'PlaylistPanel-loading'
}, void 0, _jsx(CircularProgress, {
  size: '100%'
}));

var SearchResults = function SearchResults(_ref) {
  var t = _ref.t,
      className = _ref.className,
      query = _ref.query,
      results = _ref.results,
      loadingState = _ref.loadingState,
      onOpenAddMediaMenu = _ref.onOpenAddMediaMenu,
      onOpenPreviewMediaDialog = _ref.onOpenPreviewMediaDialog;

  var list = void 0;
  if (loadingState === LOADED) {
    list = _jsx(MediaList, {
      className: 'PlaylistPanel-media',
      media: results,
      onOpenPreviewMediaDialog: onOpenPreviewMediaDialog,
      makeActions: function makeActions(media, selection) {
        return _jsx(React.Fragment, {}, void 0, _jsx(AddToPlaylistAction, {
          onAdd: function onAdd(position) {
            return onOpenAddMediaMenu(position, media, selection);
          }
        }));
      }
    });
  } else {
    list = _ref2;
  }

  return _jsx('div', {
    className: cx('PlaylistPanel', 'SearchResults', className)
  }, void 0, _jsx('div', {
    className: 'SearchResults-query'
  }, void 0, t('playlists.search.results', { query: query })), list);
};

SearchResults.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  className: PropTypes.string,
  query: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.object),
  loadingState: PropTypes.oneOf([IDLE, LOADING, LOADED]).isRequired,
  onOpenAddMediaMenu: PropTypes.func.isRequired,
  onOpenPreviewMediaDialog: PropTypes.func.isRequired
} : {};

export default translate()(SearchResults);
//# sourceMappingURL=SearchResults.js.map
