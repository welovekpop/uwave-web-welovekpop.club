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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Overlay = function Overlay(_ref) {
  var _ref$direction = _ref.direction,
      direction = _ref$direction === undefined ? 'bottom' : _ref$direction,
      children = _ref.children,
      className = _ref.className;
  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('Overlay', 'Overlay--from-' + direction)
  }, void 0, (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('Overlay-body', className)
  }, void 0, children));
};

Overlay.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  direction: _propTypes2.default.string
} : {};

exports.default = Overlay;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
