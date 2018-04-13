import compose from 'recompose/compose';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import timed from '../utils/timed';
import { enterFullscreen as onFullscreenEnter, exitFullscreen as onFullscreenExit } from '../actions/PlaybackActionCreators';
import { historyIDSelector, mediaSelector, playbackVolumeSelector, timeElapsedSelector } from '../selectors/boothSelectors';
import Video from '../components/Video';
var mapStateToProps = createStructuredSelector({
  historyID: historyIDSelector,
  media: mediaSelector,
  seek: timeElapsedSelector,
  volume: playbackVolumeSelector,
  isFullscreen: function isFullscreen(state) {
    return state.booth.isFullscreen;
  }
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onFullscreenEnter: onFullscreenEnter,
    onFullscreenExit: onFullscreenExit
  }, dispatch);
};

export default compose(timed(), connect(mapStateToProps, mapDispatchToProps))(Video);
//# sourceMappingURL=Video.js.map
