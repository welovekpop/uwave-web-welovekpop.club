"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _debug = _interopRequireDefault(require("debug"));

var _reactI18next = require("react-i18next");

var _Paper = _interopRequireDefault(require("material-ui/Paper"));

var _Button = _interopRequireDefault(require("material-ui/Button"));

var _Typography = _interopRequireDefault(require("material-ui/Typography"));

var _Error = _interopRequireDefault(require("@material-ui/icons/Error"));

var _SongInfo = _interopRequireDefault(require("./SongInfo"));

var _soundcloudInline = _interopRequireDefault(require("../../../assets/img/soundcloud-inline.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = (0, _debug.default)('uwave:component:video:soundcloud');
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

var enhance = (0, _reactI18next.translate)();

var _ref =
/*#__PURE__*/
(0, _jsx2.default)(_Error.default, {
  className: "src-soundcloud-Player-errorIcon"
});

var _ref2 =
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
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
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

    var _props = this.props,
        t = _props.t,
        media = _props.media;
    var _state = this.state,
        error = _state.error,
        needsTap = _state.needsTap;
    var sourceData = media.sourceData;

    if (!sourceData) {
      return (0, _jsx2.default)("div", {
        className: (0, _classnames.default)('src-soundcloud-Player', this.props.className)
      });
    }

    if (needsTap) {
      return (0, _jsx2.default)("div", {
        className: (0, _classnames.default)('src-soundcloud-Player', this.props.className)
      }, void 0, (0, _jsx2.default)(_Paper.default, {
        className: "src-soundcloud-Player-message"
      }, void 0, (0, _jsx2.default)(_Typography.default, {
        component: "p",
        paragraph: true
      }, void 0, t('booth.autoplayBlocked')), (0, _jsx2.default)(_Button.default, {
        variant: "raised",
        color: "primary",
        onClick: this.handlePlay
      }, void 0, t('booth.play'))));
    }

    if (error) {
      return (0, _jsx2.default)("div", {
        className: (0, _classnames.default)('src-soundcloud-Player', this.props.className)
      }, void 0, (0, _jsx2.default)(_Paper.default, {
        className: "src-soundcloud-Player-error"
      }, void 0, _ref, (0, _jsx2.default)(_Typography.default, {
        component: "p"
      }, void 0, t('soundcloud.error.template', {
        error: t(getErrorMessage(error), {
          defaultValue: error.message
        })
      }))));
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
    }, void 0, "View on", ' ', _ref2)));
  };

  return SoundCloudPlayer;
}(_react.default.Component);

SoundCloudPlayer.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes.default.func.isRequired,
  className: _propTypes.default.string,
  active: _propTypes.default.bool.isRequired,
  enabled: _propTypes.default.bool,
  media: _propTypes.default.object,
  seek: _propTypes.default.number,
  volume: _propTypes.default.number
} : {};

var _default = enhance(SoundCloudPlayer); //# sourceMappingURL=Player.js.map


exports.default = _default;
//# sourceMappingURL=Player.js.map
