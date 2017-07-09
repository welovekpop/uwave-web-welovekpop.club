'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _isEqualShallow = require('is-equal-shallow');

var _isEqualShallow2 = _interopRequireDefault(_isEqualShallow);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _screenfull = require('screenfull');

var _screenfull2 = _interopRequireDefault(_screenfull);

var _injectMediaSources = require('../../utils/injectMediaSources');

var _injectMediaSources2 = _interopRequireDefault(_injectMediaSources);

var _VideoBackdrop = require('./VideoBackdrop');

var _VideoBackdrop2 = _interopRequireDefault(_VideoBackdrop);

var _VideoProgressBar = require('./VideoProgressBar');

var _VideoProgressBar2 = _interopRequireDefault(_VideoProgressBar);

var _VideoToolbar = require('./VideoToolbar');

var _VideoToolbar2 = _interopRequireDefault(_VideoToolbar);

var _VideoMouseMoveCapture = require('./VideoMouseMoveCapture');

var _VideoMouseMoveCapture2 = _interopRequireDefault(_VideoMouseMoveCapture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec, _class;

var defaultSourceTools = function defaultSourceTools() {
  return null;
};

var _ref = (0, _jsx3.default)('div', {
  className: 'Video'
});

var Video = (_dec = (0, _injectMediaSources2.default)(), _dec(_class = function (_React$Component) {
  (0, _inherits3.default)(Video, _React$Component);

  function Video() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Video);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      shouldShowToolbar: false
    }, _this.handleFullscreenEnter = function () {
      if (_screenfull2.default.enabled) {
        _screenfull2.default.request(_this.element);
      }
      _this.props.onFullscreenEnter();
    }, _this.handleFullscreenChange = function () {
      if (!_screenfull2.default.isFullscreen) {
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
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  Video.prototype.componentDidMount = function componentDidMount() {
    if (_screenfull2.default.enabled) {
      document.documentElement.addEventListener(_screenfull2.default.raw.fullscreenchange, this.handleFullscreenChange);
    }
  };

  Video.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.isFullscreen && !nextProps.isFullscreen && _screenfull2.default.enabled) {
      // Checking for `enabled` here, because our props have probably changed
      // _after_ exiting fullscreen mode (see `this.handleFullscreenChange`).
      // This way we don't double-exit.
      if (_screenfull2.default.isFullscreen) {
        _screenfull2.default.exit();
      }
    }
  };

  Video.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return !(0, _isEqualShallow2.default)(nextProps, this.props);
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

        return _react2.default.createElement(Player, (0, _extends3.default)({
          key: sourceType
        }, props, {
          active: media.sourceType === sourceType
        }));
      }
      return null;
    }).filter(Boolean);

    var currentSource = sources[media.sourceType];
    var MediaSourceTools = currentSource && currentSource.VideoTools ? currentSource.VideoTools : defaultSourceTools;

    return _react2.default.createElement('div', {
      ref: this.refElement,
      className: (0, _classnames2.default)('Video', 'Video--' + media.sourceType, 'Video--' + size)
    }, (0, _jsx3.default)(_VideoBackdrop2.default, {
      url: media.thumbnail
    }), players, isFullscreen && (0, _jsx3.default)(_VideoMouseMoveCapture2.default, {
      active: shouldShowToolbar,
      onMouseMove: this.handleMouseMove
    }), isFullscreen && (0, _jsx3.default)(_VideoProgressBar2.default, {
      media: media,
      seek: seek
    }), (!isFullscreen || shouldShowToolbar) && (0, _jsx3.default)(_VideoToolbar2.default, {
      isFullscreen: isFullscreen,
      onFullscreenEnter: this.handleFullscreenEnter,
      onFullscreenExit: onFullscreenExit
    }, void 0, (0, _jsx3.default)(MediaSourceTools, {
      media: media
    })));
  };

  return Video;
}(_react2.default.Component)) || _class);
exports.default = Video;

Video.propTypes = process.env.NODE_ENV !== "production" ? {
  getAllMediaSources: _propTypes2.default.func.isRequired,
  isFullscreen: _propTypes2.default.bool,
  enabled: _propTypes2.default.bool,
  size: _propTypes2.default.string,
  volume: _propTypes2.default.number,
  isMuted: _propTypes2.default.bool,
  media: _propTypes2.default.object,
  seek: _propTypes2.default.number,
  onFullscreenEnter: _propTypes2.default.func.isRequired,
  onFullscreenExit: _propTypes2.default.func.isRequired
} : {};
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
