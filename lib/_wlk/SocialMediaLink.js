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

var _Button = require('material-ui/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SocialMediaLink = function SocialMediaLink(_ref) {
  var href = _ref.href,
      label = _ref.label,
      children = _ref.children;
  return (0, _jsx3.default)('li', {
    className: 'wlk-AboutPage-socialMedia'
  }, void 0, (0, _jsx3.default)(_Button2.default, {
    target: '_blank',
    href: href
  }, void 0, (0, _jsx3.default)('span', {
    className: 'wlk-AboutPage-socialMediaIcon'
  }, void 0, children), label));
};

SocialMediaLink.propTypes = process.env.NODE_ENV !== "production" ? {
  href: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.element.isRequired
} : {};

exports.default = SocialMediaLink;
//# sourceMappingURL=SocialMediaLink.js.map
//# sourceMappingURL=SocialMediaLink.js.map
