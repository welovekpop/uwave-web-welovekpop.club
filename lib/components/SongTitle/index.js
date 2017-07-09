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

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref2 = (0, _jsx3.default)('span', {
  className: 'SongTitle-separator'
}, void 0, ' \u2013 ');

var SongTitle = function SongTitle(_ref) {
  var className = _ref.className,
      artist = _ref.artist,
      title = _ref.title,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? 'large' : _ref$size;
  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('SongTitle', 'SongTitle--' + size, className),
    title: artist + ' \u2013 ' + title
  }, void 0, (0, _jsx3.default)('span', {
    className: 'SongTitle-artist'
  }, void 0, artist), _ref2, (0, _jsx3.default)('span', {
    className: 'SongTitle-title'
  }, void 0, title));
};

SongTitle.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  artist: _propTypes2.default.string.isRequired,
  title: _propTypes2.default.string.isRequired,
  size: _propTypes2.default.string
} : {};

exports.default = (0, _pure2.default)(SongTitle);
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
