"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/inheritsLoose"));

var _classnames = _interopRequireDefault(require("classnames"));

var _isEqualShallow = _interopRequireDefault(require("is-equal-shallow"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _screenfull = _interopRequireDefault(require("screenfull"));

var _injectMediaSources = _interopRequireDefault(require("../../utils/injectMediaSources"));

var _VideoBackdrop = _interopRequireDefault(require("./VideoBackdrop"));

var _VideoProgressBar = _interopRequireDefault(require("./VideoProgressBar"));

var _VideoToolbar = _interopRequireDefault(require("./VideoToolbar"));

var _VideoMouseMoveCapture = _interopRequireDefault(require("./VideoMouseMoveCapture"));

var _Player = _interopRequireDefault(require("../Player"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultSourceTools = function defaultSourceTools() {
  return null;
};

var enhance = (0, _injectMediaSources.default)();

var _ref =
/*#__PURE__*/
(0, _jsx2.default)("div", {
  className: "Video"
});

var Video =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Video, _React$Component);

  function Video() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      shouldShowToolbar: false
    }, _this.handleFullscreenEnter = function () {
      if (_screenfull.default.enabled) {
        _screenfull.default.request(_this.element);
      }

      _this.props.onFullscreenEnter();
    }, _this.handleFullscreenChange = function () {
      if (!_screenfull.default.isFullscreen) {
        _this.props.onFullscreenExit();
      }
    }, _this.handleMouseMove = function () {
      if (_this.timer) {
        clearTimeout(_this.timer);
      } else {
        _this.setState({
          shouldShowToolbar: true
        });
      }

      _this.timer = setTimeout(_this.handleMouseMoveEnd, 5000);
    }, _this.handleMouseMoveEnd = function () {
      clearTimeout(_this.timer);
      _this.timer = null;

      _this.setState({
        shouldShowToolbar: false
      });
    }, _this.refElement = function (element) {
      _this.element = element;
    }, _temp) || (0, _assertThisInitialized2.default)(_this);
  }

  var _proto = Video.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (_screenfull.default.enabled) {
      _screenfull.default.on('change', this.handleFullscreenChange);
    }
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.isFullscreen && !nextProps.isFullscreen && _screenfull.default.enabled) {
      // Checking for `enabled` here, because our props have probably changed
      // _after_ exiting fullscreen mode (see `this.handleFullscreenChange`).
      // This way we don't double-exit.
      if (_screenfull.default.isFullscreen) {
        _screenfull.default.exit();
      }
    }
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return !(0, _isEqualShallow.default)(nextProps, this.props);
  };

  _proto.render = function render() {
    var _this$props = this.props,
        getMediaSource = _this$props.getMediaSource,
        isFullscreen = _this$props.isFullscreen,
        enabled = _this$props.enabled,
        size = _this$props.size,
        volume = _this$props.volume,
        isMuted = _this$props.isMuted,
        media = _this$props.media,
        seek = _this$props.seek,
        onFullscreenExit = _this$props.onFullscreenExit;

    if (!media) {
      return _ref;
    }

    var shouldShowToolbar = this.state.shouldShowToolbar;
    var currentSource = getMediaSource(media.sourceType);
    var MediaSourceTools = currentSource && currentSource.VideoTools ? currentSource.VideoTools : defaultSourceTools;
    return _react.default.createElement("div", {
      ref: this.refElement,
      className: (0, _classnames.default)('Video', "Video--" + media.sourceType, "Video--" + size)
    }, (0, _jsx2.default)(_VideoBackdrop.default, {
      url: media.thumbnail
    }), (0, _jsx2.default)(_Player.default, {
      enabled: enabled,
      size: size,
      volume: volume,
      isMuted: isMuted,
      media: media,
      seek: seek
    }), isFullscreen && (0, _jsx2.default)(_VideoMouseMoveCapture.default, {
      active: shouldShowToolbar,
      onMouseMove: this.handleMouseMove
    }), isFullscreen && (0, _jsx2.default)(_VideoProgressBar.default, {
      media: media,
      seek: seek
    }), (!isFullscreen || shouldShowToolbar) && (0, _jsx2.default)(_VideoToolbar.default, {
      isFullscreen: isFullscreen,
      onFullscreenEnter: this.handleFullscreenEnter,
      onFullscreenExit: onFullscreenExit
    }, void 0, (0, _jsx2.default)(MediaSourceTools, {
      media: media
    })));
  };

  return Video;
}(_react.default.Component);

Video.propTypes = process.env.NODE_ENV !== "production" ? {
  getMediaSource: _propTypes.default.func.isRequired,
  isFullscreen: _propTypes.default.bool,
  enabled: _propTypes.default.bool,
  size: _propTypes.default.string,
  volume: _propTypes.default.number,
  isMuted: _propTypes.default.bool,
  media: _propTypes.default.object,
  seek: _propTypes.default.number,
  onFullscreenEnter: _propTypes.default.func.isRequired,
  onFullscreenExit: _propTypes.default.func.isRequired
} : {};

var _default = enhance(Video);

exports.default = _default;
//# sourceMappingURL=index.js.map
