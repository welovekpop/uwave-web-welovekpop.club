'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactI18next = require('react-i18next');

var _NextMedia = require('./NextMedia');

var _NextMedia2 = _interopRequireDefault(_NextMedia);

var _UserInfo = require('./UserInfo');

var _UserInfo2 = _interopRequireDefault(_UserInfo);

var _SkipButton = require('./SkipButton');

var _SkipButton2 = _interopRequireDefault(_SkipButton);

var _WaitlistButton = require('./WaitlistButton');

var _WaitlistButton2 = _interopRequireDefault(_WaitlistButton);

var _Bar = require('./Responses/Bar');

var _Bar2 = _interopRequireDefault(_Bar);

var _RandomizePlaylistsNotice = require('../../_wlk/RandomizePlaylistsNotice');

var _RandomizePlaylistsNotice2 = _interopRequireDefault(_RandomizePlaylistsNotice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec, _class, _class2, _temp;

var _ref = (0, _jsx3.default)(_RandomizePlaylistsNotice2.default, {});

var _ref2 = (0, _jsx3.default)('div', {
  className: 'FooterBar-guest'
}, void 0, 'You have to log in if you want to play!');

var FooterBar = (_dec = (0, _reactI18next.translate)(), _dec(_class = (_temp = _class2 = function (_React$Component) {
  (0, _inherits3.default)(FooterBar, _React$Component);

  function FooterBar(props) {
    (0, _classCallCheck3.default)(this, FooterBar);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

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

    var className = (0, _classnames2.default)('FooterBar', this.props.className);

    if (user && !user.isGuest) {
      var canVote = !userIsDJ && !!this.props.currentDJ;
      return (0, _jsx3.default)('div', {
        className: className
      }, void 0, (0, _jsx3.default)('div', {
        className: 'FooterBar-user'
      }, void 0, (0, _jsx3.default)(_UserInfo2.default, {
        user: user,
        onClick: toggleSettings
      })), (0, _jsx3.default)('button', {
        className: 'FooterBar-next',
        onClick: togglePlaylistManager
      }, void 0, shouldRandomizePlaylists ? _ref : (0, _jsx3.default)(_NextMedia2.default, {
        playlist: playlist,
        nextMedia: nextMedia,
        userInWaitlist: userInWaitlist,
        userIsDJ: userIsDJ,
        baseEta: baseEta,
        mediaEndTime: mediaEndTime
      })), (0, _jsx3.default)('div', {
        className: (0, _classnames2.default)('FooterBar-responses', !showSkip && 'FooterBar-responses--spaced')
      }, void 0, _react2.default.createElement(_Bar2.default, (0, _extends3.default)({
        disabled: !canVote,
        onFavorite: onFavorite,
        onUpvote: onUpvote,
        onDownvote: onDownvote
      }, voteStats))), this.props.showSkip && (0, _jsx3.default)('div', {
        className: 'FooterBar-skip'
      }, void 0, (0, _jsx3.default)(_SkipButton2.default, {
        userIsDJ: userIsDJ,
        currentDJ: this.props.currentDJ,
        onSkip: this.handleSkipTurn
      })), (0, _jsx3.default)(_WaitlistButton2.default, {
        isLocked: this.props.waitlistIsLocked,
        userInWaitlist: userInWaitlist,
        onClick: userInWaitlist ? this.handleLeaveWaitlist : this.handleJoinWaitlist
      }));
    }
    return (0, _jsx3.default)('div', {
      className: className
    }, void 0, (0, _jsx3.default)('button', {
      className: 'FooterAuthButton FooterAuthButton--login',
      onClick: openLoginDialog
    }, void 0, t('login.login').toUpperCase()), (0, _jsx3.default)('button', {
      className: 'FooterAuthButton FooterAuthButton--register',
      onClick: openRegisterDialog
    }, void 0, t('login.register').toUpperCase()), _ref2);
  };

  return FooterBar;
}(_react2.default.Component), _class2.contextTypes = {
  muiTheme: _propTypes2.default.object
}, _temp)) || _class);
exports.default = FooterBar;

FooterBar.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  baseEta: _propTypes2.default.number,
  mediaEndTime: _propTypes2.default.number,
  nextMedia: _propTypes2.default.object,
  playlist: _propTypes2.default.object,
  user: _propTypes2.default.object,
  userInWaitlist: _propTypes2.default.bool.isRequired,
  userIsDJ: _propTypes2.default.bool.isRequired,
  currentDJ: _propTypes2.default.object,
  showSkip: _propTypes2.default.bool,
  waitlistIsLocked: _propTypes2.default.bool.isRequired,
  voteStats: _propTypes2.default.object,
  shouldRandomizePlaylists: _propTypes2.default.bool,

  openLoginDialog: _propTypes2.default.func,
  openRegisterDialog: _propTypes2.default.func,
  togglePlaylistManager: _propTypes2.default.func,
  toggleSettings: _propTypes2.default.func,
  joinWaitlist: _propTypes2.default.func,
  leaveWaitlist: _propTypes2.default.func,
  onSkipTurn: _propTypes2.default.func.isRequired,
  onModSkip: _propTypes2.default.func.isRequired,
  onFavorite: _propTypes2.default.func,
  onUpvote: _propTypes2.default.func,
  onDownvote: _propTypes2.default.func
} : {};
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
