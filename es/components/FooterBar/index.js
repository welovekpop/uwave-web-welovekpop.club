import _extends from 'babel-runtime/helpers/extends';
import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _dec, _class, _class2, _temp;

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

var _ref = _jsx(RandomizePlaylistsNotice, {});

var _ref2 = _jsx('div', {
  className: 'FooterBar-guest'
}, void 0, 'You have to log in if you want to play!');

var FooterBar = (_dec = translate(), _dec(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(FooterBar, _React$Component);

  function FooterBar(props) {
    _classCallCheck(this, FooterBar);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.handleSkipTurn = _this.handleSkipTurn.bind(_this);
    _this.handleJoinWaitlist = _this.handleJoinWaitlist.bind(_this);
    _this.handleLeaveWaitlist = _this.handleLeaveWaitlist.bind(_this);
    return _this;
  }

  FooterBar.prototype.handleSkipTurn = function handleSkipTurn(reason) {
    if (!this.props.showSkip) {
      return null;
    }
    if (!this.props.userIsDJ) {
      return this.props.onModSkip(reason);
    }
    return this.props.onSkipTurn({ remove: false });
  };

  FooterBar.prototype.handleJoinWaitlist = function handleJoinWaitlist() {
    if (this.props.user) {
      return this.props.joinWaitlist(this.props.user);
    }
    return null;
  };

  FooterBar.prototype.handleLeaveWaitlist = function handleLeaveWaitlist() {
    if (this.props.userIsDJ) {
      return this.props.onSkipTurn({ remove: true });
    } else if (this.props.user) {
      return this.props.leaveWaitlist(this.props.user);
    }
    return null;
  };

  FooterBar.prototype.render = function render() {
    var _props = this.props,
        t = _props.t,
        openLoginDialog = _props.openLoginDialog,
        openRegisterDialog = _props.openRegisterDialog,
        togglePlaylistManager = _props.togglePlaylistManager,
        toggleSettings = _props.toggleSettings,
        onFavorite = _props.onFavorite,
        onUpvote = _props.onUpvote,
        onDownvote = _props.onDownvote;
    var _props2 = this.props,
        user = _props2.user,
        userIsDJ = _props2.userIsDJ,
        userInWaitlist = _props2.userInWaitlist,
        shouldRandomizePlaylists = _props2.shouldRandomizePlaylists,
        playlist = _props2.playlist,
        nextMedia = _props2.nextMedia,
        showSkip = _props2.showSkip,
        baseEta = _props2.baseEta,
        mediaEndTime = _props2.mediaEndTime,
        voteStats = _props2.voteStats;

    var className = cx('FooterBar', this.props.className);

    if (user && !user.isGuest) {
      var canVote = !userIsDJ && !!this.props.currentDJ;
      return _jsx('div', {
        className: className
      }, void 0, _jsx('div', {
        className: 'FooterBar-user'
      }, void 0, _jsx(UserInfo, {
        user: user,
        onClick: toggleSettings
      })), _jsx('button', {
        className: 'FooterBar-next',
        onClick: togglePlaylistManager
      }, void 0, shouldRandomizePlaylists ? _ref : _jsx(NextMedia, {
        playlist: playlist,
        nextMedia: nextMedia,
        userInWaitlist: userInWaitlist,
        userIsDJ: userIsDJ,
        baseEta: baseEta,
        mediaEndTime: mediaEndTime
      })), _jsx('div', {
        className: cx('FooterBar-responses', !showSkip && 'FooterBar-responses--spaced')
      }, void 0, React.createElement(ResponseBar, _extends({
        disabled: !canVote,
        onFavorite: onFavorite,
        onUpvote: onUpvote,
        onDownvote: onDownvote
      }, voteStats))), this.props.showSkip && _jsx('div', {
        className: 'FooterBar-skip'
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
    return _jsx('div', {
      className: className
    }, void 0, _jsx('button', {
      className: 'FooterAuthButton FooterAuthButton--login',
      onClick: openLoginDialog
    }, void 0, t('login.login').toUpperCase()), _jsx('button', {
      className: 'FooterAuthButton FooterAuthButton--register',
      onClick: openRegisterDialog
    }, void 0, t('login.register').toUpperCase()), _ref2);
  };

  return FooterBar;
}(React.Component), _class2.contextTypes = {
  muiTheme: PropTypes.object
}, _temp)) || _class);
export { FooterBar as default };
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
//# sourceMappingURL=index.js.map
