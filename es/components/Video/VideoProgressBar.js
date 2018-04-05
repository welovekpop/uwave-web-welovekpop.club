import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import { LinearProgress } from 'material-ui/es/Progress';

var VideoProgressBar = function VideoProgressBar(_ref) {
  var media = _ref.media,
      seek = _ref.seek;
  return _jsx('div', {
    className: 'Video-overlay Video-progress'
  }, void 0, _jsx(LinearProgress, {
    variant: 'determinate',
    color: 'primary',
    value: (seek - media.start) / (media.end - media.start) * 100
  }));
};

VideoProgressBar.propTypes = process.env.NODE_ENV !== "production" ? {
  media: PropTypes.shape({
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired
  }).isRequired,
  seek: PropTypes.number.isRequired
} : {};

export default VideoProgressBar;
//# sourceMappingURL=VideoProgressBar.js.map
