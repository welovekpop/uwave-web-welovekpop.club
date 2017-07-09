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

var _reactI18next = require('react-i18next');

var _SongTitle = require('../SongTitle');

var _SongTitle2 = _interopRequireDefault(_SongTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CurrentMedia = function CurrentMedia(_ref) {
  var t = _ref.t,
      className = _ref.className,
      media = _ref.media;
  return (0, _jsx3.default)('div', {
    className: className
  }, void 0, media ? (0, _jsx3.default)(_SongTitle2.default, {
    artist: media.artist,
    title: media.title
  }) : t('booth.empty'));
};

CurrentMedia.propTypes = process.env.NODE_ENV !== "production" ? {
  t: _propTypes2.default.func.isRequired,
  className: _propTypes2.default.string,
  media: _propTypes2.default.shape({
    artist: _propTypes2.default.string.isRequired,
    title: _propTypes2.default.string.isRequired
  })
} : {};

exports.default = (0, _reactI18next.translate)()(CurrentMedia);
//# sourceMappingURL=CurrentMedia.js.map
//# sourceMappingURL=CurrentMedia.js.map
