import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import createDebug from 'debug';
import { translate } from 'react-i18next';
import Paper from "@material-ui/core/es/Paper";
import Button from "@material-ui/core/es/Button";
import Typography from "@material-ui/core/es/Typography";
import ErrorIcon from "@material-ui/icons/es/Error";
import SongInfo from './SongInfo';
import soundcloudLogo from '../../../assets/img/soundcloud-inline.png';
var debug = createDebug('uwave:component:video:soundcloud');
var CLIENT_ID = '9d883cdd4c3c54c6dddda2a5b3a11200';

function getErrorMessage(err) {
  if (err.name === 'MediaError') {
    if (err.code === 2) {
      return 'soundcloud.error.network';
    }

    if (err.code === 3) {
      return 'soundcloud.error.decode';
    }

    if (err.code === 4 && /404|not found/i.test(err.message)) {
      return 'soundcloud.error.notFound';
    }
  }

  return err.message;
}

var enhance = translate();

var _ref =
/*#__PURE__*/
_jsx(ErrorIcon, {
  className: "src-soundcloud-Player-errorIcon"
});

var _ref2 =
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
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      error: null,
      needsTap: false
    }, _this.handleError = function (error) {
      _this.setState({
        error: error,
        needsTap: error.name === 'NotAllowedError'
      });
    }, _this.handlePlay = function () {
      _this.play();
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = SoundCloudPlayer.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.audio = new Audio();
    this.audio.addEventListener('error', function () {
      _this2.handleError(_this2.audio.error);
    });
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
    var _this3 = this;

    this.setState({
      needsTap: false,
      error: null
    });

    if (this.props.enabled && this.props.active) {
      // In Firefox we have to wait for the "canplaythrough" event before
      // seeking.
      // http://stackoverflow.com/a/34970444
      var doSeek = function doSeek() {
        _this3.audio.currentTime = _this3.props.seek + (_this3.props.media.start || 0);
        _this3.audio.volume = _this3.props.volume / 100;

        _this3.audio.removeEventListener('canplaythrough', doSeek, false);
      };

      var streamUrl = this.props.media.sourceData.streamUrl;
      this.audio.src = streamUrl + "?client_id=" + CLIENT_ID;
      var res = this.audio.play();
      if (res && res.then) res.catch(this.handleError);
      debug('currentTime', this.props.seek);
      this.audio.addEventListener('canplaythrough', doSeek, false);

      if (this.props.onPlay) {
        this.audio.addEventListener('play', this.props.onPlay, false);
      }
    } else {
      this.stop();
    }
  };

  _proto.stop = function stop() {
    this.setState({
      error: null
    });
    this.audio.pause();
  };

  _proto.render = function render() {
    if (!this.props.active) {
      return null;
    }

    var _this$props = this.props,
        t = _this$props.t,
        media = _this$props.media;
    var _this$state = this.state,
        error = _this$state.error,
        needsTap = _this$state.needsTap;
    var sourceData = media.sourceData;

    if (!sourceData) {
      return _jsx("div", {
        className: cx('src-soundcloud-Player', this.props.className)
      });
    }

    if (needsTap) {
      return _jsx("div", {
        className: cx('src-soundcloud-Player', this.props.className)
      }, void 0, _jsx(Paper, {
        className: "src-soundcloud-Player-message"
      }, void 0, _jsx(Typography, {
        component: "p",
        paragraph: true
      }, void 0, t('booth.autoplayBlocked')), _jsx(Button, {
        variant: "raised",
        color: "primary",
        onClick: this.handlePlay
      }, void 0, t('booth.play'))));
    }

    if (error) {
      return _jsx("div", {
        className: cx('src-soundcloud-Player', this.props.className)
      }, void 0, _jsx(Paper, {
        className: "src-soundcloud-Player-error"
      }, void 0, _ref, _jsx(Typography, {
        component: "p"
      }, void 0, t('soundcloud.error.template', {
        error: t(getErrorMessage(error), {
          defaultValue: error.message
        })
      }))));
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
    }, void 0, "View on", ' ', _ref2)));
  };

  return SoundCloudPlayer;
}(React.Component);

SoundCloudPlayer.propTypes = process.env.NODE_ENV !== "production" ? {
  t: PropTypes.func.isRequired,
  className: PropTypes.string,
  active: PropTypes.bool.isRequired,
  enabled: PropTypes.bool,
  media: PropTypes.object,
  seek: PropTypes.number,
  volume: PropTypes.number,
  onPlay: PropTypes.func
} : {};
export default enhance(SoundCloudPlayer);
//# sourceMappingURL=Player.js.map
