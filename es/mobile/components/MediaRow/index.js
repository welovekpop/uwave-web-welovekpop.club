import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText } from "material-ui/es/List";

var MediaRow = function MediaRow(_ref) {
  var media = _ref.media;
  return _jsx(ListItem, {}, void 0, _jsx(ListItemText, {
    primary: media.title,
    secondary: media.artist
  }));
};

MediaRow.propTypes = process.env.NODE_ENV !== "production" ? {
  media: PropTypes.object.isRequired
} : {};
export default MediaRow;
//# sourceMappingURL=index.js.map
