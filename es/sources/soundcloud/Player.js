import _jsx from "@babel/runtime/helpers/jsx";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import createDebug from 'debug';
import SongInfo from './SongInfo';
import soundcloudLogo from '../../../assets/img/soundcloud-inline.png';
var debug = createDebug('uwave:component:video:soundcloud');
var CLIENT_ID = '9d883cdd4c3c54c6dddda2a5b3a11200';

var _ref =
/*#__PURE__*/
_jsx("img", {
  src: soundcloudLogo,
  alt: "SoundCloud"
});

var SoundCloudPlayer =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(SoundCloudPlayer, _React$Component);

  function SoundCloudPlayer() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = SoundCloudPlayer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.audio = new Audio();
    this.audio.autoplay = true;
    this.play();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
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

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.stop();
  };

  _proto.play = function play() {
    var _this = this;

    if (this.props.enabled && this.props.active) {
      // In Firefox we have to wait for the "canplaythrough" event before
      // seeking.
      // http://stackoverflow.com/a/34970444
      var doSeek = function doSeek() {
        _this.audio.currentTime = _this.props.seek + (_this.props.media.start || 0);
        _this.audio.volume = _this.props.volume / 100;

        _this.audio.removeEventListener('canplaythrough', doSeek, false);
      };

      var streamUrl = this.props.media.sourceData.streamUrl;
      this.audio.src = streamUrl + "?client_id=" + CLIENT_ID;
      this.audio.play();
      debug('currentTime', this.props.seek);
      this.audio.addEventListener('canplaythrough', doSeek, false);
    } else {
      this.stop();
    }
  };

  _proto.stop = function stop() {
    this.audio.pause();
  };

  _proto.render = function render() {
    if (!this.props.active) {
      return null;
    }

    var media = this.props.media;
    var sourceData = media.sourceData;

    if (!sourceData) {
      return _jsx("div", {
        className: cx('src-soundcloud-Player', this.props.className)
      });
    }

    return _jsx("div", {
      className: cx('src-soundcloud-Player', this.props.className)
    }, void 0, _jsx("div", {
      className: "src-soundcloud-Player-meta"
    }, void 0, _jsx("div", {
      className: "src-soundcloud-Player-info"
    }, void 0, _jsx("img", {
      className: "src-soundcloud-Player-art",
      src: media.thumbnail,
      alt: ""
    }), _jsx("div", {
      className: "src-soundcloud-Player-links"
    }, void 0, _jsx(SongInfo, {
      artist: sourceData.username,
      title: sourceData.fullTitle,
      artistUrl: sourceData.artistUrl,
      trackUrl: sourceData.permalinkUrl
    }))), _jsx("a", {
      href: sourceData.permalinkUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "src-soundcloud-Player-permalink"
    }, void 0, "View on", ' ', _ref)));
  };

  return SoundCloudPlayer;
}(React.Component);

export { SoundCloudPlayer as default };
SoundCloudPlayer.propTypes = process.env.NODE_ENV !== "production" ? {
  className: PropTypes.string,
  active: PropTypes.bool.isRequired,
  enabled: PropTypes.bool,
  media: PropTypes.object,
  seek: PropTypes.number,
  volume: PropTypes.number
} : {};
//# sourceMappingURL=Player.js.map
