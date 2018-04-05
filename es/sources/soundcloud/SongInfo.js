import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import ArtistIcon from 'material-ui-icons/Headset';
import TitleIcon from 'material-ui-icons/MusicNote';

var iconStyles = {
  float: 'left',
  marginRight: 3
};

var _ref2 = _jsx(ArtistIcon, {
  style: iconStyles
});

var _ref3 = _jsx(TitleIcon, {
  style: iconStyles
});

var SongInfo = function SongInfo(_ref) {
  var artist = _ref.artist,
      title = _ref.title,
      artistUrl = _ref.artistUrl,
      trackUrl = _ref.trackUrl;
  return _jsx('div', {
    className: 'src-soundcloud-SongInfo'
  }, void 0, _jsx('a', {
    className: 'src-soundcloud-SongInfo-link src-soundcloud-SongInfo-link--artist',
    target: '_blank',
    rel: 'noopener noreferrer',
    href: artistUrl,
    title: artist
  }, void 0, _ref2, artist), _jsx('a', {
    className: 'src-soundcloud-SongInfo-link src-soundcloud-SongInfo-link--track',
    target: '_blank',
    rel: 'noopener noreferrer',
    href: trackUrl,
    title: title
  }, void 0, _ref3, title));
};

SongInfo.propTypes = process.env.NODE_ENV !== "production" ? {
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artistUrl: PropTypes.string.isRequired,
  trackUrl: PropTypes.string.isRequired
} : {};

export default SongInfo;
//# sourceMappingURL=SongInfo.js.map
