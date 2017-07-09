'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createEmbedUrl = function createEmbedUrl(sourceID) {
  return ('\n  https://w.soundcloud.com/player/\n  ?url=' + encodeURIComponent('https://api.soundcloud.com/tracks/' + sourceID) + '\n  &color=55B9FF\n  &auto_play=true\n  &hide_related=true\n  &buying=false\n  &liking=false\n  &download=false\n  &sharing=false\n  &show_comments=false\n  &visual=true\n').replace(/\s+/g, '');
};

var PreviewPlayer = function PreviewPlayer(_ref) {
  var media = _ref.media;
  return (0, _jsx3.default)('iframe', {
    title: 'SoundCloud Embed',
    width: '100%',
    height: '240',
    scrolling: 'no',
    frameBorder: 'no',
    src: createEmbedUrl(media.sourceID)
  });
};

PreviewPlayer.propTypes = process.env.NODE_ENV !== "production" ? {
  media: _propTypes2.default.object.isRequired
} : {};

exports.default = PreviewPlayer;
//# sourceMappingURL=PreviewPlayer.js.map
//# sourceMappingURL=PreviewPlayer.js.map
