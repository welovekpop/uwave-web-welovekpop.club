import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from 'material-ui/LinearProgress';
import muiThemeable from 'material-ui/styles/muiThemeable';

var VideoProgressBar = function VideoProgressBar(_ref) {
  var muiTheme = _ref.muiTheme,
      media = _ref.media,
      seek = _ref.seek;
  return _jsx('div', {
    className: 'Video-overlay Video-progress'
  }, void 0, _jsx(LinearProgress, {
    mode: 'determinate',
    color: muiTheme.palette.primary1Color,
    min: media.start,
    max: media.end,
    value: seek - media.start
  }));
};

VideoProgressBar.propTypes = process.env.NODE_ENV !== "production" ? {
  muiTheme: PropTypes.object.isRequired,
  media: PropTypes.shape({
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired
  }).isRequired,
  seek: PropTypes.number.isRequired
} : {};

export default muiThemeable()(VideoProgressBar);
//# sourceMappingURL=VideoProgressBar.js.map
