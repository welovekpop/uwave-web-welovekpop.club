"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/extends"));

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactI18next = require("react-i18next");

var _NextMedia = _interopRequireDefault(require("./NextMedia"));

var _UserInfo = _interopRequireDefault(require("./UserInfo"));

var _SkipButton = _interopRequireDefault(require("./SkipButton"));

var _WaitlistButton = _interopRequireDefault(require("./WaitlistButton"));

var _Bar = _interopRequireDefault(require("./Responses/Bar"));

var _RandomizePlaylistsNotice = _interopRequireDefault(require("../../_wlk/RandomizePlaylistsNotice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhance = (0, _reactI18next.translate)();

var _ref =
/*#__PURE__*/
(0, _jsx2.default)(_RandomizePlaylistsNotice.default, {});

var _ref2 =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "FooterBar-guest"
}, void 0, "You have to log in if you want to play!");

var FooterBar =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(FooterBar, _React$Component);

  function FooterBar(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.handleSkipTurn = _this.handleSkipTurn.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleJoinWaitlist = _this.handleJoinWaitlist.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleLeaveWaitlist = _this.handleLeaveWaitlist.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  var _proto = FooterBar.prototype;

  _proto.handleSkipTurn = function handleSkipTurn(reason) {
    if (!this.props.showSkip) {
      return null;
    }

    if (!this.props.userIsDJ) {
      return this.props.onModSkip(reason);
    }

    return this.props.onSkipTurn({
      remove: false
    });
  };

  _proto.handleJoinWaitlist = function handleJoinWaitlist() {
    if (this.props.user) {
      return this.props.joinWaitlist(this.props.user);
    }

    return null;
  };

  _proto.handleLeaveWaitlist = function handleLeaveWaitlist() {
    if (this.props.userIsDJ) {
      return this.props.onSkipTurn({
        remove: true
      });
    } else if (this.props.user) {
      return this.props.leaveWaitlist(this.props.user);
    }

    return null;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        t = _this$props.t,
        openLoginDialog = _this$props.openLoginDialog,
        openRegisterDialog = _this$props.openRegisterDialog,
        togglePlaylistManager = _this$props.togglePlaylistManager,
        toggleSettings = _this$props.toggleSettings,
        onFavorite = _this$props.onFavorite,
        onUpvote = _this$props.onUpvote,
        onDownvote = _this$props.onDownvote;
    var _this$props2 = this.props,
        user = _this$props2.user,
        userIsDJ = _this$props2.userIsDJ,
        userInWaitlist = _this$props2.userInWaitlist,
        shouldRandomizePlaylists = _this$props2.shouldRandomizePlaylists,
        playlist = _this$props2.playlist,
        nextMedia = _this$props2.nextMedia,
        showSkip = _this$props2.showSkip,
        baseEta = _this$props2.baseEta,
        mediaEndTime = _this$props2.mediaEndTime,
        voteStats = _this$props2.voteStats;
    var className = (0, _classnames.default)('FooterBar', this.props.className);

    if (user && !user.isGuest) {
      var canVote = !userIsDJ && !!this.props.currentDJ;
      return (0, _jsx2.default)("div", {
        className: className
      }, void 0, (0, _jsx2.default)("div", {
        className: "FooterBar-user"
      }, void 0, (0, _jsx2.default)(_UserInfo.default, {
        user: user,
        onClick: toggleSettings
      })), (0, _jsx2.default)("button", {
        className: "FooterBar-next",
        onClick: togglePlaylistManager
      }, void 0, shouldRandomizePlaylists ? _ref : (0, _jsx2.default)(_NextMedia.default, {
        playlist: playlist,
        nextMedia: nextMedia,
        userInWaitlist: userInWaitlist,
        userIsDJ: userIsDJ,
        baseEta: baseEta,
        mediaEndTime: mediaEndTime
      })), (0, _jsx2.default)("div", {
        className: (0, _classnames.default)('FooterBar-responses', !showSkip && 'FooterBar-responses--spaced')
      }, void 0, _react.default.createElement(_Bar.default, (0, _extends2.default)({
        disabled: !canVote,
        onFavorite: onFavorite,
        onUpvote: onUpvote,
        onDownvote: onDownvote
      }, voteStats))), this.props.showSkip && (0, _jsx2.default)("div", {
        className: "FooterBar-skip"
      }, void 0, (0, _jsx2.default)(_SkipButton.default, {
        userIsDJ: userIsDJ,
        currentDJ: this.props.currentDJ,
        onSkip: this.handleSkipTurn
      })), (0, _jsx2.default)(_WaitlistButton.default, {
        isLocked: this.props.waitlistIsLocked,
        userInWaitlist: userInWaitlist,
        onClick: userInWaitlist ? this.handleLeaveWaitlist : this.handleJoinWaitlist
      }));
    }

    return (0, _jsx2.default)("div", {
      className: className
    }, void 0, (0, _jsx2.default)("button", {
      className: "FooterAuthButton FooterAuthButton--login",
      onClick: openLoginDialog
    }, void 0, t('login.login').toUpperCase()), (0, _jsx2.default)("button", {
      className: "FooterAuthButton FooterAuthButton--register",
      onClick: openRegisterDialog
    }, void 0, t('login.register').toUpperCase()), _ref2);
  };

  return FooterBar;
}(_react.default.Component);

FooterBar.contextTypes = {
  muiTheme: _propTypes.default.object
};
FooterBar.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  baseEta: _propTypes.default.number,
  mediaEndTime: _propTypes.default.number,
  nextMedia: _propTypes.default.object,
  playlist: _propTypes.default.object,
  user: _propTypes.default.object,
  userInWaitlist: _propTypes.default.bool.isRequired,
  userIsDJ: _propTypes.default.bool.isRequired,
  currentDJ: _propTypes.default.object,
  showSkip: _propTypes.default.bool,
  waitlistIsLocked: _propTypes.default.bool.isRequired,
  voteStats: _propTypes.default.object,
  shouldRandomizePlaylists: _propTypes.default.bool,
  openLoginDialog: _propTypes.default.func,
  openRegisterDialog: _propTypes.default.func,
  togglePlaylistManager: _propTypes.default.func,
  toggleSettings: _propTypes.default.func,
  joinWaitlist: _propTypes.default.func,
  leaveWaitlist: _propTypes.default.func,
  onSkipTurn: _propTypes.default.func.isRequired,
  onModSkip: _propTypes.default.func.isRequired,
  onFavorite: _propTypes.default.func,
  onUpvote: _propTypes.default.func,
  onDownvote: _propTypes.default.func
} : {};

var _default = enhance(FooterBar);

exports.default = _default;
//# sourceMappingURL=index.js.map
