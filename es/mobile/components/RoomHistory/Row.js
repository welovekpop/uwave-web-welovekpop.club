import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from "material-ui/es/Avatar";
import { ListItem, ListItemAvatar, ListItemText } from "material-ui/es/List";
import Votes from './Votes';

var wrapTitle = function wrapTitle(title) {
  return _jsx("span", {
    className: "MobileMediaRow-title"
  }, void 0, title);
};

var HistoryRow = function HistoryRow(_ref) {
  var media = _ref.media;
  return _jsx(ListItem, {
    className: "MobileMediaRow"
  }, void 0, _jsx(ListItemAvatar, {}, void 0, _jsx(Avatar, {
    src: media.media.thumbnail,
    style: {
      borderRadius: 0
    }
  })), _jsx(ListItemText, {
    primary: wrapTitle(media.media.title),
    secondary: media.media.artist
  }), React.createElement(Votes, media.stats));
};

HistoryRow.propTypes = process.env.NODE_ENV !== "production" ? {
  media: PropTypes.object
} : {};
export default HistoryRow;
//# sourceMappingURL=Row.js.map
