import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';

var createEmbedUrl = function createEmbedUrl(sourceID) {
  return ('\n  https://w.soundcloud.com/player/\n  ?url=' + encodeURIComponent('https://api.soundcloud.com/tracks/' + sourceID) + '\n  &color=55B9FF\n  &auto_play=true\n  &hide_related=true\n  &buying=false\n  &liking=false\n  &download=false\n  &sharing=false\n  &show_comments=false\n  &visual=true\n').replace(/\s+/g, '');
};

var PreviewPlayer = function PreviewPlayer(_ref) {
  var media = _ref.media;
  return _jsx('iframe', {
    title: 'SoundCloud Embed',
    width: '100%',
    height: '240',
    scrolling: 'no',
    frameBorder: 'no',
    src: createEmbedUrl(media.sourceID)
  });
};

PreviewPlayer.propTypes = process.env.NODE_ENV !== "production" ? {
  media: PropTypes.object.isRequired
} : {};

export default PreviewPlayer;
//# sourceMappingURL=PreviewPlayer.js.map
