import _extends from 'babel-runtime/helpers/extends';
import _objectWithoutProperties from 'babel-runtime/helpers/objectWithoutProperties';
import React from 'react';
import PropTypes from 'prop-types';
import injectMediaSources from '../../utils/injectMediaSources';

var PreviewPlayer = function PreviewPlayer(_ref) {
  var media = _ref.media,
      _ref$seek = _ref.seek,
      seek = _ref$seek === undefined ? 0 : _ref$seek,
      getMediaSource = _ref.getMediaSource,
      props = _objectWithoutProperties(_ref, ['media', 'seek', 'getMediaSource']);

  var _getMediaSource = getMediaSource(media.sourceType),
      Player = _getMediaSource.Player;

  return React.createElement(Player, _extends({
    enabled: true,
    active: true,
    seek: seek,
    media: media
  }, props));
};

PreviewPlayer.propTypes = process.env.NODE_ENV !== "production" ? {
  media: PropTypes.object.isRequired,
  seek: PropTypes.number,
  getMediaSource: PropTypes.func.isRequired
} : {};

export default injectMediaSources()(PreviewPlayer);
//# sourceMappingURL=Player.js.map
