import compose from 'recompose/compose';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import timed from '../../utils/timed';
import { openFavoriteMenu, doUpvote, doDownvote } from '../../actions/VoteActionCreators';
import { historyIDSelector, mediaSelector, mobilePlaybackVolumeSelector, timeElapsedSelector } from '../../selectors/boothSelectors';
import { currentVoteStatsSelector } from '../../selectors/voteSelectors';
import Video from '../components/Video';
var mapStateToProps = createStructuredSelector({
  historyID: historyIDSelector,
  media: mediaSelector,
  seek: timeElapsedSelector,
  volume: mobilePlaybackVolumeSelector,
  voteStats: currentVoteStatsSelector
});
var mapDispatchToProps = {
  onFavorite: openFavoriteMenu,
  onUpvote: doUpvote,
  onDownvote: doDownvote
};
var enhance = compose(timed(), connect(mapStateToProps, mapDispatchToProps));
export default enhance(Video);
//# sourceMappingURL=Video.js.map
