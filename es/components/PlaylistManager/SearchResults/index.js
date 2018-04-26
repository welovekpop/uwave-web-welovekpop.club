import _jsx from "@babel/runtime/helpers/builtin/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { IDLE, LOADING, LOADED } from '../../../constants/LoadingStates';
import NoSearchResults from './NoSearchResults';
import LoadingSearchResults from './LoadingSearchResults';
import SearchResultsList from './SearchResultsList';
var enhance = translate();

var _ref2 =
/*#__PURE__*/
_jsx(NoSearchResults, {});

var _ref3 =
/*#__PURE__*/
_jsx(LoadingSearchResults, {});

var SearchResultsPanel = function SearchResultsPanel(_ref) {
  var t = _ref.t,
      className = _ref.className,
      query = _ref.query,
      loadingState = _ref.loadingState,
      results = _ref.results,
      onOpenAddMediaMenu = _ref.onOpenAddMediaMenu,
      onOpenPreviewMediaDialog = _ref.onOpenPreviewMediaDialog;
  var list;

  if (loadingState === LOADED) {
    list = results.length > 0 ? _jsx(SearchResultsList, {
      results: results,
      onOpenPreviewMediaDialog: onOpenPreviewMediaDialog,
      onOpenAddMediaMenu: onOpenAddMediaMenu
    }) : _ref2;
  } else {
    list = _ref3;
  }

  return _jsx("div", {
    className: cx('PlaylistPanel', 'SearchResults', className)
  }, void 0, _jsx("div", {
    className: "SearchResults-query"
  }, void 0, t('playlists.search.results', {
    query: query
  })), list);
};

SearchResultsPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  className: PropTypes.string,
  query: PropTypes.string.isRequired,
  loadingState: PropTypes.oneOf([IDLE, LOADING, LOADED]).isRequired,
  results: PropTypes.arrayOf(PropTypes.object),
  onOpenAddMediaMenu: PropTypes.func.isRequired,
  onOpenPreviewMediaDialog: PropTypes.func.isRequired
} : {};
export default enhance(SearchResultsPanel);
//# sourceMappingURL=index.js.map
