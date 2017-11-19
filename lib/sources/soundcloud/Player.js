'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _SongInfo = require('./SongInfo');

var _SongInfo2 = _interopRequireDefault(_SongInfo);

var _soundcloudInline = require('../../../assets/img/soundcloud-inline.png');

var _soundcloudInline2 = _interopRequireDefault(_soundcloudInline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug2.default)('uwave:component:video:soundcloud');

var CLIENT_ID = '9d883cdd4c3c54c6dddda2a5b3a11200';

var _ref = (0, _jsx3.default)('img', {
  src: _soundcloudInline2.default,
  alt: 'SoundCloud'
});

var SoundCloudPlayer = function (_React$Component) {
  (0, _inherits3.default)(SoundCloudPlayer, _React$Component);

  function SoundCloudPlayer() {
    (0, _classCallCheck3.default)(this, SoundCloudPlayer);

    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  SoundCloudPlayer.prototype.componentDidMount = function componentDidMount() {
    this.audio = new Audio();
    this.audio.autoplay = true;
    this.play();
  };

  SoundCloudPlayer.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.volume !== this.props.volume) {
      this.audio.volume = this.props.volume / 100;
    }
    if (prevProps.media.sourceID !== this.props.media.sourceID || prevProps.enabled !== this.props.enabled || prevProps.active !== this.props.active) {
      if (this.props.enabled && this.props.active) {
        this.play();
      } else {
        this.stop();
      }
    }
  };

  SoundCloudPlayer.prototype.componentWillUnmount = function componentWillUnmount() {
    this.stop();
  };

  SoundCloudPlayer.prototype.play = function play() {
    var _this2 = this;

    if (this.props.enabled && this.props.active) {
      // In Firefox we have to wait for the "canplaythrough" event before
      // seeking.
      // http://stackoverflow.com/a/34970444
      var doSeek = function doSeek() {
        _this2.audio.currentTime = _this2.props.seek + (_this2.props.media.start || 0);
        _this2.audio.volume = _this2.props.volume / 100;
        _this2.audio.removeEventListener('canplaythrough', doSeek, false);
      };

      var streamUrl = this.props.media.sourceData.streamUrl;

      this.audio.src = streamUrl + '?client_id=' + CLIENT_ID;
      this.audio.play();
      debug('currentTime', this.props.seek);
      this.audio.addEventListener('canplaythrough', doSeek, false);
    } else {
      this.stop();
    }
  };

  SoundCloudPlayer.prototype.stop = function stop() {
    this.audio.pause();
  };

  SoundCloudPlayer.prototype.render = function render() {
    if (!this.props.active) {
      return null;
    }

    var media = this.props.media;
    var sourceData = media.sourceData;

    if (!sourceData) {
      return (0, _jsx3.default)('div', {
        className: (0, _classnames2.default)('src-soundcloud-Player', this.props.className)
      });
    }

    return (0, _jsx3.default)('div', {
      className: (0, _classnames2.default)('src-soundcloud-Player', this.props.className)
    }, void 0, (0, _jsx3.default)('div', {
      className: 'src-soundcloud-Player-meta'
    }, void 0, (0, _jsx3.default)('div', {
      className: 'src-soundcloud-Player-info'
    }, void 0, (0, _jsx3.default)('img', {
      className: 'src-soundcloud-Player-art',
      src: media.thumbnail,
      alt: ''
    }), (0, _jsx3.default)('div', {
      className: 'src-soundcloud-Player-links'
    }, void 0, (0, _jsx3.default)(_SongInfo2.default, {
      artist: sourceData.username,
      title: sourceData.fullTitle,
      artistUrl: sourceData.artistUrl,
      trackUrl: sourceData.permalinkUrl
    }))), (0, _jsx3.default)('a', {
      href: sourceData.permalinkUrl,
      target: '_blank',
      rel: 'noopener noreferrer',
      className: 'src-soundcloud-Player-permalink'
    }, void 0, 'View on', ' ', _ref)));
  };

  return SoundCloudPlayer;
}(_react2.default.Component);

exports.default = SoundCloudPlayer;

SoundCloudPlayer.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  active: _propTypes2.default.bool.isRequired,
  enabled: _propTypes2.default.bool,
  media: _propTypes2.default.object,
  seek: _propTypes2.default.number,
  volume: _propTypes2.default.number
} : {};
//# sourceMappingURL=Player.js.map
//# sourceMappingURL=Player.js.map
