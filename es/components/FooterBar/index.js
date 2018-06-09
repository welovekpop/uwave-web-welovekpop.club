import _extends from "@babel/runtime/helpers/builtin/extends";
import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import NextMedia from './NextMedia';
import UserInfo from './UserInfo';
import SkipButton from './SkipButton';
import WaitlistButton from './WaitlistButton';
import ResponseBar from './Responses/Bar';
import RandomizePlaylistsNotice from '../../_wlk/RandomizePlaylistsNotice';
var enhance = translate();

var _ref =
/*#__PURE__*/
_jsx(RandomizePlaylistsNotice, {});

var _ref2 =
/*#__PURE__*/
_jsx("div", {
  className: "FooterBar-guest"
}, void 0, "You have to log in if you want to play!");

var FooterBar =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(FooterBar, _React$Component);

  function FooterBar() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.handleSkipTurn = function (reason) {
      if (!_this.props.showSkip) {
        return null;
      }

      if (!_this.props.userIsDJ) {
        return _this.props.onModSkip(reason);
      }

      return _this.props.onSkipTurn({
        remove: false
      });
    }, _this.handleJoinWaitlist = function () {
      if (_this.props.user) {
        return _this.props.joinWaitlist(_this.props.user);
      }

      return null;
    }, _this.handleLeaveWaitlist = function () {
      if (_this.props.userIsDJ) {
        return _this.props.onSkipTurn({
          remove: true
        });
      } else if (_this.props.user) {
        return _this.props.leaveWaitlist(_this.props.user);
      }

      return null;
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = FooterBar.prototype;

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
    var className = cx('FooterBar', this.props.className);

    if (user && !user.isGuest) {
      var canVote = !userIsDJ && !!this.props.currentDJ;
      return _jsx("div", {
        className: className
      }, void 0, _jsx("div", {
        className: "FooterBar-user"
      }, void 0, _jsx(UserInfo, {
        user: user,
        onClick: toggleSettings
      })), _jsx("button", {
        className: "FooterBar-next",
        onClick: togglePlaylistManager
      }, void 0, shouldRandomizePlaylists ? _ref : _jsx(NextMedia, {
        playlist: playlist,
        nextMedia: nextMedia,
        userInWaitlist: userInWaitlist,
        userIsDJ: userIsDJ,
        baseEta: baseEta,
        mediaEndTime: mediaEndTime
      })), _jsx("div", {
        className: cx('FooterBar-responses', !showSkip && 'FooterBar-responses--spaced')
      }, void 0, React.createElement(ResponseBar, _extends({
        disabled: !canVote,
        onFavorite: onFavorite,
        onUpvote: onUpvote,
        onDownvote: onDownvote
      }, voteStats))), this.props.showSkip && _jsx("div", {
        className: "FooterBar-skip"
      }, void 0, _jsx(SkipButton, {
        userIsDJ: userIsDJ,
        currentDJ: this.props.currentDJ,
        onSkip: this.handleSkipTurn
      })), _jsx(WaitlistButton, {
        isLocked: this.props.waitlistIsLocked,
        userInWaitlist: userInWaitlist,
        onClick: userInWaitlist ? this.handleLeaveWaitlist : this.handleJoinWaitlist
      }));
    }

    return _jsx("div", {
      className: className
    }, void 0, _jsx("button", {
      className: "FooterAuthButton FooterAuthButton--login",
      onClick: openLoginDialog
    }, void 0, t('login.login').toUpperCase()), _jsx("button", {
      className: "FooterAuthButton FooterAuthButton--register",
      onClick: openRegisterDialog
    }, void 0, t('login.register').toUpperCase()), _ref2);
  };

  return FooterBar;
}(React.Component);

FooterBar.contextTypes = {
  muiTheme: PropTypes.object
};
FooterBar.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  className: PropTypes.string,
  baseEta: PropTypes.number,
  mediaEndTime: PropTypes.number,
  nextMedia: PropTypes.object,
  playlist: PropTypes.object,
  user: PropTypes.object,
  userInWaitlist: PropTypes.bool.isRequired,
  userIsDJ: PropTypes.bool.isRequired,
  currentDJ: PropTypes.object,
  showSkip: PropTypes.bool,
  waitlistIsLocked: PropTypes.bool.isRequired,
  voteStats: PropTypes.object,
  shouldRandomizePlaylists: PropTypes.bool,
  openLoginDialog: PropTypes.func,
  openRegisterDialog: PropTypes.func,
  togglePlaylistManager: PropTypes.func,
  toggleSettings: PropTypes.func,
  joinWaitlist: PropTypes.func,
  leaveWaitlist: PropTypes.func,
  onSkipTurn: PropTypes.func.isRequired,
  onModSkip: PropTypes.func.isRequired,
  onFavorite: PropTypes.func,
  onUpvote: PropTypes.func,
  onDownvote: PropTypes.func
} : {};
export default enhance(FooterBar);
//# sourceMappingURL=index.js.map
