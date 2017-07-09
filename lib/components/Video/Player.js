'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _injectMediaSources = require('../../utils/injectMediaSources');

var _injectMediaSources2 = _interopRequireDefault(_injectMediaSources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PreviewPlayer = function PreviewPlayer(_ref) {
  var media = _ref.media,
      _ref$seek = _ref.seek,
      seek = _ref$seek === undefined ? 0 : _ref$seek,
      getMediaSource = _ref.getMediaSource,
      props = (0, _objectWithoutProperties3.default)(_ref, ['media', 'seek', 'getMediaSource']);

  var _getMediaSource = getMediaSource(media.sourceType),
      Player = _getMediaSource.Player;

  return _react2.default.createElement(Player, (0, _extends3.default)({
    enabled: true,
    active: true,
    seek: seek,
    media: media
  }, props));
};

PreviewPlayer.propTypes = process.env.NODE_ENV !== "production" ? {
  media: _propTypes2.default.object.isRequired,
  seek: _propTypes2.default.number,
  getMediaSource: _propTypes2.default.func.isRequired
} : {};

exports.default = (0, _injectMediaSources2.default)()(PreviewPlayer);
//# sourceMappingURL=Player.js.map
//# sourceMappingURL=Player.js.map
