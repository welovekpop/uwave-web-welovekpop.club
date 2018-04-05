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

var _Tooltip = require('material-ui/Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shortcode = function shortcode(name) {
  return ':' + name + ':';
};
var url = function url(filename) {
  return '/assets/emoji/' + filename;
};

var Emoji = function Emoji(_ref) {
  var name = _ref.name,
      image = _ref.image;
  return (0, _jsx3.default)(_Tooltip2.default, {
    title: shortcode(name),
    placement: 'top'
  }, void 0, (0, _jsx3.default)('span', {
    className: 'Emoji',
    'data-emoji': name
  }, void 0, (0, _jsx3.default)('img', {
    className: 'Emoji-img',
    src: url(image),
    alt: shortcode(name)
  })));
};

Emoji.propTypes = process.env.NODE_ENV !== "production" ? {
  name: _propTypes2.default.string.isRequired,
  image: _propTypes2.default.string.isRequired
} : {};

exports.default = Emoji;
//# sourceMappingURL=Emoji.js.map
//# sourceMappingURL=Emoji.js.map
