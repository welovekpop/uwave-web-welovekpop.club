import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import MediaList from '../MediaList';

var PlaylistPanel = function PlaylistPanel(_ref) {
  var items = _ref.items;
  return _jsx("div", {
    className: "PlaylistPanel"
  }, void 0, _jsx(MediaList, {
    className: "PlaylistPanel-media",
    media: items
  }));
};

PlaylistPanel.propTypes = process.env.NODE_ENV !== "production" ? {
  items: PropTypes.array.isRequired
} : {};
export default PlaylistPanel;
//# sourceMappingURL=PlaylistPanel.js.map
