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

var timeFormatOptions = { hour: 'numeric', minute: 'numeric' };

var MessageTimestamp = function MessageTimestamp(_ref) {
  var date = _ref.date;
  return (0, _jsx3.default)('time', {
    className: 'ChatMessage-timestamp',
    dateTime: date.toISOString()
  }, void 0, date.toLocaleTimeString([], timeFormatOptions));
};

MessageTimestamp.propTypes = process.env.NODE_ENV !== "production" ? {
  date: _propTypes2.default.instanceOf(Date).isRequired
} : {};

exports.default = MessageTimestamp;
//# sourceMappingURL=MessageTimestamp.js.map
//# sourceMappingURL=MessageTimestamp.js.map
