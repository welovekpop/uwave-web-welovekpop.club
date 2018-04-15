import _jsx from "@babel/runtime/helpers/builtin/jsx";
import _assertThisInitialized from "@babel/runtime/helpers/builtin/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/builtin/inheritsLoose";
import cx from 'classnames';
import isEqual from 'is-equal-shallow';
import React from 'react';
import PropTypes from 'prop-types';
import screenfull from 'screenfull';
import injectMediaSources from '../../utils/injectMediaSources';
import VideoBackdrop from './VideoBackdrop';
import VideoProgressBar from './VideoProgressBar';
import VideoToolbar from './VideoToolbar';
import MouseMoveCapture from './VideoMouseMoveCapture';
import Player from '../Player';

var defaultSourceTools = function defaultSourceTools() {
  return null;
};

var enhance = injectMediaSources();

var _ref =
/*#__PURE__*/
_jsx("div", {
  className: "Video"
});

var Video =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Video, _React$Component);

  function Video() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this, _this.state = {
      shouldShowToolbar: false
    }, _this.handleFullscreenEnter = function () {
      if (screenfull.enabled) {
        screenfull.request(_this.element);
      }

      _this.props.onFullscreenEnter();
    }, _this.handleFullscreenChange = function () {
      if (!screenfull.isFullscreen) {
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
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = Video.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (screenfull.enabled) {
      screenfull.on('change', this.handleFullscreenChange);
    }
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.isFullscreen && !nextProps.isFullscreen && screenfull.enabled) {
      // Checking for `enabled` here, because our props have probably changed
      // _after_ exiting fullscreen mode (see `this.handleFullscreenChange`).
      // This way we don't double-exit.
      if (screenfull.isFullscreen) {
        screenfull.exit();
      }
    }
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return !isEqual(nextProps, this.props);
  };

  _proto.render = function render() {
    var _props = this.props,
        getMediaSource = _props.getMediaSource,
        isFullscreen = _props.isFullscreen,
        enabled = _props.enabled,
        size = _props.size,
        volume = _props.volume,
        isMuted = _props.isMuted,
        media = _props.media,
        seek = _props.seek,
        onFullscreenExit = _props.onFullscreenExit;

    if (!media) {
      return _ref;
    }

    var shouldShowToolbar = this.state.shouldShowToolbar;
    var currentSource = getMediaSource(media.sourceType);
    var MediaSourceTools = currentSource && currentSource.VideoTools ? currentSource.VideoTools : defaultSourceTools;
    return React.createElement("div", {
      ref: this.refElement,
      className: cx('Video', "Video--" + media.sourceType, "Video--" + size)
    }, _jsx(VideoBackdrop, {
      url: media.thumbnail
    }), _jsx(Player, {
      enabled: enabled,
      size: size,
      volume: volume,
      isMuted: isMuted,
      media: media,
      seek: seek
    }), isFullscreen && _jsx(MouseMoveCapture, {
      active: shouldShowToolbar,
      onMouseMove: this.handleMouseMove
    }), isFullscreen && _jsx(VideoProgressBar, {
      media: media,
      seek: seek
    }), (!isFullscreen || shouldShowToolbar) && _jsx(VideoToolbar, {
      isFullscreen: isFullscreen,
      onFullscreenEnter: this.handleFullscreenEnter,
      onFullscreenExit: onFullscreenExit
    }, void 0, _jsx(MediaSourceTools, {
      media: media
    })));
  };

  return Video;
}(React.Component);

Video.propTypes = process.env.NODE_ENV !== "production" ? {
  getMediaSource: PropTypes.func.isRequired,
  isFullscreen: PropTypes.bool,
  enabled: PropTypes.bool,
  size: PropTypes.string,
  volume: PropTypes.number,
  isMuted: PropTypes.bool,
  media: PropTypes.object,
  seek: PropTypes.number,
  onFullscreenEnter: PropTypes.func.isRequired,
  onFullscreenExit: PropTypes.func.isRequired
} : {};
export default enhance(Video);
//# sourceMappingURL=index.js.map
