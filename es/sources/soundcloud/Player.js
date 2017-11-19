import _jsx from 'babel-runtime/helpers/jsx';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import createDebug from 'debug';
import SongInfo from './SongInfo';
import soundcloudLogo from '../../../assets/img/soundcloud-inline.png';

var debug = createDebug('uwave:component:video:soundcloud');

var CLIENT_ID = '9d883cdd4c3c54c6dddda2a5b3a11200';

var _ref = _jsx('img', {
  src: soundcloudLogo,
  alt: 'SoundCloud'
});

var SoundCloudPlayer = function (_React$Component) {
  _inherits(SoundCloudPlayer, _React$Component);

  function SoundCloudPlayer() {
    _classCallCheck(this, SoundCloudPlayer);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
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
      return _jsx('div', {
        className: cx('src-soundcloud-Player', this.props.className)
      });
    }

    return _jsx('div', {
      className: cx('src-soundcloud-Player', this.props.className)
    }, void 0, _jsx('div', {
      className: 'src-soundcloud-Player-meta'
    }, void 0, _jsx('div', {
      className: 'src-soundcloud-Player-info'
    }, void 0, _jsx('img', {
      className: 'src-soundcloud-Player-art',
      src: media.thumbnail,
      alt: ''
    }), _jsx('div', {
      className: 'src-soundcloud-Player-links'
    }, void 0, _jsx(SongInfo, {
      artist: sourceData.username,
      title: sourceData.fullTitle,
      artistUrl: sourceData.artistUrl,
      trackUrl: sourceData.permalinkUrl
    }))), _jsx('a', {
      href: sourceData.permalinkUrl,
      target: '_blank',
      rel: 'noopener noreferrer',
      className: 'src-soundcloud-Player-permalink'
    }, void 0, 'View on', ' ', _ref)));
  };

  return SoundCloudPlayer;
}(React.Component);

export default SoundCloudPlayer;
SoundCloudPlayer.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  active: PropTypes.bool.isRequired,
  enabled: PropTypes.bool,
  media: PropTypes.object,
  seek: PropTypes.number,
  volume: PropTypes.number
} : {};
//# sourceMappingURL=Player.js.map
