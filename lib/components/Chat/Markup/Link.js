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

var _truncateUrl = require('truncate-url');

var _truncateUrl2 = _interopRequireDefault(_truncateUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = function Link(_ref) {
  var children = _ref.children,
      href = _ref.href,
      props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'href']);

  return _react2.default.createElement('a', (0, _extends3.default)({
    href: href,
    title: href,
    target: '_blank',
    rel: 'noopener noreferrer'
  }, props), (0, _truncateUrl2.default)(children, 60));
};

Link.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.string.isRequired,
  href: _propTypes2.default.string.isRequired
} : {};

exports.default = Link;
//# sourceMappingURL=Link.js.map
//# sourceMappingURL=Link.js.map
