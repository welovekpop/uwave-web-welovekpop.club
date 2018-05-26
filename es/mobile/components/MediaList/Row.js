import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from "@material-ui/core/es/Avatar";
import ListItem from "@material-ui/core/es/ListItem";
import ListItemText from "@material-ui/core/es/ListItemText";

var MediaRow = function MediaRow(_ref) {
  var media = _ref.media;
  return _jsx(ListItem, {
    className: "MobileMediaRow"
  }, void 0, _jsx(Avatar, {
    src: media.thumbnail,
    style: {
      borderRadius: 0
    }
  }), _jsx(ListItemText, {
    primary: media.title,
    secondary: media.artist
  }));
};

MediaRow.propTypes = process.env.NODE_ENV !== "production" ? {
  media: PropTypes.object
} : {};
export default MediaRow;
//# sourceMappingURL=Row.js.map
