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

var _Header = require('../Overlay/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About(_ref) {
  var onCloseOverlay = _ref.onCloseOverlay,
      AboutPanel = _ref.render;
  return (0, _jsx3.default)('div', {
    className: 'About'
  }, void 0, (0, _jsx3.default)(_Header2.default, {
    title: 'About',
    onCloseOverlay: onCloseOverlay,
    direction: 'top'
  }), (0, _jsx3.default)('div', {
    className: 'AppRow AppRow--middle AboutPanel'
  }, void 0, (0, _jsx3.default)(AboutPanel, {})));
};

About.propTypes = process.env.NODE_ENV !== "production" ? {
  onCloseOverlay: _propTypes2.default.func.isRequired,
  render: _propTypes2.default.func.isRequired
} : {};

exports.default = About;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
