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

var MediaThumbnail = function MediaThumbnail(_ref) {
  var url = _ref.url;
  return (0, _jsx3.default)('div', {
    className: 'MediaListRow-thumb'
  }, void 0, (0, _jsx3.default)('img', {
    className: 'MediaListRow-image',
    src: url,
    alt: ''
  }));
};

MediaThumbnail.propTypes = process.env.NODE_ENV !== "production" ? {
  url: _propTypes2.default.string.isRequired
} : {};

exports.default = MediaThumbnail;
//# sourceMappingURL=MediaThumbnail.js.map
//# sourceMappingURL=MediaThumbnail.js.map
