import _jsx from 'babel-runtime/helpers/jsx';
import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { translate } from 'react-i18next';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';
// State-related imports
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { videoSizeSelector } from '../../selectors/settingSelectors';
import { toggleVideoSize } from '../../actions/PlaybackActionCreators';

// Stolen from YouTube
var paths = {
  // Currently small, show "enlarge" icon:
  small: 'm 28,11 0,14 -20,0 0,-14 z m -18,2 16,0 0,10 -16,0 0,-10 z',
  // Currently large, show smaller icon: ("ensmall"?! 😂)
  large: 'm 26,13 0,10 -16,0 0,-10 z m -14,2 12,0 0,6 -12,0 0,-6 z'
};

var VideoSizeButton = function VideoSizeButton(_ref) {
  var t = _ref.t,
      videoSize = _ref.videoSize,
      onToggleVideoSize = _ref.onToggleVideoSize;
  return _jsx(IconButton, {
    onClick: onToggleVideoSize,
    tooltip: videoSize === 'large' ? t('settings.disableLargeVideo') : t('settings.enableLargeVideo'),
    tooltipPosition: 'bottom-center'
  }, void 0, _jsx(SvgIcon, {
    viewBox: '6 6 24 24'
  }, void 0, _jsx('path', {
    d: paths[videoSize],
    fillRule: 'evenodd'
  })));
};

VideoSizeButton.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  videoSize: PropTypes.oneOf(['small', 'large']).isRequired,
  onToggleVideoSize: PropTypes.func.isRequired
} : {};

var mapStateToProps = createStructuredSelector({
  videoSize: videoSizeSelector
});
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onToggleVideoSize: function onToggleVideoSize() {
      return dispatch(toggleVideoSize());
    }
  };
};

export default compose(translate(), connect(mapStateToProps, mapDispatchToProps))(VideoSizeButton);
//# sourceMappingURL=VideoSizeButton.js.map
