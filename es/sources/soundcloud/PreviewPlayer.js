import _jsx from "@babel/runtime/helpers/builtin/jsx";
import React from 'react';
import PropTypes from 'prop-types';
import qsStringify from 'qs-stringify';

var createEmbedUrl = function createEmbedUrl(sourceID) {
  return "https://w.soundcloud.com/player/?" + qsStringify({
    url: "https://api.soundcloud.com/tracks/" + sourceID,
    color: '55B9FF',
    auto_play: true,
    hide_related: true,
    buying: false,
    liking: false,
    download: false,
    sharing: false,
    show_comments: false,
    visual: true
  });
};

var PreviewPlayer = function PreviewPlayer(_ref) {
  var media = _ref.media;
  return _jsx("iframe", {
    title: "SoundCloud Embed",
    width: "100%",
    height: "240",
    scrolling: "no",
    frameBorder: "no",
    src: createEmbedUrl(media.sourceID)
  });
};

PreviewPlayer.propTypes = process.env.NODE_ENV !== "production" ? {
  media: PropTypes.object.isRequired
} : {};
export default PreviewPlayer;
//# sourceMappingURL=PreviewPlayer.js.map
