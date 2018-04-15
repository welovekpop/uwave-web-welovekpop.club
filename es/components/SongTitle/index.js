import _jsx from "@babel/runtime/helpers/builtin/jsx";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';

var _ref2 =
/*#__PURE__*/
_jsx("span", {
  className: "SongTitle-separator"
}, void 0, " \u2013 ");

var SongTitle = function SongTitle(_ref) {
  var className = _ref.className,
      artist = _ref.artist,
      title = _ref.title,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size;
  return _jsx("div", {
    className: cx('SongTitle', "SongTitle--" + size, className),
    title: artist + " \u2013 " + title
  }, void 0, _jsx("span", {
    className: "SongTitle-artist"
  }, void 0, artist), _ref2, _jsx("span", {
    className: "SongTitle-title"
  }, void 0, title));
};

SongTitle.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  size: PropTypes.string
} : {};
export default pure(SongTitle);
//# sourceMappingURL=index.js.map
