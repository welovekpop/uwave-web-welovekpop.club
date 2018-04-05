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

var _Avatar = require('material-ui/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Position = function Position(_ref) {
  var position = _ref.position;
  return (0, _jsx3.default)(_Avatar2.default, {
    className: 'WaitlistRow-position'
  }, void 0, position);
};

Position.propTypes = process.env.NODE_ENV !== "production" ? {
  position: _propTypes2.default.number.isRequired
} : {};

exports.default = Position;
//# sourceMappingURL=Position.js.map
//# sourceMappingURL=Position.js.map
