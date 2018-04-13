import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import SongTitle from '../SongTitle';

var CurrentMedia = function CurrentMedia(_ref) {
  var t = _ref.t,
      className = _ref.className,
      media = _ref.media;
  return _jsx("div", {
    className: className
  }, void 0, media ? _jsx(SongTitle, {
    artist: media.artist,
    title: media.title
  }) : t('booth.empty'));
};

CurrentMedia.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  className: PropTypes.string,
  media: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
} : {};
export default translate()(CurrentMedia);
//# sourceMappingURL=CurrentMedia.js.map
