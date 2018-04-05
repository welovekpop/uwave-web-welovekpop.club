'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PlayerEmbed = require('./PlayerEmbed');

var _PlayerEmbed2 = _interopRequireDefault(_PlayerEmbed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YouTubePlayer = function YouTubePlayer(_ref) {
  var active = _ref.active,
      className = _ref.className,
      enabled = _ref.enabled,
      mode = _ref.mode,
      media = _ref.media,
      seek = _ref.seek,
      volume = _ref.volume;

  var modeClass = 'src-youtube-Player--' + mode;

  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('src-youtube-Player', modeClass, className),
    hidden: !active
  }, void 0, enabled && (0, _jsx3.default)(_PlayerEmbed2.default, {
    media: media,
    active: active,
    seek: Math.round(seek),
    volume: volume,
    controllable: mode === 'preview'
  }));
};

YouTubePlayer.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  mode: _propTypes2.default.oneOf(['small', 'large', 'preview']),
  active: _propTypes2.default.bool.isRequired,
  enabled: _propTypes2.default.bool,
  media: _propTypes2.default.object,
  seek: _propTypes2.default.number,
  volume: _propTypes2.default.number
} : {};

exports.default = YouTubePlayer;
//# sourceMappingURL=Player.js.map
//# sourceMappingURL=Player.js.map
