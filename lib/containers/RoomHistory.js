"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reselect = require("reselect");

var _withProps = _interopRequireDefault(require("recompose/withProps"));

var _DialogActionCreators = require("../actions/DialogActionCreators");

var _PlaylistActionCreators = require("../actions/PlaylistActionCreators");

var _roomHistorySelectors = require("../selectors/roomHistorySelectors");

var _Overlay = _interopRequireDefault(require("../components/Overlay"));

var _LazyOverlay = _interopRequireDefault(require("../components/LazyOverlay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectionOrOne = function selectionOrOne(media, selection) {
  // History entries store the played media on their `.media` property
  if (selection.isSelected(media)) {
    return selection.get().map(function (item) {
      return item.media;
    });
  }

  return [media.media];
};

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  media: _roomHistorySelectors.roomHistoryWithVotesSelector
});

var onOpenAddMediaMenu = function onOpenAddMediaMenu(position, media, selection) {
  return (0, _PlaylistActionCreators.addMediaMenu)(selectionOrOne(media, selection), position);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    onOpenAddMediaMenu: onOpenAddMediaMenu,
    onOpenPreviewMediaDialog: _DialogActionCreators.openPreviewMediaDialog
  }, dispatch);
};

var enhance = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps);
var RoomHistory = (0, _LazyOverlay.default)({
  loader: function loader() {
    return Promise.resolve().then(() => require('../components/RoomHistory'));
  },
  title: function title(t) {
    return t('history.title');
  },
  OverlayComponent: (0, _withProps.default)({
    direction: 'top'
  })(_Overlay.default)
});

var _default = enhance(RoomHistory);

exports.default = _default;
//# sourceMappingURL=RoomHistory.js.map
