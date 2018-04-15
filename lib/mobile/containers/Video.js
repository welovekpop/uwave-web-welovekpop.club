"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _compose = _interopRequireDefault(require("recompose/compose"));

var _reselect = require("reselect");

var _reactRedux = require("react-redux");

var _timed = _interopRequireDefault(require("../../utils/timed"));

var _VoteActionCreators = require("../../actions/VoteActionCreators");

var _boothSelectors = require("../../selectors/boothSelectors");

var _voteSelectors = require("../../selectors/voteSelectors");

var _Video = _interopRequireDefault(require("../components/Video"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  historyID: _boothSelectors.historyIDSelector,
  media: _boothSelectors.mediaSelector,
  seek: _boothSelectors.timeElapsedSelector,
  volume: _boothSelectors.playbackVolumeSelector,
  voteStats: _voteSelectors.currentVoteStatsSelector
});
var mapDispatchToProps = {
  onFavorite: _VoteActionCreators.openFavoriteMenu,
  onUpvote: _VoteActionCreators.doUpvote,
  onDownvote: _VoteActionCreators.doDownvote
};
var enhance = (0, _compose.default)((0, _timed.default)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps));

var _default = enhance(_Video.default); //# sourceMappingURL=Video.js.map


exports.default = _default;
//# sourceMappingURL=Video.js.map
