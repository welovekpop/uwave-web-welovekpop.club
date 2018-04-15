import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import withProps from 'recompose/withProps';
import { openPreviewMediaDialog } from '../actions/DialogActionCreators';
import { addMediaMenu } from '../actions/PlaylistActionCreators';
import { roomHistoryWithVotesSelector } from '../selectors/roomHistorySelectors';
import Overlay from '../components/Overlay';
import createLazyOverlay from '../components/LazyOverlay';

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

var enhance = connect(mapStateToProps, mapDispatchToProps);
var RoomHistory = createLazyOverlay({
  loader: function loader() {
    return import('../components/RoomHistory'
    /* webpackChunkName: "history" */
    );
  },
  title: function title(t) {
    return t('history.title');
  },
  OverlayComponent: withProps({
    direction: 'top'
  })(Overlay)
});
export default enhance(RoomHistory);
//# sourceMappingURL=RoomHistory.js.map
