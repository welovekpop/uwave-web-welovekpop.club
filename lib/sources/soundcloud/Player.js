"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/jsx"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _debug = _interopRequireDefault(require("debug"));

var _SongInfo = _interopRequireDefault(require("./SongInfo"));

var _soundcloudInline = _interopRequireDefault(require("../../../assets/img/soundcloud-inline.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug.default)('uwave:component:video:soundcloud');
var CLIENT_ID = '9d883cdd4c3c54c6dddda2a5b3a11200';

var _ref =
/*#__PURE__*/
(0, _jsx2.default)("img", {
  src: _soundcloudInline.default,
  alt: "SoundCloud"
});

var SoundCloudPlayer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(SoundCloudPlayer, _React$Component);

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
      return (0, _jsx2.default)("div", {
        className: (0, _classnames.default)('src-soundcloud-Player', this.props.className)
      });
    }

    return (0, _jsx2.default)("div", {
      className: (0, _classnames.default)('src-soundcloud-Player', this.props.className)
    }, void 0, (0, _jsx2.default)("div", {
      className: "src-soundcloud-Player-meta"
    }, void 0, (0, _jsx2.default)("div", {
      className: "src-soundcloud-Player-info"
    }, void 0, (0, _jsx2.default)("img", {
      className: "src-soundcloud-Player-art",
      src: media.thumbnail,
      alt: ""
    }), (0, _jsx2.default)("div", {
      className: "src-soundcloud-Player-links"
    }, void 0, (0, _jsx2.default)(_SongInfo.default, {
      artist: sourceData.username,
      title: sourceData.fullTitle,
      artistUrl: sourceData.artistUrl,
      trackUrl: sourceData.permalinkUrl
    }))), (0, _jsx2.default)("a", {
      href: sourceData.permalinkUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "src-soundcloud-Player-permalink"
    }, void 0, "View on", ' ', _ref)));
  };

  return SoundCloudPlayer;
}(_react.default.Component);

exports.default = SoundCloudPlayer;
SoundCloudPlayer.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  active: _propTypes.default.bool.isRequired,
  enabled: _propTypes.default.bool,
  media: _propTypes.default.object,
  seek: _propTypes.default.number,
  volume: _propTypes.default.number
} : {}; //# sourceMappingURL=Player.js.map
//# sourceMappingURL=Player.js.map
