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

var _reactMarkdown = require('react-markdown');

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Markdown = function Markdown(_ref) {
  var source = _ref.source;
  return (0, _jsx3.default)(_reactMarkdown2.default, {
    escapeHtml: false,
    source: source
  });
};

Markdown.propTypes = process.env.NODE_ENV !== "production" ? {
  source: _propTypes2.default.string.isRequired
} : {};

exports.default = Markdown;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
