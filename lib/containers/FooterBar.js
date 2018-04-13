"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reselect = require("reselect");

var _BoothActionCreators = require("../actions/BoothActionCreators");

var _DialogActionCreators = require("../actions/DialogActionCreators");

var _ModerationActionCreators = require("../actions/ModerationActionCreators");

var _OverlayActionCreators = require("../actions/OverlayActionCreators");

var _WaitlistActionCreators = require("../actions/WaitlistActionCreators");

var _VoteActionCreators = require("../actions/VoteActionCreators");

var _boothSelectors = require("../selectors/boothSelectors");

var _playlistSelectors = require("../selectors/playlistSelectors");

var _userSelectors = require("../selectors/userSelectors");

var _waitlistSelectors = require("../selectors/waitlistSelectors");

var _voteSelectors = require("../selectors/voteSelectors");

var _selectors = require("../_wlk/selectors");

var _FooterBar = _interopRequireDefault(require("../components/FooterBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = (0, _reselect.createStructuredSelector)({
  baseEta: _waitlistSelectors.baseEtaSelector,
  mediaEndTime: _boothSelectors.endTimeSelector,
  playlist: _playlistSelectors.activePlaylistSelector,
  nextMedia: _playlistSelectors.nextMediaSelector,
  shouldRandomizePlaylists: _selectors.shouldRandomizePlaylistsSelector,
  user: _userSelectors.currentUserSelector,
  userInWaitlist: _waitlistSelectors.userInWaitlistSelector,
  userIsDJ: _boothSelectors.isCurrentDJSelector,
  currentDJ: _boothSelectors.djSelector,
  showSkip: _boothSelectors.canSkipSelector,
  waitlistIsLocked: _waitlistSelectors.isLockedSelector,
  voteStats: _voteSelectors.currentVoteStatsSelector
});

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    joinWaitlist: _WaitlistActionCreators.joinWaitlist,
    leaveWaitlist: _WaitlistActionCreators.leaveWaitlist,
    openLoginDialog: _DialogActionCreators.openLoginDialog,
    openRegisterDialog: _DialogActionCreators.openRegisterDialog,
    togglePlaylistManager: _OverlayActionCreators.togglePlaylistManager,
    toggleSettings: _OverlayActionCreators.toggleSettings,
    onSkipTurn: _BoothActionCreators.skipSelf,
    onModSkip: _ModerationActionCreators.skipCurrentDJ,
    onFavorite: _VoteActionCreators.openFavoriteMenu,
    onUpvote: _VoteActionCreators.doUpvote,
    onDownvote: _VoteActionCreators.doDownvote
  }, dispatch);
}

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_FooterBar.default); //# sourceMappingURL=FooterBar.js.map


exports.default = _default;
//# sourceMappingURL=FooterBar.js.map
