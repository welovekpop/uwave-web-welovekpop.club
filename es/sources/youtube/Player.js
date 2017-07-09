import _jsx from 'babel-runtime/helpers/jsx';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import YouTubePlayerEmbed from './PlayerEmbed';

var YouTubePlayer = function YouTubePlayer(_ref) {
  var active = _ref.active,
      className = _ref.className,
      enabled = _ref.enabled,
      mode = _ref.mode,
      media = _ref.media,
      seek = _ref.seek,
      volume = _ref.volume;

  var modeClass = 'src-youtube-Player--' + mode;

  // Wrapper span so the backdrop can be full-size…
  return _jsx('span', {
    hidden: !active
  }, void 0, _jsx('div', {
    className: cx('src-youtube-Player', modeClass, className)
  }, void 0, enabled && _jsx(YouTubePlayerEmbed, {
    media: media,
    active: active,
    seek: Math.round(seek),
    volume: volume,
    controllable: mode === 'preview'
  })));
};

YouTubePlayer.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  mode: PropTypes.oneOf(['small', 'large', 'preview']),
  active: PropTypes.bool.isRequired,
  enabled: PropTypes.bool,
  media: PropTypes.object,
  seek: PropTypes.number,
  volume: PropTypes.number
} : {};

export default YouTubePlayer;
//# sourceMappingURL=Player.js.map
