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

var disableCursor = { cursor: 'none' };
var enableCursor = {};

var MouseMoveCapture = function MouseMoveCapture(_ref) {
  var active = _ref.active,
      onMouseMove = _ref.onMouseMove;
  return (0, _jsx3.default)('div', {
    className: 'Video-overlay Video-capture',
    style: active ? enableCursor : disableCursor,
    onMouseMove: onMouseMove
  });
};

MouseMoveCapture.propTypes = process.env.NODE_ENV !== "production" ? {
  onMouseMove: _propTypes2.default.func.isRequired,
  active: _propTypes2.default.bool
} : {};

exports.default = MouseMoveCapture;
//# sourceMappingURL=VideoMouseMoveCapture.js.map
//# sourceMappingURL=VideoMouseMoveCapture.js.map
