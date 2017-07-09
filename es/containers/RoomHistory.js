import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import nest from 'recompose/nest';
import withProps from 'recompose/withProps';
import { openPreviewMediaDialog } from '../actions/DialogActionCreators';
import { addMediaMenu } from '../actions/PlaylistActionCreators';
import { roomHistoryWithVotesSelector } from '../selectors/roomHistorySelectors';
import Overlay from '../components/Overlay';
import RoomHistory from '../components/RoomHistory';

var selectionOrOne = function selectionOrOne(media, selection) {
  // History entries store the played media on their `.media` property
  if (selection.isSelected(media)) {
    return selection.get().map(function (item) {
      return item.media;
    });
  }
  return [media.media];
};

var mapStateToProps = createStructuredSelector({
  media: roomHistoryWithVotesSelector
});

var onOpenAddMediaMenu = function onOpenAddMediaMenu(position, media, selection) {
  return addMediaMenu(selectionOrOne(media, selection), position);
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onOpenAddMediaMenu: onOpenAddMediaMenu,
    onOpenPreviewMediaDialog: openPreviewMediaDialog
  }, dispatch);
};

var OverlayFromTop = withProps({ direction: 'top' })(Overlay);
export default connect(mapStateToProps, mapDispatchToProps)(nest(OverlayFromTop, RoomHistory));
//# sourceMappingURL=RoomHistory.js.map
