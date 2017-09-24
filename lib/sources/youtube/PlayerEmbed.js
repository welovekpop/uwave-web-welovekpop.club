'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactYoutube = require('@u-wave/react-youtube');

var _reactYoutube2 = _interopRequireDefault(_reactYoutube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class, _temp2;

var YouTubePlayerEmbed = (_temp2 = _class = function (_React$Component) {
  (0, _inherits3.default)(YouTubePlayerEmbed, _React$Component);

  function YouTubePlayerEmbed() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, YouTubePlayerEmbed);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleYTPause = function (event) {
      if (!_this.props.controllable && _this.props.active) {
        event.target.playVideo();
      }
    }, _this.refPlayer = function (player) {
      _this.player = player;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  YouTubePlayerEmbed.prototype.render = function render() {
    var _props = this.props,
        active = _props.active,
        media = _props.media,
        seek = _props.seek,
        volume = _props.volume,
        controllable = _props.controllable;

    return _react2.default.createElement(_reactYoutube2.default, {
      ref: this.refPlayer,
      video: active ? media.sourceID : null,
      width: '100%',
      height: '100%',
      autoplay: true,
      modestBranding: true,
      volume: volume / 100,
      playbackRate: 1,
      controls: controllable,
      showRelatedVideos: false,
      showInfo: false,
      annotations: false,
      startSeconds: (seek || 0) + (media.start || 0),
      endSeconds: media.end || media.duration,
      onPause: this.handleYTPause
    });
  };

  return YouTubePlayerEmbed;
}(_react2.default.Component), _class.defaultProps = {
  controllable: false
}, _temp2);
exports.default = YouTubePlayerEmbed;

YouTubePlayerEmbed.propTypes = process.env.NODE_ENV !== "production" ? {
  active: _propTypes2.default.bool.isRequired,
  media: _propTypes2.default.object,
  seek: _propTypes2.default.number,
  volume: _propTypes2.default.number,
  controllable: _propTypes2.default.bool
} : {};
//# sourceMappingURL=PlayerEmbed.js.map
//# sourceMappingURL=PlayerEmbed.js.map
