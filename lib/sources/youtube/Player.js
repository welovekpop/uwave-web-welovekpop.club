"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsx2 = _interopRequireDefault(require("@babel/runtime/helpers/builtin/jsx"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PlayerEmbed = _interopRequireDefault(require("./PlayerEmbed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YouTubePlayer = function YouTubePlayer(_ref) {
  var active = _ref.active,
      className = _ref.className,
      enabled = _ref.enabled,
      mode = _ref.mode,
      media = _ref.media,
      seek = _ref.seek,
      volume = _ref.volume,
      onPlay = _ref.onPlay;
  var modeClass = "src-youtube-Player--" + mode;
  return (0, _jsx2.default)("div", {
    className: (0, _classnames.default)('src-youtube-Player', modeClass, className),
    hidden: !active
  }, void 0, enabled && (0, _jsx2.default)(_PlayerEmbed.default, {
    media: media,
    active: active,
    seek: Math.round(seek),
    volume: volume,
    controllable: mode === 'preview',
    onPlay: onPlay
  }));
};

YouTubePlayer.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes.default.string,
  mode: _propTypes.default.oneOf(['small', 'large', 'preview']),
  active: _propTypes.default.bool.isRequired,
  enabled: _propTypes.default.bool,
  media: _propTypes.default.object,
  seek: _propTypes.default.number,
  volume: _propTypes.default.number,
  onPlay: _propTypes.default.func
} : {};
var _default = YouTubePlayer;
exports.default = _default;
//# sourceMappingURL=Player.js.map
