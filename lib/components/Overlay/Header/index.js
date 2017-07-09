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

var _Close = require('./Close');

var _Close2 = _interopRequireDefault(_Close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var className = _ref.className,
      title = _ref.title,
      children = _ref.children,
      onCloseOverlay = _ref.onCloseOverlay,
      _ref$direction = _ref.direction,
      direction = _ref$direction === undefined ? 'bottom' : _ref$direction;
  return (0, _jsx3.default)('div', {
    className: (0, _classnames2.default)('OverlayHeader', className)
  }, void 0, (0, _jsx3.default)('div', {
    className: 'OverlayHeader-title'
  }, void 0, title.toUpperCase()), (0, _jsx3.default)('div', {
    className: 'OverlayHeader-content'
  }, void 0, children), (0, _jsx3.default)(_Close2.default, {
    direction: direction,
    className: 'OverlayHeader-close',
    onClose: onCloseOverlay
  }));
};

Header.propTypes = process.env.NODE_ENV !== "production" ? {
  className: _propTypes2.default.string,
  title: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node,
  direction: _propTypes2.default.string,
  onCloseOverlay: _propTypes2.default.func.isRequired
} : {};

exports.default = Header;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
