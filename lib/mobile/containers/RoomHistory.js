'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _nest = require('recompose/nest');

var _nest2 = _interopRequireDefault(_nest);

var _withProps = require('recompose/withProps');

var _withProps2 = _interopRequireDefault(_withProps);

var _DialogActionCreators = require('../../actions/DialogActionCreators');

var _PlaylistActionCreators = require('../../actions/PlaylistActionCreators');

var _roomHistorySelectors = require('../../selectors/roomHistorySelectors');

var _Overlay = require('../../components/Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _RoomHistory = require('../components/RoomHistory');

var _RoomHistory2 = _interopRequireDefault(_RoomHistory);

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

var OverlayFromTop = (0, _withProps2.default)({ direction: 'top' })(_Overlay2.default);
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _nest2.default)(OverlayFromTop, _RoomHistory2.default));
//# sourceMappingURL=RoomHistory.js.map
//# sourceMappingURL=RoomHistory.js.map
