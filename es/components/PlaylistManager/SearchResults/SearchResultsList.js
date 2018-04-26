import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import MediaList from '../../MediaList';
import AddToPlaylistAction from '../../MediaList/Actions/AddToPlaylist';

var makeActions = function makeActions(onOpenAddMediaMenu) {
  return function (media, selection) {
    return _jsx(React.Fragment, {}, void 0, _jsx(AddToPlaylistAction, {
      onAdd: function onAdd(position) {
        return onOpenAddMediaMenu(position, media, selection);
      }
    }));
  };
};

var SearchResultsList = function SearchResultsList(_ref) {
  var results = _ref.results,
      onOpenAddMediaMenu = _ref.onOpenAddMediaMenu,
      onOpenPreviewMediaDialog = _ref.onOpenPreviewMediaDialog;
  return _jsx(MediaList, {
    className: "PlaylistPanel-media",
    media: results,
    onOpenPreviewMediaDialog: onOpenPreviewMediaDialog,
    makeActions: makeActions(onOpenAddMediaMenu)
  });
};

SearchResultsList.propTypes = process.env.NODE_ENV !== "production" ? {
  results: PropTypes.array.isRequired,
  onOpenAddMediaMenu: PropTypes.func.isRequired,
  onOpenPreviewMediaDialog: PropTypes.func.isRequired
} : {};
export default SearchResultsList;
//# sourceMappingURL=SearchResultsList.js.map
