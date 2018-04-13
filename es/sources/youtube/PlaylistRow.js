import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from "material-ui/es/IconButton";
import ImportIcon from '@material-ui/icons/PlaylistAdd';

var _ref2 =
/*#__PURE__*/
_jsx(ImportIcon, {});

var PlaylistRow = function PlaylistRow(_ref) {
  var className = _ref.className,
      playlist = _ref.playlist,
      onImport = _ref.onImport,
      attrs = _objectWithoutProperties(_ref, ["className", "playlist", "onImport"]);

  var thumbnail = _jsx("div", {
    className: "MediaListRow-thumb"
  }, void 0, _jsx("img", {
    className: "MediaListRow-image",
    src: playlist.thumbnail,
    alt: ""
  }, playlist.id));

  return React.createElement("div", _extends({
    className: cx('MediaListRow', 'src-youtube-PlaylistRow', className)
  }, attrs), thumbnail, _jsx("div", {
    className: "src-youtube-PlaylistRow-info",
    title: playlist.description
  }, void 0, _jsx("div", {
    className: "src-youtube-PlaylistRow-name"
  }, void 0, playlist.name), _jsx("div", {
    className: "src-youtube-PlaylistRow-size"
  }, void 0, "Items: ", playlist.size)), _jsx(IconButton, {
    className: "src-youtube-PlaylistRow-import",
    onClick: onImport
  }, void 0, _ref2));
};

PlaylistRow.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  playlist: PropTypes.object.isRequired,
  onImport: PropTypes.func.isRequired
} : {};
export default PlaylistRow;
//# sourceMappingURL=PlaylistRow.js.map
