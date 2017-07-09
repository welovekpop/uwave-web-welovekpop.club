import _jsx from 'babel-runtime/helpers/jsx';
import _extends from 'babel-runtime/helpers/extends';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';

var _dec, _class;

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

var defaultSourceTools = function defaultSourceTools() {
  return null;
};

var _ref = _jsx('div', {
  className: 'Video'
});

var Video = (_dec = injectMediaSources(), _dec(_class = function (_React$Component) {
  _inherits(Video, _React$Component);

  function Video() {
    var _temp, _this, _ret;

    _classCallCheck(this, Video);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
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
        _this.setState({ shouldShowToolbar: true });
      }
      _this.timer = setTimeout(_this.handleMouseMoveEnd, 5000);
    }, _this.handleMouseMoveEnd = function () {
      clearTimeout(_this.timer);
      _this.timer = null;
      _this.setState({ shouldShowToolbar: false });
    }, _this.refElement = function (element) {
      _this.element = element;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Video.prototype.componentDidMount = function componentDidMount() {
    if (screenfull.enabled) {
      document.documentElement.addEventListener(screenfull.raw.fullscreenchange, this.handleFullscreenChange);
    }
  };

  Video.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.isFullscreen && !nextProps.isFullscreen && screenfull.enabled) {
      // Checking for `enabled` here, because our props have probably changed
      // _after_ exiting fullscreen mode (see `this.handleFullscreenChange`).
      // This way we don't double-exit.
      if (screenfull.isFullscreen) {
        screenfull.exit();
      }
    }
  };

  Video.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return !isEqual(nextProps, this.props);
  };

  Video.prototype.render = function render() {
    var _props = this.props,
        getAllMediaSources = _props.getAllMediaSources,
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


    var props = {
      enabled: enabled,
      media: media,
      seek: seek,
      mode: size,
      volume: isMuted ? 0 : volume
    };

    var sources = getAllMediaSources();
    var players = Object.keys(sources).map(function (sourceType) {
      if (sources[sourceType].Player) {
        var Player = sources[sourceType].Player;

        return React.createElement(Player, _extends({
          key: sourceType
        }, props, {
          active: media.sourceType === sourceType
        }));
      }
      return null;
    }).filter(Boolean);

    var currentSource = sources[media.sourceType];
    var MediaSourceTools = currentSource && currentSource.VideoTools ? currentSource.VideoTools : defaultSourceTools;

    return React.createElement(
      'div',
      {
        ref: this.refElement,
        className: cx('Video', 'Video--' + media.sourceType, 'Video--' + size)
      },
      _jsx(VideoBackdrop, {
        url: media.thumbnail
      }),
      players,
      isFullscreen && _jsx(MouseMoveCapture, {
        active: shouldShowToolbar,
        onMouseMove: this.handleMouseMove
      }),
      isFullscreen && _jsx(VideoProgressBar, {
        media: media,
        seek: seek
      }),
      (!isFullscreen || shouldShowToolbar) && _jsx(VideoToolbar, {
        isFullscreen: isFullscreen,
        onFullscreenEnter: this.handleFullscreenEnter,
        onFullscreenExit: onFullscreenExit
      }, void 0, _jsx(MediaSourceTools, {
        media: media
      }))
    );
  };

  return Video;
}(React.Component)) || _class);
export { Video as default };
Video.propTypes = process.env.NODE_ENV !== "production" ? {
  getAllMediaSources: PropTypes.func.isRequired,
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
//# sourceMappingURL=index.js.map
